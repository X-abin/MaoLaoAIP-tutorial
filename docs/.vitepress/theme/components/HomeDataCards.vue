<script setup>
import { withBase } from "vitepress";
import status from "../../../../src/data/status.json";
import summary from "../../../../src/data/summary.json";

const apiUrls = status.apiInfo?.length
  ? status.apiInfo.map((item) => item.url).filter(Boolean)
  : summary.recommendedApiUrls;

const latestAnnouncement = status.announcements?.[0];

const routes = [
  {
    title: "5 分钟跑通",
    text: "从 Base URL、API Key 到第一次请求，按步骤完成最小可用配置。",
    link: "/quick-start",
  },
  {
    title: "工具接入",
    text: "Cursor、Claude Code、Cherry Studio、Open WebUI 等常见工具配置入口。",
    link: "/tools/",
  },
  {
    title: "价格查询",
    text: "查看模型、分组、端点和计费类型，使用前先估算成本。",
    link: "/models-pricing",
  },
  {
    title: "账户订阅",
    text: "整理充值、套餐、订单和额度异常排查，减少踩坑成本。",
    link: "/account/",
  },
];
</script>

<template>
  <section class="ml-dashboard">
    <div class="ml-grid">
      <section class="ml-card ml-stat-card">
        <span class="ml-eyebrow">Models</span>
        <div class="ml-kpi">{{ summary.modelCount || "待同步" }}</div>
        <h3>可查询模型</h3>
        <p>模型、分组和端点信息来自公开价格接口，构建时会自动同步。</p>
      </section>
      <section class="ml-card ml-stat-card">
        <span class="ml-eyebrow">Groups</span>
        <div class="ml-kpi">{{ summary.groupCount || "待同步" }}</div>
        <h3>可用分组</h3>
        <p>分组倍率会影响最终消耗，建议新手优先使用 auto 自动分组。</p>
      </section>
      <section class="ml-card ml-stat-card">
        <span class="ml-eyebrow">Quota</span>
        <div class="ml-kpi">{{ status.quotaPerUnit ? status.quotaPerUnit.toLocaleString() : "待同步" }}</div>
        <h3>额度换算</h3>
        <p>站点公开配置中的 quota_per_unit，用于理解额度和计费展示。</p>
      </section>
    </div>
  </section>

  <section class="ml-route-grid" aria-label="推荐阅读路径">
    <a v-for="route in routes" :key="route.link" class="ml-route-card" :href="withBase(route.link)">
      <span>{{ route.title }}</span>
      <p>{{ route.text }}</p>
    </a>
  </section>

  <div class="ml-callout" v-if="apiUrls?.length">
    <strong>推荐 API 地址：</strong>
    <span v-for="(url, index) in apiUrls" :key="url">
      <code>{{ url }}</code><span v-if="index < apiUrls.length - 1">、</span>
    </span>
  </div>

  <div class="ml-callout" v-if="latestAnnouncement">
    <strong>最新公告：</strong>
    <span>{{ latestAnnouncement.content }}</span>
  </div>
</template>
