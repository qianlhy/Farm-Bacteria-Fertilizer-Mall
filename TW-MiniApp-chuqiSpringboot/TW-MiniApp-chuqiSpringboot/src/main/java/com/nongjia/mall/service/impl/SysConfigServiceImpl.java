package com.nongjia.mall.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.entity.SysConfig;
import com.nongjia.mall.mapper.SysConfigMapper;
import com.nongjia.mall.service.SysConfigService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SysConfigServiceImpl extends ServiceImpl<SysConfigMapper, SysConfig> implements SysConfigService {

    @Autowired
    private SysConfigMapper sysConfigMapper;

    @Override
    public String getValue(String key) {
        return sysConfigMapper.getValue(key);
    }

    @Override
    public Map<String, String> getProductConfig() {
        List<SysConfig> all = list();
        Map<String, String> flat = new HashMap<>();
        for (SysConfig c : all) {
            flat.put(c.getConfigKey(), c.getConfigValue());
        }
        Map<String, String> map = new HashMap<>();
        map.put("productKey", "recharge");
        map.put("productName", getOr(flat, "product.recharge.name", "1吨农家菌肥"));
        map.put("originalPrice", getOr(flat, "product.recharge.original_price", "1400"));
        map.put("discountRate", getOr(flat, "product.recharge.discount_rate", "0.85"));
        map.put("amountKg", getOr(flat, "product.recharge.amount_kg", "1000"));
        map.put("minKg", getOr(flat, "product.delivery.min_kg", "1000"));
        map.put("freightPerKg", getOr(flat, "product.delivery.freight_per_kg", "0.1"));
        map.put("blueBucketNew", getOr(flat, "product.package.blue_bucket_new", "35"));
        map.put("blueBucketUsed", getOr(flat, "product.package.blue_bucket_used", "15"));
        map.put("tonBucketNew", getOr(flat, "product.package.ton_bucket_new", "700"));
        map.put("tonBucketUsed", getOr(flat, "product.package.ton_bucket_used", "300"));
        map.put("pointsRate", getOr(flat, "product.points.rate", "10"));
        map.put("blueBucketKg", getOr(flat, "product.package.blue_bucket_kg", "25"));
        map.put("tonBucketKg", getOr(flat, "product.package.ton_bucket_kg", "1000"));
        map.put("blueBucketMinCount", getOr(flat, "product.package.blue_bucket_min_count", "40"));
        map.put("trialProductName", getOr(flat, "trial.product.name", "农家菌肥"));
        map.put("trialProductSubtitle", getOr(flat, "trial.product.subtitle", "绿色生态，提质增产，提升地力"));
        return map;
    }

    @Override
    public double getPointsRate() {
        String rate = getProductConfig().get("pointsRate");
        try {
            return Double.parseDouble(rate);
        } catch (Exception e) {
            return 10;
        }
    }

    private String getOr(Map<String, String> map, String key, String def) {
        String v = map.get(key);
        return v != null ? v : def;
    }

    @Override
    public List<SysConfig> listAll() {
        return sysConfigMapper.selectList(
            new LambdaQueryWrapper<SysConfig>().orderByAsc(SysConfig::getConfigGroup, SysConfig::getSortOrder)
        );
    }

    @Override
    public Result<Void> updateConfig(String key, String value) {
        SysConfig config = sysConfigMapper.selectOne(
            new LambdaQueryWrapper<SysConfig>().eq(SysConfig::getConfigKey, key)
        );
        if (config == null) return Result.fail("配置项不存在");
        config.setConfigValue(value);
        sysConfigMapper.updateById(config);
        return Result.ok("更新成功");
    }

    @Override
    public List<String> getServicePoints() {
        String json = getValue("trial.service_points");
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(json, new com.fasterxml.jackson.core.type.TypeReference<List<String>>() {});
        } catch (Exception e) {
            return List.of("漳州岩溪", "厦门湖里", "泉州丰泽");
        }
    }
}
