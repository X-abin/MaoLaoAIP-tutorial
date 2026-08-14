# Cherry Studio

Cherry Studio 支持自定义 OpenAI 兼容服务，适合把 MaoLao API 作为一个独立 Provider 使用。它的优势是模型管理比较直观，新手可以先用它验证 Key 是否可用。

## 下载地址

- 官方 GitHub Releases：[https://github.com/CherryHQ/cherry-studio/releases](https://github.com/CherryHQ/cherry-studio/releases)
- 新手建议：打开 Releases 后下载最新版本，Windows 通常选择 `.exe` 或 `.msi` 安装包。

## 准备工作

1. 创建一个 `cherry-studio` 专用 MaoLao API Key。
2. 准备 1 到 3 个常用模型名，先不要一次性添加太多。
3. 打开 Cherry Studio 设置页，进入模型服务或供应商管理。

## 第 1 步：新增供应商

在模型服务里点击新增，供应商类型选择 OpenAI 兼容。

![Cherry Studio 添加 MaoLao API 服务商示意图](/tutorial-shots/cherry-studio-provider.svg)

<div class="ml-guide-note">
如果列表里没有 MaoLao API，可以选择 OpenAI Compatible、OpenAI API、自定义 OpenAI 这类选项。关键是它必须允许你自己填写 API 地址。
</div>

## 第 2 步：填写供应商信息

对照上图填写第 3 到第 6 个标记位置。新手最容易填错的是 API 地址，记得一定要带 `/v1`。

<div class="ml-field-table">
  <div class="ml-field-row">
    <div>供应商名称</div>
    <div><code>MaoLao API</code></div>
    <div>名称只用于本地识别，可以按自己习惯修改。</div>
  </div>
  <div class="ml-field-row">
    <div>API 地址</div>
    <div><code>https://api.maolaoapi.cc/v1</code></div>
    <div>必须带 <code>/v1</code>。</div>
  </div>
  <div class="ml-field-row">
    <div>API Key</div>
    <div>粘贴控制台创建的 Key。</div>
    <div>建议不要和其他软件共用。</div>
  </div>
  <div class="ml-field-row">
    <div>模型列表</div>
    <div>手动添加模型与价格页中的完整模型名。</div>
    <div>先添加常用文本模型，图片模型可单独管理。</div>
  </div>
</div>

## 第 3 步：添加模型

如果 Cherry Studio 可以自动拉取模型列表，可以先刷新一次。若列表为空，直接手动添加模型名：

1. 点击添加模型。
2. 粘贴完整模型名。
3. 给模型设置一个容易识别的显示名称。
4. 保存后返回聊天页选择该模型。

## 第 4 步：发送测试消息

第一次测试建议发送短问题：

```text
请只回复 ok，用来测试接口是否正常。
```

如果可以正常返回，再测试长文本总结、文件理解或代码问答。

## 配置建议

| 目标 | 建议做法 |
| --- | --- |
| 控制成本 | 先只添加低成本常用模型 |
| 避免误选 | 文本模型、图片模型分不同供应商或分组 |
| 排查方便 | Cherry Studio 单独 Key，方便在控制台看消耗 |
| 网络备用 | 主地址失败时改为 `https://api.maolaoapi.com/v1` |

## 常见问题

- 自动拉取模型失败：手动添加模型名即可。
- 对话报错：确认供应商类型是 OpenAI 兼容格式。
- 保存后无模型：检查是否已把模型加入当前供应商，而不是加入了别的供应商。
- 消耗偏高：检查是否开启长上下文、文件解析或连续对话历史。
