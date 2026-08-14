# OpenCode

OpenCode 是偏命令行或代码智能体形态的工具。它能否接入 MaoLao API，重点看是否支持 OpenAI 兼容环境变量或自定义 Provider。

## 下载地址

- 官方网站：[https://opencode.ai](https://opencode.ai)
- 官方 GitHub：[https://github.com/sst/opencode](https://github.com/sst/opencode)
- 新手建议：先按官网安装，能正常启动后再改模型服务配置。

## 配置思路

OpenCode 常见配置方式有两种：

| 方式 | 适合情况 |
| --- | --- |
| 软件内 Provider 设置 | 有图形界面或配置页 |
| 环境变量 / 配置文件 | 命令行工具或项目级配置 |

## 接入步骤

1. 创建 `opencode` 专用 MaoLao API Key。
2. 找到 OpenCode 的 Provider 或环境变量配置。
3. Provider 类型选择 OpenAI Compatible。
4. Base URL 填 `https://api.maolaoapi.cc/v1`。
5. API Key 填 MaoLao API Key。
6. 模型名填完整模型名。
7. 用一个小项目测试解释代码。

## 注意

如果你的 OpenCode 版本只支持官方模型服务，就不能直接接入 MaoLao API，需要换支持自定义 Provider 的版本或接入方式。
