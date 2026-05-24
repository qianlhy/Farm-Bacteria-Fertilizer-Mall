package com.nongjia.mall.controller.admin;

import com.nongjia.mall.common.PageResult;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.entity.ContentPost;
import com.nongjia.mall.service.ContentService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin/content")
public class AdminContentController {

    @Autowired
    private ContentService contentService;

    @GetMapping("/list")
    public Result<Map<String, Object>> list(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "20") int pageSize,
            @RequestParam(required = false) String channel,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String contentType,
            @RequestParam(required = false) String keyword) {
        Map<String, Object> params = new HashMap<>();
        params.put("page", page);
        params.put("pageSize", pageSize);
        if (channel != null) params.put("channel", channel);
        if (status != null) params.put("status", status);
        if (contentType != null) params.put("contentType", contentType);
        PageResult result = contentService.listForAdmin(params);
        Map<String, Object> data = new HashMap<>();
        data.put("total", result.getTotal());
        data.put("page", page);
        data.put("pageSize", pageSize);
        data.put("records", result.getRecords());
        return Result.ok(data);
    }

    @PostMapping("/audit/{postId}")
    public Result<Void> audit(
            HttpServletRequest request,
            @PathVariable Long postId,
            @RequestBody Map<String, Object> params) {
        Long adminId = (Long) request.getAttribute("adminId");
        Integer status = Integer.parseInt(params.get("status").toString());
        String remark = (String) params.getOrDefault("remark", "");
        return contentService.audit(adminId, postId, status, remark);
    }

    @PostMapping("/delete/{postId}")
    public Result<Void> delete(@PathVariable Long postId) {
        ContentPost post = contentService.getById(postId);
        if (post == null) return Result.fail("帖子不存在");
        post.setStatus(4);
        contentService.updateById(post);
        return Result.ok("已删除");
    }
}
