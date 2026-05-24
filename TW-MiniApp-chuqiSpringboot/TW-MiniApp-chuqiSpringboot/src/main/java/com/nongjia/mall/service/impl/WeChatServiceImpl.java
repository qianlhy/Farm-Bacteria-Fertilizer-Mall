package com.nongjia.mall.service.impl;

import cn.hutool.core.util.StrUtil;
import cn.hutool.crypto.digest.DigestUtil;
import cn.hutool.http.HttpUtil;
import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import com.nongjia.mall.service.WeChatService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class WeChatServiceImpl implements WeChatService {

    private static final String CODE2SESSION_URL =
            "https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code";

    @Value("${wechat.app-id}")
    private String appId;

    @Value("${wechat.app-secret:}")
    private String appSecret;

    @Value("${wechat.mock-enabled:true}")
    private boolean mockEnabled;

    @Override
    public String getOpenidByCode(String code) {
        if (StrUtil.isBlank(code)) {
            throw new IllegalArgumentException("微信登录码不能为空");
        }

        if (StrUtil.isNotBlank(appSecret)) {
            String url = String.format(CODE2SESSION_URL, appId, appSecret, code);
            String response = HttpUtil.get(url);
            JSONObject json = JSONUtil.parseObj(response);

            if (json.containsKey("errcode") && json.getInt("errcode") != 0) {
                throw new IllegalStateException(json.getStr("errmsg", "微信登录失败"));
            }

            String openid = json.getStr("openid");
            if (StrUtil.isBlank(openid)) {
                throw new IllegalStateException("未获取到微信 openid");
            }
            return openid;
        }

        if (!mockEnabled) {
            throw new IllegalStateException("未配置微信 AppSecret，无法完成微信登录");
        }

        return "mock_" + DigestUtil.md5Hex(appId + ":" + code);
    }
}
