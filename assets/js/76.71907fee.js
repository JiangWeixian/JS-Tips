(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{367:function(t,v,_){"use strict";_.r(v);var a=_(0),r=Object(a.a)({},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"数据结构-变量-运算"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据结构-变量-运算","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据结构&变量&运算")]),t._v(" "),_("blockquote",[_("p",[t._v("真的只是基础知识而已&讲课重点应该放在了后面syntax部分，但是个人认为前面对于非计算机专业学生还是比较重要，后面部分如果你写过代码，就不那么重要")])]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%8F%98%E9%87%8F%E8%BF%90%E7%AE%97"}},[t._v("数据结构&变量&运算")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E9%80%9F%E5%86%99"}},[t._v("速写")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E8%AF%BE%E7%A8%8B%E7%9B%AE%E6%A0%87"}},[t._v("课程目标")])])])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%83%8C%E6%99%AF%E7%9F%A5%E8%AF%86"}},[t._v("计算机背景知识")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E8%A7%A3%E9%87%8A%E5%99%A8"}},[t._v("解释器")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E8%AE%A1%E7%AE%97%E6%9C%BA---rules"}},[t._v("计算机 - Rules")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E8%AF%AD%E8%A8%80%E5%88%86%E7%B1%BB"}},[t._v("语言分类")])])])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E4%BB%A5python%E4%B8%BA%E4%BE%8B%E5%AD%90---%E8%A7%A3%E9%87%8Asyntax"}},[t._v("以Python为例子 - 解释Syntax")])])])])]),t._v(" "),_("h2",{attrs:{id:"速写"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#速写","aria-hidden":"true"}},[t._v("#")]),t._v(" 速写")]),t._v(" "),_("ul",[_("li",[t._v("固定任务计算机")]),t._v(" "),_("li",[t._v("翻译机(interptner) - 解释程序语言")]),t._v(" "),_("li",[t._v("存储程序计算机")]),t._v(" "),_("li",[t._v("merory&alu - 计算机组成，程序部分运行原理")]),t._v(" "),_("li",[t._v("一个程序语言能做，另一个语言也能做。只有最合适的。")]),t._v(" "),_("li",[t._v("high level vs low level")]),t._v(" "),_("li",[t._v("面向对象")]),t._v(" "),_("li",[t._v("编程还是解释语言")]),t._v(" "),_("li",[t._v("控制流程")]),t._v(" "),_("li",[t._v("syntax - 语法")]),t._v(" "),_("li",[t._v("semantic - 语义，static&full\n"),_("ul",[_("li",[t._v("static - 语法正确之后，检查语法是否合理")])])])]),t._v(" "),_("h3",{attrs:{id:"课程目标"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#课程目标","aria-hidden":"true"}},[t._v("#")]),t._v(" 课程目标")]),t._v(" "),_("p",[t._v("会阅读别人代码，会写自己的代码。")]),t._v(" "),_("h2",{attrs:{id:"计算机背景知识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#计算机背景知识","aria-hidden":"true"}},[t._v("#")]),t._v(" 计算机背景知识")]),t._v(" "),_("p",[t._v("以求平方根入手，讲解计算机是如何计算一个数值的？")]),t._v(" "),_("p",[_("strong",[t._v("一个计算表达式对计算机来说并不会得到计算方法，而是得到一个检查是否相等的方式，然后尝试去逼近这个数值。")])]),t._v(" "),_("p",[t._v("逼近的方式可以是一串指令，计算机就是运行这些指令的(伪代码！)")]),t._v(" "),_("p",[t._v("然后有了"),_("strong",[t._v("固定任务计算机：")])]),t._v(" "),_("ul",[_("li",[t._v("科学计算器")]),t._v(" "),_("li",[t._v("密码破解")])]),t._v(" "),_("h3",{attrs:{id:"解释器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解释器","aria-hidden":"true"}},[t._v("#")]),t._v(" 解释器")]),t._v(" "),_("p",[t._v("计算机需要理解程序语言，然后转化为计算机可以理解的指令，然后去运行这些指令。")]),t._v(" "),_("p",[t._v("指令是存储在"),_("code",[t._v("merory")]),t._v("中，然后"),_("code",[t._v("pc(program counter)")]),t._v("然后取出指令，交给一个模块运行，然后计算得到的结果重新放到"),_("code",[t._v("merory")]),t._v("里面。"),_("code",[t._v("pc")]),t._v("会不断重复这个步骤。")]),t._v(" "),_("h3",{attrs:{id:"计算机-rules"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#计算机-rules","aria-hidden":"true"}},[t._v("#")]),t._v(" 计算机 - Rules")]),t._v(" "),_("ul",[_("li",[t._v("只有最合适的语言，没有最好的")]),t._v(" "),_("li",[t._v("一个语言能做的，另一个也能够做")])]),t._v(" "),_("h3",{attrs:{id:"语言分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#语言分类","aria-hidden":"true"}},[t._v("#")]),t._v(" 语言分类")]),t._v(" "),_("ul",[_("li",[t._v("high-level vs low-level - high-level可以做任何事情，提供了设计一个程序基本元素")]),t._v(" "),_("li",[t._v("编译 vs 解释 - python是解释的，因为不需要编译。且在运行的时候检测错误。解释类型比编译类型更好理解。")]),t._v(" "),_("li",[t._v("以面向对象区分")])]),t._v(" "),_("h2",{attrs:{id:"以python为例子-解释syntax"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#以python为例子-解释syntax","aria-hidden":"true"}},[t._v("#")]),t._v(" 以Python为例子 - 解释Syntax")]),t._v(" "),_("ol",[_("li",[t._v("syntax - 是语法，就是一个语言的规定。")]),t._v(" "),_("li",[t._v("static semantic - 语法合理之后，语句是否正确。就像是在"),_("code",[t._v("python")]),t._v("中，"),_("code",[t._v("3 + 'abc'")]),t._v("在语法上没有错，但是在"),_("strong",[t._v("semantic是错误")])]),t._v(" "),_("li",[t._v("full semantic - 运行时候的错误。")])]),t._v(" "),_("p",[t._v("我想第2点和第3点，在"),_("code",[t._v("python")]),t._v("区分不明显，在编译类型的语言中，第3点并不会在编译的时候发现？(个人理解)")])])},[],!1,null,null,null);v.default=r.exports}}]);