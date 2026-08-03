# 数据来源

这个文档站把教程文字和接口数据分开维护。教程文字写在 `docs/`，动态数据快照写在 `src/data/`。

## 已使用的公开接口

| 接口 | 用途 |
| --- | --- |
| `https://maolaoapi.com/api/status` | 系统名称、推荐 API 域名、公告、FAQ、额度展示配置 |
| `https://maolaoapi.com/api/pricing` | 模型、供应商、分组、倍率、端点、价格规则 |

## 同步命令

```bash
pnpm data:sync
```

同步脚本位于 `scripts/sync-maolao-data.mjs`，使用异步并发请求、超时控制和失败重试。同步成功后会更新：

- `src/data/status.json`
- `src/data/pricing.json`
- `src/data/summary.json`

## 构建命令

```bash
pnpm docs:build
```

GitHub Actions 会在每次推送到 `main` 分支、手动触发或每日定时任务时重新同步数据并部署到 GitHub Pages。

## 登录页限制

`https://maolaoapi.com/console/token` 是控制台令牌页面，需要登录后才能看到完整界面。当前教程基于公开接口、前端路由信息和通用 API Key 管理流程编写。后续如果需要完全贴合实际界面，可以补充登录后的截图或页面字段说明。
