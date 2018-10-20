# React - slot
> 关于react 如何组合内容思考

<!-- TOC -->

- [React - slot](#react---slot)
  - [前言](#前言)
    - [**为什么？**](#为什么)
  - [In React](#in-react)
    - [组件化](#组件化)
    - [**符合网页逻辑**](#符合网页逻辑)

<!-- /TOC -->

## 前言
> 分析现有组合元素方式

`react`真的非常灵活，除了最多使用`class`方式，可以是`function`等方式。

至于组合组件，举例来说，加入现在有一个`card`的元素，基于这个单位你可能想要有`reviewcard`或者其他类型元素。

就是`component`以及`container`之间关系。

**就我的水平对于`component`以及`container`之间的理解：**

1. `component`应该更关系`ui`部分，以及无论数据格式

    > 就像是card 需要展示图片对应的字段是`img`，但是`img`在`container`中可能就会有其他类型的标识。例如是`thubnailimg`之类的标识。所以在使用`component`之前应该先进行映射。

2. `container`接受的是 **原始数据源以及逻辑操作（指的是类似`onclick`之类的）**

    > **container**组件组合方式应该是确定，如果不是这样的方式，个人认为应该是新建**或者有其他更好的方式**，见[组件化](#组件化)


**更进一步**

也就是说`container`**从极限角度来说**来说就不应关心`ui`。所有的的任何布局都可以通过在`component`部分完善。

### **为什么？**

> 为什么能够这么区分

结合[**符合网页逻辑**](#符合网页逻辑)里面提到的组件组合方式。

举例来说`component.card`，而`container.reviewcard`继承`component.card`

`container.reviewcard`的布局不应该脱离`compoent.card`，除非又有了另外一种卡片类型，代表另外一种布局。

**另外更重要的是：**

`container.reviewcard`内部包含的组件应该是可以确定的。`reviewcard`应该包含`avatar`，右上角的下拉，以及底部的操作按钮。

那么对`reviewcard`来说，操作就已经是固定的了。想要脱离这样的逻辑，就有可能是独立出`reviewcard`的容器。

## In React
> 在 react 中应该如何组合组件

首先我们要坚定几个原则

1. 组件化
2. slot
3. 符合网页逻辑

### 组件化
> 重点在于结合数据的方式

参考的方向是`vue`数据驱动，以及原生`dom`。

要分`compoent`以及`container`两种进行考虑：

1. `component`

    * `attr`传递原始数据，组件对应需要的数据
    * 如何给`component`传递子组件应该是通过类似[**符合网页逻辑**](#符合网页逻辑)包裹的方式或者是是`slot`的方式

2. `container`

    * `attr`传递原始数据，作为`component`作为数据源

      > 可以理解为在`component`外部包裹了一层数据，就是有`component.head`，就会有`container.reviewhead`，选择最轻松的包裹方式就可以了

    * 传递组件，按道理来说，组件应该是有一部分是写死的。

      > 以及有两种方案是可选的，一种是写死全部应该有的组件。而对应组件逻辑方式可以通过外部传递。

      > 另外一种方案是直接传递的是逻辑操作的组件

      **就目前来看，我好像更喜欢第二种方式**

      第二种方式的好处在于，在`container`组件内部可以不需要通过判断是否有外部数据传递，直接渲染**那部分传递的逻辑组件就可以了。**

### **符合网页逻辑**

> 和`slot`一起说

原生`dom`含有的标签应该是**原子类型**的数据。可以发现一些标签传递的数据是通过：

> 有以下两种方式

1. 通过`attr` - 传递数据以及传递组件
2. 通过包裹标签的方式 - 也就是`slot`的方式

下面两个文章有指导意义。

* [react-slot 方式](https://daveceddia.com/pluggable-slots-in-react-components/)
* [react-包裹方式](https://medium.com/@Dane_s/react-js-compound-components-a6e54b5c9992)

无论对于`component`以及`container`来说:

> 包裹的方式只能够**适合`one child`以及重复的`childlist`**

而对于`slot`的方式来说，适合多个需要内容分发的元素。`componen`在某些情况下是需要的。

而`container`是否需要`slot`支持。我觉得按照之前的逻辑，**传递给`container`的是业务数据，以及含有逻辑（指的是和 state）交互的`slot`**

而传递给`component`的数据应该是映射好的数据，以及`slot`，而对于`component`来说，`slot`或许更加重要。但是并不是必须的，就像是`list.item`，`item`是否需要再细分`slot`进行就没有那么必要。（个人认为）

对于`ui(原子部分来说)`，应该数据是更为重要的。
