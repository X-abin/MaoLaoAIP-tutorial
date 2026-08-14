# Trae

Trae 接入 MaoLao API 的重点，是确认它支持自定义 OpenAI Compatible Provider。配置完成后，可以用于代码问答、文件理解和项目辅助开发。

## 准备工作

1. 创建一个 `trae` 专用 MaoLao API Key。
2. 复制适合代码任务的完整模型名。
3. 打开 Trae 设置，找到 AI Provider 或 Model Provider。

## 第 1 步：检查是否支持自定义 Provider

在设置里寻找这些入口：

- `AI Provider`
- `Model Provider`
- `Custom Provider`
- `OpenAI Compatible`
- `自定义 API`

如果没有 Base URL 输入框，说明当前版本可能不支持直接接入 MaoLao API。

## 第 2 步：新增 OpenAI 兼容服务

新增 Provider 时，类型选择 OpenAI 兼容或自定义 OpenAI。Provider 名称建议写：

```text
MaoLao API
```

这样在模型选择列表里能清楚区分官方服务和自定义服务。

## 第 3 步：填写配置字段

Trae 如果显示的是英文界面，对照下面的通用图填写即可：`Base URL` 对应 API 地址，`API Key` 对应密钥，`Model` 对应模型名。

![MaoLao API 通用 Provider 配置示意图](/tutorial-shots/common-provider.svg)

<div class="ml-field-table">
  <div class="ml-field-row">
    <div>Base URL</div>
    <div><code>https://api.maolaoapi.cc/v1</code></div>
    <div>不要只填域名。</div>
  </div>
  <div class="ml-field-row">
    <div>API Key</div>
    <div>填写 Trae 专用 Key。</div>
    <div>复制后确认前后没有空格。</div>
  </div>
  <div class="ml-field-row">
    <div>Model</div>
    <div>填写完整模型名。</div>
    <div>优先选择代码能力强的模型。</div>
  </div>
  <div class="ml-field-row">
    <div>备用地址</div>
    <div><code>https://api.maolaoapi.com/v1</code></div>
    <div>主地址不稳定时再切换。</div>
  </div>
</div>

## 第 4 步：做一次轻量测试

建议用一个很小的文件测试：

1. 让 Trae 解释一段函数。
2. 让它生成一个注释。
3. 再让它改一处简单错误。

确认这三步都正常后，再开启项目级上下文。

## 使用建议

- 长项目分析前先关闭不必要上下文。
- 自动补全如果很频繁，先观察控制台消耗。
- 代码类任务优先选择代码能力强的模型。
- 如果频繁重试，先暂停请求，检查日志，避免后台重试造成额度消耗。

## 常见问题

| 现象 | 处理方法 |
| --- | --- |
| 找不到自定义 API | 升级 Trae 或更换支持自定义 Provider 的入口 |
| 认证失败 | 重新复制 API Key |
| 模型不可用 | 检查模型名和 Key 分组 |
| 响应慢 | 切换备用 Base URL 或换更快模型测试 |
