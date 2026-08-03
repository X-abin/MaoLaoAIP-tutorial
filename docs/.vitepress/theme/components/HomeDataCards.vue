<script setup>
import status from "../../../../src/data/status.json";
import summary from "../../../../src/data/summary.json";

const apiUrls = status.apiInfo?.length
  ? status.apiInfo.map((item) => item.url).filter(Boolean)
  : summary.recommendedApiUrls;

const latestAnnouncement = status.announcements?.[0];
</script>

<template>
  <div class="ml-grid">
    <section class="ml-card">
      <div class="ml-kpi">{{ summary.modelCount || "待同步" }}</div>
      <h3>可查询模型</h3>
      <p>模型、分组和端点信息来自公开价格接口，构建时会自动同步。</p>
    </section>
    <section class="ml-card">
      <div class="ml-kpi">{{ summary.groupCount || "待同步" }}</div>
      <h3>可用分组</h3>
      <p>分组倍率会影响最终消耗，建议新手优先使用 auto 自动分组。</p>
    </section>
    <section class="ml-card">
      <div class="ml-kpi">{{ status.quotaPerUnit ? status.quotaPerUnit.toLocaleString() : "待同步" }}</div>
      <h3>额度换算</h3>
      <p>站点公开配置中的 quota_per_unit，用于理解额度和计费展示。</p>
    </section>
  </div>

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
