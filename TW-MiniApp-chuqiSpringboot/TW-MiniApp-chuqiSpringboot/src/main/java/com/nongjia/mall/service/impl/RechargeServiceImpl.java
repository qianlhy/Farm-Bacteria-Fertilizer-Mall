package com.nongjia.mall.service.impl;

import cn.hutool.core.util.IdUtil;
import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.config.WeChatPayProperties;
import com.nongjia.mall.dto.RechargeDTO;
import com.nongjia.mall.entity.*;
import com.nongjia.mall.mapper.*;
import com.nongjia.mall.service.RechargeService;
import com.nongjia.mall.service.SysConfigService;
import com.nongjia.mall.service.WeChatPayService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Service
public class RechargeServiceImpl extends ServiceImpl<RechargeRecordMapper, RechargeRecord> implements RechargeService {

    private static final Logger LOGGER = LoggerFactory.getLogger(RechargeServiceImpl.class);

    private static final int STATUS_PENDING = 1;
    private static final int STATUS_PAID = 2;

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
    @Autowired
    private WeChatPayProperties weChatPayProperties;
    @Autowired
    private ObjectProvider<WeChatPayService> weChatPayServiceProvider;

    private String cfg(Map<String, String> map, String key, String def) {
        String v = map.get(key);
        return v != null ? v : def;
    }

    private long calcPointsCost(double paidPrice, double pointsRate) {
        return Math.round(paidPrice * pointsRate);
    }

    /** 价格计算结果 */
    private static class PriceCalc {
        double originalPrice;
        double discountRate;
        double amountKg;
        String productName;
        double paidPrice;
        double totalKg;
        long pointsAwarded;
    }

    private PriceCalc computePrice(Integer quantity) {
        Map<String, String> config = sysConfigService.getProductConfig();
        PriceCalc c = new PriceCalc();
        c.originalPrice = Double.parseDouble(cfg(config, "originalPrice", "1400"));
        c.discountRate = Double.parseDouble(cfg(config, "discountRate", "0.85"));
        c.amountKg = Double.parseDouble(cfg(config, "amountKg", "1000"));
        c.productName = cfg(config, "productName", "1吨农家菌肥");
        double unitPrice = c.originalPrice * c.discountRate;
        c.paidPrice = unitPrice * quantity;
        c.totalKg = c.amountKg * quantity;
        c.pointsAwarded = (long) c.paidPrice;
        return c;
    }

    @Override
    public RechargeDTO calculate(Long userId, String paymentMethod, Integer quantity) {
        double pointsRate = sysConfigService.getPointsRate();
        PriceCalc c = computePrice(quantity);

        UserWallet wallet = userWalletMapper.selectOne(
            new LambdaQueryWrapper<UserWallet>().eq(UserWallet::getUserId, userId)
        );
        RechargeDTO dto = new RechargeDTO();
        dto.setQuantity(quantity);
        dto.setTotalKg(c.totalKg);
        dto.setTotalPaidPrice(Math.round(c.paidPrice * 100.0) / 100.0);
        dto.setPointsAwarded((long) c.paidPrice);

        if ("points".equals(paymentMethod)) {
            long pointsCost = calcPointsCost(c.paidPrice, pointsRate);
            dto.setTotalPointsCost(pointsCost);
            dto.setPointsAfter(wallet != null ? wallet.getPointsBalance() - pointsCost : -pointsCost);
        } else {
            dto.setTotalPointsCost(0L);
            dto.setPointsAfter(wallet != null ? wallet.getPointsBalance() : 0L);
        }
        dto.setBalanceAfter(wallet != null ? wallet.getFertilizerBalance().doubleValue() + c.totalKg : c.totalKg);
        return dto;
    }

    /** 创建充值订单记录 */
    private RechargeRecord buildRecord(Long userId, Integer quantity, PriceCalc c, String paymentMethod, int status) {
        RechargeRecord record = new RechargeRecord();
        record.setOrderNo("CZ" + System.currentTimeMillis() + IdUtil.fastSimpleUUID().substring(0, 4).toUpperCase());
        record.setUserId(userId);
        record.setProductKey("recharge");
        record.setProductName(c.productName);
        record.setQuantity(quantity);
        record.setUnitOriginalPrice(BigDecimal.valueOf(c.originalPrice));
        record.setDiscountRate(BigDecimal.valueOf(c.discountRate));
        record.setPaidPrice(BigDecimal.valueOf(c.paidPrice));
        record.setTotalKg(BigDecimal.valueOf(c.totalKg));
        record.setPointsAwarded(c.pointsAwarded);
        record.setPaymentMethod(paymentMethod);
        record.setStatus(status);
        if (status == STATUS_PAID) {
            record.setPaidAt(LocalDateTime.now());
        }
        return record;
    }

