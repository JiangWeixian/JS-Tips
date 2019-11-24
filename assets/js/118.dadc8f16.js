(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{427:function(v,_,t){"use strict";t.r(_);var r=t(0),s=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"设计原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计原则"}},[v._v("#")]),v._v(" 设计原则")]),v._v(" "),t("blockquote",[t("p",[v._v("实践是最重要的")])]),v._v(" "),t("h2",{attrs:{id:"前置知识-设计模式和原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前置知识-设计模式和原则"}},[v._v("#")]),v._v(" 前置知识 - 设计模式和原则")]),v._v(" "),t("p",[v._v("设计原则并不是独立出来的。")]),v._v(" "),t("p",[v._v("一个模式也不是只有一种设计原则。")]),v._v(" "),t("p",[v._v("好的设计模式可能是多个设计原则的综合。")]),v._v(" "),t("h2",{attrs:{id:"单一原则-srp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单一原则-srp"}},[v._v("#")]),v._v(" 单一原则(SRP)")]),v._v(" "),t("p",[v._v("一个对象方法只负责一件事情。")]),v._v(" "),t("ul",[t("li",[v._v("就像是添加图片节点和图片预加载和懒加载是两件事情。")]),v._v(" "),t("li",[v._v("构成对象和将对象封装为单例是两件事情，不需要在构建对象的时候，特意写成单例")])]),v._v(" "),t("p",[v._v("也就是能够封装的方法，就封装的优雅一些。是否封装的原则在于：")]),v._v(" "),t("p",[t("strong",[v._v("如果两个属性(或者方法对象)是同步的变化发生的话，就没有必要封装。")])]),v._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[v._v("其实这是两面性的概念，因为如果"),t("strong",[v._v("不封装，减少了扩展性，但是使用会优雅舒服一点。")])]),v._v(" "),t("h2",{attrs:{id:"最少知识原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最少知识原则"}},[v._v("#")]),v._v(" 最少知识原则")]),v._v(" "),t("p",[v._v("对象和对象之间减少耦合。")]),v._v(" "),t("p",[t("strong",[v._v("如何判断对象和对象之间是否耦合严重")]),v._v("，就是当一个对象变化的时候，另外的对象是否联动着变化。")]),v._v(" "),t("ul",[t("li",[v._v("为了体现这个原则，往往会引入第三方进行统一管理")]),v._v(" "),t("li",[v._v("在不那么复杂的情况下，也会使用闭包的原则("),t("strong",[v._v("函数变量")]),v._v(")")])]),v._v(" "),t("p",[v._v("这一点对我来说非常重要，因为是我比较难以把握的一点。")]),v._v(" "),t("h2",{attrs:{id:"开发封闭原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发封闭原则"}},[v._v("#")]),v._v(" 开发封闭原则")]),v._v(" "),t("p",[v._v("不改变原有代码，只扩展原有代码。")]),v._v(" "),t("ul",[t("li",[v._v("装饰模式是很好的例子 - 不改变，只扩展")]),v._v(" "),t("li",[v._v("回调函数 - 不改变原有代码"),t("code",[v._v("API")]),v._v("，使用回调扩展")])]),v._v(" "),t("p",[v._v("进一步，分析"),t("strong",[v._v("不改变原有代码，只扩展原有代码")]),v._v("的理由是什么？")]),v._v(" "),t("ol",[t("li",[v._v("原有代码可能不满足要求，需要扩展功能")]),v._v(" "),t("li",[v._v("源代码维护扩展困难")])]),v._v(" "),t("p",[t("strong",[v._v("注意：源代码只是举例说明。有可能指的是某部分数据。")])]),v._v(" "),t("p",[v._v("也就是说"),t("strong",[v._v("源代码或者数据")]),v._v("处在变化状态，而我们需要这部分数据。依照开放-封闭原则：")]),v._v(" "),t("ol",[t("li",[v._v("代码变化 - 封装变化的这部分，不改变它，添加新的代码段成为一个新的函数。就像是"),t("strong",[v._v("装饰模式")]),v._v("那样(其他模式其实也体现了这个原则)。\n"),t("ul",[t("li",[v._v("例如"),t("strong",[v._v("代理模式")]),v._v("，封装对象方法，代理则起到了扩展作用。")])])]),v._v(" "),t("li",[v._v("数据变化 - 封装数据，监听数据变化。就像是"),t("strong",[v._v("发布订阅模式")])])]),v._v(" "),t("h2",{attrs:{id:"面向接口原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面向接口原则"}},[v._v("#")]),v._v(" 面向接口原则")]),v._v(" "),t("p",[v._v("API!是外部调用对象的方法。")]),v._v(" "),t("p",[v._v("在所有设计模式中都有体现，要实现某个具体功能，就要调用某个对象暴露在外面的方法("),t("code",[v._v("obj.fire()")]),v._v(")，这就是接口。")]),v._v(" "),t("h2",{attrs:{id:"代码重构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码重构"}},[v._v("#")]),v._v(" 代码重构")]),v._v(" "),t("p",[v._v("个人认为，这个概念包含很多。总有一些小细节可以在平时注意：")]),v._v(" "),t("ol",[t("li",[v._v("提炼代码为函数 - 为了更好的修改")]),v._v(" "),t("li",[v._v("重复代码段为函数 - 为了更好的复用，注意和第一点的区别")])]),v._v(" "),t("p",[v._v("只要代码写得多，这两点平时一定是非常注意的。还有一些我平时没有注意到的：")]),v._v(" "),t("ol",[t("li",[v._v("条件分支为代码 - 指的是("),t("code",[v._v("if (code)")]),v._v("指的是"),t("code",[v._v("code")]),v._v("那部分)")]),v._v(" "),t("li",[v._v("参数过多时候，用对象代替(类似"),t("code",[v._v("json")]),v._v("那种格式)")]),v._v(" "),t("li",[v._v("链式调用 - "),t("code",[v._v("promise")]),v._v("或者是"),t("code",[v._v("return this")]),v._v("都能够实现链式调用")]),v._v(" "),t("li",[v._v("分解大型类 - 如果一个类中有一个函数体量很大，推荐改进为类。")])])])}),[],!1,null,null,null);_.default=s.exports}}]);