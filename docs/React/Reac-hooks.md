# React-hooks
> 使用频率比较低；但是的确是个好东西

## Pre Commit

是和`memo`同阶段推出的东西。同样是是为了优化`function-component`。**作用等价于`purecomponent`**。

因为都知道`function-component`没有`state`。所以避免了`state`变化（无论前后两次变化与否）的组件更新。

在`class-component`中`hoc`是一个比较很好用`tips`。可以创造很多类似功能的组件。

所以，某种意义上：

1. **我们可以等价的认为`hooks`他是和`react-hoc`同样的目的而存在的。** 创造相同类型的`function-component`组件。
2. **是为了给`function-component`**

## Why
> 为什么给`function-component`增加`state`功能。

单独从疑惑上来说，属于没有没关系。有更好的功能。**毕竟想要`state`完全可以使用`class-component`**

对于`function-component`来说

1. 可以有`hooks`
2. 也可以没有`hooks`

意味着这部分是独立`function-component`存在。`function-component`是`ui`，而`hooks`意味着逻辑。

**更重要的是，我们可以两部分创造`hoc`：** 

1. 可以通过`function-compoennt`创造`ui`层面上的`hoc`
2. 通过`hooks`创造逻辑层面的`hoc`。

然后通过两者的组合。使得`function-component`自我更新可以依赖`hooks`存在。

**注意：hooks 并不是`props`。而是`functions`**

## Useage
> todo...

先看官方的教程吧。