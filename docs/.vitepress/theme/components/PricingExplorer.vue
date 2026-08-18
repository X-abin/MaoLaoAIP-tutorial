<script setup>
import { computed, ref } from "vue";
import pricing from "../../../../src/data/pricing.json";
import status from "../../../../src/data/status.json";

const query = ref("");
const type = ref("all");
const visibleLimit = ref(40);

const vendorMap = computed(() => {
  return Object.fromEntries((pricing.vendors || []).map((vendor) => [vendor.id, vendor.name]));
});

const endpointRows = computed(() => {
  return Object.entries(pricing.supportedEndpoint || {}).map(([name, value]) => ({
    name,
    method: value.method,
    path: value.path,
  }));
});

const groupRows = computed(() => {
  return Object.entries(pricing.usableGroup || {}).map(([key, description]) => ({
    key,
    name: pricing.groupNames?.[key] || key,
    ratio: pricing.groupRatio?.[key],
    description,
  }));
});

const filteredModels = computed(() => {
  const keyword = query.value.trim().toLowerCase();

  return (pricing.models || []).filter((model) => {
    const matchesKeyword =
      !keyword ||
      [model.name, model.description, model.tags, model.supportedEndpointTypes?.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(keyword);

    const matchesType =
      type.value === "all" ||
      (type.value === "token" && model.quotaType === 0) ||
      (type.value === "fixed" && model.quotaType === 1);

    return matchesKeyword && matchesType;
  });
});

const visibleModels = computed(() => filteredModels.value.slice(0, visibleLimit.value));

function formatRatio(value) {
  return value === null || value === undefined || value === "" ? "-" : String(value);
}

function formatPrice(model) {
  if (model.quotaType === 1) {
    const unit = model.modelPriceUnit || "request";
    return `${model.modelPrice} / ${unit}`;
  }

  if (model.billingExpression) {
    return "阶梯表达式";
  }

  return `输入 ${formatRatio(model.modelRatio)}，输出 x${formatRatio(model.completionRatio || 1)}`;
}
</script>

<template>
  <section>
    <div class="ml-grid">
      <div class="ml-card">
        <div class="ml-kpi">{{ pricing.models.length }}</div>
        <h3>模型数量</h3>
        <p>当前价格快照版本：{{ pricing.pricingVersion || "未同步" }}</p>
      </div>
      <div class="ml-card">
        <div class="ml-kpi">{{ Object.keys(pricing.groupNames).length }}</div>
        <h3>分组数量</h3>
        <p>不同分组可能对应不同稳定性、适用客户端和倍率。</p>
      </div>
      <div class="ml-card">
        <div class="ml-kpi">{{ status.quotaDisplayType || "Quota" }}</div>
        <h3>额度显示</h3>
        <p>公开配置：1 单位约 {{ status.quotaPerUnit?.toLocaleString?.() || "-" }} quota。</p>
      </div>
    </div>

    <h2>支持的接口端点</h2>
    <div class="ml-table-wrap">
      <table class="ml-table">
        <thead>
          <tr>
            <th>端点类型</th>
            <th>方法</th>
            <th>路径</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="endpoint in endpointRows" :key="endpoint.name">
            <td><code>{{ endpoint.name }}</code></td>
            <td>{{ endpoint.method }}</td>
            <td><code>{{ endpoint.path }}</code></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>可用分组</h2>
    <div class="ml-table-wrap">
      <table class="ml-table">
        <thead>
          <tr>
            <th>分组</th>
            <th>倍率</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="group in groupRows" :key="group.key">
            <td>
              <strong>{{ group.name }}</strong>
            </td>
            <td>{{ formatRatio(group.ratio) }}</td>
            <td>{{ group.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>模型价格查询</h2>
    <div class="ml-toolbar">
      <input v-model="query" class="ml-input" type="search" placeholder="搜索模型、标签或端点，例如 gpt、claude、image" />
      <select v-model="type" class="ml-select">
        <option value="all">全部计费类型</option>
        <option value="token">按 token/倍率</option>
        <option value="fixed">固定价格</option>
      </select>
    </div>

    <p class="ml-muted">
      共匹配 {{ filteredModels.length }} 个模型，当前显示 {{ visibleModels.length }} 个。
    </p>

    <div class="ml-table-wrap">
      <table class="ml-table">
        <thead>
          <tr>
            <th>模型</th>
            <th>供应商</th>
            <th>计费</th>
            <th>可用分组</th>
            <th>端点</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="model in visibleModels" :key="model.name">
            <td>
              <strong>{{ model.name }}</strong>
              <p class="ml-muted" v-if="model.description">{{ model.description }}</p>
            </td>
            <td>{{ vendorMap[model.vendorId] || model.vendorId || "-" }}</td>
            <td>{{ formatPrice(model) }}</td>
            <td>
              <div class="ml-chip-list">
                <span v-for="group in model.enableGroups" :key="group" class="ml-chip">{{ group }}</span>
              </div>
            </td>
            <td>
              <div class="ml-chip-list">
                <span v-for="endpoint in model.supportedEndpointTypes" :key="endpoint" class="ml-chip">
                  {{ endpoint }}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-if="visibleModels.length < filteredModels.length">
      <button class="VPButton medium brand" type="button" @click="visibleLimit += 40">显示更多模型</button>
    </p>
  </section>
</template>
