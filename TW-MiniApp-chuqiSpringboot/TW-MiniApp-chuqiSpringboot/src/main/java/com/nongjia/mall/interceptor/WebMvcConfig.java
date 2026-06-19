package com.nongjia.mall.interceptor;

import com.nongjia.mall.service.impl.FileUploadServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.io.IOException;
import java.nio.file.Path;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Autowired
    private AppAuthInterceptor appAuthInterceptor;
    @Autowired
    private AdminAuthInterceptor adminAuthInterceptor;
    @Autowired
    private FileUploadServiceImpl fileUploadService;

    @Value("${app.upload-path:uploads}")
    private String uploadPath;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(appAuthInterceptor)
                .addPathPatterns("/api/app/**")
                .excludePathPatterns(
                    "/api/app/auth/login",
                    "/api/app/auth/wx-login",
                    "/api/app/pay/notify",
                    "/api/app/config/product",
                    "/api/app/config/service-points",
                    "/api/app/content/home",
                    "/api/app/content/news",
                    "/api/app/content/moments",
                    "/api/app/content/detail/**",
                    "/api/app/crops/list",
                    "/api/app/crops/detail/**"
                );

        registry.addInterceptor(adminAuthInterceptor)
                .addPathPatterns("/api/admin/**")
                .excludePathPatterns("/api/admin/auth/login");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        try {
            Path baseDir = fileUploadService.resolveBaseDir();
            String location = "file:" + baseDir.toString().replace("\\", "/") + "/";
            registry.addResourceHandler("/uploads/**")
                    .addResourceLocations(location);
        } catch (IOException ignored) {
            String fallback = "file:" + uploadPath.replace("\\", "/") + "/";
            registry.addResourceHandler("/uploads/**")
                    .addResourceLocations(fallback);
        }
    }
}
