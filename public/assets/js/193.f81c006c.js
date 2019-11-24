(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{551:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"css-定位fixed元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-定位fixed元素"}},[t._v("#")]),t._v(" CSS - 定位fixed元素")]),t._v(" "),s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("起因为我想定位"),s("code",[t._v("fixed")]),t._v("元素不跟随"),s("code",[t._v("viewport")]),t._v("。而是跟随的是父类的元素宽高以及定位。")]),t._v(" "),s("ul",[s("li",[t._v("父类元素限定高度")]),t._v(" "),s("li",[t._v("内容区域高度很高（所以父类元素是没有滚动条的，内容区域有滚动条）")])]),t._v(" "),s("p",[s("strong",[t._v("如果我们想要定位一个元素在内容区域底部，且不跟随内容区域滚动")])]),t._v(" "),s("blockquote",[s("p",[t._v("首先解决上面这个问题当然可以不用"),s("code",[t._v("fixed")]),t._v("。更好的方案是，将该想要"),s("code",[t._v("fixed")]),t._v("（这个指的是语义上的"),s("code",[t._v("fixed")]),t._v("）的元素用另外一个a元素包裹。然后和内容区域同层级。"),s("strong",[t._v("注意不要放在滚动区域内（即内容区域）。如果放在了内容区域内部，可能导致元素跟随。")])])]),t._v(" "),s("p",[t._v("很有意思的是，我想知道如果一个元素是"),s("code",[t._v("fixed")]),t._v("。想要它和父类是同步的（比如高度什么的）？如何实现？")]),t._v(" "),s("p",[t._v("因为"),s("code",[t._v("fixed")]),t._v("比较的是窗口。")]),t._v(" "),s("p",[t._v("如果结构为：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("parent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("fixed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("a"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("那么只要设置"),s("code",[t._v("parent css")]),t._v("为"),s("code",[t._v("transition: translate(0, 0)")]),t._v("。那么"),s("code",[t._v("fixed")]),t._v("元素就可以跟随"),s("code",[t._v("parent")]),t._v("的了。")])])}),[],!1,null,null,null);a.default=n.exports}}]);