package com.nongjia.mall.controller.admin;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.entity.TrialBooking;
import com.nongjia.mall.mapper.TrialBookingMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin/trial")
public class AdminTrialController {

    @Autowired
    private TrialBookingMapper trialBookingMapper;

    @GetMapping("/list")
    public Result<Map<String, Object>> list(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "20") int pageSize,
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) Integer status) {
        LambdaQueryWrapper<TrialBooking> qw = new LambdaQueryWrapper<>();
        if (keyword != null && !keyword.isEmpty()) {
            qw.and(w -> w.like(TrialBooking::getBookingNo, keyword)
                    .or().like(TrialBooking::getContactName, keyword)
                    .or().like(TrialBooking::getContactPhone, keyword));
        }
        if (status != null) qw.eq(TrialBooking::getStatus, status);
        qw.orderByDesc(TrialBooking::getCreatedAt);

        Page<TrialBooking> p = new Page<>(page, pageSize);
        Page<TrialBooking> result = trialBookingMapper.selectPage(p, qw);

        Map<String, Object> data = new HashMap<>();
        data.put("total", result.getTotal());
        data.put("page", page);
        data.put("pageSize", pageSize);
        data.put("records", result.getRecords());
        return Result.ok(data);
    }

    @PostMapping("/confirm/{id}")
    public Result<Void> confirm(@PathVariable Long id) {
        TrialBooking booking = trialBookingMapper.selectById(id);
        if (booking == null) return Result.fail("预约不存在");
        if (booking.getStatus() != 1) return Result.fail("状态不允许此操作");
        booking.setStatus(2);
        booking.setConfirmedAt(LocalDateTime.now());
        trialBookingMapper.updateById(booking);
        return Result.ok("已确认");
    }

    @PostMapping("/complete/{id}")
    public Result<Void> complete(@PathVariable Long id) {
        TrialBooking booking = trialBookingMapper.selectById(id);
        if (booking == null) return Result.fail("预约不存在");
        if (booking.getStatus() != 2) return Result.fail("状态不允许此操作");
        booking.setStatus(3);
        booking.setCompletedAt(LocalDateTime.now());
        trialBookingMapper.updateById(booking);
        return Result.ok("已完成");
    }

    @PostMapping("/cancel/{id}")
    public Result<Void> cancel(@PathVariable Long id, @RequestBody Map<String, String> params) {
        TrialBooking booking = trialBookingMapper.selectById(id);
        if (booking == null) return Result.fail("预约不存在");
        booking.setStatus(4);
        booking.setRemark(params.getOrDefault("remark", "管理员取消"));
        trialBookingMapper.updateById(booking);
        return Result.ok("已取消");
    }
}
