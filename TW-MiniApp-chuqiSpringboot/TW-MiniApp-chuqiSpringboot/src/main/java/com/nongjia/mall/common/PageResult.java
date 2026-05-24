package com.nongjia.mall.common;

import lombok.Data;

@Data
public class PageResult<T> {
    private long total;
    private long page;
    private long pageSize;
    private T records;

    public static <T> PageResult<T> of(long total, long page, long pageSize, T records) {
        PageResult<T> r = new PageResult<>();
        r.setTotal(total);
        r.setPage(page);
        r.setPageSize(pageSize);
        r.setRecords(records);
        return r;
    }
}
