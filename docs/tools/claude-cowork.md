# Claude Cowork

Claude Cowork 出现在部分 Claude 相关工具或协作场景中。它是否能直接接入 MaoLao API，取决于当前版本是否允许填写自定义 API 地址。

## 下载地址

- Claude 官方下载页：[https://claude.com/download](https://claude.com/download)
- Claude 产品页：[https://claude.com](https://claude.com)
- 新手建议：如果你看到的是 Claude 官方客户端，一般不能直接填写 MaoLao API Key；如果你看到的是第三方 Cowork 工具，要先确认是否支持自定义 Provider。

## 能不能接入 MaoLao API

| 情况 | 结论 |
| --- | --- |
| 支持 `OpenAI Compatible` | 可以按 OpenAI 兼容方式接入 |
| 支持 Anthropic 自定义地址 | 可以按工具要求填写 MaoLao API 地址 |
| 只支持 Claude 官方账号登录 | 不能直接接入 MaoLao API |

## 配置步骤

1. 打开软件设置。
2. 找到模型、Provider 或 API 配置。
3. 如果有自定义 Provider，选择 OpenAI Compatible 或 Anthropic Compatible。
4. API Key 填 MaoLao API 控制台创建的 Key。
5. Base URL 按工具要求填写，OpenAI 兼容通常填 `https://api.maolaoapi.cc/v1`。
6. 保存后先发一句“请回复 ok”测试。

## 注意

如果软件没有 Base URL 输入框，就不要继续尝试填 MaoLao Key。那种情况通常只能用官方账号。
