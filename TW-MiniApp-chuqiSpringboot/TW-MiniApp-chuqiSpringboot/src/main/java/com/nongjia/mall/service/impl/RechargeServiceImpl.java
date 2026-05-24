package com.nongjia.mall.service.impl;

import cn.hutool.core.util.IdUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.dto.RechargeDTO;
import com.nongjia.mall.entity.*;
import com.nongjia.mall.mapper.*;
import com.nongjia.mall.service.RechargeService;
import com.nongjia.mall.service.SysConfigService;
import com.nongjia.mall.service.UserWalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Service
public class RechargeServiceImpl extends ServiceImpl<RechargeRecordMapper, RechargeRecord> implements RechargeService {

    @Autowired
    private RechargeRecordMapper rechargeRecordMapper;
    @Autowired
    private UserWalletMapper userWalletMapper;
    @Autowired
    private SysUserMapper sysUserMapper;
    @Autowired
    private PointsLogMapper pointsLogMapper;
    @Autowired
    private SysConfigService sysConfigService;

    private String cfg(Map<String, String> map, String key, String def) {
        String v = map.get(key);
        return v != null ? v : def;
    }

    private long calcPointsCost(double paidPrice, double pointsRate) {
        return Math.round(paidPrice * pointsRate);
    }

    @Override
    public RechargeDTO calculate(Long userId, String paymentMethod, Integer quantity) {
        Map<String, String> config = sysConfigService.getProductConfig();
        double pointsRate = sysConfigService.getPointsRate();

        double originalPrice = Double.parseDouble(cfg(config, "originalPrice", "1400"));
        double discountRate = Double.parseDouble(cfg(config, "discountRate", "0.85"));
        double amountKg = Double.parseDouble(cfg(config, "amountKg", "1000"));

        double unitPrice = originalPrice * discountRate;
        double paidPrice = unitPrice * quantity;
        double totalKg = amountKg * quantity;

        UserWallet wallet = userWalletMapper.selectOne(
            new LambdaQueryWrapper<UserWallet>().eq(UserWallet::getUserId, userId)
        );
        RechargeDTO dto = new RechargeDTO();
        dto.setQuantity(quantity);
        dto.setTotalKg(totalKg);
        dto.setTotalPaidPrice(Math.round(paidPrice * 100.0) / 100.0);
        dto.setPointsAwarded((long) paidPrice);

        if ("points".equals(paymentMethod)) {
            long pointsCost = calcPointsCost(paidPrice, pointsRate);
            dto.setTotalPointsCost(pointsCost);
            dto.setPointsAfter(wallet != null ? wallet.getPointsBalance() - pointsCost : -pointsCost);
        } else {
            dto.setTotalPointsCost(0L);
            dto.setPointsAfter(wallet != null ? wallet.getPointsBalance() : 0L);
        }
        dto.setBalanceAfter(wallet != null ? wallet.getFertilizerBalance().doubleValue() + totalKg : totalKg);
        return dto;
    }

    @Override
    @Transactional
    public Result<RechargeDTO> submit(Long userId, String paymentMethod, Integer quantity) {
        Map<String, String> config = sysConfigService.getProductConfig();
        double pointsRate = sysConfigService.getPointsRate();

        double originalPrice = Double.parseDouble(cfg(config, "originalPrice", "1400"));
        double discountRate = Double.parseDouble(cfg(config, "discountRate", "0.85"));
        double amountKg = Double.parseDouble(cfg(config, "amountKg", "1000"));
        String productName = cfg(config, "productName", "1吨农家菌肥");

        double unitPrice = originalPrice * discountRate;
        double paidPrice = unitPrice * quantity;
        double totalKg = amountKg * quantity;
        long pointsAwarded = (long) paidPrice;

        UserWallet wallet = userWalletMapper.selectOne(
            new LambdaQueryWrapper<UserWallet>().eq(UserWallet::getUserId, userId)
        );
        if (wallet == null) return Result.fail("用户钱包不存在");

        if ("points".equals(paymentMethod)) {
            long pointsCost = calcPointsCost(paidPrice, pointsRate);
            if (wallet.getPointsBalance() < pointsCost) return Result.fail("积分不足");
            int rows = userWalletMapper.deductPoints(userId, pointsCost);
            if (rows == 0) return Result.fail("积分扣除失败，请重试");
        }

        userWalletMapper.addFertilizer(userId, totalKg, wallet.getVersion());
        userWalletMapper.addPoints(userId, pointsAwarded);

        wallet = userWalletMapper.selectOne(
            new LambdaQueryWrapper<UserWallet>().eq(UserWallet::getUserId, userId)
        );

        RechargeRecord record = new RechargeRecord();
        record.setOrderNo("CZ" + System.currentTimeMillis() + IdUtil.fastSimpleUUID().substring(0, 4).toUpperCase());
        record.setUserId(userId);
        record.setProductKey("recharge");
        record.setProductName(productName);
        record.setQuantity(quantity);
        record.setUnitOriginalPrice(BigDecimal.valueOf(originalPrice));
        record.setDiscountRate(BigDecimal.valueOf(discountRate));
        record.setPaidPrice(BigDecimal.valueOf(paidPrice));
        record.setTotalKg(BigDecimal.valueOf(totalKg));
        record.setPointsAwarded(pointsAwarded);
        record.setPaymentMethod(paymentMethod);
        record.setStatus(2);
        record.setPaidAt(LocalDateTime.now());
        rechargeRecordMapper.insert(record);

        sysUserMapper.update(null,
            new com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper<SysUser>()
                .eq(SysUser::getId, userId)
                .setSql("total_recharge_kg = total_recharge_kg + " + totalKg)
        );

        PointsLog log = new PointsLog();
        log.setUserId(userId);
        log.setType("earn");
        log.setChangeAmount(pointsAwarded);
        log.setBalanceAfter(wallet.getPointsBalance());
        log.setSource("recharge");
        log.setBizType("recharge_order");
        log.setBizId(record.getOrderNo());
        log.setRemark("充值获得积分");
        pointsLogMapper.insert(log);

        RechargeDTO dto = new RechargeDTO();
        dto.setQuantity(quantity);
        dto.setTotalKg(totalKg);
        dto.setTotalPaidPrice(Math.round(paidPrice * 100.0) / 100.0);
        dto.setPointsAwarded(pointsAwarded);
        dto.setTotalPointsCost("points".equals(paymentMethod) ? calcPointsCost(paidPrice, pointsRate) : 0L);
        dto.setBalanceAfter(wallet.getFertilizerBalance().doubleValue());
        dto.setPointsAfter(wallet.getPointsBalance());
        return Result.ok("充值成功", dto);
    }

    @Override
    public Page<RechargeRecord> listByUser(Long userId, int page, int pageSize) {
        Page<RechargeRecord> p = new Page<>(page, pageSize);
        return rechargeRecordMapper.selectPage(p,
            new LambdaQueryWrapper<RechargeRecord>()
                .eq(RechargeRecord::getUserId, userId)
                .orderByDesc(RechargeRecord::getCreatedAt)
        );
    }
}
