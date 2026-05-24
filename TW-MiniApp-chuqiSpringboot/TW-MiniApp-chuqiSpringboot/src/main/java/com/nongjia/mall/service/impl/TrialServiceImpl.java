package com.nongjia.mall.service.impl;

import cn.hutool.core.util.IdUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.entity.TrialBooking;
import com.nongjia.mall.mapper.TrialBookingMapper;
import com.nongjia.mall.service.SysConfigService;
import com.nongjia.mall.service.TrialService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@Service
public class TrialServiceImpl extends ServiceImpl<TrialBookingMapper, TrialBooking> implements TrialService {

    @Autowired
    private TrialBookingMapper trialBookingMapper;
    @Autowired
    private SysConfigService sysConfigService;

    private static final DateTimeFormatter DF = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    @Override
    public Result<TrialBooking> book(Long userId, Map<String, Object> params) {
        String servicePoint = (String) params.get("servicePoint");
        String contactPhone = (String) params.get("contactPhone");

        if (servicePoint == null || contactPhone == null) {
            return Result.fail("参数不完整");
        }
        if (!contactPhone.matches("^1\\d{10}$")) {
            return Result.fail("手机号格式错误");
        }

        List<String> allowedPoints = getServicePoints();
        if (!allowedPoints.contains(servicePoint)) {
            return Result.fail("服务网点无效");
        }

        Map<String, String> config = sysConfigService.getProductConfig();
        String productName = config.getOrDefault("trialProductName", "农家菌肥");

        TrialBooking booking = new TrialBooking();
        booking.setBookingNo("SY" + System.currentTimeMillis() + IdUtil.fastSimpleUUID().substring(0, 4).toUpperCase());
        booking.setUserId(userId);
        booking.setProductName(productName);
        booking.setServicePoint(servicePoint);
        booking.setContactPhone(contactPhone);
        booking.setStatus(1);
        trialBookingMapper.insert(booking);

        return Result.ok("预约成功", booking);
    }

    @Override
    public Page<TrialBooking> listByUser(Long userId, int page, int pageSize) {
        Page<TrialBooking> p = new Page<>(page, pageSize);
        return trialBookingMapper.selectPage(p,
            new LambdaQueryWrapper<TrialBooking>()
                .eq(TrialBooking::getUserId, userId)
                .orderByDesc(TrialBooking::getCreatedAt)
        );
    }

    @Override
    public Result<Void> updateDocs(Long userId, Long bookingId, Map<String, Object> params) {
        TrialBooking booking = trialBookingMapper.selectOne(
            new LambdaQueryWrapper<TrialBooking>()
                .eq(TrialBooking::getId, bookingId)
                .eq(TrialBooking::getUserId, userId)
        );
        if (booking == null) return Result.fail("预约记录不存在");

        if (params.get("contactName") != null) booking.setContactName((String) params.get("contactName"));
        if (params.get("address") != null) booking.setAddress((String) params.get("address"));
        if (params.get("receiverName") != null) booking.setReceiverName((String) params.get("receiverName"));
        if (params.get("receiverPhone") != null) booking.setReceiverPhone((String) params.get("receiverPhone"));
        if (params.get("latitude") != null) booking.setLatitude(new java.math.BigDecimal(params.get("latitude").toString()));
        if (params.get("longitude") != null) booking.setLongitude(new java.math.BigDecimal(params.get("longitude").toString()));
        booking.setStatus(5);
        trialBookingMapper.updateById(booking);
        return Result.ok("资料填写成功");
    }

    @Override
    public Result<Void> cancel(Long userId, Long bookingId) {
        TrialBooking booking = trialBookingMapper.selectOne(
            new LambdaQueryWrapper<TrialBooking>()
                .eq(TrialBooking::getId, bookingId)
                .eq(TrialBooking::getUserId, userId)
        );
        if (booking == null) return Result.fail("预约记录不存在");
        booking.setStatus(4);
        trialBookingMapper.updateById(booking);
        return Result.ok("已取消");
    }

    @Override
    public List<String> getServicePoints() {
        String json = sysConfigService.getValue("trial.service_points");
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(json, new TypeReference<List<String>>() {});
        } catch (Exception e) {
            return List.of("漳州岩溪", "厦门湖里", "泉州丰泽");
        }
    }
}
