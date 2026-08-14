# Claude Code

Claude Code 适合代码阅读、修改和项目级任务。接入前先在 MaoLao API 的模型与价格页确认目标模型是否支持 Claude Code 或 Anthropic 相关端点。

## 准备工作

1. 创建一个 `claude-code` 专用 MaoLao API Key。
2. 确认模型支持 Claude Code 场景，不要随便拿聊天模型替代。
3. 准备好 Claude Code 的配置入口，例如环境变量、配置文件或软件内 Provider 设置。

## 第 1 步：确认接口格式

Claude Code 常见有两类接入方式：

| 接入方式 | 说明 | 适合情况 |
| --- | --- | --- |
| Anthropic 原生格式 | 通常走 `/v1/messages` 一类接口 | 客户端明确支持 Anthropic Base URL |
| OpenAI 兼容格式 | 使用 OpenAI Compatible Provider | 客户端只支持 OpenAI 自定义地址 |

如果 MaoLao API 控制台或模型说明标注了 Claude Code 专用分组，优先使用该分组。

## 第 2 步：创建专用 Key

在控制台令牌页创建 Key 时，建议这样命名：

```text
claude-code-main
```

用途写清楚，后续看日志和消耗时会更容易判断是哪台设备、哪个工具产生的请求。

## 第 3 步：填写配置字段

<div class="ml-field-table">
  <div class="ml-field-row">
    <div>API Key</div>
    <div>填写 Claude Code 专用 Key。</div>
    <div>不要和网页聊天、测试脚本混用。</div>
  </div>
  <div class="ml-field-row">
    <div>Base URL</div>
    <div>按客户端要求填写 MaoLao API 地址。</div>
    <div>OpenAI 兼容通常为 <code>https://api.maolaoapi.cc/v1</code>。</div>
  </div>
  <div class="ml-field-row">
    <div>模型</div>
    <div>填写支持 Claude Code 的完整模型名。</div>
    <div>从模型与价格页复制，不要简写。</div>
  </div>
  <div class="ml-field-row">
    <div>分组</div>
    <div>优先选择 Claude Code 适配分组或 <code>auto</code>。</div>
    <div>如果报模型不可用，先查分组权限。</div>
  </div>
</div>

## 第 4 步：先做小任务测试

第一次不要直接让 Claude Code 扫描大项目。推荐按下面顺序：

1. 在一个小文件里写几行代码。
2. 让 Claude Code 解释这段代码。
3. 再让它做一个很小的修改。
4. 确认请求稳定、消耗正常后，再处理真实项目。

## 成本与稳定性建议

- 长上下文任务消耗会明显增加，建议给 Key 设置额度上限。
- 大项目先描述目标，再让工具按目录逐步读取，不要一开始就全量分析。
- 如果客户端支持多个模型档位，可以把快模型和强模型分开配置。
- 遇到错误时先看返回信息，是认证、模型、网络还是额度问题。

## 常见问题

| 现象 | 可能原因 | 解决方法 |
| --- | --- | --- |
| 认证失败 | Key 填错或 Key 被禁用 | 重新复制 Key，确认没有空格 |
| 模型不可用 | 模型名不完整或分组不支持 | 回到模型与价格页复制模型名，并检查 Key 分组 |
| 上下文很贵 | 一次性读取太多文件 | 拆小任务，减少无关文件 |
| 工具不支持自定义地址 | 当前版本只支持官方地址 | 更换支持自定义 Provider 的版本或接入方式 |
