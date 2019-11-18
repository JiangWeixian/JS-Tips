(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{590:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"js-如何比较对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-如何比较对象","aria-hidden":"true"}},[t._v("#")]),t._v(" JS - 如何比较对象")]),t._v(" "),s("blockquote",[s("p",[t._v("前置知识")])]),t._v(" "),s("h2",{attrs:{id:"前置知识-为啥有这章节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前置知识-为啥有这章节","aria-hidden":"true"}},[t._v("#")]),t._v(" 前置知识 - 为啥有这章节")]),t._v(" "),s("p",[s("strong",[t._v("其实JavaScript对象是不等于对象的。")])]),t._v(" "),s("p",[t._v("也就是说:")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象不等于对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Numebr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),s("p",[t._v("其实也好理解，因为毕竟"),s("code",[t._v("new")]),t._v("关键字在类实现中使用。用来创建对象，如果"),s("code",[t._v("new")]),t._v("创建的两个实例是相等的。那也就没有比较的 "),s("strong",[t._v("类这个概念的必要")]),t._v("了。")]),t._v(" "),s("p",[s("strong",[t._v("所以基本上通过"),s("code",[t._v("new")]),t._v("实例化的对象都是不相等的")]),t._v(" (自己总结的，如果错误就修改)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{}")]),t._v("应该也是实例化"),s("code",[t._v("Object")]),t._v("实例化一种，所以不相等")]),t._v(" "),s("li",[s("code",[t._v("function")]),t._v("是"),s("code",[t._v("Function")]),t._v("实例化的一种，所以不相等")])]),t._v(" "),s("p",[s("strong",[t._v("一定要和对象复制以及自己和自己的比较区分开来")])]),t._v(" "),s("p",[t._v("对象的复制(但是深度复制是不同的，以下是浅度复制的情况)：")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("p",[t._v("自己和自己比较，这一点在(发布订阅模式中)函数作为参数传递进来的时候有体现。有的时候需要删除一个监听函数。")]),t._v(" "),s("p",[s("strong",[t._v("因此我们可以得到一个结论：")])]),t._v(" "),s("p",[t._v("对象的比较其实在比较内存。而不是比较真正的所含的数据。")]),t._v(" "),s("h2",{attrs:{id:"比较对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#比较对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 比较对象")]),t._v(" "),s("blockquote",[s("p",[t._v("有两个比较标准。一个是比较是不是sameobj，也就是是不是同一块内存地址的不同引用(由复制等操作引用出来的)；还有一种是equalobj，也就是比较内部value是不是相等的。"),s("strong",[t._v("这也是本文需要处理的问题。")])])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("一种思路是递归比较")])]),t._v(" "),s("li",[s("p",[t._v("另一种是转换为字符串比较。"),s("code",[t._v("obj.toSting() or JSON.stringify(obj)")]),t._v("。前者由"),s("a",{attrs:{href:""}},[t._v("valueof&tostring()")]),t._v("汇总可以得到，其实是 "),s("strong",[t._v("任何对象"),s("code",[t._v("toString")]),t._v("得到的结果都是"),s("code",[t._v("[object Object]")])]),t._v("。所以我们这里应该是使用"),s("code",[t._v("JSON.stringify(obj)")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("p",[t._v("局限在于如果属性顺序不同的话。就会出错。")])])])])},[],!1,null,null,null);a.default=e.exports}}]);