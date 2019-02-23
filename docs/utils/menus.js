"use strict";
exports.__esModule = true;
var config_1 = require("./config");
var formater_1 = require("./formater");
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
    valildFolders.forEach(function (dirpath) {
        var _files = fs
            .readdirSync(dirpath)
            .filter(function (v) { return isMdFiles(v) && v !== 'README.md'; });
        _files = formater_1.amendPathName(_files, dirpath)
            .map(function (v) { return v.slice(0, v.length - 3).trim(); });
        console.log(_files);
        var _folderName = path.basename(dirpath);
        if (!isEmpty(_files)) {
            menus["" + config_1.base + _folderName + config_1.base] = [''].concat(_files);
        }
    });
    return menus;
};
