package com.nongjia.mall.controller.admin;

import com.nongjia.mall.common.Result;
import com.nongjia.mall.service.FileUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/admin/upload")
public class AdminUploadController {

    @Autowired
    private FileUploadService fileUploadService;

    @PostMapping
    public Result<String> upload(@RequestParam("file") MultipartFile file) {
        return fileUploadService.upload(file);
    }
}
