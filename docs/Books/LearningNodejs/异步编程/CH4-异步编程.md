# CH4 - 异步函数
> 指的就是JavaScript的那种函数风格

<!-- TOC -->

- [1. CH4 - 异步函数](#1-ch4---异步函数)
  - [1.1. 优缺点](#11-优缺点)
  - [1.2. 发布订阅模式](#12-发布订阅模式)
    - [1.2.1. 多个事件对应一个监听函数](#121-多个事件对应一个监听函数)
  - [1.3. Promise](#13-promise)
  - [1.4. 流程控制库](#14-流程控制库)
  - [1.5. Tips](#15-tips)

<!-- /TOC -->

## 1.1. 优缺点

异步优点很明显，效率很高。

**缺点！**

之前可能已经遇到过了，那就是嵌套函数过多，代码很难看，不容易阅读。

改进方案就是：发布订阅模式，以及`promise`

## 1.2. 发布订阅模式

在[app.js](https://github.com/JiangWeixian/JS-Books/tree/master/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E5%AD%A6%E4%B9%A0Nodejs/CH4-%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B)中比较了发布订阅和未使用发布订阅的情况。

**未使用发布订阅的时候**

对于两个`red`函数来说，首先是同步的。步骤如下：

1. 第一个`red`函数，设置`status=pending`。在运行到`fs.readFile`之后，发现后回调，所以函数进入异步阶段
2. 第一步进行异步之后(等待文件读取完毕进行执行)，但是第二个函数是主线程函数，所以 **文件回调是延后于第二个函数**。而第二个函数执行之后发现，`status=pending`。状态还没有改变。所以第二个函数那里的回调并不会执行

**发布订阅**

关于同步部分基本一致，但是`proxy.once('read', callback)`添加监听函数是在异步函数之前，所以第一个`red`以及第二个`red`都添加了 **监听函数**。

**但是**

在第一个`red`的文件读取回调中，`proxy`其实是有两个函数触发的。所以在第一个`red`函数中触发了两个回调，第二个`red`文件回调中，没有函数触发。因为`once`添加的监听函数是 **只能执行一次**。

在以上情况中，只有第一个文件被读取到了。

**属于一个事件对应多个监听函数**

### 1.2.1. 多个事件对应一个监听函数

文中使用`events.Emitter()`

需要引入计数器(on添加的回调函数)。**使用了闭包的概念。**

```JavaScript
var after = (times, callback) {
  var count = 0,
    results = {}
  return function (key, value) {
    // 保存数据
    results[key] = value
    count ++
    if (count === times) {
      callback(results)
    }
  }
}
```

触发(emit)一个事件，计数加1，当计数器达到了阈值，就触发回调。

## 1.3. Promise

里面提到的已经有了原生的实现。

## 1.4. 流程控制库

目前的原生实现可以参考`symbol.iterator`以及`async await`

其中提到了`.next()`函数实现的方式很有意思。如：

![next](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E5%AD%A6%E4%B9%A0Nodejs/CH4-%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B/img/next.PNG)

* `.handle` - 没有意外
* `.next` - 和`handle`是递归调用的过程

通过一个`index`来获取队列不同位置的执行函数，**index++**的`++`行为会让`index`公用一个`index`内存模块。

## 1.5. Tips

多并发的时候(Promise.all)，注意控制。