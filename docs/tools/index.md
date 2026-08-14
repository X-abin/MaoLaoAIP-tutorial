# 工具接入

这一组文档用于把 MaoLao API 接入常见客户端和开发工具。除非单页特别说明，默认使用 OpenAI 兼容配置：

| 配置项 | 推荐值 |
| --- | --- |
| Base URL | `https://api.maolaoapi.cc/v1` |
| 备用 Base URL | `https://api.maolaoapi.com/v1` |
| API Key | 控制台令牌页创建的 Key |
| 模型名 | 在模型与价格页复制完整模型名 |

接入前建议先完成三件事：

1. 在 [创建 API Key](/api-key) 页面创建独立 Key。
2. 在 [模型与价格](/models-pricing) 确认模型支持的端点类型和分组。
3. 第一次配置时优先使用 `auto` 分组，跑通后再按工具单独拆 Key。

## 小白图文配置顺序

如果你完全不知道从哪里开始，按这个顺序看就行：

1. 先看 [OpenAI Compatible](/tools/openai-compatible)，记住四个字段：Provider 名称、Base URL、API Key、Model。
2. 再选择你正在用的软件，例如 [Chatbox](/tools/chatbox)、[Cherry Studio](/tools/cherry-studio)、[Cursor](/tools/cursor)。
3. 对照页面里的图片，把红色编号位置逐个填完。
4. 保存后只发一句“请回复 ok”测试，成功后再开始正式使用。
5. 如果是 Codex 频繁断线，直接看 [Codex CLI](/tools/codex-cli) 里的代理配置图。

![MaoLao API 通用 Provider 配置示意图](/tutorial-shots/common-provider.svg)

## 软件下载地址速查

优先从官网或官方 GitHub 下载，不建议从第三方软件下载站下载。

| 软件 | 官方下载地址 | 新手建议 |
| --- | --- | --- |
| Cursor | [cursor.com/download](https://cursor.com/download) | Windows 用户选 Windows 版本即可 |
| Claude Code | [Claude Code 安装文档](https://code.claude.com/docs/en/setup) | 按官方文档安装命令行工具 |
| Codex CLI | [Codex CLI 官方文档](https://developers.openai.com/codex/cli/) / [GitHub](https://github.com/openai/codex) | 先看官方文档，再按系统安装 |
| Cherry Studio | [GitHub Releases](https://github.com/CherryHQ/cherry-studio/releases) | 下载最新稳定版 |
| Chatbox | [chatboxai.app](https://chatboxai.app/en) | 官网会提供 Windows、macOS、Linux 和移动端 |
| Open WebUI | [安装文档](https://docs.openwebui.com/getting-started/) / [GitHub](https://github.com/open-webui/open-webui) | 适合 Docker 或服务器部署 |
| CodeBuddy | [codebuddy.ai/ide](https://www.codebuddy.ai/ide) | 下载 CodeBuddy IDE 或按官方文档安装插件 |
| Trae | [trae.ai/download](https://www.trae.ai/download) | 进入下载中心选择对应系统 |
| CC Switch | [官网](https://ccswitch.io/en/) / [GitHub Releases](https://github.com/farion1231/cc-switch/releases) | 只从官网或官方 GitHub 下载 |

## 快速判断用哪个教程

| 你要接入的工具 | 看哪一页 |
| --- | --- |
| 通用 OpenAI 接口、自写代码 | [OpenAI Compatible](/tools/openai-compatible) |
| Cursor | [Cursor](/tools/cursor) |
| Claude Code | [Claude Code](/tools/claude-code) |
| Codex CLI | [Codex CLI](/tools/codex-cli) |
| Cherry Studio | [Cherry Studio](/tools/cherry-studio) |
| Chatbox | [Chatbox](/tools/chatbox) |
| Open WebUI | [Open WebUI](/tools/open-webui) |
| CodeBuddy | [CodeBuddy](/tools/codebuddy) |
| Trae | [Trae](/tools/trae) |
| CC Switch | [CC Switch](/tools/cc-switch) |
| Hermes / OpenClaw 遇到 403 | [Hermes / OpenClaw 403 代理](/tools/hermes-openclaw-403) |
| LangChain、OpenAI SDK、脚本开发 | [LangChain / SDK](/tools/langchain-sdk) |

## 通用排查顺序

如果接入失败，先按这个顺序查：

1. Base URL 是否带 `/v1`。
2. API Key 是否来自 MaoLao API 控制台，复制时没有空格。
3. 模型名是否完整一致。
4. 当前 Key 的分组是否支持该模型。
5. 客户端选择的是 OpenAI、Anthropic 还是其他接口格式。
