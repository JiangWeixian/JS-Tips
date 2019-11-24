(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{334:function(e,t,_){"use strict";_.r(t);var v=_(0),i=Object(v.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"基本视觉格式化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本视觉格式化"}},[e._v("#")]),e._v(" 基本视觉格式化")]),e._v(" "),_("blockquote",[_("p",[e._v("行内非替换元素总是要特别一点")])]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E5%9F%BA%E6%9C%AC%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96"}},[e._v("基本视觉格式化")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E5%89%8D%E7%BD%AE%E7%9F%A5%E8%AF%86---%E5%AF%B9%E4%BA%8Ecss%E8%80%8C%E8%A8%80%E7%9A%84%E5%85%83%E7%B4%A0%E5%88%86%E7%B1%BB"}},[e._v("前置知识 - 对于CSS而言的元素分类")])]),e._v(" "),_("li",[_("a",{attrs:{href:"#%E6%B0%B4%E5%B9%B3%E6%A0%BC%E5%BC%8F%E5%8C%96---auto%E5%AF%BC%E8%87%B4%E5%AE%BD%E5%BA%A6%E5%8F%98%E5%8C%96"}},[e._v("水平格式化 - auto导致宽度变化")])]),e._v(" "),_("li",[_("a",{attrs:{href:"#%E9%AB%98%E5%BA%A6%E6%A0%BC%E5%BC%8F%E5%8C%96"}},[e._v("高度格式化")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E5%9E%82%E7%9B%B4%E6%96%B9%E5%90%91%E5%A4%96%E8%BE%B9%E8%B7%9D%E5%90%88%E5%B9%B6"}},[e._v("垂直方向外边距合并")])]),e._v(" "),_("li",[_("a",{attrs:{href:"#line-height%E8%A1%A5%E5%85%85"}},[e._v("line-height补充")])])])]),e._v(" "),_("li",[_("a",{attrs:{href:"#inline-block"}},[e._v("inline-block")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#img---%E7%89%B9%E5%88%AB%E7%9A%84inline%E5%85%83%E7%B4%A0"}},[e._v("img - 特别的inline元素")])]),e._v(" "),_("li",[_("a",{attrs:{href:"#inlineblock---margin"}},[e._v("inlineblock - margin")])])])])])])]),e._v(" "),_("h2",{attrs:{id:"前置知识-对于css而言的元素分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前置知识-对于css而言的元素分类"}},[e._v("#")]),e._v(" 前置知识 - 对于CSS而言的元素分类")]),e._v(" "),_("ul",[_("li",[e._v("块元素")]),e._v(" "),_("li",[e._v("行内元素 - 无法设置"),_("code",[e._v("width height")]),e._v("，但是可以有"),_("code",[e._v("margin padding border")])]),e._v(" "),_("li",[e._v("替换元素 - 替换元素指的是是否包括内容，例如"),_("code",[e._v("<p></p>")]),e._v("和"),_("code",[e._v("<p>xx</p>")]),e._v("就是替换元素和非替换元素")]),e._v(" "),_("li",[e._v("非替换元素 - 元素含有内容")])]),e._v(" "),_("p",[e._v("可以组合为替换块元素，或者非替换块元素")]),e._v(" "),_("h2",{attrs:{id:"水平格式化-auto导致宽度变化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#水平格式化-auto导致宽度变化"}},[e._v("#")]),e._v(" 水平格式化 - auto导致宽度变化")]),e._v(" "),_("p",[_("strong",[e._v("注意1: 指的是非替换块元素：替换元素无法设置"),_("code",[e._v("auto")]),e._v("，行内无法设置"),_("code",[e._v("width")])])]),e._v(" "),_("p",[_("strong",[e._v("注意2: 原则总是让总的计算实际占用宽度等于父类")])]),e._v(" "),_("p",[e._v("说明"),_("code",[e._v("auto")]),e._v("以及"),_("code",[e._v("margin")]),e._v("为负值的时候的情况。")]),e._v(" "),_("p",[e._v("当父类宽度是"),_("code",[e._v("400px")]),e._v("。")]),e._v(" "),_("p",[e._v("子元素设置"),_("code",[e._v("width: auto")]),e._v("以及"),_("code",[e._v("margin-left: -40")]),e._v("("),_("code",[e._v("right")]),e._v("也是一样的计算方法)")]),e._v(" "),_("p",[e._v("width = 400 - 0(margin-right) - (-40)(margin-left)")]),e._v(" "),_("p",[_("strong",[e._v("替换元素")])]),e._v(" "),_("ul",[_("li",[e._v("auto这个属性无效 - 有条件，因为"),_("code",[e._v("p")]),e._v("标签之类都含有文本内容，不含文本形成的 "),_("strong",[e._v("替换元素")]),e._v("情况比较少，如果不含有文本，设置"),_("code",[e._v("auto")]),e._v("，宽度为"),_("code",[e._v("0")]),e._v("。但是有些元素就是在元素开始和元素结束之间不含有文本，例如"),_("code",[e._v("img")]),e._v("。此时的"),_("code",[e._v("auto")]),e._v("设置的结果等于本身宽度，例如 "),_("strong",[e._v("图片本身的宽高")]),e._v("。")])]),e._v(" "),_("p",[e._v("例子见"),_("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Books/blob/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E5%9F%BA%E6%9C%AC%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96/replace.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("replace.html-test-replace"),_("OutboundLink")],1)]),e._v(" "),_("h2",{attrs:{id:"高度格式化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#高度格式化"}},[e._v("#")]),e._v(" 高度格式化")]),e._v(" "),_("p",[_("code",[e._v("line-height")]),e._v("也是归为到高度一部分。")]),e._v(" "),_("h3",{attrs:{id:"垂直方向外边距合并"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#垂直方向外边距合并"}},[e._v("#")]),e._v(" 垂直方向外边距合并")]),e._v(" "),_("ul",[_("li",[e._v("两个正数")]),e._v(" "),_("li",[e._v("一个正数另外一个负数 - 正的减去负的绝对值")])]),e._v(" "),_("h3",{attrs:{id:"line-height补充"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#line-height补充"}},[e._v("#")]),e._v(" line-height补充")]),e._v(" "),_("p",[e._v("设置"),_("code",[e._v("line-height")]),e._v("只对非替换元素有效(指的是会影响到布局)。替换元素的设置了"),_("code",[e._v("line-height")]),e._v("，也通过"),_("code",[e._v("chrome")]),e._v("调试工具看到"),_("code",[e._v("line-height")]),e._v("数值，却不会对布局有影响。")]),e._v(" "),_("p",[_("strong",[e._v("line-height与vertical-align")])]),e._v(" "),_("p",[e._v("这部分具体分析见"),_("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Books/tree/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS文本属性-line-height&vertical-align部分"),_("OutboundLink")],1)]),e._v(" "),_("p",[_("strong",[e._v("Q&A")])]),e._v(" "),_("ol",[_("li",[_("p",[e._v("以下会影响到line-height或者布局吗？")]),e._v(" "),_("blockquote",[_("p",[e._v("内边距、外边距和边框不会影响到line-heigh。也就说如果对于"),_("code",[e._v("inline")]),_("strong",[e._v("非替换")]),e._v("元素，外边距和边框都 "),_("strong",[e._v("不会影响布局")]),e._v("。对于"),_("code",[e._v("inline")]),_("strong",[e._v("替换")]),e._v("元素或者"),_("code",[e._v("inline-block(无论是替换还是非替换)")]),e._v("元素，设置这些属性 "),_("strong",[e._v("会影响到布局。")]),e._v("。可以查看"),_("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Books/blob/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E5%9F%BA%E6%9C%AC%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96/replace.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("replace-test-expandlh"),_("OutboundLink")],1)])])]),e._v(" "),_("li",[_("p",[e._v("如果设置了"),_("code",[e._v("height")]),e._v("，"),_("code",[e._v("line-height")]),e._v("如果比"),_("code",[e._v("height")]),e._v("大会影响到布局吗？")]),e._v(" "),_("blockquote",[_("p",[e._v("答案是会的！见"),_("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Books/blob/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E5%9F%BA%E6%9C%AC%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96/replace.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("replace-lineheigh-lh"),_("OutboundLink")],1)])])])]),e._v(" "),_("h2",{attrs:{id:"inline-block"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#inline-block"}},[e._v("#")]),e._v(" inline-block")]),e._v(" "),_("h3",{attrs:{id:"img-特别的inline元素"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#img-特别的inline元素"}},[e._v("#")]),e._v(" img - 特别的inline元素")]),e._v(" "),_("p",[e._v("其实是"),_("code",[e._v("inline")]),e._v("元素，但是表现却是"),_("code",[e._v("inline-block特性")]),e._v("，可以理解为"),_("code",[e._v("inline-block")]),e._v("。")]),e._v(" "),_("h3",{attrs:{id:"inlineblock-margin"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#inlineblock-margin"}},[e._v("#")]),e._v(" inlineblock - margin")]),e._v(" "),_("p",[e._v("inline元素的margin是不可以设置，如果设置了是相对于 "),_("strong",[e._v("当前行baseline，也就是当前行内容区域底线。")])])])}),[],!1,null,null,null);t.default=i.exports}}]);