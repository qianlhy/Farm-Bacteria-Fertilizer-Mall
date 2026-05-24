package com.nongjia.mall.controller.admin;

import com.nongjia.mall.common.Result;
import com.nongjia.mall.service.SysConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin/config")
public class AdminConfigController {

    @Autowired
    private SysConfigService sysConfigService;

    @GetMapping("/list")
    public Result<Map<String, Object>> list() {
        var list = sysConfigService.listAll();
        Map<String, Object> data = new HashMap<>();
        data.put("records", list);
        return Result.ok(data);
    }

    @PostMapping("/update")
    public Result<Void> update(@RequestBody Map<String, String> params) {
        String key = params.get("configKey");
        String value = params.get("configValue");
        return sysConfigService.updateConfig(key, value);
    }
}
