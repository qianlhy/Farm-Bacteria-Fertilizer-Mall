package com.nongjia.mall.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.nongjia.mall.common.PageResult;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.entity.AgriCrop;
import com.nongjia.mall.mapper.AgriCropMapper;
import com.nongjia.mall.service.AgriCropService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class AgriCropServiceImpl extends ServiceImpl<AgriCropMapper, AgriCrop> implements AgriCropService {

    @Override
    public List<AgriCrop> listForApp() {
        return list(new LambdaQueryWrapper<AgriCrop>()
                .eq(AgriCrop::getStatus, 1)
                .orderByAsc(AgriCrop::getSortOrder)
                .orderByAsc(AgriCrop::getId));
    }

    @Override
    public AgriCrop getForApp(Long id) {
        if (id == null) return null;
        return getById(id);
    }

    @Override
    public PageResult<List<AgriCrop>> listForAdmin(int page, int pageSize, String keyword, Integer status) {
        Page<AgriCrop> p = new Page<>(page, pageSize);
        LambdaQueryWrapper<AgriCrop> qw = new LambdaQueryWrapper<>();
        if (keyword != null && !keyword.isEmpty()) {
            qw.like(AgriCrop::getName, keyword);
        }
        if (status != null) {
            qw.eq(AgriCrop::getStatus, status);
        }
        qw.orderByAsc(AgriCrop::getSortOrder).orderByAsc(AgriCrop::getId);
        Page<AgriCrop> result = baseMapper.selectPage(p, qw);
        return PageResult.of(result.getTotal(), page, pageSize, result.getRecords());
    }

    @Override
    public Result<AgriCrop> saveByAdmin(Map<String, Object> params) {
        String name = str(params.get("name"));
        if (name.isEmpty()) {
            return Result.fail("请填写作物名称");
        }

        AgriCrop crop;
        Object idObj = params.get("id");
        if (idObj != null && !idObj.toString().isEmpty()) {
            crop = getById(Long.parseLong(idObj.toString()));
            if (crop == null) return Result.fail("作物不存在");
        } else {
            crop = new AgriCrop();
        }

        crop.setName(name);
        crop.setCover(str(params.get("cover")));
        crop.setHeaderImage(str(params.get("headerImage")));
        crop.setTitle(str(params.get("title")).isEmpty() ? name : str(params.get("title")));
        crop.setSummary(str(params.get("summary")));
        crop.setBody(str(params.get("body")));
        crop.setReportName(str(params.get("reportName")));
        crop.setPdfUrl(str(params.get("pdfUrl")));
        crop.setSortOrder(intVal(params.get("sortOrder"), 0));
        crop.setStatus(intVal(params.get("status"), 1));

        if (crop.getId() == null) {
            save(crop);
        } else {
            updateById(crop);
        }
        return Result.ok("保存成功", crop);
    }

    private String str(Object value) {
        return value == null ? "" : value.toString().trim();
    }

    private int intVal(Object value, int def) {
        if (value == null || value.toString().isEmpty()) return def;
        try {
            return (int) Double.parseDouble(value.toString());
        } catch (Exception e) {
            return def;
        }
    }
}
