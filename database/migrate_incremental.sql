-- ============================================================
-- 农家菌肥商城 - 增量迁移脚本（幂等，可重复执行）
-- 数据库: farm_fertilizer_mall
--
-- 执行方式（任选其一）:
--   1. Navicat / DataGrip: 打开本文件，选中全部执行
--   2. 命令行:
--      mysql -uroot -p farm_fertilizer_mall < migrate_incremental.sql
--
-- 说明:
--   - 不会 DROP 任何表，不会清空数据
--   - CREATE TABLE IF NOT EXISTS / INSERT IGNORE 可重复执行
--   - ALTER 部分通过 information_schema 判断，已存在则跳过
-- ============================================================

USE `farm_fertilizer_mall`;


-- ============================================================
-- 一、微信登录（sys_user 增加 openid，phone 改可空）
-- ============================================================

-- 1.1 增加 openid 字段
SET @exists_openid := (
  SELECT COUNT(*) FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'sys_user' AND COLUMN_NAME = 'openid'
);
SET @sql_openid := IF(
  @exists_openid = 0,
  'ALTER TABLE `sys_user` ADD COLUMN `openid` VARCHAR(64) DEFAULT NULL COMMENT ''微信openid'' AFTER `phone`',
  'SELECT 1'
);
PREPARE s1 FROM @sql_openid; EXECUTE s1; DEALLOCATE PREPARE s1;

-- 1.2 phone 改为可空
ALTER TABLE `sys_user`
  MODIFY COLUMN `phone` VARCHAR(20) DEFAULT NULL COMMENT '手机号';

-- 1.3 openid 唯一索引
SET @exists_uk_openid := (
  SELECT COUNT(*) FROM information_schema.STATISTICS
  WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'sys_user' AND `INDEX_NAME` = 'uk_openid'
);
SET @sql_uk_openid := IF(
  @exists_uk_openid = 0,
  'ALTER TABLE `sys_user` ADD UNIQUE KEY `uk_openid` (`openid`)',
  'SELECT 1'
);
PREPARE s2 FROM @sql_uk_openid; EXECUTE s2; DEALLOCATE PREPARE s2;


-- ============================================================
-- 二、兑换码功能 - 钱包增加包装费抵扣字段
-- ============================================================

SET @exists_pkg_credit := (
  SELECT COUNT(*) FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'user_wallet' AND COLUMN_NAME = 'packaging_credit'
);
SET @sql_pkg_credit := IF(
  @exists_pkg_credit = 0,
  'ALTER TABLE `user_wallet` ADD COLUMN `packaging_credit` DECIMAL(10,2) DEFAULT 0.00 COMMENT ''包装费抵扣余额'' AFTER `freight_subsidy`',
  'SELECT 1'
);
PREPARE s3 FROM @sql_pkg_credit; EXECUTE s3; DEALLOCATE PREPARE s3;


-- ============================================================
-- 三、兑换码功能 - 新建 redemption_code 表
-- ============================================================

CREATE TABLE IF NOT EXISTS `redemption_code` (
  `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `code` VARCHAR(32) NOT NULL COMMENT '兑换码',
  `batch_no` VARCHAR(32) DEFAULT NULL COMMENT '批次号',
  `freight_amount` DECIMAL(10,2) DEFAULT 0.00 COMMENT '运费补贴(元)',
  `packaging_amount` DECIMAL(10,2) DEFAULT 0.00 COMMENT '包装费抵扣(元)',
  `points_amount` BIGINT DEFAULT 0 COMMENT '积分奖励',
  `status` TINYINT DEFAULT 1 COMMENT '状态:1未使用 2已使用 3已过期 4已禁用',
  `user_id` BIGINT DEFAULT NULL COMMENT '兑换用户ID',
  `redeemed_at` DATETIME DEFAULT NULL COMMENT '兑换时间',
  `expires_at` DATETIME DEFAULT NULL COMMENT '过期时间',
  `remark` VARCHAR(255) DEFAULT NULL COMMENT '备注',
  `created_by` BIGINT DEFAULT NULL COMMENT '创建管理员ID',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY `uk_code` (`code`),
  KEY `idx_batch_no` (`batch_no`),
  KEY `idx_status` (`status`),
  KEY `idx_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='兑换码表';


-- ============================================================
-- 四、系统配置补全（缺失才插入，不覆盖已有值）
-- ============================================================

INSERT IGNORE INTO `sys_config`
  (`config_key`, `config_value`, `config_type`, `config_name`, `config_group`, `sort_order`, `remark`)
VALUES
('product.points.rate', '10', 'number', '积分兑换比例', 'points', 1, '1元等于多少积分'),
('product.package.blue_bucket_kg', '25', 'number', '蓝桶规格(kg)', 'package', 5, '每个蓝桶多少公斤'),
('product.package.ton_bucket_kg', '1000', 'number', '吨桶规格(kg)', 'package', 6, '每个吨桶多少公斤'),
('product.package.blue_bucket_min_count', '40', 'number', '蓝桶配送起送桶数', 'package', 7, '蓝桶配送最低桶数'),
('trial.product.name', '农家菌肥', 'string', '试用产品名称', 'trial', 2, '试用预约产品名'),
('trial.product.subtitle', '绿色生态，提质增产，提升地力', 'string', '试用产品描述', 'trial', 3, '试用预约产品描述'),
('trial.service_points', '["漳州岩溪","厦门湖里","泉州丰泽"]', 'json', '服务网点列表', 'trial', 1, '试用服务网点');


-- ============================================================
-- 五、历史数据修复（可选）
-- ============================================================

UPDATE `pickup_order`
SET `created_at` = IFNULL(`created_at`, NOW()),
    `updated_at` = IFNULL(`updated_at`, NOW())
WHERE `created_at` IS NULL OR `updated_at` IS NULL;


-- ============================================================
-- 完成
-- ============================================================
SELECT 'migrate_incremental.sql 执行完成' AS result;
