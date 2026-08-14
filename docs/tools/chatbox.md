# Chatbox

Chatbox 可以通过自定义 OpenAI API 接入 MaoLao API。它比较适合做日常聊天、翻译、总结和简单代码问答。

## 准备工作

1. 在 MaoLao API 控制台创建 `chatbox` 专用 Key。
2. 在模型与价格页复制一个常用聊天模型名。
3. 打开 Chatbox 设置，找到模型提供商或 API 设置。

## 第 1 步：选择 Provider

Provider 选择 OpenAI API 或自定义 OpenAI API。不同版本可能显示为：

![Chatbox 添加 MaoLao API 配置示意图](/tutorial-shots/chatbox-provider.svg)

- `OpenAI`
- `OpenAI API`
- `Custom OpenAI`
- `OpenAI Compatible`

如果页面里有官方 OpenAI 和自定义地址两个输入区，优先使用可以填写 Base URL 的那一项。

## 第 2 步：填写 API 信息

对照上图，最重要的是第 4、5、6 三个位置：API 地址、API Key、模型名。只要这三项正确，大多数问题就能排除一半。

<div class="ml-field-table">
  <div class="ml-field-row">
    <div>API Key</div>
    <div>填写 MaoLao API Key。</div>
    <div>不要把 Key 分享给别人。</div>
  </div>
  <div class="ml-field-row">
    <div>API Host / Base URL</div>
    <div><code>https://api.maolaoapi.cc/v1</code></div>
    <div>如果软件要求 Host，也填这个地址。</div>
  </div>
  <div class="ml-field-row">
    <div>Model</div>
    <div>填写完整模型名。</div>
    <div>建议先用低成本模型测试。</div>
  </div>
</div>

## 第 3 步：保存并测试

保存后新建一个对话，发送：

```text
请回复 ok，并说明当前接口可用。
```

正常返回后，可以继续测试翻译、长文总结和代码解释。

## 第 4 步：控制上下文消耗

Chatbox 的连续对话会携带历史内容。对新手来说，最容易忽略的是历史越长，消耗越高。

建议这样使用：

1. 一个主题开一个新对话。
2. 测试阶段不要上传很大的文件。
3. 长文总结前先确认模型价格和上下文限制。
4. 不需要历史时，新开会话再问。

## 常见问题

| 现象 | 处理方法 |
| --- | --- |
| 没有响应 | 检查网络、Base URL、Key 是否正确 |
| 提示模型不存在 | 从模型与价格页重新复制完整模型名 |
| 提示无权限 | 检查 Key 分组是否支持该模型 |
| 消耗偏高 | 减少连续历史，必要时新建对话 |
