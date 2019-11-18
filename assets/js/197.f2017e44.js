(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{556:function(v,_,e){"use strict";e.r(_);var a=e(0),t=Object(a.a)({},function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"css选择器权重"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css选择器权重","aria-hidden":"true"}},[v._v("#")]),v._v(" CSS选择器权重")]),v._v(" "),e("h3",{attrs:{id:"基础知识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础知识","aria-hidden":"true"}},[v._v("#")]),v._v(" 基础知识")]),v._v(" "),e("p",[v._v("不同"),e("code",[v._v("CSS")]),v._v("选择器之间是有优先级关系的。已知的是"),e("code",[v._v("行内>#>. [] 伪类选择器> label 伪元素")]),v._v("。")]),v._v(" "),e("ul",[e("li",[v._v("伪类选择器和伪元素分别是"),e("code",[v._v(":hover")]),v._v("和"),e("code",[v._v("::before")])]),v._v(" "),e("li",[v._v("属性选择器"),e("code",[v._v("[]")]),v._v("和伪类选择器优先级是要大于"),e("code",[v._v("label")]),v._v("的。")])]),v._v(" "),e("p",[v._v("同等优先级的选择器的优先关系：")]),v._v(" "),e("ul",[e("li",[v._v("如果同等优先级，后面的样式会覆盖前面的")]),v._v(" "),e("li",[v._v("如果样式设置了"),e("code",[v._v("!important")]),v._v("，会覆盖所有其他css内样式，行内除外")])]),v._v(" "),e("h3",{attrs:{id:"进阶"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进阶","aria-hidden":"true"}},[v._v("#")]),v._v(" 进阶")]),v._v(" "),e("p",[v._v("当只有一个选择器之间进行比较的时候，当然是可以通过上面准则进行比较。")]),v._v(" "),e("p",[v._v("如果是多个选择器再同一行内，例如"),e("code",[v._v("id label class")]),v._v("和"),e("code",[v._v("id label")]),v._v("这样组合。")]),v._v(" "),e("p",[v._v("优先级有如何比较？")]),v._v(" "),e("p",[e("strong",[v._v("这里引入权重概念，有数学计算公式来计算")])]),v._v(" "),e("p",[v._v("以"),e("code",[v._v("行内>#>. [] 伪类选择器> label 伪元素")]),v._v("分别设置权重"),e("code",[v._v("1000")]),v._v("、"),e("code",[v._v("100")]),v._v("、"),e("code",[v._v("10")]),v._v("、"),e("code",[v._v("1")]),v._v("。")]),v._v(" "),e("p",[v._v("因此"),e("code",[v._v("id label class")]),v._v("可以计算为"),e("code",[v._v("100+10+1")]),v._v("如此计算，然后就可以通过比较权重来比较优先级。这里列出几个例子：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("p.class")]),v._v("的权重是"),e("code",[v._v("1+10")])]),v._v(" "),e("li",[e("code",[v._v("h1 + *[rel=up]")]),v._v("是"),e("code",[v._v("1+10")])])]),v._v(" "),e("p",[v._v("这也就解释了为什么书写样式的时候，比如写出"),e("strong",[v._v("相同规则的选择器或者权重更大的选择器")]),v._v("才能够覆盖样式。")]),v._v(" "),e("h3",{attrs:{id:"额外"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#额外","aria-hidden":"true"}},[v._v("#")]),v._v(" 额外")]),v._v(" "),e("p",[v._v("链接样式，"),e("code",[v._v("link-visited-hover-active")]),v._v("以这样优先级。简写为"),e("code",[v._v("LVHA")]),v._v("。")]),v._v(" "),e("p",[v._v("同时，这四个也是书写在"),e("code",[v._v(".css")]),v._v("文件中样式顺序，即先写"),e("code",[v._v("link")]),v._v("样式然后依次写后面的。")])])},[],!1,null,null,null);_.default=t.exports}}]);