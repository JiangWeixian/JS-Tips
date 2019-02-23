"use strict";
exports.__esModule = true;
var config_1 = require("./config");
var path = require("path");
var fs = require("fs");
var isEmpty = require('lodash/isEmpty');
var folders = [];
var isDirectory = function (value) {
    return fs.statSync(value).isDirectory();
};
var getVaildFolders = function () {
    var allFolders = fs.readdirSync(config_1.rootPath);
    var valildFolders = allFolders
        .filter(function (v) {
        var isVaild = config_1.ignoreFolders.indexOf(v) === -1;
        return isVaild;
    })
        .map(function (v) {
        return config_1.rootPath + "/" + v;
    })
        .filter(function (v) {
        return isDirectory(v);
    });
    folders = valildFolders;
    return valildFolders;
};
var isMdFiles = function (value) {
    return path.extname(value).toLowerCase() === '.md';
};
exports.getMenus = function () {
    var valildFolders = !isEmpty(folders) && folders || getVaildFolders();
    var menus = {};
    valildFolders.forEach(function (v) {
        var _files = fs
            .readdirSync(v)
            .filter(function (v) { return isMdFiles(v) && v !== 'README.md'; })
            .map(function (v) { return v.slice(0, v.length - 3).trim(); });
        var _folderName = path.basename(v);
        if (!isEmpty(_files)) {
            menus["" + config_1.base + _folderName + config_1.base] = [''].concat(_files);
        }
    });
    return menus;
};
