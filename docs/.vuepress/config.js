const menus = require('../utils/menus')

console.log(menus.getMenus())

module.exports = {
  title: 'JS-Tips',
  description: '前端基础',
  head: [
    [ 'link', { rel: 'icon', href: '/favicon.png', type: 'image/x-icon' } ],
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '目录', link: '/menus/' },
      { text: 'Github', link: 'https://github.com/JiangWeixian/JS-Tips/' },
    ],
    sidebar: {
      // ...menus.getMenus(),
      // '/Nodejs/': [
      //   '',     /* /foo/ */
      //   'Nodejs-fs',  /* /foo/one.html */
      // ],
      '/Nodejs/': [
        '',
        // 'Node.js-url&queryString',
        'Nodejs-fs',
        'Nodejs-http',
        'Nodejs-path',
        'Nodejs-readline',
        'Nodejs-util',
        'Nodejs-同步异步-事件-流',
      ],
      // '/Webpack/': [
      //   '',     /* /foo/ */
      //   'sourcemap',  /* /foo/one.html */
      // ],
      // '/Grammar/': [
      //   '',     /* /foo/ */
      //   'JS-Number-maxvalue相关',  /* /foo/one.html */
      // ],
      // '/Menus': [
      //   '',
      // ]
    }
    // sidebar: menus.getMenus(),
  }
}
