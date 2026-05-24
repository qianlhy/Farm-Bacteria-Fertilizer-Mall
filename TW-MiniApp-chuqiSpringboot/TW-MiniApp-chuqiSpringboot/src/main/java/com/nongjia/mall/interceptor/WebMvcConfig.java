package com.nongjia.mall.interceptor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Autowired
    private AppAuthInterceptor appAuthInterceptor;
    @Autowired
    private AdminAuthInterceptor adminAuthInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(appAuthInterceptor)
                .addPathPatterns("/api/app/**")
                .excludePathPatterns(
                    "/api/app/auth/login",
                    "/api/app/auth/wx-login",
                    "/api/app/config/product",
                    "/api/app/config/service-points",
                    "/api/app/content/home",
                    "/api/app/content/news",
                    "/api/app/content/moments",
                    "/api/app/content/detail/**"
                );

        registry.addInterceptor(adminAuthInterceptor)
                .addPathPatterns("/api/admin/**")
                .excludePathPatterns("/api/admin/auth/login");
    }
}
