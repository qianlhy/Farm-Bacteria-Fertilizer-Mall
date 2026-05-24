package com.nongjia.mall.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.nongjia.mall.common.PageResult;
import com.nongjia.mall.common.Result;
import com.nongjia.mall.entity.ContentPost;
import com.nongjia.mall.mapper.ContentPostMapper;
import com.nongjia.mall.mapper.SysUserMapper;
import com.nongjia.mall.service.ContentService;
import com.nongjia.mall.service.SysConfigService;
import com.nongjia.mall.entity.SysUser;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
public class ContentServiceImpl extends ServiceImpl<ContentPostMapper, ContentPost> implements ContentService {

    @Autowired
    private ContentPostMapper contentPostMapper;
    @Autowired
    private SysConfigService sysConfigService;
    @Autowired
    private SysUserMapper sysUserMapper;

    private static final DateTimeFormatter DF = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
    private static final ObjectMapper MAPPER = new ObjectMapper();

    @Override
    public Map<String, Object> getHomeData() {
        Map<String, Object> result = new HashMap<>();

        List<ContentPost> news = contentPostMapper.selectList(
            new LambdaQueryWrapper<ContentPost>()
                .eq(ContentPost::getChannel, "news")
                .eq(ContentPost::getStatus, 2)
                .orderByDesc(ContentPost::getPublishedAt)
                .last("LIMIT 5")
        );
        result.put("headlineNews", toNewsList(news));

        List<ContentPost> feed = contentPostMapper.selectList(
            new LambdaQueryWrapper<ContentPost>()
                .in(ContentPost::getChannel, "news", "moment")
                .eq(ContentPost::getStatus, 2)
                .orderByDesc(ContentPost::getPublishedAt)
                .last("LIMIT 20")
        );
        result.put("feed", toPostList(feed));

        return result;
    }

    @Override
    @Transactional
    public Result<ContentPost> publish(Long userId, Map<String, Object> params) {
        SysUser user = sysUserMapper.selectById(userId);
        if (user == null) return Result.fail("用户不存在");

        ContentPost post = new ContentPost();
        post.setPostNo("P" + System.currentTimeMillis() + UUID.randomUUID().toString().substring(0, 6).toUpperCase());
        post.setUserId(userId);
        post.setUserNickname(user.getNickname());
        post.setChannel((String) params.getOrDefault("channel", "moment"));
        post.setContentType((String) params.getOrDefault("contentType", "dynamic"));
        post.setTitle((String) params.get("title"));
        post.setContent((String) params.get("content"));
        post.setLocation((String) params.get("location"));

        List<String> images = (List<String>) params.get("images");
        if (images != null && !images.isEmpty()) {
            try {
                post.setImages(MAPPER.writeValueAsString(images));
            } catch (Exception ignored) {}
        }
        if (params.get("videoUrl") != null) post.setVideoUrl((String) params.get("videoUrl"));
        if (params.get("videoCover") != null) post.setVideoCover((String) params.get("videoCover"));
        if (params.get("latitude") != null) post.setLatitude(new java.math.BigDecimal(params.get("latitude").toString()));
        if (params.get("longitude") != null) post.setLongitude(new java.math.BigDecimal(params.get("longitude").toString()));

        post.setStatus(2);
        post.setPublishedAt(LocalDateTime.now());
        contentPostMapper.insert(post);

        return Result.ok("发布成功", post);
    }

    @Override
    public PageResult<List<Map<String, Object>>> listByChannel(String channel, int page, int pageSize) {
        Page<ContentPost> p = new Page<>(page, pageSize);
        Page<ContentPost> result = contentPostMapper.selectPage(p,
            new LambdaQueryWrapper<ContentPost>()
                .eq(ContentPost::getChannel, channel)
                .eq(ContentPost::getStatus, 2)
                .orderByDesc(ContentPost::getPublishedAt)
        );
        return PageResult.of(result.getTotal(), page, pageSize, toPostList(result.getRecords()));
    }

    @Override
    public ContentPost getDetail(Long postId) {
        ContentPost post = contentPostMapper.selectById(postId);
        if (post != null) {
            contentPostMapper.update(null,
                new com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper<ContentPost>()
                    .eq(ContentPost::getId, postId)
                    .setSql("view_count = view_count + 1")
            );
        }
        return post;
    }

