export default {
    title: 'Paperlib',
    description: '简单好用的开源文献管理工具。',
    base: '/cn/',
    head: [
      ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.1/font/bootstrap-icons.css', crossorigin: ''}],
      ['link', { rel: 'apple-touch-icon', href: '/cn/apple-touch-icon.png', crossorigin: ''}],
      ['link', { rel: 'icon', href: '/cn/favicon.ico', crossorigin: ''}],
      ['script', {defer: '', src: '/_vercel/insights/script.js'}],
    ],
    themeConfig: {
        logo: {'light': '/assets/logo-light.svg', 'dark': '/assets/logo-dark.svg'},
        siteTitle: 'PAPERLIB',
        nav: [
            { text: '主页', link: '/' },
            { text: '下载', link: '/download' },
            { text: '文档', link: '/doc/introduction' },
            { text: '服务状态', link: 'https://service-status.paperlib.app/status/paperlib' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Future-Scholars/paperlib' },
            { icon: { svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16"><path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/><path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/></svg>` }, link: 'https://paperlib.app/en/' },
            { icon: { svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rss-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2zm0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2zm.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>` }, link: 'https://paperlib.app/release-notes/rss' },
        ],
        sidebar: [
            {
              text: '下载',
              items: [
                { text: '下载', link: '/download' },
                { text: '更新日志', link: '/release-note' },
              ]
            },
            {
                text: '介绍',
                items: [
                  { text: '亮点', link: '/doc/introduction' },
                  { text: '快速开始', link: '/doc/getting-started' },
                  { text: '捐赠', link: '/donate' },
                ]
            },
            {
              text: '云同步',
              collapsible: true,
              items: [
                { text: '设置', link: '/doc/cloud-sync/setup' },
              ]
            },
            {
              text: '扩展',
              collapsible: true,
              items: [
                { text: '浏览器扩展', link: '/doc/extensions/browser-extension' },
                { text: 'MS Word 扩展', link: '/doc/extensions/msword-extension' },
              ]
            },
            {
              text: '元数据搜寻器',
              collapsible: true,
              items: [
                { text: '设计', link: '/doc/metadata-scraper/' },
                { text: '自定义搜寻器', link: '/doc/metadata-scraper/custom-scraper' },
              ]
            }
        ],
        footer: {
            message: 'Created by Future Scholars. <a href="mailto: hi@paperlib.app">hi@paperlib.app</a>',
            copyright: 'Copyright © 2019-present Paperlib'
        },
        lastUpdated: true
    }
  }