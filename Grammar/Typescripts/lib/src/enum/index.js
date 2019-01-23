"use strict";
var TestNumber;
(function (TestNumber) {
    TestNumber[TestNumber["x"] = 0] = "x";
    TestNumber[TestNumber["y"] = 1] = "y";
    TestNumber[TestNumber["z"] = 2] = "z";
})(TestNumber || (TestNumber = {}));
var NumX = TestNumber.x;
console.log(NumX);
// Below is not number enum
var TestStr;
(function (TestStr) {
    TestStr[TestStr["square"] = 0] = "square";
    TestStr[TestStr["circle"] = 1] = "circle";
})(TestStr || (TestStr = {}));
var s = {
    kind: TestStr.square
};
console.log(s);
var TestStrMember;
(function (TestStrMember) {
    TestStrMember["tri"] = "tri";
    TestStrMember["line"] = "line";
})(TestStrMember || (TestStrMember = {}));
var sm = {
    kind: TestStrMember.line
};
console.log(sm);
