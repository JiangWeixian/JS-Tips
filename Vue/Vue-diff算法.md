# Vue - diff
> 虚拟DOM

## 前置知识 - 虚拟DOM

将真实DOM结构转换为JS数据结构。类似`<div class="xx" some-attr>other tag</div>`，可以转变为：

```JavaScript
// 只是举例，真实key可能不是这样
// VNode结构
{
  tag: 'div',
  attr: ...
  children: [Vnode1, VNode2]
}
```

假设是根节点(就像是`vue`文件中的`template`)，那么整个`vue`文件的根节点`dom`结构如上。


## Diff - 一些规则

> 分为简单复杂两个步骤,比较的新旧VNODE

1. 比较新旧元素`tag`(在`vue`中可能会比较`key`)
    * 如果相等，才会继续比较。这里有一个[Q&A3疑惑-如果新旧元素只是父类元素不同，而子类元素完全一样会进行如何的DIFF]()
    * 如果不相等，就会直接进行添加删除操作
2. 对于第1点相等的新旧元素

## Q&A

1. **Q&A1 -**普遍认为虚拟DOM操作时优于直接进行真实DOM操作，原因在于？

需要接受一个观点，[渲染引擎(内核)和JS引擎]()其实是两个部分。在JS上操作数据，一定是比在DOM操作来的快。这是由于引擎不同，JS传递到渲染引擎可能需要经过一个桥(DOM暴露给JS引擎的API)，这部分有耗时。

所以加快操作有两个方法：

> [批量操作]()，一次性过桥比一次接着一次过桥来的快

> 不使用DOM-API，而是像VNODE一样直接在JS上操作。

2. **Q&A2 -** 虚拟DOM什么时候起作用？

在`vue->html`过程中生成一份`old vnode`。可能引起`DOM`变化的有：

* 如果是数据更新(因为有些元素结合和`data`一些数据绑定)
* `vue`中`html`变化

在[diff算法分析](https://github.com/aooy/blog/issues/2)参考中，上面两个都会触发`diff`算法，只不过`diff`程度不同。

## 链接

* [diff算法分析](https://github.com/aooy/blog/issues/2) / 或许是主要参考文章
