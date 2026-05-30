package com.nongjia.mall.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.nongjia.mall.common.PageResult;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.entity.ContentPost;

import java.util.List;
import java.util.Map;

public interface ContentService extends IService<ContentPost> {
    Map<String, Object> getHomeData();
    Result<ContentPost> publish(Long userId, Map<String, Object> params);
    PageResult<List<Map<String, Object>>> listByChannel(String channel, int page, int pageSize);
    ContentPost getDetail(Long postId);
    Result<Void> delete(Long userId, Long postId);
    PageResult<List<Map<String, Object>>> listForAdmin(Map<String, Object> params);
    Result<Void> audit(Long adminId, Long postId, Integer status, String remark);
    Result<ContentPost> saveByAdmin(Long adminId, Map<String, Object> params);
    Map<String, Object> getDetailMap(Long postId);
    Map<String, Object> getPostMapById(Long postId);
}
