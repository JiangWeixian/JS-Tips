(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{581:function(t,e,_){"use strict";_.r(e);var v=_(0),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"webapi-dom速写"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webapi-dom速写"}},[t._v("#")]),t._v(" WebAPI - DOM速写")]),t._v(" "),_("blockquote",[_("p",[t._v("来自"),_("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model",target:"_blank",rel:"noopener noreferrer"}},[t._v("@MDN-WEBAPI"),_("OutboundLink")],1),t._v("。背下来吧，可以的！")])]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#webapi---dom%E9%80%9F%E5%86%99"}},[t._v("WebAPI - DOM速写")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#11-%E7%BB%93%E6%9E%84"}},[t._v("1.1. 结构")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#12-eventtarget"}},[t._v("1.2. EventTarget")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#13-node"}},[t._v("1.3. Node")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#14-documentelement"}},[t._v("1.4. Document&Element")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#141-document"}},[t._v("1.4.1. Document")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#142-element"}},[t._v("1.4.2. Element")])])])]),t._v(" "),_("li",[_("a",{attrs:{href:"#15-htmlelement"}},[t._v("1.5. HTMLElement")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#16-mathml"}},[t._v("1.6. MathML")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#17-%E5%8C%BA%E5%88%86"}},[t._v("1.7. 区分")])])])]),t._v(" "),_("li",[_("a",{attrs:{href:"#2-webapi---window%E9%80%9F%E5%86%99"}},[t._v("2. WebAPI - Window速写")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#21-not-locationnavigation"}},[t._v("2.1. NOT location&navigation")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#22-location"}},[t._v("2.2. Location")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#23-navigation"}},[t._v("2.3. navigation")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#24-%E4%B8%80%E4%BA%9B%E7%A1%AC%E4%BB%B6api"}},[t._v("2.4. 一些硬件API")])])])])]),t._v(" "),_("h2",{attrs:{id:"_1-1-结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-结构"}},[t._v("#")]),t._v(" 1.1. 结构")]),t._v(" "),_("ol",[_("li",[t._v("EventTarget")]),t._v(" "),_("li",[t._v("(继承自EventTarget)Node - 可以操作Node类型以及Element类型(适用于一些获取文档元素的接口返回数据类型)。")]),t._v(" "),_("li",[t._v("(继承自Node)document&Elememt - 只能够是Element类型(同上)(但是由于是继承的关系，所以能够获取Node类型也不奇怪，这个规则主要用于记忆接口函数名，以及 "),_("strong",[t._v("Node可没有Element接口函数")]),t._v(")")]),t._v(" "),_("li",[t._v("(继承自Elememt)HTMLElement")])]),t._v(" "),_("h2",{attrs:{id:"_1-2-eventtarget"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-eventtarget"}},[t._v("#")]),t._v(" 1.2. EventTarget")]),t._v(" "),_("p",[t._v("最重要的是"),_("code",[t._v("event")]),t._v("部分。"),_("code",[t._v("event")]),t._v("比如"),_("code",[t._v("mouseevent or keyboardevent")]),t._v("都是一系列事件的指代。就像是keyboard事件可以包括keypress等事件。而在"),_("code",[t._v("keyboardevent")]),t._v("事件上面的属性是可以共用到在大类事件上面的属性。")]),t._v(" "),_("ul",[_("li",[t._v("捕获冒泡 - 状态以及取消(不同浏览器以及IE)")]),t._v(" "),_("li",[t._v("事件发生状态")]),t._v(" "),_("li",[t._v("事件发生目标")]),t._v(" "),_("li",[t._v("事件类型")])]),t._v(" "),_("h2",{attrs:{id:"_1-3-node"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-node"}},[t._v("#")]),t._v(" 1.3. Node")]),t._v(" "),_("blockquote",[_("p",[t._v("可以操作Node类型以及Element类型(适用于一些获取文档元素的接口返回数据类型)。例如Node.childNodes以及childElements。但是Element只有children，返回Element类型；像Node.firstChild，Element.lastElementChild之类。")])]),t._v(" "),_("ul",[_("li",[t._v("属性 - 根/父/子/兄弟，本身的一些属性")]),t._v(" "),_("li",[t._v("操作节点 - 子(替换删除插入)/本身")]),t._v(" "),_("li",[t._v("比较 - 位置/相等/包含")]),t._v(" "),_("li",[t._v("内容 - 非替换元素里面的内容")])]),t._v(" "),_("h2",{attrs:{id:"_1-4-document-element"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-document-element"}},[t._v("#")]),t._v(" 1.4. Document&Element")]),t._v(" "),_("h3",{attrs:{id:"_1-4-1-document"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-1-document"}},[t._v("#")]),t._v(" 1.4.1. Document")]),t._v(" "),_("ul",[_("li",[t._v("结构")]),t._v(" "),_("li",[t._v("文档类型 - HTTP部分传输属性")]),t._v(" "),_("li",[t._v("可视化")]),t._v(" "),_("li",[t._v("扩展部分")])]),t._v(" "),_("h3",{attrs:{id:"_1-4-2-element"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-2-element"}},[t._v("#")]),t._v(" 1.4.2. Element")]),t._v(" "),_("ul",[_("li",[t._v("盒子模型 - 本身/位置数值(相对于viewport) - "),_("strong",[t._v("这里的clinetHeight是内容加上padding")])]),t._v(" "),_("li",[t._v("属性 - 标签属性(获取设置判断)/(子/兄)")]),t._v(" "),_("li",[t._v("获取节点")]),t._v(" "),_("li",[t._v("操作节点/内容 - 子(替换删除插入)/本身")]),t._v(" "),_("li",[t._v("滚动 - 数值(Top not x)和方法")]),t._v(" "),_("li",[t._v("动画")])]),t._v(" "),_("p",[t._v("对Node来说增加了很多内容。")]),t._v(" "),_("h2",{attrs:{id:"_1-5-htmlelement"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-htmlelement"}},[t._v("#")]),t._v(" 1.5. HTMLElement")]),t._v(" "),_("p",[t._v("可以理解为HTML5。一些新属性新方法，但是不止这些。")]),t._v(" "),_("ul",[_("li",[t._v("HTML5 - 新属性: tab title style 富文本框 拖拽")]),t._v(" "),_("li",[t._v("盒子模型 - 本身/位置(相对于父类)"),_("strong",[t._v("这里的offsetHeight是内容加上padding加上border")])])]),t._v(" "),_("h2",{attrs:{id:"_1-6-mathml"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-mathml"}},[t._v("#")]),t._v(" 1.6. MathML")]),t._v(" "),_("p",[t._v("写数学公式，使用的标签的方式")]),t._v(" "),_("h2",{attrs:{id:"_1-7-区分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-区分"}},[t._v("#")]),t._v(" 1.7. 区分")]),t._v(" "),_("ul",[_("li",[t._v("NodeList以及HTMLCollection - 前面是"),_("code",[t._v("node list")]),t._v("，后面是"),_("code",[t._v("element list")]),t._v("。区别在于后面那个一定是动态，前面不一定。通过属性"),_("code",[t._v(".")]),t._v("获得的"),_("code",[t._v("node or element list")]),t._v("一定是动态的。")])]),t._v(" "),_("h1",{attrs:{id:"_2-webapi-window速写"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-webapi-window速写"}},[t._v("#")]),t._v(" 2. WebAPI - Window速写")]),t._v(" "),_("blockquote",[_("p",[t._v("第一部分是DOM；第二部分是BOM(可以理解为软件部分)；")])]),t._v(" "),_("h2",{attrs:{id:"_2-1-not-location-navigation"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-not-location-navigation"}},[t._v("#")]),t._v(" 2.1. NOT location&navigation")]),t._v(" "),_("p",[t._v("除了标题两个元素之外。")]),t._v(" "),_("ul",[_("li",[t._v("从看到的浏览器窗口从左向右记忆")]),t._v(" "),_("li",[t._v("标签")]),t._v(" "),_("li",[t._v("三个按钮 - 最大最小关闭")]),t._v(" "),_("li",[t._v("视图部分 - 大小/分辨率/滚动(还可以含有动画的滚动)/fragment")]),t._v(" "),_("li",[t._v("存储部分 - 历史记录等")]),t._v(" "),_("li",[t._v("Base64编码")])]),t._v(" "),_("p",[_("strong",[t._v("注意如何通信部分。")])]),t._v(" "),_("h2",{attrs:{id:"_2-2-location"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-location"}},[t._v("#")]),t._v(" 2.2. Location")]),t._v(" "),_("p",[t._v("url地址栏。")]),t._v(" "),_("ul",[_("li",[t._v("主要href search hash")]),t._v(" "),_("li",[t._v("url地址部分能够获得基本都有")])]),t._v(" "),_("h2",{attrs:{id:"_2-3-navigation"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-navigation"}},[t._v("#")]),t._v(" 2.3. navigation")]),t._v(" "),_("p",[t._v("可以理解为软件。")]),t._v(" "),_("ul",[_("li",[t._v("浏览器信息 - 请求头里面那部分")]),t._v(" "),_("li",[t._v("版本/文件名")]),t._v(" "),_("li",[t._v("网络信息")]),t._v(" "),_("li",[t._v("浏览器插件")])]),t._v(" "),_("h2",{attrs:{id:"_2-4-一些硬件api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-一些硬件api"}},[t._v("#")]),t._v(" 2.4. 一些硬件API")]),t._v(" "),_("ul",[_("li",[t._v("定位")]),t._v(" "),_("li",[t._v("感知器 - 光/方向")]),t._v(" "),_("li",[t._v("文件处理")]),t._v(" "),_("li",[t._v("推送")])])])}),[],!1,null,null,null);e.default=a.exports}}]);