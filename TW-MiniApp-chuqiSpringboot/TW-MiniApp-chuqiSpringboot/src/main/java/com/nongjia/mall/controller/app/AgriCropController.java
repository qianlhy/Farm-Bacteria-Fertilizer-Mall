package com.nongjia.mall.controller.app;

import com.nongjia.mall.common.Result;
import com.nongjia.mall.entity.AgriCrop;
import com.nongjia.mall.service.AgriCropService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 小程序端：农业作物列表与详情（公开访问，无需登录）。
 */
@RestController
@RequestMapping("/api/app/crops")
public class AgriCropController {

    @Autowired
    private AgriCropService agriCropService;

    @GetMapping("/list")
    public Result<List<AgriCrop>> list() {
        return Result.ok(agriCropService.listForApp());
    }

    @GetMapping("/detail/{id}")
    public Result<AgriCrop> detail(@PathVariable Long id) {
        AgriCrop crop = agriCropService.getForApp(id);
        if (crop == null) return Result.fail("未找到该作物信息");
        return Result.ok(crop);
    }
}
