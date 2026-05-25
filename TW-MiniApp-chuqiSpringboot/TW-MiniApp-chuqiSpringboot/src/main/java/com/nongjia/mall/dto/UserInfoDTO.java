package com.nongjia.mall.dto;

import lombok.Data;

@Data
public class UserInfoDTO {
    private Long userId;
    private String phone;
    private String nickname;
    private String avatar;
    private String licensePlate;
    private Integer userType;
    private String inviteCode;
    private WalletDTO wallet;

    @Data
    public static class WalletDTO {
        private Double fertilizerBalance;
        private Double couponBalance;
        private Double freightSubsidy;
        private Double packagingCredit;
        private Long pointsBalance;
    }
}
