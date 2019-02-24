# CSS-BFC

<!-- TOC -->

- [CSS-BFC](#css-bfc)
  - [什么是BFC](#什么是bfc)
  - [BFC原则](#bfc原则)
  - [Hackers](#hackers)
  - [链接](#链接)

<!-- /TOC -->

## 什么是BFC

全称是块级格式化上下文，**可以理解为一个容器。**

**什么东西会构成BFC?**

就我个人理解来看，任何一个`box`都可以作为一个`BFC`区域。所以一个页面里面是多个`BFC`区域的嵌套。从 **Hackers**第二条来看，说明并不是每个元素默认就是`bfc`（不然每个元素都可以默认清除浮动）。所以满足下面条件的可以视为`BFC`。

1. 根元素 - 说是父类元素更为准确
2. float属性不为none
3. position为absolute或fixed
4. display为inline-block, table-cell, table-caption, flex, inline-flex
5. overflow不为visible

## BFC原则

既然页面是由多个`BFC`组成，就要涉及到页面布局的时候的原则。一个最最重要的原则是：**BFC是一个内部规则，因此如果一个`box`包含多个`boxes`，多个`boxes`的`bfc`作用是限制在`box`内部。不会影响到`box`之外。**以下虽然说的都是`box`但是都是`bfc`的特性。

1. 内部的Box会在垂直方向，一个接一个地放置。
2. Box垂直方向的距离由`margin`决定 - 上下属于同一个BFC的两个相邻Box的 **margin会发生重叠**
3. 每个元素的`margin box`的左边， 与包含块`border box`的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此 - 一个很愚蠢的问题，就是为啥boxes都是左对齐
4. **`BFC`的区域不会与`float-box`重叠** - 这个很重要，可以 **先单独记忆**
5. 计算BFC的高度时，浮动元素也参与计算

BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。


## Hackers

1. 针对上面第二点 **margin会发生重叠** 问题？
  > 可以通过将上一个box包括在新的boxA中，那么box的`margin-bfc`问题就被限制在`boxA`中。

2. overflow不为visible是bfc这一点+计算BFC的高度时，浮动元素也参与计算可以解释为什么`overflow: hidden`可以清除浮动

  > 默认`overflow: hidden`构成`bfc`，即使里面由`float`元素。为了实现`bfc`计算浮动元素的目的，**只要清除float元素带来的影响。**


## 链接

* [主要文章](http://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html)
