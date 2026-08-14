# NextChat

NextChat 是开源聊天网页应用，适合自己部署一个 ChatGPT 风格的聊天页面，再通过 OpenAI 兼容接口接入 MaoLao API。

## 下载地址

- 官方网站：[https://nextchat.club](https://nextchat.club)
- 官方 GitHub：[https://github.com/ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat)
- 新手建议：不会部署网站的话，先使用已有客户端，例如 Chatbox 或 Cherry Studio；NextChat 更适合有部署经验的用户。

## 配置步骤

1. 部署 NextChat。
2. 在环境变量或设置中找到 OpenAI API 配置。
3. API Key 填 MaoLao API Key。
4. Base URL 填 `https://api.maolaoapi.cc/v1`。
5. 模型名填完整模型名。
6. 部署完成后进入网页测试。

## 注意

不要把 API Key 写进公开的前端代码或公开仓库。部署时优先使用服务端环境变量。
