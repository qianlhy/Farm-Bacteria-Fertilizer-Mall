package com.nongjia.mall.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.dto.PickupOrderDTO;
import com.nongjia.mall.entity.PickupOrder;

import java.util.List;

public interface PickupOrderService extends IService<PickupOrder> {
    Result<PickupOrderDTO> createOrder(Long userId, java.util.Map<String, Object> params);
    com.baomidou.mybatisplus.extension.plugins.pagination.Page<PickupOrder> listByUser(Long userId, int page, int pageSize);
    PickupOrderDTO getOrderDetail(Long userId, Long orderId);

    Result<Void> packOrder(Long orderId);
    Result<Void> shipOrder(Long orderId);
    Result<Void> receiveOrder(Long orderId);
    Result<Void> cancelByAdmin(Long orderId, String remark);
}
