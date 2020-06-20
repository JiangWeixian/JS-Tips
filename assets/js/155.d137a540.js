(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{476:function(v,_,e){"use strict";e.r(_);var o=e(0),t=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"css-bfc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-bfc"}},[v._v("#")]),v._v(" CSS-BFC")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#css-bfc"}},[v._v("CSS-BFC")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E4%BB%80%E4%B9%88%E6%98%AFbfc"}},[v._v("什么是BFC")])]),v._v(" "),e("li",[e("a",{attrs:{href:"#bfc%E5%8E%9F%E5%88%99"}},[v._v("BFC原则")])]),v._v(" "),e("li",[e("a",{attrs:{href:"#qa"}},[v._v("Q&A")])]),v._v(" "),e("li",[e("a",{attrs:{href:"#%E9%93%BE%E6%8E%A5"}},[v._v("链接")])])])])]),v._v(" "),e("h2",{attrs:{id:"什么是bfc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是bfc"}},[v._v("#")]),v._v(" 什么是BFC")]),v._v(" "),e("p",[v._v("全称是块级格式化上下文，"),e("strong",[v._v("可以理解为一个容器。")])]),v._v(" "),e("p",[e("strong",[v._v("什么东西会构成BFC?")])]),v._v(" "),e("p",[v._v("就我个人理解来看，任何一个"),e("code",[v._v("box")]),v._v("都可以作为一个"),e("code",[v._v("BFC")]),v._v("区域。所以一个页面里面是多个"),e("code",[v._v("BFC")]),v._v("区域的嵌套。从 "),e("strong",[v._v("Hackers")]),v._v("第二条来看，说明并不是每个元素默认就是"),e("code",[v._v("bfc")]),v._v("（不然每个元素都可以默认清除浮动）。所以满足下面条件的可以视为"),e("code",[v._v("BFC")]),v._v("。")]),v._v(" "),e("ol",[e("li",[v._v("根元素 - 说是父类元素更为准确")]),v._v(" "),e("li",[e("code",[v._v("float")]),v._v(" 属性不为 "),e("code",[v._v("none")])]),v._v(" "),e("li",[e("code",[v._v("position")]),v._v(" 为 "),e("code",[v._v("absolute")]),v._v(" 或 "),e("code",[v._v("fixed")])]),v._v(" "),e("li",[e("code",[v._v("display")]),v._v(" 为 "),e("code",[v._v("inline-block")]),v._v(", "),e("code",[v._v("table-cell")]),v._v(", "),e("code",[v._v("table-caption")]),v._v(", "),e("code",[v._v("flex")]),v._v(", "),e("code",[v._v("inline-flex")])]),v._v(" "),e("li",[e("code",[v._v("overflow")]),v._v(" 不为 "),e("code",[v._v("visible")])])]),v._v(" "),e("p",[v._v("可以在"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context",target:"_blank",rel:"noopener noreferrer"}},[v._v("这里"),e("OutboundLink")],1),v._v("看到更多条件。")]),v._v(" "),e("h2",{attrs:{id:"bfc原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bfc原则"}},[v._v("#")]),v._v(" BFC原则")]),v._v(" "),e("p",[v._v("既然页面是由多个"),e("code",[v._v("BFC")]),v._v("组成，就要涉及到页面布局的时候的原则。一个最最重要的原则是：BFC是一个内部规则，因此如果一个"),e("code",[v._v("box")]),v._v("包含多个"),e("code",[v._v("boxes")]),v._v("，"),e("code",[v._v("bfc")]),v._v("作用是限制在"),e("code",[v._v("box")]),v._v("内部。不会影响到"),e("code",[v._v("box")]),v._v("之外。以下虽然说的都是"),e("code",[v._v("box")]),v._v("但是都是"),e("code",[v._v("bfc")]),v._v("的特性。")]),v._v(" "),e("ol",[e("li",[v._v("内部的Box会在垂直方向，一个接一个地放置。")]),v._v(" "),e("li",[v._v("Box垂直方向的距离由"),e("code",[v._v("margin")]),v._v("决定 - 上下属于同一个BFC的两个相邻Box的 "),e("strong",[v._v("margin会发生重叠")])]),v._v(" "),e("li",[v._v("每个元素的"),e("code",[v._v("margin box")]),v._v("的左边，与包含块（父类）"),e("code",[v._v("border box")]),v._v("的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此 - 一个很愚蠢的问题，就是为啥boxes都是左对齐")]),v._v(" "),e("li",[e("strong",[e("code",[v._v("BFC")]),v._v("的区域不会与"),e("code",[v._v("float-box")]),v._v("重叠")]),v._v("，可以在"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context",target:"_blank",rel:"noopener noreferrer"}},[v._v("MDN-BFC"),e("OutboundLink")],1),v._v("中"),e("a",{attrs:{href:""}},[v._v("#让浮动内容和周围的内容等高")]),v._v("可以看到，文字没有被遮盖。虽然"),e("code",[v._v("p")]),v._v("元素并不是"),e("code",[v._v("bfc")]),v._v("，但是里面的文字是。")]),v._v(" "),e("li",[v._v("计算BFC的高度时，浮动元素也参与计算。这是问什么"),e("code",[v._v("overflow")]),v._v("可以清空浮动。")])]),v._v(" "),e("p",[v._v("BFC就是页面上的一个隔离的独立容器，"),e("strong",[v._v("容器里面的子元素不会影响到外面的元素。反之也如此。")])]),v._v(" "),e("h2",{attrs:{id:"q-a"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[v._v("#")]),v._v(" Q&A")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("针对上面第二点 "),e("strong",[v._v("margin会发生重叠")]),v._v(" 问题？")]),v._v(" "),e("p",[v._v("可以通过将上一个box包括在新的boxA中，那么box的"),e("code",[v._v("margin-bfc")]),v._v("问题就被限制在"),e("code",[v._v("boxA")]),v._v("中。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("overflow")]),v._v(" 不为 "),e("code",[v._v("visible")]),v._v(" 是 "),e("code",[v._v("bfc")]),v._v(" 这一点+计算 "),e("code",[v._v("BFC")]),v._v(" 的高度时，浮动元素也参与计算可以解释为什么"),e("code",[v._v("overflow: hidden")]),v._v("可以清除浮动")]),v._v(" "),e("p",[v._v("默认"),e("code",[v._v("overflow: hidden")]),v._v("构成"),e("code",[v._v("bfc")]),v._v("，即使里面由"),e("code",[v._v("float")]),v._v("元素。为了实现"),e("code",[v._v("bfc")]),v._v("计算浮动元素的目的，"),e("strong",[v._v("只要清除float元素带来的影响。")])])])]),v._v(" "),e("h2",{attrs:{id:"链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[v._v("#")]),v._v(" 链接")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("主要文章"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=t.exports}}]);