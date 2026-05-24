package com.nongjia.mall.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.dto.LoginDTO;
import com.nongjia.mall.dto.UserInfoDTO;
import com.nongjia.mall.entity.SysUser;

public interface UserService extends IService<SysUser> {
    Result<java.util.Map<String, Object>> login(LoginDTO dto);
    Result<java.util.Map<String, Object>> wxLogin(LoginDTO dto);
    UserInfoDTO getUserInfo(Long userId);
    SysUser getByPhone(String phone);
    SysUser getById(Long userId);
}
