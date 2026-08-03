# MaoLaoAIP教程

面向编程新手的 MaoLao API 使用文档站。

## 本地开发

```bash
pnpm install
pnpm data:sync
pnpm docs:dev
```

## 构建

```bash
pnpm docs:build
```

## 数据来源

项目通过 `scripts/sync-maolao-data.mjs` 异步读取 MaoLao API 的公开接口，并将快照保存到 `src/data/`。

- `https://maolaoapi.com/api/status`
- `https://maolaoapi.com/api/pricing`
