package com.nongjia.mall.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.nongjia.mall.entity.AdminUser;
import com.nongjia.mall.mapper.AdminUserMapper;
import com.nongjia.mall.service.AdminService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
public class AdminServiceImpl extends ServiceImpl<AdminUserMapper, AdminUser> implements AdminService {

    private static final Logger log = LoggerFactory.getLogger(AdminServiceImpl.class);

    @Autowired
    private AdminUserMapper adminUserMapper;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    @Transactional
    public AdminUser login(String username, String password) {
        AdminUser admin = adminUserMapper.selectOne(
            new LambdaQueryWrapper<AdminUser>()
                .eq(AdminUser::getUsername, username)
                .eq(AdminUser::getStatus, 1)
        );
        if (admin == null) {
            log.warn("管理员登录失败：用户名不存在或已禁用，username={}", username);
            return null;
        }
        if (!passwordEncoder.matches(password, admin.getPassword())) {
            log.warn("管理员登录失败：密码错误，username={}", username);
            return null;
        }
        admin.setLastLoginAt(LocalDateTime.now());
        admin.setLastLoginIp("127.0.0.1");
        adminUserMapper.updateById(admin);
        log.info("管理员登录成功，adminId={}, username={}", admin.getId(), username);
        return admin;
    }

    @Override
    public AdminUser getById(Long id) {
        return adminUserMapper.selectById(id);
    }

    @Override
    public void initAdminIfNotExists(String username, String password) {
        AdminUser existing = adminUserMapper.selectOne(
            new LambdaQueryWrapper<AdminUser>()
                .eq(AdminUser::getUsername, username)
        );
        if (existing == null) {
            AdminUser admin = new AdminUser();
            admin.setUsername(username);
            admin.setPassword(passwordEncoder.encode(password));
            admin.setRealName("管理员");
            admin.setRole("super");
            admin.setStatus(1);
            adminUserMapper.insert(admin);
        }
    }
}
