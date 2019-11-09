import { repo } from '../config'

module.exports = {
  title: 'JS-Tips',
  base: `/${repo}/`,
  description: '前端基础',
  plugins: [
    [
      '@vuepress/blog',
      {
        frontmatters: [
          {
            // Unique ID of current classification
            id: 'tag',
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ['tag'],
            // Path of the `entry page` (or `list page`)
            path: '/tag/',
            // Layout of the `entry page`
            layout: 'Tags',
            // Layout of the `scope page`
            scopeLayout: 'Tag'
          },
        ],
      },
    ],
    ['vuepress-plugin-code-copy', true],
    [
      'vuepress-plugin-autometa',
      { 
        author: {
          name   : 'jiangweixian',
          twitter: 'jiangweixian',
        }
      }
    ],
    [
      'gitalk-maker',
      {
        gitalkConfig: {
          clientID: '7acb66d273be3958c1dd',
          clientSecret: 'a1735bdbd0426bd65558bc302f58de44d42ba116',
          repo: 'JS-Tips',
          owner: 'JiangWeixian',
          admin: ['JiangWeixian'],
          // id: location.pathname, // 无法配置默认用 location.pathname
          distractionFreeMode: false, // Facebook-like distraction free mode
        },
      },
    ],
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: 'img',
        delay: 1000,
        options: {
          margin: 24,
          background: 'rgba(0, 0, 0, 0.6)',
          scrollOffset: 0,
        },
      },
    ],
    ['vuepress-plugin-smooth-scroll']
  ],
  head: [
    [ 'link', { rel: 'icon', href: '/favicon.png', type: 'image/x-icon' } ],
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '技术栈', link: '/Guide/' },
      { text: '目录', link: '/posts/' },
      { text: 'CHANGELOG', link: '/CHANGELOG.html' },
      { text: 'Github', link: 'https://github.com/JiangWeixian/JS-Tips/' },
    ],
    sidebar: 'auto',
    lastUpdated: true,
  },
  markdown: {
    extendMarkdown: (md: any) => {
      md.use(require('markdown-it-task-lists'))
    }
  }
}
