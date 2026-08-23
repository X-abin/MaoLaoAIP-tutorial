# Cursor

Cursor 是 AI 代码编辑器，适合做代码解释、项目问答、代码生成和 Agent 编程。本页根据这台 Windows 电脑上已安装的 Cursor 编写，并加入本机真实启动截图。

::: warning
本机 Cursor 当前停在登录页，登录后才能进入 `Cursor Settings → Models` 配置模型。下面的配置步骤按 Cursor 官方 BYOK 文档和 MaoLao API 接入规则整理；登录后的模型设置截图需要在账号登录完成后继续补充。
:::

## 下载地址

- 官方下载页：[https://cursor.com/download](https://cursor.com/download)
- 官方自带 API Key 文档：[https://cursor.com/help/models-and-usage/api-keys](https://cursor.com/help/models-and-usage/api-keys)
- 本机启动路径：`E:\maolaoAPI接入软件\cursor\Cursor.exe`
- 新手建议：Windows 用户优先从官网下载安装包；如果电脑里已有 Cursor，可以直接从桌面图标启动。

## 准备工作

开始前先准备好三样东西：

| 需要准备 | 从哪里拿 |
| --- | --- |
| Cursor 账号 | Cursor 登录页 |
| MaoLao API Key | MaoLao API 控制台的 API Key 页面 |
| 完整模型 ID | MaoLao API 控制台中当前可用的模型名称 |

::: tip
Cursor 官方文档说明，自带 API Key 主要用于聊天模型；Tab 补全仍会使用 Cursor 内置模型。也就是说，配置 MaoLao API 后，重点测试 Cursor Chat / Agent，不要用 Tab 补全判断是否接入成功。
:::

## 第 1 步：启动 Cursor 并登录

在 Windows 桌面找到 `Cursor` 图标，双击打开。本机解析到的程序路径是：

```text
E:\maolaoAPI接入软件\cursor\Cursor.exe
```

打开后，如果看到下面这个页面，说明 Cursor 还没有登录。

![Cursor 本机登录页真实截图](/tutorial-shots/cursor-live-login.png)

点击 `Log In`，按浏览器中的提示完成账号登录。登录完成后回到 Cursor。

::: warning
不要把 MaoLao API Key 填在 Cursor 登录页。登录页只用于登录 Cursor 账号，API Key 要在后面的 Models 设置里填写。
:::

## 第 2 步：进入 Models 设置

登录后按下面路径进入模型设置：

1. 打开 Cursor。
2. 点击右上角或左下角的设置入口。
3. 进入 `Cursor Settings`。
4. 打开 `Models` 页面。

也可以在 Cursor 里按快捷键打开命令面板，搜索：

```text
Cursor Settings
```

再进入 `Models`。

## 第 3 步：找到 OpenAI API Key

在 `Models` 页面里找到 `API Keys` 或 `OpenAI API Key` 区域。Cursor 官方文档的自带 Key 配置流程是：

1. 打开 `Cursor Settings → Models`。
2. 找到要使用的 Provider。
3. 粘贴 API Key。
4. 点击保存。

接入 MaoLao API 时，优先使用 `OpenAI` 相关区域，因为 MaoLao API 提供 OpenAI 兼容接口。

## 第 4 步：填写 MaoLao API

按下面填写：

<div class="ml-field-table">
  <div class="ml-field-row">
    <div>位置</div>
    <div>填写内容</div>
    <div>新手提示</div>
  </div>
  <div class="ml-field-row">
    <div>OpenAI API Key</div>
    <div>你的 MaoLao API Key</div>
    <div>从 MaoLao API 控制台复制，前后不要带空格。</div>
  </div>
  <div class="ml-field-row">
    <div>Override OpenAI Base URL</div>
    <div><code>https://api.maolaoapi.cc/v1</code></div>
    <div>如果主地址不稳定，再换 <code>https://api.maolaoapi.com/v1</code>。</div>
  </div>
  <div class="ml-field-row">
    <div>Model</div>
    <div>完整模型 ID</div>
    <div>从 MaoLao API 控制台复制，不要只写简称。</div>
  </div>
</div>

如果你的 Cursor 版本没有显示 `Override OpenAI Base URL`，先检查是否需要展开 `API Keys` 区域，或升级 Cursor 到新版。

## 第 5 步：保存并测试

保存后不要直接打开大项目测试，先做最小验证：

1. 打开一个很小的项目或新建空文件。
2. 按 `Ctrl + L` 打开 Cursor Chat。
3. 选择刚刚配置的模型。
4. 输入：

```text
请只回复：Cursor 已连接 MaoLao API
```

能正常回复后，再测试代码解释、重构和 Agent。

## 哪些功能会走 MaoLao API

| Cursor 功能 | 是否适合用 MaoLao API 测试 |
| --- | --- |
| Chat / Ask | 适合 |
| Agent 模式 | 适合 |
| 项目问答 | 适合 |
| Tab 自动补全 | 不适合用来判断，通常仍走 Cursor 内置模型 |
| 内联编辑 | 不同版本行为可能不同，优先以 Chat / Agent 测试为准 |

## 常见问题

| 现象 | 处理方法 |
| --- | --- |
| 打开后只有登录页 | 先登录 Cursor 账号，再进入 `Cursor Settings → Models` |
| 找不到 Models | 在设置里搜索 `Models`，或用命令面板搜索 `Cursor Settings` |
| 找不到 Base URL | 展开 `API Keys`，查找 `Override OpenAI Base URL`，必要时升级 Cursor |
| 提示认证失败 | 重新复制 MaoLao API Key，确认没有空格、Key 没有停用 |
| 提示模型不可用 | 从 MaoLao API 控制台重新复制完整模型 ID，并确认 Key 分组支持 |
| Tab 补全没有变化 | 正常现象，Cursor 自带 API Key 主要影响聊天模型 |

## 配置检查清单

<div class="ml-checklist">

- 已从 Windows 桌面或开始菜单启动 Cursor。
- 已登录 Cursor 账号。
- 已进入 `Cursor Settings → Models`。
- 已找到 `OpenAI API Key` 或 `API Keys` 区域。
- API Key 填写的是 MaoLao API 控制台创建的 Key。
- 已开启或填写 `Override OpenAI Base URL`。
- Base URL 是 `https://api.maolaoapi.cc/v1`。
- 模型 ID 来自 MaoLao API 控制台，且没有手动缩写。
- 已用 Cursor Chat / Agent 发送短消息测试。

</div>
