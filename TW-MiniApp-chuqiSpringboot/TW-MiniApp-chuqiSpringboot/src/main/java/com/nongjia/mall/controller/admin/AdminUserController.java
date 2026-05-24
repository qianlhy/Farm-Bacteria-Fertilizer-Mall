package com.nongjia.mall.controller.admin;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.entity.SysUser;
import com.nongjia.mall.entity.UserWallet;
import com.nongjia.mall.mapper.SysUserMapper;
import com.nongjia.mall.mapper.UserWalletMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/admin/users")
public class AdminUserController {

    @Autowired
    private SysUserMapper sysUserMapper;
    @Autowired
    private UserWalletMapper userWalletMapper;

    @GetMapping("/list")
    public Result<Map<String, Object>> list(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "20") int pageSize,
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) Integer userType,
            @RequestParam(required = false) Integer status) {
        LambdaQueryWrapper<SysUser> qw = new LambdaQueryWrapper<>();
        if (keyword != null && !keyword.isEmpty()) {
            qw.and(w -> w.like(SysUser::getPhone, keyword)
                .or().like(SysUser::getNickname, keyword)
                .or().like(SysUser::getLicensePlate, keyword));
        }
        if (userType != null) qw.eq(SysUser::getUserType, userType);
        if (status != null) qw.eq(SysUser::getStatus, status);
        qw.orderByDesc(SysUser::getCreatedAt);

        Page<SysUser> p = new Page<>(page, pageSize);
        Page<SysUser> result = sysUserMapper.selectPage(p, qw);

        List<Long> userIds = result.getRecords().stream().map(SysUser::getId).collect(Collectors.toList());
        List<UserWallet> wallets = userWalletMapper.selectList(
            new LambdaQueryWrapper<UserWallet>().in(UserWallet::getUserId, userIds)
        );
        Map<Long, UserWallet> walletMap = wallets.stream().collect(Collectors.toMap(UserWallet::getUserId, w -> w));

        List<Map<String, Object>> records = result.getRecords().stream().map(user -> {
            Map<String, Object> m = new HashMap<>();
            m.put("id", user.getId());
            m.put("phone", user.getPhone());
            m.put("nickname", user.getNickname());
            m.put("avatar", user.getAvatar());
            m.put("licensePlate", user.getLicensePlate());
            m.put("userType", user.getUserType());
            m.put("status", user.getStatus());
            m.put("totalRechargeKg", user.getTotalRechargeKg());
            m.put("inviteCode", user.getInviteCode());
            m.put("createdAt", user.getCreatedAt() != null ? user.getCreatedAt().toString() : null);
            UserWallet wallet = walletMap.get(user.getId());
            if (wallet != null) {
                m.put("fertilizerBalance", wallet.getFertilizerBalance());
                m.put("couponBalance", wallet.getCouponBalance());
                m.put("freightSubsidy", wallet.getFreightSubsidy());
                m.put("pointsBalance", wallet.getPointsBalance());
            }
            return m;
        }).collect(Collectors.toList());

        Map<String, Object> data = new HashMap<>();
        data.put("total", result.getTotal());
        data.put("page", page);
        data.put("pageSize", pageSize);
        data.put("records", records);
        return Result.ok(data);
    }

    @GetMapping("/detail/{userId}")
    public Result<Map<String, Object>> detail(@PathVariable Long userId) {
        SysUser user = sysUserMapper.selectById(userId);
        if (user == null) return Result.fail("用户不存在");
        UserWallet wallet = userWalletMapper.selectOne(
            new LambdaQueryWrapper<UserWallet>().eq(UserWallet::getUserId, userId)
        );
        Map<String, Object> data = new HashMap<>();
        data.put("user", user);
        data.put("wallet", wallet);
        return Result.ok(data);
    }

    @PostMapping("/update")
    public Result<Void> update(@RequestBody Map<String, Object> params) {
        Long userId = Long.parseLong(params.get("userId").toString());
        SysUser user = sysUserMapper.selectById(userId);
        if (user == null) return Result.fail("用户不存在");
        if (params.get("nickname") != null) user.setNickname((String) params.get("nickname"));
        if (params.get("licensePlate") != null) user.setLicensePlate((String) params.get("licensePlate"));
        if (params.get("status") != null) user.setStatus(Integer.parseInt(params.get("status").toString()));
        if (params.get("userType") != null) user.setUserType(Integer.parseInt(params.get("userType").toString()));
        sysUserMapper.updateById(user);
        return Result.ok("更新成功");
    }

    @PostMapping("/wallet/adjust")
    public Result<Void> adjustWallet(@RequestBody Map<String, Object> params) {
        Long userId = Long.parseLong(params.get("userId").toString());
        String type = (String) params.get("type");
        double amount = Double.parseDouble(params.get("amount").toString());
        String remark = (String) params.getOrDefault("remark", "");

        UserWallet wallet = userWalletMapper.selectOne(
            new LambdaQueryWrapper<UserWallet>().eq(UserWallet::getUserId, userId)
        );
        if (wallet == null) return Result.fail("钱包不存在");

        switch (type) {
            case "fertilizer_add":
                userWalletMapper.addFertilizer(userId, amount, wallet.getVersion());
                break;
            case "fertilizer_sub":
                int r = userWalletMapper.deductFertilizer(userId, amount, wallet.getVersion());
                if (r == 0) return Result.fail("化肥余额不足");
                break;
            case "points_add":
                userWalletMapper.addPoints(userId, (long) amount);
                break;
            case "points_sub":
                int pr = userWalletMapper.deductPoints(userId, (long) amount);
                if (pr == 0) return Result.fail("积分不足");
                break;
            case "freight_add":
                wallet.setFreightSubsidy(wallet.getFreightSubsidy().add(java.math.BigDecimal.valueOf(amount)));
                userWalletMapper.updateById(wallet);
                break;
            case "coupon_add":
                wallet.setCouponBalance(wallet.getCouponBalance().add(java.math.BigDecimal.valueOf(amount)));
                userWalletMapper.updateById(wallet);
                break;
            default:
                return Result.fail("不支持的操作类型");
        }
        return Result.ok("调整成功");
    }
}
