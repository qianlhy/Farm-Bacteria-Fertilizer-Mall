package com.nongjia.mall.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.nongjia.mall.entity.*;
import com.nongjia.mall.mapper.*;
import com.nongjia.mall.service.StatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class StatsServiceImpl implements StatsService {

    @Autowired
    private SysUserMapper sysUserMapper;
    @Autowired
    private UserWalletMapper userWalletMapper;
    @Autowired
    private RechargeRecordMapper rechargeRecordMapper;
    @Autowired
    private PickupOrderMapper pickupOrderMapper;
    @Autowired
    private TrialBookingMapper trialBookingMapper;
    @Autowired
    private ContentPostMapper contentPostMapper;
    @Autowired
    private PartnerApplicationMapper partnerApplicationMapper;

    @Override
    public Map<String, Object> getDashboardStats() {
        Map<String, Object> stats = new HashMap<>();

        Long totalUsers = sysUserMapper.selectCount(null);
        stats.put("totalUsers", totalUsers);

        List<UserWallet> wallets = userWalletMapper.selectList(null);
        double totalFertilizer = wallets.stream()
            .mapToDouble(w -> w.getFertilizerBalance() != null ? w.getFertilizerBalance().doubleValue() : 0).sum();
        long totalPoints = wallets.stream()
            .mapToLong(w -> w.getPointsBalance() != null ? w.getPointsBalance() : 0).sum();

        stats.put("totalFertilizerBalance", Math.round(totalFertilizer * 100.0) / 100.0);
        stats.put("totalPointsBalance", totalPoints);

        LocalDateTime startOfMonth = LocalDateTime.now().withDayOfMonth(1).withHour(0).withMinute(0).withSecond(0);
        Long monthlyRecharge = rechargeRecordMapper.selectCount(
            new LambdaQueryWrapper<RechargeRecord>()
                .eq(RechargeRecord::getStatus, 2)
                .ge(RechargeRecord::getCreatedAt, startOfMonth)
        );
        stats.put("monthlyRechargeCount", monthlyRecharge);

        List<RechargeRecord> monthRecords = rechargeRecordMapper.selectList(
            new LambdaQueryWrapper<RechargeRecord>()
                .eq(RechargeRecord::getStatus, 2)
                .ge(RechargeRecord::getCreatedAt, startOfMonth)
        );
        double monthlyRevenue = monthRecords.stream()
            .mapToDouble(r -> r.getPaidPrice() != null ? r.getPaidPrice().doubleValue() : 0).sum();
        stats.put("monthlyRevenue", Math.round(monthlyRevenue * 100.0) / 100.0);

        Long pendingOrders = pickupOrderMapper.selectCount(
            new LambdaQueryWrapper<PickupOrder>().eq(PickupOrder::getStatus, 1));
        Long activeOrders = pickupOrderMapper.selectCount(
            new LambdaQueryWrapper<PickupOrder>().eq(PickupOrder::getStatus, 2));
        stats.put("pendingOrders", pendingOrders);
        stats.put("activeOrders", activeOrders);

        Long pendingTrials = trialBookingMapper.selectCount(
            new LambdaQueryWrapper<TrialBooking>()
                .in(TrialBooking::getStatus, 1, 2));
        stats.put("pendingTrials", pendingTrials);

        Long pendingContent = contentPostMapper.selectCount(
            new LambdaQueryWrapper<ContentPost>().eq(ContentPost::getStatus, 1));
        stats.put("pendingContent", pendingContent);

        Long pendingPartners = partnerApplicationMapper.selectCount(
            new LambdaQueryWrapper<PartnerApplication>().eq(PartnerApplication::getStatus, 1));
        stats.put("pendingPartners", pendingPartners);

        List<Map<String, Object>> recentRecharges = new ArrayList<>();
        List<RechargeRecord> records = rechargeRecordMapper.selectList(
            new LambdaQueryWrapper<RechargeRecord>()
                .eq(RechargeRecord::getStatus, 2)
                .orderByDesc(RechargeRecord::getCreatedAt)
                .last("LIMIT 10")
        );
        for (RechargeRecord r : records) {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("orderNo", r.getOrderNo());
            m.put("productName", r.getProductName());
            m.put("paidPrice", r.getPaidPrice());
            m.put("totalKg", r.getTotalKg());
            m.put("createdAt", r.getCreatedAt() != null ? r.getCreatedAt().toString() : null);
            recentRecharges.add(m);
        }
        stats.put("recentRecharges", recentRecharges);

        List<Map<String, Object>> recentOrders = new ArrayList<>();
        List<PickupOrder> orders = pickupOrderMapper.selectList(
            new LambdaQueryWrapper<PickupOrder>()
                .orderByDesc(PickupOrder::getCreatedAt)
                .last("LIMIT 10")
        );
        for (PickupOrder o : orders) {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("orderNo", o.getOrderNo());
            m.put("pickupType", o.getPickupType());
            m.put("totalKg", o.getTotalKg());
            m.put("status", o.getStatus());
            m.put("createdAt", o.getCreatedAt() != null ? o.getCreatedAt().toString() : null);
            recentOrders.add(m);
        }
        stats.put("recentOrders", recentOrders);

        return stats;
    }
}
