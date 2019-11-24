(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{462:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"离线存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#离线存储"}},[t._v("#")]),t._v(" 离线存储")]),t._v(" "),a("blockquote",[a("p",[t._v("manifest方案")])]),t._v(" "),a("h2",{attrs:{id:"前置知识-什么是离线存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置知识-什么是离线存储"}},[t._v("#")]),t._v(" 前置知识 - 什么是离线存储")]),t._v(" "),a("p",[t._v("目的就是为了达到即使断网也能够打开网站。")]),t._v(" "),a("p",[t._v("从以上描述就可以知道只是适用部分的网站，不适合那些依赖于服务器的。可以适用于本地游戏，或者博客。")]),t._v(" "),a("p",[t._v("除了"),a("code",[t._v("manifest")]),t._v("这一个之外，"),a("strong",[t._v("PWA")]),t._v("是新兴的方案，一种实现离线"),a("code",[t._v("webapp")]),t._v("的方案。不局限于前端框架，任何前端框架都可以实现这两种的离线话存储方案。")]),t._v(" "),a("h2",{attrs:{id:"如何使用。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用。"}},[t._v("#")]),t._v(" 如何使用。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://yanhaijing.com/html/2014/12/28/html5-manifest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用grunt配置"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/59cdb48b518825788565c5f0",target:"_blank",rel:"noopener noreferrer"}},[t._v("另一个教程"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.html5rocks.com/zh/tutorials/appcache/beginner/",target:"_blank",rel:"noopener noreferrer"}},[t._v("提供了如何更新的方案介绍，以及manifest十分详细介绍"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("开启")])]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v('<html lang="en" manifest="index.manifest">')]),t._v("开启离线更新")]),t._v(" "),a("p",[a("strong",[t._v("manifest中文件中列出的就是需要缓存的文件")])]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CACHE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MANIFEST")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2010")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("06")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v2\n\n# Explicitly cached "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'master entries'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CACHE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("favicon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ico\nindex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html\nstylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css\nimages"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("logo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\nscripts"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n\n# Resources that require the user to be online"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NETWORK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\nlogin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("myapi\nhttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("twitter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n\n# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html will be served "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py is inaccessible\n# offline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jpg will be served "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" place "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" all images "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" images"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("large"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n# offline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html will be served "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" place "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" all other "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html files\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FALLBACK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html\nimages"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("large"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" images"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("offline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jpg\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("offline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html\n")])])]),a("ul",[a("li",[a("code",[t._v("CACHE")]),t._v(" - 是缓存文件列表")]),t._v(" "),a("li",[a("code",[t._v("NETWORK")]),t._v(" - 白名单服务器，请求的文件不会缓存")]),t._v(" "),a("li",[a("code",[t._v("FALLBACK")]),t._v(" - 资源请求失败的情况，虽然缓存了部分资源，总有些资源是没有缓存的，也没有办法缓存。")])]),t._v(" "),a("p",[a("strong",[t._v("更新")])]),t._v(" "),a("ul",[a("li",[t._v("更改"),a("code",[t._v("manifest")]),t._v("文件 - 如上面里面的"),a("code",[t._v("# 2010-06-18:v2")]),t._v("更改一下字符就可以")]),t._v(" "),a("li",[t._v("通过"),a("code",[t._v("JS")]),t._v("接口函数 - 如第三个链接里面提到的那样")]),t._v(" "),a("li",[t._v("清除浏览器缓存，没有缓存了自然更新")])])])}),[],!1,null,null,null);s.default=e.exports}}]);