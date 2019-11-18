(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{541:function(t,v,e){"use strict";e.r(v);var _=e(0),s=Object(_.a)({},function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"移动端适配-viewport原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移动端适配-viewport原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 移动端适配 - viewport原理")]),t._v(" "),e("blockquote",[e("p",[t._v("原理介绍")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%80%82%E9%85%8D---viewport%E5%8E%9F%E7%90%86"}},[t._v("移动端适配 - viewport原理")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#11-%E5%89%8D%E7%BD%AE%E7%9F%A5%E8%AF%86---%E5%83%8F%E7%B4%A0%E6%A6%82%E5%BF%B5flexiblejs"}},[t._v("1.1. 前置知识 - 像素概念&flexible.js")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#12-%E5%89%8D%E7%BD%AE%E7%9F%A5%E8%AF%86---%E5%8D%95%E4%BD%8Dvwvh"}},[t._v("1.2. 前置知识 - 单位"),e("code",[t._v("vw/vh")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#13-%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%80%82%E9%85%8D"}},[t._v("1.3. 移动端适配")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#131-bugs"}},[t._v("1.3.1. Bugs")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#14-qa"}},[t._v("1.4. Q&A")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#15-%E9%93%BE%E6%8E%A5"}},[t._v("1.5. 链接")])])])])]),t._v(" "),e("h2",{attrs:{id:"_1-1-前置知识-像素概念-flexible-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-前置知识-像素概念-flexible-js","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1. 前置知识 - 像素概念&flexible.js")]),t._v(" "),e("p",[t._v("这部分概念见"),e("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Tips/blob/master/docs/CSS/css-%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%83%8F%E7%B4%A0%E6%A6%82%E5%BF%B5.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS-像素概念"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("可以简单理解为"),e("code",[t._v("flexible.js")]),t._v("自动化版本。")]),t._v(" "),e("h2",{attrs:{id:"_1-2-前置知识-单位vw-vh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-前置知识-单位vw-vh","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2. 前置知识 - 单位"),e("code",[t._v("vw/vh")])]),t._v(" "),e("p",[e("code",[t._v("vw/vh")]),t._v("分别指的是"),e("code",[t._v("window.innerwidth/window.innerheight")]),t._v("(不包括滚动条)")]),t._v(" "),e("p",[t._v("和这两个属性相关的还有"),e("code",[t._v("screen.width/screen.height")]),t._v("。"),e("strong",[t._v("区别在于"),e("code",[t._v("window.innerwidth/window.innerheight")]),t._v("其实是响应的，如果窗口大小变化其数值是会改变，而"),e("code",[t._v("screen.width/screen.height")]),t._v("并不会因为窗口大小而改变")])]),t._v(" "),e("p",[t._v("这也就是，叫"),e("code",[t._v("vw/vh")]),t._v("是视口的尺寸的由来(窗口大小变化，可视化区域大小自然会变化)")]),t._v(" "),e("p",[e("strong",[t._v("注意：")])]),t._v(" "),e("blockquote",[e("p",[t._v("如果按住"),e("code",[t._v("ctrl")]),t._v("以及滚轮的缩小页面的话。也会更改"),e("code",[t._v("window.innerwidth/window.innerheight")]),t._v("，一般缩小放大"),e("code",[t._v("vw")]),t._v("，放大页面缩小"),e("code",[t._v("vw")]),t._v("(测试页面发现如果页面放大过大，可能会导致出现PC页面出现移动端画面，如果网站做了对应方案的话)。与之相关见"),e("a",{attrs:{href:""}},[t._v("Q&A2")])])]),t._v(" "),e("blockquote",[e("p",[t._v("注意缩放还可能是由于"),e("code",[t._v("meta-scale")]),t._v("设置小于的1的时候引起的。")])]),t._v(" "),e("h2",{attrs:{id:"_1-3-移动端适配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-移动端适配","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.3. 移动端适配")]),t._v(" "),e("blockquote",[e("p",[t._v("里面哪些postcss插件作用，一些是为了快速开发，另外一些是为解决bugs")])]),t._v(" "),e("p",[e("strong",[t._v("快速开发部分")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("px2vw")])]),t._v(" "),e("li",[e("code",[t._v("postcss-import")]),t._v(" - 导入"),e("code",[t._v("css")])]),t._v(" "),e("li",[e("code",[t._v("postcss-url")]),t._v(" - css文件内导入图片问题")]),t._v(" "),e("li",[e("code",[t._v("autoprefixer")]),t._v(" - 和考虑适配的浏览器范围有关，添加浏览器前缀")])]),t._v(" "),e("h3",{attrs:{id:"_1-3-1-bugs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-bugs","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.3.1. Bugs")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("postcss-write-svg")]),t._v("解决移动端"),e("code",[t._v("1px")]),t._v("问题。")])]),t._v(" "),e("p",[t._v("通过添加"),e("code",[t._v("boder-image")]),t._v("进行处理")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("code",[t._v("postcss-viewport-units")]),t._v("和"),e("code",[t._v("viewport-units-buggyfill")]),t._v("进行兼容性处理。因为有些浏览器不支持"),e("code",[t._v("viewport")]),t._v("单位。")])]),t._v(" "),e("p",[e("code",[t._v("postcss-viewport-units")]),t._v("用于插入"),e("code",[t._v("css content")]),t._v("(这一点没啥问题，用于快速开发的)。"),e("code",[t._v("viewport-units-buggyfill")]),t._v("用于生成"),e("code",[t._v("content")]),t._v("，内容就是样式文件。如下：")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".my-viewport-units-using-thingie")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50vmin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50vmax"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("50vh - 100px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("50vw - 100px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* hack to engage viewport-units-buggyfill */")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'viewport-units-buggyfill; width: 50vmin; height: 50vmax; top: calc(50vh - 100px); left: calc(50vw - 100px);'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("code",[t._v("content")]),t._v("内容可以实现对哪些不支持"),e("code",[t._v("vw")]),t._v("的浏览器适配？"),e("strong",[t._v("不支持意为着"),e("code",[t._v("vw")]),t._v("单位是无效的。当我们通过"),e("code",[t._v("px2vw")]),t._v("进行单位转换之后，"),e("code",[t._v("vw")]),t._v("单位无效。")])]),t._v(" "),e("p",[t._v("原因在于，在导入"),e("code",[t._v("viewport-units-buggyfill js")]),t._v("文件的时候，会获取设配像素比例以及宽高。")]),t._v(" "),e("p",[t._v("(由于"),e("code",[t._v("style")]),t._v("节点也是可以创建的，内部内容为"),e("code",[t._v("textContent")]),t._v("。因此，个人认为)")]),t._v(" "),e("p",[t._v("它会获取生成的"),e("code",[t._v("CSS")]),t._v("文件，然后通过事先的获取的设备信息，然后替换"),e("code",[t._v("vw->px")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"_1-4-q-a"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-q-a","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.4. Q&A")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("Q&A1 -")]),t._v(" 超出100"),e("code",[t._v("vw")]),t._v("解释")])]),t._v(" "),e("blockquote",[e("p",[t._v("在"),e("a",{attrs:{href:"https://www.w3cplus.com/css/vw-for-layout.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("viewport方案介绍"),e("OutboundLink")],1),t._v("介绍提到，比如当容器使用"),e("code",[t._v("vw")]),t._v("单位，"),e("code",[t._v("margin")]),t._v("采用"),e("code",[t._v("px")]),t._v("单位时，很容易造成整体宽度超过"),e("code",[t._v("100vw")]),t._v("(导致超出页面)。"),e("strong",[t._v("原因在于"),e("code",[t._v("vw")]),t._v("是会随着页面大小变化，但是"),e("code",[t._v("px")]),t._v("不会。")]),t._v(" 在一个比较小(宽度)的页面中，导致"),e("code",[t._v("px->vw")]),t._v("单位转换得到一个比较大的数值，加上原来的"),e("code",[t._v("vw")]),t._v("大小，就可能超出"),e("code",[t._v("100vw")])])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("strong",[t._v("Q&A2 -")]),t._v(" 放大缩小页面(指的是用"),e("code",[t._v("ctrl+滚轮")]),t._v(")，对布局影响。")])]),t._v(" "),e("blockquote",[e("p",[t._v("(在某些情况下成立，不一定有影响，来自"),e("a",{attrs:{href:"https://www.w3cplus.com/css/viewports.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("viewport介绍"),e("OutboundLink")],1),t._v(")，首先 "),e("strong",[t._v("缩小放大对"),e("code",[t._v("px")]),t._v("定义元素不影响，测试发现这些元素设置了多少"),e("code",[t._v("px")]),t._v("就是多少"),e("code",[t._v("px")]),t._v("。")]),t._v(" 其次，"),e("strong",[t._v("影响的是那些响应化的单位，例如"),e("code",[t._v("% vw")])])])]),t._v(" "),e("p",[t._v("例如设置父类是"),e("code",[t._v("100vw")]),t._v("，内部子元素是"),e("code",[t._v("500px")]),t._v("。那么放大大一定程度，导致父类"),e("code",[t._v("100vw")]),t._v("小于了\n"),e("code",[t._v("500px")]),t._v("(原因见"),e("a",{attrs:{href:""}},[t._v("前置知识 - 单位"),e("code",[t._v("vw/vh")])]),t._v(")。那么就会出现子类超过父类。")]),t._v(" "),e("h2",{attrs:{id:"_1-5-链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.5. 链接")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.w3cplus.com/css/vw-for-layout.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("viewport方案介绍"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.w3cplus.com/mobile/vw-layout-in-vue.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue with viewport"),e("OutboundLink")],1),t._v(" / 主要是用到了"),e("code",[t._v("postcss")]),t._v("插件，和"),e("code",[t._v("vue")]),t._v("关系不大。在任何地方都适用。")])])])},[],!1,null,null,null);v.default=s.exports}}]);