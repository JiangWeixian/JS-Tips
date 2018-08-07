# Patterns - 发布订阅/数据劫持
> 数据劫持

## 前置知识 - 回顾发布订阅

发布订阅需要发布者、以及订阅者。

在[Patterns-(观察者)发布订阅模式-自定义事件]()中，通过`on`订阅事件，通过`emit`触发事件。

同样`DOM`事件是典型的发布订阅模式，通过`addEventlistner`订阅事件，通过 **交互操作触发事件。**

**永远逃不过这个模式！**

## 前置知识 - Object.defineProperty

[MDN - Object.defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

* 参数1 - {}对象
* 参数2 - {}其中一个属性
* 参数3

    ![设置属性](https://raw.githubusercontent.com/JiangWeixian/JS-Tips/master/Patterns/img/%E8%AE%BE%E7%BD%AE%E5%B1%9E%E6%80%A7.PNG)

    其中`get set`都是`function`

## 数据劫持 - 基本框架

> 数据劫持就是重写了对象的`get and set`接口

类比`on and emit`，`get and set`接口就像是发布订阅，`get`是订阅，`set`是发布。

```JavaScript
// 大致想法
Object.defineProperty(obj, key, {
  get: function () {
    // on
  },
  set: function () {
    // emit
  }
})

//当我们以下设置的时候就会触发set，从而发布内容。
obj.key = somevalue
```