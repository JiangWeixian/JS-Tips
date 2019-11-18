(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{345:function(v,_,e){"use strict";e.r(_);var t=e(0),o=Object(t.a)({},function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"nodejs-fs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-fs","aria-hidden":"true"}},[v._v("#")]),v._v(" Nodejs - fs")]),v._v(" "),e("blockquote",[e("p",[v._v("入门")])]),v._v(" "),e("h2",{attrs:{id:"速写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#速写","aria-hidden":"true"}},[v._v("#")]),v._v(" 速写")]),v._v(" "),e("blockquote",[e("p",[v._v("接口函数一般都有对应的异步和同步版本。带有"),e("code",[v._v("sync")]),v._v("才是同步的，不带有的一般是异步的。")])]),v._v(" "),e("blockquote",[e("p",[v._v("异步在回调函数中获得返回结果。有些接口函数本身就不应该有返回结果的，例如修改一些信息。那么此时异步回调函数是用来干嘛的。"),e("strong",[v._v("异步的作用是为了防止函数出错了然后导致服务器终端！")]),v._v(" 对于本不应该有返回结果的函数来说，异步回调可能只会接受一个"),e("code",[v._v("err")]),v._v("，而同步版本的就没有返回值。")])]),v._v(" "),e("ul",[e("li",[v._v("文件权限检测 - "),e("code",[v._v("access and stat")]),v._v("。前者简单检测文件是否存在(可判断读写权限)，后者可以在存在基础上进一步进行复杂操作(例如判断文件还是文件夹)；还有"),e("code",[v._v("exitsSync")]),v._v("更为简单的判断文件是否存在，异步版本已经没有了。")]),v._v(" "),e("li",[v._v("删除文件/删除文件夹 - "),e("code",[v._v("unlink & rm")])]),v._v(" "),e("li",[v._v("监听 - 监听文件变化，"),e("code",[v._v("watch & watchfile")]),v._v("。前者文件夹下所有，后者文件。"),e("strong",[v._v("不过后面文件更为稳定一些")])]),v._v(" "),e("li",[v._v("带有"),e("code",[v._v("stream")]),v._v("的结构函数，虽然没有回调函数，但是可以通过"),e("code",[v._v("on")]),v._v("来设置监听函数，所以还是一个异步的接口函数。"),e("strong",[v._v("读大文件或者频繁的写操作的时候都会创建流")])]),v._v(" "),e("li",[v._v("修改文件 - 文件一些基本信息都可以修改，例如文件名，事件，所有者，权限等。")])]),v._v(" "),e("p",[e("strong",[v._v("文件描述符&文件句柄(一个东西)")])]),v._v(" "),e("blockquote",[e("p",[v._v("在"),e("code",[v._v("api")]),v._v("函数中指的是"),e("code",[v._v("fd")]),v._v("参数。以"),e("code",[v._v("f")]),v._v("开头的函数以该参数作为参数，"),e("strong",[v._v("就我看来好像就"),e("code",[v._v("open")]),v._v("函数")]),v._v(" 会返回"),e("code",[v._v("fd")]),v._v("(异步在回调函数中)")])])])},[],!1,null,null,null);_.default=o.exports}}]);