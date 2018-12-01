# React - advanced
> 高级应用；并与`vue`比较一部分

## 前言

用过`vue and react`，发现两个在互相学习。如果两个都用过的话，总是想要找到其中的共同点。

## Advanced
> [该Advance章节-链接](https://reactjs.org/docs/error-boundaries.html)

1. `ref`

`react`能通过下面的方式进行异步的`dom ref`处理是比较好用的。在`vue`

```js
<Component ref={ (ref) => { this.dom = ref } }>
  
</Component>
```

> **在`vue`里面则是通过`nexttick`钩子函数进行类似的步骤的。**


2. lazyload

> 最新版本的`react`也可以通过`() => import`的方式和`vue`实现组件的异步加载。

`react`提供`error boundaries`进行如果加载失败的处理。

或者你也可以通过第三方框架实现`reactable`进行处理。

3. fragements

无论是`react or vue`对于组件方式是：

1. 构成组件一定是有一个父类元素的，这一点只针对原生页面元素来说的

    > 但是如果想要一个组件创建的时候，没有`div`作为父类元素可以直接构成组件，可以用这个属性包裹。

4. HOC

> 高阶组件；个人理解还是为了解决数据源的问题

**疑惑：官方实现的方式，个人并不是很优雅... 为什么不通过组件包裹的方式呢？而且也不够组件化？**


