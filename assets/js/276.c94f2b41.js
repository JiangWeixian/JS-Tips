(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{476:function(v,_,e){"use strict";e.r(_);var t=e(0),o=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"http性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http性能优化"}},[v._v("#")]),v._v(" HTTP性能优化")]),v._v(" "),e("blockquote",[e("p",[v._v("缓存相关")])]),v._v(" "),e("h2",{attrs:{id:"前置知识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前置知识"}},[v._v("#")]),v._v(" 前置知识")]),v._v(" "),e("p",[e("code",[v._v("webpack")]),v._v("将很多文件打包成一个文件，优化的是页面应用的加载启动速度。而在"),e("code",[v._v("HTTP2.0")]),v._v("时代加入了并行的请求加载功能，有的时候也并不需要加载为同一个文件了。"),e("code",[v._v("webpack")]),v._v("优化的作用区域将会变小。")]),v._v(" "),e("ul",[e("li",[v._v("浏览器请求资源会在本地出现缓存")]),v._v(" "),e("li",[v._v("通过请求头来控制是否进行缓存")]),v._v(" "),e("li",[v._v("页面中文件名改变，本地缓存失效。即使文件中使用的相同的内容。")])]),v._v(" "),e("h2",{attrs:{id:"请求头设置缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求头设置缓存"}},[v._v("#")]),v._v(" 请求头设置缓存")]),v._v(" "),e("p",[e("a",{attrs:{href:"http://imweb.io/topic/5795dcb6fb312541492eda8c",target:"_blank",rel:"noopener noreferrer"}},[v._v("参考链接"),e("OutboundLink")],1)]),v._v(" "),e("p",[e("strong",[v._v("缓存设置")])]),v._v(" "),e("p",[v._v("总结如下，通常是"),e("code",[v._v("Pragma -> Cache-Control -> Expires")]),v._v("(也代表了优先级)")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("pragma")]),v._v(" - 是否缓存")]),v._v(" "),e("li",[e("code",[v._v("Expires")]),v._v(" - 服务器的资源失效时间。会接受到一个服务器发送得到到期时间，和本地时间比较。如果本地修改了时间，这个设置就没有了意义。")]),v._v(" "),e("li",[e("code",[v._v("Cache-Control")]),v._v(" - 本地设置缓存配置。可选"),e("code",[v._v("value")]),v._v("很多，点击上面链接查看。如"),e("code",[v._v("Cache-Control: max-age=3600, must-revalidate")]),v._v("前部分是客户端设置，后面则是服务器返回情况")])]),v._v(" "),e("p",[e("code",[v._v("pragma&Cache-Control")]),v._v("客户端和服务器都有权限，"),e("code",[v._v("expires")]),v._v("只有服务器都有权限控制。")]),v._v(" "),e("p",[e("strong",[v._v("缓存验证")])]),v._v(" "),e("p",[v._v("如果本地资源过期！就是以上设置字段到期了，就要向服务器重新发生请求。服务器验证这次请求和上一次的区别：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("Last-Modified")]),v._v(" - 分别是上一次修改时间，由服务器在上一次发送回来。并在客户端这次请求时加上，来帮助服务端验证资源。(也就是客户端发送时间和服务器相关资源修改时间比较)。")]),v._v(" "),e("li",[e("code",[v._v("Etag")]),v._v(" - 文件"),e("code",[v._v("hash")]),v._v("值，类似"),e("code",[v._v("webpack")]),v._v("那种方式，如果资源没有修改，"),e("code",[v._v("hash")]),v._v("数值是不会改变的。客户端和服务器发送该字段的方式和"),e("code",[v._v("Last-Modified")]),v._v("一致。")])]),v._v(" "),e("p",[e("strong",[v._v("注意，这些数值都是服务器指定的，而不是客户端。客户端由对应的字段，将获得信息发送过去！")])]),v._v(" "),e("h2",{attrs:{id:"_200-vs-304"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_200-vs-304"}},[v._v("#")]),v._v(" 200 vs 304")]),v._v(" "),e("p",[e("code",[v._v("200")]),v._v("代表资源请求成功，而"),e("code",[v._v("304")]),v._v("代表服务器资源和本地并没有改变。")]),v._v(" "),e("p",[v._v("当我们请求服务器资源的时候，可能会得到"),e("code",[v._v("200")]),v._v("或者"),e("code",[v._v("304")]),v._v("两个响应码。而这两个码字又在什么情况下起效，对性能优化有什么启示？")]),v._v(" "),e("p",[v._v("直观的感觉：如果本地资源和服务器资源并没有什么改变。那就并不需要再一次下载资源。")]),v._v(" "),e("p",[v._v("结合以上"),e("strong",[v._v("缓存设置")]),v._v("请求头和响应头字段，可以得到以下结论")]),v._v(" "),e("ul",[e("li",[v._v("如果本地资源设置的缓存时间没有过期，浏览器就不会重新发送资源请求。就会从本地缓存中读取"),e("code",[v._v("200 (from cached)")]),v._v("这是相应的状态返回码。")])]),v._v(" "),e("p",[v._v("还有一种情况，如果资源过期了，向服务器发送请求之后，其实服务器相关资源并没有修改，只是单纯的过期了。这时候该怎么办？")]),v._v(" "),e("ul",[e("li",[v._v("服务器会在响应字段中加入"),e("code",[v._v("Last-Modified or ETag")]),v._v("代表上一次修改的时间。那么当本地资源过期之后，客户端再次发送请求之后加入该字段向服务器请求，服务器比较之后，发现资源没有修改。那么就会返回"),e("code",[v._v("304")]),v._v("状态，代表没有修改。仍旧是本地读取缓存。")])]),v._v(" "),e("p",[v._v("除此之外的情况，正常情况下，都是"),e("code",[v._v("200")]),v._v("并下载资源。")]),v._v(" "),e("h3",{attrs:{id:"用户行为"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户行为"}},[v._v("#")]),v._v(" 用户行为")]),v._v(" "),e("p",[v._v("以上行为是否在什么情况下都是有效的？"),e("strong",[v._v("不是！")])]),v._v(" "),e("p",[v._v("用户浏览一个网页的时候行为可能有"),e("strong",[v._v("输入url访问、刷新(F5)，以及强制涮新(Ctrl+F5)")])]),v._v(" "),e("p",[v._v("以上行为和"),e("strong",[v._v("缓存设置")]),v._v("相关，和"),e("strong",[v._v("缓存验证")]),v._v("无关！")]),v._v(" "),e("ol",[e("li",[v._v("输入url访问 - 浏览器会验证过期时间和本地时间，然后判断是否使用本地缓存。")]),v._v(" "),e("li",[e("strong",[v._v("刷新(F5)")]),v._v(" - "),e("strong",[v._v("缓存设置")]),v._v("设置无效，浏览器一定会向服务器发送请求，但是服务器可以进行"),e("strong",[v._v("缓存验证")])]),v._v(" "),e("li",[e("strong",[v._v("强制涮新(Ctrl+F5)")]),v._v(" - "),e("strong",[v._v("缓存设置、缓存验证")]),v._v("都失效了，就如同第一次进入该网页一样。")])]),v._v(" "),e("h3",{attrs:{id:"避免304"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#避免304"}},[v._v("#")]),v._v(" 避免304")]),v._v(" "),e("p",[v._v("该思想的出发点在于，对于资源的控制，希望由服务器来控制，而不是客户端。我们来拆解如何实现：")]),v._v(" "),e("ul",[e("li",[v._v("不让浏览器控制 - 也就是浏览器当以第一次获得资源之后。不再向服务端发送请求。\n"),e("ul",[e("li",[v._v("设置一个超长的缓存时间，浏览器永远默认使用本地缓存")])])])]),v._v(" "),e("p",[v._v("那如果资源改变了怎么办？")]),v._v(" "),e("p",[v._v("结合"),e("code",[v._v("Etag")]),v._v("字段理解（虽然这是服务器验证行为），但是可以得到结论，如果将"),e("code",[v._v("hash")]),v._v("值作为文件名，如果文件内容没有改变，"),e("code",[v._v("hash")]),v._v("值是不会变的。")]),v._v(" "),e("p",[v._v("当我们直接使用含有"),e("code",[v._v("hash")]),v._v("值的文件插入到"),e("code",[v._v("html")]),v._v("中（而不是"),e("code",[v._v("index.css")]),v._v("此类通用且恒定的文件名）。就像是"),e("code",[v._v("webpack")]),v._v("做的那样。")]),v._v(" "),e("p",[v._v("服务器对相应的文件作为了修改之后，"),e("code",[v._v("html")]),v._v("相应的资源文件名就会改变。当浏览网页：")]),v._v(" "),e("ol",[e("li",[v._v("网页文件名没变，地址没变。进入到同一个网页，发现网页内部的资源文件名变了")]),v._v(" "),e("li",[v._v("资源失效，即使设置了缓存（因为之前那个缓存并不是针对此时改变之后的文件的）")]),v._v(" "),e("li",[v._v("重新请求，达到了服务器控制资源版本的目的，也避免了"),e("code",[v._v("304")])])]),v._v(" "),e("p",[e("strong",[v._v("以上是建立在"),e("code",[v._v("index.html")]),v._v("不缓存的前提上，但是"),e("code",[v._v("html")]),v._v("文件依旧是会缓存的！")]),v._v(" 将"),e("code",[v._v("html")]),v._v("文件理解为普通资源文件就不难理解了。")]),v._v(" "),e("blockquote",[e("p",[v._v("实际情况中也的确如此")])]),v._v(" "),e("p",[v._v("因为"),e("code",[v._v("html")]),v._v("文件名不带有"),e("code",[v._v("hash")]),v._v("，所以缓存通过"),e("a",{attrs:{href:""}},[v._v("## 请求头设置缓存")]),v._v("中提到的 "),e("strong",[v._v("三个头进行设置")]),v._v(" 进行控制。")]),v._v(" "),e("p",[v._v("设置服务器来判断是否进行缓存，以及返回最新结果。")])])}),[],!1,null,null,null);_.default=o.exports}}]);