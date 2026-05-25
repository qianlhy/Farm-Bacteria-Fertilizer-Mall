package com.nongjia.mall.service.impl;

import cn.hutool.core.util.IdUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.dto.RedeemResultDTO;
import com.nongjia.mall.entity.PointsLog;
import com.nongjia.mall.entity.RedemptionCode;
import com.nongjia.mall.entity.UserWallet;
import com.nongjia.mall.mapper.PointsLogMapper;
import com.nongjia.mall.mapper.RedemptionCodeMapper;
import com.nongjia.mall.mapper.UserWalletMapper;
import com.nongjia.mall.service.RedemptionCodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Service
public class RedemptionCodeServiceImpl extends ServiceImpl<RedemptionCodeMapper, RedemptionCode> implements RedemptionCodeService {

    @Autowired
    private RedemptionCodeMapper redemptionCodeMapper;
    @Autowired
    private UserWalletMapper userWalletMapper;
    @Autowired
    private PointsLogMapper pointsLogMapper;

    @Override
    @Transactional
    public Result<Map<String, Object>> generateBatch(Long adminId, Map<String, Object> params) {
        double freightAmount = parseDouble(params.get("freightAmount"), 0);
        double packagingAmount = parseDouble(params.get("packagingAmount"), 0);
        long pointsAmount = parseLong(params.get("pointsAmount"), 0);
        int count = parseInt(params.get("count"), 1);
        String remark = params.get("remark") != null ? params.get("remark").toString().trim() : null;
        LocalDateTime expiresAt = parseDateTime(params.get("expiresAt"));

        if (count < 1 || count > 500) {
            return Result.fail("单次生成数量需在 1~500 之间");
        }
        if (freightAmount <= 0 && packagingAmount <= 0 && pointsAmount <= 0) {
            return Result.fail("请至少设置一项奖励：运费、包装费或积分");
        }
        if (freightAmount < 0 || packagingAmount < 0 || pointsAmount < 0) {
            return Result.fail("奖励金额不能为负数");
        }

        String batchNo = "DH" + System.currentTimeMillis();
        List<String> codes = new ArrayList<>();
        Set<String> generated = new HashSet<>();

        for (int i = 0; i < count; i++) {
            String code;
            int retry = 0;
            do {
                code = "RD" + IdUtil.fastSimpleUUID().substring(0, 10).toUpperCase();
                retry++;
            } while ((generated.contains(code) || codeExists(code)) && retry < 20);

            if (generated.contains(code) || codeExists(code)) {
                return Result.fail("生成兑换码失败，请重试");
            }

            RedemptionCode entity = new RedemptionCode();
            entity.setCode(code);
            entity.setBatchNo(batchNo);
            entity.setFreightAmount(BigDecimal.valueOf(freightAmount));
            entity.setPackagingAmount(BigDecimal.valueOf(packagingAmount));
            entity.setPointsAmount(pointsAmount);
            entity.setStatus(1);
            entity.setExpiresAt(expiresAt);
            entity.setRemark(remark);
            entity.setCreatedBy(adminId);
            redemptionCodeMapper.insert(entity);

            generated.add(code);
            codes.add(code);
        }

        Map<String, Object> data = new HashMap<>();
        data.put("batchNo", batchNo);
        data.put("count", count);
        data.put("codes", codes);
        data.put("freightAmount", freightAmount);
        data.put("packagingAmount", packagingAmount);
        data.put("pointsAmount", pointsAmount);
        return Result.ok("生成成功", data);
    }

    @Override
    public Page<RedemptionCode> listForAdmin(int page, int pageSize, String keyword, Integer status, String batchNo) {
        LambdaQueryWrapper<RedemptionCode> qw = new LambdaQueryWrapper<>();
        if (keyword != null && !keyword.isEmpty()) {
            qw.like(RedemptionCode::getCode, keyword.trim().toUpperCase());
        }
        if (status != null) {
            qw.eq(RedemptionCode::getStatus, status);
        }
        if (batchNo != null && !batchNo.isEmpty()) {
            qw.eq(RedemptionCode::getBatchNo, batchNo.trim());
        }
        qw.orderByDesc(RedemptionCode::getCreatedAt);
        return redemptionCodeMapper.selectPage(new Page<>(page, pageSize), qw);
    }

