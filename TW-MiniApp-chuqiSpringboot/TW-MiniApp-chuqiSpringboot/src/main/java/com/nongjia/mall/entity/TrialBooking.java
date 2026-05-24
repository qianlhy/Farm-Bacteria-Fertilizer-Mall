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
@TableName("trial_booking")
public class TrialBooking {
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    private String bookingNo;
    private Long userId;
    private String productName;
    private String servicePoint;
    private String contactName;
    private String contactPhone;
    private String address;
    private String receiverName;
    private String receiverPhone;
    private BigDecimal latitude;
    private BigDecimal longitude;
    private Integer status;
    private String remark;
    private LocalDateTime confirmedAt;
    private LocalDateTime completedAt;

    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createdAt;

    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updatedAt;
}
