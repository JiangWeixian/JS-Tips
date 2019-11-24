(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{527:function(v,_,o){"use strict";o.r(_);var e=o(0),t=Object(e.a)({},(function(){var v=this,_=v.$createElement,o=v._self._c||_;return o("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[o("h1",{attrs:{id:"css-bfc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#css-bfc"}},[v._v("#")]),v._v(" CSS-BFC")]),v._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#css-bfc"}},[v._v("CSS-BFC")]),v._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#%E4%BB%80%E4%B9%88%E6%98%AFbfc"}},[v._v("什么是BFC")])]),v._v(" "),o("li",[o("a",{attrs:{href:"#bfc%E5%8E%9F%E5%88%99"}},[v._v("BFC原则")])]),v._v(" "),o("li",[o("a",{attrs:{href:"#hackers"}},[v._v("Hackers")])]),v._v(" "),o("li",[o("a",{attrs:{href:"#%E9%93%BE%E6%8E%A5"}},[v._v("链接")])])])])]),v._v(" "),o("h2",{attrs:{id:"什么是bfc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#什么是bfc"}},[v._v("#")]),v._v(" 什么是BFC")]),v._v(" "),o("p",[v._v("全称是块级格式化上下文，"),o("strong",[v._v("可以理解为一个容器。")])]),v._v(" "),o("p",[o("strong",[v._v("什么东西会构成BFC?")])]),v._v(" "),o("p",[v._v("就我个人理解来看，任何一个"),o("code",[v._v("box")]),v._v("都可以作为一个"),o("code",[v._v("BFC")]),v._v("区域。所以一个页面里面是多个"),o("code",[v._v("BFC")]),v._v("区域的嵌套。从 "),o("strong",[v._v("Hackers")]),v._v("第二条来看，说明并不是每个元素默认就是"),o("code",[v._v("bfc")]),v._v("（不然每个元素都可以默认清除浮动）。所以满足下面条件的可以视为"),o("code",[v._v("BFC")]),v._v("。")]),v._v(" "),o("ol",[o("li",[v._v("根元素 - 说是父类元素更为准确")]),v._v(" "),o("li",[v._v("float属性不为none")]),v._v(" "),o("li",[v._v("position为absolute或fixed")]),v._v(" "),o("li",[v._v("display为inline-block, table-cell, table-caption, flex, inline-flex")]),v._v(" "),o("li",[v._v("overflow不为visible")])]),v._v(" "),o("h2",{attrs:{id:"bfc原则"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bfc原则"}},[v._v("#")]),v._v(" BFC原则")]),v._v(" "),o("p",[v._v("既然页面是由多个"),o("code",[v._v("BFC")]),v._v("组成，就要涉及到页面布局的时候的原则。一个最最重要的原则是：**BFC是一个内部规则，因此如果一个"),o("code",[v._v("box")]),v._v("包含多个"),o("code",[v._v("boxes")]),v._v("，多个"),o("code",[v._v("boxes")]),v._v("的"),o("code",[v._v("bfc")]),v._v("作用是限制在"),o("code",[v._v("box")]),v._v("内部。不会影响到"),o("code",[v._v("box")]),v._v("之外。**以下虽然说的都是"),o("code",[v._v("box")]),v._v("但是都是"),o("code",[v._v("bfc")]),v._v("的特性。")]),v._v(" "),o("ol",[o("li",[v._v("内部的Box会在垂直方向，一个接一个地放置。")]),v._v(" "),o("li",[v._v("Box垂直方向的距离由"),o("code",[v._v("margin")]),v._v("决定 - 上下属于同一个BFC的两个相邻Box的 "),o("strong",[v._v("margin会发生重叠")])]),v._v(" "),o("li",[v._v("每个元素的"),o("code",[v._v("margin box")]),v._v("的左边， 与包含块"),o("code",[v._v("border box")]),v._v("的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此 - 一个很愚蠢的问题，就是为啥boxes都是左对齐")]),v._v(" "),o("li",[o("strong",[o("code",[v._v("BFC")]),v._v("的区域不会与"),o("code",[v._v("float-box")]),v._v("重叠")]),v._v(" - 这个很重要，可以 "),o("strong",[v._v("先单独记忆")])]),v._v(" "),o("li",[v._v("计算BFC的高度时，浮动元素也参与计算")])]),v._v(" "),o("p",[v._v("BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。")]),v._v(" "),o("h2",{attrs:{id:"hackers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hackers"}},[v._v("#")]),v._v(" Hackers")]),v._v(" "),o("ol",[o("li",[v._v("针对上面第二点 "),o("strong",[v._v("margin会发生重叠")]),v._v(" 问题？")])]),v._v(" "),o("blockquote",[o("p",[v._v("可以通过将上一个box包括在新的boxA中，那么box的"),o("code",[v._v("margin-bfc")]),v._v("问题就被限制在"),o("code",[v._v("boxA")]),v._v("中。")])]),v._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[v._v("overflow不为visible是bfc这一点+计算BFC的高度时，浮动元素也参与计算可以解释为什么"),o("code",[v._v("overflow: hidden")]),v._v("可以清除浮动")])]),v._v(" "),o("blockquote",[o("p",[v._v("默认"),o("code",[v._v("overflow: hidden")]),v._v("构成"),o("code",[v._v("bfc")]),v._v("，即使里面由"),o("code",[v._v("float")]),v._v("元素。为了实现"),o("code",[v._v("bfc")]),v._v("计算浮动元素的目的，"),o("strong",[v._v("只要清除float元素带来的影响。")])])]),v._v(" "),o("h2",{attrs:{id:"链接"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[v._v("#")]),v._v(" 链接")]),v._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"http://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("主要文章"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=t.exports}}]);