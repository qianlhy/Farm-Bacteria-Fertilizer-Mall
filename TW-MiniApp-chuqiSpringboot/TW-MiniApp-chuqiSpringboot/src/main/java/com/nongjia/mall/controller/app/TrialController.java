package com.nongjia.mall.controller.app;

import com.nongjia.mall.common.Result;
import com.nongjia.mall.entity.TrialBooking;
import com.nongjia.mall.service.TrialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/app/trial")
public class TrialController {

    @Autowired
    private TrialService trialService;

    @GetMapping("/service-points")
    public Result<List<String>> servicePoints() {
        return Result.ok(trialService.getServicePoints());
    }

    @PostMapping("/book")
    public Result<TrialBooking> book(
            @RequestAttribute("userId") Long userId,
            @RequestBody Map<String, Object> params) {
        return trialService.book(userId, params);
    }

    @GetMapping("/records")
    public Result<List<TrialBooking>> records(
            @RequestAttribute("userId") Long userId,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "20") int pageSize) {
        return Result.ok(trialService.listByUser(userId, page, pageSize).getRecords());
    }

    @PostMapping("/update-docs/{bookingId}")
    public Result<Void> updateDocs(
            @RequestAttribute("userId") Long userId,
            @PathVariable Long bookingId,
            @RequestBody Map<String, Object> params) {
        return trialService.updateDocs(userId, bookingId, params);
    }

    @PostMapping("/cancel/{bookingId}")
    public Result<Void> cancel(
            @RequestAttribute("userId") Long userId,
            @PathVariable Long bookingId) {
        return trialService.cancel(userId, bookingId);
    }
}
