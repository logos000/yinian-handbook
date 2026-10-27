import { defineConfig } from 'vitepress'

// TODO(pre-launch): replace with the final domain (e.g. https://yinian.app)
// — drives the sitemap hostname, robots.txt sitemap line and og:url.
// When moving to a custom domain: set BASE to '/' and update this URL.
const SITE_URL = 'https://logos000.github.io/yinian-handbook'

// Sub-path deploy: https://logos000.github.io/yinian-handbook/
// Set to '/' when the site moves to a custom domain. `head` links are not
// rewritten by VitePress, so they use BASE explicitly.
const BASE = '/yinian-handbook/'

const APP_URL = 'https://yinian.avalidigital.ca'

const DESCRIPTION =
  'Yinian (一念) is an AI production workbench that takes a solo creator from script to finished anime episode — storyboard, character design, keyframes, video generation, and editing handoff in one pipeline.'

export default defineConfig({
  base: BASE,
  lang: 'en-US',
  title: 'Yinian',
  description: DESCRIPTION,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${BASE}logo.svg` }],
    ['meta', { name: 'theme-color', content: '#f2eee9' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Yinian' }],
    ['meta', { property: 'og:title', content: 'Yinian — One person, one anime series' }],
    ['meta', { property: 'og:description', content: DESCRIPTION }],
    ['meta', { property: 'og:url', content: SITE_URL }],
    ['meta', { property: 'og:image', content: `${SITE_URL}/og.png` }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: `${SITE_URL}/og.png` }],
    ['meta', { name: 'twitter:title', content: 'Yinian — One person, one anime series' }],
    ['meta', { name: 'twitter:description', content: DESCRIPTION }]
  ],
  sitemap: {
    hostname: SITE_URL
  },
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Yinian',
    nav: [
      { text: 'Guide', link: '/guide/quick-start' },
      { text: 'Pipeline', link: '/guide/pipeline' },
      { text: 'Self-hosting', link: '/self-host' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Open the app', link: APP_URL }
    ],
    sidebar: [
      {
        text: 'Handbook',
        items: [
          { text: 'Quick start', link: '/guide/quick-start' },
          { text: 'The pipeline', link: '/guide/pipeline' },
          { text: 'Self-hosting', link: '/self-host' },
          { text: 'FAQ', link: '/faq' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      label: 'On this page'
    },
    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },
    lastUpdated: {
      text: 'Last updated'
    },
    returnToTop: {
      text: 'Back to top'
    },
    footer: {
      message: 'One person, one anime series.',
      copyright: 'Copyright © 2026-present Yinian'
    }
  }
})
