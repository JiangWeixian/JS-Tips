(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{426:function(e,v,_){"use strict";_.r(v);var a=_(0),n=Object(a.a)({},function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"npm-dependences"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#npm-dependences","aria-hidden":"true"}},[e._v("#")]),e._v(" NPM - dependences")]),e._v(" "),_("blockquote",[_("p",[e._v("devDependencies & dependencies & peerDependencies 之前区别作用")])]),e._v(" "),_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#在未发布为独立的npm包前"}},[e._v("在未发布为独立的NPM包前")])]),_("li",[_("a",{attrs:{href:"#在独立npm包中"}},[e._v("在独立NPM包中")])])])]),_("p"),e._v(" "),_("h2",{attrs:{id:"在未发布为独立的npm包前"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#在未发布为独立的npm包前","aria-hidden":"true"}},[e._v("#")]),e._v(" 在未发布为独立的NPM包前")]),e._v(" "),_("p",[e._v("在没有作为独立的 NPM 包发布的的时候。"),_("code",[e._v("devDependencies & dependencies")]),e._v("是比较弱约束的作用的。")]),e._v(" "),_("p",[e._v("因为前者是否会被打包进来？（"),_("strong",[e._v("主要是由打包工具决定的！")]),e._v("）")]),e._v(" "),_("p",[e._v("比较清晰的认识是：")]),e._v(" "),_("ol",[_("li",[e._v("前者是不会被打包进来的")]),e._v(" "),_("li",[e._v("后者则是会被在生产环境中使用的")])]),e._v(" "),_("p",[e._v("此时"),_("code",[e._v("perrDependencies")]),e._v("是基本是没有什么作用的。")]),e._v(" "),_("h2",{attrs:{id:"在独立npm包中"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#在独立npm包中","aria-hidden":"true"}},[e._v("#")]),e._v(" 在独立NPM包中")]),e._v(" "),_("p",[e._v("在"),_("code",[e._v("npm install xxx")]),e._v("的时候，"),_("code",[e._v("xxx")]),e._v("的"),_("code",[e._v("package.json")]),e._v("同时也会被下载。")]),e._v(" "),_("p",[e._v("此时"),_("code",[e._v("devDependencies & dependencies")]),e._v("就会发生作用。")]),e._v(" "),_("p",[e._v("此时前者不会被下载，而后者则会被下载（因为它被认为一个 npm 包正常运行的依赖。）")]),e._v(" "),_("p",[_("code",[e._v("peerDependencies")]),e._v("主要解决是一种嵌套的的包关系。")]),e._v(" "),_("p",[e._v("因为如果"),_("code",[e._v("packagea")]),e._v("作为"),_("code",[e._v("packageb")]),e._v("的"),_("code",[e._v("dependencies")]),e._v("。当我们下载"),_("code",[e._v("packageb")]),e._v("的时候，会发生：")]),e._v(" "),_("ol",[_("li",[_("code",[e._v("packagea")]),e._v("会被一同下载")]),e._v(" "),_("li",[_("strong",[e._v("但是"),_("code",[e._v("packagea")]),e._v("只能够被"),_("code",[e._v("packageb")]),e._v("使用，")]),e._v(" 也就是说我们无法直接在项目中使用"),_("code",[e._v("packagea")])])]),e._v(" "),_("p",[e._v("我们能够做的是将"),_("code",[e._v("packagea")]),e._v("列为"),_("code",[e._v("packageb")]),e._v("的"),_("code",[e._v("peerDependencies")]),e._v("。"),_("strong",[e._v("那么"),_("code",[e._v("packagea")]),e._v("不仅能被"),_("code",[e._v("packageb")]),e._v("使用也能够被项目使用")])]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.cnblogs.com/wonyun/p/9692476.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),_("OutboundLink")],1)])])])},[],!1,null,null,null);v.default=n.exports}}]);