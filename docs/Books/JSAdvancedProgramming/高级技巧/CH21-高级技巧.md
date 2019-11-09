# 高级技巧
> 主要线程和事件队列，哪个好好看好好学

<!-- TOC -->

- [高级技巧](#高级技巧)
  - [类型检测](#类型检测)
  - [安全的构造函数](#安全的构造函数)
  - [及时的`return`](#及时的return)
  - [函数绑定](#函数绑定)
  - [冻结对象](#冻结对象)
  - [主线程和事件队列](#主线程和事件队列)
  - [元素拖拽](#元素拖拽)
  - [自定义事件](#自定义事件)

<!-- /TOC -->

## 类型检测

指的是原生类型检查。

一般`Object.prototype.toString.call(obj)`是完全可用的方法。

因为`typeof`只会返回`Funtion object number undefine string boolean`这几个类型

而`instanceof`，`Array`可以又是`Array`的实例，也可是`Object`。一般用来检查自己创建的对象。

## 安全的构造函数

在之前[构造对象的章节](https://github.com/JiangWeixian/JS-Books/tree/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH6-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1)中

```JavaScript
function Person () {
  if (this instanceof Person) {
    this.name = 1
    this.age = 29
  } else {
    return new Person()
  }
}
Person()
```

由于`this`的比较晚绑定，所以此时`this`指向了`windows`，当通过`new`创建的时候又不一样。污染了全局作用域。

所以可以判断是否是通过`new`关键字创建。


## 及时的`return`

及时中断函数，或者返回一个`function`

## 函数绑定

1. 事件回掉函数是一个 **待执行的函数**，所以可以通过`bind`改变指向(如果其中有`this`)。当以下情况：
  
  ```JavaScript
  var handler = {
    click: function () {
      console.log(this)
    }
  }
  btn.addEventLisnter('click', handler.click)
  ```

  类似用一个变量存储`=handler.click`，这个`this`是指向的`btn or window`

2. 自定义`bind` - 这是懒惰执行的函数，需要再一次调用。想要自定义关键在于`return function(缓慢执行) and call(改变指向)`
  
  ```JavaScript
  function myBind(fn, context) {
    return function () {
      args = Array.prototype.splice.call(aruguments, 1)
      return fn.apply(context, args)
    }
  }
  ```

## 冻结对象

`seal or frozen`属于`object`内建函数。

## 主线程和事件队列

**注意注意！！！**

事件队列永远在 **主线程执行之后**才可以执行。可能存在情况是，**如果主线程执行了300ms，而我设置了一个250ms后执行的timeout，那么这个timeout函数并不会在250ms之后执行，而是在主线程执行完毕之后，也就是说，这个timeout函数变为了延迟300ms。**哪一些可以归结为事件队列里面的：

1. 回调函数
2. settimeout
3. promise

其他都是在主线程中代码。而且主线程中的代码是 **阻塞执行的**，也就是和书写顺序有关。

而回调函数需要特别特别注意，**它是事件队列里面的。所以说当它被触发的时候，其实是添加到了事件队列中。**

以点击函数举例来说，

1. 如果主线程有一个执行很久的代码。
2. 这个是时候触发了点击，添加到事件队列 **最后**
3. 触发事件的处理的函数等待执行主线程执行后执行

就像是这段代码

```JavaScript
setTimeout(function() { 
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {   
  console.log('promise1');
}).then(function() { 
  console.log('promise2');
});
function wait() {
  let cur = Date.now() + 10000
  while (Date.now() < cur) {}
  console.log('waiting')
}
document.onclick = function () {
  console.log('click')
}
wait()
```
结果为

```bash
waiting
promise1
promise2
click*7 // 点击了7下
setTimeout
```

以上在等待10s之后出来的，期间一直点击都不会发生任何东西

1. 说明了回调优先级别是第二。

而事件队列函数之间的优先级见[链接](https://github.com/JiangWeixian/JS-Books/tree/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH6-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1)，截取其中代码：

```JavaScript
console.log('script start');

setTimeout(function() { 
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {   
  console.log('promise1');
}).then(function() { 
  console.log('promise2');
});
  
console.log('script end');
```

console.log是主线程，而`promise`和`setimeout`是事件队列，可以发现`promise`优先级比较高。

## 元素拖拽

倒不是说这个方法多么难以实现。

就是这个封装在 **同一个函数内部**的想法是值得学习的。

## 自定义事件

用到的就是发布订阅的方法。