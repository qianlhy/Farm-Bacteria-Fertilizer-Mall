package com.nongjia.mall.controller.admin;

import com.nongjia.mall.common.PageResult;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.entity.AgriCrop;
import com.nongjia.mall.service.AgriCropService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin/crops")
public class AdminAgriCropController {

    @Autowired
    private AgriCropService agriCropService;

    @GetMapping("/list")
    public Result<Map<String, Object>> list(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "20") int pageSize,
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) Integer status) {
        PageResult result = agriCropService.listForAdmin(page, pageSize, keyword, status);
        Map<String, Object> data = new HashMap<>();
        data.put("total", result.getTotal());
        data.put("page", page);
        data.put("pageSize", pageSize);
        data.put("records", result.getRecords());
        return Result.ok(data);
    }

    @GetMapping("/detail/{id}")
    public Result<AgriCrop> detail(@PathVariable Long id) {
        AgriCrop crop = agriCropService.getById(id);
        if (crop == null) return Result.fail("作物不存在");
        return Result.ok(crop);
    }

    @PostMapping("/save")
    public Result<AgriCrop> save(@RequestBody Map<String, Object> params) {
        return agriCropService.saveByAdmin(params);
    }

    @PostMapping("/delete/{id}")
    public Result<Void> delete(@PathVariable Long id) {
        boolean ok = agriCropService.removeById(id);
        return ok ? Result.ok("已删除") : Result.fail("删除失败");
    }
}
