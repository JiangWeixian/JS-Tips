(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{510:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"npm-axios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-axios"}},[t._v("#")]),t._v(" NPM - axios")]),t._v(" "),s("blockquote",[s("p",[t._v("能做的更多")])]),t._v(" "),s("h2",{attrs:{id:"取消请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#取消请求"}},[t._v("#")]),t._v(" 取消请求")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5b27682f6fb9a00e733f121e",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何取消请求"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("用的地方在于，有些"),s("code",[t._v("API")]),t._v("会设置"),s("code",[t._v("debounce")]),t._v("。这是一种优化避免过多的"),s("code",[t._v("api")]),t._v("请求的方法。")]),t._v(" "),s("p",[s("code",[t._v("axios")]),t._v("支持在该次请求中将上一次请求取消。也是避免重复请求的一种优化方式。")]),t._v(" "),s("p",[s("strong",[t._v("至于原理并没有深究它，大致原理为如果"),s("code",[t._v("cancel")]),t._v("。那么将上一次作为"),s("code",[t._v("cancel-promise reject")])])]),t._v(" "),s("h2",{attrs:{id:"如何不拼接get请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何不拼接get请求"}},[t._v("#")]),t._v(" 如何不拼接Get请求")]),t._v(" "),s("p",[t._v("如果使用了"),s("code",[t._v("axios.get")]),t._v("，很傻的做法是将"),s("code",[t._v("params")]),t._v("拼接然后和请求地址拼接。")]),t._v(" "),s("p",[t._v("更好的做法是：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("axios"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/management/list")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("params "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("这样就可以避免拼接字符串了。")])])}),[],!1,null,null,null);a.default=n.exports}}]);