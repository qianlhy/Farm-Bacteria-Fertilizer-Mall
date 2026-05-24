package com.nongjia.mall.entity;

import com.baomidou.mybatisplus.annotation.*;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class PartnerApplication extends Model<PartnerApplication> {
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    private Long userId;
    private String name;
    private String phone;
    private String city;
    private String partnerType;
    private Integer status;
    private String remark;
    private LocalDateTime handledAt;
    private Long handledBy;

    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createdAt;

    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updatedAt;
}
