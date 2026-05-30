-- ============================================================
-- 探索页内容管理 - 增量迁移（幂等，可重复执行）
-- 数据库: farm_fertilizer_mall
--
-- 对应 init.sql 中「初始化探索页内容」段落
-- 表结构无变更，仅补全/更新 content_post 种子数据
--
-- 执行方式（任选其一）:
--   1. Navicat / DataGrip: 打开本文件，选中全部执行
--   2. 命令行:
--      mysql -uroot -p farm_fertilizer_mall < upgrade_content_explore.sql
--
-- 说明:
--   - 不会 DROP 表，不会删除已有内容
--   - 按 post_no 唯一键：存在则更新，不存在则插入
--   - 图片字段默认为空数组 []，可在管理后台上传替换
-- ============================================================

USE `farm_fertilizer_mall`;


-- ============================================================
-- 一、确保 content_post 表存在（老库若缺表则创建）
-- ============================================================

CREATE TABLE IF NOT EXISTS `content_post` (
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


-- ============================================================
-- 二、探索页种子数据（轮播 news + 朋友圈 moment）
--    user_id=0 表示官方/后台发布
-- ============================================================

INSERT INTO `content_post`
  (`post_no`, `user_id`, `user_nickname`, `channel`, `content_type`, `title`, `content`, `images`, `location`, `status`, `published_at`)
VALUES
(
  'P001', 0, '肽为农家菌肥', 'news', 'announcement',
  '热烈庆祝农家菌肥商城上线',
  '农家菌肥商城正式上线，欢迎各位农户朋友使用！购买菌肥，享优惠！',
  '[]', NULL, 2, NOW()
),
(
  'P002', 0, '肽为农家菌肥', 'news', 'notice',
  '本月下单领券活动开启，老用户转介绍可叠加福利',
  '活动期内，指定商品支持领券后再下单。若通过老用户分享进入并完成首单，系统会给邀请人与新用户同步发放优惠券。',
  '[]', NULL, 2, NOW()
),
(
  'P003', 0, '肽为农家菌肥', 'news', 'announcement',
  '春耕旺季发货加速，菌肥套装已覆盖 12 个示范村',
  '围绕春耕节点，我们把菌肥产品按作物和施肥阶段重新整理成组合装，方便农户直接下单。',
  '[]', NULL, 2, NOW()
),
(
  'P004', 0, '肽为农家菌肥', 'moment', 'dynamic',
  '客户案例：棚内管理更顺手',
  '客户案例：连续使用后，棚内管理更顺手，作物整体状态也更稳定。以下为一组现场反馈图。',
  '[]', '泉州市·示范棚', 2, NOW()
),
(
  'P005', 0, '肽为农家菌肥', 'moment', 'dynamic',
  '多地示范棚回访记录',
  '多地示范棚回访记录，展示不同场景下的使用反馈。',
  '[]', '漳州市·试验田', 2, DATE_SUB(NOW(), INTERVAL 2 DAY)
)
ON DUPLICATE KEY UPDATE
  `user_id`       = VALUES(`user_id`),
  `user_nickname` = VALUES(`user_nickname`),
  `channel`       = VALUES(`channel`),
  `content_type`  = VALUES(`content_type`),
  `title`         = VALUES(`title`),
  `content`       = VALUES(`content`),
  `location`      = VALUES(`location`),
  `status`        = VALUES(`status`),
  `published_at`  = IF(`published_at` IS NULL, VALUES(`published_at`), `published_at`),
  `updated_at`    = NOW();


-- ============================================================
-- 三、（可选）将旧版 P001/P002 从普通用户改为官方发布者
--    若你库里 post_no 不是 P001~P005，可跳过本节
-- ============================================================

UPDATE `content_post`
SET `user_id` = 0,
    `user_nickname` = '肽为农家菌肥',
    `updated_at` = NOW()
WHERE `post_no` IN ('P001', 'P002', 'P003', 'P004', 'P005')
  AND (`user_id` <> 0 OR `user_nickname` IS NULL OR `user_nickname` = '菌肥用户');


-- ============================================================
-- 完成
-- ============================================================
SELECT 'upgrade_content_explore.sql 执行完成' AS result;
