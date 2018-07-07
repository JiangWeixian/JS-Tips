# 浏览器渲染原理
> 理解原理有助于优化网页

<!-- TOC -->

- [浏览器渲染原理](#浏览器渲染原理)
  - [初探 - 浏览器渲染流程](#初探---浏览器渲染流程)
  - [渲染初始 - `CSS-DOM-TREE&HTML-DOM-TREE`](#渲染初始---css-dom-treehtml-dom-tree)
  - [渲染再次 - 重新开始](#渲染再次---重新开始)
  - [链接](#链接)

<!-- /TOC -->

## 初探 - 浏览器渲染流程

![渲染流程图](https://raw.githubusercontent.com/JiangWeixian/JS-Tips/master/Broswer/img/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86.png)

上图表明了`html&css&js`都会改变`dom`。先不考虑`JavaScript`的影响，就样式的影响，`css`起的作用更为严重。

由以上可以得到结论

1. `CSS - CSSDOM`
2. `HTML - DOM`
3. `JS - DOMAPI`

其中前两个会构造`DOM TREE`，其中`CSS`是`CSS DOM TREE`，`HTML`是`HTML DOM TREE`。**这三个都会作用页面样式布局**，其顺序如何？

三者是按页面的书写顺序而来！也就是说，如果书写顺序是`CSS->HTML->JS`。那么构建顺序就是先构造`CSS DOM TREE`，再者是`HTML DOM TREE`，然后再是`JS`起作用。

如果再`HTML`解析中遇到了`script`标签，浏览器会优先执行`script`标签中的`JS`代码。

**所以并不是同步进行，书写顺序十分重要**

## 渲染初始 - `CSS-DOM-TREE&HTML-DOM-TREE`

当我们加载好`CSS`(可能存在是`style or link`中文件，这两个从加载顺序角度来说并没有什么区别)，以及由`HTML`构建好`DOM-TREE`的时候，两者组合同时渲染页面。

## 渲染再次 - 重新开始

当`CSS-DOM-TREE&HTML-DOM-TREE`组合完成开始渲染。

其实遇到了`JS`文件，如果其中改变了`HTML-DOM-TREE`或者是`CSS-DOM-TREE`。就不得不重新渲染！

渲染的程度取决于`JS`对`DOM`改变程度，有可能是部分，有可能是全部。

## 链接

* [简单理解](http://www.cnblogs.com/Peng2014/p/4687218.html)
* [十分细致的解析](https://www.jianshu.com/p/a32b890c29b1)