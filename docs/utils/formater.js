"use strict";
exports.__esModule = true;
exports.replaceInvalidCharter = function (str) {
    var regex = /&/g;
    return str.replace(regex, '-');
};
console.log(exports.replaceInvalidCharter('Nodejs-同步异步&事件&流'));
