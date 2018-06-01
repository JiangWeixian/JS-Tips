# 自定义事件
> JS 观察者模式(也是发布订阅模式) 自定义事件

<!-- TOC -->

- [自定义事件](#自定义事件)
    - [什么是自定义事件](#什么是自定义事件)
    - [什么是观察者模式](#什么是观察者模式)
    - [参考原生事件触发](#参考原生事件触发)

<!-- /TOC -->

## 什么是自定义事件

类如在原生`JS`的`DOM`事件, 可以通过`addEventlistenr`添加事件, 例如添加`click`事件.

但是如果我们想要一个`message`事件(自定义,显然原生JS是做不到的).

模拟`JS`的`DOM`事件方式, 我们能够实现自定义事件绑定.

## 什么是观察者模式

在`vue`中第一次接触到这个概念.

1. 我们有一堆数据,很多组件需要他. 将需要它的组件放在一个数组内.(订阅过程)
2. 当数据更新的时候, 通知所有需要数据的组件(发布过程)
3. 通知之后, 至于干什么可能是订阅组件自发的行为

## 参考原生事件触发

```JavaScript
target.addEventListener('click', hander)
// 中间是触发过程
target.removeEventListener('click',hander)
```

流程可以总结如下:

1. 添加事件
2. 触发事件
3. 移除事件

首先, 要明确触发事件, 原生DOM操作可以实现. 自定义事件却无法实现.

此时, 自定义事件需要什么我们已经知道了.

1. `on` - 添加事件, 接受事件类型以及函数
2. `emit` - 触发事件, 这个需要我们自己写. 因为没有DOM事件支持
3. `remove` - 移除事件, 接受事件类型, 以及函数两个参数

```javascript
function target () {
    handlers: {} // 事件对象, 键值对形式. 键是事件类型, 值是函数. 相当于在target上对某事件类型添加了处理函数    
}
```

先是添加事件, 原生`addEventLinstener`特点:

1. 可以多次添加, 且不会覆盖之前的函数
2. 接受两个参数

```javascript
function _onHandler (payload) {
    console.log('this is a handler')
}

target.prototype.on = function (type, handler) {
    if (Object.prototype.toString.call(this.handlers[type]) === "[object Undefined]") {
        this.handlers[type] = []
    }
    if (Object.prototype.toString.call(handler)=== "[object Function]") {
        this.handlers[type].push(handler)        
    }
}
```

其次, 触发事件


```javascript
target.prototype.emit = function (type, payload) {
    let eventHandlers
    if (Object.prototype.toString.call(this.handlers[type]) === "[object Array]" && this.handlers[type].length > 0) {
        eventHandlers = this.this.handlers[type]
        eventHandlers.forEach(function (item) {
            item(payload)
        })
    }
}
```

**这里可以解释为什么和订阅模式(或者观察者模式)相关**, 因为`handlers[type]`内部函数列表就相当于是订阅人员. 一旦触发就要调用里面的函数.

最后移除事件, 接受两个参数

1. 第一个参数实现传递事件类型
2. 第二个参数, 移除绑定在这个`target`上改事件的哪一个函数

```javascript
target.prototype.remove = function (type, handler) {
    if (Object.prototype.toString.call(this.handlers[type]) === "[object Array]" && this.handlers[type].length > 0) {
        let index = eventHandlers.findIndex(function (item) {
            return item === handler
        })
        eventHandlers.splice(index, 1)
    }
}
```