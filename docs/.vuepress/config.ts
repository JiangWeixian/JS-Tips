import { getMenus } from '../utils/menus'
import { repo } from '../config'

module.exports = {
  title: 'JS-Tips',
  base: `/${repo}/`,
  description: '前端基础',
  head: [
    [ 'link', { rel: 'icon', href: '/favicon.png', type: 'image/x-icon' } ],
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '技术栈', link: '/Guide/' },
      { text: '目录', link: '/Menus/' },
      { text: 'Github', link: 'https://github.com/JiangWeixian/JS-Tips/' },
    ],
    sidebar: {
      ...getMenus(),
      '/Guide/': [
        '',
      ],
      '/Menus/': [
        '',
      ],
    },
    lastUpdated: true,
    serviceWorker: {
      updatePopup: {
        message: '发现更新🎉',
        button: '刷新',
      },
    },
  },
  markdown: {
    config: (md: any) => {
      md.use(require('markdown-it-task-checkbox'))
    }
  }
}
