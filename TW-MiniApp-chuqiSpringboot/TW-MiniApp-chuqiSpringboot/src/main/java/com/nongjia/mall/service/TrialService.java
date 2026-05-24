package com.nongjia.mall.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.entity.TrialBooking;

import java.util.List;
import java.util.Map;

public interface TrialService extends IService<TrialBooking> {
    Result<TrialBooking> book(Long userId, Map<String, Object> params);
    com.baomidou.mybatisplus.extension.plugins.pagination.Page<TrialBooking> listByUser(Long userId, int page, int pageSize);
    Result<Void> updateDocs(Long userId, Long bookingId, Map<String, Object> params);
    Result<Void> cancel(Long userId, Long bookingId);
    List<String> getServicePoints();
}
