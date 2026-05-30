-- ============================================================
-- 探索页演示数据（含图片 + 视频）
-- 数据库: farm_fertilizer_mall
-- 幂等：按 post_no 存在则更新，不存在则插入
--
-- 执行:
--   mysql -uroot -p farm_fertilizer_mall < upgrade_content_explore_demo.sql
--
-- 说明:
--   1. 图片/视频使用公网 HTTPS 演示地址，开发工具可直接预览
--   2. 正式上线前建议在管理后台重新上传，替换为自有域名资源
--   3. 小程序需在微信后台配置 downloadFile 合法域名（如 images.unsplash.com）
-- ============================================================

USE `farm_fertilizer_mall`;

-- 演示资源地址（可整段替换为自己的 uploads 地址）
-- 例: http://localhost:8080/uploads/20260525/xxx.jpg
SET @img_field   = 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80';
SET @img_green   = 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80';
SET @img_farm    = 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80';
SET @img_soil    = 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80';
SET @img_harvest = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80';
SET @img_coupon  = 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80';
SET @video_demo  = 'https://www.w3schools.com/html/mov_bbb.mp4';
SET @video_cover = 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80';


-- ============================================================
-- 一、轮播资讯（news）— 带封面图 + 1 条视频资讯
-- ============================================================

INSERT INTO `content_post`
  (`post_no`, `user_id`, `user_nickname`, `channel`, `content_type`, `title`, `content`, `images`, `video_url`, `video_cover`, `location`, `status`, `published_at`)
VALUES
(
  'P001', 0, '肽为农家菌肥', 'news', 'announcement',
  '热烈庆祝农家菌肥商城上线',
  '农家菌肥商城正式上线，欢迎各位农户朋友使用！购买菌肥，享优惠！',
  JSON_ARRAY(@img_field),
  NULL, NULL, NULL, 2, NOW()
),
(
  'P002', 0, '肽为农家菌肥', 'news', 'notice',
  '本月下单领券活动开启，老用户转介绍可叠加福利',
  '活动期内，指定商品支持领券后再下单。若通过老用户分享进入并完成首单，系统会给邀请人与新用户同步发放优惠券。',
  JSON_ARRAY(@img_coupon),
  NULL, NULL, NULL, 2, DATE_SUB(NOW(), INTERVAL 1 HOUR)
),
(
  'P003', 0, '肽为农家菌肥', 'news', 'announcement',
  '春耕旺季发货加速，菌肥套装已覆盖 12 个示范村',
  '围绕春耕节点，我们把菌肥产品按作物和施肥阶段重新整理成组合装，方便农户直接下单，也便于服务团队做更有针对性的回访。',
  JSON_ARRAY(@img_farm, @img_harvest),
  NULL, NULL, NULL, 2, DATE_SUB(NOW(), INTERVAL 3 HOUR)
),
(
  'P006', 0, '肽为农家菌肥', 'news', 'video',
  '示范棚现场使用视频：施肥后一周回访记录',
  '本条为视频资讯示例，展示示范棚内菌肥使用过程及阶段性作物状态，点击可播放完整视频。',
  JSON_ARRAY(),
  @video_demo, @video_cover, NULL, 2, DATE_SUB(NOW(), INTERVAL 6 HOUR)
)
ON DUPLICATE KEY UPDATE
  `user_id`       = VALUES(`user_id`),
  `user_nickname` = VALUES(`user_nickname`),
  `channel`       = VALUES(`channel`),
  `content_type`  = VALUES(`content_type`),
  `title`         = VALUES(`title`),
  `content`       = VALUES(`content`),
  `images`        = VALUES(`images`),
  `video_url`     = VALUES(`video_url`),
  `video_cover`   = VALUES(`video_cover`),
  `location`      = VALUES(`location`),
  `status`        = VALUES(`status`),
  `published_at`  = VALUES(`published_at`),
  `updated_at`    = NOW();


-- ============================================================
-- 二、朋友圈动态（moment）— 6 图 / 9 图 / 视频
-- ============================================================

INSERT INTO `content_post`
  (`post_no`, `user_id`, `user_nickname`, `channel`, `content_type`, `title`, `content`, `images`, `video_url`, `video_cover`, `location`, `status`, `published_at`)
VALUES
(
  'P004', 0, '肽为农家菌肥', 'moment', 'dynamic',
  '客户案例：棚内管理更顺手',
  '客户案例：连续使用后，棚内管理更顺手，作物整体状态也更稳定。以下为一组现场反馈图（6 张）。',
  JSON_ARRAY(@img_green, @img_field, @img_farm, @img_soil, @img_harvest, @img_green),
  NULL, NULL, '泉州市·示范棚', 2, DATE_SUB(NOW(), INTERVAL 14 HOUR)
),
(
  'P005', 0, '肽为农家菌肥', 'moment', 'dynamic',
  '多地示范棚回访记录',
  '多地示范棚回访记录，展示不同场景下的使用反馈（9 张九宫格）。',
  JSON_ARRAY(@img_farm, @img_green, @img_field, @img_soil, @img_harvest, @img_farm, @img_green, @img_field, @img_soil),
  NULL, NULL, '漳州市·试验田', 2, DATE_SUB(NOW(), INTERVAL 2 DAY)
),
(
  'P007', 0, '肽为农家菌肥', 'moment', 'dynamic',
  '试验田土壤状态对比',
  '连续跟踪试验田，记录施肥前后土壤湿润保持与作物长势变化，以下为 3 张对比图。',
  JSON_ARRAY(@img_soil, @img_field, @img_harvest),
  NULL, NULL, '厦门市·温室基地', 2, DATE_SUB(NOW(), INTERVAL 1 DAY)
),
(
  'P008', 0, '肽为农家菌肥', 'moment', 'video',
  '客户现场使用情况记录',
  '客户现场使用情况记录，点击视频可直接播放。以下为短视频示例。',
  JSON_ARRAY(),
  @video_demo, @video_cover, '厦门市·温室基地', 2, DATE_SUB(NOW(), INTERVAL 5 HOUR)
)
ON DUPLICATE KEY UPDATE
  `user_id`       = VALUES(`user_id`),
  `user_nickname` = VALUES(`user_nickname`),
  `channel`       = VALUES(`channel`),
  `content_type`  = VALUES(`content_type`),
  `title`         = VALUES(`title`),
  `content`       = VALUES(`content`),
  `images`        = VALUES(`images`),
  `video_url`     = VALUES(`video_url`),
  `video_cover`   = VALUES(`video_cover`),
  `location`      = VALUES(`location`),
  `status`        = VALUES(`status`),
  `published_at`  = VALUES(`published_at`),
  `updated_at`    = NOW();


-- ============================================================
-- 完成
-- ============================================================
SELECT post_no, channel, content_type, title, status, published_at
FROM content_post
WHERE post_no IN ('P001','P002','P003','P004','P005','P006','P007','P008')
ORDER BY published_at DESC;
