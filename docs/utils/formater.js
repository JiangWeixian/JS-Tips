"use strict";
exports.__esModule = true;
var fs = require("fs");
/**
 * replace `&` to `-`
 * @params str<string>: filename
 */
exports.replaceInvalidCharter = function (str) {
    var regex = /&|\+|@/g;
    return str.replace(regex, '-');
};
/**
 * rename file by replaceInvaliCharter
 * @params fileNames<string[]>: all files in [folderName]
 * @params foderName<string>: parent folder of fileNames
 * @params callback<func>: amend callback funcs
 */
exports.amendPathName = function (fileNames, folderName, callback) {
    if (callback === void 0) { callback = exports.replaceInvalidCharter; }
    var newFileNames = [];
    fileNames.forEach(function (fileName) {
        var newFileName = callback(fileName);
        fs.renameSync(folderName + "/" + fileName, folderName + "/" + newFileName);
        newFileNames.push(newFileName);
    });
    return newFileNames;
};
