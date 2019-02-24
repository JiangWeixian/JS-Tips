"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = /** @class */ (function () {
    function a(name) {
        this.name = name;
    }
    return a;
}());
var b = /** @class */ (function () {
    function b(name) {
        this.name = name;
    }
    return b;
}());
var A = a;
var B = b;
A = B;
var c = /** @class */ (function () {
    function c(name) {
        this.name = 'a';
    }
    return c;
}());
var d = /** @class */ (function (_super) {
    __extends(d, _super);
    function d() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return d;
}(c));
var C = new c();
A = C;
var D = new d();
C = D;
