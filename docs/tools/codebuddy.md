# CodeBuddy

CodeBuddy 这类编程辅助工具通常通过 OpenAI 兼容配置接入 MaoLao API。配置完成后，可以用于代码解释、补全、重构和问答。

## 下载地址

- 官方下载页：[https://www.codebuddy.ai/ide](https://www.codebuddy.ai/ide)
- 官方安装文档：[https://www.codebuddy.ai/docs/ide/Getting-Started/Installation](https://www.codebuddy.ai/docs/ide/Getting-Started/Installation)
- 新手建议：优先下载 CodeBuddy IDE；如果你只想在 VS Code 或 JetBrains 里用，再按官方文档安装插件。

## 准备工作

1. 创建一个 `codebuddy` 专用 MaoLao API Key。
2. 复制一个适合代码任务的完整模型名。
3. 打开 CodeBuddy 的模型或 Provider 设置。

## 第 1 步：找到自定义 Provider

在 CodeBuddy 设置中寻找类似入口：

- `AI Provider`
- `Model Provider`
- `OpenAI Compatible`
- `Custom Provider`
- `自定义模型服务`

如果只看到官方账号登录，而看不到 Base URL 输入框，说明当前入口可能不支持 MaoLao API，需要切换到支持自定义 Provider 的版本或配置页面。

## 第 2 步：填写 MaoLao API 信息

大多数 CodeBuddy 版本的字段位置会和下面这张通用图类似。找不到完全一样的名称时，看字段含义即可。

![MaoLao API 通用 Provider 配置示意图](/tutorial-shots/common-provider.svg)

<div class="ml-field-table">
  <div class="ml-field-row">
    <div>Provider 名称</div>
    <div><code>MaoLao API</code></div>
    <div>便于后续在模型列表中识别。</div>
  </div>
  <div class="ml-field-row">
    <div>Base URL</div>
    <div><code>https://api.maolaoapi.cc/v1</code></div>
    <div>不要漏掉 <code>/v1</code>。</div>
  </div>
  <div class="ml-field-row">
    <div>API Key</div>
    <div>填写 CodeBuddy 专用 Key。</div>
    <div>建议不要和其他软件共用。</div>
  </div>
  <div class="ml-field-row">
    <div>Model</div>
    <div>填写完整模型名。</div>
    <div>代码任务优先选择编程能力强的模型。</div>
  </div>
</div>

## 第 3 步：测试代码能力

新手建议用三个小测试判断是否配置成功：

1. 选中一小段代码，让它解释作用。
2. 让它给一个函数补充注释。
3. 让它指出一段明显错误代码的问题。

这三项都正常后，再开始做项目级重构或大文件分析。

## 推荐模型选择

| 场景 | 建议 |
| --- | --- |
| 快速解释代码 | 选择速度快、价格低的模型 |
| 重构复杂函数 | 选择代码能力强的模型 |
| 大文件分析 | 选择上下文更长的模型 |
| 临时测试 | 使用额度较低的测试 Key |

## 常见问题

- 无法填写 Base URL：当前 CodeBuddy 入口不支持自定义服务。
- 模型不出现在列表里：尝试手动添加模型名。
- 代码回答不稳定：先换更适合代码任务的模型，再检查上下文是否过长。
- 额度消耗异常：检查是否开启自动补全、后台索引或连续重试。
