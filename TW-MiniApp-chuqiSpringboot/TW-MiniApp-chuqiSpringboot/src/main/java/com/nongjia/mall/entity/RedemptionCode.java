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
@TableName("redemption_code")
public class RedemptionCode implements Serializable {
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    private String code;
    private String batchNo;
    private BigDecimal freightAmount;
    private BigDecimal packagingAmount;
    private Long pointsAmount;
    /** 1未使用 2已使用 3已过期 4已禁用 */
    private Integer status;
    private Long userId;
    private LocalDateTime redeemedAt;
    private LocalDateTime expiresAt;
    private String remark;
    private Long createdBy;

    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createdAt;

    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updatedAt;
}
