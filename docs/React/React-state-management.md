---
tag: state-management
tag1: redux
---

# State-Mangement
> 状态管理是一门艺术。

::: tip
文中提到需要用到`redux`的地方，默认采用`rematch`方式创建。
:::

- [State-Mangement](#state-mangement)
  - [先说结论](#%e5%85%88%e8%af%b4%e7%bb%93%e8%ae%ba)
  - [组件](#%e7%bb%84%e4%bb%b6)
  - [页面](#%e9%a1%b5%e9%9d%a2)
  - [很多很多页面](#%e5%be%88%e5%a4%9a%e5%be%88%e5%a4%9a%e9%a1%b5%e9%9d%a2)
  - [framework](#framework)
    - [redux](#redux)
      - [redux-observable和redux](#redux-observable%e5%92%8credux)

在`React`进行状态管理方式很多。像是`hooks redux rxjs`都是状态管理。先说`React`进行状态管理的痛点，从项目比较简单开始说起。

## 先说结论

- 组件 - `fc + hooks`
- 页面 - `rematch or dva`
- 页面间通信 - `redux-observable`

## 组件
> 组件是独立的。当你不考虑它和外界进行数据交互的时候其实这一切都很简单。

- `function-component`可以使用`hooks`
- `class-components`可以使用`state`。（在`class`中使用hooks可以看看[react-class-hooks](https://github.com/salvoravida/react-class-hooks/tree/master/src)。不过小心使用，它和`react`版本太耦合了。谨慎使用）

目前推荐的方式是`fc + hooks`的方式。因为`hooks`是独立的，就像是`redux`和`react`的关系一样。

- `search-hooks + seachbox`可以实现`searchbox`
- `search-list + searchlist`可以实现`searchlist`

这就是它的优势。

## 页面
> 单个页面。这种情况下我们需要实现的是将数据传给组件，组件将数据传出来。

通常我们都会让组件支持`callback`方法。因为数据传递往往和你的操作有关：

- 点击 - 传递数据
- 移动 - 传递数据

在`callback`模式下实时很少。（如果按照`redux`逻辑，实时的保存数据，在外界需要用到数据的时候，再从里面获取。）

此时痛点在于，但页面嵌套很深。通过`props + callback`的方式就会很难受。这个时候我们就会选择`context`，将一些需要的数据放在`context`中。此时：

- 组件支持`props+callback`
- `context`解决了嵌套很深

这个时候新的问题出现了。对于一个有自身状态维护的组件，如果要接受`context`的数据或者说`callback`。**一般会选择新建一个组件进行包裹，这是对原始组件破坏最小的方式了。** 此时`redux`也只是解决了`context`的数据全局问题，让组件可以方便的获取和保存数据。

1. 创建一个智能组件（有自身状态，支持`callback`）
2. 当需要用到`redux`的时候，新建一个组件，将智能组件和`redux`链接

## 很多很多页面
> 以上的工作模式，当页面少的时候一切都还可以接受。一旦页面变得很多，会在很多页面进行一些重复性的工作。

重复性指的是假设我们有一个智能组件`[a1, a2, ..., an]`。组合形成了一个另外的组件`b`。

- 在页面1的时候，我们将`b`的数据保存到了页面1的`redux model`上面
- 在页面2的时候，我们又需要了`b`，此时我们进行了重复的工作，将数据保存了一份在页面2的`redux model`上面

这个时候我们可能会采用下面这种解决方案

1. `b`是公用的。所以它的`redux-model`也是公用的。所以不应该和页面相关，应该独立在页面之外。(**如果** `b`有可能本身就是一个页面里面进行管理，页面2却需要用到`b`)。
2. 采用`redux-saga or redux-observable`框架。我们可以在页面之外（甚至在`redux-model`之外）监听一些`actions`（即使这些`actions`是异步的）。例如提交表单，我们可以监听表单提交之后的返回结果（保存返回结果的那个`action`）。**这种方案对`redux-model`** 的破坏是最小的，上文提到了为了不破坏组件（我们会采用新建一个组件的方式让智能组件拿到数据）。`redux-saga or redux-observable`框架可以在不破坏原有`redux-model`逻辑下，将数据传递出来。

梳理一下逻辑，我们此时有页面1和页面b（也是模块b）。两个都是`connect-redux`

1. 页面b（也是模块b) -> (进行一些操作之后) -> save data to model of 页面b（也是模块b)
2. 页面1此时也是需要用到页面b（也是模块b）-> 在页面b（也是模块b）进行一切操作之后 —> save data to model of 页面b（也是模块b) -> 监听到之后同步save data to model of 页面1
  
    > 题外话：个人不喜欢在一个页面引入另外一个页面，在以上由于页面b以及和`redux`链接了。在大多数情况下肯定是一个页面了，除非组件本身和`redux connected`

**注意：** 如果我们使用`redux-observable`来进行第二步。此时我们需要区分 save data to model of 页面b（也是模块b) 是在`页面1的模块b`发起的还是在另外的页面。也为在它的工作模式下，**save data to model of 页面b（也是模块b)** 会保存在多个页面。**应该可以使用`takeUtil`** 进行[解决](https://redux-observable.js.org/docs/recipes/Cancellation.html)。

**Q&A**

- Q1 - 这里为什么会有保存另外一份数据的行为？
- A1 - 这个和使用的`ui`框架有关，但你使用智能组件（没有和`redux`链接的组件）。组件需要知道状态进行ui展示。所以我们将数据保存了另外一份进行额外的ui。

## framework
> 状态管理框架

### redux
> redux是个好东西

但是也有很多不太方便使用地方。

1. payload.type需要时唯一的，也就是需要`namespace`。比如页面1,2都有list部分。我们会建立一个`list-model`在不同页面复用。在`list-model`内部我们就需要做到不同页面发出的`action.type`是不同的。甚至在同一个页面有两个list。我们也需要让这两个list的`list-model`发出的`action.type`不同。
2. 默认是不支持`async`

所以会有很多`redux-framework`去支持这两个问题`rematch or dva`。最终实现的效果都是大同小异的。

为什么没有替代`react-redux`的方案出现？

1. react在hooks中支持了`reducer`
2. context是react全局的状态管理

`react-redux`依旧是默认的，以及代码最少的方案。

#### redux-observable和redux
> 完美的组合

就像是`redux-observable`独立于`redux`一样。我们会思考在页面和组件的关系中，有没有一种不破坏性的框架存在，比如state-observable这样的存在，这个框架是我瞎想的。需要做到

1. 不破坏原有`react hooks`使用方式 - 也就是没有`create model, then use it`这种步骤。直接使用。
2. 全局的

[umi/hox]()有点在在做类似的事情。个人感觉破坏还是有点明显，逻辑依旧是`create model, then use it`。需要更好的。
