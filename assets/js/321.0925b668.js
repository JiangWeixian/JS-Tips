(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{384:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"patterns-观察者发布订阅模式-自定义事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#patterns-观察者发布订阅模式-自定义事件"}},[t._v("#")]),t._v(" Patterns-观察者发布订阅模式-自定义事件")]),t._v(" "),a("blockquote",[a("p",[t._v("JS 观察者模式(也是发布订阅模式) 自定义事件")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#patterns-%E8%A7%82%E5%AF%9F%E8%80%85%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F-%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6"}},[t._v("Patterns-观察者发布订阅模式-自定义事件")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%BB%80%E4%B9%88%E6%98%AF%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6"}},[t._v("什么是自定义事件")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BB%80%E4%B9%88%E6%98%AF%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F"}},[t._v("什么是观察者模式")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6%E6%9E%84%E9%80%A0"}},[t._v("自定义事件构造")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%8E%9F%E7%94%9F%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6"}},[t._v("原生自定义事件")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE"}},[t._v("传递数据")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E9%93%BE%E6%8E%A5"}},[t._v("链接")])])])])])])]),t._v(" "),a("h2",{attrs:{id:"什么是自定义事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是自定义事件"}},[t._v("#")]),t._v(" 什么是自定义事件")]),t._v(" "),a("p",[t._v("类如在原生"),a("code",[t._v("JS")]),t._v("的"),a("code",[t._v("DOM")]),t._v("事件, 可以通过"),a("code",[t._v("addEventlistenr")]),t._v("添加事件, 例如添加"),a("code",[t._v("click")]),t._v("事件.")]),t._v(" "),a("p",[t._v("但是如果我们想要一个"),a("code",[t._v("message")]),t._v("事件(自定义,显然原生JS是做不到的).")]),t._v(" "),a("p",[t._v("模拟"),a("code",[t._v("JS")]),t._v("的"),a("code",[t._v("DOM")]),t._v("事件方式, 我们能够实现自定义事件绑定.")]),t._v(" "),a("h2",{attrs:{id:"什么是观察者模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是观察者模式"}},[t._v("#")]),t._v(" 什么是观察者模式")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("vue")]),t._v("中第一次接触到这个概念.")]),t._v(" "),a("ol",[a("li",[t._v("我们有一堆数据,很多组件需要他. 将需要它的组件放在一个数组内.(订阅过程)")]),t._v(" "),a("li",[t._v("当数据更新的时候, 通知所有需要数据的组件(发布过程)")]),t._v(" "),a("li",[t._v("通知之后, 至于干什么可能是订阅组件自发的行为")])]),t._v(" "),a("h2",{attrs:{id:"自定义事件构造"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义事件构造"}},[t._v("#")]),t._v(" 自定义事件构造")]),t._v(" "),a("blockquote",[a("p",[t._v("通过自己构造类来触发")])]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hander"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 中间是触发过程")]),t._v("\ntarget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("hander"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("流程可以总结如下:")]),t._v(" "),a("ol",[a("li",[t._v("添加事件")]),t._v(" "),a("li",[t._v("触发事件")]),t._v(" "),a("li",[t._v("移除事件")])]),t._v(" "),a("p",[t._v("首先, 要明确触发事件, 原生DOM操作可以实现. 自定义事件却无法实现.")]),t._v(" "),a("p",[t._v("此时, 自定义事件需要什么我们已经知道了.")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("on")]),t._v(" - 添加事件, 接受事件类型以及函数")]),t._v(" "),a("li",[a("code",[t._v("emit")]),t._v(" - 触发事件, 这个需要我们自己写. 因为没有DOM事件支持")]),t._v(" "),a("li",[a("code",[t._v("remove")]),t._v(" - 移除事件, 接受事件类型, 以及函数两个参数")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("target")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    handlers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件对象, 键值对形式. 键是事件类型, 值是函数. 相当于在target上对某事件类型添加了处理函数    ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("先是添加事件, 原生"),a("code",[t._v("addEventLinstener")]),t._v("特点:")]),t._v(" "),a("ol",[a("li",[t._v("可以多次添加, 且不会覆盖之前的函数")]),t._v(" "),a("li",[t._v("接受两个参数")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_onHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("payload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'this is a handler'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ntarget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("on")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handlers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[object Undefined]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handlers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[object Function]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handlers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("其次, 触发事件")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("emit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" eventHandlers\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handlers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[object Array]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handlers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        eventHandlers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handlers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        eventHandlers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("这里可以解释为什么和订阅模式(或者观察者模式)相关")]),t._v(", 因为"),a("code",[t._v("handlers[type]")]),t._v("内部函数列表就相当于是订阅人员. 一旦触发就要调用里面的函数.")]),t._v(" "),a("p",[t._v("最后移除事件, 接受两个参数")]),t._v(" "),a("ol",[a("li",[t._v("第一个参数实现传递事件类型")]),t._v(" "),a("li",[t._v("第二个参数, 移除绑定在这个"),a("code",[t._v("target")]),t._v("上改事件的哪一个函数")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("remove")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handlers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[object Array]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handlers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" eventHandlers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findIndex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" handler\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        eventHandlers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"原生自定义事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原生自定义事件"}},[t._v("#")]),t._v(" 原生自定义事件")]),t._v(" "),a("blockquote",[a("p",[t._v("MDN上有一个"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Event",target:"_blank",rel:"noopener noreferrer"}},[t._v("event"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent",target:"_blank",rel:"noopener noreferrer"}},[t._v("customevent"),a("OutboundLink")],1),t._v("方法，可以设置自定义事件。算是官方版本的发布订阅模式，绑定在元素上面。")])]),t._v(" "),a("ul",[a("li",[t._v("通过"),a("code",[t._v("new event")]),t._v("创建例子(或者是"),a("code",[t._v("customevent")]),t._v("，后者具有更高的扩展性)")]),t._v(" "),a("li",[a("code",[t._v("addEventlistener")]),t._v("添加例子")]),t._v(" "),a("li",[a("code",[t._v("dispatchEvent")]),t._v("触发例子")])]),t._v(" "),a("p",[t._v("就像是下面这样：")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" event "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Listen for the event.")]),t._v("\nelem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Dispatch the event.")]),t._v("\nelem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Creating_and_triggering_events",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN-官方例子"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"传递数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传递数据"}},[t._v("#")]),t._v(" 传递数据")]),t._v(" "),a("blockquote",[a("p",[t._v("个人理解")])]),t._v(" "),a("p",[a("code",[t._v("customevent")]),t._v("可以在事件绑定的时候初始化数据，但是没有办法再触发事件的时候传递数据(也就是没有办法保证数据的实时更新)")]),t._v(" "),a("p",[t._v("测试了可能的传递数据方案：")]),t._v(" "),a("ol",[a("li",[t._v("修改event属性不行(在已经新建的情况下)")]),t._v(" "),a("li",[t._v("全局变量应该是可以的，更进一步的话就是设置一个全局的状态机，然后通过状态机里面的数据")])]),t._v(" "),a("h3",{attrs:{id:"链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/entry/5ad070b56fb9a028db591d49",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多例子"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);