(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{522:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ts-enum"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ts-enum","aria-hidden":"true"}},[t._v("#")]),t._v(" TS-Enum")]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("DOC")]),t._v("提到的例子并没有在"),s("a",{attrs:{href:""}},[t._v("lib-enum")]),t._v("中得到验证。")]),t._v(" "),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" Test "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("一般来说就是初始化为数字"),s("code",[t._v("x = 0, y = 1")]),t._v("，"),s("strong",[t._v("而且是递增的")]),t._v("。（同样可以进行数字1的初始化）")]),t._v(" "),s("p",[t._v("当然也可以初始化为字符串，这时候就没有 "),s("strong",[t._v("递增的效果了。")])]),t._v(" "),s("p",[t._v("那么就可以通过"),s("code",[t._v("Test.x")]),t._v("进行使用了，但是即使"),s("code",[t._v("x")]),t._v("此时是"),s("code",[t._v("number")]),t._v("，在使用的使用也必须定义类型了"),s("code",[t._v("Test")]),t._v("而不是"),s("code",[t._v("number")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"enum可以得到什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enum可以得到什么","aria-hidden":"true"}},[t._v("#")]),t._v(" enum可以得到什么")]),t._v(" "),s("p",[t._v("如果"),s("code",[t._v("enum")]),t._v("定义")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" status "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("那么其实"),s("code",[t._v("status")]),t._v("的输出为")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("0: a\n1: b\na\nb\n")])])]),s("p",[t._v("有的时候想要把"),s("code",[t._v("enum")]),t._v("变为正式真实"),s("code",[t._v("array")]),t._v("。")]),t._v(" "),s("p",[t._v("可以通过"),s("code",[t._v("const arr = Object.keys(status).map(e => status[k])")]),t._v("。此时得到"),s("code",[t._v("[0, 1, a, b]")]),t._v("。之后可以通过"),s("code",[t._v("isString")]),t._v("判断得到我们想要的"),s("code",[t._v("key")]),t._v("值。")])])},[],!1,null,null,null);a.default=n.exports}}]);