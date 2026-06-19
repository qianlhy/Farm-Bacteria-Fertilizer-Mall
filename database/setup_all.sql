-- ============================================================
-- 农家菌肥商城 - 一键重建脚本（最终版）
-- 数据库: farm_fertilizer_mall
--
-- 作用:
--   1. 清理上一次导入残留的所有表（DROP TABLE）
--   2. 重新创建全部表结构
--   3. 写入正确的初始化数据（管理员可登录、起送量100Kg、25L桶等）
--
-- 执行方式:
--   - 在 Navicat 中双击选中 farm_fertilizer_mall 库 -> 运行SQL文件 -> 选本文件
--   - 或宝塔 phpMyAdmin / 数据库“导入”功能选本文件
--
-- 说明:
--   - 本脚本可重复执行，每次都会得到一致、干净的结果
--   - 管理员账号: admin / admin123
-- ============================================================

CREATE DATABASE IF NOT EXISTS `farm_fertilizer_mall` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `farm_fertilizer_mall`;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ------------------------------------------------------------
-- 一、清理旧表（清除上一次导入的残留）
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `admin_user`;
DROP TABLE IF EXISTS `agri_crop`;
DROP TABLE IF EXISTS `content_comment`;
DROP TABLE IF EXISTS `content_post`;
DROP TABLE IF EXISTS `group_order`;
DROP TABLE IF EXISTS `partner_application`;
DROP TABLE IF EXISTS `pickup_order`;
DROP TABLE IF EXISTS `points_log`;
DROP TABLE IF EXISTS `recharge_record`;
DROP TABLE IF EXISTS `redemption_code`;
DROP TABLE IF EXISTS `sys_config`;
DROP TABLE IF EXISTS `sys_user`;
DROP TABLE IF EXISTS `trial_booking`;
DROP TABLE IF EXISTS `user_wallet`;

-- ------------------------------------------------------------
-- 二、创建表结构
-- ------------------------------------------------------------

