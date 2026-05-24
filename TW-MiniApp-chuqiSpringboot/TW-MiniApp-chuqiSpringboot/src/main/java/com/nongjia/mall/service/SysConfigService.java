package com.nongjia.mall.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.entity.SysConfig;

import java.util.List;
import java.util.Map;

public interface SysConfigService extends IService<SysConfig> {
    String getValue(String key);
    Map<String, String> getProductConfig();
    double getPointsRate();
    List<SysConfig> listAll();
    Result<Void> updateConfig(String key, String value);
    List<String> getServicePoints();
}
