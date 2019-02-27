# React - 组件性能
> React.component & functional-component & React.purecomonent

[[toc]]

## 几种组件方式的特点

1. Component - 带有`state props`

    > 一般来说任何形式的`state or props`变化都会触发`re-render`。**无论前后两次的`state or props`是否有变化。**

2. PureComponent - 带有`state and props`
    
    > 会对前后两次的`state or props`进行简单的比较。如果`state or props`是层级较为复杂的结构的话，比较可能不太有效。对于`Component`对于前后两次没有变化的`state or props`，做了 **no re-render**的优化。

3. function-component - 只有`props`

    > 没有`state`（虽然现在新的API可以让他使用`state`，这里不做讨论）。自然没有`state`变化引起的`re-render`

    **相较于其他两种有没有性能上的优势？**

    :thinking: ... 可以说没有！带来的仅仅知识书写上面的优势。

    ::: warning
    这是个容易的误解。`props`的前后变化，依旧会触发`functional-component`的前后更新。
    :::

## 优化方式

:::tip
组件优化方式不止以下举例优化方法。
:::

### 通过`shouldcomponentupdate`

这是`PureComponent`默认添加的钩子函数，通过该函数返回值判断是否进行`re-render`。

所以可以通过给`Component`手动添加`shouldcomponentupdate`来进行组件的优化。

**如何优化`functional-component`?**

现在可以使用`rect.memo`! 使用方式如下:

```js{6}
const Component = ({ value = 5 }) => {
  return (
    <div>{ value }</div>
  )
}
export defalt React.memo(Component)
```

那么如果前后`props`发生了改变，但是 **前后数值没有变化的话** 是不会触发更新的! 具体还是看`React`文档。

### 合理使用`state`

::: warning
使用 shouldcomponentupdate 进行优化个人认为是最后的优化方式。
:::

但是最好在书写的时候合理使用`state`。

* 尽量减少`state`数量，能从一个`state`生成另外一个`state`。那么就不需要存储两个。
* 不需要从`props`保存另外一份在`state`
* 不在组件中使用的`value`就不需要保存在`state`中
