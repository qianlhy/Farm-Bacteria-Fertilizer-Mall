package com.nongjia.mall.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.dto.RechargeDTO;
import com.nongjia.mall.entity.RechargeRecord;

import java.util.List;

public interface RechargeService extends IService<RechargeRecord> {
    RechargeDTO calculate(Long userId, String paymentMethod, Integer quantity);
    Result<RechargeDTO> submit(Long userId, String paymentMethod, Integer quantity);
    com.baomidou.mybatisplus.extension.plugins.pagination.Page<RechargeRecord> listByUser(Long userId, int page, int pageSize);
}
