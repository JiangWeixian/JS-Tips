# react-redux
> flux on react = react-redux

[[toc]]

## 数据流动

1. dom触发，`dispatch action`
2. 被`redcuer`捕获
3. `reducer`修改`store`
4. 组件获取`store`数据，修改本身

## API

* subscribe - 监听`store`的变化。
  > 没看这本书之前，我的确不知道还有这个东西

## middlewares

中间件。数据流动的流程图不能满足需求。

我们需要的是通过监听`actions`，然后修改`actions`。（这就是中间件的原理）

**对文中多个中间件的串连如何起作用存有疑惑...，主要是对其现有顺序有点疑惑。**

### 格式

中间件格式比较固定。为

```js
const middlewares = store => next => action
```

运用了`currying`。分别代表当前`store`，下一个中间件（当前中间件处理完成之后，交给下一个中间件），以及`dispatch`的`action`。

**这里需要注意store以及next**

因为交付给下一步进行处理，可以通过`next`也可以通过`store.dispatch`。区别在于如果`next`是进入了下一个中间件，而`store.dispatch`而是会重新发起`action`，可能让中间件的串联重新开始。**没有好坏对错，只是有这样的需求。**

### 异步

如果不通过中间件。

异步的写法就是在触发一个异步的`action`。然后在异步完成之后再一次触发另外一个`action`。

### 轮训

提到了如何实现轮训。

## Router

主要是要保证`view`和`url`同步。

将组件理解为函数就可以明白`router`的原理。路由的变化然后我们渲染响应的组件。

## 文件夹结构

如果和解决引入`redux`之后和原本的文件夹结构。

不太喜欢文中的处理方式。只适合部分情况。

还是喜欢放在一个store文件夹进行管理。
