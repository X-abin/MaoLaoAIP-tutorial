# Cline

Cline 是 VS Code 里的 AI 编程助手扩展。它适合接入自定义模型服务，用 MaoLao API 做代码阅读、修改和项目任务。

## 下载地址

- 官方网站：[https://cline.bot](https://cline.bot)
- VS Code Marketplace：[https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev](https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev)
- 官方 GitHub：[https://github.com/cline/cline](https://github.com/cline/cline)

## 配置步骤

1. 在 VS Code 里安装 Cline 扩展。
2. 打开 Cline 设置。
3. Provider 选择 OpenAI Compatible 或自定义 OpenAI。
4. Base URL 填 `https://api.maolaoapi.cc/v1`。
5. API Key 填 MaoLao API Key。
6. Model 填完整模型名。
7. 新建一个小任务测试，例如解释当前文件。

## 使用建议

- 第一次不要让 Cline 直接扫描大项目。
- 给 Cline 单独创建 Key，方便查消耗。
- 如果自动修改文件，先确认项目有版本管理。
