# Ant Design

:::tips
使用`antd`组件需要想的是，什么组件合适？也就是说你需要思考的模式要切合`antd`设计思想。
:::

## 踩坑 - Modal.method
> modal中最重要，且处于变化状态的`visible`.

`method`方法相比较`modal`组件的优势在于。`visible`需要外部控制的时候，`method`方式不需要写入`store`，可以通过函数触发的方式。而`modal`组件则需要写入`store`.

**关键!**

在我们最初创建`react app`的时候，通过通过`provider`给`id=app`的元素注入了`store`.

在每个组件创建的过程中，注入`context`以便拿到这个`store`。

问题就在`modal.method`并不是在`id=app`的元素挂载元素。但是创建的`modal`无法获取到`redux`。

> **modal使用了`rc-dialog`这个库。**
