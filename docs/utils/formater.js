"use strict";
exports.__esModule = true;
// FIXME: rm this files below
var fs = require("fs");
var path = require("path");
var config_1 = require("./config");
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
    return valildFolders;
};
var isMdFiles = function (value) {
    return path.extname(value).toLowerCase() === '.md';
};
var test = 'C:\\cygwin64\\home\\jiangwei\\documents\\JS-Tips\\docs/Nodejs';
var _files = fs
    .readdirSync(test)
    .filter(function (v) { return isMdFiles(v) && v !== 'README.md'; });
exports.replaceInvalidCharter = function (str) {
    var regex = /&/g;
    return str.replace(regex, '-');
};
exports.amendPathName = function (fileNames, folderName) {
    var newFileNames = [];
    fileNames.forEach(function (fileName) {
        var newFileName = exports.replaceInvalidCharter(fileName);
        fs.renameSync(folderName + "/" + fileName, folderName + "/" + newFileName);
        newFileNames.push(newFileName);
    });
    return newFileNames;
};
console.log(exports.amendPathName(_files, test));
