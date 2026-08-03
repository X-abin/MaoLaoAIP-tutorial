# Chatbox

Chatbox 可以通过自定义 OpenAI API 接入 MaoLao API。

## 配置步骤

1. 打开 Chatbox 设置。
2. 选择模型提供商或 API 设置。
3. Provider 选择 OpenAI API 或自定义 OpenAI API。
4. API Key 填 MaoLao API Key。
5. API Host / Base URL 填 `https://api.maolaoapi.cc/v1`。
6. 模型名填你要使用的模型。

## 测试建议

保存后发送一句短问题，例如“请回复 ok”。如果能正常回复，再测试长文本或代码任务。

## 排查

- 没有响应：检查网络、Base URL 和 Key。
- 提示模型不存在：手动改成模型与价格页里的完整模型名。
- 消耗偏高：检查是否开启了很长的历史上下文。
