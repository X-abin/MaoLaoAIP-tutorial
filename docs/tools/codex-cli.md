# Codex CLI

Codex CLI 接入时，建议优先使用支持 OpenAI Responses 或 OpenAI Chat Completions 的模型。

## 配置思路

Codex CLI 侧通常需要三类配置：

| 配置 | 内容 |
| --- | --- |
| API Key | MaoLao API Key |
| Base URL | `https://api.maolaoapi.cc/v1` |
| Model | 支持 Codex 场景的模型名 |

## 建议流程

1. 在 MaoLao API 创建 `codex-cli` 专用 Key。
2. 分组优先选择 Codex 相关分组或 `auto`。
3. 在 Codex CLI 配置中填入 Base URL 和 API Key。
4. 先用简单代码解释或文件总结任务测试。
5. 确认稳定后，再切换到更强模型。

## 成本控制

Codex CLI 经常会携带较多上下文。建议：

- 不要在超大项目里一开始就全量分析。
- 给测试 Key 设置额度上限。
- 根据任务复杂度切换模型，不必所有任务都用高倍率模型。

## 频繁 Reconnect / Reconnecting

如果 Codex 经常出现 `Reconnect`、`Reconnecting...`，常见原因是本机代理没有被 Codex 正确识别，或者代理端口、代理协议填写错了。

建议按下面流程处理：

1. 先打开你正在使用的代理软件，例如 Clash Verge、Clash、sing-box、v2rayN 等。
2. 找到当前实际监听的代理端口和协议。常见协议是 `http`，也可能是 mixed 端口。
3. 打开或创建 Codex 环境变量文件：

```text
~/.codex/.env
```

Windows 常见路径是：

```text
C:\Users\你的用户名\.codex\.env
```

4. 写入下面两行，把 `<HTTP 或 mixed 端口>` 换成你的真实端口：

```ini
HTTP_PROXY="http://127.0.0.1:<HTTP 或 mixed 端口>"
HTTPS_PROXY="http://127.0.0.1:<HTTP 或 mixed 端口>"
```

例如你的 mixed 端口是 `7897`，就写成：

```ini
HTTP_PROXY="http://127.0.0.1:7897"
HTTPS_PROXY="http://127.0.0.1:7897"
```

5. 保存文件后，完全退出并重新打开 Codex Desktop，再重新启动任务。

::: warning
不要直接照抄示例端口。必须以你本机代理软件里显示的实际端口为准，否则仍然会频繁断线。
:::

## 代理配置检查

如果配置后仍然 Reconnect，继续检查：

| 检查项 | 正确做法 |
| --- | --- |
| 代理软件 | 保持运行，不要只打开系统代理页面 |
| 协议 | 一般写 `http://`，即使代理软件显示 mixed 端口也通常这样写 |
| 地址 | 本机代理通常是 `127.0.0.1` |
| 端口 | 使用代理软件里正在监听的 HTTP 或 mixed 端口 |
| 文件位置 | 确认是 `~/.codex/.env`，不是项目里的 `.env` |
| 重启 | 保存后要完全重启 Codex Desktop |

如果你不确定端口，可以在代理软件的设置页里查找 `HTTP Port`、`Mixed Port`、`端口`、`监听端口` 等字段。
