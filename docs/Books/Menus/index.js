"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils/utils");
var formater_1 = require("../utils/formater");
var config_1 = require("./config");
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var getTemplate = function (pathStr) {
    if (pathStr === void 0) { pathStr = config_1.templatePath; }
    return fs.readFileSync(config_1.templatePath).toString();
};
exports.createLink = function (url, text) {
    return "[" + text + "](" + url + ")";
};
exports.createLI = function (value) {
    return "* " + value;
};
exports.createH2 = function (title) {
    return "## " + title;
};
exports.createUL = function (uls) {
    var arr = uls.map(function (e) {
        return exports.createLI(e);
    });
    return arr.join('\n');
};
exports.createH1Section = function (title, content) {
    var h1 = exports.createH2(title);
    return h1 + '\n\n' + content;
};
exports.createMenus = function (menus) {
    var arr = menus.map(function (e) {
        return exports.createLink(e.url, e.text);
    });
    return exports.createUL(arr);
};
exports.createGuideMenus = function (title) {
    if (title === void 0) { title = '目录'; }
    var folders = utils_1.getVaildFolders()
        .map(function (e) {
        var dirName = path.basename(e);
        return {
            url: formater_1.createRouterUrl(dirName),
            text: dirName
        };
    });
    return exports.createMenus(folders);
};
exports.createGuideReadme = function (fileName) {
    if (fileName === void 0) { fileName = 'README.md'; }
    var menus = exports.createGuideMenus();
    var template = getTemplate();
    var data = template + '\n' + menus;
    fs.writeFileSync(__dirname + "/" + fileName, data);
};
exports.createGuideReadme();
