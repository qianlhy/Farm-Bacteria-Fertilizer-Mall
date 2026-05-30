package com.nongjia.mall.controller.app;

import com.nongjia.mall.common.Result;
import com.nongjia.mall.entity.ContentPost;
import com.nongjia.mall.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/app/content")
public class ContentController {

    @Autowired
    private ContentService contentService;

    @GetMapping("/home")
    public Result<Map<String, Object>> home() {
        return Result.ok(contentService.getHomeData());
    }

    @GetMapping("/news")
    public Result<List<Map<String, Object>>> news(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "20") int pageSize) {
        var pageResult = contentService.listByChannel("news", page, pageSize);
        return Result.ok(pageResult.getRecords());
    }

    @GetMapping("/moments")
    public Result<List<Map<String, Object>>> moments(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "20") int pageSize) {
        var pageResult = contentService.listByChannel("moment", page, pageSize);
        return Result.ok(pageResult.getRecords());
    }

    @GetMapping("/detail/{postId}")
    public Result<Map<String, Object>> detail(@PathVariable Long postId) {
        Map<String, Object> detail = contentService.getDetailMap(postId);
        if (detail == null) return Result.fail("内容不存在");
        return Result.ok(detail);
    }

    @PostMapping("/publish")
    public Result<ContentPost> publish(
            @RequestAttribute("userId") Long userId,
            @RequestBody Map<String, Object> params) {
        return contentService.publish(userId, params);
    }

    @PostMapping("/delete/{postId}")
    public Result<Void> delete(
            @RequestAttribute("userId") Long userId,
            @PathVariable Long postId) {
        return contentService.delete(userId, postId);
    }
}
