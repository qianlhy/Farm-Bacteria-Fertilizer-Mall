package com.nongjia.mall.service.impl;



import cn.hutool.core.util.IdUtil;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import com.nongjia.mall.common.Result;

import com.nongjia.mall.dto.PickupOrderDTO;

import com.nongjia.mall.entity.*;

import com.nongjia.mall.mapper.*;

import com.nongjia.mall.service.PickupOrderService;

import com.nongjia.mall.service.SysConfigService;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;



import java.math.BigDecimal;

import java.time.LocalDateTime;

import java.time.format.DateTimeFormatter;

import java.util.List;

import java.util.Map;



@Service

public class PickupOrderServiceImpl extends ServiceImpl<PickupOrderMapper, PickupOrder> implements PickupOrderService {



    private static final Logger LOGGER = LoggerFactory.getLogger(PickupOrderServiceImpl.class);



    @Autowired

    private PickupOrderMapper pickupOrderMapper;

    @Autowired

    private UserWalletMapper userWalletMapper;

    @Autowired

    private PointsLogMapper pointsLogMapper;

    @Autowired

    private SysConfigService sysConfigService;



    private static final DateTimeFormatter DF = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");



    private String cfg(Map<String, String> map, String key, String def) {

        String v = map.get(key);

        return v != null ? v : def;

    }



    @Override

    @Transactional

    public Result<PickupOrderDTO> createOrder(Long userId, Map<String, Object> params) {

        String pickupType = (String) params.get("pickupType");

        String packageType = (String) params.get("packageType");

        String packageNewOrUsed = params.get("packageNewOrUsed") != null ? (String) params.get("packageNewOrUsed") : "new";

        double totalKg = Double.parseDouble(params.get("totalKg").toString());

        int quantity = params.get("quantity") != null

            ? Integer.parseInt(params.get("quantity").toString())

            : 1;

        if (quantity <= 0) {

            return Result.fail("数量无效");

        }



        String freightPayment = params.get("freightPayment") != null ? (String) params.get("freightPayment") : "cash";

        double freightSubsidyUsed = 0;

        if (params.get("freightSubsidyUsed") != null) {

            freightSubsidyUsed = Double.parseDouble(params.get("freightSubsidyUsed").toString());

        }

        double packagingCreditUsed = 0;

        if (params.get("packagingCreditUsed") != null) {

            packagingCreditUsed = Double.parseDouble(params.get("packagingCreditUsed").toString());

        }



        Map<String, String> config = sysConfigService.getProductConfig();

        double pointsRate = sysConfigService.getPointsRate();

        double minKg = Double.parseDouble(cfg(config, "minKg", "100"));



        if ("delivery".equals(pickupType) && totalKg < minKg) {

            return Result.fail("配送起送量为 " + (int) minKg + "Kg");

        }



        double unitPackagePrice = 0;

        if ("blue_bucket".equals(packageType)) {

            unitPackagePrice = "new".equals(packageNewOrUsed)

                ? Double.parseDouble(cfg(config, "blueBucketNew", "35"))

                : Double.parseDouble(cfg(config, "blueBucketUsed", "15"));

        } else if ("ton_bucket".equals(packageType)) {

            unitPackagePrice = "new".equals(packageNewOrUsed)

                ? Double.parseDouble(cfg(config, "tonBucketNew", "700"))

                : Double.parseDouble(cfg(config, "tonBucketUsed", "300"));

        }



        double packagePrice = Math.round(unitPackagePrice * quantity * 100.0) / 100.0;

        int packagePoints = (int) Math.round(packagePrice * pointsRate);



        double freightPerKg = Double.parseDouble(cfg(config, "freightPerKg", "0.1"));

        double totalFreight = "delivery".equals(pickupType) ? totalKg * freightPerKg : 0;

        double pickupFee = "transfer".equals(pickupType) ? 0 : packagePrice;

        double totalAmount = pickupFee + totalFreight;



        UserWallet wallet = userWalletMapper.selectOne(

            new LambdaQueryWrapper<UserWallet>().eq(UserWallet::getUserId, userId)

        );

        if (wallet == null) {

            LOGGER.warn("提货下单失败：钱包不存在，userId={}", userId);

            return Result.fail("钱包不存在");

        }



        double deductKg = totalKg + totalAmount; // 1元=1Kg：包装费+配送费折算成额度，统一从化肥额度扣减

        int rows = userWalletMapper.deductFertilizer(userId, deductKg, wallet.getVersion());

        if (rows == 0) {

            LOGGER.warn("提货下单失败：额度不足，userId={}, needKg={}", userId, deductKg);

            return Result.fail("额度不足，本次需 " + (int) Math.ceil(deductKg) + "Kg（含包装费/配送费）");

        }



        wallet = userWalletMapper.selectOne(

            new LambdaQueryWrapper<UserWallet>().eq(UserWallet::getUserId, userId)

        );



        PickupOrder order = new PickupOrder();

        order.setOrderNo("TH" + System.currentTimeMillis() + IdUtil.fastSimpleUUID().substring(0, 4).toUpperCase());

        order.setUserId(userId);

        order.setStatus(1);

        order.setPickupType(pickupType);

        order.setPackageType(packageType);

        order.setPackageNewOrUsed(packageNewOrUsed);

        order.setPackagePrice(BigDecimal.valueOf(packagePrice));

        order.setPackagePoints(0);

        order.setTotalKg(BigDecimal.valueOf(totalKg));

        order.setFreightPerKg(BigDecimal.valueOf(freightPerKg));

        order.setTotalFreight(BigDecimal.valueOf(totalFreight));

        order.setFreightPayment("quota");

        order.setFreightSubsidyUsed(BigDecimal.ZERO);

        order.setPickupFee(BigDecimal.valueOf(pickupFee));

        order.setTotalAmount(BigDecimal.valueOf(totalAmount));

        order.setReceiverName((String) params.get("receiverName"));

        order.setReceiverPhone((String) params.get("receiverPhone"));

        order.setReceiverAddress((String) params.get("receiverAddress"));

        order.setDeliveryLocation((String) params.get("deliveryLocation"));

        order.setRemark((String) params.get("remark"));

        pickupOrderMapper.insert(order);



        PickupOrderDTO dto = toDTO(order);

        dto.setBalanceAfter(wallet.getFertilizerBalance().doubleValue());

        dto.setPointsAfter(wallet.getPointsBalance());

        LOGGER.info("提货下单成功，userId={}, orderNo={}, totalKg={}, pickupType={}", userId, order.getOrderNo(), totalKg, pickupType);

        return Result.ok("下单成功", dto);

    }



