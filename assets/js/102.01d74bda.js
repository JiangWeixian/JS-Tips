(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{404:function(v,_,t){"use strict";t.r(_);var s=t(0),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"js动画设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js动画设计"}},[v._v("#")]),v._v(" JS动画设计")]),v._v(" "),t("blockquote",[t("p",[v._v("Velocity作者写的一本关于JS动画设计的书")])]),v._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),t("p",[v._v("书里面大部分内容都是和"),t("code",[v._v("Velocity.js")]),v._v("相关的内容。")]),v._v(" "),t("p",[v._v("所以总体来说价值不大。想要学习这部分内容还不如直接去看文档"),t("code",[v._v("DOC")]),v._v("。")]),v._v(" "),t("h2",{attrs:{id:"js-vs-css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-vs-css"}},[v._v("#")]),v._v(" JS vs CSS")]),v._v(" "),t("p",[t("strong",[v._v("到底哪个性能更好？")])]),v._v(" "),t("p",[v._v("在传统观念来说，"),t("code",[v._v("CSS")]),v._v("的性能是更好一些的。但是"),t("code",[v._v("JS")]),v._v("更加灵活一些。")]),v._v(" "),t("p",[v._v("但是从书中的观点来说，"),t("code",[v._v("JS")]),v._v("性能差完全是可以避免的事情。可以通过某些手段进行性能优化。")]),v._v(" "),t("p",[v._v("所以："),t("strong",[v._v("该用JS动画就用JS，该用CSS动画就用CSS动画")])]),v._v(" "),t("h3",{attrs:{id:"分离动画injs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分离动画injs"}},[v._v("#")]),v._v(" 分离动画inJS")]),v._v(" "),t("p",[v._v("JS动画算CSS部分，还是JS部分呢？")]),v._v(" "),t("p",[v._v("文中认为其实应该算"),t("code",[v._v("CSS")]),v._v("。")]),v._v(" "),t("p",[v._v("结合函数编程的思想，可以将"),t("code",[v._v("JS")]),v._v("设置样式部分，移动到另外一个文件，变为一个函数。")]),v._v(" "),t("p",[t("strong",[v._v("再导入主文件也是可以接受的。")])]),v._v(" "),t("h2",{attrs:{id:"动画性能优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动画性能优化"}},[v._v("#")]),v._v(" 动画性能优化")]),v._v(" "),t("blockquote",[t("p",[v._v("书中完全没有涉及到"),t("code",[v._v("React or Vue")]),v._v("相关的内容")])]),v._v(" "),t("p",[v._v("因此这部分的性能优化点和原生"),t("code",[v._v("HTML")]),v._v("十分类似。")]),v._v(" "),t("ol",[t("li",[v._v("不要单独设置，需要批量设置")]),v._v(" "),t("li",[v._v("默认值设置 - "),t("strong",[v._v("动画肯定是从一个数值到另外一个数值的变化。")]),v._v(" 在初始值没有设定的情况下，会获取默认浏览器的数值（这一步就涉及到了获取的操作），如果一开始就设置了元素默认值，而不是要通过计算的方式获取。也是一个性能的优化点。")]),v._v(" "),t("li",[v._v("统一存统一取值 - 可能会进行的操作是取值然后设置，取值然后设置。"),t("strong",[v._v("可能会导致DOM更新之后又取值！")])])]),v._v(" "),t("blockquote",[t("p",[v._v("那么如果先统一先取值，然后统一设置")])]),v._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[v._v("transoformer is better - 涉及到位置的动画的时候，直接设置"),t("code",[v._v("top or right")]),v._v("性能消耗是比较大的")]),v._v(" "),t("li",[v._v("渐变和阴影动画最好不要设置 - 因为是像素级别的动画")])]),v._v(" "),t("h3",{attrs:{id:"兼容低端设备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#兼容低端设备"}},[v._v("#")]),v._v(" 兼容低端设备")]),v._v(" "),t("p",[v._v("文中兼容低端设备的方式很优雅。")]),v._v(" "),t("p",[v._v("因为动画一般含有持续时间，有一定时间的代表有动画，"),t("strong",[v._v("如果动画时间为０，那么其实就是没有动画。")])]),v._v(" "),t("p",[v._v("所以在动画的实现上可以，在每个涉及到动画事时间的函数。将　"),t("strong",[v._v("持续事件　x 一个乘数")]),v._v("，乘以的数字默认是１，不想要动画那么就0。就实现了兼容低端设备的目的。")]),v._v(" "),t("h2",{attrs:{id:"一些特殊的动画"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些特殊的动画"}},[v._v("#")]),v._v(" 一些特殊的动画")]),v._v(" "),t("ul",[t("li",[v._v("字体动画 - 如果不通过SVG的话如何设置字体的动画，文中介绍了"),t("code",[v._v("blast")]),v._v("这个库来进行字体的动画。")])])])}),[],!1,null,null,null);_.default=a.exports}}]);