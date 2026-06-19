package com.nongjia.mall.interceptor;

import com.nongjia.mall.config.JwtUtil;
import org.springframework.stereotype.Component;

/**
 * 小程序端鉴权拦截器：接受小程序用户 token（含历史未带类型的 token）。
 */
@Component
public class AppAuthInterceptor extends BaseAuthInterceptor {

    @Override
    protected String attributeName() {
        return "userId";
    }

    @Override
    protected boolean acceptType(String type) {
        // 兼容历史未携带 type 的 token；明确为 admin 类型的 token 不允许访问 app 接口
        return type == null || JwtUtil.TYPE_APP.equals(type);
    }
}
