# React - router

[[toc]]

## 配置方式

:::warning
`config`的做法灵活的地方（或者说是不太开箱即用的特性）在于你需要自己去解析`route config`。并没有特别开箱即用的感觉。
:::

[参考链接](https://reacttraining.com/react-router/web/example/route-config)

这种方式是比较接近`vue-router`的书写方式的，可以参考学习。

## Component vs Render

在`<route />`组件上，支持`components`以及`render`两个属性。

**为什么需要设置好两个属性？有什么区别？**

先看结论。首先两个在功能没有什么区别，并没有什么功能上的缺失。**不过`render`可能需要手动传递一遍`props`。**

* 如果使用的是`function component` - 那么最好使用`render`
* 如果使用的是`class component` - 那么两个就没什么区别

**如果使用`component`渲染`function component`的话。** (或者直接看以下[比较纤细纤细的解释](https://www.imooc.com/article/263948)) 起因为：

1. `function component`通过`react.createElement`的方式创建的组件没有`type`。
2. 如果路由没有变化，只是传递给组件的`props`在变化

就会发现组件频繁的被`mount and unmout`（按道理来说，应该只有第一次发生`mount`）之后的钩子函数应该是`recevieprops`的`update`。

频繁`mount`一定是不对。

而由于`function component`没有`type`，通过`type or key`比较的时候认为不同的`route component`。所以就会出现不合理的情况。

### Refs

* [比较纤细纤细的解释](https://www.imooc.com/article/263948)
* [官方解释](https://www.notion.so/umi-router-c706a687f53d4fbbad04a76d127e815f#af1cc997f1154ea698142a5c53de1cda)

## KeepAlive

目前为止，官方其实并没有这样的支持。

也就是说进入下一个路由会导致上一个路由组件的`unmount`。

**那么KeepAlive原理是什么？** 可以参考[facebook-react官方解释](https://github.com/facebook/react/issues/12039)

本质上就是当将所有需要`keepalive`的组件全部被一个父类组件包括。这些`keepalive`的组件`path`全部导流到该父类组件。

然后由父类组件控制`display: block or hidden`。这样就没有`umount`的问题。

### Refs

如果懒得写。

可以用别人写好的[live-router](https://github.com/fi3ework/react-live-route/blob/master/docs/README-zh.md)
