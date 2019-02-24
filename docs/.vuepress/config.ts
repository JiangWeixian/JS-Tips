import { getMenus } from '../utils/menus'
import { base } from '../config'

module.exports = {
  title: 'JS-Tips',
  base: base,
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
    }
  },
  markdown: {
    config: (md: any) => {
      md.use(require('markdown-it-task-checkbox'))
    }
  }
}
