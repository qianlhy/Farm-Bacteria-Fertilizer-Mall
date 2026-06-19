/*
 Navicat Premium Data Transfer

 Source Server         : A-new-start
 Source Server Type    : MySQL
 Source Server Version : 50736
 Source Host           : localhost:3306
 Source Schema         : farm_fertilizer_mall

 Target Server Type    : MySQL
 Target Server Version : 50736
 File Encoding         : 65001

 Date: 16/06/2026 20:43:29
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_user
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '密码',
  `real_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '真实姓名',
  `role` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'admin' COMMENT '角色',
  `status` tinyint(4) DEFAULT 1 COMMENT '状态:1正常 0禁用',
  `last_login_at` datetime(0) DEFAULT NULL COMMENT '最后登录时间',
  `last_login_ip` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '最后登录IP',
  `created_at` datetime(0) DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime(0) DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uk_username`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '管理员表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_user
-- ----------------------------
INSERT INTO `admin_user` VALUES (1, 'admin', '$2a646cd219-42ac-454f-9eb6-8c8679df4f33', '超级管理员', 'super', 1, NULL, NULL, '2026-05-11 20:27:30', '2026-05-20 18:07:07');
INSERT INTO `admin_user` VALUES (2, 'admin2', 'admin123', '超级管理员', 'super', 1, NULL, NULL, '2026-05-11 20:27:30', '2026-05-11 20:27:30');

-- ----------------------------
-- Table structure for content_comment
-- ----------------------------
DROP TABLE IF EXISTS `content_comment`;
CREATE TABLE `content_comment`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `post_id` bigint(20) NOT NULL COMMENT '帖子ID',
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `user_nickname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '用户昵称',
  `content` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '评论内容',
  `parent_id` bigint(20) DEFAULT NULL COMMENT '父评论ID',
  `like_count` int(11) DEFAULT 0 COMMENT '点赞数',
  `status` tinyint(4) DEFAULT 1 COMMENT '状态',
  `created_at` datetime(0) DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime(0) DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  `deleted` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_post_id`(`post_id`) USING BTREE,
  INDEX `idx_user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '内容评论表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for content_post
-- ----------------------------
DROP TABLE IF EXISTS `content_post`;
CREATE TABLE `content_post`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `post_no` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '帖子编号',
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `user_nickname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '用户昵称',
  `channel` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'moment' COMMENT '频道:news/moment',
  `content_type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'dynamic' COMMENT '内容类型',
  `title` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '标题',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci COMMENT '正文内容',
  `images` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci COMMENT '图片(JSON数组)',
  `video_url` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '视频URL',
  `video_cover` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '视频封面',
  `location` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '位置',
  `latitude` decimal(10, 6) DEFAULT NULL,
  `longitude` decimal(10, 6) DEFAULT NULL,
  `view_count` int(11) DEFAULT 0 COMMENT '浏览数',
  `like_count` int(11) DEFAULT 0 COMMENT '点赞数',
  `comment_count` int(11) DEFAULT 0 COMMENT '评论数',
  `share_count` int(11) DEFAULT 0 COMMENT '分享数',
  `status` tinyint(4) DEFAULT 1 COMMENT '状态:1待审核 2已发布 3已拒绝 4已删除',
  `audit_remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `audit_at` datetime(0) DEFAULT NULL,
  `auditor_id` bigint(20) DEFAULT NULL,
  `published_at` datetime(0) DEFAULT NULL,
  `created_at` datetime(0) DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime(0) DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  `deleted` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uk_post_no`(`post_no`) USING BTREE,
  INDEX `idx_user_id`(`user_id`) USING BTREE,
  INDEX `idx_channel`(`channel`) USING BTREE,
  INDEX `idx_status`(`status`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '内容发布表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of content_post
-- ----------------------------
INSERT INTO `content_post` VALUES (1, 'P001', 0, '肽为农家菌肥', 'news', 'announcement', '热烈庆祝农家菌肥商城上线', '农家菌肥商城正式上线，欢迎各位农户朋友使用！购买菌肥，享优惠！', '[\"https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80\"]', NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 2, NULL, NULL, NULL, '2026-05-27 11:25:55', '2026-05-11 20:27:30', '2026-05-27 11:25:55', 0);
INSERT INTO `content_post` VALUES (2, 'P002', 0, '肽为农家菌肥', 'news', 'notice', '本月下单领券活动开启，老用户转介绍可叠加福利', '活动期内，指定商品支持领券后再下单。若通过老用户分享进入并完成首单，系统会给邀请人与新用户同步发放优惠券。', '[\"https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80\"]', NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 2, NULL, NULL, NULL, '2026-05-27 10:25:55', '2026-05-11 20:27:30', '2026-05-27 11:25:55', 0);
INSERT INTO `content_post` VALUES (3, 'P003', 0, '肽为农家菌肥', 'news', 'announcement', '春耕旺季发货加速，菌肥套装已覆盖 12 个示范村', '围绕春耕节点，我们把菌肥产品按作物和施肥阶段重新整理成组合装，方便农户直接下单。', '[\"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80\", \"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80\"]', NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 2, NULL, NULL, NULL, '2026-05-27 08:25:55', '2026-05-26 20:25:27', '2026-05-27 11:25:55', 0);
INSERT INTO `content_post` VALUES (4, 'P004', 0, '肽为农家菌肥', 'moment', 'dynamic', '客户案例：棚内管理更顺手', '客户案例：连续使用后，棚内管理更顺手，作物整体状态也更稳定。以下为一组现场反馈图（6 张）。', '[\"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80\", \"https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80\", \"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80\", \"https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80\", \"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80\", \"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80\"]', NULL, NULL, '泉州市·示范棚', NULL, NULL, 2, 0, 0, 0, 2, NULL, NULL, NULL, '2026-05-26 21:25:55', '2026-05-26 20:25:27', '2026-05-27 11:25:55', 0);
INSERT INTO `content_post` VALUES (5, 'P005', 0, '肽为农家菌肥', 'moment', 'dynamic', '多地示范棚回访记录', '多地示范棚回访记录，展示不同场景下的使用反馈（9 张九宫格）。', '[\"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80\", \"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80\", \"https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80\", \"https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80\", \"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80\", \"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80\", \"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80\", \"https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80\", \"https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80\"]', NULL, NULL, '漳州市·试验田', NULL, NULL, 0, 0, 0, 0, 2, NULL, NULL, NULL, '2026-05-25 11:25:55', '2026-05-26 20:25:27', '2026-05-27 11:25:55', 0);
INSERT INTO `content_post` VALUES (8, 'P006', 0, '肽为农家菌肥', 'news', 'video', '示范棚现场使用视频：施肥后一周回访记录', '本条为视频资讯示例，展示示范棚内菌肥使用过程及阶段性作物状态，点击可播放完整视频。', '[]', 'https://www.w3schools.com/html/mov_bbb.mp4', 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80', NULL, NULL, NULL, 0, 0, 0, 0, 2, NULL, NULL, NULL, '2026-05-27 05:25:55', '2026-05-27 11:25:55', '2026-05-27 11:25:55', 0);
INSERT INTO `content_post` VALUES (12, 'P007', 0, '肽为农家菌肥', 'moment', 'dynamic', '试验田土壤状态对比', '连续跟踪试验田，记录施肥前后土壤湿润保持与作物长势变化，以下为 3 张对比图。', '[\"https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80\", \"https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80\", \"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80\"]', NULL, NULL, '厦门市·温室基地', NULL, NULL, 0, 0, 0, 0, 2, NULL, NULL, NULL, '2026-05-26 11:25:55', '2026-05-27 11:25:55', '2026-05-27 11:25:55', 0);
INSERT INTO `content_post` VALUES (13, 'P008', 0, '肽为农家菌肥', 'moment', 'video', '客户现场使用情况记录', '客户现场使用情况记录，点击视频可直接播放。', '[]', 'https://www.w3schools.com/html/mov_bbb.mp4', 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80', '厦门市·温室基地', NULL, NULL, 0, 0, 0, 0, 2, NULL, NULL, NULL, '2026-05-27 06:25:55', '2026-05-27 11:25:55', '2026-05-27 11:25:55', 0);

-- ----------------------------
-- Table structure for group_order
-- ----------------------------
DROP TABLE IF EXISTS `group_order`;
CREATE TABLE `group_order`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `order_no` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '订单号',
  `platform` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '平台',
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `amount` decimal(10, 2) DEFAULT NULL COMMENT '金额',
  `status` tinyint(4) DEFAULT 1 COMMENT '状态',
  `verified_at` datetime(0) DEFAULT NULL COMMENT '核销时间',
  `verified_by` bigint(20) DEFAULT NULL COMMENT '核销人',
  `created_at` datetime(0) DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime(0) DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uk_order_no`(`order_no`) USING BTREE,
  INDEX `idx_user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '团购核销表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for partner_application
-- ----------------------------
DROP TABLE IF EXISTS `partner_application`;
CREATE TABLE `partner_application`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL COMMENT '用户ID',
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '姓名',
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '电话',
  `city` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '城市',
  `partner_type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'regional' COMMENT '类型:regional区域 village村级',
  `status` tinyint(4) DEFAULT 1 COMMENT '状态:1待处理 2合作中 3已拒绝',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '备注',
  `handled_at` datetime(0) DEFAULT NULL COMMENT '处理时间',
  `handled_by` bigint(20) DEFAULT NULL COMMENT '处理人',
  `created_at` datetime(0) DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime(0) DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '合伙人申请表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for pickup_order
-- ----------------------------
DROP TABLE IF EXISTS `pickup_order`;
CREATE TABLE `pickup_order`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `order_no` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '订单号',
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `status` tinyint(4) DEFAULT 1 COMMENT '状态:1待确认 2已确认 3已完成 4已取消',
  `pickup_type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'transfer' COMMENT '提货类型:transfer转让 delivery送货',
  `package_type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '包装类型:blue_bucket ton_bucket',
  `package_new_or_used` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'new' COMMENT 'new二手',
  `package_price` decimal(10, 2) DEFAULT 0.00 COMMENT '包装价格',
  `package_points` int(11) DEFAULT 0 COMMENT '包装积分',
  `total_kg` decimal(12, 2) DEFAULT 0.00 COMMENT '总重量(kg)',
  `freight_per_kg` decimal(8, 4) DEFAULT 0.0000 COMMENT '每公斤运费',
  `total_freight` decimal(10, 2) DEFAULT 0.00 COMMENT '总运费',
  `freight_payment` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'cash' COMMENT '运费支付方式',
  `freight_subsidy_used` decimal(10, 2) DEFAULT 0.00 COMMENT '运费补贴使用',
  `pickup_fee` decimal(10, 2) DEFAULT 0.00 COMMENT '提货费用',
  `total_amount` decimal(10, 2) DEFAULT 0.00 COMMENT '总金额',
  `receiver_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '收货人',
  `receiver_phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '联系电话',
  `receiver_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '收货地址',
  `delivery_location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '送货地点',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `confirmed_at` datetime(0) DEFAULT NULL,
  `completed_at` datetime(0) DEFAULT NULL,
  `created_at` datetime(0) DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime(0) DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  `deleted` tinyint(4) DEFAULT 0 COMMENT '删除标记',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uk_order_no`(`order_no`) USING BTREE,
  INDEX `idx_user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '提货订单表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pickup_order
-- ----------------------------
INSERT INTO `pickup_order` VALUES (1, 'TH17796314519500143', 3, 1, 'delivery', 'ton_bucket', 'used', 301.00, 3010, 1000.00, 0.2000, 200.00, 'cash', 0.00, 301.00, 501.00, NULL, NULL, 'shrnyang', 'shrnyang', '吨桶 · 九成新 · 1个 = 1,000Kg', NULL, NULL, '2026-05-24 22:08:48', '2026-05-24 22:08:48', 0);
INSERT INTO `pickup_order` VALUES (2, 'TH177963146400539A1', 3, 1, 'delivery', 'ton_bucket', 'used', 301.00, 3010, 1000.00, 0.2000, 200.00, 'cash', 0.00, 301.00, 501.00, NULL, NULL, 'shrnyang', 'shrnyang', '吨桶 · 九成新 · 1个 = 1,000Kg', NULL, NULL, '2026-05-24 22:08:48', '2026-05-24 22:08:48', 0);
INSERT INTO `pickup_order` VALUES (3, 'TH1779632813508DE0C', 3, 1, 'delivery', 'ton_bucket', 'used', 301.00, 3010, 1000.00, 0.2000, 200.00, 'cash', 0.00, 301.00, 501.00, NULL, NULL, 'shrnyang', 'shrnyang', '吨桶 · 九成新 · 1个 = 1,000Kg', NULL, NULL, '2026-05-24 22:26:54', '2026-05-24 22:26:54', 0);

-- ----------------------------
-- Table structure for points_log
-- ----------------------------
DROP TABLE IF EXISTS `points_log`;
CREATE TABLE `points_log`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'earn' COMMENT '类型:earn获取 use使用',
  `change_amount` bigint(20) DEFAULT 0 COMMENT '变动数量',
  `balance_after` bigint(20) DEFAULT 0 COMMENT '变动后余额',
  `source` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '来源',
  `biz_type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '业务类型',
  `biz_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '业务ID',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` datetime(0) DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime(0) DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  `deleted` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '积分日志表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of points_log
-- ----------------------------
INSERT INTO `points_log` VALUES (1, 2, 'earn', 1190, 1190, 'recharge', 'recharge_order', 'CZ17793589553722894', '充值获得积分', NULL, NULL, 0);
INSERT INTO `points_log` VALUES (2, 3, 'earn', 1190, 1190, 'recharge', 'recharge_order', 'CZ1779630046798DAD1', '充值获得积分', NULL, NULL, 0);
INSERT INTO `points_log` VALUES (3, 3, 'earn', 1190, 2380, 'recharge', 'recharge_order', 'CZ1779630428711CF9A', '充值获得积分', NULL, NULL, 0);
INSERT INTO `points_log` VALUES (4, 3, 'earn', 1190, 3570, 'recharge', 'recharge_order', 'CZ17796304314159CFD', '充值获得积分', NULL, NULL, 0);

-- ----------------------------
-- Table structure for recharge_record
-- ----------------------------
DROP TABLE IF EXISTS `recharge_record`;
CREATE TABLE `recharge_record`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `order_no` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '订单号',
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `product_key` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '产品标识',
  `product_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '产品名称',
  `quantity` int(11) DEFAULT 1 COMMENT '数量(份)',
  `unit_original_price` decimal(10, 2) DEFAULT NULL COMMENT '原价',
  `discount_rate` decimal(5, 4) DEFAULT NULL COMMENT '折扣率',
  `paid_price` decimal(10, 2) DEFAULT NULL COMMENT '实付金额',
  `total_kg` decimal(12, 2) DEFAULT NULL COMMENT '获得总量(kg)',
  `points_awarded` bigint(20) DEFAULT 0 COMMENT '奖励积分',
  `payment_method` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'cash' COMMENT '支付方式:cash/points',
  `status` tinyint(4) DEFAULT 1 COMMENT '状态:1待支付 2已支付',
  `paid_at` datetime(0) DEFAULT NULL COMMENT '支付时间',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` datetime(0) DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime(0) DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  `deleted` tinyint(4) DEFAULT 0 COMMENT '删除标记',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uk_order_no`(`order_no`) USING BTREE,
  INDEX `idx_user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '充值记录表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of recharge_record
-- ----------------------------
INSERT INTO `recharge_record` VALUES (1, 'CZ17793589553722894', 2, 'recharge', '1吨农家菌肥', 1, 1400.00, 0.8500, 1190.00, 1000.00, 1190, 'cash', 2, '2026-05-21 18:22:35', NULL, NULL, NULL, 0);
INSERT INTO `recharge_record` VALUES (2, 'CZ1779630046798DAD1', 3, 'recharge', '1吨农家菌肥', 1, 1400.00, 0.8500, 1190.00, 1000.00, 1190, 'cash', 2, '2026-05-24 21:40:47', NULL, NULL, NULL, 0);
INSERT INTO `recharge_record` VALUES (3, 'CZ1779630428711CF9A', 3, 'recharge', '1吨农家菌肥', 1, 1400.00, 0.8500, 1190.00, 1000.00, 1190, 'cash', 2, '2026-05-24 21:47:09', NULL, NULL, NULL, 0);
INSERT INTO `recharge_record` VALUES (4, 'CZ17796304314159CFD', 3, 'recharge', '1吨农家菌肥', 1, 1400.00, 0.8500, 1190.00, 1000.00, 1190, 'cash', 2, '2026-05-24 21:47:11', NULL, NULL, NULL, 0);

-- ----------------------------
-- Table structure for redemption_code
-- ----------------------------
DROP TABLE IF EXISTS `redemption_code`;
CREATE TABLE `redemption_code`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '兑换码',
  `batch_no` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '批次号',
  `freight_amount` decimal(10, 2) DEFAULT 0.00 COMMENT '运费补贴(元)',
  `packaging_amount` decimal(10, 2) DEFAULT 0.00 COMMENT '包装费抵扣(元)',
  `points_amount` bigint(20) DEFAULT 0 COMMENT '积分奖励',
  `status` tinyint(4) DEFAULT 1 COMMENT '状态:1未使用 2已使用 3已过期 4已禁用',
  `user_id` bigint(20) DEFAULT NULL COMMENT '兑换用户ID',
  `redeemed_at` datetime(0) DEFAULT NULL COMMENT '兑换时间',
  `expires_at` datetime(0) DEFAULT NULL COMMENT '过期时间',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '备注',
  `created_by` bigint(20) DEFAULT NULL COMMENT '创建管理员ID',
  `created_at` datetime(0) DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime(0) DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uk_code`(`code`) USING BTREE,
  INDEX `idx_batch_no`(`batch_no`) USING BTREE,
  INDEX `idx_status`(`status`) USING BTREE,
  INDEX `idx_user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '兑换码表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of redemption_code
-- ----------------------------
INSERT INTO `redemption_code` VALUES (1, 'RD258FD81363', 'DH1779704857162', 50.00, 30.00, 100, 1, NULL, NULL, NULL, 'test', 1, '2026-05-25 18:27:37', '2026-05-25 18:27:37');

-- ----------------------------
-- Table structure for sys_config
-- ----------------------------
DROP TABLE IF EXISTS `sys_config`;
CREATE TABLE `sys_config`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `config_key` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '配置键',
  `config_value` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci COMMENT '配置值',
  `config_type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'string' COMMENT '类型:string/number/json',
  `config_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '配置名称',
  `config_group` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '配置分组',
  `sort_order` int(11) DEFAULT 0 COMMENT '排序',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` datetime(0) DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime(0) DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uk_config_key`(`config_key`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '系统配置表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_config
-- ----------------------------
INSERT INTO `sys_config` VALUES (1, 'product.recharge.name', '2吨农家菌肥', 'string', '产品名称', 'product', 1, '充值产品名称', '2026-05-11 20:27:30', '2026-05-11 20:27:30');
INSERT INTO `sys_config` VALUES (2, 'product.recharge.original_price', '1401', 'number', '原价(元/吨)', 'product', 2, '每吨原价', '2026-05-11 20:27:30', '2026-05-11 20:27:30');
INSERT INTO `sys_config` VALUES (3, 'product.recharge.discount_rate', '0.86', 'number', '折扣率', 'product', 3, '折扣率，0.85=85折', '2026-05-11 20:27:30', '2026-05-11 20:27:30');
INSERT INTO `sys_config` VALUES (4, 'product.recharge.amount_kg', '1001', 'number', '每份数量(kg)', 'product', 4, '每份多少公斤', '2026-05-11 20:27:30', '2026-05-11 20:27:30');
INSERT INTO `sys_config` VALUES (5, 'product.delivery.min_kg', '100', 'number', '最低起送量(kg)', 'delivery', 1, '送货最低起送量', '2026-05-11 20:27:30', '2026-05-11 20:27:30');
INSERT INTO `sys_config` VALUES (6, 'product.delivery.freight_per_kg', '0.2', 'number', '每公斤运费(元)', 'delivery', 2, '送货每公斤运费', '2026-05-11 20:27:30', '2026-05-11 20:27:30');
INSERT INTO `sys_config` VALUES (7, 'product.package.blue_bucket_new', '36', 'number', '蓝桶新桶价格', 'package', 1, '新蓝桶价格', '2026-05-11 20:27:30', '2026-05-11 20:27:30');
INSERT INTO `sys_config` VALUES (8, 'product.package.blue_bucket_used', '16', 'number', '蓝桶旧桶价格', 'package', 2, '旧蓝桶价格', '2026-05-11 20:27:30', '2026-05-11 20:27:30');
INSERT INTO `sys_config` VALUES (9, 'product.package.ton_bucket_new', '701', 'number', '吨桶新桶价格', 'package', 3, '新吨桶价格', '2026-05-11 20:27:30', '2026-05-11 20:27:30');
INSERT INTO `sys_config` VALUES (10, 'product.package.ton_bucket_used', '301', 'number', '吨桶旧桶价格', 'package', 4, '旧吨桶价格', '2026-05-11 20:27:30', '2026-05-11 20:27:30');
INSERT INTO `sys_config` VALUES (11, 'trial.service_points', '[\"漳州岩溪\",\"厦门湖里\",\"泉州丰泽\"]1', 'json', '服务网点列表', 'trial', 1, '试用服务网点', '2026-05-11 20:27:30', '2026-05-11 20:27:30');
INSERT INTO `sys_config` VALUES (12, 'product.points.rate', '10', 'number', '积分兑换比例', 'points', 1, '1元等于多少积分', '2026-05-24 22:02:33', '2026-05-24 22:02:33');
INSERT INTO `sys_config` VALUES (13, 'product.package.blue_bucket_kg', '25', 'number', '蓝桶规格(kg)', 'package', 5, '每个蓝桶多少公斤', '2026-05-24 22:02:33', '2026-05-24 22:02:33');
INSERT INTO `sys_config` VALUES (14, 'product.package.ton_bucket_kg', '1000', 'number', '吨桶规格(kg)', 'package', 6, '每个吨桶多少公斤', '2026-05-24 22:02:33', '2026-05-24 22:02:33');
INSERT INTO `sys_config` VALUES (15, 'product.package.blue_bucket_min_count', '40', 'number', '蓝桶配送起送桶数', 'package', 7, '蓝桶配送最低桶数', '2026-05-24 22:02:33', '2026-05-24 22:02:33');
INSERT INTO `sys_config` VALUES (16, 'trial.product.name', '农家菌肥', 'string', '试用产品名称', 'trial', 2, '试用预约产品名', '2026-05-24 22:02:33', '2026-05-24 22:02:33');
INSERT INTO `sys_config` VALUES (17, 'trial.product.subtitle', '绿色生态，提质增产，提升地力', 'string', '试用产品描述', 'trial', 3, '试用预约产品描述', '2026-05-24 22:02:33', '2026-05-24 22:02:33');

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '鎵嬫満鍙',
  `openid` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '微信openid',
  `nickname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '昵称',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '头像',
  `license_plate` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '车牌号',
  `user_type` tinyint(4) DEFAULT 1 COMMENT '用户类型:1普通 2合伙人',
  `status` tinyint(4) DEFAULT 1 COMMENT '状态:1正常 0禁用',
  `invite_code` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '邀请码',
  `invited_by` bigint(20) DEFAULT NULL COMMENT '邀请人ID',
  `total_recharge_kg` decimal(12, 2) DEFAULT 0.00 COMMENT '累计充值(kg)',
  `created_at` datetime(0) DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime(0) DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  `deleted` tinyint(4) DEFAULT 0 COMMENT '删除标记',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uk_phone`(`phone`) USING BTREE,
  UNIQUE INDEX `uk_openid`(`openid`) USING BTREE,
  INDEX `idx_invite_code`(`invite_code`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (1, '13860179716', NULL, '菌肥用户', NULL, '闽AH7627', 1, 1, 'DEMO1234', NULL, 2800.00, '2026-05-11 20:27:30', '2026-05-11 20:27:30', 0);
INSERT INTO `sys_user` VALUES (2, '13342497453', NULL, '用户7453', NULL, NULL, 1, 1, '77060C1B', NULL, 1000.00, NULL, '2026-05-21 18:22:35', 0);
INSERT INTO `sys_user` VALUES (3, NULL, 'mock_7ef1b1620ea7f02551f2fd84cdbbade8', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', NULL, 1, 1, 'BA842508', NULL, 3000.00, NULL, '2026-05-24 21:47:11', 0);

-- ----------------------------
-- Table structure for trial_booking
-- ----------------------------
DROP TABLE IF EXISTS `trial_booking`;
CREATE TABLE `trial_booking`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `booking_no` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '预约号',
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `product_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '产品名称',
  `service_point` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '服务点',
  `contact_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '联系人',
  `contact_phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '联系电话',
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '地址',
  `receiver_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '收货人',
  `receiver_phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '收货电话',
  `latitude` decimal(10, 6) DEFAULT NULL COMMENT '纬度',
  `longitude` decimal(10, 6) DEFAULT NULL COMMENT '经度',
  `status` tinyint(4) DEFAULT 1 COMMENT '状态:1待确认 2已确认 3已完成 4已取消 5资料待填',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `confirmed_at` datetime(0) DEFAULT NULL,
  `completed_at` datetime(0) DEFAULT NULL,
  `created_at` datetime(0) DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime(0) DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uk_booking_no`(`booking_no`) USING BTREE,
  INDEX `idx_user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '试用预约表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user_wallet
-- ----------------------------
DROP TABLE IF EXISTS `user_wallet`;
CREATE TABLE `user_wallet`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `fertilizer_balance` decimal(12, 2) DEFAULT 0.00 COMMENT '化肥余额(kg)',
  `coupon_balance` decimal(10, 2) DEFAULT 0.00 COMMENT '优惠券余额',
  `freight_subsidy` decimal(10, 2) DEFAULT 0.00 COMMENT '运费补贴',
  `packaging_credit` decimal(10, 2) DEFAULT 0.00 COMMENT '包装费抵扣余额',
  `points_balance` bigint(20) DEFAULT 0 COMMENT '积分余额',
  `total_points_earned` bigint(20) DEFAULT 0 COMMENT '累计获得积分',
  `total_points_used` bigint(20) DEFAULT 0 COMMENT '累计使用积分',
  `version` int(11) DEFAULT 0 COMMENT '乐观锁版本',
  `created_at` datetime(0) DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime(0) DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uk_user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户钱包表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_wallet
-- ----------------------------
INSERT INTO `user_wallet` VALUES (1, 1, 2800.00, 180.00, 180.00, 0.00, 12000, 12000, 0, 0, '2026-05-11 20:27:30', '2026-05-11 20:27:30');
INSERT INTO `user_wallet` VALUES (2, 2, 1000.00, 0.00, 0.00, 0.00, 1190, 1190, 0, 2, NULL, '2026-05-21 18:22:35');
INSERT INTO `user_wallet` VALUES (3, 3, 0.00, 0.00, 0.00, 0.00, 3570, 3570, 0, 9, NULL, '2026-05-24 22:26:53');

-- ----------------------------
-- Procedure structure for sp_add_column_if_missing
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_add_column_if_missing`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_add_column_if_missing`(
  IN p_table VARCHAR(64),
  IN p_column VARCHAR(64),
  IN p_definition TEXT
)
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM information_schema.COLUMNS
    WHERE TABLE_SCHEMA = DATABASE()
      AND TABLE_NAME = p_table
      AND COLUMN_NAME = p_column
  ) THEN
    SET @ddl = CONCAT('ALTER TABLE `', p_table, '` ADD COLUMN `', p_column, '` ', p_definition);
    PREPARE stmt FROM @ddl;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
  END IF;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for sp_add_index_if_missing
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_add_index_if_missing`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_add_index_if_missing`(
  IN p_table VARCHAR(64),
  IN p_index VARCHAR(64),
  IN p_definition TEXT
)
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM information_schema.STATISTICS
    WHERE TABLE_SCHEMA = DATABASE()
      AND TABLE_NAME = p_table
      AND INDEX_NAME = p_index
  ) THEN
    SET @ddl = CONCAT('ALTER TABLE `', p_table, '` ADD ', p_definition);
    PREPARE stmt FROM @ddl;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
  END IF;
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
