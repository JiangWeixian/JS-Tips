(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{596:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"js-基本类型-valueof-tostring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-基本类型-valueof-tostring"}},[t._v("#")]),t._v(" JS - 基本类型 valueof&tostring")]),t._v(" "),s("blockquote",[s("p",[t._v("主要用于"),s("code",[t._v("==")]),t._v("或者其余类型变换的情况")])]),t._v(" "),s("h2",{attrs:{id:"规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#规则"}},[t._v("#")]),t._v(" 规则")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("valueof & toString")]),t._v("这些都是可以被重写的。\n"),s("ul",[s("li",[s("code",[t._v("valueof")]),t._v("其实是往 "),s("strong",[t._v("Number类型转换")])]),t._v(" "),s("li",[s("code",[t._v("toString")]),t._v("其实是往 "),s("strong",[t._v("String类型转换")])])])]),t._v(" "),s("li",[t._v("比较转换规则见"),s("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Books/tree/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH3-%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS高程-基本类型比较规则设定"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"基本类型-valueof-tostring全记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本类型-valueof-tostring全记录"}},[t._v("#")]),t._v(" 基本类型 - valueof&tostring全记录")]),t._v(" "),s("p",[t._v("数据类型初始化方式见"),s("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B-%E5%80%BC%E7%B1%BB%E5%9E%8B.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS-基本类型-值类型"),s("OutboundLink")],1),t._v("，其中提到三种方式分别为：")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newa "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此方式和下面方式对于传递数据，涉及到类型转换，至于转换得到什么结果。此时需要联合来看")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" numa "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("会进行共同说明！以下先讨论 "),s("strong",[t._v("值类型")])]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("Boolean")]),t._v("(举例说明) -")]),t._v(" "),s("p",[s("strong",[t._v("字面类型")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false同样")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结果true")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 结果"true"')]),t._v("\n")])])]),s("p",[s("strong",[t._v("new关键字")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// valueOf() or toString()结果要根据由下面规则转换得到")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结果true")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 结果"true"')]),t._v("\n")])])]),s("p",[t._v("其中"),s("code",[t._v("new Boolean(xx)")]),t._v("对于"),s("code",[t._v("xx")]),t._v("可能涉及到类型转换。转换规则是"),s("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS-falsy%26turthy.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS-falsy&truthy规则"),s("OutboundLink")],1),t._v("。转换得到的结果为 "),s("strong",[t._v("Boolean(xx根据"),s("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS-falsy%26turthy.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS-falsy&truthy规则"),s("OutboundLink")],1),t._v("得到结果)")]),t._v("，所以"),s("code",[t._v("a")]),t._v("是个"),s("code",[t._v("object")]),t._v("，然后括号内部结果是"),s("code",[t._v("true or false")]),t._v("(来自xx根据"),s("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS-falsy%26turthy.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS-falsy&truthy规则"),s("OutboundLink")],1),t._v("得到结果)")]),t._v(" "),s("p",[s("strong",[t._v("数据类型")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// valueOf() or toString()结果要根据由下面规则转换得到")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结果true")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 结果"true"')]),t._v("\n")])])]),s("p",[t._v("和上面"),s("code",[t._v("new")]),t._v("不同点在于，"),s("code",[t._v("a")]),t._v("不再是一个"),s("code",[t._v("object")]),t._v("，其为根据"),s("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS-falsy%26turthy.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS-falsy&truthy规则"),s("OutboundLink")],1),t._v("得到结果。因此"),s("code",[t._v("new Boolean(xx) = new Boolean(Boolean(xx))")])])])]),t._v(" "),s("p",[t._v("这里可以小小总结下：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("因为"),s("code",[t._v("new some(xx) or some(xx)")]),t._v("如果"),s("code",[t._v("xx")]),t._v("数据类型不等于"),s("code",[t._v("some")]),t._v("。那么就要转换，"),s("code",[t._v("some = Boolean")]),t._v("就是 "),s("strong",[t._v("falsy&truthy规则")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("经过了"),s("code",[t._v("var a = new some(xx) or var a = some(xx)")]),t._v("之后，"),s("code",[t._v("a.valueOf()")]),t._v("就是"),s("code",[t._v("xx")]),t._v("经过"),s("code",[t._v("xx->some")]),t._v("转化规则之后的数值，假设是"),s("code",[t._v("yy")]),t._v("。"),s("code",[t._v("a.toString()")]),t._v("就是再"),s("code",[t._v("yy")]),t._v("外面加上引号即"),s("code",[t._v('"yy"')]),t._v("。"),s("strong",[t._v("至于xx->some转换规则是什么？")])]),t._v(" "),s("blockquote",[s("p",[t._v("由于对于引用类型来说，通过"),s("code",[t._v("new some(xx) or some(xx)")]),t._v("其实是创建对象，而不是类型转换。"),s("strong",[t._v("这里的"),s("code",[t._v("some")]),t._v("指的是"),s("code",[t._v("number or string")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("(number)xx->xx.valueof(): 如果得到"),s("code",[t._v("object or NaN")]),t._v("。则xx->xx.toString()，得到的结果，如果可以转换为数字就是数字，如果不能够转换为数字就是"),s("code",[t._v("NaN")]),t._v("。这里其实也好理解，因为"),s("code",[t._v("boolean or string -> number")]),t._v("转换结果都是可以知道的，"),s("strong",[t._v("对于引用类型，Object or Array无论通过哪种方式(new or 字面量类型)创建都是得到"),s("code",[t._v("object")]),t._v("。那么就和其字面类型声明就没有区别，此时见"),s("a",{attrs:{href:""}},[t._v("引用类型转换规则")])]),t._v("。因此这部分可以直接跳到引用类型部分。")])]),t._v(" "),s("blockquote",[s("p",[t._v("(string)xx->xx.toString()")])])])]),t._v(" "),s("p",[s("strong",[t._v("引用类型")])]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("Array")]),t._v(" -")]),t._v(" "),s("p",[s("strong",[t._v("字面量类型")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结果为[1,2]")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 结果为"1,2"')]),t._v("\n")])])]),s("p",[t._v("如果是以上情况回到值类型中，很明显"),s("code",[t._v('"1,2"->number')]),t._v("结果为"),s("code",[t._v("NaN")])]),t._v(" "),s("p",[s("strong",[t._v("new")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意传入不同参数数目是不同的具体见MDN")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结果为[7,7]")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 结果为"7,7" 基本也就是内部数据内容,拼接了。')]),t._v("\n")])])]),s("p",[t._v("在"),s("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS-Array-%E5%B0%8F%E5%9D%91.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS-Array坑"),s("OutboundLink")],1),t._v("中提到如果"),s("code",[t._v("array index")]),t._v("上的数据是未申明的状态。那么"),s("code",[t._v("toString")]),t._v("的到结果是"),s("code",[t._v(",,")]),t._v("。这和"),s("code",[t._v("index")]),t._v("上申明一个"),s("code",[t._v("undefined")]),t._v("结果是不一样的。")]),t._v(" "),s("p",[s("code",[t._v("Array(3)")]),t._v("声明的结果也是一样的。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("{}")])]),t._v(" "),s("p",[s("strong",[t._v("字面量类型")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结果为{index: 1, name: {index: 2}}")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 结果为"[object Object]"')]),t._v("\n")])])]),s("p",[s("strong",[t._v("注意可以通过"),s("code",[t._v("new object or object")]),t._v("创建"),s("code",[t._v("array")]),t._v("。此种情况下，就要根据"),s("code",[t._v("Array")]),t._v("的规则来了。")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("function")])]),t._v(" "),s("p",[s("strong",[t._v("字面量类型")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结果为ƒ () {console.log(1)}")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 结果为"function () {console.log(1)}"')]),t._v("\n")])])]),s("p",[t._v("至于"),s("code",[t._v("function")]),t._v("通过"),s("code",[t._v("new")]),t._v("创建也是可以做到的(而且能够运行)，至于如何创建，见MDN。")])])]),t._v(" "),s("p",[s("strong",[t._v("题外话")])]),t._v(" "),s("p",[t._v("由于"),s("code",[t._v("new")]),t._v("关键字的特点，对于"),s("code",[t._v("var a = new Boolean(xx)")]),t._v("之后对于"),s("code",[t._v("a")]),t._v("如果涉及到"),s("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS-falsy%26turthy.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS-falsy&truthy规则"),s("OutboundLink")],1),t._v("。结果都是"),s("code",[t._v("true")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"valueof-tostring全记录-q-a"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#valueof-tostring全记录-q-a"}},[t._v("#")]),t._v(" valueof&tostring全记录 - Q&A")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("Q&A1 -")]),t._v(" "),s("code",[t._v("array")]),t._v("数据类型可以是多维数组，比如"),s("code",[t._v("[[[2]]] or [[[2,2], [1,1]], [[2,2], [1,1]]]")])]),t._v(" "),s("blockquote",[s("p",[t._v("控制台给出的答案是:"),s("code",[t._v('"2" and "2,2,1,1,2,2,1,1"')]),t._v("。所以"),s("code",[t._v("toString")]),t._v("会把里面的数据全部取出来拼接在一起。")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Q&A2 -")]),t._v(" 以上"),s("code",[t._v("valueof and tostring")]),t._v("都是在变量名上面调用。那么"),s("code",[t._v("valueof and tostring")]),t._v("可以对等式右边调用吗？例如"),s("code",[t._v("[].toString")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只测试tostring一种情况，valueof应该一样")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以下要额外说明")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("对于前三个都是 "),s("strong",[t._v("OK")]),t._v("的。没啥大问题。")]),t._v(" "),s("p",[t._v("后面两个为什么要特别说明！因为"),s("code",[t._v("{}")]),t._v("可以是函数作用域或者是块作用域。所以对于"),s("code",[t._v("{}.toString()")]),t._v("显然是被认为了作用域。("),s("code",[t._v("{index: 1}.toString()")]),t._v("同样错误，看来对于"),s("code",[t._v("{}")]),t._v("是无法直接调用"),s("code",[t._v("toString")]),t._v("，除非赋值给一个变量)")]),t._v(" "),s("p",[s("code",[t._v("3.toString()")]),t._v("同样也是错误的，这是因为"),s("code",[t._v("3.")]),t._v("可以作为一个合法数字，这里显然"),s("code",[t._v("JS")]),t._v("解释器分离为"),s("code",[t._v("3. and toString")]),t._v("。如果是"),s("code",[t._v("3..toSting()")]),t._v("就没有问题了，因为"),s("code",[t._v("3. and .toString()")]),t._v("正好分离为两个合法的代码。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Q&A3 -")]),t._v(" "),s("code",[t._v("null and undefine")])]),t._v(" "),s("blockquote",[s("p",[t._v("这两个没有"),s("code",[t._v("valueof or tostring")]),t._v("。所以要单独记住她转化的结果，"),s("code",[t._v("valueof: 0")]),t._v("和"),s("code",[t._v("toString: 'null' and 'undefine'")])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);