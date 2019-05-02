# React - data
> 响应式数据理解；`state`；`computed`

## 什么是响应式的数据

并不是指每次都会变化的数据。而是指的是数据的变化会引起`dom`更新（或者两者互相的作用）。

以及被`dom`引用的数据才是响应式的数据。

## Vs Vue
> 暂时不考虑来自`model`的数据。

在`vue`组件中中存在两种数据，分别是`data and computed`。

（或许有更深层次的坑，但是暂且认为这两个数据是响应式）

**那么在react?**

类比只有和`data`相类似作用的只有`state`。也就是说没有`computed`数据。**那么其实也有比较`hack`的做法**，就是从`state`数据中计算得到另外一部分数据。也就是类比`computed`数据。从直观上理解是可行的。

**但是这样的问题在哪？** 有两种情况：

1. 一种是从`state`计算得到的数据被没有进一步的被`dom`使用！

    > 这可能导致 **数据滞后**。也就是说当存在`props and nextProps`的时候，`nextProps`传入且更新的时候。那么`computed`的数据可能来自于`props`。而不是随着`props`更新而再次计算。

2. 第二种情况是`state`计算得到的数据被`dom`使用了。这种情况下才是符合`vue`中`computed`的数据。

**注意:** 以上`react`中被`dom`使用，指的是在`render`方法中被调用。