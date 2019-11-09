# 高阶Redux

## 高阶含义

等同于高阶组件的高阶 = 高阶组件是在创造一种特定类型的组件类型。

那么高阶Redux其实就是在创造或者控制一种特定类型的`Redux`。

## Redux和表单以及列表

Redux与这两个结合主要是这两个冗余代码比较多。节约代码的方式分别是

1. redux
2. hoc

文中只是举例了redux的方式

### Redux与表单

表单是比较特殊的类型。因为会涉及到交互操作，因为频繁的改变数据，要把改变的数据传递出来。

推荐redux是因为可以把重复的代码提取出来。

### 列表最佳实践

对表格来说也是这样的。

1. 最好支持的四个操作 - CRUD
  > 增删改查，如果结合了redux。那么这四个操作就可以独立到redux里面去了。

## **性能优化**

个人认为是比较重要的一部分。

**reselect** 避免重复计算

含义等价于`vuex-getter`

store里面的数据是存储了一份，但是如果存储的数据其中一部分变化了。另外一部分没有变化。

同时，我们需要对store里面的原始数据进行`transform`。

但是如果知识一部分更新，另外一部分没有更新。我们`transform`恰好有事这部分没有更新的数据。可能会导致重新的`transform`。

这也是优化点。如果传递的数据不变，就不需要重新计算。

**同时原始的redux也是没有这个接口的，需要使用第三方框架。**

**Immutable**

如果我们`...`解构的进行`redux`操作的话。其实也就是一种`Immutable`的数据操作。

> 虽然我还不知道为什么推荐这种`Immutable`方式。但是我想和批量操作有关。因为如果一个个去修改数据。可能会触发多次更新，`...`是目前比较优雅的方式。

**Batch actions**

批量触发actions的优化。的确是有这样的需求。

之所以能够发生这样的优化,应该就是因为`batch actions`不同于多个`action`同时触发. 

1. 多个`action`同时触发, 会多次修改`reduce`, 每一次都会同步到`state`
2. 如果`batch action`, 多次修改之后, 再一同同步到`state`

**原理!**(其实很简单, 观察[redux-batched-actions](https://github.com/tshelburne/redux-batched-actions/blob/master/src/index.js))

观察`batch-redux`原理.

```js

export const BATCH = 'BATCHING_REDUCER.BATCH';

export function batchActions(actions, type = BATCH) {
	return {type, meta: { batch: true }, payload: actions}
}

export function enableBatching(reduce) {
	return function batchingReducer(state, action) {
		if (action && action.meta && action.meta.batch) {
			return action.payload.reduce(batchingReducer, state);
		}
		return reduce(state, action);
	}
}
```

* batchactions - 是用来触发`actions`, 参数就是`actions`数组
* enablebatching - 很重要, 也很简单

    > 一般来说`reducer`是`enablebatching`内部的那个函数. 接受`state action`

    但是这里有一个`reduce`函数进行包裹 目的是为了什么?

    也就是说传统的`reducer`都需要通过`enablebatching`的函数进行包裹, **这很关键.**
    
    > **那么, 在不满足`if`条件的时候, 这其实就是一个普通的`reducer`函数**

    > 如果是`batch actions`触发的, 那么就是执行的是`if`里面的语句. 那么根据`array.reduce`函数的特点, 会在数组执行完毕之后, 统一返回执行的结果. 那么就不会发生 **传递一次action, 更新一次state** 而是多次`action` 才会更新一次`state`.

    **记住`enablebatching`传递的是`reduce`**, 是高阶`reducer`的一种, 对`reduce`进行提高.
    

## 解读`redux`以及`react-redux`

1. `initstate`以及`reducer`

`initstate`决定了`state`拥有怎样的数据, `reducer`通过`action`来更新数据(是一个数据更新的集合), `store`的名字是通过`reducer`决定的.

> `reducer`决定`store`拥有怎样的数据这种说法是不对的. 而是`reducer`返回的结果决定了`store`拥有怎样的数据才对

`createstore`通过标题两者构造`store`

2. 数据监听

其实是`redux-subscribe`的作用, 而`connect`就是帮我们做了这件事情.

同时如果`state`不传递`mapstate2props`的话, 其实组件是不会`subsribe store`的数据的.

3. dispatch

为了避免陷入死循环. 其实在`dispatch action`的时候, 会进行判断当前是不是进行一次`dispatch action`(明显的单线程判断)

此时在这个阶段就会发生`store`根据`action`来更新数据.

更新完成之后, 在`connect`阶段组件作为默认的订阅者就会触发更新.
