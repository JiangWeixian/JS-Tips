(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{398:function(v,a,_){"use strict";_.r(a);var t=_(0),e=Object(t.a)({},(function(){var v=this,a=v.$createElement,_=v._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"新的api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新的api"}},[v._v("#")]),v._v(" 新的API")]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E6%96%B0%E7%9A%84api"}},[v._v("新的API")]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E4%BC%98%E5%8C%96%E5%8A%A8%E7%94%BB"}},[v._v("优化动画")])]),v._v(" "),_("li",[_("a",{attrs:{href:"#page-visibility-api"}},[v._v("Page visibility api")])]),v._v(" "),_("li",[_("a",{attrs:{href:"#%E5%AE%9A%E4%BD%8Dapi"}},[v._v("定位API")])]),v._v(" "),_("li",[_("a",{attrs:{href:"#%E6%96%87%E4%BB%B6api"}},[v._v("文件API")])]),v._v(" "),_("li",[_("a",{attrs:{href:"#%E5%AF%B9%E8%B1%A1api"}},[v._v("对象API")])]),v._v(" "),_("li",[_("a",{attrs:{href:"#%E6%8B%96%E6%8B%BD"}},[v._v("拖拽")])]),v._v(" "),_("li",[_("a",{attrs:{href:"#web-worker"}},[v._v("Web worker")])])])])]),v._v(" "),_("h2",{attrs:{id:"优化动画"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优化动画"}},[v._v("#")]),v._v(" 优化动画")]),v._v(" "),_("p",[v._v("使用"),_("code",[v._v("requestAnimationFrame")]),v._v("来进行动画。因为"),_("code",[v._v("setTimeout")]),v._v("以及之类的精度不一致，"),_("strong",[v._v("精度指的是时间间隔精度不一致")])]),v._v(" "),_("h2",{attrs:{id:"page-visibility-api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#page-visibility-api"}},[v._v("#")]),v._v(" Page visibility api")]),v._v(" "),_("p",[v._v("页面是否可见，离开当前页面浏览其他页面的时候，可通过这个"),_("code",[v._v("api")]),v._v("查看，"),_("strong",[v._v("并且离开或者进入的时候会触发一个事件")])]),v._v(" "),_("p",[v._v("帮助就是，利用这个"),_("code",[v._v("api")]),v._v("在离开页面的时候做一些事情。")]),v._v(" "),_("h2",{attrs:{id:"定位api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#定位api"}},[v._v("#")]),v._v(" 定位API")]),v._v(" "),_("p",[v._v("经纬度。")]),v._v(" "),_("h2",{attrs:{id:"文件api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文件api"}},[v._v("#")]),v._v(" 文件API")]),v._v(" "),_("p",[v._v("使用之前请好好看书中是怎么用的。")]),v._v(" "),_("p",[v._v("之前是通过"),_("code",[v._v("input type=file")]),v._v("来控制文件上传。"),_("strong",[v._v("在这个基础上，添加了了一些接口函数实现更为细致化的控制")])]),v._v(" "),_("p",[_("code",[v._v("files api")]),v._v("读取文件信息(不仅仅是文件名)")]),v._v(" "),_("ul",[_("li",[v._v("加载文件之后，作为标签"),_("code",[v._v("src")]),v._v("地址")]),v._v(" "),_("li",[v._v("上传功能，和"),_("code",[v._v("input type=files")]),v._v("类似使用"),_("code",[v._v("new Formdata")]),v._v("结合"),_("code",[v._v("ajax")]),v._v("上传文件。")]),v._v(" "),_("li",[v._v("还可以截取文件部分读取")])]),v._v(" "),_("h2",{attrs:{id:"对象api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#对象api"}},[v._v("#")]),v._v(" 对象API")]),v._v(" "),_("p",[v._v("指的是"),_("code",[v._v("window.URL")]),v._v("或者是"),_("code",[v._v("window.URL.createObjectURL")])]),v._v(" "),_("p",[v._v("目的是文件"),_("code",[v._v("API")]),v._v("读取文件需要将文件内容读取到缓存，然后使用。如果使用这个功能的话，可以直接加载到浏览器，"),_("code",[v._v("api")]),v._v("返回的是一块内存地址。")]),v._v(" "),_("h2",{attrs:{id:"拖拽"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拖拽"}},[v._v("#")]),v._v(" 拖拽")]),v._v(" "),_("p",[v._v("进一步，不只是拖拽浏览器元素。")]),v._v(" "),_("p",[v._v("而是将系统文件拖拽到浏览器上，还是使用的是"),_("code",[v._v("drag")]),v._v("那些事件来监听拖拽的情况。")]),v._v(" "),_("p",[v._v("因为拖拽可以获取文件信息，类似使用"),_("code",[v._v("new Formdata")]),v._v("结合"),_("code",[v._v("ajax")]),v._v("上传文件。")]),v._v(" "),_("h2",{attrs:{id:"web-worker"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web-worker"}},[v._v("#")]),v._v(" Web worker")]),v._v(" "),_("p",[v._v("PWA的核心功能。")]),v._v(" "),_("ul",[_("li",[v._v("通过"),_("code",[v._v("new Worker(XX.js)")]),v._v(" - 会下载"),_("code",[v._v("xx.js")]),v._v("这个文件，这只是比较简单的做法。")]),v._v(" "),_("li",[v._v("可以理解为简化版本的浏览器，和当前页面不共享作用域。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);