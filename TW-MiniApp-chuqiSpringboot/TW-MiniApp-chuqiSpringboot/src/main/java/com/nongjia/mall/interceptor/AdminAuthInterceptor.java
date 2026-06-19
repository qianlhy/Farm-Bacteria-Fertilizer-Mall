package com.nongjia.mall.interceptor;

import com.nongjia.mall.config.JwtUtil;
import org.springframework.stereotype.Component;

/**
 * 管理端鉴权拦截器：仅接受 admin 类型的 token，防止小程序用户 token 越权。
 */
@Component
public class AdminAuthInterceptor extends BaseAuthInterceptor {

    @Override
    protected String attributeName() {
        return "adminId";
    }

    @Override
    protected boolean acceptType(String type) {
        return JwtUtil.TYPE_ADMIN.equals(type);
    }
}
