(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{368:function(v,_,e){"use strict";e.r(_);var t=e(0),o=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"react-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-data"}},[v._v("#")]),v._v(" React - data")]),v._v(" "),e("blockquote",[e("p",[v._v("响应式数据理解；"),e("code",[v._v("state")]),v._v("；"),e("code",[v._v("computed")])])]),v._v(" "),e("h2",{attrs:{id:"什么是响应式的数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是响应式的数据"}},[v._v("#")]),v._v(" 什么是响应式的数据")]),v._v(" "),e("p",[v._v("并不是指每次都会变化的数据。而是指的是数据的变化会引起"),e("code",[v._v("dom")]),v._v("更新（或者两者互相的作用）。")]),v._v(" "),e("p",[v._v("以及被"),e("code",[v._v("dom")]),v._v("引用的数据才是响应式的数据。")]),v._v(" "),e("h2",{attrs:{id:"vs-vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vs-vue"}},[v._v("#")]),v._v(" Vs Vue")]),v._v(" "),e("blockquote",[e("p",[v._v("暂时不考虑来自"),e("code",[v._v("model")]),v._v("的数据。")])]),v._v(" "),e("p",[v._v("在"),e("code",[v._v("vue")]),v._v("组件中中存在两种数据，分别是"),e("code",[v._v("data and computed")]),v._v("。")]),v._v(" "),e("p",[v._v("（或许有更深层次的坑，但是暂且认为这两个数据是响应式）")]),v._v(" "),e("p",[e("strong",[v._v("那么在react?")])]),v._v(" "),e("p",[v._v("类比只有和"),e("code",[v._v("data")]),v._v("相类似作用的只有"),e("code",[v._v("state")]),v._v("。也就是说没有"),e("code",[v._v("computed")]),v._v("数据。"),e("strong",[v._v("那么其实也有比较"),e("code",[v._v("hack")]),v._v("的做法")]),v._v("，就是从"),e("code",[v._v("state")]),v._v("数据中计算得到另外一部分数据。也就是类比"),e("code",[v._v("computed")]),v._v("数据。从直观上理解是可行的。")]),v._v(" "),e("p",[e("strong",[v._v("但是这样的问题在哪？")]),v._v(" 有两种情况：")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("一种是从"),e("code",[v._v("state")]),v._v("计算得到的数据被没有进一步的被"),e("code",[v._v("dom")]),v._v("使用！")]),v._v(" "),e("blockquote",[e("p",[v._v("这可能导致 "),e("strong",[v._v("数据滞后")]),v._v("。也就是说当存在"),e("code",[v._v("props and nextProps")]),v._v("的时候，"),e("code",[v._v("nextProps")]),v._v("传入且更新的时候。那么"),e("code",[v._v("computed")]),v._v("的数据可能来自于"),e("code",[v._v("props")]),v._v("。而不是随着"),e("code",[v._v("props")]),v._v("更新而再次计算。")])])]),v._v(" "),e("li",[e("p",[v._v("第二种情况是"),e("code",[v._v("state")]),v._v("计算得到的数据被"),e("code",[v._v("dom")]),v._v("使用了。这种情况下才是符合"),e("code",[v._v("vue")]),v._v("中"),e("code",[v._v("computed")]),v._v("的数据。")])])]),v._v(" "),e("p",[e("strong",[v._v("注意:")]),v._v(" 以上"),e("code",[v._v("react")]),v._v("中被"),e("code",[v._v("dom")]),v._v("使用，指的是在"),e("code",[v._v("render")]),v._v("方法中被调用。")])])}),[],!1,null,null,null);_.default=o.exports}}]);