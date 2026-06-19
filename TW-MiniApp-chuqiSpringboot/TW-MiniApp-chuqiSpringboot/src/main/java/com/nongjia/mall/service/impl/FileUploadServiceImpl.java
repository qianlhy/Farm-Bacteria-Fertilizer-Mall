package com.nongjia.mall.service.impl;

import com.nongjia.mall.common.Result;
import com.nongjia.mall.service.FileUploadService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import java.util.Set;
import java.util.UUID;

@Service
public class FileUploadServiceImpl implements FileUploadService {

    private static final Set<String> ALLOWED_EXT = Set.of(
        "jpg", "jpeg", "png", "gif", "webp", "bmp", "mp4", "mov", "m4v", "pdf"
    );

    @Value("${app.upload-path:uploads}")
    private String uploadPath;

    @Value("${app.upload-url:http://localhost:8080/uploads/}")
    private String uploadUrl;

    @Override
    public Result<String> upload(MultipartFile file) {
        if (file == null || file.isEmpty()) {
            return Result.fail("请选择文件");
        }

        String originalName = file.getOriginalFilename();
        String ext = extractExt(originalName);
        if (ext.isEmpty() || !ALLOWED_EXT.contains(ext)) {
            return Result.fail("不支持的文件类型");
        }

        try {
            Path baseDir = resolveBaseDir();
            String dateDir = LocalDate.now().format(DateTimeFormatter.BASIC_ISO_DATE);
            Path targetDir = baseDir.resolve(dateDir);
            Files.createDirectories(targetDir);

            String filename = UUID.randomUUID().toString().replace("-", "") + "." + ext;
            Path targetFile = targetDir.resolve(filename);
            file.transferTo(targetFile.toFile());

            String url = uploadUrl.endsWith("/") ? uploadUrl : uploadUrl + "/";
            url = url + dateDir + "/" + filename;
            return Result.ok("上传成功", url);
        } catch (IOException e) {
            return Result.fail("上传失败: " + e.getMessage());
        }
    }

    public Path resolveBaseDir() throws IOException {
        Path path = Paths.get(uploadPath);
        if (!path.isAbsolute()) {
            path = Paths.get(System.getProperty("user.dir")).resolve(uploadPath);
        }
        Files.createDirectories(path);
        return path.toAbsolutePath().normalize();
    }

    private String extractExt(String filename) {
        if (filename == null || !filename.contains(".")) {
            return "";
        }
        return filename.substring(filename.lastIndexOf('.') + 1).toLowerCase(Locale.ROOT);
    }
}
