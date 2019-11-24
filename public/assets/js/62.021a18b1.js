(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{347:function(r,_,a){"use strict";a.r(_);var v=a(0),t=Object(v.a)({},(function(){var r=this,_=r.$createElement,a=r._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h1",{attrs:{id:"边距和边框"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#边距和边框"}},[r._v("#")]),r._v(" 边距和边框")]),r._v(" "),a("blockquote",[a("p",[r._v("marigin padding border")])]),r._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E8%BE%B9%E8%B7%9D%E5%92%8C%E8%BE%B9%E6%A1%86"}},[r._v("边距和边框")]),r._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B"}},[r._v("盒子模型")])]),r._v(" "),a("li",[a("a",{attrs:{href:"#marginpadding"}},[r._v("margin&padding")]),r._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E7%99%BE%E5%88%86%E6%AF%94%E6%95%B0%E5%80%BC"}},[r._v("百分比数值")])]),r._v(" "),a("li",[a("a",{attrs:{href:"#%E4%B8%8E%E7%88%B6%E7%B1%BB%E4%BD%9C%E7%94%A8"}},[r._v("与父类作用")])])])]),r._v(" "),a("li",[a("a",{attrs:{href:"#border"}},[r._v("border")])])])])]),r._v(" "),a("h2",{attrs:{id:"盒子模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#盒子模型"}},[r._v("#")]),r._v(" 盒子模型")]),r._v(" "),a("p",[r._v("IE盒子模型和W3C盒子模型。整个"),a("code",[r._v("box")]),r._v("占用宽高计算方式一致(padding+margin+width+border)，区别在于"),a("code",[r._v("content")]),r._v("区域的宽高。")]),r._v(" "),a("ul",[a("li",[r._v("IE盒子模型(border-box) - 如果定义了宽高，那么内容区域就是(定义高度 - padding - border)。")]),r._v(" "),a("li",[r._v("W3C盒子模型(content-box) - 如果定义了宽高，就是定义了内容区域高度")])]),r._v(" "),a("p",[r._v("所以特别区分两个个概念，"),a("strong",[r._v("盒子模型，内容区域")])]),r._v(" "),a("ul",[a("li",[r._v("内容区域是我们看到的元素高度，"),a("code",[r._v("+margin")]),r._v("才是盒子模型。")]),r._v(" "),a("li",[r._v("盒子模型(=width+margin+padding+border)影响布局，影响父类高度。")])]),r._v(" "),a("p",[r._v("一种特别情况在于marigin是一个负数，padding时一个正数，互相抵消，两个的绝对值特别大。就会出现一种情况，元素的宽高看起来特别大，但是由于"),a("code",[r._v("margin+padding=0")]),r._v("，所以其实这两个不会影响父类的宽高。")]),r._v(" "),a("h2",{attrs:{id:"margin-padding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#margin-padding"}},[r._v("#")]),r._v(" margin&padding")]),r._v(" "),a("p",[r._v("两个都会对布局发生影响，但是可视化来说(能够呈现内容的)只有"),a("code",[r._v("padding")]),r._v("。在"),a("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Books/tree/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E5%9F%BA%E6%9C%AC%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96",target:"_blank",rel:"noopener noreferrer"}},[r._v("CSS表现"),a("OutboundLink")],1),r._v("也提到了"),a("code",[r._v("margin or padding width")]),r._v("对父类的影响，特别是父类没有设置高度的情况下。三者相加等于父类高度或者宽度。")]),r._v(" "),a("p",[r._v("和在一起说明，以下提到的对两者都成立。")]),r._v(" "),a("p",[r._v("可以归结为两个方向。分别是上下以及左右。")]),r._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-bfc.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("bfc"),a("OutboundLink")],1),r._v("导致上下margin消失，同时在啊"),a("a",{attrs:{href:"https://github.com/JiangWeixian/JS-Books/tree/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E5%9F%BA%E6%9C%AC%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96",target:"_blank",rel:"noopener noreferrer"}},[r._v("CSS表现"),a("OutboundLink")],1),r._v("中也提到了如果 "),a("strong",[r._v("上下")]),a("code",[r._v("margin")]),r._v("设置在"),a("code",[r._v("inline非替换元素上")]),r._v("并不会影响布局。而在替换元素以及"),a("code",[r._v("inline-block or block")]),r._v("则会影响布局。")])]),r._v(" "),a("p",[r._v("现在问题来到了左右这边。"),a("strong",[r._v("在任何情况下，无论是行内，块，还是替换非替换。左右都是有效的。")])]),r._v(" "),a("h3",{attrs:{id:"百分比数值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#百分比数值"}},[r._v("#")]),r._v(" 百分比数值")]),r._v(" "),a("p",[r._v("百分比相对的是父类的"),a("code",[r._v("width")]),r._v("。即使是上下的"),a("code",[r._v("margin or padding")]),r._v("。因为在实际布局中，"),a("code",[r._v("height")]),r._v("是一个比较灵活的可变的情况。")]),r._v(" "),a("h3",{attrs:{id:"与父类作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与父类作用"}},[r._v("#")]),r._v(" 与父类作用")]),r._v(" "),a("p",[r._v("如果父类没有设置宽高，那么"),a("code",[r._v("margin or padding")]),r._v("这些设置会扩大宽高。")]),r._v(" "),a("p",[r._v("如果设置了，那么可能会有溢出的情况。")]),r._v(" "),a("h2",{attrs:{id:"border"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#border"}},[r._v("#")]),r._v(" border")]),r._v(" "),a("p",[a("strong",[r._v("不可见")])]),r._v(" "),a("ul",[a("li",[r._v("border: none")]),r._v(" "),a("li",[r._v("border-style: none")])]),r._v(" "),a("p",[r._v("都会让"),a("code",[r._v("border")]),r._v("不可见")]),r._v(" "),a("p",[a("strong",[r._v("隐藏")])]),r._v(" "),a("p",[r._v("设置颜色为"),a("code",[r._v("transparent")]),r._v("则会让"),a("code",[r._v("border")]),r._v("视觉上不可见。")]),r._v(" "),a("p",[a("strong",[r._v("border对布局的影响和"),a("code",[r._v("margin or padding")]),r._v("类似")])])])}),[],!1,null,null,null);_.default=t.exports}}]);