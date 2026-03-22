# OpenClaw 模型配置指南

适用环境：

- 已经把 OpenClaw Gateway 跑起来
- Dashboard 能打开，但还不确定模型是否可用
- 想弄清 provider / model / 鉴权 / fallback 这些配置到底怎么对应

---

## 主流程

### Step 1：先看模型状态

执行：

```bash
openclaw models status
```

先确认三件事：

- 默认模型是什么
- provider 是否识别正确
- 当前鉴权是否有效

如果这里只看一眼就报错，不要先改一堆配置，先确定是“模型层问题”而不是“Gateway 没起来”。

---

### Step 2：确认 provider 和 model 写法

OpenClaw 里，模型名通常不是随便填一个字符串就行。

更稳的写法是：

```text
provider/model
```

例如：

```text
minimax/MiniMax-M2.5-highspeed
```

这一步最关键的点是：

- provider 前缀要写对
- model 名要是当前 provider 已支持的

---

### Step 3：修改模型配置

如果当前默认模型不对，可以先走：

```bash
openclaw configure --section model
```

或者直接按你的配置方式修改模型相关配置。

修改完后，建议先做一次校验：

```bash
openclaw config validate
```

---

### Step 4：再次检查模型状态

执行：

```bash
openclaw models status
```

理想结果是：

- 默认模型已经变成你预期的 provider/model
- 鉴权正常
- 没有 provider / model 不匹配报错

---

### Step 5：发一条真实测试消息

模型状态正常后，再去 Dashboard 发一条简单消息测试。

例如：

```text
请用中文介绍一下你当前的运行环境。
```

如果这里能正常回复，才算模型链路真正打通。

---

## 常见问题

### Q1：Dashboard 能打开，为什么还要单独查模型？

因为 Dashboard 能打开，只说明：

- Gateway 在线
- Web 入口正常

不代表：

- provider 已配置正确
- API key 有效
- 默认模型可调用

所以模型状态必须单独检查。

---

### Q2：模型名为什么不能随便写？

因为 OpenClaw 需要先知道它属于哪个 provider。

如果只写模型名，不写 provider，系统可能会：

- 走错 provider
- 用错鉴权方式
- 最后报一个看起来很怪的错误

更稳的做法是始终显式写成：

```text
provider/model
```

---

### Q3：MiniMax 这类模型最容易踩什么坑？

最常见的问题就是：

- 把模型名裸写
- 没带 `minimax/` 前缀

这会导致系统把它当成别的 provider 处理，最终走错调用路径。

更稳的方式是：

```text
minimax/MiniMax-M2.5-highspeed
```

---

### Q4：`models status` 报错时，先查什么？

优先顺序：

1. Gateway 是否在线
2. provider 是否写对
3. model 名是否存在
4. API key / 鉴权是否正确
5. 是否需要 fallback，但当前没配置

---

### Q5：模型问题和网络问题怎么区分？

可以这样判断：

- Dashboard 打不开：更像 Gateway / Web 入口问题
- Dashboard 能开，但发消息失败：更像模型 / provider / key 问题
- 外部渠道不通：更像 channel / 网络 / proxy 问题

---

## 问题速查表

| 现象 | 常见原因 | 处理方式 |
|---|---|---|
| Dashboard 能打开，但回复失败 | 模型层未就绪 | 看 [Q1](#q1dashboard-能打开为什么还要单独查模型) |
| `models status` 报 provider/model 相关错误 | 写法不规范 | 看 [Q2](#q2模型名为什么不能随便写) |
| MiniMax 配了但不生效 | 少了 provider 前缀 | 看 [Q3](#q3minimax-这类模型最容易踩什么坑) |
| 不知道先查哪里 | 模型层与系统层混在一起 | 看 [Q4](#q4models-status-报错时先查什么) |
| 不确定是不是网络问题 | 问题层级判断不清 | 看 [Q5](#q5模型问题和网络问题怎么区分) |

---

## 推荐检查命令

```bash
# 查看模型状态
openclaw models status

# 进入模型配置流程
openclaw configure --section model

# 校验配置是否合法
openclaw config validate

# 查看完整系统状态
openclaw status --all

# 查看 Gateway 是否在线
openclaw gateway status
```

---

## 推荐判断顺序

当你怀疑模型有问题时，推荐顺序是：

1. 先看 `openclaw gateway status`
2. 再看 `openclaw models status`
3. 再检查 provider/model 写法
4. 再检查 API key / provider 配置
5. 最后再去 Dashboard 做真实测试

---

## 下一步建议

如果模型已经确认可用，再继续下一层通常更顺：

- Telegram 接入
- Workspace 结构
- 长期协作方式
- 不同 provider 的切换与 fallback

如果你还没看 OpenClaw 入门篇，可以先回看：

- [OpenClaw 从 0 到 1](./openclaw.md)

如果你下一步准备接 Telegram，可以继续看：

- [OpenClaw 接入 Telegram 指南](./telegram.md)
