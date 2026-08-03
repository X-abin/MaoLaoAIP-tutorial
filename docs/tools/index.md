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
