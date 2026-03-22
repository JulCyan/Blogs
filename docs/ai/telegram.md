# OpenClaw 接入 Telegram 指南

适用环境：

- OpenClaw 跑在 Ubuntu / WSL
- Telegram Bot 由 OpenClaw 接入
- 如需代理，可配合 Windows 上的 Clash Verge

---

## 主流程

### Step 1：在 Telegram 创建 Bot

打开 `@BotFather`，发送：

```text
/newbot
```

按提示设置：

- Bot 显示名
- Bot 用户名（必须以 `bot` 结尾）

创建完成后保存 bot token。

---

### Step 2：把 token 和代理写入 `.env`

编辑 `~/.openclaw/.env`，加入：

```env
TELEGRAM_BOT_TOKEN=你的_TELEGRAM_BOT_TOKEN
TELEGRAM_PROXY=http://127.0.0.1:7897
```

如果暂时不需要代理，可以先只写：

```env
TELEGRAM_BOT_TOKEN=你的_TELEGRAM_BOT_TOKEN
```

如果文件不存在就新建。

---

### Step 3：在 OpenClaw 配置 Telegram

编辑 `~/.openclaw/openclaw.json`：

```json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "${TELEGRAM_BOT_TOKEN}",
      "proxy": "${TELEGRAM_PROXY}",
      "dmPolicy": "pairing",
      "groupPolicy": "allowlist",
      "groups": {
        "*": {
          "requireMention": true
        }
      },
      "replyToMode": "first",
      "streaming": "partial"
    }
  }
}
```

如果你的环境不能直连 Telegram，请继续看：

