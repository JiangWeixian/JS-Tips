(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{523:function(s,t,a){"use strict";a.r(t);var e=a(0),_=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"js-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-number"}},[s._v("#")]),s._v(" JS - Number")]),s._v(" "),a("blockquote",[a("p",[s._v("masvalue&maxsafevalue")])]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#js---number"}},[s._v("JS - Number")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%89%8D%E7%BD%AE%E7%9F%A5%E8%AF%86---%E4%BA%8C%E8%BF%9B%E5%88%B6%E8%BD%AC%E5%8C%96"}},[s._v("前置知识 - 二进制转化")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E5%89%8D%E7%BD%AE%E7%9F%A5%E8%AF%86---js%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8"}},[s._v("前置知识 - JS数据存储")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#max_safe_integer"}},[s._v("MAX_SAFE_INTEGER")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E7%9B%B8%E5%85%B3%E6%93%8D%E4%BD%9C"}},[s._v("相关操作")])])])]),s._v(" "),a("li",[a("a",{attrs:{href:"#max_value"}},[s._v("MAX_VALUE")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#min_value"}},[s._v("MIN_VALUE")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E6%80%BB%E7%BB%93"}},[s._v("总结")])])])])]),s._v(" "),a("h2",{attrs:{id:"前置知识-二进制转化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置知识-二进制转化"}},[s._v("#")]),s._v(" 前置知识 - 二进制转化")]),s._v(" "),a("p",[s._v("如果不需要明白转换原理")]),s._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\nnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 100")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v("\nnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 0.1")]),s._v("\n")])])]),a("p",[a("strong",[s._v("题外话 - 具体转换公式")])]),s._v(" "),a("p",[s._v("如果是"),a("code",[s._v("4")]),s._v("的话")]),s._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2...0(分别是商和余数)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1...0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 0...1 由于商为0了，所以停止计算")]),s._v("\n")])])]),a("p",[s._v("如果是"),a("code",[s._v("0.5")]),s._v("的话")]),s._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1...0(分别是小数点前面和后面)，由于小数点后面是0了，所以停止计算")]),s._v("\n")])])]),a("h2",{attrs:{id:"前置知识-js数据存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置知识-js数据存储"}},[s._v("#")]),s._v(" 前置知识 - JS数据存储")]),s._v(" "),a("blockquote",[a("p",[s._v("计算机都是二进制存储")])]),s._v(" "),a("p",[s._v("数据8个字节，每个字节8bit，一共64bit。")]),s._v(" "),a("ul",[a("li",[s._v("1个符号位 - 这个好理解，就是正负")]),s._v(" "),a("li",[s._v("11个指数位")]),s._v(" "),a("li",[s._v("52个尾数位")])]),s._v(" "),a("p",[a("strong",[s._v("以一个例子说明JS数据存储形式：")])]),s._v(" "),a("p",[s._v("理解"),a("a",{attrs:{href:"https://github.com/camsong/blog/issues/9",target:"_blank",rel:"noopener noreferrer"}},[s._v("@camsong浮点数"),a("OutboundLink")],1)]),s._v(" "),a("ol",[a("li",[a("p",[a("code",[s._v("4.5")]),s._v("会变为"),a("code",[s._v("100.1")]),s._v("，其中"),a("code",[s._v("100")]),s._v("为"),a("code",[s._v("4")]),s._v("，"),a("code",[s._v("0.1")]),s._v("就是"),a("code",[s._v("0.5")]),s._v("的数据存储")])]),s._v(" "),a("li",[a("p",[s._v("对于"),a("code",[s._v("100.1")]),s._v(" "),a("strong",[s._v("在JS中数字都会转化为上面格式的二进制表示为"),a("code",[s._v("1.001*2^2")])]),s._v("，"),a("code",[s._v("1.001")]),s._v("是二进制，而"),a("code",[s._v("2^2")]),s._v("是二进制形式的指数表达，可以理解为10进制的"),a("code",[s._v("10^2")]),s._v("。"),a("strong",[s._v("也就是小数点向后移动两个位置的形式")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/948896/31601584-f65ed43e-b21f-11e7-8755-c99b48e5134c.png",alt:"存储格式"}})]),s._v(" "),a("p",[s._v("对应"),a("code",[s._v("1.001")]),s._v("，符号位是"),a("code",[s._v("S=0")]),s._v("，尾数位是"),a("code",[s._v("M=001")]),s._v("，指数位置是"),a("code",[s._v("2")]),s._v("(指数部分此时还不是bit形式，但是对于bit尾数有特别意义)。符号位很好理解，主要是这个"),a("code",[s._v("001")]),a("a",{attrs:{href:""}},[s._v("尾数位")]),s._v("。")])])]),s._v(" "),a("p",[a("strong",[s._v("尾数位")])]),s._v(" "),a("blockquote",[a("p",[s._v("首先要知道尾数其实是小数点后面的数字")])]),s._v(" "),a("p",[a("strong",[s._v("在JS中1.001前面的1不保存(转换好尾数再默认添加即可)")]),s._v("，也就是上图中("),a("code",[s._v("M+1")]),s._v(")的含义。也就是说"),a("code",[s._v("52")]),s._v("位置都是用来保存尾数的。")]),s._v(" "),a("p",[s._v("也就是说"),a("code",[s._v("001")]),s._v("后面还有"),a("code",[s._v("0000...0000")]),s._v("共"),a("code",[s._v("49")]),s._v("个。合计52个。")]),s._v(" "),a("p",[s._v("那么对于"),a("code",[s._v("4.5")]),s._v("来说就是"),a("code",[s._v("1 x 2^2 x (001 + 1)")]),s._v("，"),a("code",[s._v("001 + 1")]),s._v("等价于"),a("code",[s._v("1.001")]),s._v("，但是 "),a("strong",[s._v("注意这个"),a("code",[s._v("1")]),s._v("是不存储的")])]),s._v(" "),a("p",[s._v("以上面格式存储之后，转换为10进制需要经过：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("001 + 1")]),s._v("等价于"),a("code",[s._v("1.001")])]),s._v(" "),a("li",[a("code",[s._v("1.001 x 2^2")]),s._v("等价于"),a("code",[s._v("100.1")])]),s._v(" "),a("li",[a("code",[s._v("100.1")]),s._v("转换为10进制")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/camsong/blog/issues/9",target:"_blank",rel:"noopener noreferrer"}},[s._v("@camsong浮点数"),a("OutboundLink")],1),s._v("还提到了如何将小数转换为"),a("code",[s._v("1.xxx")]),s._v("这样的格式。")]),s._v(" "),a("blockquote",[a("p",[s._v("由于小数转换为二进制可能出现无线循环的情况，见"),a("a",{attrs:{href:""}},[s._v("JS-浮点数陷阱")]),s._v("。而由于尾数位数的限制，所以会截断部分，使得二进制表示是不完整的，最终转换为10进制的时候进行其他计算的时候，就会出现误差。")])]),s._v(" "),a("p",[a("strong",[s._v("指数位")])]),s._v(" "),a("blockquote",[a("p",[s._v("2^(xxx)指数位指的是"),a("code",[s._v("xxx")]),s._v("的数字部分。也就是"),a("code",[s._v("xxx")]),s._v("如果是二进制表示的话，只能够是"),a("code",[s._v("11")]),s._v("位。(xxx)指的是"),a("code",[s._v("E-1023")])])]),s._v(" "),a("p",[s._v("由于指数可以是负数，所以"),a("code",[s._v("11")]),s._v("位的"),a("code",[s._v("xxx")]),s._v("第1位是符号位，后面10位才是真实数字。范围就是(-1023, 1023)之间。(在二进制中)"),a("strong",[s._v("正的代表小数点对于"),a("code",[s._v("1.001")]),s._v("来说，需要小数点向右边移动位置，负的就是小数点向左边移动。")])]),s._v(" "),a("p",[a("strong",[s._v("这里我指的都是，注意是"),a("code",[s._v("xxx(E-1023)")]),s._v("的范围")]),s._v("，严格来说，计算机表示的是"),a("code",[s._v("E的范围")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"max-safe-integer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#max-safe-integer"}},[s._v("#")]),s._v(" MAX_SAFE_INTEGER")]),s._v(" "),a("blockquote",[a("p",[s._v("表示的最大正整数，和尾数相关")])]),s._v(" "),a("p",[s._v("在"),a("a",{attrs:{href:""}},[s._v("前置知识 - JS数据存储")]),s._v("提到，尾数可以保存52位。")]),s._v(" "),a("p",[a("strong",[s._v("最大正整数")]),s._v("含义为，尾数部分没有小数部分("),a("code",[s._v("1.001")]),s._v("需要变为"),a("code",[s._v("100.1")]),s._v("就表示有小数部分)")]),s._v(" "),a("p",[s._v("那么最大就是尾数部分全部都是"),a("code",[s._v("1")]),s._v("，一共"),a("code",[s._v("52")]),s._v("个，为"),a("code",[s._v("1.111111.....111")]),s._v("，尾数部分"),a("code",[s._v("52个1")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("1.111111.....111")]),s._v("全部表示正数，(没有小数部分，全部代表小数点前面的数据)也就是可以转换为"),a("code",[s._v("1111111.....111")]),s._v("共"),a("code",[s._v("53")]),s._v("个。(虽然第一个位置"),a("code",[s._v("1")]),s._v("不存储，但是在转换为10进制的时候，还是要加上)")]),s._v(" "),a("p",[s._v("可以计算得到"),a("code",[s._v("2^52+....2^0")]),s._v("等于"),a("code",[s._v("2^53-1")]),s._v("，就是"),a("code",[s._v("Number.MAX_SAFE_INTEGER")])]),s._v(" "),a("p",[a("strong",[s._v("MIN_SAFE_INTEGER就是负数的MAX_SAFE_INTEGER")])]),s._v(" "),a("h3",{attrs:{id:"相关操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关操作"}},[s._v("#")]),s._v(" 相关操作")]),s._v(" "),a("blockquote",[a("p",[s._v("记录和"),a("code",[s._v("MAX_SAFE_INTEGER")]),s._v("相关问题")])]),s._v(" "),a("ol",[a("li",[s._v("BUG1")])]),s._v(" "),a("p",[s._v("MAX_SAFE_INTEGER = 2^53-1")]),s._v(" "),a("p",[s._v("如果一个数字等于"),a("code",[s._v("2^53")]),s._v("，那么"),a("code",[s._v("2^53+1")]),s._v("还是等于"),a("code",[s._v("2^53")]),s._v("。"),a("strong",[s._v("如果用在循环上，可能导致死循环。")]),s._v("。而且如果不加上"),a("code",[s._v("1")]),s._v("，而是一下子加了一个比较大的数字，数值变化了，但是结果不对。因所以"),a("code",[s._v("MAX_SAFE_INTEGER")]),s._v("范围之内，结果才会比较准确。")]),s._v(" "),a("p",[s._v("可是如果是乘法却又不会，例如"),a("code",[s._v("2^53*num(>1) != 2^53")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"max-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#max-value"}},[s._v("#")]),s._v(" MAX_VALUE")]),s._v(" "),a("blockquote",[a("p",[s._v("大于"),a("code",[s._v("MAX_SAFE_INTEGER")]),s._v("。")])]),s._v(" "),a("p",[s._v("在"),a("a",{attrs:{href:""}},[s._v("MAX_SAFE_INTEGER")]),s._v("，对于"),a("code",[s._v("1.111111.....111")]),s._v("("),a("strong",[s._v("全部转换位小数点前面的数据")]),s._v(")，需要将小数点向右移动52个位置。也就是"),a("code",[s._v("1.111111.....111 * 2^52")]),s._v("，注意"),a("code",[s._v("2^52")]),s._v("是对于"),a("code",[s._v("bit")]),s._v("操作才是移动位置。")]),s._v(" "),a("p",[a("strong",[s._v("细节部分")])]),s._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 以下面举例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("001")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("等价于"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.001")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.001")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("等价于"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.1")]),s._v("转换为"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("进制\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第三步")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.5")]),s._v("\n")])])]),a("p",[s._v("如果从第二步骤开始：")]),s._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.001")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 等价于 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此时如果直接将10.01跳到第三步")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.01")]),s._v("等于"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("进制的"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.25")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// (2^1*1 + 0 + 0 + 2^-2*1)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 那么剩余的2^1不再是相对于二进制的移动小数点操作")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 而是2.25直接乘以2 = 4.5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可以测试以下1.001转化为10进制之后，然后再乘以2^2")]),s._v("\n")])])]),a("p",[s._v("所以对于"),a("code",[s._v("MAX_VALUE = 1.111111....111 * 2^1023")]),s._v("来说，等价于"),a("code",[s._v("MAX_VALUE = 1.111111....111 * 2^52 * 2^971")]),s._v("。其中"),a("code",[s._v("1.111111.....111 * 2^52")]),s._v("转换为10进制表示为"),a("code",[s._v("MAX_SAFE_INTEGER")]),s._v("，也就是说：")]),s._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MAX_VALUE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.111111")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".111")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1023")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MAX_SAFE_INTEGER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("971")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MAX_SAFE_INTEGER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("971")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 最后一个等式，根据上面的理论就是10进制的操作")]),s._v("\n")])])]),a("p",[a("strong",[s._v("大于MAX_VALUE就是无穷")])]),s._v(" "),a("h2",{attrs:{id:"min-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#min-value"}},[s._v("#")]),s._v(" MIN_VALUE")]),s._v(" "),a("blockquote",[a("p",[s._v("并不是负数的"),a("code",[s._v("MAX_VALUE")]),s._v("，含义为最接近0(但是大于0)的正数，说明是个小数")])]),s._v(" "),a("p",[a("code",[s._v("MIN_VALUE")]),s._v("等于"),a("code",[s._v("5e-324")]),s._v("，等于"),a("code",[s._v("Math.pow(2, -1075)")])]),s._v(" "),a("p",[s._v("可以预知"),a("code",[s._v(".000000...001")]),s._v("是 "),a("strong",[s._v("尾数部分")]),s._v("最小表示，且这是一个小数。转化为10进制就是：")]),s._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此时小数点前面是0？这一点我一直不太好理解...")]),s._v("\n")])])]),a("p",[s._v("那么"),a("code",[s._v("MIN_VALUE = 2^-1023 * 2^-52")])]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("将几个内置的数据排序在坐标轴上，可以得到：")]),s._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MAX_VALUE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MAX_SAFE_INTEGER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MIN_VALUE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MIN_VALUE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MAX_SAFE_INTEGER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MAX_VALUE")]),s._v("\n")])])]),a("p",[s._v("在"),a("code",[s._v("-MAX_VALUE")]),s._v("左边就是负无穷，在"),a("code",[s._v("MAX_VALUE")]),s._v("右边就是正无穷")])])}),[],!1,null,null,null);t.default=_.exports}}]);