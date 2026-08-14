# Codex CLI

Codex CLI 适合在本地项目里做代码阅读、修改、测试和自动化任务。接入 MaoLao API 时，重点是把 API Key、Base URL、模型名和本机网络代理配置正确。

## 准备工作

1. 在 MaoLao API 控制台创建 `codex-cli` 专用 Key。
2. 在模型与价格页选择支持代码任务的模型。
3. 确认本机网络可以访问 MaoLao API。
4. 如果你使用代理软件，先确认代理软件正在运行。

## 第 1 步：选择模型和分组

Codex CLI 往往会携带较多项目上下文，所以建议先用稳定、成本可控的模型测试，再切换到更强模型。

| 配置项 | 建议 |
| --- | --- |
| Key | 单独创建 `codex-cli` 专用 Key |
| 分组 | 优先选择 Codex 相关分组或 `auto` |
| 模型 | 选择支持代码、长上下文或 Codex 场景的模型 |
| 额度 | 给测试 Key 设置合理上限 |

## 第 2 步：填写 API 配置

根据你使用的 Codex CLI 版本，把下面三项填入对应位置。

![MaoLao API 通用 Provider 配置示意图](/tutorial-shots/common-provider.svg)

<div class="ml-field-table">
  <div class="ml-field-row">
    <div>API Key</div>
    <div>MaoLao API 控制台创建的 Key。</div>
    <div>不要写进公开仓库。</div>
  </div>
  <div class="ml-field-row">
    <div>Base URL</div>
    <div><code>https://api.maolaoapi.cc/v1</code></div>
    <div>备用地址为 <code>https://api.maolaoapi.com/v1</code>。</div>
  </div>
  <div class="ml-field-row">
    <div>Model</div>
    <div>填写完整模型名。</div>
    <div>不要只写简称。</div>
  </div>
</div>

## 第 3 步：用小项目测试

第一次测试建议选择一个很小的目录：

1. 让 Codex 解释一个函数。
2. 让 Codex 修改一个简单文案或注释。
3. 让 Codex 运行一次轻量测试。
4. 确认没有频繁断开、认证失败或模型不可用后，再用于正式项目。

## 第 4 步：处理频繁 Reconnect / Reconnecting

如果 Codex 经常出现 `Reconnect`、`Reconnecting...`，常见原因是本机代理没有被 Codex 正确识别，或者代理端口、代理协议填写错了。

![Codex Reconnect 代理配置示意图](/tutorial-shots/codex-proxy-env.svg)

建议按下面流程处理：

1. 打开你正在使用的代理软件，例如 Clash Verge、Clash、sing-box、v2rayN 等。
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

## 第 5 步：代理配置检查

如果配置后仍然 Reconnect，继续检查：

| 检查项 | 正确做法 |
| --- | --- |
| 代理软件 | 保持运行，不要只打开系统代理页面 |
| 协议 | 一般写 `http://`，即使代理软件显示 mixed 端口也通常这样写 |
| 地址 | 本机代理通常是 `127.0.0.1` |
| 端口 | 使用代理软件里正在监听的 HTTP 或 mixed 端口 |
| 文件位置 | 确认是 `~/.codex/.env`，不是项目里的 `.env` |
| 重启 | 保存后要完全重启 Codex Desktop |

如果你不确定端口，可以在代理软件设置页查找 `HTTP Port`、`Mixed Port`、`端口`、`监听端口` 等字段。

## 使用建议

- 不要在超大项目里一开始就全量分析。
- 测试 Key 设置额度上限，避免误操作带来高消耗。
- 根据任务复杂度切换模型，不是所有任务都需要高倍率模型。
- 修改重要文件前，先确认项目有版本管理或备份。
