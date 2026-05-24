package com.nongjia.mall.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.nongjia.mall.entity.UserWallet;

public interface UserWalletService extends IService<UserWallet> {
    int addFertilizer(Long userId, Double kg, Integer version);
    int deductFertilizer(Long userId, Double kg, Integer version);
    int addPoints(Long userId, Long points);
    int deductPoints(Long userId, Long points);
}
