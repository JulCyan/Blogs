# Go Web 开发全栈指南

这份指南基于实战经历，整理了从环境搭建到数据库集成、再到 RESTful CRUD 的完整路径。

---

## 🚀 1. 环境准备 (Environment Setup)

### 1.1 安装 Go

- **下载**: [Go 官网](https://go.dev/dl/) 或 [Go 中文网](https://studygolang.com/dl)
- **安装**: Windows 下直接运行 MSI 安装包，默认安装路径 `C:\Program Files\Go`。
- **验证**: 打开终端 (PowerShell / CMD) 输入 `go version`。

### 1.4 家里开发环境搭建 (Home Setup & Migration)

由于项目依赖公司私有包 (`your-company.com`), 在家无法直接连公司 Git，需要手动迁移依赖。

#### Step 1: 准备迁移包 (在公司电脑)

找到 `GOMODCACHE` 目录 (通常是 `C:\Users\Admin\go\pkg\mod`)，打包以下文件夹：

1. `your-company.com` 文件夹
2. `github.com/your-org` 文件夹
3. 整个 `my-go-project` 项目文件夹

#### Step 2: 恢复环境 (在家里电脑)

1. **安装 Go**: 建议版本 1.25+
2. **恢复依赖**: 将打包的 `your-company.com` 等文件夹，解压到家里电脑的 `GOMODCACHE` 对应位置。
3. **配置 Go 环境变量** (禁止联网拉取私有包):
   ```powershell
   go env -w GOFLAGS="-mod=mod"
   go env -w GOPRIVATE="your-company.com,*.your-company.com,github.com/your-org"
   go env -w GONOSUMCHECK="your-company.com,*.your-company.com"
   ```
4. **启动 Docker MySQL**:
   ```bash
   docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql:8.0
   ```
5. **创建数据库表**:

   ```sql
   CREATE DATABASE IF NOT EXISTS my_go_project;
   USE my_go_project;

   CREATE TABLE `users` (
     `id` int(11) NOT NULL AUTO_INCREMENT,
     `name` varchar(255) DEFAULT '',
     `email` varchar(255) NOT NULL,
     PRIMARY KEY (`id`),
     UNIQUE KEY `email` (`email`)
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
   ```

### 1.2 开发工具 (IDE)

- **VS Code**: 推荐。
- **插件**: 必装 **Go** (Team at Google)。它会自动提示安装 `gopls` 等工具，允许即可。

### 1.3 数据库 (MySQL)

- **方式 A (推荐)**: Docker 安装 (如果已装 Docker Desktop)
  ```bash
  docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql:8.0
  ```
- **方式 B**: MySQL Installer (Windows MSI)
- **客户端**: 推荐 DBeaver 或 Navicat 连接测试。

---

## 🏗️ 2. 项目架构 (Project Structure)

Go Web 项目通常采用分层架构：

```
backend/
├── controller/      # 控制层：解析请求参数，调用 Service，返回响应
│   └── api_routes.go # 路由注册入口 (Gin Router)
├── service/         # 业务逻辑层：核心业务处理
│   └── user.go
├── store/ (或 db/)  # 数据存储层：数据库操作 (CRUD)
│   └── user.go
├── model/           # 数据模型：定义结构体 (Struct)
│   └── apimodel/    # API 请求/响应结构
├── config/          # 配置定义
└── main.go          # 程序入口：初始化各组件，启动 HTTP 服务
```

### 核心依赖

- **Web 框架**: `gin` (高性能 HTTP 框架)
- **ORM 框架**: `xorm` (数据库操作)
- **配置管理**: `yaml`

---

## 📝 3. 核心开发流程 (Development Flow)

### Step 1: 定义数据模型 (Model)

在 `backend/model/apimodel` 定义前后端交互的数据结构。

- 使用 **Struct Tag** (`json:"email"`) 控制 JSON 序列化字段名。

```go
type UserReq struct {
    Email string `json:"email"` // 前端传 { "email": "..." }
}
```

### Step 2: 实现存储层 (Store/DB)

**Phase A: 内存版 (Map)**

- 使用 `map[int]*User` 存储数据。
- **关键点**: 必须用 `sync.RWMutex` 保证并发安全！(Map 不是并发安全的)

**Phase B: 数据库版 (Xorm)**

- 使用 `xorm` 直接操作数据库。
- `Tag`: `xorm:"'id' pk autoincr"` 定义主键自增。
- `DB.Insert()`, `DB.Get()`, `DB.Find()`。

### Step 3: 实现业务逻辑 (Service)

在 `backend/service` 中编写业务代码。

- 接收 `*gin.Context`。
- 解析参数: `ctx.ShouldBindJSON(&req)`。
- 调用 Store 层。
- 返回结果或错误。

### Step 4: 注册路由 (Controller)

在 `backend/controller/api_routes.go` 中注册 URL。

- `router.POST("/user/signup", API.SignUp)`
- 注意 HTTP 方法匹配 (GET vs POST)。

---

## 🔥 4. RESTful CRUD 实战 (Phase 4 Highlights)

在这一阶段，我们完成了完整的用户管理功能，覆盖了 RESTful API 的核心操作：

### 4.1 列表 (List - GET)

- **Xorm**: `DB.Find(&users)` — 查询所有记录。
- **Go**: 切片 `[]*UserRecord` 的使用。
- **Service**: 遍历数据库记录，转换为 API 响应模型 `apimodel.OsUserRes`。

### 4.2 更新 (Update - PUT)

- **路由参数**: `ctx.Param("id")` 获取 URL 中的 ID (`/user/123`)。
- **类型转换**: `strconv.Atoi()` 将字符串 ID 转为整数。
- **Partial Update (部分更新)**:
  - 使用 `map[string]interface{}` (你的 `cols` 变量) 来构建更新字段。
  - `DB.Table(...).ID(id).Update(cols)` — 只更新 map 中存在的字段，避免覆盖其他字段。
  - 这种技巧在 Go 中非常常用，尤其是处理 `PATCH` 或部分 `PUT` 请求时。

### 4.3 删除 (Delete - DELETE)

- **Xorm**: `DB.ID(id).Delete(&UserRecord{})` — 根据主键删除。
- **注意**: xorm 的 Delete 需要传入一个非空指针作为条件或模板。

---

## 💡 5. 关键知识点复习 (Key Concepts)

### 5.1 指针 vs 值 (Pointer vs Value)

- `func (u *user) Get(...)`: 方法接收者用指针，可以修改对象状态，避免大对象拷贝。
- `UserRecord{...}`: 结构体实例化。
- `Name *string`: 使用指针类型的字段（如 `apimodel.OsUserReq`），可以区分 "前端没传这个字段" (nil) 和 "前端传了空字符串" ("")。

### 5.2 错误处理 (Error Handling)

Go 语言的标志性写法：

```go
res, err := store.Create(...)
if err != nil {
    return nil, err // 尽早返回错误
}
```

### 5.3 xorm 常用操作速查

- `Get`: 查询单条，返回 `bool` (是否存在)。
- `Find`: 查询多条，通常传入切片指针 `&users`。
- `Insert`: 插入。
- `Update`: 更新，配合 `ID()` 指定主键。
- `Delete`: 删除。

---

## ❓ 6. 常见问题 (FAQ)

### Q: `bind: address already in use` 是什么？

- **原因**: 端口被占用了。
- **解决**: 使用 `taskkill /F /IM debug.exe` 杀掉进程。

### Q: 修改了 Go 代码不生效？

- **原因**: Go 是编译型语言。
- **解决**: 必须重新运行 `pnpm run server`（触发重新编译）。

---

## 🧭 8. 学习策略建议 (Strategy)

你问到了 **"Deep (深)" vs "Wide (广)"** 的问题。对于现阶段的你（前端转全栈/Go 初学者），我的建议是：

**👉 优先选择 "Deep (深)"，但在当前项目上下文中进行。**

### 为什么选 "Deep"?

1.  **真实场景**: 你现在已经有了一个能跑的项目脚手架 (`my-go-project`)。把它吃透，比写 10 个 "Hello World" 的 Demo 更管用。
2.  **触类旁通**: 深入理解了 Gin 的中间件机制，以后看 Echo 或 Fiber 框架也是秒懂；深入理解了 context 的传递，换个语言也一样。
3.  **避免"教程地狱"**: 广度学习容易陷入"只看不练"的陷阱。

### 推荐路径 (Deep in Context)

不要凭空去学 "Go 的 100 个奇技淫巧"，而是**在这个项目里**给自己提需求：

1.  **Phase 4 (当前)**: CRUD 只是起点。
2.  **Phase 5 (Middleware/Auth)**:
    - 需求: "我不希望任何人都能删除用户，必须登录且是管理员。"
    - 知识点: Gin Middleware, JWT, Context 传递用户信息。
3.  **Phase 6 (Reliability)**:
    - 需求: "用户填了空邮箱报错 Panic 了？数据库挂了怎么办？"
    - 知识点: Validator 参数校验, Global Error Handling, Graceful Shutdown.
4.  **Phase 7 (Performance)**:
    - 需求: "用户列表有 1000 万条数据，查不动了。"
    - 知识点: Pagination (分页), Index (索引), Redis Caching.

**结论**: 继续在这个 `my-go-project` 上深挖。当你觉得这个项目已经"拦不住"你的时候，再去探索微服务、RPC 等广度领域。
