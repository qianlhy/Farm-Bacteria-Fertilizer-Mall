package com.nongjia.mall.controller.admin;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.entity.PickupOrder;
import com.nongjia.mall.entity.RechargeRecord;
import com.nongjia.mall.entity.SysUser;
import com.nongjia.mall.mapper.PickupOrderMapper;
import com.nongjia.mall.mapper.RechargeRecordMapper;
import com.nongjia.mall.mapper.SysUserMapper;
import com.nongjia.mall.service.PickupOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin/orders")
public class AdminOrderController {

    @Autowired
    private RechargeRecordMapper rechargeRecordMapper;
    @Autowired
    private PickupOrderMapper pickupOrderMapper;
    @Autowired
    private SysUserMapper sysUserMapper;
    @Autowired
    private PickupOrderService pickupOrderService;

    @GetMapping("/recharge-list")
    public Result<Map<String, Object>> rechargeList(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "20") int pageSize,
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) Integer status) {
        LambdaQueryWrapper<RechargeRecord> qw = new LambdaQueryWrapper<>();
        if (keyword != null && !keyword.isEmpty()) {
            qw.like(RechargeRecord::getOrderNo, keyword);
        }
        if (status != null) qw.eq(RechargeRecord::getStatus, status);
        qw.orderByDesc(RechargeRecord::getCreatedAt);

        Page<RechargeRecord> p = new Page<>(page, pageSize);
        Page<RechargeRecord> result = rechargeRecordMapper.selectPage(p, qw);
        for (RechargeRecord r : result.getRecords()) {
            SysUser u = sysUserMapper.selectById(r.getUserId());
            if (u != null) r.setRemark(u.getPhone());
        }

        Map<String, Object> data = new HashMap<>();
        data.put("total", result.getTotal());
        data.put("page", page);
        data.put("pageSize", pageSize);
        data.put("records", result.getRecords());
        return Result.ok(data);
    }

    @PostMapping("/recharge/confirm/{orderId}")
    public Result<Void> confirmRecharge(@PathVariable Long orderId) {
        RechargeRecord record = rechargeRecordMapper.selectById(orderId);
        if (record == null) return Result.fail("订单不存在");
        if (record.getStatus() != 1) return Result.fail("订单状态不允许此操作");
        record.setStatus(2);
        record.setPaidAt(LocalDateTime.now());
        rechargeRecordMapper.updateById(record);
        return Result.ok("确认成功");
    }

    @GetMapping("/pickup-list")
    public Result<Map<String, Object>> pickupList(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "20") int pageSize,
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) Integer status,
            @RequestParam(required = false) String pickupType) {
        LambdaQueryWrapper<PickupOrder> qw = new LambdaQueryWrapper<>();
        if (keyword != null && !keyword.isEmpty()) {
            qw.like(PickupOrder::getOrderNo, keyword);
        }
        if (status != null) qw.eq(PickupOrder::getStatus, status);
        if (pickupType != null && !pickupType.isEmpty()) {
            qw.eq(PickupOrder::getPickupType, pickupType);
        }
        qw.orderByDesc(PickupOrder::getCreatedAt);

        Page<PickupOrder> p = new Page<>(page, pageSize);
        Page<PickupOrder> result = pickupOrderMapper.selectPage(p, qw);

        Map<String, Object> data = new HashMap<>();
        data.put("total", result.getTotal());
        data.put("page", page);
        data.put("pageSize", pageSize);
        data.put("records", result.getRecords());
        return Result.ok(data);
    }

    @PostMapping({"/pickup/pack/{orderId}", "/pickup/confirm/{orderId}"})
    public Result<Void> packPickup(@PathVariable Long orderId) {
        return pickupOrderService.packOrder(orderId);
    }

    @PostMapping("/pickup/ship/{orderId}")
    public Result<Void> shipPickup(@PathVariable Long orderId) {
        return pickupOrderService.shipOrder(orderId);
    }

    @PostMapping("/pickup/receive/{orderId}")
    public Result<Void> receivePickup(@PathVariable Long orderId) {
        return pickupOrderService.receiveOrder(orderId);
    }

    @PostMapping("/pickup/cancel/{orderId}")
    public Result<Void> cancelPickup(@PathVariable Long orderId, @RequestBody(required = false) Map<String, String> params) {
        String remark = params != null ? params.getOrDefault("remark", "管理员取消") : "管理员取消";
        return pickupOrderService.cancelByAdmin(orderId, remark);
    }
}
