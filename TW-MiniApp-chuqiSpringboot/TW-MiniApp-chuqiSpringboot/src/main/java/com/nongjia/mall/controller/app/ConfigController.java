package com.nongjia.mall.controller.app;

import com.nongjia.mall.common.Result;
import com.nongjia.mall.service.SysConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/app/config")
public class ConfigController {

    @Autowired
    private SysConfigService sysConfigService;

    @GetMapping("/product")
    public Result<Map<String, String>> getProductConfig() {
        return Result.ok(sysConfigService.getProductConfig());
    }

    @GetMapping("/service-points")
    public Result<List<String>> getServicePoints() {
        return Result.ok(sysConfigService.getServicePoints());
    }
}
