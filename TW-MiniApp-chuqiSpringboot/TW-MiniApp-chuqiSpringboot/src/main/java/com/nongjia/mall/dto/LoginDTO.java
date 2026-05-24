package com.nongjia.mall.dto;

import lombok.Data;

@Data
public class LoginDTO {
    private String phone;
    private String smsCode;
    private String wxCode;
    private String nickname;
    private String avatar;
}
