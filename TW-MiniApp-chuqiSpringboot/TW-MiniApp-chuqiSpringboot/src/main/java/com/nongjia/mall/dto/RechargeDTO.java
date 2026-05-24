package com.nongjia.mall.dto;

import lombok.Data;

@Data
public class RechargeDTO {
    private String paymentMethod;
    private Integer quantity;
    private Double totalKg;
    private Double totalPaidPrice;
    private Long totalPointsCost;
    private Long pointsAwarded;
    private Double balanceAfter;
    private Long pointsAfter;
}
