# 农家菌肥商城小程序 - 后台系统

## 项目结构

```
农家菌肥商城小程序/
├── TW-MiniApp-chuqi/          # 微信小程序前端
├── TW-MiniApp-chuqiSpringboot/ # Spring Boot 后端服务
│   └── TW-MiniApp-chuqiSpringboot/
│       └── src/main/java/com/nongjia/mall/
│           ├── config/          # 配置类 (JWT/CORS/安全)
│           ├── common/          # 通用类 (Result/PageResult)
│           ├── entity/          # 实体类
│           ├── mapper/          # Mapper接口
│           ├── service/         # 服务层
│           ├── controller/      # 控制器
│           │   ├── app/         # 小程序API
│           │   └── admin/       # 管理端API
│           ├── dto/             # 数据传输对象
│           ├── interceptor/      # 拦截器
│           └── FarmFertilizerMallApplication.java
├── TW-MiniApp-chuqiAdmin/     # Vue3 管理端前端
│   └── camping-life-admin-vue/
│       └── src/
│           ├── api/             # API调用
│           ├── router/          # 路由
│           ├── stores/          # 状态管理
│           └── views/           # 页面组件
└── database/
    └── init.sql                # 数据库初始化脚本
```

## 技术栈

- **后端**: Spring Boot 3.2 + MyBatis Plus 3.5 + JWT + MySQL 8.0
- **管理端**: Vue 3 + Vite + Element Plus + Pinia + Axios + ECharts
- **小程序**: 微信小程序原生开发

## 快速开始

### 1. 数据库初始化

```bash
mysql -u root -p < database/init.sql
```

### 2. 后端服务启动

```bash
cd TW-MiniApp-chuqiSpringboot/TW-MiniApp-chuqiSpringboot

# 修改 src/main/resources/application.yml 中的数据库连接信息
# 然后运行:
mvn spring-boot:run

# 或打包后运行:
mvn clean package
java -jar target/TW-MiniApp-chuqiSpringboot-0.0.1-SNAPSHOT.jar
```

### 3. 管理端前端启动

```bash
cd TW-MiniApp-chuqiAdmin/camping-life-admin-vue
npm install
npm run dev
```

访问 http://localhost:3000

**默认管理员账号**: admin / admin123

### 4. 小程序配置

修改小程序中的 `api` 请求地址，指向后端服务地址。

## API 接口

### 小程序端 (App)

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | /api/app/auth/login | 用户登录 |
| GET | /api/app/auth/user-info | 获取用户信息 |
| GET | /api/app/config/product | 获取产品配置 |
| GET | /api/app/config/service-points | 获取服务网点 |
| GET | /api/app/recharge/calculate | 计算充值金额 |
| POST | /api/app/recharge/submit | 提交充值 |
| GET | /api/app/recharge/records | 充值记录 |
| POST | /api/app/pickup/create | 创建提货订单 |
| GET | /api/app/pickup/records | 提货记录 |
| POST | /api/app/trial/book | 预约试用 |
| GET | /api/app/trial/records | 预约记录 |
| GET | /api/app/content/home | 首页数据 |
| GET | /api/app/content/news | 新闻列表 |
| GET | /api/app/content/moments | 动态列表 |

### 管理端 (Admin)

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | /api/admin/auth/login | 管理员登录 |
| GET | /api/admin/dashboard | 工作台数据 |
| GET | /api/admin/users/list | 用户列表 |
| GET | /api/admin/orders/recharge-list | 充值订单列表 |
| GET | /api/admin/orders/pickup-list | 提货订单列表 |
| GET | /api/admin/trial/list | 试用预约列表 |
| GET | /api/admin/content/list | 内容列表 |
| GET | /api/admin/partner/list | 合伙人申请列表 |
| GET | /api/admin/config/list | 系统配置列表 |
| POST | /api/admin/config/update | 更新配置 |

## 功能模块

- **用户管理**: 用户列表、钱包余额查看、钱包调账
- **充值订单**: 充值记录查看、确认支付
- **提货订单**: 提货订单管理(确认/完成/取消)
- **试用预约**: 试用预约管理(确认/完成/取消)
- **内容管理**: 新闻/动态审核
- **合伙人申请**: 合伙人审核管理
- **系统配置**: 系统参数配置

## 数据库

- 数据库名: `farm_fertilizer_mall`
- 默认管理员: admin / admin123
- 演示用户: 13860179716 (化肥余额2800kg)