    @Override
    public Result<Void> delete(Long userId, Long postId) {
        ContentPost post = contentPostMapper.selectById(postId);
        if (post == null) return Result.fail("帖子不存在");
        if (!post.getUserId().equals(userId)) return Result.fail("无权删除");
        post.setStatus(4);
        contentPostMapper.updateById(post);
        return Result.ok("已删除");
    }

    @Override
    public PageResult<List<Map<String, Object>>> listForAdmin(Map<String, Object> params) {
        int page = params.containsKey("page") ? Integer.parseInt(params.get("page").toString()) : 1;
        int pageSize = params.containsKey("pageSize") ? Integer.parseInt(params.get("pageSize").toString()) : 10;
        String channel = (String) params.get("channel");
        String status = (String) params.get("status");
        String contentType = (String) params.get("contentType");

        Page<ContentPost> p = new Page<>(page, pageSize);
        LambdaQueryWrapper<ContentPost> qw = new LambdaQueryWrapper<>();
        if (channel != null && !channel.isEmpty()) qw.eq(ContentPost::getChannel, channel);
        if (status != null && !status.isEmpty()) qw.eq(ContentPost::getStatus, Integer.parseInt(status));
        if (contentType != null && !contentType.isEmpty()) qw.eq(ContentPost::getContentType, contentType);
        qw.orderByDesc(ContentPost::getCreatedAt);

        Page<ContentPost> result = contentPostMapper.selectPage(p, qw);
        return PageResult.of(result.getTotal(), page, pageSize, toPostList(result.getRecords()));
    }

    @Override
    @Transactional
    public Result<Void> audit(Long adminId, Long postId, Integer status, String remark) {
        ContentPost post = contentPostMapper.selectById(postId);
        if (post == null) return Result.fail("帖子不存在");
        post.setStatus(status);
        post.setAuditAt(LocalDateTime.now());
        post.setAuditorId(adminId);
        post.setAuditRemark(remark);
        if (status == 2) post.setPublishedAt(LocalDateTime.now());
        contentPostMapper.updateById(post);
        return Result.ok("审核完成");
    }

    private List<Map<String, Object>> toNewsList(List<ContentPost> posts) {
        List<Map<String, Object>> list = new ArrayList<>();
        for (ContentPost p : posts) {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("id", p.getId());
            m.put("title", p.getTitle());
            m.put("content", p.getContent());
            m.put("images", parseImages(p.getImages()));
            m.put("contentType", p.getContentType());
            m.put("publishedAt", p.getPublishedAt() != null ? p.getPublishedAt().format(DF) : null);
            list.add(m);
        }
        return list;
    }

    private List<Map<String, Object>> toPostList(List<ContentPost> posts) {
        List<Map<String, Object>> list = new ArrayList<>();
        for (ContentPost p : posts) {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("id", p.getId());
            m.put("postNo", p.getPostNo());
            m.put("userId", p.getUserId());
            m.put("userNickname", p.getUserNickname());
            m.put("channel", p.getChannel());
            m.put("contentType", p.getContentType());
            m.put("title", p.getTitle());
            m.put("content", p.getContent());
            m.put("images", parseImages(p.getImages()));
            m.put("videoUrl", p.getVideoUrl());
            m.put("videoCover", p.getVideoCover());
            m.put("location", p.getLocation());
            m.put("viewCount", p.getViewCount() != null ? p.getViewCount() : 0);
            m.put("likeCount", p.getLikeCount() != null ? p.getLikeCount() : 0);
            m.put("commentCount", p.getCommentCount() != null ? p.getCommentCount() : 0);
            m.put("status", p.getStatus());
            m.put("publishedAt", p.getPublishedAt() != null ? p.getPublishedAt().format(DF) : null);
            m.put("createdAt", p.getCreatedAt() != null ? p.getCreatedAt().format(DF) : null);
            list.add(m);
        }
        return list;
    }

    private String[] parseImages(String json) {
        if (json == null || json.isEmpty()) return new String[0];
        try {
            return MAPPER.readValue(json, String[].class);
        } catch (Exception e) {
            return new String[0];
        }
    }
}
