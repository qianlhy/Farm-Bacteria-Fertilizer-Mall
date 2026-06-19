package com.nongjia.mall.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;

@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("agri_crop")
public class AgriCrop {
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    private String name;
    private String cover;
    private String headerImage;
    private String title;
    private String summary;
    private String body;
    private String reportName;
    private String pdfUrl;
    private Integer sortOrder;
    private Integer status;

    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createdAt;

    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updatedAt;

    @TableLogic
    @TableField(select = false)
    private Integer deleted;
}
