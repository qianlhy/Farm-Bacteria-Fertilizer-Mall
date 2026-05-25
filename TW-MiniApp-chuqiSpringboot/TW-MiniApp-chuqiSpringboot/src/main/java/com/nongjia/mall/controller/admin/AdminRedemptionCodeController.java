package com.nongjia.mall.controller.admin;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.entity.RedemptionCode;
import com.nongjia.mall.service.RedemptionCodeService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin/redemption")
public class AdminRedemptionCodeController {

    @Autowired
    private RedemptionCodeService redemptionCodeService;

    @PostMapping("/generate")
    public Result<Map<String, Object>> generate(HttpServletRequest request, @RequestBody Map<String, Object> params) {
        Long adminId = (Long) request.getAttribute("adminId");
        return redemptionCodeService.generateBatch(adminId, params);
    }

    @GetMapping("/list")
    public Result<Map<String, Object>> list(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "20") int pageSize,
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) Integer status,
            @RequestParam(required = false) String batchNo) {
        Page<RedemptionCode> result = redemptionCodeService.listForAdmin(page, pageSize, keyword, status, batchNo);
        Map<String, Object> data = new HashMap<>();
        data.put("total", result.getTotal());
        data.put("page", page);
        data.put("pageSize", pageSize);
        data.put("records", result.getRecords());
        return Result.ok(data);
    }

    @PostMapping("/disable/{id}")
    public Result<Void> disable(@PathVariable Long id) {
        return redemptionCodeService.disableCode(id);
    }
}
