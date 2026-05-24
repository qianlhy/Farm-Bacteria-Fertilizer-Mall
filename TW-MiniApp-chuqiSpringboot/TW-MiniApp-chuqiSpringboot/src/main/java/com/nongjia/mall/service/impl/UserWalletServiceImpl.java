package com.nongjia.mall.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.nongjia.mall.entity.UserWallet;
import com.nongjia.mall.mapper.UserWalletMapper;
import com.nongjia.mall.service.UserWalletService;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class UserWalletServiceImpl extends ServiceImpl<UserWalletMapper, UserWallet> implements UserWalletService {

    @Override
    public int addFertilizer(Long userId, Double kg, Integer version) {
        UserWallet wallet = getByUserId(userId);
        if (wallet == null) {
            wallet = new UserWallet();
            wallet.setUserId(userId);
            wallet.setFertilizerBalance(BigDecimal.valueOf(kg));
            wallet.setCouponBalance(BigDecimal.ZERO);
            wallet.setFreightSubsidy(BigDecimal.ZERO);
            wallet.setPointsBalance(0L);
            wallet.setTotalPointsEarned(0L);
            wallet.setTotalPointsUsed(0L);
            wallet.setVersion(0);
            return save(wallet) ? 1 : 0;
        }
        wallet.setFertilizerBalance(wallet.getFertilizerBalance().add(BigDecimal.valueOf(kg)));
        return updateById(wallet) ? 1 : 0;
    }

    @Override
    public int deductFertilizer(Long userId, Double kg, Integer version) {
        UserWallet wallet = getByUserId(userId);
        if (wallet == null) return 0;
        BigDecimal after = wallet.getFertilizerBalance().subtract(BigDecimal.valueOf(kg));
        if (after.compareTo(BigDecimal.ZERO) < 0) return 0;
        wallet.setFertilizerBalance(after);
        return updateById(wallet) ? 1 : 0;
    }

    @Override
    public int addPoints(Long userId, Long points) {
        UserWallet wallet = getByUserId(userId);
        if (wallet == null) return 0;
        wallet.setPointsBalance(wallet.getPointsBalance() + points);
        wallet.setTotalPointsEarned(wallet.getTotalPointsEarned() + points);
        return updateById(wallet) ? 1 : 0;
    }

    @Override
    public int deductPoints(Long userId, Long points) {
        UserWallet wallet = getByUserId(userId);
        if (wallet == null) return 0;
        if (wallet.getPointsBalance() < points) return 0;
        wallet.setPointsBalance(wallet.getPointsBalance() - points);
        wallet.setTotalPointsUsed(wallet.getTotalPointsUsed() + points);
        return updateById(wallet) ? 1 : 0;
    }

    private UserWallet getByUserId(Long userId) {
        return getOne(new LambdaQueryWrapper<UserWallet>().eq(UserWallet::getUserId, userId));
    }
}
