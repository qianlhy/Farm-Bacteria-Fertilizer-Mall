package com.nongjia.mall.common;

/**
 * 业务异常：用于在 Service 层抛出可预期的业务错误，
 * 由 {@link GlobalExceptionHandler} 统一转换为 {@link Result}。
 */
public class BusinessException extends RuntimeException {

    private final int code;

    public BusinessException(String message) {
        super(message);
        this.code = 500;
    }

    public BusinessException(int code, String message) {
        super(message);
        this.code = code;
    }

    public int getCode() {
        return code;
    }
}
