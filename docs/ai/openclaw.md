# OpenClaw 从 0 到 1：Windows + WSL 的真实上手路径

适用环境：

- Windows + WSL2
- 第一次安装或第一次认真使用 OpenClaw
- 当前目标是先把 Gateway、Dashboard、模型和基础安全基线跑顺

这篇不是参数大全，也不是纯复盘随笔。

它解决的是三个问题：

- 我到底有没有装成功
- 我应该按什么顺序检查
- 遇到分支问题时该跳去哪里看

---

## 命令速查表

```bash
# Windows 里先把 WSL 关掉再重启，常用于修 systemd 和服务状态
wsl --shutdown

# 重新进入 Ubuntu，确认 WSL 环境已经恢复
wsl

# 先看 Gateway 是否在线，最适合判断 OpenClaw 有没有真正跑起来
openclaw gateway status

# 打开本地 Dashboard，确认浏览器入口、token 和控制台是否可用
openclaw dashboard

# 全局状态总览，适合一次看清 Gateway、Agent、Channels、Tailscale
openclaw status --all

# 安全审计，优先看告警和攻击面，适合安装后第一轮排查
openclaw security audit --deep

# 模型状态，重点看默认模型、provider、鉴权和 fallback
openclaw models status

# 修改完配置后先做一次校验，避免 JSON 或 schema 错误
openclaw config validate

# 在 systemd 正常时重启 Gateway 守护进程
openclaw gateway restart

# 只在 WSL 里确认 PID 1 是否已经变成 systemd
ps -p 1 -o comm=

# 查看 systemd 用户服务，适合确认 openclaw-gateway.service 是否存在
systemctl --user status openclaw-gateway.service --no-pager
```

---

## 主流程

### Step 1：确认 WSL 与 systemd 正常

先进入 WSL：

```bash
wsl
```

确认 systemd 是否正常：

```bash
ps -p 1 -o comm=
```

如果输出是：

```text
systemd
```

说明 systemd 已正常工作。

如果 WSL 状态异常，最常用的恢复动作是在 Windows 执行：

```powershell
wsl --shutdown
```

然后重新进入 WSL。

如果你准备走守护进程方式，请继续看：

