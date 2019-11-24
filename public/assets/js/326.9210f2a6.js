(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{300:function(s,t,e){"use strict";e.r(t);var a=e(0),v=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"react-cssmodules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-cssmodules"}},[s._v("#")]),s._v(" React-CSSModules")]),s._v(" "),e("blockquote",[e("p",[s._v("如何模块化管理CSS-Modules。")])]),s._v(" "),e("blockquote",[e("p",[s._v("好处是可以实现类如"),e("code",[s._v("react")]),s._v("管理组件的继承方式。")])]),s._v(" "),e("p",[e("a",{attrs:{href:"https://raw.githubusercontent.com/css-modules/logos/master/css-modules-logo.png",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSS-Moules"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"为什么我们要使用？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么我们要使用？"}},[s._v("#")]),s._v(" 为什么我们要使用？")]),s._v(" "),e("p",[s._v("组件已经是模块化管理了，"),e("strong",[s._v("理论上CSS也应该是模块化的。这一点在"),e("code",[s._v("Vue")]),s._v("里面可能会特别明显。")])]),s._v(" "),e("p",[s._v("因为"),e("code",[s._v("Vue css")]),s._v("是写在特殊的"),e("code",[s._v("CSS style")]),s._v("里面的。样式和组件是绑定的。")]),s._v(" "),e("p",[s._v("从某种意义上，样式是组件化的。")]),s._v(" "),e("p",[e("strong",[s._v("但是样式能够像组件那样导出导入吗？")])]),s._v(" "),e("blockquote",[e("p",[s._v("或许如果将样式文件写成单独的文件能够实现让别的文件也能再次导入这些文件。")])]),s._v(" "),e("p",[e("strong",[s._v("如果提高要求，想要文件其中的一个"),e("code",[s._v("class")]),s._v("样式？")])]),s._v(" "),e("blockquote",[e("p",[s._v("以上的方面是做不到的。所以就有了css-modules")])]),s._v(" "),e("h2",{attrs:{id:"css-modules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-modules"}},[s._v("#")]),s._v(" CSS-Modules")]),s._v(" "),e("p",[e("strong",[s._v("能够做到：")])]),s._v(" "),e("ul",[e("li",[s._v("复用类名 - 可以从某个样式文件中导出具体的类名")])]),s._v(" "),e("p",[e("strong",[s._v("规则")])]),s._v(" "),e("blockquote",[e("p",[s._v("命名上可以和BEM一致。")])]),s._v(" "),e("blockquote",[e("p",[s._v("只会转义类名（在类后面加上"),e("code",[s._v("hash")]),s._v("值），不会转义其他的样式选择器。"),e("strong",[s._v("只会转移"),e("code",[s._v("styles.classnmame")]),s._v("使用的样式")])])]),s._v(" "),e("ol",[e("li",[e("p",[s._v("不要有嵌套的类的写法（只能说尽量不要用）")])]),s._v(" "),e("li",[e("p",[s._v("不要使用其他的样式选择器。至少在构建某一个具体的组件样式的时候不要这么做。")]),s._v(" "),e("blockquote",[e("p",[s._v("其他的样式选择器是在复用或者覆盖样式的使用的。")])])]),s._v(" "),e("li",[e("p",[s._v("复用样式")])])]),s._v(" "),e("ul",[e("li",[s._v("导出具体样式")])]),s._v(" "),e("div",{staticClass:"language-CSS extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[s._v("  "),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".className")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" green"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".otherClassName")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("composes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" className"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yellow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("p",[s._v("或者你可以"),e("code",[s._v("composes: className from './xxx.css")]),s._v(". "),e("strong",[s._v("这或许不推荐使用嵌套CSS的原因。")])]),s._v(" "),e("p",[s._v("以上代码意味着构建的"),e("code",[s._v("otherclassname")]),s._v("先是继承了"),e("code",[s._v("classname")]),s._v("的样式，并重写了其中部分。")]),s._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[s._v("覆盖样式 - 有两种方式")])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("通过"),e("code",[s._v(":global")]),s._v("的方式覆盖具体样式 - 这里面有个问题如果使用"),e("code",[s._v("global")]),s._v("的话，必须结合选择器才能够重写样式。但是"),e("code",[s._v("css-modules")]),s._v("会给"),e("code",[s._v("classname")]),s._v("加上hash数值。所以我们没有办法获取"),e("code",[s._v("hash")]),s._v("之后的样式。"),e("strong",[s._v("除非你给组件加上一个不通过"),e("code",[s._v("styles.classname")]),s._v("的类名，例如"),e("code",[s._v("className={ classnames(styles.xx, 'yy') }")]),s._v("其中"),e("code",[s._v("yy")]),s._v("就不会被加上"),e("code",[s._v("hash")])])])]),s._v(" "),e("li",[e("p",[s._v("利用"),e("code",[s._v("css-modules")]),s._v("只会转义类选择器特点。可以给某个组件加上"),e("code",[s._v("data-role=xxx")]),s._v("这样就可以在样式选择器通过"),e("code",[s._v("[data-role=xxx]")]),s._v("来进行选择了。")])])]),s._v(" "),e("p",[e("strong",[s._v(":global")]),s._v("可以理解为将这部分样式导出为了一个单独的文件。")]),s._v(" "),e("h3",{attrs:{id:"q-a"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[s._v("#")]),s._v(" Q&A")]),s._v(" "),e("ol",[e("li",[s._v("和"),e("code",[s._v("BEM")]),s._v("规则冲突吗？")])]),s._v(" "),e("blockquote",[e("p",[s._v("不冲突，或许在命名规则上有些妥协。")])]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("strong",[s._v("解决了什么问题？")])])]),s._v(" "),e("blockquote",[e("p",[s._v("能够导入其中一些具体的类而不是文件。")])])])}),[],!1,null,null,null);t.default=v.exports}}]);