(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{235:function(t,s,a){t.exports=a.p+"assets/img/Tcp_transport_example.4a13d51b.gif"},236:function(t,s,a){t.exports=a.p+"assets/img/tcpdata.48d13761.png"},237:function(t,s,a){t.exports=a.p+"assets/img/udpdata.a81fcbf2.png"},258:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"tcp、udp、http、轮询、websocket"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tcp、udp、http、轮询、websocket"}},[t._v("#")]),t._v(" TCP、UDP、HTTP、轮询、Websocket")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#tcpudphttp%E8%BD%AE%E8%AF%A2websocket"}},[t._v("TCP、UDP、HTTP、轮询、Websocket")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#tcp"}},[t._v("TCP")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#udp"}},[t._v("UDP")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E5%92%8Chttp%E7%9A%84%E5%85%B3%E7%B3%BB"}},[t._v("和http的关系")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#http-%E9%95%BF%E8%BF%9E%E6%8E%A5%E7%9F%AD%E8%BF%9E%E6%8E%A5%E9%95%BF%E8%BD%AE%E8%AF%A2%E7%9F%AD%E9%93%BE%E6%8E%A5"}},[t._v("http 长连接、短连接、长轮询、短链接")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E5%89%8D%E7%BD%AE%E7%9F%A5%E8%AF%86---%E9%95%BF%E8%BF%9E%E6%8E%A5%E7%9F%AD%E8%BF%9E%E6%8E%A5%E6%84%8F%E4%B9%89"}},[t._v("前置知识 - 长连接短连接意义")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E8%BD%AE%E8%AF%A2%E9%95%BF%E8%BD%AE%E8%AF%A2"}},[t._v("轮询、长轮询")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E8%BD%AE%E8%AF%A2"}},[t._v("轮询")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E9%95%BF%E8%BD%AE%E8%AF%A2"}},[t._v("长轮询")])])])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#websocket"}},[t._v("websocket")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E5%BB%BA%E7%AB%8B%E9%93%BE%E6%8E%A5"}},[t._v("建立链接")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#qa"}},[t._v("Q&A")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E7%AC%AC%E4%B8%89%E6%96%B9"}},[t._v("第三方")])])])])])])]),t._v(" "),n("h2",{attrs:{id:"tcp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[t._v("#")]),t._v(" TCP")]),t._v(" "),n("blockquote",[n("p",[t._v("传输控制协议")])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%BC%A0%E8%BE%93%E6%8E%A7%E5%88%B6%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("维基百科定义"),n("OutboundLink")],1)]),t._v(" "),n("ul",[n("li",[t._v("和"),n("code",[t._v("udp")]),t._v("同样属于传输层。")]),t._v(" "),n("li",[t._v("统一的认知是，"),n("code",[t._v("tcp")]),t._v("是比"),n("code",[t._v("udp")]),t._v("安全的。")])]),t._v(" "),n("p",[t._v("安全的原因：")]),t._v(" "),n("ul",[n("li",[t._v("发送数据包含有确认序列，"),n("strong",[t._v("保证接受时候的数据顺序")]),t._v("。")]),t._v(" "),n("li",[t._v("如果没有被确认就会被"),n("strong",[t._v("重传")]),t._v(" "),n("img",{attrs:{src:a(235),alt:"tcp传输数据流程"}})]),t._v(" "),n("li",[t._v("接收端和发送端都会有一个"),n("strong",[t._v("校验函数")]),t._v("保证数据准确性")]),t._v(" "),n("li",[n("strong",[t._v("建立连接的方式是通过三次握手来建立")])])]),t._v(" "),n("p",[t._v("数据定义的不同：")]),t._v(" "),n("blockquote",[n("p",[t._v("数据在TCP层称为Stream，数据分组称为分段（Segment）。作为比较，数据在IP层称为Datagram，数据分组称为分片（Fragment）。 UDP 中分组称为Message。")])]),t._v(" "),n("p",[t._v("数据包结构如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(236),alt:"tcp数据结构"}})]),t._v(" "),n("p",[t._v("由于以上种种限制，使得它不太适用实时的应用场景。所以类如流媒体，和游戏之类并不合适。")]),t._v(" "),n("h2",{attrs:{id:"udp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#udp"}},[t._v("#")]),t._v(" UDP")]),t._v(" "),n("blockquote",[n("p",[t._v("用户数据报协议")])]),t._v(" "),n("p",[t._v("不可靠传递")]),t._v(" "),n("ul",[n("li",[t._v("缺乏拥塞控制")]),t._v(" "),n("li",[t._v("只有校验和")])]),t._v(" "),n("p",[t._v("在安全上定义的协议很少。数据包结构如下图：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(237),alt:"udp数据结构"}})]),t._v(" "),n("h3",{attrs:{id:"和http的关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#和http的关系"}},[t._v("#")]),t._v(" 和http的关系")]),t._v(" "),n("blockquote",[n("p",[t._v("超文本控制协议")])]),t._v(" "),n("p",[t._v("基于"),n("code",[t._v("tcp")]),t._v("。")]),t._v(" "),n("p",[t._v("客户端和服务器通过"),n("code",[t._v("tcp")]),t._v("建立连接之后，"),n("code",[t._v("http")]),t._v("规定了一种客户端和服务器两者说话的方式。")]),t._v(" "),n("p",[t._v("看请求头和响应头，以及反应的状态码。")]),t._v(" "),n("h2",{attrs:{id:"http-长连接、短连接、长轮询、短链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http-长连接、短连接、长轮询、短链接"}},[t._v("#")]),t._v(" http 长连接、短连接、长轮询、短链接")]),t._v(" "),n("h3",{attrs:{id:"前置知识-长连接短连接意义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前置知识-长连接短连接意义"}},[t._v("#")]),t._v(" 前置知识 - 长连接短连接意义")]),t._v(" "),n("p",[t._v("首先要知道一个事实")]),t._v(" "),n("blockquote",[n("p",[t._v("HTTP是应用层，TCP是传输层")])]),t._v(" "),n("p",[t._v("所以我们可以得到几个结论：")]),t._v(" "),n("ol",[n("li",[n("code",[t._v("HTTP")]),t._v("不一定建立在TCP基础之上，如果有些硬件不支持TCP。任何可靠的传输协议都是可以作为"),n("code",[t._v("HTTP")]),t._v("基础。")]),t._v(" "),n("li",[t._v("长连接短连接时相对于TCP来说的，而"),n("code",[t._v("HTTP")]),t._v("只是数据传输格式应用")])]),t._v(" "),n("p",[t._v("长连接和短连接可以做以下区分")]),t._v(" "),n("ul",[n("li",[t._v("短连接 - "),n("code",[t._v("HTTP")]),t._v("请求一次就断开额度"),n("code",[t._v("tcp")]),t._v("连接")]),t._v(" "),n("li",[t._v("长连接 - "),n("code",[t._v("HTTP")]),t._v("请求多次断开，以为了减少"),n("code",[t._v("tcp")]),t._v("建立连接资源的目的而设置。会在 "),n("strong",[t._v("响应头")]),t._v("里面"),n("code",[t._v("connection")]),t._v("加入"),n("code",[t._v("keep-alive")]),t._v("的代码。"),n("strong",[t._v("这个时HTTP1.1就开始默认支持的手段。")])])]),t._v(" "),n("p",[n("strong",[t._v("长连接的意义在于，因为建立连接的实践消耗时远远大于建立连接之后传输数据的实践消耗。")]),t._v(" 所以每次HTTP请求一次就断开的方式对现在网页来说时不够的。而在现代网页中如何体现，因为每个服务器都有地址(我指的是是IP地址而不是URL地址)存在，TCP以IP(网络层)地址为基础建立连接。那么 "),n("strong",[t._v("对于同一个服务器下的HTTP资源请求，HTTP完全可以"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/HTTP%E6%8C%81%E4%B9%85%E8%BF%9E%E6%8E%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("复用同一个TCP连接"),n("OutboundLink")],1),t._v("。")])]),t._v(" "),n("p",[t._v("那么，"),n("code",[t._v("TCP")]),t._v("是如何做到长连接么？")]),t._v(" "),n("p",[t._v("回到之前"),n("code",[t._v("TCP")]),t._v("建立连接的方式，三次握手建立连接。"),n("strong",[t._v("如果存在第四次握手就断开连接。")]),t._v(" 那么如果客户端不发送第四次请求时不会断开连接的，还存在以下一种问题：")]),t._v(" "),n("ol",[n("li",[t._v("客户端没有要求断开，服务器如何确定客户端还存在，而不是因为 "),n("strong",[t._v("客户端消失了而断开连接")])])]),t._v(" "),n("p",[t._v("所以有一个叫做 "),n("a",{attrs:{href:"https://blog.csdn.net/pmt123456/article/details/58233999",target:"_blank",rel:"noopener noreferrer"}},[t._v("心跳机制"),n("OutboundLink")],1),t._v("的东西，服务器会在客户端没有数据传输情况下，发出询问。如果客户端应答了，那么就保持连接，如果没有，就断开。"),n("strong",[t._v("但是存在极端情况，很长时间内客户端是没有数据传输的。服务器维持一个长连接是消耗资源的。所以在客户端长时间没有断开情况下，服务器会主动断开。")])]),t._v(" "),n("h3",{attrs:{id:"轮询、长轮询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#轮询、长轮询"}},[t._v("#")]),t._v(" 轮询、长轮询")]),t._v(" "),n("blockquote",[n("p",[t._v("服务端推送技术")])]),t._v(" "),n("p",[t._v("就现在来说，轮询其实并不是一种 "),n("strong",[t._v("直观意义上的长连接的方式。")]),t._v(" 而是一种服务器向客户端推送数据的方式，因为在轮询中客户端会一致发送请求。")]),t._v(" "),n("h4",{attrs:{id:"轮询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#轮询"}},[t._v("#")]),t._v(" 轮询")]),t._v(" "),n("p",[t._v("不刷新页面情况下，实现推送。")]),t._v(" "),n("blockquote",[n("p",[t._v("一般会认为"),n("code",[t._v("settimeout")]),t._v("连续调用比"),n("code",[t._v("setinterval")]),t._v("调用一次要好")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("poll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/server"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发起下一次请求")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("poll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("不需要服务器使用额外的代码，"),n("strong",[t._v("每次都会建立一次"),n("code",[t._v("http")]),t._v("连接，开销很大")]),t._v("。可以发现如果服务器不主动的话，连接一致存在。")]),t._v(" "),n("ul",[n("li",[t._v("每隔一段时间请求数据，成功之后再一次请求数据")])]),t._v(" "),n("h4",{attrs:{id:"长轮询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#长轮询"}},[t._v("#")]),t._v(" 长轮询")]),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25690011",target:"_blank",rel:"noopener noreferrer"}},[t._v("长轮询"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("和以上传统方式不同的是，需要服务器配合使用。为了抵消轮询的缺陷，所以应该出现主动停止连接情况，如下：")]),t._v(" "),n("ul",[n("li",[t._v("有新数据推送 。当"),n("strong",[t._v("服务器向浏览器")]),t._v("推送信息后，应该主动结束程序运行从而让连接断开，这样浏览器才能及时收到数据。")]),t._v(" "),n("li",[t._v("没有新数据推送 。应该设定一个最长时限，避免WEB服务器超时（Timeout），若一直没有新信息，"),n("strong",[t._v("服务器应主动向浏览器")]),t._v(" 发送本次轮询无新信息的正常响应，并断开连接，这也被称为“心跳”信息。")]),t._v(" "),n("li",[t._v("网络故障或异常 。由于网络故障等因素造成的请求超时或出错也可能导致轮询的意外中断，此时浏览器将收到错误信息。")])]),t._v(" "),n("p",[t._v("以上断开连接情况可以发现，都是服务器主动的。")]),t._v(" "),n("p",[t._v("其实实现方法和传统方法类似：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $.ajax来自JQ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" updater "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("poll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/longpolling"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"POST"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      dataType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" updater"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onSuccess"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" updater"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onError\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onSuccess")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dataStatus")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<br>"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里就是服务器要求断开链接的情况")]),t._v("\n      updater"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 收到回复后再次发出请求")]),t._v("\n    interval "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("updater"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("poll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 中断链接")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Poll error;"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transfer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  updater"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("poll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transfer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("code",[t._v("interval = window.setTimeout(updater.poll, 0);")]),t._v("这一段和传统方法类似")]),t._v(" "),n("p",[n("strong",[t._v("传统中成功之后，在定时10秒发送现在，成功之后立马开始一个新的连接")])]),t._v(" "),n("p",[t._v("不过这里不同的在于服务器部分，因为现在新的轮询方式中，上一个连接已经被服务器中断了。在"),n("code",[t._v("onError")]),t._v("中终端：")]),t._v(" "),n("blockquote",[n("p",[t._v("成功继续请求，不成功中断链接")])]),t._v(" "),n("h2",{attrs:{id:"websocket"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[t._v("#")]),t._v(" websocket")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2017/05/websocket.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("教程"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("特点：")]),t._v(" "),n("ol",[n("li",[t._v("全双工")]),t._v(" "),n("li",[t._v("单个TCP连接上")])]),t._v(" "),n("p",[t._v("从上面教程可以看到，"),n("code",[t._v("websocket")]),t._v("是建立在"),n("code",[t._v("tcp")]),t._v("协议上，和"),n("code",[t._v("http")]),t._v("同级别的协议。")]),t._v(" "),n("p",[n("strong",[t._v("与HTTP之间共同点")])]),t._v(" "),n("p",[n("code",[t._v("websocket")]),t._v("的特点意味着"),n("code",[t._v("websocket")]),t._v("大部分类似如同"),n("a",{attrs:{href:""}},[t._v("http建立链接过程")]),t._v("中一样，")]),t._v(" "),n("ul",[n("li",[t._v("数据同样要从应用层封装到"),n("code",[t._v("tcp")])]),t._v(" "),n("li",[t._v("同样也要建立一个三次握手的"),n("code",[t._v("TCP")]),t._v("。")])]),t._v(" "),n("h3",{attrs:{id:"建立链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#建立链接"}},[t._v("#")]),t._v(" 建立链接")]),t._v(" "),n("p",[n("code",[t._v("websocket")]),t._v("链接地址通常是"),n("code",[t._v("ws://example.com:80/some/path")]),t._v("，和"),n("code",[t._v("http")]),t._v("建立链接一致：")]),t._v(" "),n("ol",[n("li",[t._v("dns域名解析得到ip地址")]),t._v(" "),n("li",[t._v("得到ip地址之后进行"),n("code",[t._v("tcp")]),t._v("连接")]),t._v(" "),n("li",[t._v("建立连接之后发送数据")])]),t._v(" "),n("p",[t._v("(以下简单说明)客户端为了建立"),n("code",[t._v("websocket")]),t._v("连接，(无论是否以"),n("code",[t._v("ws or http")]),t._v("开头)借助"),n("code",[t._v("http")]),t._v("向服务器发送请求，请求数据带上"),n("code",[t._v("websocket")]),t._v("信息，表示我要建立"),n("code",[t._v("websocket")]),t._v("。数据特点为：")]),t._v(" "),n("ol",[n("li",[t._v("get请求")]),t._v(" "),n("li",[t._v("带上"),n("code",[t._v("upgrade")]),t._v("字段意味着建立"),n("code",[t._v("websocket")])])]),t._v(" "),n("p",[t._v("详细信息见"),n("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001472780997905c8f293615c5a42eab058b6dc29936a5c000",target:"_blank",rel:"noopener noreferrer"}},[t._v("websocket请求字段"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("服务器接受之后发送"),n("code",[t._v("101")]),t._v("状态码(表示同意切换连接类型)")]),t._v(" "),n("p",[t._v("这部分符合"),n("code",[t._v("http")]),t._v("请求然后响应的特点。"),n("strong",[t._v("之后就是"),n("code",[t._v("websocket")]),t._v("通信过程，并没有建立链接的过程")])]),t._v(" "),n("h3",{attrs:{id:"q-a"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[t._v("#")]),t._v(" Q&A")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("首先是通信过程，")]),t._v(" "),n("p",[n("strong",[t._v("在轮询中")]),t._v("，服务器没有主动发送消息的能力，之所以能够通信是因为客户端一致在发送请求(这个行为符合"),n("code",[t._v("http")]),t._v("请求然后响应的特点)。"),n("strong",[t._v("在websocket中")]),t._v(" 并不是通过这种方式(向服务器发送数据并不期望有返回结果)，至于如何实时的监听服务端数据，这个问题就和服务器如何监听"),n("code",[t._v("http")]),t._v("请求一样，属于比较低层的实现。")])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://juejin.im/post/5a05d89051882540f36305df",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何保持连接"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("由于低层还是一个"),n("code",[t._v("tcp")]),t._v("链接，在"),n("a",{attrs:{href:""}},[t._v("1.3.1. 前置知识 - 长连接短连接意义")]),t._v("提到一个心跳机制，这是保持长连接不断开的关键。")])]),t._v(" "),n("li",[n("p",[t._v("假设"),n("code",[t._v("http")]),t._v("不是请求响应的模式，"),n("code",[t._v("websocket")]),t._v("做了哪些改进？")]),t._v(" "),n("p",[t._v("数据更为精简。不需要发送那么头部信息。")])]),t._v(" "),n("li",[n("p",[t._v("同源策略")]),t._v(" "),n("p",[t._v("和ajax不同，没有同源策略。服务器需要通过服务端的"),n("code",[t._v("origin")]),t._v("字段来判断来自哪部分的链接。")])])]),t._v(" "),n("h3",{attrs:{id:"第三方"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第三方"}},[t._v("#")]),t._v(" 第三方")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("socket.io")]),t._v("就是利用"),n("code",[t._v("websocket")]),t._v("实现的。 - 建立连接以 "),n("strong",[t._v("http")]),t._v("开头")]),t._v(" "),n("p",[n("code",[t._v("socket.io")]),t._v("使用过程中，服务器和客户端都需要使用"),n("code",[t._v("socket.io")]),t._v("这个库，通过它的方式建立连接。估计这也是它为什么可以使用"),n("code",[t._v("http")]),t._v("建立连接。")])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014727922914053479c966220f47da91991fa9c27ac3ea000",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodejs-ws模块教程"),n("OutboundLink")],1),t._v(" / 以"),n("code",[t._v("ws")]),t._v("开头")]),t._v(" "),n("p",[t._v("这里要求服务端使用"),n("code",[t._v("ws")]),t._v("模块，客户端只需要支持"),n("code",[t._v("websocket")]),t._v("协议的浏览器就可以了。与"),n("code",[t._v("ws")]),t._v("开头的地址建立链接。")])])]),t._v(" "),n("p",[n("strong",[t._v("比较"),n("code",[t._v("ws")]),t._v("模块以及"),n("code",[t._v("socket.io")]),t._v("模块")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("ws")]),t._v("基本只能够实现"),n("code",[t._v("onmessage")]),t._v("的事件监听，但是"),n("code",[t._v("socket.io")]),t._v("可以实现更多事件，估计内部扩张了发布订阅模式。")]),t._v(" "),n("li",[t._v("还有一个"),n("code",[t._v("broadcast")]),t._v("功能，这一点涉及"),n("code",[t._v("ws")]),t._v("特点，服务器对于不同客户端链接都能够保存一个 "),n("strong",[t._v("链接id，结合发送链接的userid")]),t._v(" 如果将其保存到一个数据结构中的话。就可以实现向数据结构的其他部分发送数据，或者向数据结构中其中一个用户发送数据。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);