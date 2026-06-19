package com.nongjia.mall.controller.app;

import com.nongjia.mall.service.RechargeService;
import com.nongjia.mall.service.WeChatPayService;
import com.wechat.pay.java.core.notification.RequestParam;
import com.wechat.pay.java.service.payments.model.Transaction;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.util.HashMap;
import java.util.Map;

/**
 * 微信支付结果回调。微信要求：成功返回 HTTP 200 + {code:SUCCESS}，失败返回非 200/{code:FAIL} 以触发重试。
 */
@RestController
@RequestMapping("/api/app/pay")
public class PayController {

    private static final Logger log = LoggerFactory.getLogger(PayController.class);

    private final RechargeService rechargeService;
    private final ObjectProvider<WeChatPayService> weChatPayServiceProvider;

    public PayController(RechargeService rechargeService,
                         ObjectProvider<WeChatPayService> weChatPayServiceProvider) {
        this.rechargeService = rechargeService;
        this.weChatPayServiceProvider = weChatPayServiceProvider;
    }

    @PostMapping("/notify")
    public ResponseEntity<Map<String, String>> notify(HttpServletRequest request) {
        WeChatPayService weChatPayService = weChatPayServiceProvider.getIfAvailable();
        if (weChatPayService == null) {
            return fail("微信支付未启用");
        }

        try {
            String body = readBody(request);
            RequestParam requestParam = new RequestParam.Builder()
                    .serialNumber(request.getHeader("Wechatpay-Serial"))
                    .nonce(request.getHeader("Wechatpay-Nonce"))
                    .signature(request.getHeader("Wechatpay-Signature"))
                    .timestamp(request.getHeader("Wechatpay-Timestamp"))
                    .signType(request.getHeader("Wechatpay-Signature-Type"))
                    .body(body)
                    .build();

            Transaction transaction = weChatPayService.parseNotify(requestParam);
            String outTradeNo = transaction.getOutTradeNo();
            Transaction.TradeStateEnum tradeState = transaction.getTradeState();
            log.info("收到微信支付回调，orderNo={}, tradeState={}", outTradeNo, tradeState);

            if (tradeState == Transaction.TradeStateEnum.SUCCESS) {
                rechargeService.handlePaySuccess(outTradeNo, transaction.getTransactionId());
            }
            return success();
        } catch (Exception e) {
            log.error("微信支付回调处理失败", e);
            return fail("处理失败");
        }
    }

    private String readBody(HttpServletRequest request) throws Exception {
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }
        }
        return sb.toString();
    }

    private ResponseEntity<Map<String, String>> success() {
        Map<String, String> body = new HashMap<>();
        body.put("code", "SUCCESS");
        body.put("message", "成功");
        return ResponseEntity.ok(body);
    }

    private ResponseEntity<Map<String, String>> fail(String message) {
        Map<String, String> body = new HashMap<>();
        body.put("code", "FAIL");
        body.put("message", message);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(body);
    }
}
