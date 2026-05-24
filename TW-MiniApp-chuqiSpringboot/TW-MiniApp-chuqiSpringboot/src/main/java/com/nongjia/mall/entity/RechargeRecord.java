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
@TableName("recharge_record")
public class RechargeRecord {
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    private String orderNo;
    private Long userId;
    private String productKey;
    private String productName;
    private Integer quantity;
    private BigDecimal unitOriginalPrice;
    private BigDecimal discountRate;
    private BigDecimal paidPrice;
    private BigDecimal totalKg;
    private Long pointsAwarded;
    private String paymentMethod;
    private Integer status;
    private LocalDateTime paidAt;
    private String remark;

    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createdAt;

    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updatedAt;

    @TableLogic
    @TableField(select = false)
    private Integer deleted;
}
