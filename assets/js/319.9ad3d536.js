(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{393:function(t,e,_){"use strict";_.r(e);var o=_(0),v=Object(o.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"聊天室总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#聊天室总结"}},[t._v("#")]),t._v(" 聊天室总结")]),t._v(" "),_("blockquote",[_("p",[t._v("socket.io")])]),t._v(" "),_("h2",{attrs:{id:"关键技术"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关键技术"}},[t._v("#")]),t._v(" 关键技术")]),t._v(" "),_("ul",[_("li",[t._v("socket.io - 就是"),_("a",{attrs:{href:"https://zh.wikipedia.org/wiki/WebSocket",target:"_blank",rel:"noopener noreferrer"}},[t._v("websocket技术"),_("OutboundLink")],1)]),t._v(" "),_("li",[t._v("mongoDB")]),t._v(" "),_("li",[t._v("nodejs")]),t._v(" "),_("li",[t._v("ui这部分不考虑了")])]),t._v(" "),_("h2",{attrs:{id:"大致思路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#大致思路"}},[t._v("#")]),t._v(" 大致思路")]),t._v(" "),_("p",[t._v("事件有点久远。具体有点不记得了，以后要是还有聊天室相关实现再补充。")]),t._v(" "),_("ul",[_("li",[_("p",[_("code",[t._v("socket.io")]),t._v("部分 - 一种实时的通讯技术，仍旧是基于"),_("code",[t._v("tcp")]),t._v("的。但是建立之后并没有断开，而是链接保持通讯。不过 "),_("strong",[t._v("改进了部分建立连接之后的身份验证")]),t._v("，满足实时的要求。")]),t._v(" "),_("ol",[_("li",[t._v("建立连接，"),_("code",[t._v("nodejs")]),t._v("服务器通过建立链接得到的用户名和目标用户名(这两个需要建立链接)。然后加入房间。")]),t._v(" "),_("li",[t._v("通过"),_("code",[t._v("on or emit")]),t._v("触发和接收函数 - 之后就通过之前建立的房间，服务器转发消息。")])])]),t._v(" "),_("li",[_("p",[t._v("其中查找用户名是在数据库中，而数据库是在线的数据库。通过 "),_("strong",[t._v("账号密码建立链接")]),t._v("，然后就是具体的"),_("code",[t._v("api")]),t._v("函数查找数据了。")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);