(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{347:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"let-const"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let-const"}},[t._v("#")]),t._v(" let&const")]),t._v(" "),a("blockquote",[a("p",[t._v("不要停留在表面")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#letconst"}},[t._v("let&const")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#11-%E5%89%8D%E7%BD%AE%E7%9F%A5%E8%AF%86---%E4%BD%9C%E7%94%A8%E5%9F%9F"}},[t._v("1.1. 前置知识 - 作用域")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#12-%E5%89%8D%E7%BD%AE---%E9%97%AD%E5%8C%85%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F"}},[t._v("1.2. 前置 - 闭包与作用域")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#13-const"}},[t._v("1.3. const")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#14-%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F%E4%B8%8Efunction"}},[t._v("1.4. 块级作用域与function")])])])])]),t._v(" "),a("h2",{attrs:{id:"_1-1-前置知识-作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-前置知识-作用域"}},[t._v("#")]),t._v(" 1.1. 前置知识 - 作用域")]),t._v(" "),a("ul",[a("li",[t._v("全局")]),t._v(" "),a("li",[t._v("函数作用域")])]),t._v(" "),a("p",[t._v("其实"),a("code",[t._v("JavaScript")]),t._v("一致是通过"),a("code",[t._v("{}")]),t._v("这个符号来声明作用域，就像是"),a("code",[t._v("function")]),t._v("申明函数作用域。")]),t._v(" "),a("p",[t._v("但是"),a("code",[t._v("ES6")]),t._v("中，"),a("code",[t._v("const & let")]),t._v("带来了块作用域，所以现在"),a("code",[t._v("let&cosnt")]),t._v("让"),a("code",[t._v("{}")]),t._v("不仅仅局限于上面两个作用域。变成了 "),a("strong",[t._v("块级作用域")]),t._v("。使得块级作用域内数据在离开之后失效。")]),t._v(" "),a("p",[a("strong",[t._v("理解{}是作用域这一点特别重要！")])]),t._v(" "),a("h2",{attrs:{id:"_1-2-前置-闭包与作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-前置-闭包与作用域"}},[t._v("#")]),t._v(" 1.2. 前置 - 闭包与作用域")]),t._v(" "),a("p",[t._v("可见"),a("router-link",{attrs:{to:"/docs/Books/youdotkonwjs/scope-closures/scopeandclosures.html"}},[t._v("youdontkonwjs-闭包与作用域")]),t._v("作为补充。")],1),t._v(" "),a("p",[t._v("现在有了现在闭包不仅仅局限在了上面"),a("code",[t._v("return function")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 6")]),t._v("\n")])])]),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10")]),t._v("\n")])])]),a("p",[t._v("现在以闭包概念来理解为了有不同体现。"),a("router-link",{attrs:{to:"/docs/Books/youdotkonwjs/scope-closures/scopeandclosures.html"}},[t._v("youdontkonwjs-闭包与作用域")]),t._v("中提到"),a("code",[t._v("return function")]),t._v("让外部的变量 "),a("strong",[t._v("拥有引用另外一个作用域的权力")]),t._v("。(这里的作用域指的是函数作用域和块作用域)")],1),t._v(" "),a("p",[t._v("解释之前，再次重申(第一段代码)：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("for(){}")]),t._v("由于"),a("code",[t._v("let")]),t._v("的作用，变成块作用域")]),t._v(" "),a("li",[a("code",[t._v("a[i]")]),t._v("是全局变量，现在有了"),a("code",[t._v("for(){}")]),t._v("内部"),a("code",[t._v("function")]),t._v("，"),a("code",[t._v("function")]),t._v("内部为函数作用域，"),a("strong",[t._v("内部的 "),a("code",[t._v("i")]),t._v("来自另外一个块作用域")]),t._v("，于是"),a("code",[t._v("a[]")]),t._v("对"),a("code",[t._v("for")]),t._v("内部有了引用的权力 - "),a("strong",[t._v("所以闭包了，兄弟")])]),t._v(" "),a("li",[t._v("(很重要的一点)可以发现函数内部变量在这个函数没有执行之前是不会声明内存的")])]),t._v(" "),a("p",[t._v("现在我们执行"),a("code",[t._v("a[i]()")]),t._v("其中某一个函数，(闭包)函数执行开始查找变量"),a("code",[t._v("i")]),t._v("。"),a("code",[t._v("for(){}")]),t._v("也是其查找的作用域之一。所以可以打印"),a("code",[t._v("0~9")]),t._v("。"),a("strong",[t._v("显然i绑定到了10个循环的每一次{}中")])]),t._v(" "),a("p",[t._v("那么第二个代码段呢？")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("for(){}")]),t._v("不是作用域")]),t._v(" "),a("li",[a("code",[t._v("var i and a")]),t._v("都是全局变量，"),a("code",[t._v("function")]),t._v("内部的 "),a("code",[t._v("i")]),t._v("并不是来自块作用域 - 这不是闭包，"),a("strong",[t._v("i不会绑定到了10个循环的每一次{}中")])])]),t._v(" "),a("p",[t._v("执行"),a("code",[t._v("a[i]()")]),t._v("其中某一个函数时候，显然是在全局查找，此时为"),a("code",[t._v("10")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_1-3-const"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-const"}},[t._v("#")]),t._v(" 1.3. const")]),t._v(" "),a("p",[t._v("const作用就是字面意思，但是它到底让什么东西不改变？")]),t._v(" "),a("p",[t._v("文中给出的答案是内存地址，声明赋值的时候给定地址。无论是常量还是对象。")]),t._v(" "),a("p",[a("strong",[t._v("但是改变对象其中某一个数值会报错吗？")])]),t._v(" "),a("p",[t._v("不会！因为这样并没有改变对象地址。只会在重新赋值的时候才会报错。")]),t._v(" "),a("h2",{attrs:{id:"_1-4-块级作用域与function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-块级作用域与function"}},[t._v("#")]),t._v(" 1.4. 块级作用域与function")]),t._v(" "),a("p",[t._v("一般情况下，"),a("code",[t._v("function")]),t._v("只会在全局或者函数作用域中申明。以下这种情况怎么理解：")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("f1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出 1 1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("f1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误")]),t._v("\n")])])]),a("p",[t._v("以前可能会报错。现在不会了。重温以下youdontkonwjs里面提到的：")]),t._v(" "),a("ul",[a("li",[t._v("js存在申明提前情况，即使"),a("code",[t._v("f()")]),t._v("在"),a("code",[t._v("function f () {console.log(1)}")]),t._v("前")])]),t._v(" "),a("p",[a("strong",[t._v("但是仅限于"),a("code",[t._v("var")]),t._v("!")]),t._v(" 所以我们可以得到结论：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("function f")]),t._v("等价于"),a("code",[t._v("var f = function")])]),t._v(" "),a("li",[t._v("含有"),a("code",[t._v("let")]),t._v("的"),a("code",[t._v("{}")]),t._v("并不是内部所有数据都会被限定为块，这个块只是相等于"),a("code",[t._v("let")]),t._v("而言的。")]),t._v(" "),a("li",[a("code",[t._v("let or const")]),t._v("并没有声明前置的情况")])])])}),[],!1,null,null,null);s.default=e.exports}}]);