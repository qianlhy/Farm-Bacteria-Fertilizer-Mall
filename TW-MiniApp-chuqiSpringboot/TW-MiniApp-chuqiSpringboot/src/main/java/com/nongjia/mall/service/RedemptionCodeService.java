package com.nongjia.mall.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.dto.RedeemResultDTO;
import com.nongjia.mall.entity.RedemptionCode;

import java.util.List;
import java.util.Map;

public interface RedemptionCodeService extends IService<RedemptionCode> {

    Result<Map<String, Object>> generateBatch(Long adminId, Map<String, Object> params);

    Page<RedemptionCode> listForAdmin(int page, int pageSize, String keyword, Integer status, String batchNo);

    Result<Void> disableCode(Long id);

    Result<RedeemResultDTO> redeem(Long userId, String code);
}
