package com.nongjia.mall.controller.app;

import com.nongjia.mall.common.Result;
import com.nongjia.mall.dto.RedeemResultDTO;
import com.nongjia.mall.service.RedemptionCodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/app/redemption")
public class RedemptionCodeController {

    @Autowired
    private RedemptionCodeService redemptionCodeService;

    @PostMapping("/redeem")
    public Result<RedeemResultDTO> redeem(@RequestAttribute("userId") Long userId, @RequestBody Map<String, String> params) {
        String code = params.get("code");
        return redemptionCodeService.redeem(userId, code);
    }
}
