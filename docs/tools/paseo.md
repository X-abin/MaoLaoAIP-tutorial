# Paseo

Paseo 是一个桌面端 AI Agent 工作台，用来统一管理 Claude Code、Codex、OpenCode、Copilot 等本机 Provider。它不是普通聊天软件，也不是直接填写 `Base URL + API Key` 的 OpenAI Compatible 客户端。

本页截图来自这台 Windows 电脑上实际打开的 Paseo。教程不会填写或展示任何真实 API Key。

## 下载地址

- 官方网站：[https://paseo.sh](https://paseo.sh)
- 官方下载页：[https://paseo.sh/download](https://paseo.sh/download)
- 新手建议：先把你要用的底层工具配置好，例如 Codex CLI、Claude Code 或 OpenCode，再回到 Paseo 里查看 Provider 状态。

## 先看结论

如果你想让 Paseo 间接使用 MaoLao API，正确理解是：

1. MaoLao API Key 先配置到具体工具里，例如 [Codex CLI](/tools/codex-cli)、[Claude Code](/tools/claude-code) 或 [OpenCode](/tools/opencode)。
2. Paseo 打开后进入 `Providers` 页面。
3. Paseo 会识别这些本机工具是否可用，并显示对应模型。
4. 之后在 Paseo 里选择已可用的 Provider 和模型来创建工作区或运行 Agent。

::: warning
不要在 Paseo 首页到处找 MaoLao API Key 输入框。当前版本的 Paseo Provider 页面主要是管理本机 Agent Provider，不是直接配置 OpenAI 兼容接口。
:::

## 准备工作

开始前先准备好：

| 需要准备 | 说明 |
| --- | --- |
| Paseo 桌面软件 | 从官网下载安装，或从 Windows 桌面图标打开 |
| MaoLao API Key | 在 MaoLao API 控制台创建，建议单独命名为 `paseo-codex` 或 `paseo-test` |
| 底层工具 | 推荐先配置 Codex CLI；如果你用 Claude Code 或 OpenCode，也先按对应教程跑通 |
| 模型 ID | 从 MaoLao API 控制台复制完整模型名，不要自己缩写 |

::: tip
新手最稳的路线是：先按 [Codex CLI](/tools/codex-cli) 教程把 MaoLao API 跑通，再打开 Paseo 看 `Codex` Provider 是否可用。
:::

## 第 1 步：打开 Paseo

在 Windows 桌面找到 `Paseo` 图标，双击打开。进入首页后，中间会看到几个入口：

- `添加 project`
- `导入会话`
- `设置 providers`
- `配对设备`

![Paseo 首页真实截图](/tutorial-shots/paseo-live-home.png)

接入或检查模型时，点击中间的 `设置 providers`。

## 第 2 步：进入 Providers 页面

进入后会看到 `Providers` 页面。左侧导航栏当前选中的是 `Providers`，右侧上方是已经安装或可识别的 Provider。

![Paseo Providers 页面真实截图](/tutorial-shots/paseo-live-providers.png)

这个页面里要重点看三类状态：

| 状态 | 代表什么 | 新手怎么处理 |
| --- | --- | --- |
| 绿色圆点 + `可用` | 这个 Provider 已经能被 Paseo 使用 | 可以展开看模型列表 |
| 橙色圆点 + `未安装` | Paseo 找到了入口，但本机工具还没装好 | 先去安装对应工具，例如 Codex CLI 或 OpenCode |
| 灰色 + `已禁用` | 当前 Provider 被关闭 | 需要时打开右侧开关 |

截图里 `Claude` 显示可用，`Codex`、`Copilot`、`OpenCode`、`Pi` 显示未安装，`OMP` 显示已禁用。你电脑上的状态可能不一样，以实际页面为准。

## 第 3 步：先配置底层工具

Paseo 不是直接把请求发到 MaoLao API 的地方。你要先让底层工具自己能使用 MaoLao API。

常见选择：

| 你想在 Paseo 用什么 | 先看哪篇教程 | 说明 |
| --- | --- | --- |
| Codex | [Codex CLI](/tools/codex-cli) | 推荐新手优先走这条线，配置文件里可以写 MaoLao API 的 `base_url` 和环境变量 |
| Claude Code | [Claude Code](/tools/claude-code) | 先确认 Claude Code 安装和登录正常，再让 Paseo 读取 Claude Provider |
| OpenCode | [OpenCode](/tools/opencode) | 适合已经习惯命令行或项目 Agent 的用户 |

如果底层工具还没有安装好，Paseo 里通常会显示 `未安装`。这时不要在 Paseo 里反复刷新，先把对应工具安装并测试成功。

## 第 4 步：展开可用 Provider

点击可用 Provider 左侧的小箭头，或点击 Provider 这一行。下面截图是展开 `Claude` 后的真实界面。

![Paseo Claude Provider 模型列表真实截图](/tutorial-shots/paseo-live-claude-provider.png)

弹窗里可以看到：

- 顶部是 Provider 名称，例如 `Claude`。
- 搜索框用于搜索模型。
- 中间是已经发现的模型列表。
- 底部有 `添加 Model`、`诊断`、`刷新`。

::: tip
如果你刚刚配置完底层工具，回到这里可以点 `刷新`。如果还是没有变化，先完全退出 Paseo，再重新打开。
:::

## 第 5 步：手动添加模型

如果 Paseo 没有自动列出你想用的模型，可以点击弹窗底部的 `添加 Model`。

![Paseo 添加自定义模型真实截图](/tutorial-shots/paseo-live-add-model.png)

这里的 `Model ID` 要填写完整模型 ID。不要只写 `gpt`、`claude`、`sonnet` 这类简称。

例如底层工具支持 OpenAI Compatible / MaoLao API 时，可以按对应底层工具的要求填写完整模型名。模型 ID 以 MaoLao API 控制台显示为准。

::: warning
这一步只是告诉 Paseo “模型列表里要出现哪个模型”。它不等于填写 API Key。API Key 仍然应该配置在 Codex CLI、OpenCode 或对应底层工具里。
:::

## 第 6 步：诊断和刷新

在 Provider 弹窗底部可以看到两个排查按钮：

| 按钮 | 用途 |
| --- | --- |
| `诊断` | 检查 Provider 是否能正常工作 |
| `刷新` | 重新读取模型列表或 Provider 状态 |

推荐顺序：

1. 先确认底层工具已经能单独运行。
2. 回到 Paseo 的 `Providers` 页面。
3. 打开对应 Provider。
4. 点击 `刷新`。
5. 如果仍然异常，再点 `诊断` 查看提示。

## 第 7 步：创建工作区测试

Provider 可用后，回到 Paseo 首页：

1. 点击 `添加 project`。
2. 选择一个小项目文件夹。
3. 在工作区里选择刚刚可用的 Provider 和模型。
4. 先发一句简单测试：

```text
请只回复：Paseo 已连接成功
```

能正常回复后，再让它分析代码、创建计划或执行更复杂的任务。

## 常见问题

| 现象 | 处理方法 |
| --- | --- |
| 找不到 MaoLao API Key 输入框 | 正常。当前 Paseo 不是直接填写 Base URL 和 API Key 的客户端，先配置底层工具。 |
| Codex 显示 `未安装` | 先按 [Codex CLI](/tools/codex-cli) 安装并测试 `codex --version`。 |
| OpenCode 显示 `未安装` | 先按 [OpenCode](/tools/opencode) 教程安装并跑通。 |
| Provider 已配置但 Paseo 没变化 | 点击 `刷新`，或完全退出 Paseo 后重新打开。 |
| 添加 Model 后仍不能用 | 检查底层工具的 API Key、Base URL、模型 ID 是否已经单独测试成功。 |
| 不知道该选哪个 Provider | 新手优先用 Codex CLI 路线，跑通后再尝试 Claude Code 或 OpenCode。 |

## 配置检查清单

<div class="ml-checklist">

- 已安装并打开 Paseo。
- 已进入 `设置 providers`。
- 已确认目标 Provider 是 `可用`，不是 `未安装`。
- MaoLao API Key 已配置到底层工具，不是在 Paseo 首页乱填。
- 底层工具已经单独测试成功。
- 必要时已点击 Provider 弹窗里的 `刷新`。
- 如果模型未出现，已通过 `添加 Model` 填写完整模型 ID。
- 已用小项目和短消息测试成功。

</div>
