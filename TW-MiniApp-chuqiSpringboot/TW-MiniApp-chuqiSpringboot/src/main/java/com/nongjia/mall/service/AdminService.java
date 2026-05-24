package com.nongjia.mall.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.nongjia.mall.entity.AdminUser;

public interface AdminService extends IService<AdminUser> {
    AdminUser login(String username, String password);
    AdminUser getById(Long id);
    void initAdminIfNotExists(String username, String password);
}
