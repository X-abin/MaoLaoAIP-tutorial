# OpenAI Compatible

OpenAI Compatible 是最通用的接入方式。只要工具支持自定义 OpenAI API 地址，通常都可以这样配置。

## 基础配置

| 字段 | 填写内容 |
| --- | --- |
| API Key | MaoLao API 控制台创建的 Key |
| Base URL | `https://api.maolaoapi.cc/v1` |
| 备用 Base URL | `https://api.maolaoapi.com/v1` |
| Chat Completions | `/chat/completions` |
| Responses | `/responses` |

## curl 测试

```bash
curl https://api.maolaoapi.cc/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.4-mini",
    "messages": [
      { "role": "user", "content": "你好，测试一下接口是否可用" }
    ]
  }'
```

## JavaScript fetch 示例

```js
const response = await fetch("https://api.maolaoapi.cc/v1/chat/completions", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.MAOLAO_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "gpt-5.4-mini",
    messages: [{ role: "user", content: "写一个一句话介绍" }],
  }),
});

console.log(await response.json());
```

## 常见问题

- 返回 `401`：Key 错误、Key 被禁用或没有加 `Bearer`。
- 返回模型不存在：模型名拼写错误，或 Key 分组不支持。
- 客户端无法保存：Base URL 不要只填域名，要包含 `/v1`。
