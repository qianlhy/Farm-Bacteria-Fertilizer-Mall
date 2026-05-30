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
                .eq(ContentPost::getChannel, "moment")
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

        ContentPost post;
        if (params.get("id") != null) {
            Long postId = Long.parseLong(params.get("id").toString());
            post = contentPostMapper.selectById(postId);
            if (post == null) return Result.fail("内容不存在");
            if (!post.getUserId().equals(userId)) return Result.fail("无权编辑");
        } else {
            post = new ContentPost();
            post.setPostNo("P" + System.currentTimeMillis() + UUID.randomUUID().toString().substring(0, 6).toUpperCase());
            post.setUserId(userId);
            post.setUserNickname(user.getNickname());
            post.setStatus(2);
            post.setPublishedAt(LocalDateTime.now());
        }

        applyContentFields(post, params);
        if (post.getUserNickname() == null || post.getUserNickname().isEmpty()) {
            post.setUserNickname(user.getNickname());
        }

        if (post.getId() == null) {
            contentPostMapper.insert(post);
        } else {
            contentPostMapper.updateById(post);
        }

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

    @Override
    @Transactional
    public Result<ContentPost> saveByAdmin(Long adminId, Map<String, Object> params) {
        ContentPost post;
        if (params.get("id") != null && !params.get("id").toString().isEmpty()) {
            Long postId = Long.parseLong(params.get("id").toString());
            post = contentPostMapper.selectById(postId);
            if (post == null) return Result.fail("内容不存在");
        } else {
            post = new ContentPost();
            post.setPostNo("P" + System.currentTimeMillis() + UUID.randomUUID().toString().substring(0, 6).toUpperCase());
            post.setUserId(0L);
            post.setUserNickname("肽为农家菌肥");
        }

        applyContentFields(post, params);

        if (params.get("userNickname") != null && !params.get("userNickname").toString().isEmpty()) {
            post.setUserNickname(params.get("userNickname").toString());
        }

        Integer status = params.get("status") != null
            ? Integer.parseInt(params.get("status").toString())
            : 2;
        post.setStatus(status);
        if (status == 2 && post.getPublishedAt() == null) {
            post.setPublishedAt(LocalDateTime.now());
        }

        if (post.getId() == null) {
            contentPostMapper.insert(post);
        } else {
            contentPostMapper.updateById(post);
        }

        return Result.ok("保存成功", post);
    }

    @Override
    public Map<String, Object> getDetailMap(Long postId) {
        ContentPost post = getDetail(postId);
        if (post == null || post.getStatus() == null || post.getStatus() == 4) {
            return null;
        }
        return toPostMap(post);
    }

    @Override
    public Map<String, Object> getPostMapById(Long postId) {
        ContentPost post = contentPostMapper.selectById(postId);
        if (post == null) {
            return null;
        }
        return toPostMap(post);
    }

    private void applyContentFields(ContentPost post, Map<String, Object> params) {
        if (params.get("channel") != null) post.setChannel(params.get("channel").toString());
        if (params.get("contentType") != null) post.setContentType(params.get("contentType").toString());
        if (params.get("title") != null) post.setTitle(params.get("title").toString());
        if (params.get("content") != null) post.setContent(params.get("content").toString());
        if (params.get("location") != null) post.setLocation(params.get("location").toString());
        if (params.get("videoUrl") != null) post.setVideoUrl(params.get("videoUrl").toString());
        if (params.get("videoCover") != null) post.setVideoCover(params.get("videoCover").toString());

        if (params.get("images") != null) {
            try {
                post.setImages(MAPPER.writeValueAsString(params.get("images")));
            } catch (Exception ignored) {}
        }

        if (params.get("latitude") != null) {
            post.setLatitude(new java.math.BigDecimal(params.get("latitude").toString()));
        }
        if (params.get("longitude") != null) {
            post.setLongitude(new java.math.BigDecimal(params.get("longitude").toString()));
        }

        if (post.getChannel() == null || post.getChannel().isEmpty()) {
            post.setChannel("moment");
        }
        if (post.getContentType() == null || post.getContentType().isEmpty()) {
            post.setContentType("dynamic");
        }
    }

    private List<Map<String, Object>> toNewsList(List<ContentPost> posts) {
        List<Map<String, Object>> list = new ArrayList<>();
        for (ContentPost p : posts) {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("id", p.getId());
            m.put("title", p.getTitle());
            m.put("content", p.getContent());
            String[] images = parseImages(p.getImages());
            m.put("images", images);
            m.put("coverImage", images.length > 0 ? images[0] : p.getVideoCover());
            m.put("contentType", p.getContentType());
            m.put("publishedAt", p.getPublishedAt() != null ? p.getPublishedAt().format(DF) : null);
            list.add(m);
        }
        return list;
    }

    private List<Map<String, Object>> toPostList(List<ContentPost> posts) {
        List<Map<String, Object>> list = new ArrayList<>();
        for (ContentPost p : posts) {
            list.add(toPostMap(p));
        }
        return list;
    }

    private Map<String, Object> toPostMap(ContentPost p) {
        Map<String, Object> m = new LinkedHashMap<>();
        m.put("id", p.getId());
        m.put("postNo", p.getPostNo());
        m.put("userId", p.getUserId());
        m.put("userNickname", p.getUserNickname());
        m.put("channel", p.getChannel());
        m.put("contentType", p.getContentType());
        m.put("title", p.getTitle());
        m.put("content", p.getContent());
        String[] images = parseImages(p.getImages());
        m.put("images", images);
        m.put("coverImage", images.length > 0 ? images[0] : p.getVideoCover());
        m.put("videoUrl", p.getVideoUrl());
        m.put("videoCover", p.getVideoCover());
        m.put("location", p.getLocation());
        m.put("viewCount", p.getViewCount() != null ? p.getViewCount() : 0);
        m.put("likeCount", p.getLikeCount() != null ? p.getLikeCount() : 0);
        m.put("commentCount", p.getCommentCount() != null ? p.getCommentCount() : 0);
        m.put("status", p.getStatus());
        m.put("publishedAt", p.getPublishedAt() != null ? p.getPublishedAt().format(DF) : null);
        m.put("createdAt", p.getCreatedAt() != null ? p.getCreatedAt().format(DF) : null);
        return m;
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
