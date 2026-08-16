# Claude Coworks

Claude Coworks 可以在开发者模式里添加第三方推理供应商。下面按“打开哪里、点哪里、填什么”的顺序配置 MaoLao API，新手照着图片一步一步做即可。

## 下载地址

- Claude 官方下载页：[https://claude.com/download](https://claude.com/download)
- 新手提醒：先把 Claude 更新到支持开发者模式和第三方推理供应商的版本，再开始下面的配置。

## 配置前准备

先完成这三件事：

1. 在 MaoLao API 控制台创建一个专用 Key，建议命名为 `claude-coworks`。
2. 在模型与价格页确认你要用的 Claude 系列模型，并复制完整模型名。
3. 不要把 API Key 发到群聊、截图或公开仓库。

<div class="ml-callout">
这页使用的是 Anthropic 兼容网关，不是普通 OpenAI 兼容网关。地址仍然填 MaoLao API 的 <code>https://api.maolaoapi.cc/v1</code>，不要填参考站的 API 地址。
</div>

## 第 1 步：开启开发者模式

打开 Claude Coworks 后，进入设置，找到“开发者”或 `Developer`。先开启第三方推理服务，再点击“添加供应商”。

![Claude Coworks 开启开发者模式](/tutorial-shots/claude-coworks-developer-mode.svg)

按图片里的编号操作：

1. 点击左侧的“开发者”。
2. 开启“允许使用第三方推理服务”。
3. 点击“添加供应商”。

如果你在设置里完全找不到开发者模式，通常是客户端版本太旧，或者当前账号暂未开放此功能。

## 第 2 步：添加 MaoLao API 供应商

进入添加供应商页面后，按下面图片填写。

![Claude Coworks 添加 MaoLao API 供应商](/tutorial-shots/claude-coworks-provider-form.svg)

<div class="ml-field-table">
  <div class="ml-field-row">
    <div>供应商名称</div>
    <div><code>MaoLao API</code></div>
    <div>名称只用于你自己区分。</div>
  </div>
  <div class="ml-field-row">
    <div>供应商类型</div>
    <div><code>Anthropic-compatible gateway</code></div>
    <div>不要选 OpenAI Compatible。</div>
  </div>
  <div class="ml-field-row">
    <div>Gateway Base URL</div>
    <div><code>https://api.maolaoapi.cc/v1</code></div>
    <div>必须带 <code>/v1</code>，不要填 HaoAI 地址。</div>
  </div>
  <div class="ml-field-row">
    <div>API Key</div>
    <div>填 MaoLao API 控制台创建的 Key。</div>
    <div>直接粘贴 Key，不要加引号。</div>
  </div>
  <div class="ml-field-row">
    <div>认证方式</div>
    <div><code>API Key</code></div>
    <div>不要选 OAuth、Token Exchange 等其他方式。</div>
  </div>
  <div class="ml-field-row">
    <div>手动模型配置</div>
    <div>按需要开启，然后填写完整模型名。</div>
    <div>模型名从 MaoLao 模型与价格页复制。</div>
  </div>
</div>

填完后点击保存。

## 第 3 步：选择模型并测试

保存成功后，回到对话页面，先选刚刚添加的 `MaoLao API` 供应商，再选择模型。

![Claude Coworks 选择模型并测试](/tutorial-shots/claude-coworks-model-test.svg)

建议第一次只发下面这句话：

```text
请只回复：配置成功
```

能正常回复就表示基础配置已完成。之后再测试代码解释、文件分析或长对话。

## 第 4 步：模型怎么选

| 使用场景 | 建议 |
| --- | --- |
| 第一次测试 | 先选价格低、响应快的 Claude 系列模型 |
| 日常写作和代码问答 | 选稳定的常用模型 |
| 大项目、长文件分析 | 选上下文更长的模型，并给 Key 设置额度上限 |

::: warning
不要直接照抄其他教程里的模型 ID。请以 MaoLao API 模型与价格页显示的完整模型名为准，当前 Key 分组必须支持该模型。
:::

## 小白排查顺序

<div class="ml-checklist">

- 开发者模式已开启。
- 供应商类型选的是 `Anthropic-compatible gateway`。
- Gateway Base URL 是 `https://api.maolaoapi.cc/v1`。
- API Key 来自 MaoLao API 控制台，没有多余空格。
- 认证方式选的是 `API Key`。
- 模型名来自 MaoLao 模型与价格页。
- 保存后重新选择了 MaoLao API 供应商和目标模型。

</div>

## 常见问题

| 现象 | 原因与处理 |
| --- | --- |
| 找不到开发者模式 | 更新 Claude Coworks，或确认当前账号是否有该功能 |
| 保存后无法调用 | 重新检查网关地址、Key 和认证方式 |
| 显示模型不存在 | 模型名写错，或 Key 分组不支持 |
| 返回认证失败 | 重新复制 Key，不要带空格或引号 |
| 能保存但没有回复 | 先换低成本模型测试，再检查余额和日志 |
