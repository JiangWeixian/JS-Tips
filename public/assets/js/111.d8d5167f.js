(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{421:function(_,v,t){"use strict";t.r(v);var r=t(0),e=Object(r.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"动态规划-贪心算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态规划-贪心算法"}},[_._v("#")]),_._v(" 动态规划&贪心算法")]),_._v(" "),t("h2",{attrs:{id:"两则解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两则解析"}},[_._v("#")]),_._v(" 两则解析")]),_._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://zh.wikipedia.org/zh-hans/%E8%B4%AA%E5%BF%83%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[_._v("维基百科-贪心算法"),t("OutboundLink")],1)]),_._v(" "),t("li",[t("a",{attrs:{href:"https://zh.wikipedia.org/zh-hans/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92",target:"_blank",rel:"noopener noreferrer"}},[_._v("维基百科-动态规划"),t("OutboundLink")],1)])]),_._v(" "),t("p",[t("strong",[_._v("动态规划")])]),_._v(" "),t("p",[_._v("把一个问题最小化，然后求解这个 "),t("strong",[_._v("最小化问题的最优解")]),_._v("。")]),_._v(" "),t("p",[_._v("如果你类别数学里面的求证(就是那个k=1成立，假设k=n-1成立，如果证明k=n成立的话，那么整个式子就成立的那种证明方式的话)。就会发现这两者有相同的地方。")]),_._v(" "),t("p",[_._v("所以可以得到动态规划的思路是：先得到"),t("code",[_._v("n=1")]),_._v("(这里的"),t("strong",[_._v("1")]),_._v("是该问题的最小单元)的最优解，然后根据"),t("code",[_._v("n=1")]),_._v("得到"),t("code",[_._v("n=2")]),_._v("，依次类推。最终得到想要求解问题的最优解。")]),_._v(" "),t("p",[t("strong",[_._v("贪心算法")])]),_._v(" "),t("p",[_._v("和 "),t("strong",[_._v("动态规划")]),_._v("很容易混淆。")]),_._v(" "),t("blockquote",[t("p",[_._v("贪心法，又称贪心算法、贪婪算法、或称贪婪法，是一种在每一步选择中都采取在"),t("strong",[_._v("当前状态下")]),_._v("最好或最优（即最有利）的选择，从而希望"),t("strong",[_._v("导致结果是最好或最优")]),_._v("的算法。")])]),_._v(" "),t("p",[_._v("贪心算法并不能让我们得到每个问题的最优解，只能是大部分情况的最优解。")]),_._v(" "),t("h2",{attrs:{id:"两者优劣势"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两者优劣势"}},[_._v("#")]),_._v(" 两者优劣势")]),_._v(" "),t("p",[_._v("显然动态规划准确率更高一些。")]),_._v(" "),t("p",[_._v("如果可以接受贪心带来的准确率下降，贪心有着更高的速度。")]),_._v(" "),t("h2",{attrs:{id:"两者区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两者区别"}},[_._v("#")]),_._v(" 两者区别")]),_._v(" "),t("p",[_._v("从思路上来说，动态规划想要解决一个问题，必须先将问题最小化(简化为最小的原子，例如"),t("code",[_._v("n=1")]),_._v("),然后以这样的链路形式"),t("code",[_._v("n=1->n=2->...n=n")]),_._v("的解决方式，下一步解决方案依赖与上一步。")]),_._v(" "),t("ul",[t("li",[_._v("当"),t("code",[_._v("n=i")]),_._v("获得结果不是最优解，可以回退到上一步，继续尝试最优解法。")]),_._v(" "),t("li",[t("strong",[_._v("子问题划分是最明显的特点")])])]),_._v(" "),t("p",[_._v("而 "),t("strong",[_._v("贪心算法")]),_._v("，并不会从"),t("code",[_._v("n=1")]),_._v("开始解决问题。想要解决"),t("code",[_._v("n=j")]),_._v("的问题，就是会从"),t("code",[_._v("n=j")]),_._v("入手。")]),_._v(" "),t("p",[_._v("但是贪心算法最重要的要解决的问题是，当"),t("code",[_._v("n=j")]),_._v("的时候，"),t("strong",[_._v("最理想的情况是那种？")])]),_._v(" "),t("p",[_._v("例如求解最少硬币(以中国硬币金额为例)，6可以由"),t("code",[_._v("[5, 1] or [2, 2, 2] or [1, 1, 1, 1, 1, 1]")])]),_._v(" "),t("p",[_._v("那么拿到最少硬币的问题直观的理想解法是："),t("strong",[_._v("尽量拿大面额的硬币，在大部分条件下是可以得到最优解")]),_._v("。对于上面这个问题的思路：")]),_._v(" "),t("p",[_._v("假设最大面额是"),t("code",[_._v("5")])]),_._v(" "),t("ol",[t("li",[_._v("对于12来说，先优先拿"),t("code",[_._v("5")]),_._v("，可以拿到两个，超过两个就没有办法得到"),t("code",[_._v("12")])]),_._v(" "),t("li",[_._v("然后现在最大面额是"),t("code",[_._v("2")]),_._v("，优先拿"),t("code",[_._v("2")])])]),_._v(" "),t("p",[_._v("最后得到最优解，这就是贪心算法的解法。")]),_._v(" "),t("p",[_._v("区别在于：")]),_._v(" "),t("ul",[t("li",[_._v("贪心算法没有子问题")]),_._v(" "),t("li",[_._v("如果当前状态不是最优解，没有办法回退到上一步")])]),_._v(" "),t("p",[t("strong",[_._v("贪心算法比较动态规划更好理解！")])])])}),[],!1,null,null,null);v.default=e.exports}}]);