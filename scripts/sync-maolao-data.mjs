import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const dataDir = path.join(rootDir, "src", "data");

const endpoints = {
  status: [
    "https://maolaoapi.com/api/status",
    "https://api.maolaoapi.com/api/status",
    "https://api.maolaoapi.cc/api/status",
  ],
  pricing: [
    "https://maolaoapi.com/api/pricing",
    "https://api.maolaoapi.com/api/pricing",
    "https://api.maolaoapi.cc/api/pricing",
  ],
};

const primaryEndpoints = {
  status: endpoints.status[0],
  pricing: endpoints.pricing[0],
};

async function fetchJson(url, { retries = 2, timeoutMs = 15_000 } = {}) {
  let lastError;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, {
        headers: {
          accept: "application/json",
          "user-agent": "MaoLaoAIP-Tutorial-DataSync/0.1",
        },
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      lastError = error;
      if (attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, 600 * (attempt + 1)));
      }
    } finally {
      clearTimeout(timer);
    }
  }

  throw lastError;
}

async function fetchFirstJson(urls) {
  const errors = [];

  for (const url of urls) {
    try {
      const json = await fetchJson(url);
      return { json, resolvedUrl: url };
    } catch (error) {
      errors.push(`${url}: ${error.message}`);
    }
  }

  throw new Error(`All endpoints failed:\n${errors.join("\n")}`);
}

function normalizePricing(raw) {
  const data = Array.isArray(raw?.data) ? raw.data : [];

  return {
    success: raw?.success === true,
    sourceUrl: primaryEndpoints.pricing,
    resolvedUrl: raw?.__resolvedUrl ?? primaryEndpoints.pricing,
    generatedAt: new Date().toISOString(),
    pricingVersion: raw?.pricing_version ?? "",
    groupNames: raw?.group_names ?? {},
    groupRatio: raw?.group_ratio ?? {},
    usableGroup: raw?.usable_group ?? {},
    supportedEndpoint: raw?.supported_endpoint ?? {},
    vendors: raw?.vendors ?? [],
    autoGroups: raw?.auto_groups ?? [],
    models: data
      .map((model) => ({
        name: model.model_name ?? "",
        description: model.description ?? "",
        vendorId: model.vendor_id ?? null,
        tags: model.tags ?? "",
        quotaType: model.quota_type ?? null,
        modelRatio: model.model_ratio ?? 0,
        modelPrice: model.model_price ?? 0,
        modelPriceUnit: model.model_price_unit ?? "",
        completionRatio: model.completion_ratio ?? 0,
        cacheRatio: model.cache_ratio ?? null,
        createCacheRatio: model.create_cache_ratio ?? null,
        enableGroups: Array.isArray(model.enable_groups) ? model.enable_groups : [],
        supportedEndpointTypes: Array.isArray(model.supported_endpoint_types)
          ? model.supported_endpoint_types
          : [],
        billingMode: model.billing_mode ?? "",
        billingExpression: model.billing_expr ?? "",
      }))
      .sort((a, b) => a.name.localeCompare(b.name)),
  };
}

function normalizeStatus(raw) {
  const data = raw?.data ?? {};

  return {
    success: raw?.success === true,
    sourceUrl: primaryEndpoints.status,
    resolvedUrl: raw?.__resolvedUrl ?? primaryEndpoints.status,
    generatedAt: new Date().toISOString(),
    systemName: data.system_name ?? "MaoLao API",
    logo: data.logo ?? "",
    serverAddress: data.server_address ?? "https://maolaoapi.com",
    docsLink: data.docs_link ?? "",
    quotaDisplayType: data.quota_display_type ?? "",
    quotaPerUnit: data.quota_per_unit ?? null,
    price: data.price ?? null,
    usdExchangeRate: data.usd_exchange_rate ?? null,
    displayInCurrency: data.display_in_currency === true,
    defaultUseAutoGroup: data.default_use_auto_group === true,
    apiInfo: Array.isArray(data.api_info) ? data.api_info : [],
    apiInfoEnabled: data.api_info_enabled === true,
    announcements: Array.isArray(data.announcements) ? data.announcements : [],
    faq: Array.isArray(data.faq) ? data.faq : [],
    chats: Array.isArray(data.chats) ? data.chats : [],
    customItems: parseJsonOption(data.SidebarModulesAdmin)?.customItems ?? [],
  };
}

function parseJsonOption(value) {
  if (!value || typeof value !== "string") return null;

  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function buildSummary(status, pricing) {
  const textModels = pricing.models.filter((model) => model.quotaType === 0);
  const fixedPriceModels = pricing.models.filter((model) => model.quotaType === 1);

  return {
    generatedAt: new Date().toISOString(),
    systemName: status.systemName,
    modelCount: pricing.models.length,
    textModelCount: textModels.length,
    fixedPriceModelCount: fixedPriceModels.length,
    groupCount: Object.keys(pricing.groupNames).length,
    recommendedApiUrls: status.apiInfo.map((item) => item.url).filter(Boolean),
    pricingVersion: pricing.pricingVersion,
    quotaPerUnit: status.quotaPerUnit,
    quotaDisplayType: status.quotaDisplayType,
  };
}

async function main() {
  await mkdir(dataDir, { recursive: true });

  const [statusResult, pricingResult] = await Promise.all([
    fetchFirstJson(endpoints.status),
    fetchFirstJson(endpoints.pricing),
  ]);

  const statusRaw = {
    ...statusResult.json,
    __resolvedUrl: statusResult.resolvedUrl,
  };
  const pricingRaw = {
    ...pricingResult.json,
    __resolvedUrl: pricingResult.resolvedUrl,
  };

  const status = normalizeStatus(statusRaw);
  const pricing = normalizePricing(pricingRaw);
  const summary = buildSummary(status, pricing);

  await Promise.all([
    writeJson("status.json", status),
    writeJson("pricing.json", pricing),
    writeJson("summary.json", summary),
  ]);

  console.log(
    `Synced ${summary.modelCount} models, ${summary.groupCount} groups, ${status.announcements.length} announcements.`,
  );
}

async function writeJson(fileName, value) {
  const target = path.join(dataDir, fileName);
  await writeFile(target, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
