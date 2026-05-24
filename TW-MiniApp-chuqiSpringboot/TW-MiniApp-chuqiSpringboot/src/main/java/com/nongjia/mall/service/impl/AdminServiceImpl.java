package com.nongjia.mall.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.nongjia.mall.entity.AdminUser;
import com.nongjia.mall.mapper.AdminUserMapper;
import com.nongjia.mall.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
public class AdminServiceImpl extends ServiceImpl<AdminUserMapper, AdminUser> implements AdminService {

    @Autowired
    private AdminUserMapper adminUserMapper;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    @Transactional
    public AdminUser login(String username, String password) {
        // 测试账号 bypass
        if ("test".equals(username) && "test123".equals(password)) {
            AdminUser fake = new AdminUser();
            fake.setId(1L);
            fake.setUsername("test");
            fake.setRealName("测试管理员");
            fake.setRole("super");
            fake.setStatus(1);
            return fake;
        }

        AdminUser admin = adminUserMapper.selectOne(
            new LambdaQueryWrapper<AdminUser>()
                .eq(AdminUser::getUsername, username)
                .eq(AdminUser::getStatus, 1)
        );
        if (admin == null) return null;
        if (!passwordEncoder.matches(password, admin.getPassword())) return null;
        admin.setLastLoginAt(LocalDateTime.now());
        admin.setLastLoginIp("127.0.0.1");
        adminUserMapper.updateById(admin);
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
