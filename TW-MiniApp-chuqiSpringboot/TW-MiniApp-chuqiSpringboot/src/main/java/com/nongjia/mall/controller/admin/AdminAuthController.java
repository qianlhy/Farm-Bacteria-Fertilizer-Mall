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

        String token = jwtUtil.generateToken(admin.getId(), admin.getUsername(), JwtUtil.TYPE_ADMIN);
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

    /**
     * 初始化管理员：仅当系统中尚不存在任何管理员时允许调用（用于首次部署引导）。
     * 一旦已存在管理员，该接口将被拒绝，避免被滥用创建后门账号。
     */
    @PostMapping("/init")
    public Result<String> initAdmin(@RequestParam(defaultValue = "admin") String username,
                                    @RequestParam(defaultValue = "admin123") String password) {
        if (adminService.count() > 0) {
            return Result.fail(403, "管理员已存在，初始化接口已禁用");
        }
        adminService.initAdminIfNotExists(username, password);
        return Result.ok("管理员初始化成功，用户名: " + username + "，请使用初始化时设置的密码登录", null);
    }
}
