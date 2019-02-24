"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
exports.base = config_1.base;
var path = require('path');
exports.ignoreFolders = [
    'utils',
    '.vuepress',
    'Menus',
    'Guide'
];
exports.rootPath = path.resolve(__dirname, '../');
exports.routeIndex = '';
