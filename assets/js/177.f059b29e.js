(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{507:function(t,_,a){"use strict";a.r(_);var v=a(0),s=Object(v.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"算法思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法思路"}},[t._v("#")]),t._v(" 算法思路")]),t._v(" "),a("blockquote",[a("p",[t._v("经验有限；只能够给自己说明白，能知道解法也就下面这些。以后看了算法公开课再来补充。")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E7%AE%97%E6%B3%95%E6%80%9D%E8%B7%AF"}},[t._v("算法思路")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#11-%E4%B8%80%E5%8F%A5%E8%AF%9D"}},[t._v("1.1. 一句话")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#12-%E9%80%92%E5%BD%92"}},[t._v("1.2. 递归")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E9%80%92%E5%BD%92%E7%89%B9%E7%82%B9%E6%95%B0%E6%8D%AE%E4%BC%A0%E9%80%92"}},[a("strong",[t._v("递归特点：数据传递")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E9%80%92%E5%BD%92%E7%89%B9%E7%82%B9%E4%B9%A6%E5%86%99"}},[a("strong",[t._v("递归特点：书写")])])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#13-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92"}},[t._v("1.3. 动态规划")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#14-%E4%B8%A4%E4%B8%AA%E6%8C%87%E9%92%88"}},[t._v("1.4. 两个指针")])])])])]),t._v(" "),a("h2",{attrs:{id:"_1-1-一句话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-一句话"}},[t._v("#")]),t._v(" 1.1. 一句话")]),t._v(" "),a("p",[t._v("学好数学，其实这些都是有数学理论支撑的。我看了网易公开课前面几集的结论。")]),t._v(" "),a("h2",{attrs:{id:"_1-2-递归"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-递归"}},[t._v("#")]),t._v(" 1.2. 递归")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("先不考虑性能问题")]),t._v("，递归好理解但是性能有问题需要优化")])]),t._v(" "),a("ol",[a("li",[t._v("其实递归有递归表达式，例如求解"),a("code",[t._v("[1, 1, 2, 3, 5...]")]),t._v("此类后一个是前两个相加结果。")])]),t._v(" "),a("p",[t._v("那么递归表达式解释"),a("code",[t._v("f(n)=f(n-1)+f(n-2)")]),t._v("，有没有发现其实这就是一个数学公式！！以前上学的时候怎么不知道这个解法。")]),t._v(" "),a("p",[t._v("再比如求解阶乘，"),a("code",[t._v("!n=n*n-1*n-2...*1")]),t._v("。可以理解为"),a("code",[t._v("f(n)=n*f(n-1)")]),t._v("。")]),t._v(" "),a("p",[t._v("递归需要考虑2个问题：")]),t._v(" "),a("ol",[a("li",[t._v("在递归边界外(例如上面式子成立条件是"),a("code",[t._v("n>=0")]),t._v("，所以要在"),a("code",[t._v("n<=2")]),t._v(")中止递归")]),t._v(" "),a("li",[t._v("在递归边界内求解递归(就是上面那个表达式)"),a("code",[t._v("f(n)=f(n-1)+f(n-2)")])])]),t._v(" "),a("p",[t._v("转化为具体的代码为：")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先写出f(n)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 递归边界外")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 递归边界内")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("是不是还挺好理解的")]),t._v("(没有递归表达式(或者是不太直观的)，这个一点点补充)")]),t._v(" "),a("h3",{attrs:{id:"递归特点：数据传递"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归特点：数据传递"}},[t._v("#")]),t._v(" "),a("strong",[t._v("递归特点：数据传递")])]),t._v(" "),a("p",[t._v("其实发现递归有些共同特点，在调用自身背后。我发现无论是 "),a("strong",[t._v("是否利用上一个函数调用结果")]),t._v(" 有些们不太注意的细节。就是一定 "),a("strong",[t._v("有一个数据在递归中传递的。")])]),t._v(" "),a("blockquote",[a("p",[t._v("需要利用到上一个函数结果，来改变当前结果。然后返回当前结果。那么 "),a("strong",[t._v("函数结果在作为数据传递。")]),t._v("。")])]),t._v(" "),a("blockquote",[a("p",[t._v("类似树的递归，其实是 "),a("strong",[t._v("树是引用类型，在递归过程中是做出的动作是会反应到树结构中！那么应用类型是作为数据传递的一部分。")])])]),t._v(" "),a("blockquote",[a("p",[t._v("类似尾递归优化，每次递归结果是作为 "),a("strong",[t._v("函数参数传递的")]),t._v(" 也不违背规律。")])]),t._v(" "),a("h3",{attrs:{id:"递归特点：书写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归特点：书写"}},[t._v("#")]),t._v(" "),a("strong",[t._v("递归特点：书写")])]),t._v(" "),a("ol",[a("li",[t._v("可以是"),a("code",[t._v("f(n)=f(n-1)+f(n-2)")]),t._v("当前步骤需要上一个结果")]),t._v(" "),a("li",[t._v("或者像是"),a("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS-Array-%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("二分查找递归"),a("OutboundLink")],1),t._v("那样，当前步骤简化便于下一步骤求解")]),t._v(" "),a("li",[t._v("在"),a("a",{attrs:{href:""}},[t._v("22括号生成")]),t._v("提供了动态递归的思路")])]),t._v(" "),a("h2",{attrs:{id:"_1-3-动态规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-动态规划"}},[t._v("#")]),t._v(" 1.3. 动态规划")]),t._v(" "),a("blockquote",[a("p",[t._v("和递归一样也是有一定数学理论")])]),t._v(" "),a("p",[t._v("高中数学或者初中数学有一个很重要的推导方法。想要证明一个式子成立：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("f(1)")]),t._v("成立，这是基础")]),t._v(" "),a("li",[t._v("假设"),a("code",[t._v("f(n-1)")]),t._v("成立")]),t._v(" "),a("li",[t._v("如果在"),a("code",[t._v("f(n-1)")]),t._v("成立基础上"),a("code",[t._v("f(n)")]),t._v("成立，那么"),a("code",[t._v("f(n)")]),t._v("这个表达式成立")])]),t._v(" "),a("p",[t._v("动态规划类似，它假设")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("f(1)")]),t._v("有最优解")]),t._v(" "),a("li",[a("code",[t._v("f(2)")]),t._v("在"),a("code",[t._v("f(1)")]),t._v("最优解基础上得到最优解")])]),t._v(" "),a("p",[t._v("然后一直推导到最后一个"),a("code",[t._v("f(n)")])]),t._v(" "),a("p",[t._v("没错这个还是有递归...。但是 "),a("strong",[t._v("最优解以及当前函数需要利用到上一个函数结果是它的特点。")])]),t._v(" "),a("ul",[a("li",[t._v("最小化能求解的到最优解，假设是"),a("code",[t._v("f(1)")])]),t._v(" "),a("li",[t._v("结果返回上一步，即求解"),a("code",[t._v("f(2)")]),t._v("得到"),a("code",[t._v("f(1)")]),t._v("求解过程。然后利用"),a("code",[t._v("f(1)")]),t._v("结果得到"),a("code",[t._v("f(2)")]),t._v("。")])]),t._v(" "),a("p",[t._v("依次类推，然后得到最终要求解的"),a("code",[t._v("f(n)")])]),t._v(" "),a("h2",{attrs:{id:"_1-4-两个指针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-两个指针"}},[t._v("#")]),t._v(" 1.4. 两个指针")]),t._v(" "),a("blockquote",[a("p",[t._v("因为我发现这个还能解决蛮多问题的")])]),t._v(" "),a("p",[t._v("来源于"),a("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Books/blob/master/JS%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E7%AE%97%E6%B3%95%E9%83%A8%E5%88%86/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95/quickSort.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS-快速排序算法.js"),a("OutboundLink")],1),t._v("。有事没事头尾设置两个指针看看能不能简化你的问题。")])])}),[],!1,null,null,null);_.default=s.exports}}]);