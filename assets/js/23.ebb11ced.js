(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{234:function(_,v,t){_.exports=t.p+"assets/img/firstpage.e768fd90.png"},289:function(_,v,t){"use strict";t.r(v);var r=t(0),e=Object(r.a)({},(function(){var _=this,v=_.$createElement,r=_._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[r("h1",{attrs:{id:"ssr-csr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssr-csr"}},[_._v("#")]),_._v(" SSR&CSR")]),_._v(" "),r("blockquote",[r("p",[_._v("分别是服务器端渲染和客户端渲染")])]),_._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#ssrcsr"}},[_._v("SSR&CSR")]),_._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#ssrcsr%E5%90%8D%E8%AF%8D%E9%87%8A%E4%B9%89"}},[_._v("SSR&CSR名词释义")]),_._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E9%97%AE%E9%A2%98%E5%AD%98%E5%9C%A8"}},[_._v("问题存在")])])])]),_._v(" "),r("li",[r("a",{attrs:{href:"#%E8%BF%9B%E9%98%B6"}},[_._v("进阶")]),_._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#csr%E4%BC%98%E5%8C%96"}},[_._v("CSR优化")]),_._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E9%AA%A8%E6%9E%B6%E5%B1%8F"}},[_._v("骨架屏")])])])])])]),_._v(" "),r("li",[r("a",{attrs:{href:"#%E9%93%BE%E6%8E%A5"}},[_._v("链接")])])])])]),_._v(" "),r("h2",{attrs:{id:"ssr-csr名词释义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssr-csr名词释义"}},[_._v("#")]),_._v(" SSR&CSR名词释义")]),_._v(" "),r("ul",[r("li",[_._v("SSR - 就是后端渲染")]),_._v(" "),r("li",[_._v("CSR - 前端渲染")])]),_._v(" "),r("p",[_._v("就如同之前学习"),r("code",[_._v("nodejs")]),_._v("服务器那样，希望请求一个地址，然后返回一个网页。")]),_._v(" "),r("p",[_._v("这个网页是后端生成（不讨论是以怎样的方式），浏览器得到保存在返回"),r("code",[_._v("body")]),_._v("内部的数据。")]),_._v(" "),r("p",[_._v("然后就把这个页面呈现到浏览器上。")]),_._v(" "),r("p",[_._v("这就是后端渲染。")]),_._v(" "),r("p",[_._v("而前端渲染，类似"),r("code",[_._v("github.io")]),_._v("的个人博客。就是写好一个"),r("code",[_._v("html")]),_._v("放在服务器上，页面数据不再是在返回"),r("code",[_._v("body")]),_._v("内部。")]),_._v(" "),r("p",[_._v("前端渲染关注UI的开发，数据请求则是通过"),r("code",[_._v("ajax")]),_._v("等方式。")]),_._v(" "),r("h3",{attrs:{id:"问题存在"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题存在"}},[_._v("#")]),_._v(" 问题存在")]),_._v(" "),r("p",[_._v("这里说说"),r("code",[_._v("SSR")]),_._v("优势，作为一个前端"),r("code",[_._v("CSR")]),_._v("的优势就不说了。")]),_._v(" "),r("ul",[r("li",[_._v("爬虫 - 可能是历史相关，"),r("code",[_._v("SSR")]),_._v("可以被爬虫很好的理解。而"),r("code",[_._v("CSR")]),_._v("不行。")]),_._v(" "),r("li",[_._v("首页白屏 - 对于"),r("code",[_._v("SSR")]),_._v("来说，一个地址对应一个页面，一个页面对应一个请求数据"),r("code",[_._v("body")]),_._v("。所以对单个页面来说，页面数据更少（虽然服务器压力大）。和"),r("code",[_._v("SPA")]),_._v("那种将所有数据打包在一起的情况，第一次加载页面的话，启动速度更快。")])]),_._v(" "),r("h2",{attrs:{id:"进阶"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#进阶"}},[_._v("#")]),_._v(" 进阶")]),_._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/camsong/blog/issues/8",target:"_blank",rel:"noopener noreferrer"}},[_._v("这篇文章写的更精细，如果全部明白，理解也就差不多了"),r("OutboundLink")],1)]),_._v(" "),r("h3",{attrs:{id:"csr优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#csr优化"}},[_._v("#")]),_._v(" CSR优化")]),_._v(" "),r("p",[_._v("针对SSR优势优化CSR:")]),_._v(" "),r("ul",[r("li",[_._v("首页白屏 - 起源就是加载时候请求过多的后台资源，请求越多就加载时间越长。就像是页面没有的东西，然后突然出现了一堆数据。具体优化步骤可参考"),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/29433875",target:"_blank",rel:"noopener noreferrer"}},[_._v("此链接"),r("OutboundLink")],1),_._v("。")])]),_._v(" "),r("p",[_._v("不过"),r("code",[_._v("vue-router")]),_._v("出现其实也就是为了这个方面而发生的优化。")]),_._v(" "),r("p",[_._v("里面提到了一个几点值得注意，是之后项目优化的方向：")]),_._v(" "),r("ol",[r("li",[_._v("优化视觉体验 - 骨架屏，就是在数据还有加载进来的时候，出现类似下图的效果：")])]),_._v(" "),r("p",[r("img",{attrs:{src:t(234),alt:"首屏优化"}})]),_._v(" "),r("p",[r("strong",[_._v("优化思路:")]),_._v(" 写出数据未加载时候默认样式，图片，字体背景等。可是如何在加载完成之后去掉？")]),_._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[_._v("主要是图片引起图片加载时间，可以使用"),r("code",[_._v("v-lazy")]),_._v("进行图片的懒加载。")]),_._v(" "),r("li",[_._v("过渡效果，特别是路由的过渡效果。给了后台请求数据的时间。")])]),_._v(" "),r("ul",[r("li",[_._v("SEO - 爬虫，这一点好像"),r("a",{attrs:{href:"https://www.zhihu.com/question/68677077",target:"_blank",rel:"noopener noreferrer"}},[_._v("不需要前端来考虑"),r("OutboundLink")],1),_._v("，几个搜索公司都做的不错。")])]),_._v(" "),r("h4",{attrs:{id:"骨架屏"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#骨架屏"}},[_._v("#")]),_._v(" 骨架屏")]),_._v(" "),r("p",[_._v("骨架屏幕是我没有接触的一点，我需要进一步找资料学习实践，再另外写一篇文章。至于另外两个实现起来都比较简单")]),_._v(" "),r("ol",[r("li",[_._v("图片懒加载 - "),r("code",[_._v("v-lazy")])]),_._v(" "),r("li",[_._v("过渡 - 路由过渡效果")])]),_._v(" "),r("h2",{attrs:{id:"链接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[_._v("#")]),_._v(" 链接")]),_._v(" "),r("p",[r("a",{attrs:{href:"https://zh.nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[_._v("Nuxt - Vue的服务端渲染"),r("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=e.exports}}]);