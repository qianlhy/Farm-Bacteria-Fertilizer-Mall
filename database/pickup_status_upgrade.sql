-- 提货订单：状态细化 + 额度统一支付 升级脚本
-- 在已运行的数据库（farm_fertilizer_mall）上执行一次即可。
-- 新状态定义：1待确认 2打包中 3已发货 4已收货 5已取消

USE `farm_fertilizer_mall`;

-- 1) 新增「发货时间」列（如已存在会报错，可忽略该行）
ALTER TABLE `pickup_order`
  ADD COLUMN `shipped_at` DATETIME DEFAULT NULL COMMENT '发货时间' AFTER `confirmed_at`;

-- 2) 更新状态备注
ALTER TABLE `pickup_order`
  MODIFY COLUMN `status` TINYINT DEFAULT 1 COMMENT '状态:1待确认 2打包中 3已发货 4已收货 5已取消';

-- 3) 历史数据迁移（旧:1待确认 2已确认 3已完成 4已取消 -> 新:1待确认 2打包中 4已收货 5已取消）
--    旧「已取消(4)」要先改成 5，避免与新「已收货(4)」混淆；旧「已完成(3)」并到「已收货(4)」。
UPDATE `pickup_order` SET `status` = 5 WHERE `status` = 4;   -- 旧已取消 -> 已取消
UPDATE `pickup_order` SET `status` = 4 WHERE `status` = 3;   -- 旧已完成 -> 已收货
-- 旧「已确认(2)」语义对应新「打包中(2)」，无需变更。