- [Q1：Telegram API 不通怎么办？](#q1telegram-api-不通怎么办)
- [Q2：WSL 怎么使用 Windows 上的 Clash？](#q2wsl-怎么使用-windows-上的-clash)

---

### Step 4：重启 Gateway

修改 `~/.openclaw/.env` 后，重启 Gateway，再做连通性验证。

```bash
openclaw gateway restart
```

如果当前 shell 里 `openclaw` 找不到 `node`，先补 PATH：

```bash
export PATH=/home/cyan/.nvm/versions/node/v24.14.0/bin:$PATH
```

---

### Step 5：验证 Telegram channel 状态

执行：

```bash
openclaw channels status --probe --json
```

理想结果：

- `configured: true`
- `running: true`
- `probe.ok: true`

---

### Step 6：私聊 Bot 触发首次配对

在 Telegram 私聊 bot 发一条消息。

如果你配置的是：

```json
"dmPolicy": "pairing"
```

那么第一次不会直接聊天，而会进入 pairing 流程。

---

### Step 7：批准 pairing

查看待批准 pairing：

```bash
openclaw pairing list telegram
```

批准 pairing：

```bash
openclaw pairing approve telegram <CODE>
```

批准完成后，再给 bot 发消息，它就会正常回复。

---

## 常见问题

### Q1：Telegram API 不通怎么办？

先测试：

```bash
curl -v https://api.telegram.org
```

如果能通，通常会返回：

```text
HTTP/2 302
location: https://core.telegram.org/bots
```

如果不通，说明问题在网络层，不是 token 或 OpenClaw 配错。

优先检查：

- 是否需要代理
- WSL 能否访问代理
- Windows 防火墙是否放行端口

---

### Q2：WSL 怎么使用 Windows 上的 Clash？

推荐按这个顺序排查。

#### 先试 `127.0.0.1:7897`

如果你希望 WSL 直接使用 `127.0.0.1:7897`，需要先在 Clash 设置里打开“局域网连接”。

先在 Windows PowerShell 检查 Clash 是否对外监听：

```powershell
netstat -ano | findstr :7897
```

如果结果是：

```text
TCP    127.0.0.1:7897    ...
```

通常说明还没放开。

如果结果是：

```text
TCP    0.0.0.0:7897      ...
TCP    [::]:7897         ...
```

说明代理已对外监听。

这时先在 WSL 里测试：

```bash
curl -I -x http://127.0.0.1:7897 https://api.telegram.org
```

如果这一步通了，就优先使用：

```env
TELEGRAM_PROXY=http://127.0.0.1:7897
```

#### `127.0.0.1` 不通，再试默认网关地址

如果 `127.0.0.1:7897` 仍然不通，再看 WSL 默认网关：

```bash
ip route
```

例如：

```text
default via 172.28.48.1 dev eth0
```

那么 WSL 里再测试：

```bash
curl -I -x http://172.28.48.1:7897 https://api.telegram.org
```

如果这一步成功，再把 `.env` 改成：

```env
TELEGRAM_PROXY=http://172.28.48.1:7897
```

#### 改完代理后要重启 Gateway

```bash
openclaw gateway restart
```

---

### Q3：`probe.ok` 失败怎么办？

优先检查：

- token 是否正确
- `~/.openclaw/.env` 是否存在且内容正确
- 改完 `.env` 后是否重启过 Gateway
- `proxy` 是否可达

---

### Q4：`probe.ok: true`，但 bot 不回消息怎么办？

优先检查：

- 是否还没完成 pairing
- 群里是否需要 mention
- 群策略是否太保守

---

### Q5：日志里一直出现 `deleteWebhook failed` 怎么办？

这通常说明：

- Telegram API 链路不稳定
- 代理能用，但不够稳定
- WSL 到 Windows 代理的连接偶发超时

优先检查：

- 代理是否稳定
- 代理地址是否正确
- Windows 防火墙是否对该端口有限制

---

## 问题速查表

| 现象 | 常见原因 | 处理方式 |
|---|---|---|
| bot 完全没反应 | Telegram API 不通 | 看 [Q1](#q1telegram-api-不通怎么办) |
| `127.0.0.1:7897` 不通 | Clash 未正确开放给 WSL | 看 [Q2](#q2wsl-怎么使用-windows-上的-clash) |
| `probe.ok` 为 `false` | token、代理或网络问题 | 看 [Q3](#q3probeok-失败怎么办) |
| 私聊消息进来了但不聊天 | 还没完成 pairing | 看 [Step 7](#step-7批准-pairing) |
| 群里不触发 | 需要 mention 或群权限未放开 | 看 [Q4](#q4probeok-true但-bot-不回消息怎么办) |
| 日志持续刷 webhook 错误 | 代理链路不稳定 | 看 [Q5](#q5日志里一直出现-deletewebhook-failed-怎么办) |

---

## 推荐最小配置

### `~/.openclaw/.env`

```env
TELEGRAM_BOT_TOKEN=你的_TELEGRAM_BOT_TOKEN
TELEGRAM_PROXY=http://127.0.0.1:7897
```

如果 `127.0.0.1:7897` 不通，再改成 WSL 实测可用的默认网关地址。

### `~/.openclaw/openclaw.json`

```json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "${TELEGRAM_BOT_TOKEN}",
      "proxy": "${TELEGRAM_PROXY}",
      "dmPolicy": "pairing",
      "groupPolicy": "allowlist",
      "groups": {
        "*": {
          "requireMention": true
        }
      },
      "replyToMode": "first",
      "streaming": "partial"
    }
  }
}
```

---

## 常用命令

### Windows 查看代理监听

```powershell
netstat -ano | findstr :7897
```

### WSL 查看默认网关

```bash
ip route
```

### WSL 测试 `127.0.0.1` 代理

```bash
curl -I -x http://127.0.0.1:7897 https://api.telegram.org
```

### WSL 测试默认网关代理

```bash
curl -I -x http://172.28.48.1:7897 https://api.telegram.org
```

### 重启 Gateway

```bash
openclaw gateway restart
```

### 查看 Telegram channel 状态

```bash
openclaw channels status --probe --json
```

### 查看最近日志

```bash
tail -n 100 /tmp/openclaw/openclaw-$(date +%F).log
```

### 查看 Telegram pairing

```bash
openclaw pairing list telegram
```

### 批准 Telegram pairing

```bash
openclaw pairing approve telegram <CODE>
```
