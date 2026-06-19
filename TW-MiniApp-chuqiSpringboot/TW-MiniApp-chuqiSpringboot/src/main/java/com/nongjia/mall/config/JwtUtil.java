package com.nongjia.mall.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtil {

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.ttl}")
    private long ttl;

    /** 小程序用户 token 类型 */
    public static final String TYPE_APP = "app";
    /** 管理端 token 类型 */
    public static final String TYPE_ADMIN = "admin";

    private SecretKey getSigningKey() {
        return Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
    }

    /** 兼容旧调用：默认签发小程序用户 token。 */
    public String generateToken(Long userId, String phone) {
        return generateToken(userId, phone, TYPE_APP);
    }

    /**
     * 生成带类型声明的 token，用于区分小程序用户与管理端，
     * 防止 app token 越权访问 admin 接口。
     */
    public String generateToken(Long userId, String subject, String type) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", userId);
        claims.put("phone", subject);
        claims.put("type", type);
        return Jwts.builder()
                .claims(claims)
                .subject(userId.toString())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + ttl))
                .signWith(getSigningKey())
                .compact();
    }

    public Claims parseToken(String token) {
        return Jwts.parser()
                .verifyWith(getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    public Long getUserId(String token) {
        Claims claims = parseToken(token);
        return claims.get("userId", Long.class);
    }

    public String getPhone(String token) {
        Claims claims = parseToken(token);
        return claims.get("phone", String.class);
    }

    /** 读取 token 类型；旧版未带类型的 token 返回 null。 */
    public String getTokenType(String token) {
        Claims claims = parseToken(token);
        return claims.get("type", String.class);
    }

    public boolean isTokenExpired(String token) {
        try {
            Claims claims = parseToken(token);
            return claims.getExpiration().before(new Date());
        } catch (Exception e) {
            return true;
        }
    }
}
