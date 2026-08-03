# CC Switch

CC Switch 适合在 Claude Code 相关配置中切换不同 API 地址、Key 和模型组合。

## 接入思路

1. 在 MaoLao API 为 CC Switch 单独创建 Key。
2. 在 CC Switch 中新增一个 MaoLao API 配置。
3. 填写 API 地址、Key、模型名。
4. 根据用途配置不同分组对应的 Key。
5. 在 Claude Code 或相关工具里切换使用。

## 推荐拆分

| 配置 | 用途 |
| --- | --- |
| 稳定分组 Key | 日常开发 |
| 低价分组 Key | 测试或低风险任务 |
| 高额度 Key | 长上下文项目 |
| 低额度 Key | 临时实验 |

## 注意

如果你用的是自动分流 API 域名，仍然建议保留备用配置，遇到网络或上游异常时快速切换。