    @Override
    @Transactional
    public Result<Void> disableCode(Long id) {
        RedemptionCode code = redemptionCodeMapper.selectById(id);
        if (code == null) {
            return Result.fail("兑换码不存在");
        }
        if (code.getStatus() == 2) {
            return Result.fail("已使用的兑换码不能禁用");
        }
        code.setStatus(4);
        redemptionCodeMapper.updateById(code);
        return Result.ok("已禁用");
    }

    @Override
    @Transactional
    public Result<RedeemResultDTO> redeem(Long userId, String rawCode) {
        if (rawCode == null || rawCode.trim().isEmpty()) {
            return Result.fail("请输入兑换码");
        }
        String codeStr = rawCode.trim().toUpperCase();

        RedemptionCode code = redemptionCodeMapper.selectOne(
            new LambdaQueryWrapper<RedemptionCode>().eq(RedemptionCode::getCode, codeStr)
        );
        if (code == null) {
            return Result.fail("兑换码不存在");
        }
        if (code.getStatus() == 2) {
            return Result.fail("兑换码已被使用");
        }
        if (code.getStatus() == 4) {
            return Result.fail("兑换码已禁用");
        }
        if (code.getStatus() == 3 || (code.getExpiresAt() != null && code.getExpiresAt().isBefore(LocalDateTime.now()))) {
            if (code.getStatus() != 3) {
                code.setStatus(3);
                redemptionCodeMapper.updateById(code);
            }
            return Result.fail("兑换码已过期");
        }

        double freightReward = code.getFreightAmount() != null ? code.getFreightAmount().doubleValue() : 0;
        double packagingReward = code.getPackagingAmount() != null ? code.getPackagingAmount().doubleValue() : 0;
        long pointsReward = code.getPointsAmount() != null ? code.getPointsAmount() : 0;

        UserWallet wallet = userWalletMapper.selectOne(
            new LambdaQueryWrapper<UserWallet>().eq(UserWallet::getUserId, userId)
        );
        if (wallet == null) {
            return Result.fail("用户钱包不存在");
        }

        if (freightReward > 0) {
            userWalletMapper.addFreightSubsidy(userId, freightReward);
        }
        if (packagingReward > 0) {
            userWalletMapper.addPackagingCredit(userId, packagingReward);
        }
        if (pointsReward > 0) {
            userWalletMapper.addPoints(userId, pointsReward);
        }

        code.setStatus(2);
        code.setUserId(userId);
        code.setRedeemedAt(LocalDateTime.now());
        redemptionCodeMapper.updateById(code);

        wallet = userWalletMapper.selectOne(
            new LambdaQueryWrapper<UserWallet>().eq(UserWallet::getUserId, userId)
        );

        if (pointsReward > 0) {
            PointsLog log = new PointsLog();
            log.setUserId(userId);
            log.setType("earn");
            log.setChangeAmount(pointsReward);
            log.setBalanceAfter(wallet.getPointsBalance());
            log.setSource("redemption");
            log.setBizType("redemption_code");
            log.setBizId(codeStr);
            log.setRemark("兑换码奖励积分");
            pointsLogMapper.insert(log);
        }

        RedeemResultDTO dto = new RedeemResultDTO();
        dto.setCode(codeStr);
        dto.setFreightAmount(freightReward);
        dto.setPackagingAmount(packagingReward);
        dto.setPointsAmount(pointsReward);
        dto.setFreightSubsidyAfter(wallet.getFreightSubsidy().doubleValue());
        dto.setPackagingCreditAfter(wallet.getPackagingCredit() != null ? wallet.getPackagingCredit().doubleValue() : 0);
        dto.setPointsAfter(wallet.getPointsBalance());
        return Result.ok("兑换成功", dto);
    }

    private boolean codeExists(String code) {
        return redemptionCodeMapper.selectCount(
            new LambdaQueryWrapper<RedemptionCode>().eq(RedemptionCode::getCode, code)
        ) > 0;
    }

    private double parseDouble(Object value, double def) {
        if (value == null || value.toString().isEmpty()) return def;
        return Double.parseDouble(value.toString());
    }

    private long parseLong(Object value, long def) {
        if (value == null || value.toString().isEmpty()) return def;
        return Long.parseLong(value.toString());
    }

    private int parseInt(Object value, int def) {
        if (value == null || value.toString().isEmpty()) return def;
        return Integer.parseInt(value.toString());
    }

    private LocalDateTime parseDateTime(Object value) {
        if (value == null || value.toString().isEmpty()) return null;
        String text = value.toString().trim();
        if (text.contains("T")) {
            return LocalDateTime.parse(text);
        }
        return LocalDateTime.parse(text, java.time.format.DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    }
}
