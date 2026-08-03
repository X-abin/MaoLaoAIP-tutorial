import { defineConfig } from "vitepress";

const base = process.env.VITEPRESS_BASE || "/";
const asset = (fileName) => `${base}${fileName}`.replace(/\/{2,}/g, "/");

export default defineConfig({
  title: "MaoLaoAIP教程",
  description: "面向新手的 MaoLao API 使用文档",
  lang: "zh-CN",
  base,
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["link", { rel: "icon", href: asset("favicon.svg") }],
  ],
  themeConfig: {
    logo: asset("favicon.svg"),
    siteTitle: "MaoLaoAIP教程",
    nav: [
      { text: "快速开始", link: "/quick-start" },
      { text: "API Key", link: "/api-key" },
      { text: "模型与价格", link: "/models-pricing" },
      { text: "计费与额度", link: "/billing-quota" },
    ],
    sidebar: [
      {
        text: "入门",
        items: [
          { text: "产品介绍", link: "/" },
          { text: "快速开始", link: "/quick-start" },
          { text: "创建 API Key", link: "/api-key" },
          { text: "模型与价格", link: "/models-pricing" },
          { text: "计费与额度", link: "/billing-quota" },
        ],
      },
      {
        text: "项目维护",
        items: [{ text: "数据来源", link: "/data-sources" }],
      },
    ],
    outline: {
      label: "本页目录",
      level: [2, 3],
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
      },
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            displayDetails: "显示详情",
            resetButtonTitle: "清空搜索",
            backButtonTitle: "关闭搜索",
            noResultsText: "没有找到结果",
            footer: {
              selectText: "选择",
              selectKeyAriaLabel: "回车",
              navigateText: "切换",
              navigateUpKeyAriaLabel: "上箭头",
              navigateDownKeyAriaLabel: "下箭头",
              closeText: "关闭",
              closeKeyAriaLabel: "Esc",
            },
          },
        },
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/X-abin/MaoLaoAIP-tutorial" }],
  },
});
