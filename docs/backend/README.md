# Go Web 开发全栈指南 (基于 go-web-template)

这份指南基于你在这个项目中的实战经历，整理了从环境搭建到数据库集成的完整路径。

---

## 🚀 1. 环境准备 (Environment Setup)

### 1.1 安装 Go

- **下载**: [Go 官网](https://go.dev/dl/) 或 [Go 中文网](https://studygolang.com/dl)
- **安装**: Windows 下直接运行 MSI 安装包，默认安装路径 `C:\Program Files\Go`。
- **验证**: 打开终端 (PowerShell / CMD) 输入 `go version`。
- **环境配置**:
  - `GOPROXY`: 开启模块代理加速下载 (重要!)
    ```powershell
    go env -w GOPROXY=https://goproxy.cn,direct
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

Go Web 项目通常采用分层架构，`go-web-template` 也不例外：

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

- 接收 `*gins.Context`。
- 解析参数: `ctx.ShouldBindJSON(&req)`。
- 调用 Store 层。
- 返回结果或错误。

### Step 4: 注册路由 (Controller)

在 `backend/controller/api_routes.go` 中注册 URL。

- `router.POST("/user/signup", API.SignUp)`
- 注意 HTTP 方法匹配 (GET vs POST)。

---

## 💡 4. 关键知识点复习 (Key Concepts)

### 4.1 指针 vs 值 (Pointer vs Value)

- `func (u *user) Get(...)`: 方法接收者用指针，可以修改对象状态，避免大对象拷贝。
- `UserRecord{...}`: 结构体实例化。

### 4.2 错误处理 (Error Handling)

Go 语言的标志性写法：

```go
res, err := store.Create(...)
if err != nil {
    return nil, err // 尽早返回错误
}
```

### 4.3 Context (上下文)

- `ctx *gins.Context` (基于 gin.Context) 是贯穿请求周期的核心对象。
- 用于获取请求参数 (`BindJSON`, `Query`)。
- 用于响应数据 (`ctx.API.SetData`, `ctx.API.SetError`)。

---

## ❓ 5. 常见问题 (FAQ)

### Q: `bind: address already in use` 是什么？

- **原因**: 端口被占用了（通常是上次启动的程序没关掉）。
- **解决**: 关闭正在运行的 `debug.exe` 或终端，或者使用 `taskkill /F /IM debug.exe`。

### Q: 修改了 Go 代码不生效？

- **原因**: Go 是编译型语言。
- **解决**: 必须重新运行 `go build` 或 `pnpm run server`（触发重新编译）。

### Q: 结构体字段为什么访问不到？

- **原因**: 字段名首字母小写是 **私有** (private) 的。
- **解决**: 跨包访问（如 JSON 序列化），字段名首字母必须 **大写** (Public)。
  - ❌ `type User struct { name string }`
  - ✅ `type User struct { Name string }`

---

## 📚 6. 下一步学习建议

1. **SQL 进阶**: 学习连表查询 (`Join`)，事务 (`Transaction`)。
2. **中间件 (Middleware)**: 学习如何编写鉴权、日志中间件。
3. **配置文件**: 尝试将数据库连接串改为从环境变量读取，更安全。
