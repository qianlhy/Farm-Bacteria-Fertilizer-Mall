-- ============================================================
-- 农业作物表（农业页 / 作物详情）
-- 可在已有数据库直接执行本文件（不会影响其他表）
-- ============================================================

CREATE TABLE IF NOT EXISTS `agri_crop` (
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
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `deleted` TINYINT DEFAULT 0 COMMENT '删除标记',
  KEY `idx_status_sort` (`status`, `sort_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='农业作物表';

-- 初始化示例数据（与原小程序写死的 4 个作物一致，仅当表为空时插入）
INSERT INTO `agri_crop` (`name`, `cover`, `header_image`, `title`, `summary`, `body`, `report_name`, `pdf_url`, `sort_order`, `status`)
SELECT * FROM (
  SELECT '番茄' AS name, '' AS cover, '' AS header_image, '番茄' AS title,
         '菌肥在番茄上的应用与试验效果' AS summary,
         '番茄试验内容整理中，将展示施用农家菌肥后的长势、产量与品质对比数据。' AS body,
         '番茄试验报告.pdf' AS report_name, '' AS pdf_url, 1 AS sort_order, 1 AS status
  UNION ALL SELECT '黄瓜', '', '', '黄瓜', '菌肥在黄瓜上的应用与试验效果', '黄瓜试验内容整理中，将展示施用农家菌肥后的长势、产量与品质对比数据。', '黄瓜试验报告.pdf', '', 2, 1
  UNION ALL SELECT '辣椒', '', '', '辣椒', '菌肥在辣椒上的应用与试验效果', '辣椒试验内容整理中，将展示施用农家菌肥后的长势、产量与品质对比数据。', '辣椒试验报告.pdf', '', 3, 1
  UNION ALL SELECT '柑橘', '', '', '柑橘', '菌肥在柑橘上的应用与试验效果', '柑橘试验内容整理中，将展示施用农家菌肥后的长势、产量与品质对比数据。', '柑橘试验报告.pdf', '', 4, 1
) AS seed
WHERE NOT EXISTS (SELECT 1 FROM `agri_crop` LIMIT 1);
