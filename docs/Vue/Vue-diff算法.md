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

**注意：**

1. 在`VNode`中，同时还会绑定真实的`DOM`结构，便于在`Diff`算法中进行`DOM`操作。

    ```JavaScript
    {
      tag: 'div',
      el: div // 真实dom节点
      attr: ...,
      children: [Vnode1, VNode2]
    }
    ```


## Diff - 一些规则

> 分为简单复杂两个步骤,比较的新旧VNODE

1. 比较新旧元素`tag`(在`vue`中可能会比较`key`，如果是组件的话就比较组件)
    * 如果相等，才会继续比较。这里有一个[Q&A3疑惑-如果新旧元素只是父类元素不同，而子类元素完全一样会进行如何的DIFF]() - 此时会称为 **值得比较**
    * 如果不相等，就会 **直接进行添加删除操作** - 此时会称为 **不值得比较**
2. (对于第1点相等的新旧元素值得比较情况下)可能出现 **旧元素存在子节点or新元素存在子节点**此类二者存一的情况。此时也是 **直接进行删除添加操作**
3. (以上都是比较操作比较直接的比较，以及DOM操作) - 如果 **值得比较&新旧元素子节点都存在**，那么就应该进行进一步比较，这是`diff`算法重点内容。
4. (减低算法复杂度)只会比较树状结构同一层节点，就像是[前置知识 - 虚拟DOM]()中举例的`VNODE`结构，比较新旧`VNODE`的`children`。
    
    > 其实[前置知识 - 虚拟DOM]()JSON格式也是类似树的树结构。`children`就是父类`div`的同一层的子节点。

    > 所以可以设想以下，拿到新旧VNODE，根节点对应第一层元素，互相的`children`对应第2层元素。如果元素`tag`就不一样了，那么就是删除操作了。如果值得比较了，那么比较`children`(经过第2点筛选)，比较`children`中`vnode`原则是不变的。

## Diff

> 对于单个节点，只有规则1适用。`diff`比较的是单个节点的`children`部分，或者是list部分。由于是一个递归过程，会比较`children's vnode`中`vnode`。

> **其实可以参考检测回文的的步骤**。会在新旧vnode头尾都放置两个指针[果然和我总结的算法指北一样]()，然后移动两个指针就可以了。

假设`oldnode: oldstart oldend`，以及`newnode: newstart newend`。存在四种比较情况(也是比较顺序)，中止比较的条件为 **指针达到尾部，如果存在oldstart到达尾部，newstart没有达到(参考`mergetsort`对这一部分处理)**：

1. `oldstart&newstart` - 比较规则还是[Diff - 一些规则]()，如果值得比较就进行递归`diff`->然后下移`oldstart&newstart`指针->回到第一步
2. `oldend&newend` - 比较规则还是[Diff - 一些规则]()，如果值得比较就进行递归`diff`->然后下移`oldend(--)&newend(--)`指针->回到第一步
3. `oldstart&newend` - 比较规则还是[Diff - 一些规则]()，如果值得比较就进行递归`diff`->将`oldstart`移动到`oldvnode`末尾->然后下移`oldstart(++)&newend(--)`指针->回到第一步
4. `oldend&newstart` - 比较规则还是[Diff - 一些规则]()，如果值得比较就进行递归`diff`->将`oldend`移动到`oldvnode`头部->然后下移`oldend(--)&newend(++)`指针->回到第一步

以上都是在上一步不成立的情况下，说的太乱的话，见[diff算法分析](https://github.com/aooy/blog/issues/2)


## Q&A

1. **Q&A1 -** 普遍认为虚拟DOM操作时优于直接进行真实DOM操作，原因在于？

需要接受一个观点，[渲染引擎(内核)和JS引擎]()其实是两个部分。在JS上操作数据，一定是比在DOM操作来的快。这是由于引擎不同，JS传递到渲染引擎可能需要经过一个桥(DOM暴露给JS引擎的API)，这部分有耗时。

所以加快操作有两个方法：

> [批量操作](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/HTML/HTML-DOM%E4%BC%98%E5%8C%96%E6%8C%87%E5%8D%97.md)，一次性过桥比一次接着一次过桥来的快

> 不使用DOM-API，而是像VNODE一样直接在JS上操作。

2. **Q&A2 -** 虚拟DOM什么时候生成？

初始化编译阶段(从`vue->html`)一定会生成一份`vnode`。问题在于新的`vnode`什么时候生成？

* 数据变动 - 生成新的`vnode`，这部分可能是`v-for`，或者是`if else`来触发哪些`DOM`是出现或者消失，**而这些都和data有关**，那么这部分数据变动会触发`new vnode`可以理解。
* 如果对真实dom直接进行拖拽等操作，这就不是`vue`数据驱动的路子了，估计会再进行经过编译的步骤？(个人理解) - 如果拖拽换为`vue`的路子，应该是拖拽引起数据变化，然后然后数据变化引起`dom`更新，动画效果应该也能够通过一定方法实现。

3. **Q&A3 -** 虚拟DOM什么时候起作用？

在`vue->html`过程中生成一份`old vnode`。可能引起`DOM`变化的有：

* 如果是数据更新(因为有些元素结合和`data`一些数据绑定)
* `vue`中`html`变化

在[diff算法分析](https://github.com/aooy/blog/issues/2)参考中，上面两个都会触发`diff`算法，只不过`diff`程度不同。

4. **Q&A4 -** 如果新旧元素只是父类元素不同，而子类元素完全一样会进行如何的DIFF

对于这部分处理时减少算法复杂度关键，直接进行删除操作的复杂度一定是比递归进行`diff`比较难度低。

`diff`算法的目的是为了减少多次频繁大规模的`dom`操作(在元素值得比较的是时候发挥作用)，但是显然这一次不需要`diff`进行避免。

5. **Q&A5 -**`diff`算法以及`vnode`意义

在上面 **Q&A**中提到了触发生成`new vnode`方式，数据变动触发生成`new vnode`。`old vnode`以及`new vnode`进行`diff`算法比较，之后才会进行到真实`dom`节点的数据更新。**所以vnode->dom这一步被`diff`算法劫持了**

## 链接

* [diff算法分析](https://github.com/aooy/blog/issues/2) / 或许是主要参考文章
