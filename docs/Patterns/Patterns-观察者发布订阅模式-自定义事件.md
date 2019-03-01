# Patterns-观察者发布订阅模式-自定义事件
> JS 观察者模式(也是发布订阅模式) 自定义事件

<!-- TOC -->

- [Patterns-观察者发布订阅模式-自定义事件](#patterns-观察者发布订阅模式-自定义事件)
  - [什么是自定义事件](#什么是自定义事件)
  - [什么是观察者模式](#什么是观察者模式)
  - [自定义事件构造](#自定义事件构造)
  - [原生自定义事件](#原生自定义事件)
    - [传递数据](#传递数据)
    - [链接](#链接)

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

## 自定义事件构造

> 通过自己构造类来触发

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

## 原生自定义事件

> MDN上有一个[event](https://developer.mozilla.org/zh-CN/docs/Web/API/Event)和[customevent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)方法，可以设置自定义事件。算是官方版本的发布订阅模式，绑定在元素上面。

* 通过`new event`创建例子(或者是`customevent`，后者具有更高的扩展性)
* `addEventlistener`添加例子
* `dispatchEvent`触发例子

就像是下面这样：

```JavaScript
var event = new Event('build');

// Listen for the event.
elem.addEventListener('build', function (e) { ... }, false);

// Dispatch the event.
elem.dispatchEvent(event);
```

[MDN-官方例子](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Creating_and_triggering_events)

### 传递数据

> 个人理解

`customevent`可以在事件绑定的时候初始化数据，但是没有办法再触发事件的时候传递数据(也就是没有办法保证数据的实时更新)

测试了可能的传递数据方案：

1. 修改event属性不行(在已经新建的情况下)
2. 全局变量应该是可以的，更进一步的话就是设置一个全局的状态机，然后通过状态机里面的数据

### 链接

* [更多例子](https://juejin.im/entry/5ad070b56fb9a028db591d49)