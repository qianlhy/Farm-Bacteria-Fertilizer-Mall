package com.nongjia.mall.service;

import com.nongjia.mall.common.Result;
import org.springframework.web.multipart.MultipartFile;

public interface FileUploadService {
    Result<String> upload(MultipartFile file);
}
