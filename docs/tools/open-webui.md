# Open WebUI

Open WebUI 接入 MaoLao API 时，一般把 MaoLao API 配成 OpenAI 兼容后端。

## 环境变量方式

```bash
OPENAI_API_BASE_URL=https://api.maolaoapi.cc/v1
OPENAI_API_KEY=YOUR_API_KEY
```

不同部署方式变量名可能略有差异，请以你当前 Open WebUI 版本为准。

## 管理后台方式

1. 进入 Open WebUI 管理设置。
2. 找到 Connections 或 OpenAI API 配置。
3. 填写 Base URL 和 API Key。
4. 保存后刷新模型列表。
5. 如果列表为空，手动添加模型名。

## 建议

Open WebUI 常用于多人或长期使用场景。建议创建专用 Key，并设置额度上限或按团队拆分 Key。
