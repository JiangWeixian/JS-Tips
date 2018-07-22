# 1. 浏览器渲染原理
> 调整为slow-3g；每次刷新记得clear-cache

<!-- TOC -->

- [1. 浏览器渲染原理](#1-浏览器渲染原理)
  - [1.1. 前置知识 - 构建&渲染](#11-前置知识---构建渲染)
  - [1.2. 前置知识 - DOMContentload&load](#12-前置知识---domcontentloadload)
  - [1.3. 初探 - 浏览器渲染流程](#13-初探---浏览器渲染流程)
    - [1.3.1. 假设没有SCRIPT](#131-假设没有script)
    - [1.3.2. 加入SCRIPT(不含有`defer or async`)](#132-加入script不含有defer-or-async)
    - [加入SCRIPT(含有`defer or async`)](#加入script含有defer-or-async)
      - [题外话](#题外话)
  - [1.5. 渲染初始 - `CSS-DOM-TREE&HTML-DOM-TREE`](#15-渲染初始---css-dom-treehtml-dom-tree)
  - [1.6. 渲染再次 - 重新开始](#16-渲染再次---重新开始)
  - [总结](#总结)
  - [1.7. 链接](#17-链接)

<!-- /TOC -->

## 1.1. 前置知识 - 构建&渲染

* 构建 - 由文件得到数据结构
* 渲染 - 就是可以看到呈现的画面

    如果是`link html script`这样的顺序。
    
    > 如果页面中为`link html (no defer async)script`的构成。只会等待前面两个完成就会出现页面。见[(no defer async)script.html]()测试，但是如果`script`中存在修改样式代码，可能会出现页面重新绘制。

    > 如果`link html (async defer)script`只会等待前面两个完成就会出现页面([(调整网络为slow-3g)defer-script.html]()和[(调整网络为slow-3g)defer-script.html]())。

    说明了如果是`link html script`这样的顺序。`defer async`对 **初始化**渲染结果的影响不大。

    如果是`link script html`这样的顺序。

    > 如果页面中为`link html (no defer async)script`的构成。那么页面渲染需要等待这三个全部完成。见[(no defer async)normal-script位置测试.html]()

    > 如果`link html (defer)script`只会等待前面两个完成就会出现页面([(调整网络为slow-3g)defer-script位置测试.html]())。如果是`async`由于加载完成时间不一致，可能还是会出现阻塞的情况([(调整网络为slow-3g)async-script位置测试.html]()都是比较大的文件，所以并没有出现阻塞情况)

## 1.2. 前置知识 - DOMContentload&load

[alloyteam参考链接](http://www.alloyteam.com/2014/03/effect-js-css-and-img-event-of-domcontentloaded/)

顺序为`DOMContentload->图片->load`

* DOMContentload - `HTMLDOM`解析完毕就会触发(不需要等待样式表图片，**但是需要等待所有的JS文件执行完成**)，**要区分默认的DOMContentload行为还是自定义的**。
* load - 在DOMContentload触发之后，加载完成所有资源(需要等待样式表图片)之后触发

**注意1：需要等待所有的(normal defer not async)JS文件执行完成**

在[(no defer async)script.html]()中 - 将`script`放在结尾测试，此时脚本下载不干扰`dom`解析。将`script`放在头部[(no defer async)normal-script位置测试.html]()，会干扰dom解析。虽然两个都是在JS脚本完成之后再触发`DOMContentload`(因为可以打印出`windows.$`)。但是实际情况有所不同。

由于`defer`的特性在于且 **在`DOMCONTENTLOAD`之前执行，且下载的时候不干扰dom解析，因此放在那里位置都是可以的。** 见[(调整网络为slow-3g)defer-script.html]()和[(调整网络为slow-3g)defer-script位置测试.html]()测试，无论`defer`在开头还是结尾(因为可以打印出`windows.$`)，得到结论：

> 可以发现`DOMCONTENTLOAD`等待`normal script`是因为渲染特性，等待`defer`是因为其在`DOMCONTENTLOAD`之前执行。

> 可以发现写在最后可以发现有无`defer`结果表现一致，这和现代浏览器并行下载`script`有关。

对于`async`，在[(调整网络为slow-3g)async-script.html]()和[(调整网络为slow-3g)async-script位置测试.html]()测试发现有所 **不同**(无法打印出`windows.$`)。说明:

* `async`不会严格等待`DOMCONTENTLOAD`之前执行。在上面两个例子由于`JS`文件比较大，所以在`DOMCONTENTLOAD`之前并没有下载完全。

> 如果比较小的文件，可能会在`DOMCONTENTLOAD`之前完成

**注意2：DOMContentload被css干扰了解释**

虽然`DOMContentload`不需要等待样式文件，[Q&A3]() - 但是由于`css`文件会干扰后面的`js`文件，所以还是看起来会`domcontentload`被`css`干扰了。

按照[Q&A2]()的理论，如果我们把`JS`文件放在`CSS`文件之前，就像是[domcontentload.html]()测试那样，按照以下步骤：

1. 将网络调整为offline
2. 然后将网络调整为slow 3g
3. 刷新页面，就会在`console.log`上看到先是`domcontentload`然后慢慢的才是页面出现样式。

## 1.3. 初探 - 浏览器渲染流程

![渲染流程图](https://raw.githubusercontent.com/JiangWeixian/JS-Tips/master/Broswer/img/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86.png)

上图表明了`html&css&js`都会改变`dom`。由以上可以得到结论

1. `CSS - CSSDOM`下载构建不会影响`HTMLDOM`构建，但是只有`CSSDOM and HTMLDOM`全部完成之后才会呈现页面(这部分叫渲染)。同时如果`CSS`文件后面如果有`JS`脚本，`JS`脚本需要等待`CSSDOM`下载或者解析。
2. `HTML - HTMLDOM`
3. `JS - DOMAPI`会影响到`CSSDOM`以及`HTMLDOM`。所以如果`JS`写在`CSS or HTML`之前，就会干扰`CSS or HTML`任何一个过程[Q&A2]()，所以一般将文件放在页面最下方。

**题外话**

如果将`JS`代码写在`HTML`结构中。`HTML`解析中遇到了`script`标签，浏览器会 **下载以及执行** 执行`script`标签中的`JS`代码。

**所以并不是同步进行，书写顺序十分重要**

其中前两个会构造`DOM TREE`，其中`CSS`是`CSS DOM TREE`，`HTML`是`HTML DOM TREE`。**这三个都会作用页面样式布局**，其顺序如何？有以下几个规则：

### 1.3.1. 假设没有SCRIPT

* `CSS`构建`CSSDOM` - 对于`link`标签来说，其下载过程不会干扰`DOM`解析(因为`CSS`文件没有修改添加或删除页面标签的能力)。自然构建`CSSDOM`的过程也是不会。
* 由于`CSS`文件下载(or 构建)不干扰解析`HTML`结构，`HTML`结构同步在构建的过程中。

**注意：虽然不阻塞构建，但是会影响渲染**

`HTML DOM`构建完成之后，页面并不会呈现。因为此时`CSS`文件可能还处于下载以及构建过程中。当`CSS and HTML`都完成了，页面就会呈现。

### 1.3.2. 加入SCRIPT(不含有`defer or async`)

`script`文件中可能含有对`DOM`结构操作(可能是通过标签或许是通过class，以及可能要获取样式)

**同步&异步** 

> 对于`script`脚本来说需要考虑同步异步，分别是加载以及执行的同步异步。这部分参考[defer&async]()。假设`script`标签没有`defer or async`，那么在加载过程会阻塞`css or html`任何过程。所以`script`标签一般也是放在最后。当`script`文件加载完成之后，并不会立马执行，出于对 **可能含有对`DOM`结构操作** 操作的考虑。需要等待`cssdom htmldom`可以使用之后才能够执行。

**Q&A1 - 如果JS下载完成，执行时间比较长，会影响dom吗？**

如同之前总计的`cssdom htmldom`都完成了，初始页面就已经可以看到了。

就像是[longtimescript.html]()测试的那样，js执行的时候还是会干扰页面呈现。不执行完成还是会干扰页面。

这里有一个小细节，如果`script`在`cssdom or htmldom`解析完成之后也完成了下载，且执行时间比较久的话。可能会出现白屏的情况。好办法是是将这个

**Q&A2 - JS和CSS书写顺序，同步异步关系**

如果`JS`前面存在`CSS`文件才会等待前面的`CSS`文件下载构建，而不会等待后面`CSS`文件。

### 加入SCRIPT(含有`defer or async`)

1. 将`script`标签写到页面最后是优化手段之一 
2. `defer & async`属性
    > 共同特点 - 加载`JS`的时候 **不干扰HTML(解析)，但是运行的时候还是会**
3. `defer` - 延迟。
    * 并在`HTML-DOM-TREE`解析完毕(一个叫`DOMContentLoaded`事件，在[前置知识中有解析]())之前，且`JS`加载完毕之后执行(还要受到[Q&A3]()提到的等待前面的`CSSDOM`)
    * 所以两个defer脚本的执行顺序是可以保证的。按书写顺序。
4. `async` - 同步。
    * 但是是在 **async-JS加载完毕之后** 执行(执行的时候还是干扰了dom，与`HTML-DOM-TREE`解析完毕无关)。
    * **最好不依赖其他脚本**。
    * 两个`async`脚本的执行顺序无法保证。

**defer async domcontentload**

`defer`一定发生在`DOMContentLoaded`之前，见[defer.html]()。而`async`取决于其下载什么时候完成，并没有绝对的先后关系。

> 也就是说`async`可能在`defer`之前或者之后都有可能。`async`在`DOMContentLoaded`发生之前之后都有可能。

**Q&A3 - `defer or async`JS和CSS书写顺序，同步异步关系**

**Q&A2** 对这一点也成立。

**Q&A4 - normal defer or async下载的影响**

我们知道`defer or async`下载过程对`dom`解析不受到影响。那么如果在`cssdom htmldom`解析完成之后，`js`仍旧没有下载完？那么页面还会出现吗？

在[参考链接](https://juejin.im/post/59c60691518825396f4f71a1) 存在一个`script`在`cssdom htmldom`都完成了之后，还是处于下载过程中。等到该`script`下载完成，并执行，可能会让页面有闪硕。


在[deferorasync-script.html]()中测试了代码，发现即使`script`拥有(`defer or async`)代码下载完成，执行时间比较久还是会阻止页面出现。

#### 题外话

**注意0: - 一般将defer脚本放在最后是为了兼容ie**

**注意1 - 现代浏览器已经支持的是并行下载script资源(在没有设置以上情况下)，但是会干扰其他资源下载**。也就是说上面两个其实设置的执行顺序。

**注意2 - chrome调试工具可以看到initator判断是谁发起了js请求。来自script标签说明是动态添加了脚本**。如果是来自`parser`就是直接写在html里面的。可以[async&defer](https://github.com/JiangWeixian/JS-Tips/tree/master/Demos/async%26defer)的例子。在这个例子中，可以得到：

0. 动态添加的脚本，默认开`async`
1. 如果html文件很小，defer async脚本开始加载的事件相同。但是`async`执行要滞后在`defer`之后。至少在`chrome`里面是这样的。
2. 而动态添加的脚本 **开始加载的时间**一般是在`defer async or other`此类写死在`html`脚本之后的。

这就是为什么[知乎-某答案network中js加载时间async延后defer那么多](https://www.zhihu.com/question/20531965)


## 1.5. 渲染初始 - `CSS-DOM-TREE&HTML-DOM-TREE`

当我们加载好`CSS`(可能存在是`style or link`中文件，这两个从加载顺序角度来说并没有什么区别)，以及由`HTML`构建好`DOM-TREE`的时候，两者组合同时渲染页面。

## 1.6. 渲染再次 - 重新开始

当`CSS-DOM-TREE&HTML-DOM-TREE`组合完成开始渲染。

其实遇到了`JS`文件，如果其中改变了`HTML-DOM-TREE`或者是`CSS-DOM-TREE`。就不得不重新渲染！

渲染的程度取决于`JS`对`DOM`改变程度，有可能是部分，有可能是全部。

## 总结

> 总结前面两小结

1. `DOMContentload`意味着`htmldom`解析完成
2. 初始页面渲染和`cssdom htmldom`有关
3. 如果是`link html js`这样的结构，有没有`normal defer or async`对初始页面渲染没影响。因为此时`cssdom htmldom`都已经解析完成了。
2. 如果是`js link html`这样的结构，
3. 在`DOMContentload`和`load`之间还有加载其他资源(包括图片&JS)的过程。

## 1.7. 链接

* [简单理解](http://www.cnblogs.com/Peng2014/p/4687218.html)
* [十分细致的解析](https://www.jianshu.com/p/a32b890c29b1)
* [提到JS等待CSS](https://www.w3cplus.com/javascript/building-the-dom-faster-speculative-parsing-async-defer-and-preload.html)