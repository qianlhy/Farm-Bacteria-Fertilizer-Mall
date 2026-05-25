package com.nongjia.mall.service.impl;

import cn.hutool.core.util.IdUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.config.JwtUtil;
import com.nongjia.mall.dto.LoginDTO;
import com.nongjia.mall.dto.UserInfoDTO;
import com.nongjia.mall.entity.SysUser;
import com.nongjia.mall.entity.UserWallet;
import com.nongjia.mall.mapper.SysUserMapper;
import com.nongjia.mall.mapper.UserWalletMapper;
import com.nongjia.mall.service.UserService;
import com.nongjia.mall.service.UserWalletService;
import com.nongjia.mall.service.WeChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.hutool.core.util.StrUtil;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

@Service
public class UserServiceImpl extends ServiceImpl<SysUserMapper, SysUser> implements UserService {

    @Autowired
    private SysUserMapper sysUserMapper;
    @Autowired
    private UserWalletMapper userWalletMapper;
    @Autowired
    private UserWalletService userWalletService;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private WeChatService weChatService;

    @Override
    @Transactional
    public Result<Map<String, Object>> login(LoginDTO dto) {
        String phone = dto.getPhone();
        SysUser user = sysUserMapper.selectOne(
            new LambdaQueryWrapper<SysUser>().eq(SysUser::getPhone, phone)
        );

        if (user == null) {
            user = createUserWithWallet(userBuilder -> {
                userBuilder.setPhone(phone);
                userBuilder.setNickname("用户" + phone.substring(phone.length() - 4));
            });
        }

        return Result.ok(buildLoginResult(user));
    }

    @Override
    @Transactional
    public Result<Map<String, Object>> wxLogin(LoginDTO dto) {
        String openid = weChatService.getOpenidByCode(dto.getWxCode());
        SysUser user = sysUserMapper.selectOne(
            new LambdaQueryWrapper<SysUser>().eq(SysUser::getOpenid, openid)
        );

        if (user == null) {
            String nickname = StrUtil.blankToDefault(dto.getNickname(), "微信用户");
            user = createUserWithWallet(userBuilder -> {
                userBuilder.setOpenid(openid);
                userBuilder.setNickname(nickname);
                userBuilder.setAvatar(dto.getAvatar());
            });
        } else {
            boolean changed = false;
            if (StrUtil.isNotBlank(dto.getNickname()) && !dto.getNickname().equals(user.getNickname())) {
                user.setNickname(dto.getNickname());
                changed = true;
            }
            if (StrUtil.isNotBlank(dto.getAvatar()) && !dto.getAvatar().equals(user.getAvatar())) {
                user.setAvatar(dto.getAvatar());
                changed = true;
            }
            if (changed) {
                sysUserMapper.updateById(user);
            }
        }

        return Result.ok(buildLoginResult(user));
    }

    private SysUser createUserWithWallet(java.util.function.Consumer<SysUser> customizer) {
        SysUser user = new SysUser();
        customizer.accept(user);
        user.setUserType(1);
        user.setStatus(1);
        user.setInviteCode(IdUtil.fastSimpleUUID().substring(0, 8).toUpperCase());
        user.setTotalRechargeKg(BigDecimal.ZERO);
        sysUserMapper.insert(user);

        UserWallet wallet = new UserWallet();
        wallet.setUserId(user.getId());
        wallet.setFertilizerBalance(BigDecimal.ZERO);
        wallet.setCouponBalance(BigDecimal.ZERO);
        wallet.setFreightSubsidy(BigDecimal.ZERO);
        wallet.setPointsBalance(0L);
        wallet.setTotalPointsEarned(0L);
        wallet.setTotalPointsUsed(0L);
        wallet.setVersion(0);
        userWalletMapper.insert(wallet);
        return user;
    }

    private Map<String, Object> buildLoginResult(SysUser user) {
        String token = jwtUtil.generateToken(user.getId(), user.getPhone());
        UserInfoDTO userInfo = getUserInfo(user.getId());
        Map<String, Object> map = new HashMap<>();
        map.put("token", token);
        map.put("userInfo", userInfo);
        return map;
    }

    @Override
    public UserInfoDTO getUserInfo(Long userId) {
        SysUser user = sysUserMapper.selectById(userId);
        UserWallet wallet = userWalletMapper.selectOne(
            new LambdaQueryWrapper<UserWallet>().eq(UserWallet::getUserId, userId)
        );
        if (user == null) return null;

        UserInfoDTO dto = new UserInfoDTO();
        dto.setUserId(user.getId());
        dto.setPhone(user.getPhone());
        dto.setNickname(user.getNickname());
        dto.setAvatar(user.getAvatar());
        dto.setLicensePlate(user.getLicensePlate());
        dto.setUserType(user.getUserType());
        dto.setInviteCode(user.getInviteCode());

        UserInfoDTO.WalletDTO walletDTO = new UserInfoDTO.WalletDTO();
        walletDTO.setFertilizerBalance(wallet != null ? wallet.getFertilizerBalance().doubleValue() : 0.0);
        walletDTO.setCouponBalance(wallet != null ? wallet.getCouponBalance().doubleValue() : 0.0);
        walletDTO.setFreightSubsidy(wallet != null ? wallet.getFreightSubsidy().doubleValue() : 0.0);
        walletDTO.setPackagingCredit(wallet != null && wallet.getPackagingCredit() != null ? wallet.getPackagingCredit().doubleValue() : 0.0);
        walletDTO.setPointsBalance(wallet != null ? wallet.getPointsBalance() : 0L);
        dto.setWallet(walletDTO);
        return dto;
    }

    @Override
    public SysUser getByPhone(String phone) {
        return sysUserMapper.selectOne(new LambdaQueryWrapper<SysUser>().eq(SysUser::getPhone, phone));
    }

    @Override
    public SysUser getById(Long userId) {
        return sysUserMapper.selectById(userId);
    }
}
