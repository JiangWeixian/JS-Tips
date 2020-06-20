(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{400:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"代理模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代理模式"}},[t._v("#")]),t._v(" 代理模式")]),t._v(" "),a("blockquote",[a("p",[t._v("第三方协助")])]),t._v(" "),a("h2",{attrs:{id:"什么是代理模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是代理模式"}},[t._v("#")]),t._v(" 什么是代理模式")]),t._v(" "),a("p",[t._v("第三方介入是很重要的的一点。但是要明白第三方是在那一层次介入。就如同下图说明情况。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/JiangWeixian/JS-Books/blob/master/JS%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F(Desgin-Patterns)/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F.md",alt:"代理模式"}})]),t._v(" "),a("p",[t._v("介入时间点也可以发现是A向B发送请求的阶段。")]),t._v(" "),a("p",[t._v("假设分别是A,B以及代理Proxy，就我的理解：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("A")]),t._v("应该是用户，当它想要实现交互的首")]),t._v(" "),a("li",[a("code",[t._v("B")]),t._v("就是某个具体功能，而"),a("code",[t._v("B")]),t._v("的具体功能被"),a("code",[t._v("proxy")]),t._v("代理了")])]),t._v(" "),a("h2",{attrs:{id:"代理模式特点-功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代理模式特点-功能"}},[t._v("#")]),t._v(" 代理模式特点&功能")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("proxy")]),t._v("应该和"),a("code",[t._v("B")]),t._v("有同样的接口。")]),t._v(" "),a("p",[t._v("如果就这点来看，其实有一个疑惑。既然接口一样为啥要实现代理？代理需要做什么？")]),t._v(" "),a("p",[t._v("当"),a("code",[t._v("A")]),t._v("发送信号给"),a("code",[t._v("B")]),t._v("的时候，中间经过了"),a("code",[t._v("proxy")]),t._v("。"),a("code",[t._v("proxy")]),t._v("需要给"),a("code",[t._v("B")]),t._v("过滤一些额外请求。也就是比"),a("code",[t._v("B")]),t._v("多了一些弯弯绕。")]),t._v(" "),a("p",[a("strong",[t._v("由过滤这点可以体现一些设计思想，就是一个模块只做一件事情。如果B是要实现加载图片，那么预加载图片就不会在这里体现，而是在"),a("code",[t._v("proxy")]),t._v("内部体现。")])])]),t._v(" "),a("li",[a("p",[t._v("结合"),a("code",[t._v("JavaScript")]),t._v("的特点可以实现以下")]),t._v(" "),a("ul",[a("li",[t._v("结合"),a("code",[t._v("return function + settimeout")]),t._v("可以实现延迟 - 比如将"),a("code",[t._v("A")]),t._v("的交互动作保存起来，通过一个"),a("code",[t._v("settimeout")]),t._v("实现一个延迟函数。")]),t._v(" "),a("li",[t._v("实现"),a("strong",[t._v("懒加载")]),t._v(" - 类似"),a("code",[t._v("vue")]),t._v("中当我们需要某个模块的时候，才会将某个模块加载进来")]),t._v(" "),a("li",[t._v("结合"),a("code",[t._v("return function")]),t._v("可以实现缓存")])])])]),t._v(" "),a("h2",{attrs:{id:"代理实现距离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代理实现距离"}},[t._v("#")]),t._v(" 代理实现距离")]),t._v(" "),a("p",[t._v("首先我们要知道设计代理需要遵循的原则")]),t._v(" "),a("ol",[a("li",[t._v("代理和"),a("code",[t._v("B")]),t._v("接口一样或者有更多接口")]),t._v(" "),a("li",[t._v("代理需要过滤更多"),a("code",[t._v("A")]),t._v("请求")])]),t._v(" "),a("h3",{attrs:{id:"实现延迟"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现延迟"}},[t._v("#")]),t._v(" 实现延迟")]),t._v(" "),a("p",[t._v("延迟关键也是")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("settimeout")])]),t._v(" "),a("li",[a("code",[t._v("return function")])])]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("proxydelay")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cache "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      timer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n      \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        timer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("settimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("funcA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cleartimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            timer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n            cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然后调用"),a("code",[t._v("proxydelay")]),t._v("就可以了。")]),t._v(" "),a("h3",{attrs:{id:"实现懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现懒加载"}},[t._v("#")]),t._v(" 实现懒加载")]),t._v(" "),a("p",[t._v("很好的例子就是浏览器的"),a("code",[t._v("console")]),t._v("。")]),t._v(" "),a("p",[t._v("因为加载"),a("code",[t._v("console")]),t._v("的"),a("code",[t._v(".js")]),t._v("文件可以在打开"),a("code",[t._v("F12")]),t._v("的时候打开，而不是在打开浏览器的时候加载。")]),t._v(" "),a("p",[t._v("不过里面通过"),a("code",[t._v("appendChild")]),t._v("添加"),a("code",[t._v("script")]),t._v("标签。")])])}),[],!1,null,null,null);s.default=e.exports}}]);