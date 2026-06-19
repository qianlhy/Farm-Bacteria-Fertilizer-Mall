package com.nongjia.mall.interceptor;

import com.nongjia.mall.config.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;

import java.io.IOException;

/**
 * 鉴权拦截器公共基类，统一处理：放行预检请求、解析 Bearer Token、
 * 校验过期与 token 类型，并将用户标识写入请求属性。
 *
 * <p>未授权时仍返回 HTTP 200 + body {@code {"code":401,...}}，
 * 以兼容现有小程序/管理端前端对 401 业务码的处理逻辑。
 */
public abstract class BaseAuthInterceptor implements HandlerInterceptor {

    @Autowired
    protected JwtUtil jwtUtil;

    /** 写入请求的用户标识属性名，如 userId / adminId。 */
    protected abstract String attributeName();

    /** 当前拦截器接受的 token 类型是否匹配。 */
    protected abstract boolean acceptType(String type);

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
            return true;
        }

        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            sendUnauthorized(response, "未登录");
            return false;
        }

        String token = authHeader.substring(7);
        try {
            if (jwtUtil.isTokenExpired(token)) {
                sendUnauthorized(response, "登录已过期");
                return false;
            }
            if (!acceptType(jwtUtil.getTokenType(token))) {
                sendUnauthorized(response, "无访问权限");
                return false;
            }
            request.setAttribute(attributeName(), jwtUtil.getUserId(token));
            return true;
        } catch (Exception e) {
            sendUnauthorized(response, "登录状态无效");
            return false;
        }
    }

    protected void sendUnauthorized(HttpServletResponse response, String msg) throws IOException {
        response.setContentType("application/json;charset=utf-8");
        response.setStatus(HttpServletResponse.SC_OK);
        response.getWriter().write("{\"code\":401,\"message\":\"" + msg + "\"}");
    }
}
