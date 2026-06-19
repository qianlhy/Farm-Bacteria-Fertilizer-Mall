package com.nongjia.mall.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("pickup_order")
public class PickupOrder {
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    private String orderNo;
    private Long userId;
    private Integer status;
    private String pickupType;
    private String packageType;
    private String packageNewOrUsed;
    private BigDecimal packagePrice;
    private Integer packagePoints;
    private BigDecimal totalKg;
    private BigDecimal freightPerKg;
    private BigDecimal totalFreight;
    private String freightPayment;
    private BigDecimal freightSubsidyUsed;
    private BigDecimal pickupFee;
    private BigDecimal totalAmount;
    private String receiverName;
    private String receiverPhone;
    private String receiverAddress;
    private String deliveryLocation;
    private String remark;
    private LocalDateTime confirmedAt;
    private LocalDateTime shippedAt;
    private LocalDateTime completedAt;

    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createdAt;

    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updatedAt;

    @TableLogic
    @TableField(select = false)
    private Integer deleted;
}