-- 1. 用户表
CREATE TABLE `sys_user` (
  `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
  `phone` VARCHAR(20) DEFAULT NULL COMMENT '手机号',
  `openid` VARCHAR(64) DEFAULT NULL COMMENT '微信openid',
  `nickname` VARCHAR(50) DEFAULT NULL COMMENT '昵称',
  `avatar` VARCHAR(255) DEFAULT NULL COMMENT '头像',
  `license_plate` VARCHAR(20) DEFAULT NULL COMMENT '车牌号',
  `user_type` TINYINT DEFAULT 1 COMMENT '用户类型:1普通 2合伙人',
  `status` TINYINT DEFAULT 1 COMMENT '状态:1正常 0禁用',
  `invite_code` VARCHAR(20) DEFAULT NULL COMMENT '邀请码',
  `invited_by` BIGINT DEFAULT NULL COMMENT '邀请人ID',
  `total_recharge_kg` DECIMAL(12,2) DEFAULT 0.00 COMMENT '累计充值(kg)',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `deleted` TINYINT DEFAULT 0 COMMENT '删除标记',
  UNIQUE KEY `uk_phone` (`phone`),
  UNIQUE KEY `uk_openid` (`openid`),
  KEY `idx_invite_code` (`invite_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';

-- 2. 用户钱包表
CREATE TABLE `user_wallet` (
  `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` BIGINT NOT NULL COMMENT '用户ID',
  `fertilizer_balance` DECIMAL(12,2) DEFAULT 0.00 COMMENT '化肥余额(kg)',
  `coupon_balance` DECIMAL(10,2) DEFAULT 0.00 COMMENT '优惠券余额',
  `freight_subsidy` DECIMAL(10,2) DEFAULT 0.00 COMMENT '运费补贴',
  `packaging_credit` DECIMAL(10,2) DEFAULT 0.00 COMMENT '包装费抵扣余额',
  `points_balance` BIGINT DEFAULT 0 COMMENT '积分余额',
  `total_points_earned` BIGINT DEFAULT 0 COMMENT '累计获得积分',
  `total_points_used` BIGINT DEFAULT 0 COMMENT '累计使用积分',
  `version` INT DEFAULT 0 COMMENT '乐观锁版本',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY `uk_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户钱包表';

-- 3. 充值记录表
CREATE TABLE `recharge_record` (
  `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `order_no` VARCHAR(50) NOT NULL COMMENT '订单号',
  `user_id` BIGINT NOT NULL COMMENT '用户ID',
  `product_key` VARCHAR(50) DEFAULT NULL COMMENT '产品标识',
  `product_name` VARCHAR(100) DEFAULT NULL COMMENT '产品名称',
  `quantity` INT DEFAULT 1 COMMENT '数量(份)',
  `unit_original_price` DECIMAL(10,2) DEFAULT NULL COMMENT '原价',
  `discount_rate` DECIMAL(5,4) DEFAULT NULL COMMENT '折扣率',
  `paid_price` DECIMAL(10,2) DEFAULT NULL COMMENT '实付金额',
  `total_kg` DECIMAL(12,2) DEFAULT NULL COMMENT '获得总量(kg)',
  `points_awarded` BIGINT DEFAULT 0 COMMENT '奖励积分',
  `payment_method` VARCHAR(20) DEFAULT 'cash' COMMENT '支付方式:cash/points',
  `status` TINYINT DEFAULT 1 COMMENT '状态:1待支付 2已支付',
  `paid_at` DATETIME DEFAULT NULL COMMENT '支付时间',
  `remark` VARCHAR(255) DEFAULT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted` TINYINT DEFAULT 0 COMMENT '删除标记',
  UNIQUE KEY `uk_order_no` (`order_no`),
  KEY `idx_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='充值记录表';

-- 4. 提货订单表
CREATE TABLE `pickup_order` (
  `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `order_no` VARCHAR(50) NOT NULL COMMENT '订单号',
  `user_id` BIGINT NOT NULL COMMENT '用户ID',
  `status` TINYINT DEFAULT 1 COMMENT '状态:1待确认 2打包中 3已发货 4已收货 5已取消',
  `pickup_type` VARCHAR(20) DEFAULT 'transfer' COMMENT '提货类型:transfer转让 delivery送货',
  `package_type` VARCHAR(20) DEFAULT NULL COMMENT '包装类型:blue_bucket ton_bucket',
  `package_new_or_used` VARCHAR(10) DEFAULT 'new' COMMENT 'new二手',
  `package_price` DECIMAL(10,2) DEFAULT 0 COMMENT '包装价格',
  `package_points` INT DEFAULT 0 COMMENT '包装积分',
  `total_kg` DECIMAL(12,2) DEFAULT 0 COMMENT '总重量(kg)',
  `freight_per_kg` DECIMAL(8,4) DEFAULT 0 COMMENT '每公斤运费',
  `total_freight` DECIMAL(10,2) DEFAULT 0 COMMENT '总运费',
  `freight_payment` VARCHAR(20) DEFAULT 'cash' COMMENT '运费支付方式',
  `freight_subsidy_used` DECIMAL(10,2) DEFAULT 0 COMMENT '运费补贴使用',
  `pickup_fee` DECIMAL(10,2) DEFAULT 0 COMMENT '提货费用',
  `total_amount` DECIMAL(10,2) DEFAULT 0 COMMENT '总金额',
  `receiver_name` VARCHAR(50) DEFAULT NULL COMMENT '收货人',
  `receiver_phone` VARCHAR(20) DEFAULT NULL COMMENT '联系电话',
  `receiver_address` VARCHAR(255) DEFAULT NULL COMMENT '收货地址',
  `delivery_location` VARCHAR(255) DEFAULT NULL COMMENT '送货地点',
  `remark` VARCHAR(255) DEFAULT NULL,
  `confirmed_at` DATETIME DEFAULT NULL COMMENT '打包时间',
  `shipped_at` DATETIME DEFAULT NULL COMMENT '发货时间',
  `completed_at` DATETIME DEFAULT NULL COMMENT '收货时间',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted` TINYINT DEFAULT 0 COMMENT '删除标记',
  UNIQUE KEY `uk_order_no` (`order_no`),
  KEY `idx_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='提货订单表';

-- 5. 试用预约表
CREATE TABLE `trial_booking` (
  `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `booking_no` VARCHAR(50) NOT NULL COMMENT '预约号',
  `user_id` BIGINT NOT NULL COMMENT '用户ID',
  `product_name` VARCHAR(100) DEFAULT NULL COMMENT '产品名称',
  `service_point` VARCHAR(100) DEFAULT NULL COMMENT '服务点',
  `contact_name` VARCHAR(50) DEFAULT NULL COMMENT '联系人',
  `contact_phone` VARCHAR(20) DEFAULT NULL COMMENT '联系电话',
  `address` VARCHAR(255) DEFAULT NULL COMMENT '地址',
  `receiver_name` VARCHAR(50) DEFAULT NULL COMMENT '收货人',
  `receiver_phone` VARCHAR(20) DEFAULT NULL COMMENT '收货电话',
  `latitude` DECIMAL(10,6) DEFAULT NULL COMMENT '纬度',
  `longitude` DECIMAL(10,6) DEFAULT NULL COMMENT '经度',
  `status` TINYINT DEFAULT 1 COMMENT '状态:1待确认 2已确认 3已完成 4已取消 5资料待填',
  `remark` VARCHAR(255) DEFAULT NULL,
  `confirmed_at` DATETIME DEFAULT NULL,
  `completed_at` DATETIME DEFAULT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY `uk_booking_no` (`booking_no`),
  KEY `idx_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='试用预约表';

-- 6. 内容发布表
CREATE TABLE `content_post` (
  `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `post_no` VARCHAR(50) NOT NULL COMMENT '帖子编号',
  `user_id` BIGINT NOT NULL COMMENT '用户ID',
  `user_nickname` VARCHAR(50) DEFAULT NULL COMMENT '用户昵称',
  `channel` VARCHAR(20) DEFAULT 'moment' COMMENT '频道:news/moment',
  `content_type` VARCHAR(20) DEFAULT 'dynamic' COMMENT '内容类型',
  `title` VARCHAR(200) DEFAULT NULL COMMENT '标题',
  `content` TEXT COMMENT '正文内容',
  `images` TEXT COMMENT '图片(JSON数组)',
  `video_url` VARCHAR(500) DEFAULT NULL COMMENT '视频URL',
  `video_cover` VARCHAR(500) DEFAULT NULL COMMENT '视频封面',
  `location` VARCHAR(100) DEFAULT NULL COMMENT '位置',
  `latitude` DECIMAL(10,6) DEFAULT NULL,
  `longitude` DECIMAL(10,6) DEFAULT NULL,
  `view_count` INT DEFAULT 0 COMMENT '浏览数',
  `like_count` INT DEFAULT 0 COMMENT '点赞数',
  `comment_count` INT DEFAULT 0 COMMENT '评论数',
  `share_count` INT DEFAULT 0 COMMENT '分享数',
  `status` TINYINT DEFAULT 1 COMMENT '状态:1待审核 2已发布 3已拒绝 4已删除',
  `audit_remark` VARCHAR(255) DEFAULT NULL,
  `audit_at` DATETIME DEFAULT NULL,
  `auditor_id` BIGINT DEFAULT NULL,
  `published_at` DATETIME DEFAULT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted` TINYINT DEFAULT 0,
  UNIQUE KEY `uk_post_no` (`post_no`),
  KEY `idx_user_id` (`user_id`),
  KEY `idx_channel` (`channel`),
  KEY `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='内容发布表';

-- 7. 内容评论表
CREATE TABLE `content_comment` (
  `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `post_id` BIGINT NOT NULL COMMENT '帖子ID',
  `user_id` BIGINT NOT NULL COMMENT '用户ID',
  `user_nickname` VARCHAR(50) DEFAULT NULL COMMENT '用户昵称',
  `content` VARCHAR(500) NOT NULL COMMENT '评论内容',
  `parent_id` BIGINT DEFAULT NULL COMMENT '父评论ID',
  `like_count` INT DEFAULT 0 COMMENT '点赞数',
  `status` TINYINT DEFAULT 1 COMMENT '状态',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted` TINYINT DEFAULT 0,
  KEY `idx_post_id` (`post_id`),
  KEY `idx_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='内容评论表';

-- 8. 积分日志表
CREATE TABLE `points_log` (
  `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` BIGINT NOT NULL COMMENT '用户ID',
  `type` VARCHAR(20) DEFAULT 'earn' COMMENT '类型:earn获取 use使用',
  `change_amount` BIGINT DEFAULT 0 COMMENT '变动数量',
  `balance_after` BIGINT DEFAULT 0 COMMENT '变动后余额',
  `source` VARCHAR(50) DEFAULT NULL COMMENT '来源',
  `biz_type` VARCHAR(50) DEFAULT NULL COMMENT '业务类型',
  `biz_id` VARCHAR(50) DEFAULT NULL COMMENT '业务ID',
  `remark` VARCHAR(255) DEFAULT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted` TINYINT DEFAULT 0,
  KEY `idx_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='积分日志表';

-- 9. 合伙人申请表
CREATE TABLE `partner_application` (
  `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` BIGINT DEFAULT NULL COMMENT '用户ID',
  `name` VARCHAR(50) NOT NULL COMMENT '姓名',
  `phone` VARCHAR(20) NOT NULL COMMENT '电话',
  `city` VARCHAR(100) DEFAULT NULL COMMENT '城市',
  `partner_type` VARCHAR(20) DEFAULT 'regional' COMMENT '类型:light轻代理 general总代理 company公司合伙人',
  `status` TINYINT DEFAULT 1 COMMENT '状态:1待处理 2合作中 3已拒绝',
  `remark` VARCHAR(255) DEFAULT NULL COMMENT '备注',
  `handled_at` DATETIME DEFAULT NULL COMMENT '处理时间',
  `handled_by` BIGINT DEFAULT NULL COMMENT '处理人',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY `idx_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='合伙人申请表';

-- 10. 团购核销表
CREATE TABLE `group_order` (
  `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `order_no` VARCHAR(50) NOT NULL COMMENT '订单号',
  `platform` VARCHAR(50) DEFAULT NULL COMMENT '平台',
  `user_id` BIGINT NOT NULL COMMENT '用户ID',
  `amount` DECIMAL(10,2) DEFAULT NULL COMMENT '金额',
  `status` TINYINT DEFAULT 1 COMMENT '状态',
  `verified_at` DATETIME DEFAULT NULL COMMENT '核销时间',
  `verified_by` BIGINT DEFAULT NULL COMMENT '核销人',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY `uk_order_no` (`order_no`),
  KEY `idx_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='团购核销表';

-- 11. 兑换码表
CREATE TABLE `redemption_code` (
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

-- 12. 管理员表
CREATE TABLE `admin_user` (
  `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) NOT NULL COMMENT '用户名',
  `password` VARCHAR(255) NOT NULL COMMENT '密码',
  `real_name` VARCHAR(50) DEFAULT NULL COMMENT '真实姓名',
  `role` VARCHAR(20) DEFAULT 'admin' COMMENT '角色',
  `status` TINYINT DEFAULT 1 COMMENT '状态:1正常 0禁用',
  `last_login_at` DATETIME DEFAULT NULL COMMENT '最后登录时间',
  `last_login_ip` VARCHAR(50) DEFAULT NULL COMMENT '最后登录IP',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY `uk_username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='管理员表';

-- 13. 系统配置表
CREATE TABLE `sys_config` (
  `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `config_key` VARCHAR(100) NOT NULL COMMENT '配置键',
  `config_value` TEXT COMMENT '配置值',
  `config_type` VARCHAR(20) DEFAULT 'string' COMMENT '类型:string/number/json',
  `config_name` VARCHAR(100) DEFAULT NULL COMMENT '配置名称',
  `config_group` VARCHAR(50) DEFAULT NULL COMMENT '配置分组',
  `sort_order` INT DEFAULT 0 COMMENT '排序',
  `remark` VARCHAR(255) DEFAULT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY `uk_config_key` (`config_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='系统配置表';

-- 14. 农业作物表
CREATE TABLE `agri_crop` (
  `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
  `name` VARCHAR(50) NOT NULL COMMENT '作物名称',
  `cover` VARCHAR(500) DEFAULT NULL COMMENT '列表封面图',
  `header_image` VARCHAR(500) DEFAULT NULL COMMENT '详情页头图',
  `title` VARCHAR(100) DEFAULT NULL COMMENT '详情标题',
  `summary` VARCHAR(255) DEFAULT NULL COMMENT '列表副标题/简介',
  `body` TEXT COMMENT '详情正文',
  `report_name` VARCHAR(100) DEFAULT NULL COMMENT '试验报告文件名',
  `pdf_url` VARCHAR(500) DEFAULT NULL COMMENT '试验报告PDF地址',
  `sort_order` INT DEFAULT 0 COMMENT '排序(越小越前)',
  `status` TINYINT DEFAULT 1 COMMENT '状态:1上架 0下架',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted` TINYINT DEFAULT 0 COMMENT '删除标记',
  KEY `idx_status_sort` (`status`, `sort_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='农业作物表';

-- ------------------------------------------------------------
-- 三、初始化数据
-- ------------------------------------------------------------

-- 管理员 (账号: admin  密码: admin123，BCrypt 已校验可用)
INSERT INTO `admin_user` (`id`, `username`, `password`, `real_name`, `role`, `status`) VALUES
(1, 'admin', '$2a$10$kmjlFJymcZZAH/b/Z7qoK.obkoCQMQey3utzQQQ0Ip3LvV5h858Y2', '超级管理员', 'super', 1);

-- 演示用户
INSERT INTO `sys_user` (`id`, `phone`, `nickname`, `license_plate`, `user_type`, `invite_code`, `total_recharge_kg`) VALUES
(1, '13860179716', '菌肥用户', '闽AH7627', 1, 'DEMO1234', 2800.00);

INSERT INTO `user_wallet` (`user_id`, `fertilizer_balance`, `coupon_balance`, `freight_subsidy`, `points_balance`, `total_points_earned`, `total_points_used`) VALUES
(1, 2800.00, 180.00, 180.00, 12000, 12000, 0);

-- 系统配置（起送量已设为 100Kg）
INSERT INTO `sys_config` (`config_key`, `config_value`, `config_type`, `config_name`, `config_group`, `sort_order`, `remark`) VALUES
('product.recharge.name', '1吨农家菌肥', 'string', '产品名称', 'product', 1, '充值产品名称'),
('product.recharge.original_price', '1400', 'number', '原价(元/吨)', 'product', 2, '每吨原价'),
('product.recharge.discount_rate', '0.85', 'number', '折扣率', 'product', 3, '折扣率，0.85=85折'),
('product.recharge.amount_kg', '1000', 'number', '每份数量(kg)', 'product', 4, '每份多少公斤'),
('product.delivery.min_kg', '100', 'number', '最低起送量(kg)', 'delivery', 1, '送货最低起送量'),
('product.delivery.freight_per_kg', '0.1', 'number', '每公斤运费(元)', 'delivery', 2, '送货每公斤运费'),
('product.package.blue_bucket_new', '35', 'number', '25L桶新桶价格', 'package', 1, '新25L桶价格'),
('product.package.blue_bucket_used', '15', 'number', '25L桶旧桶价格', 'package', 2, '旧25L桶价格'),
('product.package.ton_bucket_new', '700', 'number', '吨桶新桶价格', 'package', 3, '新吨桶价格'),
('product.package.ton_bucket_used', '300', 'number', '吨桶旧桶价格', 'package', 4, '旧吨桶价格'),
('product.points.rate', '10', 'number', '积分兑换比例', 'points', 1, '1元等于多少积分'),
('product.package.blue_bucket_kg', '25', 'number', '25L桶规格(kg)', 'package', 5, '每个25L桶多少公斤'),
('product.package.ton_bucket_kg', '1000', 'number', '吨桶规格(kg)', 'package', 6, '每个吨桶多少公斤'),
('product.package.blue_bucket_min_count', '4', 'number', '25L桶配送起送桶数', 'package', 7, '25L桶配送最低桶数'),
('trial.product.name', '农家菌肥', 'string', '试用产品名称', 'trial', 2, '试用预约产品名'),
('trial.product.subtitle', '绿色生态，提质增产，提升地力', 'string', '试用产品描述', 'trial', 3, '试用预约产品描述'),
('trial.service_points', '["漳州岩溪","厦门湖里","泉州丰泽"]', 'json', '服务网点列表', 'trial', 1, '试用服务网点');

-- 探索页内容（轮播 + 朋友圈动态，图片可在后台替换）
INSERT INTO `content_post` (`post_no`, `user_id`, `user_nickname`, `channel`, `content_type`, `title`, `content`, `images`, `location`, `status`, `published_at`) VALUES
('P001', 0, '肽为农家菌肥', 'news', 'announcement', '热烈庆祝农家菌肥商城上线', '农家菌肥商城正式上线，欢迎各位农户朋友使用！购买菌肥，享优惠！', '[]', NULL, 2, NOW()),
('P002', 0, '肽为农家菌肥', 'news', 'notice', '本月下单领券活动开启，老用户转介绍可叠加福利', '活动期内，指定商品支持领券后再下单。若通过老用户分享进入并完成首单，系统会给邀请人与新用户同步发放优惠券。', '[]', NULL, 2, NOW()),
('P003', 0, '肽为农家菌肥', 'news', 'announcement', '春耕旺季发货加速，菌肥套装已覆盖 12 个示范村', '围绕春耕节点，我们把菌肥产品按作物和施肥阶段重新整理成组合装，方便农户直接下单。', '[]', NULL, 2, NOW()),
('P004', 0, '肽为农家菌肥', 'moment', 'dynamic', '客户案例：棚内管理更顺手', '客户案例：连续使用后，棚内管理更顺手，作物整体状态也更稳定。以下为一组现场反馈图。', '[]', '泉州市·示范棚', 2, NOW()),
('P005', 0, '肽为农家菌肥', 'moment', 'dynamic', '多地示范棚回访记录', '多地示范棚回访记录，展示不同场景下的使用反馈。', '[]', '漳州市·试验田', 2, DATE_SUB(NOW(), INTERVAL 2 DAY));

-- 农业作物（封面/头图/PDF 可在后台「农业作物」中替换）
INSERT INTO `agri_crop` (`name`, `cover`, `header_image`, `title`, `summary`, `body`, `report_name`, `pdf_url`, `sort_order`, `status`) VALUES
('番茄', '', '', '番茄', '菌肥在番茄上的应用与试验效果', '番茄试验内容整理中，将展示施用农家菌肥后的长势、产量与品质对比数据。', '番茄试验报告.pdf', '', 1, 1),
('黄瓜', '', '', '黄瓜', '菌肥在黄瓜上的应用与试验效果', '黄瓜试验内容整理中，将展示施用农家菌肥后的长势、产量与品质对比数据。', '黄瓜试验报告.pdf', '', 2, 1),
('辣椒', '', '', '辣椒', '菌肥在辣椒上的应用与试验效果', '辣椒试验内容整理中，将展示施用农家菌肥后的长势、产量与品质对比数据。', '辣椒试验报告.pdf', '', 3, 1),
('柑橘', '', '', '柑橘', '菌肥在柑橘上的应用与试验效果', '柑橘试验内容整理中，将展示施用农家菌肥后的长势、产量与品质对比数据。', '柑橘试验报告.pdf', '', 4, 1);

SET FOREIGN_KEY_CHECKS = 1;

-- ============================================================
-- 完成：管理员 admin / admin123
-- ============================================================
SELECT 'setup_all.sql 执行完成' AS result;
