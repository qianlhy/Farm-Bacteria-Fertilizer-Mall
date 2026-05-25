package com.nongjia.mall.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.nongjia.mall.entity.UserWallet;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface UserWalletMapper extends BaseMapper<UserWallet> {

    @Update("UPDATE user_wallet SET fertilizer_balance = fertilizer_balance + #{kg}, version = version + 1 WHERE user_id = #{userId} AND version = #{version}")
    int addFertilizer(@Param("userId") Long userId, @Param("kg") Double kg, @Param("version") Integer version);

    @Update("UPDATE user_wallet SET points_balance = points_balance + #{points}, total_points_earned = total_points_earned + #{points}, version = version + 1 WHERE user_id = #{userId}")
    int addPoints(@Param("userId") Long userId, @Param("points") Long points);

    @Update("UPDATE user_wallet SET points_balance = points_balance - #{points}, total_points_used = total_points_used + #{points}, version = version + 1 WHERE user_id = #{userId} AND points_balance >= #{points}")
    int deductPoints(@Param("userId") Long userId, @Param("points") Long points);

    @Update("UPDATE user_wallet SET freight_subsidy = freight_subsidy - #{amount}, version = version + 1 WHERE user_id = #{userId} AND freight_subsidy >= #{amount}")
    int deductFreightSubsidy(@Param("userId") Long userId, @Param("amount") Double amount);

    @Update("UPDATE user_wallet SET freight_subsidy = freight_subsidy + #{amount}, version = version + 1 WHERE user_id = #{userId}")
    int addFreightSubsidy(@Param("userId") Long userId, @Param("amount") Double amount);

    @Update("UPDATE user_wallet SET packaging_credit = packaging_credit + #{amount}, version = version + 1 WHERE user_id = #{userId}")
    int addPackagingCredit(@Param("userId") Long userId, @Param("amount") Double amount);

    @Update("UPDATE user_wallet SET packaging_credit = packaging_credit - #{amount}, version = version + 1 WHERE user_id = #{userId} AND packaging_credit >= #{amount}")
    int deductPackagingCredit(@Param("userId") Long userId, @Param("amount") Double amount);

    @Update("UPDATE user_wallet SET fertilizer_balance = fertilizer_balance - #{kg}, version = version + 1 WHERE user_id = #{userId} AND fertilizer_balance >= #{kg} AND version = #{version}")
    int deductFertilizer(@Param("userId") Long userId, @Param("kg") Double kg, @Param("version") Integer version);
}
