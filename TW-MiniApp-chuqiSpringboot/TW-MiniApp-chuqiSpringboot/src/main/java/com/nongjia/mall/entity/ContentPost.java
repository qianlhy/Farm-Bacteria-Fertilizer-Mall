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
@TableName("content_post")
public class ContentPost {
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    private String postNo;
    private Long userId;
    private String userNickname;
    private String channel;
    private String contentType;
    private String title;
    private String content;
    private String images;
    private String videoUrl;
    private String videoCover;
    private String location;
    private BigDecimal latitude;
    private BigDecimal longitude;
    private Integer viewCount;
    private Integer likeCount;
    private Integer commentCount;
    private Integer shareCount;
    private Integer status;
    private String auditRemark;
    private LocalDateTime auditAt;
    private Long auditorId;
    private LocalDateTime publishedAt;

    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createdAt;

    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updatedAt;

    @TableLogic
    @TableField(select = false)
    private Integer deleted;
}
