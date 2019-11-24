(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{386:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"xhr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xhr"}},[t._v("#")]),t._v(" xhr")]),t._v(" "),s("blockquote",[s("p",[t._v("ajax")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#xhr"}},[t._v("xhr")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E5%89%8D%E7%BD%AE---%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8"}},[t._v("前置 - 如何使用")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#post---%E5%8F%91%E9%80%81%E6%95%B0%E6%8D%AE"}},[t._v("POST - 发送数据")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E7%89%B9%E5%88%AB%E7%9A%84%E6%95%B0%E6%8D%AE"}},[t._v("特别的数据")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E6%9B%B4%E5%A4%9A%E7%BB%86%E8%8A%82"}},[t._v("更多细节")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E8%B7%A8%E5%9F%9F%E5%A4%84%E7%90%86"}},[t._v("跨域处理")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#cors"}},[t._v("CORS")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%B8%A6%E6%9C%89%E5%87%AD%E8%AF%81%E7%9A%84%E5%8F%91%E9%80%81%E8%AF%B7%E6%B1%82---%E5%8F%AF%E8%83%BD%E6%9C%89%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98"}},[t._v("带有凭证的发送请求 - 可能有安全问题")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%85%B6%E4%BB%96%E8%B7%A8%E5%9F%9F%E6%8A%80%E6%9C%AF"}},[t._v("其他跨域技术")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#comet"}},[t._v("comet")])])])])]),t._v(" "),s("h2",{attrs:{id:"前置-如何使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前置-如何使用"}},[t._v("#")]),t._v(" 前置 - 如何使用")]),t._v(" "),s("p",[t._v("简单说明见"),s("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Tips/blob/master/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/AJAX-%E5%89%8D%E4%B8%96%E4%BB%8A%E7%94%9F%E8%A7%A3%E6%83%91.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ajax-前世今生"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("如果是"),s("code",[t._v("post")]),t._v("最后要有"),s("code",[t._v("send")]),t._v("发送数据，如果是"),s("code",[t._v("get")]),t._v("那么就不需要"),s("code",[t._v("send")])]),t._v(" "),s("h2",{attrs:{id:"post-发送数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post-发送数据"}},[t._v("#")]),t._v(" POST - 发送数据")]),t._v(" "),s("p",[s("strong",[t._v("不同的数据nodejs设置不同的中间件。")])]),t._v(" "),s("p",[t._v("post比较复制一些，因为发生数据的不同。常规的分为：")]),t._v(" "),s("ol",[s("li",[t._v("序列化之后的字符串 - "),s("code",[t._v("'name=cmd&cmd=1'")])]),t._v(" "),s("li",[t._v("JSON.stringify(obj)")]),t._v(" "),s("li",[t._v("其他类型")])]),t._v(" "),s("p",[t._v("关键在于设置"),s("code",[t._v("content-type")]),t._v("，见"),s("a",{attrs:{href:"http://www.jiekouw.com/archives/161",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考-很重要"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("设置"),s("code",[t._v("content-type")]),t._v("就是为了告诉后台这是怎样的数据格式。就像是 "),s("strong",[t._v("第一种数据，要设置"),s("code",[t._v("application/x-www-form-urlencoded")])]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"特别的数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特别的数据"}},[t._v("#")]),t._v(" 特别的数据")]),t._v(" "),s("ol",[s("li",[t._v("formData - 格式如下：")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" formData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FormData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// loop through all the selected files and add them to the formData object")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add the files to formData object for the data payload")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// upload single file")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// formData.append('uploads[]', file, file.name, file.webkitRelativePath);")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// upload directionary")]),t._v("\n  formData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'uploads[]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webkitRelativePath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/upload'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" formData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  processData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  contentType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'upload successful!\\n'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("而且"),s("code",[t._v("formData")]),t._v("类型有很多，因为form控件很多，可以发送文件之类比较复杂的数据。同样后台处理方式也是中间件。")]),t._v(" "),s("h3",{attrs:{id:"更多细节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多细节"}},[t._v("#")]),t._v(" 更多细节")]),t._v(" "),s("ol",[s("li",[t._v("有自带的超时设定，注意ie兼容性")]),t._v(" "),s("li",[t._v("有进度条事件，可以反应数据返回情况；")]),t._v(" "),s("li",[t._v("还有load事件，不同于"),s("code",[t._v("onreadyStateChange")]),t._v("。这个反应的是"),s("code",[t._v("status")]),t._v("变化。")])]),t._v(" "),s("h2",{attrs:{id:"跨域处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨域处理"}},[t._v("#")]),t._v(" 跨域处理")]),t._v(" "),s("h3",{attrs:{id:"cors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[t._v("#")]),t._v(" CORS")]),t._v(" "),s("p",[t._v("原理在于浏览器后"),s("code",[t._v("origin")]),t._v("，以及服务器"),s("code",[t._v("access-control-allow-origin")]),t._v("要配对。")]),t._v(" "),s("p",[s("strong",[t._v("而浏览器有没有发送"),s("code",[t._v("origin")]),t._v("就代表着浏览器是否支持跨域处理。")])]),t._v(" "),s("p",[t._v("可通过"),s("code",[t._v("xhr.open('get', url, true)")]),t._v("最后一个参数来打开一个跨域请求。")]),t._v(" "),s("h3",{attrs:{id:"带有凭证的发送请求-可能有安全问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#带有凭证的发送请求-可能有安全问题"}},[t._v("#")]),t._v(" 带有凭证的发送请求 - 可能有安全问题")]),t._v(" "),s("p",[s("strong",[t._v("不是jwt")])]),t._v(" "),s("p",[t._v("如果是相同作用域，浏览器自动发送"),s("code",[t._v("cookie")]),t._v("(或者其他方式)。")]),t._v(" "),s("p",[t._v("但是如果是不同域的话，就不会自动发送。那么 "),s("strong",[t._v("服务端就没有办法验证")]),t._v("，所以这也是跨域不成功的原因。")]),t._v(" "),s("p",[t._v("一个思路就是如果跨域的是时候加上就好了。")]),t._v(" "),s("p",[t._v("文中认为可以通过"),s("code",[t._v("xhr.wihCreaentials=true")]),t._v("让发送请求带上"),s("code",[t._v("cookie")]),t._v("，这样浏览器就能够验证了。")]),t._v(" "),s("p",[s("strong",[t._v("另一方面，这个可能会安全问题。")])]),t._v(" "),s("p",[t._v("因为如果全局设置了个参数，那么很容易导致"),s("code",[t._v("cookie")]),t._v("被截获。")]),t._v(" "),s("p",[t._v("所以最好加上"),s("code",[t._v("token")]),t._v("认证。")]),t._v(" "),s("h3",{attrs:{id:"其他跨域技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他跨域技术"}},[t._v("#")]),t._v(" 其他跨域技术")]),t._v(" "),s("ul",[s("li",[t._v("图像"),s("code",[t._v("ping")]),t._v(" - 这个是由于图像请求可以设置"),s("code",[t._v("onload")]),t._v("事件，局限比较小。统计图像记载次数。")]),t._v(" "),s("li",[t._v("以及"),s("code",[t._v("jsonp")])])]),t._v(" "),s("h2",{attrs:{id:"comet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comet"}},[t._v("#")]),t._v(" comet")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Tips/blob/master/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/TCP%2BUDP%2BHTTP%2B%E8%BD%AE%E8%AF%A2%2BWebsocket.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("轮询，长轮询技术"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("以及在以上两个基础上实现"),s("code",[t._v("sse")]),t._v("技术。")]),t._v(" "),s("p",[t._v("同时还有新的"),s("code",[t._v("websocket")]),t._v("技术。")]),t._v(" "),s("p",[t._v("后面一般"),s("code",[t._v("new")]),t._v("一个对应的对象(就像是"),s("code",[t._v("xhr")]),t._v("对象那样)，然后"),s("code",[t._v("onmessage")]),t._v("来监听数据的传递。")])])}),[],!1,null,null,null);a.default=e.exports}}]);