"use strict";
exports.__esModule = true;
var config_1 = require("../utils/config");
var fs = require("fs");
var template = fs.readFileSync(__dirname + '/template.md').toString();
console.log(template);
exports.createLink = function (url) {
    return url;
};
console.log(config_1.base);
