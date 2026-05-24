package com.nongjia.mall.controller.app;

import com.nongjia.mall.common.Result;
import com.nongjia.mall.dto.RechargeDTO;
import com.nongjia.mall.entity.RechargeRecord;
import com.nongjia.mall.service.RechargeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/app/recharge")
public class RechargeController {

    @Autowired
    private RechargeService rechargeService;

    @GetMapping("/calculate")
    public Result<RechargeDTO> calculate(
            @RequestAttribute("userId") Long userId,
            @RequestParam String paymentMethod,
            @RequestParam Integer quantity) {
        return Result.ok(rechargeService.calculate(userId, paymentMethod, quantity));
    }

    @PostMapping("/submit")
    public Result<RechargeDTO> submit(
            @RequestAttribute("userId") Long userId,
            @RequestBody Map<String, Object> params) {
        String paymentMethod = (String) params.get("paymentMethod");
        Integer quantity = Integer.parseInt(params.get("quantity").toString());
        return rechargeService.submit(userId, paymentMethod, quantity);
    }

    @GetMapping("/records")
    public Result<List<RechargeRecord>> records(
            @RequestAttribute("userId") Long userId,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "20") int pageSize) {
        return Result.ok(rechargeService.listByUser(userId, page, pageSize).getRecords());
    }
}
