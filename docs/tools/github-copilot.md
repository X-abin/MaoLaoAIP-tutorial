# GitHub Copilot

GitHub Copilot 是 GitHub 官方提供的编程助手服务。它通常通过 GitHub 账号订阅使用，不是普通的 OpenAI Compatible 客户端。

## 下载地址

- 官方快速开始：[https://docs.github.com/copilot/get-started/quickstart](https://docs.github.com/copilot/get-started/quickstart)
- VS Code 扩展：[https://marketplace.visualstudio.com/items?itemName=GitHub.copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- JetBrains 插件：[https://plugins.jetbrains.com/plugin/17718-github-copilot](https://plugins.jetbrains.com/plugin/17718-github-copilot)

## 能不能接入 MaoLao API

一般不能直接接入。GitHub Copilot 的模型服务由 GitHub 官方托管，普通用户无法把 Base URL 改成 MaoLao API。

## 推荐做法

如果你想用 MaoLao API 做代码辅助，建议选择下面这些支持自定义 Provider 的工具：

- [Cursor](/tools/cursor)
- [Cline](/tools/cline)
- [Zed Editor](/tools/zed-editor)
- [OpenCode](/tools/opencode)
- [Codex CLI](/tools/codex-cli)

## 注意

不要把 MaoLao API Key 填到 GitHub Copilot 的登录或授权页面。Copilot 需要的是 GitHub 账号授权，不是第三方 API Key。