- [Q2：守护进程模式怎么理解和检查？](#q2守护进程模式怎么理解和检查)

---

### Step 2：运行 onboarding / 首轮配置

第一次上手时，建议先走 OpenClaw 自带的初始化流程，而不是一开始就手改所有配置。

常见入口是：

```bash
openclaw
```

或者按你的安装方式进入它的 onboarding / wizard 流程。

这一步重点不是一次性把所有配置背下来，而是先理解会碰到的几类设置：

- Gateway 的监听与访问方式
- Dashboard / 控制入口
- 模型 provider 与默认模型
- 鉴权与 token
- 是否启用守护进程

这一步不要急着“全开”。

初学阶段更稳的原则是：

- 先本地
- 先保守
- 先可解释

也就是：

- 先用本机访问
- 先别接外部渠道
- 先别暴露到局域网或公网

如果你对 onboarding 里某些项不确定，优先记住这几个判断：

- `bind` 能用 `loopback` 就先用 `loopback`
- 鉴权优先保留 `token`
- provider / model 先确认能通，再谈优化
- 守护进程适合长期使用，但前提是 systemd 正常

---

### Step 3：检查 Gateway 是否已经运行

先看网关状态：

```bash
openclaw gateway status
```

再看完整系统状态：

```bash
openclaw status --all
```

这两步足够判断：

- Gateway 是否在线
- Dashboard 是否可访问
- Agent / Channels / Tailscale 当前是什么状态

如果你看到：

- `gateway already running`
- `Port 18789 is already in use`

不要先慌，这通常说明后台服务已经在运行。对应解释看：

- [Q3：`gateway already running` 是错误吗？](#q3gateway-already-running-是错误吗)

---

### Step 4：打开 Dashboard

执行：

```bash
openclaw dashboard
```

如果你在 WSL 里看到类似：

```text
No GUI detected. Open from your computer.
```

这通常不是错误，而是说明：

- Gateway 和 Dashboard 已经起来了
- 当前 WSL 环境没有图形界面
- 需要从 Windows 浏览器打开地址

---

### Step 5：确认当前安全基线

先看最关键的配置：

```bash
openclaw config get gateway.bind
openclaw config get gateway.auth.mode
openclaw nodes status
```

对于初学阶段，理想状态通常是：

- `gateway.bind = loopback`
- `gateway.auth.mode = token`
- 没有额外节点接入

这意味着：

- 只监听本机
- 不是匿名访问
- 攻击面较小

---

### Step 6：做一次安全审计

执行：

```bash
openclaw security audit --deep
```

重点先看：

- 是否有 `critical`
- 是否有明确需要立刻处理的 `warn`

如果当前是本地单机使用，没有公网暴露，没有外部节点，一些 warning 可能只是“未来配置提醒”，不一定是当前阻塞问题。

---

### Step 7：验证模型是否可用

执行：

```bash
openclaw models status
```

如果这里没配好，再继续：

```bash
openclaw configure --section model
```

Dashboard 能打开，不等于模型已经可用。模型这一层需要单独确认。

---

### Step 8：发第一条测试消息

当 Gateway、Dashboard 和模型状态都正常后，再在 Dashboard 里发第一条真正的测试消息。

建议先测简单问题，例如：

```text
请用中文介绍一下你当前的运行环境。
```

这一步主要验证：

- 前端连通
- 鉴权正常
- 模型调用链路正常

---

## 常见问题

### Q1：`openclaw dashboard` 里出现 `No GUI detected`，是不是没装好？

通常不是。

这更多是在说明：

- 当前 WSL 环境没有桌面图形能力
- 需要改从 Windows 浏览器访问 Dashboard

优先动作不是重装，而是直接去宿主机浏览器打开它给出的本地地址。

---

### Q2：守护进程模式怎么理解和检查？

如果你长期使用 OpenClaw，守护进程模式通常是更稳的方式。

你这次实际使用的就是这条路径。

守护进程模式下，OpenClaw 通常由 systemd 用户服务托管，而不是每次手动前台启动。

重点检查这几步：

```bash
systemctl --user status openclaw-gateway.service --no-pager
openclaw gateway status
```

如果服务正常，你通常会看到：

- service 已启用
- Gateway 在线
- 端口已被占用

这时正确动作是：

- 用 `openclaw gateway status` / `openclaw status --all` 看状态
- 用 `openclaw gateway restart` 重启
- 不要反复用 `openclaw gateway run` 顶上去

适合使用守护进程的场景：

- 希望系统重启后服务自动恢复
- 不想每次手动开 Gateway
- 想把 OpenClaw 当长期运行环境来用

---

### Q3：`gateway already running` 是错误吗？

不一定。

如果你已经启用了守护进程，看到：

- `gateway already running`
- `Port 18789 is already in use`

往往说明后台服务已经在运行。

这时优先看：

```bash
openclaw gateway status
```

而不是继续手动 `run`。

---

### Q4：什么时候该看 `gateway status`，什么时候该看 `status --all`？

推荐这样理解：

- `openclaw gateway status`
  - 只关心网关服务本身是不是活着
- `openclaw status --all`
  - 关心完整系统状态
  - 适合一次看 Gateway、Dashboard、Agent、Channels、Tailscale

如果只是怀疑服务没起来，先看 `gateway status`。
如果想一次看全局，直接看 `status --all`。

---

### Q5：安全审计出现 warning，是不是就说明现在不能用？

不一定。

关键是先判断 warning 是：

- 当前场景里的真实风险
- 还是未来扩展时要注意的配置项

例如在本地单机、只监听回环地址、没有公网暴露的阶段，某些 warning 只是提醒，不一定需要立刻阻断进度。

---

### Q6：Dashboard 能打开，但为什么还要单独查模型？

因为 Dashboard 能打开，只说明：

- Gateway 在线
- Web 入口正常

不代表模型 provider、鉴权和默认模型一定可用。

所以模型状态必须单独检查。

---

### Q7：刚开始要不要急着接 Telegram、远程节点、局域网访问？

不建议。

更稳的顺序是：

1. 先本地跑通
2. 先确认安全基线
3. 先确认模型可用
4. 再逐个增加外部渠道或节点

这样最容易排错，也最不容易在一开始把攻击面打开。

---

## 问题速查表

| 现象 | 常见原因 | 处理方式 |
|---|---|---|
| Dashboard 打不开 | Gateway 未运行或入口没确认 | 看 [Step 3](#step-3检查-gateway-是否已经运行) |
| `No GUI detected` | 处于 WSL，无图形界面 | 看 [Q1](#q1openclaw-dashboard-里出现-no-gui-detected是不是没装好) |
| `gateway already running` | 后台守护进程已运行 | 看 [Q2](#q2守护进程模式怎么理解和检查) / [Q3](#q3gateway-already-running-是错误吗) |
| 不确定当前系统整体状态 | 只看了单条命令 | 看 [Q4](#q4什么时候该看-gateway-status什么时候该看-status---all) |
| 安全审计有 warning | 不一定是当前阻塞 | 看 [Q5](#q5安全审计出现-warning是不是就说明现在不能用) |
| Dashboard 能开但不能正常回复 | 模型层未就绪 | 看 [Step 7](#step-7验证模型是否可用) |
| 想马上接很多渠道 | 复杂度太早升高 | 看 [Q7](#q7刚开始要不要急着接-telegram远程节点局域网访问) |

---

## 推荐起步状态

对第一次上手来说，更稳的状态通常是：

- `gateway.bind = loopback`
- `gateway.auth.mode = token`
- 没有外部节点
- 没有外部渠道
- 本地浏览器可打开 Dashboard
- 默认模型已确认可用
- Gateway 由守护进程稳定托管（如果你准备长期使用）

这意味着系统复杂度和攻击面都被压到了最小。

---

## 下一步建议

当你确认下面几件事都没问题之后，再继续下一层：

- Gateway 在线
- Dashboard 可访问
- 安全基线清楚
- 模型可用
- 第一条测试消息能正常回复

这时再去看：

- Telegram 接入
- Workspace 结构
- AGENTS / SOUL / TOOLS / MEMORY
- 后续节点与远程访问

如果下一步准备接 Telegram，可以继续看：

- [OpenClaw 接入 Telegram 指南](./telegram.md)
