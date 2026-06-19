package com.nongjia.mall.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.dto.RechargeDTO;
import com.nongjia.mall.entity.RechargeRecord;

import java.util.List;
import java.util.Map;

public interface RechargeService extends IService<RechargeRecord> {
    RechargeDTO calculate(Long userId, String paymentMethod, Integer quantity);
    Result<RechargeDTO> submit(Long userId, String paymentMethod, Integer quantity);

    /** 微信支付下单：创建待支付订单并返回 wx.requestPayment 参数 */
    Result<Map<String, String>> createWechatPayOrder(Long userId, Integer quantity);

    /** 支付成功回调处理：幂等地给钱包加余额并标记订单已支付 */
    void handlePaySuccess(String orderNo, String transactionId);

    com.baomidou.mybatisplus.extension.plugins.pagination.Page<RechargeRecord> listByUser(Long userId, int page, int pageSize);
}
