package com.nongjia.mall.controller.app;

import com.nongjia.mall.common.Result;
import com.nongjia.mall.entity.PartnerApplication;
import com.nongjia.mall.mapper.PartnerApplicationMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Set;

/**
 * 小程序端：成为合伙人申请提交。
 */
@RestController
@RequestMapping("/api/app/partner")
public class PartnerController {

    private static final Logger log = LoggerFactory.getLogger(PartnerController.class);

    /** 合伙人类型白名单：轻代理/总代理/公司合伙人 */
    private static final Set<String> ALLOWED_TYPES = Set.of("light", "general", "company");

    @Autowired
    private PartnerApplicationMapper partnerApplicationMapper;

    @PostMapping("/apply")
    public Result<Void> apply(@RequestAttribute("userId") Long userId, @RequestBody Map<String, String> params) {
        String name = trim(params.get("name"));
        String phone = trim(params.get("phone"));
        String city = trim(params.get("city"));
        String partnerType = trim(params.get("partnerType"));

        if (name.isEmpty()) return Result.fail("请填写姓名");
        if (!phone.matches("^1\\d{10}$")) return Result.fail("请输入正确的手机号");
        if (!ALLOWED_TYPES.contains(partnerType)) return Result.fail("请选择合伙人类型");

        PartnerApplication app = new PartnerApplication();
        app.setUserId(userId);
        app.setName(name);
        app.setPhone(phone);
        app.setCity(city);
        app.setPartnerType(partnerType);
        app.setStatus(1);
        partnerApplicationMapper.insert(app);

        log.info("合伙人申请提交成功，userId={}, type={}", userId, partnerType);
        return Result.ok("提交成功，我们会尽快与您联系");
    }

    private String trim(String value) {
        return value == null ? "" : value.trim();
    }
}
