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
