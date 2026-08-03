# Cursor

Cursor 接入时建议单独创建一个 Key，方便限制额度和排查消耗。

## 配置步骤

1. 打开 Cursor 设置。
2. 找到模型或 API Provider 设置。
3. 选择 OpenAI 兼容或自定义 OpenAI 地址。
4. 填入 `API Key`。
5. Base URL 填 `https://api.maolaoapi.cc/v1`。
6. 模型名填写模型与价格页中的完整名称。

## 推荐习惯

- 第一次测试先选低倍率模型。
- 如果 Cursor 支持多个模型档位，可以把快模型和强模型分开配置。
- 不同设备使用 Cursor 时，建议使用同一个专用 Key，便于看日志。

## 排查

如果 Cursor 显示认证失败，先重新复制 Key。  
如果显示模型不可用，检查模型名和 Key 分组。  
如果响应慢，尝试把 Base URL 切换到备用地址 `https://api.maolaoapi.com/v1`。
