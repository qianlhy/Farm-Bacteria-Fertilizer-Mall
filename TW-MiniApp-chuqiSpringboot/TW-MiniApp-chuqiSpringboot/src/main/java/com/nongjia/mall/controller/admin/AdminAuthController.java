package com.nongjia.mall.controller.admin;

import com.nongjia.mall.common.Result;
import com.nongjia.mall.config.JwtUtil;
import com.nongjia.mall.entity.AdminUser;
import com.nongjia.mall.service.AdminService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin/auth")
public class AdminAuthController {

    @Autowired
    private AdminService adminService;
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public Result<Map<String, Object>> login(@RequestBody Map<String, String> params) {
        String username = params.get("username");
        String password = params.get("password");
        AdminUser admin = adminService.login(username, password);
        if (admin == null) return Result.fail("用户名或密码错误");

        String token = jwtUtil.generateToken(admin.getId(), admin.getUsername());
        Map<String, Object> data = new HashMap<>();
        data.put("token", token);
        data.put("adminId", admin.getId());
        data.put("username", admin.getUsername());
        data.put("realName", admin.getRealName());
        data.put("role", admin.getRole());
        return Result.ok(data);
    }

    @GetMapping("/info")
    public Result<AdminUser> info(HttpServletRequest request) {
        Long adminId = (Long) request.getAttribute("adminId");
        if (adminId == null) return Result.fail(401, "未登录");
        AdminUser admin = adminService.getById(adminId);
        if (admin == null) return Result.fail("管理员不存在");
        admin.setPassword(null);
        return Result.ok(admin);
    }

    @PostMapping("/init")
    public Result<String> initAdmin(@RequestParam(defaultValue = "admin") String username,
                                    @RequestParam(defaultValue = "admin123") String password) {
        adminService.initAdminIfNotExists(username, password);
        return Result.ok("管理员初始化成功，用户名: " + username + "，密码: " + password, null);
    }
}
