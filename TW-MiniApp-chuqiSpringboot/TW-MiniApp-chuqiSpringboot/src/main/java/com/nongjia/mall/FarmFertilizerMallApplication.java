package com.nongjia.mall;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.nongjia.mall.mapper")
@SpringBootApplication
public class FarmFertilizerMallApplication {
    public static void main(String[] args) {
        SpringApplication.run(FarmFertilizerMallApplication.class, args);
    }
}
 