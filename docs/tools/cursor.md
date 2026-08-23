# Cursor

Cursor 是 AI 代码编辑器，适合做代码解释、项目问答、代码生成和 Agent 编程。本页根据这台 Windows 电脑上已登录的 Cursor 真实界面编写。

教程截图只展示 Cursor 设置界面和 MaoLao API Base URL，没有填写或公开任何真实 API Key。

## 下载地址

- 官方下载页：[https://cursor.com/download](https://cursor.com/download)
- 官方自带 API Key 文档：[https://cursor.com/help/models-and-usage/api-keys](https://cursor.com/help/models-and-usage/api-keys)
- 本机启动路径：`E:\maolaoAPI接入软件\cursor\Cursor.exe`
- 新手建议：Windows 用户优先从官网下载；如果电脑里已有 Cursor，可以直接从桌面图标启动。

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

如果看到下面这个页面，说明 Cursor 还没有登录。先点击 `Log In`，按浏览器提示完成账号登录。

![Cursor 本机登录页真实截图](/tutorial-shots/cursor-live-login.png)

登录成功后会进入 Cursor 主界面。左侧可以看到 `New Chat`、`Search`、`Automations`、`Customize` 等入口。

![Cursor 登录后主界面真实截图](/tutorial-shots/cursor-live-signed-in.png)

::: warning
不要把 MaoLao API Key 填在 Cursor 登录页。登录页只用于登录 Cursor 账号，API Key 要在后面的 Models 设置里填写。
:::

## 第 2 步：进入 Settings

登录后点击左下角账号区域旁边的齿轮图标，进入 Cursor 设置页。

![Cursor 设置页真实截图](/tutorial-shots/cursor-live-settings-menu.png)

进入设置后，左侧会显示这些菜单：

- `General`
- `Profile`
- `Appearance`
- `Plan & Usage`
- `Agents`
- `Cloud Agents`
- `Models`

接入 MaoLao API 要点击左侧的 `Models`。

## 第 3 步：打开 Models 页面

点击 `Models` 后，会看到模型管理页面。这里可以选择哪些模型出现在模型选择器中。

![Cursor Models 页面真实截图](/tutorial-shots/cursor-live-models.png)

这个页面上方是 Cursor 内置模型开关。接入 MaoLao API 时，不是在这里随便打开模型开关，而是继续向下找到 `API Keys`。

### 看到带锁模型怎么办

如果模型选择器里出现下面这种提示，意思是这个模型属于 Cursor 官方的高级模型，需要购买 Cursor 付费套餐才能使用。

![Cursor 高级模型需要升级套餐提示](/tutorial-shots/cursor-premium-model-locked.png)

这里要分清两件事：

| 你想使用的内容 | 是否需要买 Cursor 套餐 | 说明 |
| --- | --- | --- |
| Cursor 自带的带锁高级模型 | 通常需要 | 比如截图里的 `Cursor Grok 4.6 Medium`，提示 `Upgrade to unlock premium models` 就代表要升级 Cursor 套餐。 |
| MaoLao API Key 接入 | 不一定 | 这是在 Cursor 里填写自己的 `OpenAI API Key` 和 `Override OpenAI Base URL`，请求会走 MaoLao API。 |

::: tip 小白理解
带锁的是 Cursor 自己提供的模型服务；MaoLao API 是你自己填 Key 和接口地址的接入方式。测试 MaoLao API 时，不要选择带锁的 Cursor 高级模型，优先找 `OpenAI`、自定义 Key、或可以通过 `API Keys` 生效的聊天模型来测试。
:::

## 第 4 步：展开 API Keys

在 Models 页面向下看，找到 `API Keys`，点击左侧小箭头展开。

展开后可以看到：

- `OpenAI API Key`
- `Override OpenAI Base URL`
- `Anthropic API Key`
- `Google API Key`
- `Azure OpenAI`

![Cursor API Keys 区域真实截图](/tutorial-shots/cursor-live-api-keys-fields.png)

接入 MaoLao API 时，使用 `OpenAI API Key` 和 `Override OpenAI Base URL`。

## 第 5 步：填写 MaoLao API

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
    <div>先打开右侧开关，再把默认地址替换成 MaoLao API 地址。</div>
  </div>
  <div class="ml-field-row">
    <div>备用 Base URL</div>
    <div><code>https://api.maolaoapi.com/v1</code></div>
    <div>主地址不稳定时再切换。</div>
  </div>
  <div class="ml-field-row">
    <div>Model</div>
    <div>完整模型 ID</div>
    <div>从 MaoLao API 控制台复制，不要只写简称。</div>
  </div>
</div>

下图是本机把 `Override OpenAI Base URL` 打开，并填写 MaoLao API 地址后的真实效果。API Key 输入框保持空白，避免泄露密钥。

![Cursor MaoLao Base URL 真实配置截图](/tutorial-shots/cursor-live-maolao-base-url.png)

::: warning
Cursor 默认可能显示 `https://api.openai.com/v1`。接入 MaoLao API 时，需要把它替换成 `https://api.maolaoapi.cc/v1`，不要保留 OpenAI 官方地址。
:::

## 第 6 步：确认已自动保存

Cursor 这个设置页面通常没有单独的“保存”按钮。它更像手机设置页：你把内容填进去后，Cursor 会自动保存。

填完 `OpenAI API Key` 和 `Override OpenAI Base URL` 后，按下面方式确认即可：

1. 点击输入框外面的空白区域，让输入框失去焦点。
2. 切到左侧其他设置项，例如 `General`。
3. 再回到 `Models → API Keys`。
4. 如果 `Override OpenAI Base URL` 仍然是开启状态，并且地址仍显示 `https://api.maolaoapi.cc/v1`，就说明已经保存。

::: tip
如果切回来发现地址变回 `https://api.openai.com/v1`，说明没有保存成功。重新打开 `Override OpenAI Base URL`，再填写 MaoLao API 地址。
:::

::: warning
不要在页面上反复找 `Save`、`保存`、`Apply` 按钮。这个版本的 Cursor 没有这个按钮，只要切走再回来内容还在，就可以继续下一步测试。
:::

## 第 7 步：测试

确认保存后不要直接打开大项目测试，先做最小验证：

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
| 找不到 Models | 在设置左侧点击 `Models`，或在设置搜索框搜索 `Models` |
| 找不到 API Keys | 在 Models 页面向下滚动，找到 `API Keys` 并展开 |
| 找不到 Base URL | 打开 `Override OpenAI Base URL` 右侧开关 |
| 看到 `Upgrade to unlock premium models` | 这是 Cursor 官方高级模型需要购买套餐，不代表 MaoLao API Key 没配置成功。测试 MaoLao API 时不要选带锁模型。 |
| 找不到保存按钮 | Cursor 设置会自动保存。填完后点击空白处，切到其他设置页再回来确认内容还在。 |
| 提示认证失败 | 重新复制 MaoLao API Key，确认没有空格、Key 没有停用 |
| 提示模型不可用 | 从 MaoLao API 控制台重新复制完整模型 ID，并确认 Key 分组支持 |
| Tab 补全没有变化 | 正常现象，Cursor 自带 API Key 主要影响聊天模型 |

## 配置检查清单

<div class="ml-checklist">

- 已从 Windows 桌面或开始菜单启动 Cursor。
- 已登录 Cursor 账号。
- 已进入设置页，并点击左侧 `Models`。
- 已展开 `API Keys`。
- API Key 填写的是 MaoLao API 控制台创建的 Key。
- 已打开 `Override OpenAI Base URL`。
- Base URL 是 `https://api.maolaoapi.cc/v1`。
- 切换设置页面再回来后，Base URL 仍然保持 MaoLao API 地址。
- 没有选择带锁的 Cursor 高级模型来测试 MaoLao API。
- 模型 ID 来自 MaoLao API 控制台，且没有手动缩写。
- 已用 Cursor Chat / Agent 发送短消息测试。

</div>
