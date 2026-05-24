package com.nongjia.mall.dto;

import lombok.Data;

@Data
public class PickupOrderDTO {
    private Long orderId;
    private String orderNo;
    private Integer status;
    private String pickupType;
    private String packageType;
    private String packageNewOrUsed;
    private Double packagePrice;
    private Integer packagePoints;
    private Double totalKg;
    private Double freightPerKg;
    private Double totalFreight;
    private String freightPayment;
    private Double freightSubsidyUsed;
    private Double totalAmount;
    private Double balanceAfter;
    private Long pointsAfter;
    private String createdAt;
    private String confirmedAt;
    private String completedAt;
}
