package com.nongjia.mall.dto;

import lombok.Data;

@Data
public class RedeemResultDTO {
    private String code;
    private Double freightAmount;
    private Double packagingAmount;
    private Long pointsAmount;
    private Double freightSubsidyAfter;
    private Double packagingCreditAfter;
    private Long pointsAfter;
}
