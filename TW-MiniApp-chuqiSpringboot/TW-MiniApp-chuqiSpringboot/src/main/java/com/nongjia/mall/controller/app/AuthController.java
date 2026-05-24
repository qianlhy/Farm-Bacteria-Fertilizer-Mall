package com.nongjia.mall.controller.app;

import com.nongjia.mall.common.Result;
import com.nongjia.mall.dto.LoginDTO;
import com.nongjia.mall.dto.UserInfoDTO;
import com.nongjia.mall.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/app/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public Result<Map<String, Object>> login(@RequestBody LoginDTO dto) {
        if (dto.getPhone() == null || dto.getPhone().isEmpty()) {
            return Result.fail("手机号不能为空");
        }
        if (!dto.getPhone().matches("^1\\d{10}$")) {
            return Result.fail("手机号格式错误");
        }
        return userService.login(dto);
    }

    @PostMapping("/wx-login")
    public Result<Map<String, Object>> wxLogin(@RequestBody LoginDTO dto) {
        if (dto.getWxCode() == null || dto.getWxCode().isEmpty()) {
            return Result.fail("微信登录码不能为空");
        }
        try {
            return userService.wxLogin(dto);
        } catch (IllegalArgumentException | IllegalStateException e) {
            return Result.fail(e.getMessage());
        }
    }

    @GetMapping("/user-info")
    public Result<UserInfoDTO> getUserInfo(@RequestAttribute("userId") Long userId) {
        UserInfoDTO info = userService.getUserInfo(userId);
        if (info == null) return Result.fail("用户不存在");
        return Result.ok(info);
    }
}
