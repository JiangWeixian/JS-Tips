const pkg = require('../../package.json')

module.exports = {
  title: 'Jiangweixian',
  base: `/${pkg.repository.name}/`,
  plugins: [
    [
      '@vuepress/blog',
      {
        frontmatters: [
          {
            // Unique ID of current classification
            id: 'tag',
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ['tag', 'tag1', 'tag2'],
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
    [ 'link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap' }]
  ],
  themeConfig: {
    nav: [
      { text: 'HOME', link: '/' },
      { text: 'STACKS', link: '/guide/' },
      { text: 'BLOG', link: '/posts/' },
      { text: 'CHANGELOG', link: '/CHANGELOG.html' },
      { text: 'Github', link: 'https://github.com/JiangWeixian/JS-Tips/' },
    ],
    sidebar: 'auto',
    lastUpdated: true,
  },
  markdown: {
    extendMarkdown: (md) => {
      md.use(require('markdown-it-task-lists'))
    }
  },
  dest: 'public'
}
