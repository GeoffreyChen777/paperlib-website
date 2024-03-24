import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",
  outDir: "dist",
  title: "Paperlib",
  description: "An open-source and simple academic paper management tool.",

  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        crossorigin: "",
      },
    ],
    ["link", { rel: "icon", href: "/favicon.ico", crossorigin: "" }],
    ["script", { defer: "", src: "/_vercel/insights/script.js" }],
  ],

  locales: {
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
    },
    cn: {
      label: "中文",
      lang: "cn",
      link: "/cn/",
      description: "简单好用的开源文献管理工具。",
      themeConfig: {
        nav: [
          { text: "主页", link: "/cn/" },
          { text: "下载", link: "/cn/download" },
          { text: "使用指南", link: "/cn/doc/introduction" },
          { text: "开发者文档", link: "/cn/extension-doc/" },
          {
            text: "服务状态",
            link: "https://service-status.paperlib.app/status/paperlib",
          },
        ],
        sidebar: {
          "/cn/extension-doc/": [
            {
              text: "开发入门",
              collapsed: false,
              items: [
                { text: "简介", link: "/cn/extension-doc/" },
                { text: "开发环境准备", link: "/cn/extension-doc/env" },
                {
                  text: "Manifest Version",
                  link: "/cn/extension-doc/manifest-version",
                },
                {
                  text: "开发规范与约定",
                  link: "/cn/extension-doc/convention",
                },
                { text: "示例插件", link: "/cn/extension-doc/demo" },
                {
                  text: "API 更新日志",
                  link: "https://github.com/Future-Scholars/paperlib/blob/dev-3.0.0/paperlib-api/release-note.md",
                },
              ],
            },
            {
              text: "用户设置",
              link: "/cn/extension-doc/preference",
            },
            {
              text: "插件类型",
              collapsed: false,
              items: [
                {
                  text: "Simple 插件",
                  link: "/cn/extension-doc/ext-types/simple-ext",
                },
                {
                  text: "Command 插件",
                  link: "/cn/extension-doc/ext-types/command-ext",
                },
                {
                  text: "Hook 插件",
                  link: "/cn/extension-doc/ext-types/hook-ext",
                },
                { text: "UI 插件", link: "/cn/extension-doc/ext-types/ui-ext" },
                {
                  text: "New Window 插件",
                  link: "/cn/extension-doc/ext-types/new-window-ext",
                },
              ],
            },
            {
              text: "流程与钩子",
              link: "/cn/extension-doc/process-hook",
            },
            {
              text: "UI 插槽",
              link: "/cn/extension-doc/ui-slot",
            },
            {
              text: "重要数据结构",
              link: "/cn/extension-doc/data-structure",
            },
            {
              text: "服务事件",
              link: "/cn/extension-doc/service-event",
            },
            {
              text: "PLAPI",
              link: "/cn/extension-doc/plapi/",
              collapsed: true,
              items: [
                {
                  text: "logService",
                  link: "/cn/extension-doc/plapi/log-service",
                },
                {
                  text: "cacheService",
                  link: "/cn/extension-doc/plapi/cache-service",
                },
                {
                  text: "categorizerService",
                  link: "/cn/extension-doc/plapi/categorizer-service",
                },
                {
                  text: "commandService",
                  link: "/cn/extension-doc/plapi/command-service",
                },
                {
                  text: "databaseService",
                  link: "/cn/extension-doc/plapi/database-service",
                },
                {
                  text: "feedService",
                  link: "/cn/extension-doc/plapi/feed-service",
                },
                {
                  text: "fileService",
                  link: "/cn/extension-doc/plapi/file-service",
                },
                {
                  text: "hookService",
                  link: "/cn/extension-doc/plapi/hook-service",
                },
                {
                  text: "paperService",
                  link: "/cn/extension-doc/plapi/paper-service",
                },
                {
                  text: "referenceService",
                  link: "/cn/extension-doc/plapi/reference-service",
                },
                {
                  text: "renderService",
                  link: "/cn/extension-doc/plapi/render-service",
                },
                {
                  text: "scrapeService",
                  link: "/cn/extension-doc/plapi/scrape-service",
                },
                {
                  text: "smartFilterService",
                  link: "/cn/extension-doc/plapi/smartfilter-service",
                },
                {
                  text: "uiStateService",
                  link: "/cn/extension-doc/plapi/uistate-service",
                },
                {
                  text: "preferenceService",
                  link: "/cn/extension-doc/plapi/preference-service",
                },
                {
                  text: "uiSlotService",
                  link: "/cn/extension-doc/plapi/uislot-service",
                },
              ],
            },
            {
              text: "PLMainAPI",
              link: "/cn/extension-doc/plmainapi/",
              collapsed: true,
              items: [
                {
                  text: "contextMenuService",
                  link: "/cn/extension-doc/plmainapi/contextmenu-service",
                },
                {
                  text: "fileSystemService",
                  link: "/cn/extension-doc/plmainapi/filesystem-service",
                },
                {
                  text: "menuService",
                  link: "/cn/extension-doc/plmainapi/menu-service",
                },
                {
                  text: "windowProcessManagementService",
                  link: "/cn/extension-doc/plmainapi/windowprocessmanagement-service",
                },
              ],
            },
            {
              text: "PLExtAPI",
              link: "/cn/extension-doc/plextapi/",
              collapsed: true,
              items: [
                {
                  text: "extensionManagementService",
                  link: "/cn/extension-doc/plextapi/extensionmanagement-service",
                },
                {
                  text: "extensionPreferenceService",
                  link: "/cn/extension-doc/plextapi/extensionpreference-service",
                },
                {
                  text: "networkTool",
                  link: "/cn/extension-doc/plextapi/network-tool",
                },
              ],
            },
          ],
          "/": [
            {
              text: "下载",
              collapsed: false,
              items: [
                { text: "下载", link: "/cn/download" },
                { text: "更新日志", link: "/cn/release-note" },
              ],
            },
            {
              text: "介绍",
              collapsed: false,
              items: [
                { text: "亮点", link: "/cn/doc/introduction" },
                { text: "快速开始", link: "/cn/doc/getting-started" },
                { text: "捐赠", link: "/cn/donate" },
              ],
            },
            {
              text: "云同步",
              collapsed: false,
              items: [{ text: "设置", link: "/cn/doc/cloud-sync/setup" }],
            },
            {
              text: "浏览器/Word 插件",

              items: [
                {
                  text: "浏览器插件",
                  link: "/cn/doc/extensions/browser-extension",
                },
                {
                  text: "MS Word 插件",
                  link: "/cn/doc/extensions/msword-extension",
                },
              ],
            },
            {
              text: "智能过滤器",
              collapsed: false,
              items: [{ text: "介绍", link: "/cn/doc/smart-filter/" }],
            },
            {
              text: "自定义根证书",
              link: "/cn/doc/custom-ca",
            },
            {
              text: "插件开发",
              link: "/cn/extension-doc/",
            }
          ],
        },
        outline: {
          label: "目录",
          level: [2, 3],
        },
        socialLinks: [
          {
            icon: "github",
            link: "https://github.com/Future-Scholars/paperlib",
          },
          {
            icon: {
              svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rss-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2zm0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2zm.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>`,
            },
            link: "https://paperlib.app/release-notes/rss?lang=cn",
          },
        ],
      },
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: { light: "/assets/logo-light.svg", dark: "/assets/logo-dark.svg" },
    siteTitle: "PAPERLIB",

    nav: [
      { text: "Home", link: "/en/" },
      { text: "Download", link: "/en/download" },
      { text: "Usage", link: "/en/doc/introduction" },
      { text: "Dev Docs", link: "/en/extension-doc/" },
      {
        text: "Service Status",
        link: "https://service-status.paperlib.app/status/paperlib",
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Future-Scholars/paperlib" },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rss-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2zm0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2zm.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>`,
        },
        link: "https://paperlib.app/release-notes/rss?lang=en",
      },
    ],

    sidebar: {
      "/en/extension-doc/": [
        {
          text: "Getting Started",
          collapsed: false,
          items: [
            { text: "Introduction", link: "/en/extension-doc/" },
            { text: "Development Prepare", link: "/en/extension-doc/env" },
            {
              text: "Manifest Version",
              link: "/en/extension-doc/manifest-version",
            },
            { text: "Conventions", link: "/en/extension-doc/convention" },
            { text: "Demo Extension", link: "/en/extension-doc/demo" },
            {
              text: "API Release Note",
              link: "https://github.com/Future-Scholars/paperlib/blob/dev-3.0.0/paperlib-api/release-note.md",
            },
          ],
        },
        {
          text: "User Preference",
          link: "/en/extension-doc/preference",
        },
        {
          text: "Extension Type",
          collapsed: false,
          items: [
            {
              text: "Simple Extension",
              link: "/en/extension-doc/ext-types/simple-ext",
            },
            {
              text: "Command Extension",
              link: "/en/extension-doc/ext-types/command-ext",
            },
            {
              text: "Hook Extension",
              link: "/en/extension-doc/ext-types/hook-ext",
            },
            {
              text: "UI Extension",
              link: "/en/extension-doc/ext-types/ui-ext",
            },
            {
              text: "New Window Extension",
              link: "/en/extension-doc/ext-types/new-window-ext",
            },
          ],
        },
        {
          text: "Operation Flows and Hooks",
          link: "/en/extension-doc/process-hook",
        },
        {
          text: "UI Slots",
          link: "/en/extension-doc/ui-slot",
        },
        {
          text: "Important Data Structures",
          link: "/en/extension-doc/data-structure",
        },
        {
          text: "Service Events",
          link: "/en/extension-doc/service-event",
        },
        {
          text: "PLAPI",
          link: "/en/extension-doc/plapi/",
          collapsed: true,
          items: [
            {
              text: "logService",
              link: "/en/extension-doc/plapi/log-service",
            },
            {
              text: "cacheService",
              link: "/en/extension-doc/plapi/cache-service",
            },
            {
              text: "categorizerService",
              link: "/en/extension-doc/plapi/categorizer-service",
            },
            {
              text: "commandService",
              link: "/en/extension-doc/plapi/command-service",
            },
            {
              text: "databaseService",
              link: "/en/extension-doc/plapi/database-service",
            },
            {
              text: "feedService",
              link: "/en/extension-doc/plapi/feed-service",
            },
            {
              text: "fileService",
              link: "/en/extension-doc/plapi/file-service",
            },
            {
              text: "hookService",
              link: "/en/extension-doc/plapi/hook-service",
            },
            {
              text: "paperService",
              link: "/en/extension-doc/plapi/paper-service",
            },
            {
              text: "referenceService",
              link: "/en/extension-doc/plapi/reference-service",
            },
            {
              text: "renderService",
              link: "/en/extension-doc/plapi/render-service",
            },
            {
              text: "scrapeService",
              link: "/en/extension-doc/plapi/scrape-service",
            },
            {
              text: "smartFilterService",
              link: "/en/extension-doc/plapi/smartfilter-service",
            },
            {
              text: "uiStateService",
              link: "/en/extension-doc/plapi/uistate-service",
            },
            {
              text: "preferenceService",
              link: "/en/extension-doc/plapi/preference-service",
            },
            {
              text: "uiSlotService",
              link: "/en/extension-doc/plapi/uislot-service",
            },
          ],
        },
        {
          text: "PLMainAPI",
          link: "/en/extension-doc/plmainapi/",
          collapsed: true,
          items: [
            {
              text: "contextMenuService",
              link: "/en/extension-doc/plmainapi/contextmenu-service",
            },
            {
              text: "fileSystemService",
              link: "/en/extension-doc/plmainapi/filesystem-service",
            },
            {
              text: "menuService",
              link: "/en/extension-doc/plmainapi/menu-service",
            },
            {
              text: "windowProcessManagementService",
              link: "/en/extension-doc/plmainapi/windowprocessmanagement-service",
            },
          ],
        },
        {
          text: "PLExtAPI",
          link: "/en/extension-doc/plextapi/",
          collapsed: true,
          items: [
            {
              text: "extensionManagementService",
              link: "/en/extension-doc/plextapi/extensionmanagement-service",
            },
            {
              text: "extensionPreferenceService",
              link: "/en/extension-doc/plextapi/extensionpreference-service",
            },
            {
              text: "networkTool",
              link: "/en/extension-doc/plextapi/network-tool",
            },
          ],
        },
      ],
      "/": [
        {
          text: "Download",
          collapsed: false,
          items: [
            { text: "Download", link: "/en/download" },
            { text: "Release Note", link: "/en//release-note" },
          ],
        },
        {
          text: "Introduction",
          collapsed: false,
          items: [
            { text: "Highlights", link: "/en//doc/introduction" },
            { text: "Getting Started", link: "/en//doc/getting-started" },
            { text: "Donate", link: "/en//donate" },
          ],
        },
        {
          text: "Cloud Sync",
          collapsed: false,
          items: [{ text: "Setup", link: "/en//doc/cloud-sync/setup" }],
        },
        {
          text: "Browser/MS Word Integration",

          items: [
            {
              text: "Browser Extension",
              link: "/en//doc/extensions/browser-extension",
            },
            {
              text: "MS Word Extension",
              link: "/en//doc/extensions/msword-extension",
            },
          ],
        },
        {
          text: "Smart Filter",
          collapsed: false,
          items: [{ text: "Smart Filter", link: "/en//doc/smart-filter/" }],
        },
        {
          text: "Custom CA",
          link: "/en/doc/custom-ca",
        },
        {
          text: "Extension Development",
          link: "/en/extension-doc/",
        },
      ],
    },

    outline: {
      label: "Outline",
      level: [2, 3],
    },

    footer: {
      message:
        'Created by Future Scholars. Contact: <a href="mailto: hi@paperlib.app">hi@paperlib.app</a>',
      copyright: "Copyright © 2019-present Paperlib",
    },

    search: {
      provider: "local",
    },
  },
});
