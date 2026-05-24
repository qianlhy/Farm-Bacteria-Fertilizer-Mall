package com.nongjia.mall.controller.app;

import com.nongjia.mall.common.Result;
import com.nongjia.mall.dto.PickupOrderDTO;
import com.nongjia.mall.entity.PickupOrder;
import com.nongjia.mall.service.PickupOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/app/pickup")
public class PickupController {

    @Autowired
    private PickupOrderService pickupOrderService;

    @PostMapping("/create")
    public Result<PickupOrderDTO> create(
            @RequestAttribute("userId") Long userId,
            @RequestBody Map<String, Object> params) {
        return pickupOrderService.createOrder(userId, params);
    }

    @GetMapping("/records")
    public Result<List<PickupOrder>> records(
            @RequestAttribute("userId") Long userId,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "20") int pageSize) {
        return Result.ok(pickupOrderService.listByUser(userId, page, pageSize).getRecords());
    }

    @GetMapping("/detail/{orderId}")
    public Result<PickupOrderDTO> detail(
            @RequestAttribute("userId") Long userId,
            @PathVariable Long orderId) {
        return Result.ok(pickupOrderService.getOrderDetail(userId, orderId));
    }
}
