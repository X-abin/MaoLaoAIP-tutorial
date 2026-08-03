# Cherry Studio

Cherry Studio 支持自定义 OpenAI 兼容服务，适合把 MaoLao API 作为一个 Provider 使用。

## 配置步骤

1. 打开 Cherry Studio 设置。
2. 进入模型服务或供应商管理。
3. 新增 OpenAI Compatible Provider。
4. API Key 填 MaoLao API 控制台创建的 Key。
5. API 地址填 `https://api.maolaoapi.cc/v1`。
6. 添加模型名，例如从模型与价格页复制。
7. 保存后发起一次普通对话测试。

## 建议配置

- Provider 名称可以写 `MaoLao API`。
- 模型列表不要一次填太多，先放常用模型。
- 图片模型和文本模型建议分开管理，避免误选高成本模型。

## 常见问题

如果 Cherry Studio 自动拉取模型失败，可以手动添加模型名。  
如果对话报错，先切换到 OpenAI 兼容格式，再检查 Base URL 是否包含 `/v1`。
