(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{475:function(_,e,v){"use strict";v.r(e);var t=v(0),a=Object(t.a)({},function(){var _=this,e=_.$createElement,v=_._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"构建web应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#构建web应用","aria-hidden":"true"}},[_._v("#")]),_._v(" 构建Web应用")]),_._v(" "),v("blockquote",[v("p",[_._v("Web需要的基本知识")])]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#1-%E6%9E%84%E5%BB%BAweb%E5%BA%94%E7%94%A8"}},[_._v("1. 构建Web应用")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#11-%E5%8E%9F%E7%94%9F%E5%9F%BA%E6%9C%AC%E7%9F%A5%E8%AF%86"}},[_._v("1.1. 原生基本知识")])]),_._v(" "),v("li",[v("a",{attrs:{href:"#12-cookie"}},[_._v("1.2. cookie")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#121-%E6%80%A7%E8%83%BD"}},[_._v("1.2.1. 性能")])])])]),_._v(" "),v("li",[v("a",{attrs:{href:"#13-session"}},[_._v("1.3. session")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#131-%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%9F%A5%E8%AF%A2"}},[_._v("1.3.1. 字符串查询")])]),_._v(" "),v("li",[v("a",{attrs:{href:"#132-%E7%BC%93%E5%AD%98%E9%97%AE%E9%A2%98"}},[_._v("1.3.2. 缓存问题")])])])]),_._v(" "),v("li",[v("a",{attrs:{href:"#14-%E5%AE%89%E5%85%A8"}},[_._v("1.4. 安全")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#141-xss"}},[_._v("1.4.1. XSS")])]),_._v(" "),v("li",[v("a",{attrs:{href:"#142-csrf"}},[_._v("1.4.2. csrf")])])])]),_._v(" "),v("li",[v("a",{attrs:{href:"#15-%E6%95%B0%E6%8D%AE%E4%B8%8A%E4%BC%A0"}},[_._v("1.5. 数据上传")])]),_._v(" "),v("li",[v("a",{attrs:{href:"#16-%E6%80%A7%E8%83%BD"}},[_._v("1.6. 性能")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#161-%E5%AF%B9%E4%BA%8E%E6%95%B0%E6%8D%AE%E4%B8%8A%E4%BC%A0"}},[_._v("1.6.1. 对于数据上传")])])])]),_._v(" "),v("li",[v("a",{attrs:{href:"#17-%E8%B7%AF%E7%94%B1%E5%92%8C%E4%B8%AD%E9%97%B4%E4%BB%B6"}},[_._v("1.7. 路由和中间件")])]),_._v(" "),v("li",[v("a",{attrs:{href:"#18-%E9%A1%B5%E9%9D%A2%E6%B8%B2%E6%9F%93---%E4%B8%AA%E4%BA%BA%E8%A7%89%E5%BE%97%E5%BE%88%E9%87%8D%E8%A6%81"}},[_._v("1.8. 页面渲染 - 个人觉得很重要")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#181-%E4%B8%8B%E8%BD%BD"}},[_._v("1.8.1. 下载")])])])]),_._v(" "),v("li",[v("a",{attrs:{href:"#19-ssr"}},[_._v("1.9. SSR")])])])])]),_._v(" "),v("h2",{attrs:{id:"_1-1-原生基本知识"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-原生基本知识","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.1. 原生基本知识")]),_._v(" "),v("p",[_._v("原生Nodejs就带有很多解析字符串之类的方法和函数。")]),_._v(" "),v("h2",{attrs:{id:"_1-2-cookie"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-cookie","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.2. cookie")]),_._v(" "),v("p",[_._v("关于"),v("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Books/tree/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH22-%E7%A6%BB%E7%BA%BF%E5%BA%94%E7%94%A8%E5%92%8C%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"}},[_._v("cookie"),v("OutboundLink")],1),_._v("介绍，在JS高级程序设计已经解释过了。")]),_._v(" "),v("ul",[v("li",[_._v("服务器通过"),v("code",[_._v("set-cookie")]),_._v("来设置客户端"),v("code",[_._v("cookie")]),_._v("。但是 "),v("strong",[_._v("客户端可以供过"),v("code",[_._v("document.cookie")]),_._v("来设置，最好通过设置"),v("code",[_._v("httponly")]),_._v("来限制"),v("code",[_._v("document.cookie")]),_._v("无法使用")]),_._v("。客户端是通过"),v("code",[_._v("secure")]),_._v("的"),v("code",[_._v("cookie")]),_._v("字段。")])]),_._v(" "),v("h3",{attrs:{id:"_1-2-1-性能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-性能","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.2.1. 性能")]),_._v(" "),v("ul",[v("li",[_._v("cookie不要太大")]),_._v(" "),v("li",[_._v("httponly")]),_._v(" "),v("li",[_._v("不同域名设置不同"),v("code",[_._v("cookie")]),_._v("，类似只设置了"),v("code",[_._v("baidu.com")]),_._v("下面的"),v("code",[_._v("cookie")]),_._v("那么所有"),v("code",[_._v("baidu.com")]),_._v("下面的"),v("code",[_._v("path")]),_._v("都会发送。")])]),_._v(" "),v("h2",{attrs:{id:"_1-3-session"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-session","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.3. session")]),_._v(" "),v("p",[_._v("cookie和session成对出现。")]),_._v(" "),v("p",[_._v("文中一般设置在"),v("code",[_._v("req.session")]),_._v("设置或者修改，借助"),v("code",[_._v("req")]),_._v("全局性，然后通过获取"),v("code",[_._v("req.session")]),_._v("(已经重新设置或修改过了)然后设置到"),v("code",[_._v("res.cookie")]),_._v("中。")]),_._v(" "),v("p",[_._v("设置方法如下：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E5%AD%A6%E4%B9%A0Nodejs/CH8-%E6%9E%84%E5%BB%BA%E7%BD%91%E7%BB%9C%E5%BA%94%E7%94%A8/img/%E8%AE%BE%E7%BD%AEcookie%E4%B8%8A%E7%9A%84sessionid.PNG",alt:"sessionincookie"}})]),_._v(" "),v("h3",{attrs:{id:"_1-3-1-字符串查询"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-字符串查询","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.3.1. 字符串查询")]),_._v(" "),v("p",[_._v("就是url地址上查询方式。"),v("strong",[_._v("将sessionid放到地址上。")])]),_._v(" "),v("p",[_._v("文中提到一个重定向方法，就是如果url上没有sessionid，那么就设置重定向，关键在于"),v("code",[_._v("res")]),_._v("中"),v("code",[_._v("location")]),_._v("的值，以及302状态码字。服务器会重定向到"),v("code",[_._v("location")]),_._v("上面。")]),_._v(" "),v("h3",{attrs:{id:"_1-3-2-缓存问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-缓存问题","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.3.2. 缓存问题")]),_._v(" "),v("p",[_._v("session一般存储在"),v("code",[_._v("redis")]),_._v("上面，一般和"),v("code",[_._v("session")]),_._v("的存储服务保持很长的连接。减少网络消耗。因为网络消耗的事件是大于硬盘的。")]),_._v(" "),v("h2",{attrs:{id:"_1-4-安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-安全","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.4. 安全")]),_._v(" "),v("p",[_._v("具体可见"),v("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Tips/blob/master/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/xss%2Bcsrf.md",target:"_blank",rel:"noopener noreferrer"}},[_._v("xss-csrf"),v("OutboundLink")],1),_._v("分析。")]),_._v(" "),v("h3",{attrs:{id:"_1-4-1-xss"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-1-xss","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.4.1. XSS")]),_._v(" "),v("p",[_._v("脚本攻击，前端解析字符串之后，直接"),v("code",[_._v("innerHTML=一些数据")]),_._v("。如果这些数据带有"),v("code",[_._v("script")]),_._v("脚本，就会被解惑"),v("code",[_._v("cookie")])]),_._v(" "),v("h3",{attrs:{id:"_1-4-2-csrf"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-2-csrf","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.4.2. csrf")]),_._v(" "),v("p",[v("strong",[_._v("不和xss攻击一起考虑")])]),_._v(" "),v("p",[_._v("向同一个域名发送数据会发送"),v("code",[_._v("cookie")]),_._v("。复制一份表单到新的页面，表单上的"),v("code",[_._v("path")]),_._v("就是目标地址，然后发送数据时候会发送"),v("code",[_._v("cookie")]),_._v("。导致了"),v("code",[_._v("csrf")])]),_._v(" "),v("p",[_._v("为了预防，"),v("strong",[_._v("加上随机token")]),_._v("，在以下情况下，页面时候服务端返回的，所以"),v("code",[_._v(".html")]),_._v("文件是由模板生成，可以带有服务端随机的生成的随机码。"),v("strong",[_._v("复制一份表单到新的页面并不能够获取到这个随机码，因为每次发送请求都会改变")])]),_._v(" "),v("p",[_._v("同时网上说的"),v("code",[_._v("jwt")]),_._v("可以预防，我存有疑惑，因为"),v("code",[_._v("jwt")]),_._v("一般放在"),v("code",[_._v("localstorage")]),_._v("，所以在不考虑"),v("code",[_._v("xss")]),_._v("情况下。这个是可以预防的。")]),_._v(" "),v("p",[v("strong",[_._v("和xss攻击一起考虑")])]),_._v(" "),v("p",[_._v("所以我们不能使用"),v("code",[_._v("localstorage")]),_._v("中的"),v("code",[_._v("jwt")]),_._v("，但是可以考虑使用"),v("code",[_._v("sessionstorage")]),_._v("里面的数据。")]),_._v(" "),v("h2",{attrs:{id:"_1-5-数据上传"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-数据上传","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.5. 数据上传")]),_._v(" "),v("p",[_._v("不同数据上传需要设置不同的"),v("code",[_._v("content-type")]),_._v("。然后在服务进行对应解析。在"),v("code",[_._v("on data")]),_._v("事件中暂存到buffer，然后进一步处理buffer")]),_._v(" "),v("ul",[v("li",[_._v("表单 - 一般就是"),v("code",[_._v("name=xx&job=yyy")]),_._v("格式\n"),v("ul",[v("li",[_._v("前端 - application/x-www-form-urlencoded")]),_._v(" "),v("li",[_._v("服务器 - queryString")])])]),_._v(" "),v("li",[_._v("json&xml\n"),v("ul",[v("li",[_._v("前端 - 为application/json")]),_._v(" "),v("li",[_._v("后台 - JSON解析，xml需要转换为json")])])]),_._v(" "),v("li",[_._v("文件\n"),v("ul",[v("li",[_._v("前端 -  multipart/form-data")]),_._v(" "),v("li",[_._v("后台- 通过 formidable")])])])]),_._v(" "),v("h2",{attrs:{id:"_1-6-性能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-性能","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.6. 性能")]),_._v(" "),v("p",[_._v("关于这部分，我之前总结过"),v("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Tips/blob/master/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/HTTP-%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.md",target:"_blank",rel:"noopener noreferrer"}},[_._v("一篇文章"),v("OutboundLink")],1),_._v(" - 前三个客户端/服务器都能够设置，后面两个服务器设置，然后客户端再下一次请求的时候发送。")]),_._v(" "),v("p",[_._v("文中提到的最佳实践和总结的一样，设置一个永远不会到期的时间，然后通过服务器控制 "),v("strong",[_._v("文件名")]),_._v("来实现客户端更新。")]),_._v(" "),v("h3",{attrs:{id:"_1-6-1-对于数据上传"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-1-对于数据上传","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.6.1. 对于数据上传")]),_._v(" "),v("ul",[v("li",[_._v("限制数据大小")]),_._v(" "),v("li",[_._v("通过"),v("code",[_._v("stream")]),_._v("形式(就是先将数据读取到磁盘中然后处理数据，直接解析数据是在内存中)解析，就像是读取文件那样。")])]),_._v(" "),v("h2",{attrs:{id:"_1-7-路由和中间件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-路由和中间件","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.7. 路由和中间件")]),_._v(" "),v("p",[_._v("解析的是"),v("code",[_._v("express")]),_._v("框架中，"),v("code",[_._v("use")]),_._v("使用路由，和中间件的解析。")]),_._v(" "),v("p",[_._v("中间件是匹配所有路由的方法，用来处理数据。")]),_._v(" "),v("p",[_._v("看完只有一个感觉，你还是使用路由吧。")]),_._v(" "),v("h2",{attrs:{id:"_1-8-页面渲染-个人觉得很重要"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-页面渲染-个人觉得很重要","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.8. 页面渲染 - 个人觉得很重要")]),_._v(" "),v("p",[_._v("这里指的是将服务器发送的数据直接渲染到浏览器。也就是"),v("code",[_._v("SSR")])]),_._v(" "),v("p",[_._v("因为通过设置"),v("code",[_._v("res.writeHead")]),_._v("可以控制浏览器如何处理"),v("code",[_._v("SSR")]),_._v("。")]),_._v(" "),v("p",[_._v("文中提到了"),v("code",[_._v("mime")]),_._v("判断文件类型(可以写到head那种)")]),_._v(" "),v("h3",{attrs:{id:"_1-8-1-下载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-1-下载","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.8.1. 下载")]),_._v(" "),v("p",[v("code",[_._v('Content-Disposition: attachment; filename="filename.ext"')]),_._v("浏览器弹出窗口下载。")]),_._v(" "),v("h2",{attrs:{id:"_1-9-ssr"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-ssr","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.9. SSR")]),_._v(" "),v("p",[_._v("通过"),v("code",[_._v("res.end()")]),_._v("发送页面数据。让浏览器渲染。")])])},[],!1,null,null,null);e.default=a.exports}}]);