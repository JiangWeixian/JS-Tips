# JQuery源码阅读
> 第一次阅读

<!-- TOC -->

- [JQuery源码阅读](#jquery源码阅读)
    - [正文](#正文)
    - [Deep in Deep](#deep-in-deep)
        - [New+Prototype](#newprototype)
    - [DOM](#dom)
    - [Reg](#reg)
    - [Function](#function)
        - [$.extend](#extend)
        - [$.uniqueSort](#uniquesort)

<!-- /TOC -->

## 正文

第一次阅读记录一些有用的函数，以及`JS`内部黑科技。

## Deep in Deep

JS原理、定义部分踩坑。

### New+Prototype

* 通过`new`关键词创建的对象，通过`typeof`的结果都是`object`。无论你是`number or string`。最好判断类型的方式是`Object.prototype.toString.call(val)`来进行判断。

* 可以通过的改变`prototype`的指向来改变`new`创建的对象。在`jquery`中。
    ```javascript
    jquery.fn = jquery.prototype = {
        // 一些方法
    }
    jquery.fn.init.prototype = jquery.fn
    ```

    这样通过`new jquery.fn.init()`就可以创建一个`jquery`实例。

* 实现链式方法的关键就在于`return this`    

## DOM

原生`DOM`被JQ玩出了什么花样。记录使用到的一些属性。

**节点属性**

* `documentElement` - 获取文档根节点元素
* `ownerDocument` - 获取`a`阶段所在`document`的根节点
* `nodeType` - 每个元素都有节点类型，以数字作为代表。[参考](http://www.w3school.com.cn/jsref/prop_node_nodetype.asp) 

**原生方法**

* `NodeA.compareDocumentPosition(NodeB)` - 比较两个节点在文档上的相对位置。
    ```
    Bits          Number        Meaning 
    000000         0              元素一致 
    000001         1              节点在不同的文档（或者一个在文档之外） 
    000010         2              节点 B 在节点 A 之前 
    000100         4              节点 A 在节点 B 之前 
    001000         8              节点 B 包含节点 A 
    010000         16             节点 A 包含节点 B 
    100000         32             浏览器的私有使用
    ```
    如果是节点A和节点B是包含关系，那么A和B的关系又是包含关系，A又在B节点之前，那么该函数返回的数字为`000100+010000`。
*  `DOMElement.contains(DOMNode)` - 就如同函数名字那样，可以检验是否有包含关系。不过从返回的结果上看，`compareDocumentPosition`显然要更强大一点。

## Reg

主要是对选择器的匹配。[MDN参考地址](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

* `^`在`[]`代表开始，在内部表示非(除了什么什么之外)

## Function

有趣的函数实现

### $.extend

拷贝函数。

* [API地址](https://api.jquery.com/jquery.extend/)
* [在线地址](https://jsfiddle.net/boilerplate/jquery/)

实现大致功能为：

* 将一个目标复制到另一个目标上
    * 分为深度拷贝 - 需要递归，实现层次更深的拷贝（不仅仅是`level=1`的拷贝）
    * 浅拷贝 - 只有`level=1`的拷贝
* 还可以拷贝到`jq`上实现拓展
* 可以拷贝函数，实现`jq`方法上的拓展

其中，**`jq`方法上的拓展**和**递归实现的深度拷贝**需要重点注意。

### $.uniqueSort

**元素节点的去重**，不过里面的思想比较棒。流程如下：

1. 如果想要去重，第一步就是排序。作用就是可以让相同元素放在一起。
2. 经过第一步之后，我们只要比较相邻元素是否相同就能够知道重复元素的`index`。然后放在一个数组内，然后通过`splice`函数在节点数组上删除那些重复元素的`index`。