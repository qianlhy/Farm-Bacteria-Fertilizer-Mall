package com.nongjia.mall.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 微信支付配置（公钥模式）。
 */
@Data
@Component
@ConfigurationProperties(prefix = "wechat.pay")
public class WeChatPayProperties {

    /** 是否启用真实微信支付 */
    private boolean enabled = false;

    /** 商户号 */
    private String mchId;

    /** APIv3 密钥 */
    private String apiV3Key;

    /** 商户证书序列号 */
    private String merchantSerialNumber;

    /** 微信支付公钥ID */
    private String publicKeyId;

    /** 商户私钥路径（支持 classpath: 前缀） */
    private String privateKeyPath;

    /** 微信支付公钥路径（支持 classpath: 前缀） */
    private String publicKeyPath;

    /** 支付结果回调地址 */
    private String notifyUrl;
}
