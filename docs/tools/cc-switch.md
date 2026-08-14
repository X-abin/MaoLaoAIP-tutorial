# CC Switch

CC Switch 适合在 Claude Code 相关配置中切换不同 API 地址、Key 和模型组合。它的价值不是只保存一个 Key，而是把“日常开发、低成本测试、高能力模型、备用线路”拆成多个可切换配置。

## 准备工作

1. 在 MaoLao API 控制台创建一个或多个专用 Key。
2. 准备主 Base URL：`https://api.maolaoapi.cc/v1`。
3. 准备备用 Base URL：`https://api.maolaoapi.com/v1`。
4. 在模型与价格页复制常用模型名。
5. 打开 CC Switch，确认可以新增配置和启用当前配置。

## 第 1 步：新增 MaoLao API 配置

在 CC Switch 中点击新增配置。建议第一个配置用于日常开发，名称写清楚：

```text
maolao-daily
```

如果你会配置多个 Key，可以按用途命名：

| 配置名称 | 用途 |
| --- | --- |
| `maolao-daily` | 日常开发 |
| `maolao-test` | 低成本测试 |
| `maolao-strong` | 复杂代码任务 |
| `maolao-backup` | 主线路不稳定时备用 |

## 第 2 步：填写 API Key 和请求地址

进入配置编辑页后，重点填写下面字段。

<div class="ml-field-table">
  <div class="ml-field-row">
    <div>API Key</div>
    <div>填写 MaoLao API 控制台创建的 Key。</div>
    <div>建议每个用途单独 Key，方便限额和查日志。</div>
  </div>
  <div class="ml-field-row">
    <div>请求地址</div>
    <div><code>https://api.maolaoapi.cc/v1</code></div>
    <div>如果 CC Switch 只写 API 地址，也填这个。</div>
  </div>
  <div class="ml-field-row">
    <div>模型</div>
    <div>填写完整模型名。</div>
    <div>不要写显示名，要写接口使用的真实模型名。</div>
  </div>
  <div class="ml-field-row">
    <div>预设模板</div>
    <div>优先选择通用模板或 OpenAI 兼容模板。</div>
    <div>如果有 Claude Code 专用模板，可按模型说明选择。</div>
  </div>
</div>

<div class="ml-guide-note">
界面位置参考：配置编辑页通常会同时出现 Key、请求地址、预设模板、启用开关等区域。你可以把它理解成一张“连接卡片”，每张卡片对应一组 MaoLao API 配置。
</div>

## 第 3 步：启用用量查询

如果 CC Switch 支持用量查询，可以在配置页打开用量查询开关。这个功能能让你在切换配置时顺手看到余额或消耗情况。

配置要点：

1. 打开当前配置右侧的编辑入口。
2. 找到“启用用量查询”或类似开关。
3. 开启开关。
4. API Key 填当前配置使用的 MaoLao API Key。
5. 请求地址填 `https://api.maolaoapi.cc/v1`。
6. 保存后回到列表页，刷新或重新启用该配置。

如果用量查询失败，但模型调用正常，通常不影响实际使用。先确认 Key、请求地址和网络，再检查 CC Switch 当前版本是否支持该接口格式。

## 第 4 步：启用并测试配置

保存后回到配置列表：

1. 点击目标配置的启用按钮。
2. 确认当前启用项显示为 MaoLao API 配置。
3. 打开 Claude Code 或相关工具。
4. 发送一个很短的测试请求，例如“请回复 ok”。
5. 如果能正常回复，再进行代码类任务。

## 第 5 步：拆分多套配置

建议不要所有场景都共用同一套配置。可以这样拆：

| 配置 | Key 建议 | 使用场景 |
| --- | --- | --- |
| 稳定分组 Key | `maolao-daily` | 日常开发 |
| 低价分组 Key | `maolao-test` | 测试或低风险任务 |
| 高额度 Key | `maolao-strong` | 长上下文项目 |
| 低额度 Key | `maolao-temp` | 临时实验 |
| 备用地址 Key | `maolao-backup` | 主地址异常时快速切换 |

## 排查清单

<div class="ml-checklist">

- 当前启用的是 MaoLao API 配置，而不是旧配置。
- 请求地址包含 `/v1`。
- API Key 没有复制多余空格。
- 模型名是模型与价格页里的完整名称。
- Claude Code 或相关工具已经重新读取了 CC Switch 的最新配置。
- 用量查询失败时，先区分是“查询失败”还是“模型调用失败”。

</div>

## 常见问题

| 现象 | 处理方法 |
| --- | --- |
| 点击启用后仍然走旧配置 | 重新启用目标配置，并重启相关工具 |
| 用量查询不显示 | 检查 Key、请求地址和 CC Switch 版本 |
| 模型调用失败 | 检查模型名、Key 分组和 Base URL |
| 需要临时切换线路 | 复制当前配置，把请求地址改成备用 Base URL |