    @Override

    public Page<PickupOrder> listByUser(Long userId, int page, int pageSize) {

        Page<PickupOrder> p = new Page<>(page, pageSize);

        return pickupOrderMapper.selectPage(p,

            new LambdaQueryWrapper<PickupOrder>()

                .eq(PickupOrder::getUserId, userId)

                .orderByDesc(PickupOrder::getCreatedAt)

        );

    }



    @Override

    public PickupOrderDTO getOrderDetail(Long userId, Long orderId) {

        PickupOrder order = pickupOrderMapper.selectOne(

            new LambdaQueryWrapper<PickupOrder>()

                .eq(PickupOrder::getId, orderId)

                .eq(PickupOrder::getUserId, userId)

        );

        return toDTO(order);

    }



    @Override
    public Result<Void> packOrder(Long orderId) {
        int rows = pickupOrderMapper.update(null, new LambdaUpdateWrapper<PickupOrder>()
            .eq(PickupOrder::getId, orderId)
            .eq(PickupOrder::getStatus, 1)
            .set(PickupOrder::getStatus, 2)
            .set(PickupOrder::getConfirmedAt, LocalDateTime.now()));
        if (rows == 0) {
            PickupOrder order = pickupOrderMapper.selectById(orderId);
            if (order == null) return Result.fail("订单不存在");
            return Result.fail("仅待确认订单可开始打包");
        }
        return Result.ok("已开始打包");
    }

