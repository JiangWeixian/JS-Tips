# 浏览器渲染原理
> 理解原理有助于优化网页性能

<!-- TOC -->

- [浏览器渲染原理](#浏览器渲染原理)
  - [初探 - 浏览器渲染流程](#初探---浏览器渲染流程)
  - [渲染初始 - `CSS-DOM-TREE&HTML-DOM-TREE`](#渲染初始---css-dom-treehtml-dom-tree)
  - [渲染再次 - 重新开始](#渲染再次---重新开始)
  - [优化性能](#优化性能)
    - [CSS优化](#css优化)
    - [JS优化](#js优化)
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

## 优化性能

当我们请求地址，获得了`html`中**标签**包括`dom&link`，`link`中`css`文件并没有下载，而 **`dom`元素已经跟随`.html`文件下载回来了。**等待样式文件下载完毕参与构建。

页面加载是否快速，涉及到以下几个方面。这篇文章总结的也只是**第五点-CSS&HTML&JS对页面渲染的影响！**

1. DNS 查询
2. TCP 连接
3. HTTP 请求即响应
4. 服务器响应
5. 客户端渲染

`HTML`的标签(指的是`div p etc...`)我们无法优化，**当然如果能够使用最少元素构建是最好的**。我们只能够从`CSS&JS`两个角度触发。

### CSS优化

页面中的`CSS`从开始到渲染涉及到三个过程：

1. 加载
2. 构建`CSS-DOM-TREE`
3. 渲染

其中前两个是可以优化的。

**加载优化**

合并`CSS`文件可以减少`HTTP`请求，可以优化性能。**但是假设我们有两个个样式文件，其中一个全局(无论什么条件下都会起作用)，其余一个是`media query`作用在屏幕尺寸改变的时候**

明显后面那个是不需要再页面加载的时候就加载进来的。可以比第一个稍微延迟一点。因此我们可以通过

```HTML
<link href="index.css" rel="stylesheet">
<link href="print.css" rel="stylesheet" media="print">
<link href="other.css" rel="stylesheet" media="(min-width: 30em) and (orientation: landscape)">
```

后面两个添加了`meida`，所以会延迟加载，也就是当加载好`index.css`之后，就会开始进行`HTML-DOM-TREE`构建。而后面两个会同步加载，但是不会影响`CSS-DOM-TREE&HTML-DOM-TREE`构建。至少再页面开始的时候是这样的。

**构建优化**

1. 给需要标签添加`class`是优化性能重要步骤 - 此时要涉及到`CSS-DOM-TREE`的构建规则，如果看过`JQ`实现其选择器的源码的话，就会发现它**并不是从左到右边的选择**，即当`.class a`，并不是找到`.class`元素，然后再再其中找到`a`元素。

    而是遵循从右到左原则，先找到`a`元素然后再由上找到`.class`元素。浏览器也是这样的规则。

    所以页面众多`a`标签，却只有`.class`元素。先是找到`a`标签，由于`a`标签过多，这一步很影响性能，所以给需要的`a`标签添加`class`是优化性能重要步骤。

    
这部分的[参考链接](https://zhuanlan.zhihu.com/p/29418126)

2. `CSS-DOM-TREE`树结构优化 - 首先这是个书结构，所以层级不要太深，树结构不要太复杂能够优化解析。
    * 选择器不要太多，比如说从`html`标签开始选择一个`a`标签
    * 不要使用比较短的`class-name`

[参考-编写高效的CSS](https://www.oschina.net/translate/writing-efficient-css-selectors) - 不过也要从适合自己角度触发。

### JS优化

和`CSS`一样，页面中的`JS`从开始到渲染涉及到三个过程：

1. 加载
2. 运行
3. 渲染

**加载优化**

1. 将`script`标签写到页面最后是优化手段之一 
2. `defer & async`属性，并行加载`JS`
    * `defer` - 延迟加载，或者说让`HTML-DOM-TREE`和加载`script`标签同步进行。**并在`HTML-DOM-TREE`解析完毕之后，且`JS`加载完毕之后执行。**
    * `async` - 也是同步加载，但是是再`JS`加载完毕之后执行。并不会等待`HTML-DOM-TREE`解析完毕。

**运行优化**

指的是对`DOM`修改这一部分

不要逐条修改`css`样式，将改变的样式写到一起，一起修改；也可以改变`classname`实现样式的变化。

## 链接

* [简单理解](http://www.cnblogs.com/Peng2014/p/4687218.html)
* [十分细致的解析](https://www.jianshu.com/p/a32b890c29b1)