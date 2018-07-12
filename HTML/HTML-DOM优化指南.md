# HTML - DOM优化指南
> 仅仅是DOM

## 前置知识 - 关于DOM

**节点是什么？**

> 除了我们已知的节点标签。**文本也是标签。**

**HTMLCollection以及NodeList？**

两种都是类`array`的数据结构，但是不完全就全具有`array`所有方法。

> 在[WEBAPI-DOM&BOM]()有简要说明。**前置一定是动态更新的数组，后者不一定。** Node.childNodes以及Node.childElement对应上面两种(但是这两个返回的都是动态更新的)。同时`querySelector and getElement...`分别是`NodeList and HTMLCollection`，通过前面方法获取的`Nodelist`时静态的，后者是动态的。

**动态更新的含义？**

> 假设我们使用`divs = querySelector and getElement...`获取`div`。如果`divs`在后期变多了，前者获取的`divs.length`是在改变的。

**脱离文档流？**

分为两部分，一部分是操作节点脱离文档流，另一部分是动画脱离文档流。

操作节点脱离文档流：隐藏元素/DocumentFragment/nodelist

动画脱离文档流：定位/浮动

## 任何事都有一种规则

* 获取节点
* 操作节点 - 删除/添加/修改
* 样式修改

可以总结下以下规则：

1. 批量修改好过一个个修改
2. 空间换取时间的规则依旧成立 - 例如缓存
3. JS操作时间优于DOM
4. 内置方法优于自定义方法
5. 脱离文档流 - 避免修改DOM结构树
6. 禁止冒泡/适当阻止默认事件

## 具体应用

### 批量修改VS一个个修改

> 文本节点也是节点，所以修改文本节点也最好批量

**样式修改 - 优化规则1**

* 于其使用`style`一个个修改，还不如使用`csstext`

**节点操作 - 优化规则1以及规则5及规则2**

如果需要添加多个节点，有两种方式优化：

* 使用`DocumentFragment`缓存需要添加的节点 - 同样也脱离了文档流
* 使用`cloneNode`方法克隆节点A，得到`cloneB`，然后将生成节点添加到 **cloneB**。替换掉节点`A`，一般通过`A.parentNode.replaceChild` - 因为clone得到的节点和原本节点无关，**脱离了文档流**
* 同时`innerHTML`由于可以解析`html code`所以也是批量操作的一种方式

优化第一点和第二点两个可以结合使用，例如使用`cloneNode`保存`DocumentFragment`。

### 缓存优化

> 文本节点也是节点，所以修改文本节点也最好批量

**节点操作 - 优化规则2**

* 在 **批量修改VS一个个修改**提到的，`cloneNode`和`DocumentFragment`结合使用。
* 如果你操作文本，可以将现在`JS-string`中修改然后同步到`dom`
* 同时一个节点是需要之后多次操作的，请保存到变量中，而不是用的时候在`index or query`

**节点操作 - 结合优化规则3**

由于JS的操作速度由于直接操作`HTMLCollection以及NodeList`。可以选择将其转换为`array`

### 内置方法优化

**优化节点获取 - 优化规则4**

我们要知道一些`node or element`元素的API方法。特别是获取节点list的，例如childNodes, children, 还有特别的`document.images document.links etc...`。

获取这些元素，直接API接口，好过自己写的方法。

### 动画优化

这部分涉及到[重排以及重绘部分姿势]()。

避免[重排以及重绘]()可以进行优化，例如将动画的那个图层脱离文档流进行优化

## 链接

* [例子详细](https://juejin.im/entry/58abed228d6d810058bee22f/)
* [可以作为上一篇补充](https://www.kancloud.cn/kancloud/web_performance_optimization/80990)