# Claude Code

Claude Code 通常更适合使用支持 Anthropic 端点的模型和分组。接入前先在模型与价格页确认目标模型支持 `anthropic`。

## 配置建议

| 项目 | 建议 |
| --- | --- |
| Key | 为 Claude Code 单独创建 |
| 分组 | 优先选择适配 Claude Code 的分组 |
| Base URL | 按客户端要求填写 MaoLao API 地址 |
| 模型 | 选择支持 `anthropic` 的 Claude 或兼容模型 |

## 使用步骤

1. 在控制台创建一个 Claude Code 专用 Key。
2. 选择适合 Claude Code 的分组，例如页面中标注仅 Claude Code 或不限客户端的分组。
3. 在 Claude Code 的配置里填入 API 地址和 Key。
4. 设置模型名，保存后先发一个简单问题测试。

## 注意事项

- Claude Code 如果走 Anthropic 原生格式，端点路径通常对应 `/v1/messages`。
- 某些 OpenAI 端点无法完整利用 Anthropic 缓存能力。
- 长上下文任务消耗会明显增加，建议给 Key 设置额度上限。
