package com.nongjia.mall.entity;

import com.baomidou.mybatisplus.annotation.*;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class GroupOrder extends Model<GroupOrder> {
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    private String orderNo;
    private String platform;
    private Long userId;
    private BigDecimal amount;
    private Integer status;
    private LocalDateTime verifiedAt;
    private Long verifiedBy;

    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createdAt;

    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updatedAt;
}
