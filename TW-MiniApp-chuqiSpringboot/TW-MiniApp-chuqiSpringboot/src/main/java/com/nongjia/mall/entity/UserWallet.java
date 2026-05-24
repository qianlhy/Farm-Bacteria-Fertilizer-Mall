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
@TableName("user_wallet")
public class UserWallet {
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    private Long userId;
    private BigDecimal fertilizerBalance;
    private BigDecimal couponBalance;
    private BigDecimal freightSubsidy;
    private Long pointsBalance;
    private Long totalPointsEarned;
    private Long totalPointsUsed;
    private Integer version;

    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createdAt;

    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updatedAt;
}