    /** 给钱包加余额并记录积分流水（充值到账核心逻辑） */
    private void creditWallet(RechargeRecord record) {
        Long userId = record.getUserId();
        double totalKg = record.getTotalKg().doubleValue();
        long pointsAwarded = record.getPointsAwarded() != null ? record.getPointsAwarded() : 0L;

        UserWallet wallet = userWalletMapper.selectOne(
            new LambdaQueryWrapper<UserWallet>().eq(UserWallet::getUserId, userId)
        );
        if (wallet == null) {
            throw new IllegalStateException("用户钱包不存在, userId=" + userId);
        }

        userWalletMapper.addFertilizer(userId, totalKg, wallet.getVersion());
        userWalletMapper.addPoints(userId, pointsAwarded);

        wallet = userWalletMapper.selectOne(
            new LambdaQueryWrapper<UserWallet>().eq(UserWallet::getUserId, userId)
        );

        sysUserMapper.update(null,
            new LambdaUpdateWrapper<SysUser>()
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
    }

    @Override
    @Transactional
    public Result<RechargeDTO> submit(Long userId, String paymentMethod, Integer quantity) {
        // 该入口仅用于积分兑换；现金支付走 createWechatPayOrder
        if (!"points".equals(paymentMethod)) {
            return Result.fail("现金支付请使用微信支付");
        }

        double pointsRate = sysConfigService.getPointsRate();
        PriceCalc c = computePrice(quantity);

        LOGGER.info("用户提交积分兑换，userId={}, quantity={}", userId, quantity);
        UserWallet wallet = userWalletMapper.selectOne(
            new LambdaQueryWrapper<UserWallet>().eq(UserWallet::getUserId, userId)
        );
        if (wallet == null) {
            LOGGER.warn("兑换失败：用户钱包不存在，userId={}", userId);
            return Result.fail("用户钱包不存在");
        }

        long pointsCost = calcPointsCost(c.paidPrice, pointsRate);
        if (wallet.getPointsBalance() < pointsCost) {
            LOGGER.warn("兑换失败：积分不足，userId={}, need={}, balance={}", userId, pointsCost, wallet.getPointsBalance());
            return Result.fail("积分不足");
        }
        int rows = userWalletMapper.deductPoints(userId, pointsCost);
        if (rows == 0) {
            return Result.fail("积分扣除失败，请重试");
        }

        RechargeRecord record = buildRecord(userId, quantity, c, "points", STATUS_PAID);
        creditWallet(record);
        rechargeRecordMapper.insert(record);

        wallet = userWalletMapper.selectOne(
            new LambdaQueryWrapper<UserWallet>().eq(UserWallet::getUserId, userId)
        );

        RechargeDTO dto = new RechargeDTO();
        dto.setQuantity(quantity);
        dto.setTotalKg(c.totalKg);
        dto.setTotalPaidPrice(Math.round(c.paidPrice * 100.0) / 100.0);
        dto.setPointsAwarded(c.pointsAwarded);
        dto.setTotalPointsCost(pointsCost);
        dto.setBalanceAfter(wallet.getFertilizerBalance().doubleValue());
        dto.setPointsAfter(wallet.getPointsBalance());
        LOGGER.info("积分兑换成功，userId={}, orderNo={}, totalKg={}", userId, record.getOrderNo(), c.totalKg);
        return Result.ok("兑换成功", dto);
    }

    @Override
    public Result<Map<String, String>> createWechatPayOrder(Long userId, Integer quantity) {
        PriceCalc c;
        int amountFen;
        try {
            c = computePrice(quantity);
            amountFen = (int) Math.round(c.paidPrice * 100.0);
            if (amountFen <= 0) {
                return Result.fail("支付金额异常");
            }
        } catch (Exception e) {
            LOGGER.error("微信支付下单-计价异常，userId={}", userId, e);
            return Result.fail("下单异常(计价) " + e.getClass().getSimpleName() + ": " + e.getMessage());
        }

        WeChatPayService weChatPayService = weChatPayServiceProvider.getIfAvailable();
        LOGGER.info("微信支付下单开始，userId={}, quantity={}, enabled={}, serviceAvailable={}",
            userId, quantity, weChatPayProperties.isEnabled(), weChatPayService != null);

        // 未启用真实微信支付（本地开发）：直接到账
        if (!weChatPayProperties.isEnabled() || weChatPayService == null) {
            try {
                creditMock(userId, quantity, c);
            } catch (Exception e) {
                LOGGER.error("模拟到账异常，userId={}", userId, e);
                return Result.fail("下单异常(模拟到账) " + e.getClass().getSimpleName() + ": " + e.getMessage());
            }
            Map<String, String> mock = new HashMap<>();
            mock.put("paid", "true");
            return Result.ok("支付成功", mock);
        }

        // 真实微信支付：先校验 openid，再下单（纯网络），成功后才落库
        SysUser user = sysUserMapper.selectById(userId);
        if (user == null || StrUtil.isBlank(user.getOpenid()) || user.getOpenid().startsWith("mock_")) {
            return Result.fail("请使用微信登录后再支付（缺少有效 openid）");
        }

        String orderNo = "CZ" + System.currentTimeMillis() + IdUtil.fastSimpleUUID().substring(0, 4).toUpperCase();
        Map<String, String> payParams;
        try {
            payParams = weChatPayService.createJsapiOrder(user.getOpenid(), orderNo, amountFen, c.productName);
        } catch (Exception e) {
            LOGGER.error("微信支付下单调用异常，userId={}, orderNo={}", userId, orderNo, e);
            return Result.fail("下单异常(微信) " + e.getClass().getSimpleName() + ": " + e.getMessage());
        }

        try {
            savePendingRecord(userId, quantity, c, orderNo);
        } catch (Exception e) {
            LOGGER.error("保存待支付订单异常，userId={}, orderNo={}", userId, orderNo, e);
            return Result.fail("下单异常(落库) " + e.getClass().getSimpleName() + ": " + e.getMessage());
        }

        return Result.ok("下单成功", payParams);
    }

    @Transactional
    public void creditMock(Long userId, Integer quantity, PriceCalc c) {
        RechargeRecord record = buildRecord(userId, quantity, c, "wechat", STATUS_PAID);
        record.setOrderNo("CZ" + System.currentTimeMillis() + IdUtil.fastSimpleUUID().substring(0, 4).toUpperCase());
        creditWallet(record);
        rechargeRecordMapper.insert(record);
        LOGGER.info("微信支付未启用，模拟到账，userId={}, orderNo={}", userId, record.getOrderNo());
    }

    @Transactional
    public void savePendingRecord(Long userId, Integer quantity, PriceCalc c, String orderNo) {
        RechargeRecord record = buildRecord(userId, quantity, c, "wechat", STATUS_PENDING);
        record.setOrderNo(orderNo);
        rechargeRecordMapper.insert(record);
    }

    @Override
    @Transactional
    public void handlePaySuccess(String orderNo, String transactionId) {
        RechargeRecord record = rechargeRecordMapper.selectOne(
            new LambdaQueryWrapper<RechargeRecord>().eq(RechargeRecord::getOrderNo, orderNo)
        );
        if (record == null) {
            LOGGER.warn("支付回调：订单不存在，orderNo={}", orderNo);
            return;
        }
        if (record.getStatus() != null && record.getStatus() == STATUS_PAID) {
            LOGGER.info("支付回调：订单已处理，幂等跳过，orderNo={}", orderNo);
            return;
        }

        creditWallet(record);

        rechargeRecordMapper.update(null,
            new LambdaUpdateWrapper<RechargeRecord>()
                .eq(RechargeRecord::getOrderNo, orderNo)
                .eq(RechargeRecord::getStatus, STATUS_PENDING)
                .set(RechargeRecord::getStatus, STATUS_PAID)
                .set(RechargeRecord::getPaidAt, LocalDateTime.now())
                .set(RechargeRecord::getRemark, "微信支付单号:" + transactionId)
        );
        LOGGER.info("支付回调处理成功，orderNo={}, transactionId={}, totalKg={}",
            orderNo, transactionId, record.getTotalKg());
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
