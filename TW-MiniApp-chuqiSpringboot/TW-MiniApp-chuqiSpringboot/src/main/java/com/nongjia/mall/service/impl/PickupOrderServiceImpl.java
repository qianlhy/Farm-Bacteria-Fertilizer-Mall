package com.nongjia.mall.service.impl;

import cn.hutool.core.util.IdUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.dto.PickupOrderDTO;
import com.nongjia.mall.entity.*;
import com.nongjia.mall.mapper.*;
import com.nongjia.mall.service.PickupOrderService;
import com.nongjia.mall.service.SysConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@Service
public class PickupOrderServiceImpl extends ServiceImpl<PickupOrderMapper, PickupOrder> implements PickupOrderService {

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

        Map<String, String> config = sysConfigService.getProductConfig();
        double pointsRate = sysConfigService.getPointsRate();
        double minKg = Double.parseDouble(cfg(config, "minKg", "1000"));

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
        if (wallet == null) return Result.fail("钱包不存在");

        int rows = userWalletMapper.deductFertilizer(userId, totalKg, wallet.getVersion());
        if (rows == 0) return Result.fail("化肥余额不足");

        if (packagePoints > 0 && "points".equals(params.get("packagePayment"))) {
            int pRows = userWalletMapper.deductPoints(userId, (long) packagePoints);
            if (pRows == 0) {
                userWalletMapper.addFertilizer(userId, totalKg, wallet.getVersion() + 1);
                return Result.fail("积分不足");
            }
        }

        if ("delivery".equals(pickupType) && freightSubsidyUsed > 0) {
            if (freightSubsidyUsed > totalFreight) freightSubsidyUsed = totalFreight;
            userWalletMapper.deductFreightSubsidy(userId, freightSubsidyUsed);
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
        order.setPackagePoints(packagePoints);
        order.setTotalKg(BigDecimal.valueOf(totalKg));
        order.setFreightPerKg(BigDecimal.valueOf(freightPerKg));
        order.setTotalFreight(BigDecimal.valueOf(totalFreight));
        order.setFreightPayment(freightPayment);
        order.setFreightSubsidyUsed(BigDecimal.valueOf(freightSubsidyUsed));
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
        dto.setTotalAmount(o.getTotalAmount() != null ? o.getTotalAmount().doubleValue() : 0);
        dto.setCreatedAt(o.getCreatedAt() != null ? o.getCreatedAt().format(DF) : null);
        dto.setConfirmedAt(o.getConfirmedAt() != null ? o.getConfirmedAt().format(DF) : null);
        dto.setCompletedAt(o.getCompletedAt() != null ? o.getCompletedAt().format(DF) : null);
        return dto;
    }
}
