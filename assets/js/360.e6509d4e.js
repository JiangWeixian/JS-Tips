(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{257:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"前端性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端性能优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 前端性能优化")]),t._v(" "),s("blockquote",[s("p",[t._v("webpack如何实现这一步")])]),t._v(" "),s("h2",{attrs:{id:"优化-代码压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化-代码压缩","aria-hidden":"true"}},[t._v("#")]),t._v(" 优化 - 代码压缩")]),t._v(" "),s("p",[s("code",[t._v("webpack")]),t._v("使用过程中，已经知道了它对"),s("code",[t._v("js css")]),t._v("文件处理方式，以达到优化的目的：")]),t._v(" "),s("ul",[s("li",[t._v("压缩代码，去掉不必要的注释。")]),t._v(" "),s("li",[t._v("（如果配置了话）可以提取公用模块和自己自己写的代码，分成两个js文件。")])]),t._v(" "),s("p",[t._v("我们知道"),s("code",[t._v("Webpack")]),t._v("非常适合单页面应用，这是为什么呢？")]),t._v(" "),s("p",[t._v("因为将所有东西打包到同一个"),s("code",[t._v("JS")]),t._v("文件中，不需要多次请求资源。一次请求终生受用。")]),t._v(" "),s("h2",{attrs:{id:"优化-http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化-http","aria-hidden":"true"}},[t._v("#")]),t._v(" 优化 - HTTP")]),t._v(" "),s("p",[t._v("仔细看"),s("code",[t._v("webpack")]),t._v("打包输出结果（或者是配置文件），可以发现文件名后面都会带一串"),s("code",[t._v("hash")]),t._v("值。")]),t._v(" "),s("ul",[s("li",[t._v("如果代码没变，"),s("code",[t._v("hash")]),t._v("值就不会变。可以加快打包速度，"),s("code",[t._v("hash")]),t._v("没变的就不用再一次打包。")]),t._v(" "),s("li",[t._v("如果涉及到"),s("code",[t._v("http")]),t._v("请求，浏览器会缓存请求资源。如果"),s("code",[t._v("hash")]),t._v("值不变，就不会有再一次请求的情况。这个好处就不用我说了。")])]),t._v(" "),s("h2",{attrs:{id:"优化-异步加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化-异步加载","aria-hidden":"true"}},[t._v("#")]),t._v(" 优化 - 异步加载")]),t._v(" "),s("p",[t._v("加载模块需要时间，下载代码需要时间。对于页面应用来说，如果选择在页面开始阶段就把所有需要的模块都导入进来。会拖累页面（应用）的启动速度，再加上下载代码的时间，简直是噩梦。")]),t._v(" "),s("p",[t._v("这个时候就需要异步加载的方式，这和"),s("code",[t._v("webpack")]),t._v("的配置无关，和写代码的方式有关。")]),t._v(" "),s("p",[t._v("以"),s("code",[t._v("vue+webpack举例")]),t._v("，"),s("a",{attrs:{href:""}},[t._v("参考地址")])]),t._v(" "),s("p",[t._v("加载组建("),s("code",[t._v(".vue")]),t._v(")到路由的时候，我们往往会这么写:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Radio")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'components/Radio/Radio'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("意思就是，当路由跳转到含有"),s("code",[t._v("radio")]),t._v("组件的时候，再加载"),s("code",[t._v("radio")]),t._v("。")]),t._v(" "),s("p",[t._v("而在具体的页面中加载子组件又该怎么做？关键就是"),s("code",[t._v("require")]),t._v("方法。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'child'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components/child.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("当"),s("code",[t._v("child")]),t._v("组件出现，以"),s("code",[t._v("v-show")]),t._v("或者"),s("code",[t._v("v-if")]),t._v("方式，就会通过这样的方式加载进来。")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://m.php.cn/article/394447.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),s("OutboundLink")],1),t._v("提供了详细的方法。")])])},[],!1,null,null,null);a.default=e.exports}}]);