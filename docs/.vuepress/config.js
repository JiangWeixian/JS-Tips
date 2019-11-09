"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
module.exports = {
    title: 'JS-Tips',
    base: "/" + config_1.repo + "/",
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
                    name: 'jiangweixian',
                    twitter: 'jiangweixian',
                }
            }
        ]
    ],
    head: [
        ['link', { rel: 'icon', href: '/favicon.png', type: 'image/x-icon' }],
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
        config: function (md) {
            md.use(require('markdown-it-task-checkbox'));
        }
    }
};
