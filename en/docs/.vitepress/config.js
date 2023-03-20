export default {
    title: 'Paperlib',
    description: 'An open-source and simple academic paper management tool.',
    base: '/en/',
    head: [
      ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.1/font/bootstrap-icons.css', crossorigin: ''}],
      ['link', { rel: 'apple-touch-icon', href: '/en/apple-touch-icon.png', crossorigin: ''}],
      ['link', { rel: 'icon', href: '/en/favicon.ico', crossorigin: ''}],
      ['script', {defer: '', src: '/_vercel/insights/script.js'}],
    ],
    themeConfig: {
        logo: {'light': '/assets/logo-light.svg', 'dark': '/assets/logo-dark.svg'},
        siteTitle: 'PAPERLIB',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Download', link: '/download' },
            { text: 'Doc', link: '/doc/introduction' },
            { text: 'Service Status', link: 'https://service-status.paperlib.app/status/paperlib' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Future-Scholars/paperlib' },
            { icon: { svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16"><path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/><path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/></svg>` }, link: 'https://paperlib.app/cn/' },
            { icon: { svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rss-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2zm0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2zm.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>` }, link: 'https://paperlib.app/release-notes/rss' },
        ],
        sidebar: [
            {
              text: 'Download',
              items: [
                { text: 'Download', link: '/download' },
                { text: 'Release Note', link: '/release-note' },
              ]
            },
            {
                text: 'Introduction',
                items: [
                  { text: 'Highlights', link: '/doc/introduction' },
                  { text: 'Getting Started', link: '/doc/getting-started' },
                  { text: 'Donate', link: '/donate' },
                ]
            },
            {
              text: 'Cloud Sync',
              collapsible: true,
              items: [
                { text: 'Setup', link: '/doc/cloud-sync/setup' },
              ]
            },
            {
              text: 'Extensions',
              collapsible: true,
              items: [
                { text: 'Browser Extension', link: '/doc/extensions/browser-extension' },
                { text: 'MS Word Extension', link: '/doc/extensions/msword-extension' },
              ]
            },
            {
              text: 'Metadata Scrapers',
              collapsible: true,
              items: [
                { text: 'Design', link: '/doc/metadata-scraper/' },
                { text: 'Custom Scraper', link: '/doc/metadata-scraper/custom-scraper' },
              ]
            }
        ],
        footer: {
            message: 'Released under the GPL-3.0 license. <a href="mailto: hi@paperlib.app">hi@paperlib.app</a>',
            copyright: 'Copyright © 2019-present Paperlib'
        },
        lastUpdated: true
    }
  }