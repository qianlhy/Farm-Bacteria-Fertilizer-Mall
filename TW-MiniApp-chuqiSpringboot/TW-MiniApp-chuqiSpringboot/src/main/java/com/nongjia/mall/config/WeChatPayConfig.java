package com.nongjia.mall.config;

import com.wechat.pay.java.core.RSAPublicKeyConfig;
import com.wechat.pay.java.service.payments.jsapi.JsapiServiceExtension;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;

import java.nio.charset.StandardCharsets;

/**
 * 微信支付 SDK（公钥模式）Bean 构建，仅当 wechat.pay.enabled=true 时生效。
 */
@Configuration
@ConditionalOnProperty(prefix = "wechat.pay", name = "enabled", havingValue = "true")
public class WeChatPayConfig {

    private static final Logger log = LoggerFactory.getLogger(WeChatPayConfig.class);

    private final WeChatPayProperties properties;
    private final ResourceLoader resourceLoader;

    public WeChatPayConfig(WeChatPayProperties properties, ResourceLoader resourceLoader) {
        this.properties = properties;
        this.resourceLoader = resourceLoader;
    }

    @Bean
    public RSAPublicKeyConfig rsaPublicKeyConfig() {
        String privateKey = readPem(properties.getPrivateKeyPath());
        String publicKey = readPem(properties.getPublicKeyPath());

        log.info("初始化微信支付配置，mchId={}, serial={}, publicKeyId={}",
                properties.getMchId(), properties.getMerchantSerialNumber(), properties.getPublicKeyId());

        return new RSAPublicKeyConfig.Builder()
                .merchantId(properties.getMchId())
                .privateKey(privateKey)
                .publicKey(publicKey)
                .publicKeyId(properties.getPublicKeyId())
                .merchantSerialNumber(properties.getMerchantSerialNumber())
                .apiV3Key(properties.getApiV3Key())
                .build();
    }

    @Bean
    public JsapiServiceExtension jsapiServiceExtension(RSAPublicKeyConfig config) {
        return new JsapiServiceExtension.Builder().config(config).build();
    }

    private String readPem(String path) {
        try {
            Resource resource = resourceLoader.getResource(path);
            byte[] bytes = resource.getInputStream().readAllBytes();
            return new String(bytes, StandardCharsets.UTF_8);
        } catch (Exception e) {
            throw new IllegalStateException("读取微信支付密钥失败: " + path, e);
        }
    }
}
