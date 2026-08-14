# Zed Editor

Zed Editor 是一款现代代码编辑器，支持 AI 相关能力。接入 MaoLao API 前，需要确认当前版本是否支持自定义 OpenAI 兼容 Provider。

## 下载地址

- 官方下载页：[https://zed.dev/download](https://zed.dev/download)
- 官方文档：[https://zed.dev/docs](https://zed.dev/docs)
- 新手建议：先安装 Zed，再在设置中搜索 AI、Assistant、Provider 或 Model。

## 配置步骤

1. 打开 Zed 设置。
2. 找到 AI 或 Assistant 配置。
3. 如果支持自定义 Provider，选择 OpenAI Compatible。
4. Base URL 填 `https://api.maolaoapi.cc/v1`。
5. API Key 填 MaoLao API Key。
6. 模型名填完整名称。
7. 保存后用小文件测试代码解释。

## 常见问题

| 现象 | 处理方法 |
| --- | --- |
| 找不到自定义 Provider | 当前版本可能不支持，先查官方 AI 文档 |
| 认证失败 | 重新复制 MaoLao API Key |
| 模型不可用 | 检查模型名和 Key 分组 |
