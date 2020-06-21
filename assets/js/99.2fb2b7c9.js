(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{400:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"单例模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单例模式"}},[t._v("#")]),t._v(" 单例模式")]),t._v(" "),a("blockquote",[a("p",[t._v("只能够被创建一次")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F"}},[t._v("单例模式")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F"}},[t._v("什么是单例模式？")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%AE%9E%E7%8E%B0%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F%E6%89%80%E9%9C%80%E7%9F%A5%E8%AF%86"}},[t._v("实现单例模式所需知识")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E4%B8%80%E6%AD%A5%E6%AD%A5%E6%9D%A5"}},[t._v("一步步来！")])])])])]),t._v(" "),a("h2",{attrs:{id:"什么是单例模式？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是单例模式？"}},[t._v("#")]),t._v(" 什么是单例模式？")]),t._v(" "),a("p",[t._v("理解起来很简单。就像是他名字那样!")]),t._v(" "),a("p",[t._v("在全局空间中只有一个实例被创建，假设是"),a("code",[t._v("singleton")]),t._v("。那么下次想要再一次创建的时候，就返回"),a("strong",[t._v("之前那个")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"实现单例模式所需知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现单例模式所需知识"}},[t._v("#")]),t._v(" 实现单例模式所需知识")]),t._v(" "),a("ol",[a("li",[t._v("闭包概念 - 即在一个"),a("code",[t._v("parent")]),t._v("函数内部返回一个函数"),a("code",[t._v("child")]),t._v("。这个"),a("code",[t._v("child")]),t._v("函数能够访问到"),a("code",[t._v("parent")]),t._v("函数的设置变量。例如：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" params\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// code...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("可以预见返回的函数是能够使用"),a("code",[t._v("params")]),t._v("这个变量的。")]),t._v(" "),a("p",[a("code",[t._v("params")]),t._v("作用在于可以用来管理我们的"),a("strong",[t._v("单例")]),t._v("，使他只能够被创建一次。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("分离业务和抽象逻辑")])]),t._v(" "),a("ul",[a("li",[t._v("业务 - 就是创建一个具体的类"),a("code",[t._v("classsingle")]),t._v("(或者是对象)")]),t._v(" "),a("li",[t._v("单例的抽象逻辑 - 构造一个函数"),a("code",[t._v("getsingle")]),t._v("来管理这个类(作为这个类的入口函数)。"),a("strong",[t._v("如何管理？"),a("strong",[t._v("很重要的一点，每次创建"),a("code",[t._v("classsingle")]),t._v("都是通过这个函数来创建的。而不是")]),t._v("new classsingle")]),t._v("。")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("通过两者组合构造适用"),a("code",[t._v("classsingle")]),t._v("的单例模式。")])]),t._v(" "),a("p",[t._v("以上步骤需要做到：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("getsingle")]),t._v("可以复用")]),t._v(" "),a("li",[a("code",[t._v("classingle")]),t._v("可以任意变化")])]),t._v(" "),a("h2",{attrs:{id:"一步步来！"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一步步来！"}},[t._v("#")]),t._v(" 一步步来！")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("构造一个具体的类")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("classsingleA")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这一步不是必须")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// code...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("抽象逻辑"),a("code",[t._v("getsingle")])]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSingle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" results\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" results "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("results "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("当"),a("code",[t._v("classsingleA")]),t._v("被作为参数传递的时候，可以实现单例")]),t._v(" "),a("li",[t._v("这里用到了闭包的概念，应为闭包，所以"),a("code",[t._v("results")]),t._v("结果可以被保存。")])])])]),t._v(" "),a("p",[t._v("这里有一个比较比较疑惑的一点？就是如何复用"),a("code",[t._v("getSingle")]),t._v("!")]),t._v(" "),a("ul",[a("li",[t._v("如果我们执行"),a("code",[t._v("getSingle()")]),t._v("得到的是一个待执行函数")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("组合使用，适配"),a("code",[t._v("classsingleA")]),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" createSingleA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSingle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("classsinleA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" singleA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ceateSingleA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'siglea'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// singleA => 'singlea'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" singleA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ceateSingleA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sigleb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// singleA => 'singlea'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 而且重要的是：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" createSingleB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSingle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("classsinleB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 并不会影响ceateSingleA")]),t._v("\n")])])]),t._v("以上就是一个单例子模式。")])]),t._v(" "),a("p",[t._v("构建过程中，仍旧有几点十分疑惑？")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("var createSingleA = getSingle(classsinleA)")]),t._v("和"),a("code",[t._v("var createSingleB = getSingle(classsinleB)")]),t._v("都使用到了"),a("code",[t._v("getSingle")]),t._v("。为什么不会相互"),a("strong",[t._v("污染results")]),t._v("?")])]),t._v(" "),a("ul",[a("li",[t._v("我想这大概就是闭包的威力")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("或者可以另外一种角度来解释，首先"),a("code",[t._v("getSingle()")]),t._v("返回的是一个"),a("code",[t._v("function")]),t._v("。那么就正常理解来说")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("createSingleA")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("createSingleB")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),a("p",[t._v("两者自然不同")])]),t._v(" "),a("li",[a("p",[t._v("想要返回一个实例，可以通过"),a("code",[t._v("return results || (results = new fn(arguments))")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);