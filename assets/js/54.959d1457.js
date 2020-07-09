(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{334:function(e,t,v){"use strict";v.r(t);var r=v(0),_=Object(r.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"jquery源码阅读"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jquery源码阅读"}},[e._v("#")]),e._v(" JQuery源码阅读")]),e._v(" "),v("blockquote",[v("p",[e._v("第一次阅读")])]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#jquery%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB"}},[e._v("JQuery源码阅读")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%E6%AD%A3%E6%96%87"}},[e._v("正文")])]),e._v(" "),v("li",[v("a",{attrs:{href:"#deep-in-deep"}},[e._v("Deep in Deep")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#newprototype"}},[e._v("New+Prototype")])])])]),e._v(" "),v("li",[v("a",{attrs:{href:"#dom"}},[e._v("DOM")])]),e._v(" "),v("li",[v("a",{attrs:{href:"#reg"}},[e._v("Reg")])]),e._v(" "),v("li",[v("a",{attrs:{href:"#function"}},[e._v("Function")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#extend"}},[e._v("$.extend")])]),e._v(" "),v("li",[v("a",{attrs:{href:"#uniquesort"}},[e._v("$.uniqueSort")])])])])])])]),e._v(" "),v("h2",{attrs:{id:"正文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#正文"}},[e._v("#")]),e._v(" 正文")]),e._v(" "),v("p",[e._v("第一次阅读记录一些有用的函数，以及"),v("code",[e._v("JS")]),e._v("内部黑科技。")]),e._v(" "),v("h2",{attrs:{id:"deep-in-deep"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#deep-in-deep"}},[e._v("#")]),e._v(" Deep in Deep")]),e._v(" "),v("p",[e._v("JS原理、定义部分踩坑。")]),e._v(" "),v("h3",{attrs:{id:"new-prototype"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#new-prototype"}},[e._v("#")]),e._v(" New+Prototype")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("通过"),v("code",[e._v("new")]),e._v("关键词创建的对象，通过"),v("code",[e._v("typeof")]),e._v("的结果都是"),v("code",[e._v("object")]),e._v("。无论你是"),v("code",[e._v("number or string")]),e._v("。最好判断类型的方式是"),v("code",[e._v("Object.prototype.toString.call(val)")]),e._v("来进行判断。")])]),e._v(" "),v("li",[v("p",[e._v("可以通过的改变"),v("code",[e._v("prototype")]),e._v("的指向来改变"),v("code",[e._v("new")]),e._v("创建的对象。在"),v("code",[e._v("jquery")]),e._v("中。")]),e._v(" "),v("div",{staticClass:"language-javascript extra-class"},[v("pre",{pre:!0,attrs:{class:"language-javascript"}},[v("code",[e._v("jquery"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("fn "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" jquery"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("prototype "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 一些方法")]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\njquery"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("fn"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("init"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("prototype "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" jquery"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("fn\n")])])]),v("p",[e._v("这样通过"),v("code",[e._v("new jquery.fn.init()")]),e._v("就可以创建一个"),v("code",[e._v("jquery")]),e._v("实例。")])]),e._v(" "),v("li",[v("p",[e._v("实现链式方法的关键就在于"),v("code",[e._v("return this")])])])]),e._v(" "),v("h2",{attrs:{id:"dom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dom"}},[e._v("#")]),e._v(" DOM")]),e._v(" "),v("p",[e._v("原生"),v("code",[e._v("DOM")]),e._v("被JQ玩出了什么花样。记录使用到的一些属性。")]),e._v(" "),v("p",[v("strong",[e._v("节点属性")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("documentElement")]),e._v(" - 获取文档根节点元素")]),e._v(" "),v("li",[v("code",[e._v("ownerDocument")]),e._v(" - 获取"),v("code",[e._v("a")]),e._v("阶段所在"),v("code",[e._v("document")]),e._v("的根节点")]),e._v(" "),v("li",[v("code",[e._v("nodeType")]),e._v(" - 每个元素都有节点类型，以数字作为代表。"),v("a",{attrs:{href:"http://www.w3school.com.cn/jsref/prop_node_nodetype.asp",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),v("OutboundLink")],1)])]),e._v(" "),v("p",[v("strong",[e._v("原生方法")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("NodeA.compareDocumentPosition(NodeB)")]),e._v(" - 比较两个节点在文档上的相对位置。"),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("Bits          Number        Meaning \n000000         0              元素一致 \n000001         1              节点在不同的文档（或者一个在文档之外） \n000010         2              节点 B 在节点 A 之前 \n000100         4              节点 A 在节点 B 之前 \n001000         8              节点 B 包含节点 A \n010000         16             节点 A 包含节点 B \n100000         32             浏览器的私有使用\n")])])]),e._v("如果是节点A和节点B是包含关系，那么A和B的关系又是包含关系，A又在B节点之前，那么该函数返回的数字为"),v("code",[e._v("000100+010000")]),e._v("。")]),e._v(" "),v("li",[v("code",[e._v("DOMElement.contains(DOMNode)")]),e._v(" - 就如同函数名字那样，可以检验是否有包含关系。不过从返回的结果上看，"),v("code",[e._v("compareDocumentPosition")]),e._v("显然要更强大一点。")])]),e._v(" "),v("h2",{attrs:{id:"reg"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#reg"}},[e._v("#")]),e._v(" Reg")]),e._v(" "),v("p",[e._v("主要是对选择器的匹配。"),v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN参考地址"),v("OutboundLink")],1)]),e._v(" "),v("ul",[v("li",[v("code",[e._v("^")]),e._v("在"),v("code",[e._v("[]")]),e._v("代表开始，在内部表示非(除了什么什么之外)")])]),e._v(" "),v("h2",{attrs:{id:"function"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#function"}},[e._v("#")]),e._v(" Function")]),e._v(" "),v("p",[e._v("有趣的函数实现")]),e._v(" "),v("h3",{attrs:{id:"extend"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#extend"}},[e._v("#")]),e._v(" $.extend")]),e._v(" "),v("p",[e._v("拷贝函数。")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://api.jquery.com/jquery.extend/",target:"_blank",rel:"noopener noreferrer"}},[e._v("API地址"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://jsfiddle.net/boilerplate/jquery/",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线地址"),v("OutboundLink")],1)])]),e._v(" "),v("p",[e._v("实现大致功能为：")]),e._v(" "),v("ul",[v("li",[e._v("将一个目标复制到另一个目标上\n"),v("ul",[v("li",[e._v("分为深度拷贝 - 需要递归，实现层次更深的拷贝（不仅仅是"),v("code",[e._v("level=1")]),e._v("的拷贝）")]),e._v(" "),v("li",[e._v("浅拷贝 - 只有"),v("code",[e._v("level=1")]),e._v("的拷贝")])])]),e._v(" "),v("li",[e._v("还可以拷贝到"),v("code",[e._v("jq")]),e._v("上实现拓展")]),e._v(" "),v("li",[e._v("可以拷贝函数，实现"),v("code",[e._v("jq")]),e._v("方法上的拓展")])]),e._v(" "),v("p",[e._v("其中，"),v("strong",[v("code",[e._v("jq")]),e._v("方法上的拓展")]),e._v("和"),v("strong",[e._v("递归实现的深度拷贝")]),e._v("需要重点注意。")]),e._v(" "),v("h3",{attrs:{id:"uniquesort"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#uniquesort"}},[e._v("#")]),e._v(" $.uniqueSort")]),e._v(" "),v("p",[v("strong",[e._v("元素节点的去重")]),e._v("，不过里面的思想比较棒。流程如下：")]),e._v(" "),v("ol",[v("li",[e._v("如果想要去重，第一步就是排序。作用就是可以让相同元素放在一起。")]),e._v(" "),v("li",[e._v("经过第一步之后，我们只要比较相邻元素是否相同就能够知道重复元素的"),v("code",[e._v("index")]),e._v("。然后放在一个数组内，然后通过"),v("code",[e._v("splice")]),e._v("函数在节点数组上删除那些重复元素的"),v("code",[e._v("index")]),e._v("。")])])])}),[],!1,null,null,null);t.default=_.exports}}]);