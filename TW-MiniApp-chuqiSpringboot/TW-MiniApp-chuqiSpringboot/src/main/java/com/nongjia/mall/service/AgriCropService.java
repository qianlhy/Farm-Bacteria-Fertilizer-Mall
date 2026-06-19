package com.nongjia.mall.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.nongjia.mall.common.PageResult;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.entity.AgriCrop;

import java.util.List;
import java.util.Map;

public interface AgriCropService extends IService<AgriCrop> {

    /** 小程序：上架作物列表（按排序） */
    List<AgriCrop> listForApp();

    /** 小程序：作物详情 */
    AgriCrop getForApp(Long id);

    /** 管理端：分页列表 */
    PageResult<List<AgriCrop>> listForAdmin(int page, int pageSize, String keyword, Integer status);

    /** 管理端：新增/编辑 */
    Result<AgriCrop> saveByAdmin(Map<String, Object> params);
}