    @Override
    public Result<Void> shipOrder(Long orderId) {
        int rows = pickupOrderMapper.update(null, new LambdaUpdateWrapper<PickupOrder>()
            .eq(PickupOrder::getId, orderId)
            .eq(PickupOrder::getStatus, 2)
            .set(PickupOrder::getStatus, 3)
            .set(PickupOrder::getShippedAt, LocalDateTime.now()));
        if (rows == 0) {
            PickupOrder order = pickupOrderMapper.selectById(orderId);
            if (order == null) return Result.fail("订单不存在");
            return Result.fail("仅打包中订单可发货");
        }
        return Result.ok("已发货");
    }

    @Override
    public Result<Void> receiveOrder(Long orderId) {
        int rows = pickupOrderMapper.update(null, new LambdaUpdateWrapper<PickupOrder>()
            .eq(PickupOrder::getId, orderId)
            .eq(PickupOrder::getStatus, 3)
            .set(PickupOrder::getStatus, 4)
            .set(PickupOrder::getCompletedAt, LocalDateTime.now()));
        if (rows == 0) {
            PickupOrder order = pickupOrderMapper.selectById(orderId);
            if (order == null) return Result.fail("订单不存在");
            return Result.fail("仅已发货订单可确认收货");
        }
        return Result.ok("已收货");
    }

    @Override
    @Transactional
    public Result<Void> cancelByAdmin(Long orderId, String remark) {
        PickupOrder order = pickupOrderMapper.selectById(orderId);
        if (order == null) return Result.fail("订单不存在");
        if (order.getStatus() != 1) return Result.fail("订单已进入打包，无法取消");

        double refundKg = (order.getTotalKg() != null ? order.getTotalKg().doubleValue() : 0)
            + (order.getTotalAmount() != null ? order.getTotalAmount().doubleValue() : 0);
        if (refundKg > 0) {
            UserWallet wallet = userWalletMapper.selectOne(
                new LambdaQueryWrapper<UserWallet>().eq(UserWallet::getUserId, order.getUserId())
            );
            if (wallet != null) {
                userWalletMapper.addFertilizer(order.getUserId(), refundKg, wallet.getVersion());
            }
        }

        order.setStatus(5);
        order.setRemark(remark != null && !remark.isEmpty() ? remark : "管理员取消");
        pickupOrderMapper.updateById(order);
        LOGGER.info("提货订单取消并退还额度，orderId={}, refundKg={}", orderId, refundKg);
        return Result.ok("已取消并退还额度");
    }

    private PickupOrderDTO toDTO(PickupOrder o) {

        if (o == null) return null;

        PickupOrderDTO dto = new PickupOrderDTO();

        dto.setOrderId(o.getId());

        dto.setOrderNo(o.getOrderNo());

        dto.setStatus(o.getStatus());

        dto.setPickupType(o.getPickupType());

        dto.setPackageType(o.getPackageType());

        dto.setPackageNewOrUsed(o.getPackageNewOrUsed());

        dto.setPackagePrice(o.getPackagePrice() != null ? o.getPackagePrice().doubleValue() : 0);

        dto.setPackagePoints(o.getPackagePoints() != null ? o.getPackagePoints() : 0);

        dto.setTotalKg(o.getTotalKg() != null ? o.getTotalKg().doubleValue() : 0);

        dto.setFreightPerKg(o.getFreightPerKg() != null ? o.getFreightPerKg().doubleValue() : 0);

        dto.setTotalFreight(o.getTotalFreight() != null ? o.getTotalFreight().doubleValue() : 0);

        dto.setFreightPayment(o.getFreightPayment());

        dto.setFreightSubsidyUsed(o.getFreightSubsidyUsed() != null ? o.getFreightSubsidyUsed().doubleValue() : 0);

        double amount = o.getTotalAmount() != null ? o.getTotalAmount().doubleValue() : 0;

        double kg = o.getTotalKg() != null ? o.getTotalKg().doubleValue() : 0;

        dto.setTotalAmount(amount);

        dto.setDeductKg(kg + amount);

        dto.setCreatedAt(o.getCreatedAt() != null ? o.getCreatedAt().format(DF) : null);

        dto.setConfirmedAt(o.getConfirmedAt() != null ? o.getConfirmedAt().format(DF) : null);

        dto.setShippedAt(o.getShippedAt() != null ? o.getShippedAt().format(DF) : null);

        dto.setCompletedAt(o.getCompletedAt() != null ? o.getCompletedAt().format(DF) : null);

        return dto;

    }

}


