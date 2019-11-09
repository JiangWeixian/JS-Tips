"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var formater_1 = require("./formater");
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
var isEmpty = require('lodash/isEmpty');
var folders = [];
exports.isDirectory = function (value) {
    return fs.statSync(value).isDirectory();
};
exports.getVaildFolders = function () {
    if (!isEmpty(folders)) {
        return folders;
    }
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
        return exports.isDirectory(v);
    });
    folders = valildFolders;
    return valildFolders;
};
var isMdFiles = function (value) {
    return path.extname(value).toLowerCase() === '.md';
};
exports.getChildMenus = function (dirPath, prefix) {
    var menus = [];
    var _files = fs
        .readdirSync(dirPath);
    _files.forEach(function (e) {
        if (exports.isDirectory(dirPath + "/" + e) && e !== 'node_modules') {
            menus = menus.concat(exports.getChildMenus(dirPath + "/" + e, prefix + "/" + e));
        }
        else {
            var isVaild = isMdFiles(e) && e !== 'README.md';
            isVaild && formater_1.amendPathName([e], dirPath);
            isVaild && menus.push(prefix + "/" + e.slice(0, e.length - 3).trim());
        }
    });
    return menus;
};
exports.getMenus = function () {
    var valildFolders = exports.getVaildFolders();
    var menus = {};
    valildFolders.forEach(function (dirpath) {
        var _files = fs
            .readdirSync(dirpath);
        var _folders = _files.filter(function (v) { return exports.isDirectory(dirpath + "/" + v); });
        _files = _files.filter(function (v) { return isMdFiles(v) && v !== 'README.md'; });
        _files = formater_1.amendPathName(_files, dirpath)
            .map(function (v) { return v.slice(0, v.length - 3).trim(); });
        var _folderName = path.basename(dirpath);
        _files = [''].concat(_files);
        menus[formater_1.createRouterUrl(_folderName)] = _files;
        if (!isEmpty(_folders)) {
            var childMenus_1 = [];
            _folders.forEach(function (e) {
                childMenus_1 = childMenus_1.concat(exports.getChildMenus(dirpath + "/" + e, e));
            });
            if (!isEmpty(childMenus_1)) {
                menus[formater_1.createRouterUrl(_folderName)] = _files.concat(childMenus_1);
            }
        }
    });
    return menus;
};
