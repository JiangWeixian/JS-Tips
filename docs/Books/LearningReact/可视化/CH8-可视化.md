# 可视化
> svg or canvas

## SVG or Canvas

前者更优秀,后者兼容性更好.

越来越多使用`svg`, 因为低端版本浏览器在被淘汰.

## 给出了一点建议

1. 尽量不要使用原生dom创建可视化表格 - 应该使用的是 **vdom** 的方式.
2. 第三方框架也有`vdom`的实现方式

## 如何传递多样的`Props`

在使用第三方框架的时候，都会看到向组件传递`Props`．可以是组件, 可以是函数(未执行那种, 执行之后是组件)以及数据.

**其实组件内部对三种类型进行了判断, 不同类型的属性传递进来就是渲染不同的组件**

1. 组件 - 可能是`cloneelement`, 然后传递数据
2. 函数 - 传递`props`然后渲染
3. 数据 - 传递数据, 就是 **渲染默认组件**
