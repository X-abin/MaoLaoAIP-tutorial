# CodeBuddy

CodeBuddy 是腾讯推出的 AI 代码编辑器，适合做代码解释、补全、重构、项目问答和 Agent 编程任务。本教程按本机 Windows 版 CodeBuddy `4.10.4` 的真实启动流程编写。

## 下载地址

- 官方下载页：[https://www.codebuddy.ai/ide](https://www.codebuddy.ai/ide)
- 备用入口：[https://copilot.tencent.com/ide/](https://copilot.tencent.com/ide/)
- 新手建议：如果 `codebuddy.ai` 打不开，先试备用入口；两个入口都是 CodeBuddy IDE 页面。

## 准备工作

1. 在 MaoLao API 控制台创建 API Key。
2. 在“模型与价格”页复制一个适合代码任务的完整模型 ID。
3. 准备一个 CodeBuddy 账号。当前版本必须先登录，未登录时看不到自定义模型配置入口。

## 第 1 步：启动 CodeBuddy

在 Windows 桌面或开始菜单打开 CodeBuddy。本机安装路径示例：

```text
E:\maolaoAPI接入软件\CodeBuddy\CodeBuddy.exe
```

第一次打开时会看到“导入配置”页面，可以选择从 VS Code / Cursor 导入，也可以点“跳过”。

![CodeBuddy 导入配置真实截图](/tutorial-shots/codebuddy-live-home.png)

跳过后会进入登录前页面。

![CodeBuddy 登录前页面真实截图](/tutorial-shots/codebuddy-live-after-skip.png)

## 第 2 步：登录 CodeBuddy

点击“登录”。如果 CodeBuddy 没有自动打开浏览器，可以点击页面里的“在浏览器中打开”。

![CodeBuddy 登录中真实截图](/tutorial-shots/codebuddy-live-login.png)

浏览器中会打开 CodeBuddy 登录页。按你的账号情况选择 Google、GitHub 或 X 登录。

![CodeBuddy 浏览器登录页真实截图](/tutorial-shots/codebuddy-live-browser-login-cropped.png)

> 说明：我没有代登录你的账号，所以没有继续进入账号内的模型配置页截图。当前本机可确认的是：未登录状态只能停在登录页，登录后才会出现自定义模型相关入口。

## 第 3 步：进入自定义模型入口

登录成功后，回到 CodeBuddy IDE，在左侧 CodeBuddy / Chat 面板或设置页中找到模型相关入口。不同版本可能显示为：

- `Models`
- `Model Settings`
- `Custom Model`
- `自定义模型`
- `添加模型`

本机 CodeBuddy 自带配置中已经包含 `Custom` 提供商，并支持下面这些字段：

- `Provider`
- `Base URL`
- `Model Name`
- `API Key`

因此接入 MaoLao API 时，优先选择 `Custom`，不要选择只读的官方 `OpenAI` 提供商。

## 第 4 步：填写 MaoLao API 信息

添加自定义模型时按下面填写：

<div class="ml-field-table">
  <div class="ml-field-row">
    <div>字段</div>
    <div>填写内容</div>
    <div>说明</div>
  </div>
  <div class="ml-field-row">
    <div>Provider</div>
    <div><code>Custom</code></div>
    <div>选择可编辑 Base URL 的自定义提供商。</div>
  </div>
  <div class="ml-field-row">
    <div>Base URL</div>
    <div><code>https://api.maolaoapi.cc/v1/chat/completions</code></div>
    <div>CodeBuddy 的自定义模型字段示例是完整 Chat Completions 地址，因此这里填完整路径。</div>
  </div>
  <div class="ml-field-row">
    <div>Model Name</div>
    <div>完整模型 ID</div>
    <div>从 MaoLao API 控制台复制，必须完全一致。</div>
  </div>
  <div class="ml-field-row">
    <div>API Key</div>
    <div>你的 MaoLao API Key</div>
    <div>不要发给别人，不要上传 GitHub，不要截图明文展示。</div>
  </div>
</div>

如果界面里有能力开关，可以先这样选择：

| 选项 | 建议 |
| --- | --- |
| Tool / Function Calling | 模型支持工具调用时开启，不确定先关闭 |
| Vision / Images | 普通代码模型先关闭 |
| Reasoning | 推理模型开启，普通模型可关闭 |

保存后，在模型列表中选择刚添加的 MaoLao API 模型。

## 第 5 步：测试代码能力

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

| 现象 | 处理方法 |
| --- | --- |
| 只看到登录页 | 先完成 CodeBuddy 账号登录，未登录状态看不到自定义模型入口。 |
| 登录后没有 Base URL 输入框 | 不要选官方 OpenAI，改找 `Custom` / `自定义模型` 入口。 |
| 提示模型不存在 | 从 MaoLao API 控制台重新复制完整模型 ID。 |
| 提示鉴权失败 | 重新复制 API Key，确认前后没有空格。 |
| 代码回答不稳定 | 换更适合代码任务的模型，并减少一次性传入的文件数量。 |
| 额度消耗异常 | 检查是否开启自动补全、后台索引或连续重试。 |
