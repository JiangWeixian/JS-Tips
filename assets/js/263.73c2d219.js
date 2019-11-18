(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{504:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ts-兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ts-兼容性","aria-hidden":"true"}},[t._v("#")]),t._v(" TS - 兼容性")]),t._v(" "),s("blockquote",[s("p",[t._v("指的是什么时候类型检查会报错，什么时候不会报错")])]),t._v(" "),s("h2",{attrs:{id:"非类类型兼容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非类类型兼容","aria-hidden":"true"}},[t._v("#")]),t._v(" 非类类型兼容")]),t._v(" "),s("p",[s("strong",[t._v("规则")]),t._v(" 如果是非类的类型，接口较少的可以赋值给接口较多的，接口较多无法赋值给接口较少的。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),s("p",[t._v("那么"),s("code",[t._v("a")]),t._v("可以赋值给"),s("code",[t._v("b")]),t._v("，但是"),s("code",[t._v("b")]),t._v("无法赋值给"),s("code",[t._v("a")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"关于类的兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于类的兼容性","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于类的兼容性")]),t._v(" "),s("p",[t._v("类在没有实例化之前不存在，"),s("strong",[t._v("如果存在以上变量赋值情况，就不存在类型比较的情况。")])]),t._v(" "),s("p",[t._v("但是如果"),s("code",[t._v("class a or class b")]),t._v("被实例化了之后，接口比较和"),s("a",{attrs:{href:""}},[t._v("##非类类型兼容")]),t._v(" "),s("strong",[t._v("规则")]),t._v(" 一样。")]),t._v(" "),s("blockquote",[s("p",[t._v("类的私有成员和受保护成员会影响兼容性。 当检查类实例的兼容时，如果目标类型包含一个私有成员，那么源类型必须包含来自 "),s("strong",[t._v("同一个类")]),t._v(" 的这个私有成员。 同样地，这条规则也适用于包含受保护成员实例的类型检查。 这允许子类赋值给父类，但是不能赋值给其它有同样类型的类。")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("以上需要兼容性需要验证一下。")])])]),t._v(" "),s("p",[t._v("在"),s("a",{attrs:{href:""}},[t._v("lib-class-compatiable.ts")]),t._v("验证得到的结果的确是这样的！")])])},[],!1,null,null,null);a.default=e.exports}}]);