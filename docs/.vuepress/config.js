"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var menus_1 = require("../utils/menus");
module.exports = {
    title: 'JS-Tips',
    description: '前端基础',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png', type: 'image/x-icon' }],
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '目录', link: '/menus/' },
            { text: 'Github', link: 'https://github.com/JiangWeixian/JS-Tips/' },
        ],
        sidebar: __assign({}, menus_1.getMenus(), { '/Guide/': [
                '',
            ] })
    }
};
