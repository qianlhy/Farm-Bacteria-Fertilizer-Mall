package com.nongjia.mall.service;

import com.nongjia.mall.config.WeChatPayProperties;
import com.wechat.pay.java.core.RSAPublicKeyConfig;
import com.wechat.pay.java.core.notification.NotificationParser;
import com.wechat.pay.java.core.notification.RequestParam;
import com.wechat.pay.java.service.payments.jsapi.JsapiServiceExtension;
import com.wechat.pay.java.service.payments.jsapi.model.Amount;
import com.wechat.pay.java.service.payments.jsapi.model.Payer;
import com.wechat.pay.java.service.payments.jsapi.model.PrepayRequest;
import com.wechat.pay.java.service.payments.jsapi.model.PrepayWithRequestPaymentResponse;
import com.wechat.pay.java.service.payments.model.Transaction;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.Map;

/**
 * 微信支付 JSAPI 服务（下单 + 回调解析），仅当 wechat.pay.enabled=true 时注册。
 */
@Service
@ConditionalOnProperty(prefix = "wechat.pay", name = "enabled", havingValue = "true")
public class WeChatPayService {

    private static final Logger log = LoggerFactory.getLogger(WeChatPayService.class);

    @Value("${wechat.app-id}")
    private String appId;

    private final WeChatPayProperties properties;
    private final JsapiServiceExtension jsapiService;
    private final RSAPublicKeyConfig payConfig;

    public WeChatPayService(WeChatPayProperties properties,
                            JsapiServiceExtension jsapiService,
                            RSAPublicKeyConfig payConfig) {
        this.properties = properties;
        this.jsapiService = jsapiService;
        this.payConfig = payConfig;
    }

    /**
     * JSAPI 下单并返回小程序 wx.requestPayment 所需参数。
     *
     * @param openid      支付用户 openid
     * @param orderNo     商户订单号
     * @param amountFen   金额（单位：分）
     * @param description 商品描述
     */
    public Map<String, String> createJsapiOrder(String openid, String orderNo, int amountFen, String description) {
        PrepayRequest request = new PrepayRequest();
        request.setAppid(appId);
        request.setMchid(properties.getMchId());
        request.setDescription(description);
        request.setOutTradeNo(orderNo);
        request.setNotifyUrl(properties.getNotifyUrl());

        Amount amount = new Amount();
        amount.setTotal(amountFen);
        amount.setCurrency("CNY");
        request.setAmount(amount);

        Payer payer = new Payer();
        payer.setOpenid(openid);
        request.setPayer(payer);

        PrepayWithRequestPaymentResponse response = jsapiService.prepayWithRequestPayment(request);
        log.info("微信支付下单成功，orderNo={}, amountFen={}", orderNo, amountFen);

        Map<String, String> payParams = new LinkedHashMap<>();
        payParams.put("appId", response.getAppId());
        payParams.put("timeStamp", response.getTimeStamp());
        payParams.put("nonceStr", response.getNonceStr());
        payParams.put("package", response.getPackageVal());
        payParams.put("signType", response.getSignType());
        payParams.put("paySign", response.getPaySign());
        return payParams;
    }

    /**
     * 解析并验签支付结果回调。
     */
    public Transaction parseNotify(RequestParam requestParam) {
        NotificationParser parser = new NotificationParser(payConfig);
        return parser.parse(requestParam, Transaction.class);
    }
}
