# CodeBuddy

CodeBuddy 这类编程辅助工具通常使用 OpenAI 兼容配置接入。

## 配置步骤

1. 打开 CodeBuddy 的模型或 Provider 设置。
2. 选择 OpenAI Compatible / Custom Provider。
3. Base URL 填 `https://api.maolaoapi.cc/v1`。
4. API Key 填 MaoLao API Key。
5. 模型名填写适合代码任务的模型。

## 推荐模型选择

优先选择模型描述里包含代码、编程、Codex、Claude Sonnet 等关键词的模型。正式批量使用前，先在小项目里测试补全和代码解释效果。

## 排查

如果工具只支持官方 OpenAI 地址，无法自定义 Base URL，就不能直接使用 MaoLao API，需要换支持自定义 Provider 的版本或工具。
