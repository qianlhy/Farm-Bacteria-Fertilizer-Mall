package com.nongjia.mall.controller.admin;

import com.nongjia.mall.common.Result;
import com.nongjia.mall.entity.PartnerApplication;
import com.nongjia.mall.mapper.PartnerApplicationMapper;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin/partner")
public class AdminPartnerController {

    @Autowired
    private PartnerApplicationMapper partnerApplicationMapper;

    @GetMapping("/list")
    public Result<Map<String, Object>> list(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "20") int pageSize,
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) Integer status,
            @RequestParam(required = false) String partnerType) {
        com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<PartnerApplication> qw =
            new com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<>();
        if (keyword != null && !keyword.isEmpty()) {
            qw.and(w -> w.like(PartnerApplication::getName, keyword)
                    .or().like(PartnerApplication::getPhone, keyword)
                    .or().like(PartnerApplication::getCity, keyword));
        }
        if (status != null) qw.eq(PartnerApplication::getStatus, status);
        if (partnerType != null && !partnerType.isEmpty()) qw.eq(PartnerApplication::getPartnerType, partnerType);
        qw.orderByDesc(PartnerApplication::getCreatedAt);

        com.baomidou.mybatisplus.extension.plugins.pagination.Page<PartnerApplication> p =
            new com.baomidou.mybatisplus.extension.plugins.pagination.Page<>(page, pageSize);
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<PartnerApplication> result =
            partnerApplicationMapper.selectPage(p, qw);

        Map<String, Object> data = new HashMap<>();
        data.put("total", result.getTotal());
        data.put("page", page);
        data.put("pageSize", pageSize);
        data.put("records", result.getRecords());
        return Result.ok(data);
    }

    @PostMapping("/handle/{id}")
    public Result<Void> handle(
            HttpServletRequest request,
            @PathVariable Long id,
            @RequestBody Map<String, Object> params) {
        Long adminId = (Long) request.getAttribute("adminId");
        PartnerApplication app = partnerApplicationMapper.selectById(id);
        if (app == null) return Result.fail("申请不存在");

        Integer newStatus = Integer.parseInt(params.get("status").toString());
        String remark = (String) params.getOrDefault("remark", "");

        app.setStatus(newStatus);
        app.setRemark(remark);
        app.setHandledAt(LocalDateTime.now());
        app.setHandledBy(adminId);
        partnerApplicationMapper.updateById(app);
        return Result.ok("处理成功");
    }
}
