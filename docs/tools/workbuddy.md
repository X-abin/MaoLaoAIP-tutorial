# WorkBuddy

WorkBuddy 是办公或编程辅助类工具。不同版本的接入能力可能不同，配置前先确认是否支持自定义模型服务。

## 下载地址

- 官方入口：[https://copilot.tencent.com/work/](https://copilot.tencent.com/work/)
- 新手建议：如果你使用的是企业版或团队版，先确认管理员是否允许自定义 API。

## 能不能接入 MaoLao API

| 情况 | 结论 |
| --- | --- |
| 支持 OpenAI Compatible Provider | 可以接入 |
| 支持自定义 Base URL 和 API Key | 通常可以接入 |
| 只支持官方账号或企业账号 | 不能直接接入 |

## 配置步骤

1. 打开 WorkBuddy 设置。
2. 找到 AI 服务、模型服务或 Provider。
3. 新增自定义 OpenAI 兼容服务。
4. Base URL 填 `https://api.maolaoapi.cc/v1`。
5. API Key 填 MaoLao API Key。
6. 保存后先做短文本测试。

## 注意

企业工具可能会限制自定义模型服务。如果设置页没有 API 地址字段，就不要强行填 Key。
