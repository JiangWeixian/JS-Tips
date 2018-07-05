# 1. JavaScript中的同步异步

<!-- TOC -->

- [1. JavaScript中的同步异步](#1-javascript中的同步异步)
  - [1.1. 前置知识 - JavaScript与同步异步定义](#11-前置知识---javascript与同步异步定义)
  - [1.2. 前置知识 - 同步异步定义](#12-前置知识---同步异步定义)
  - [1.3. 什么是异步?](#13-什么是异步)
    - [1.3.1. 什么是回调的异步函数](#131-什么是回调的异步函数)
  - [1.4. 实现异步](#14-实现异步)
  - [1.5. 链接](#15-链接)

<!-- /TOC -->

## 1.1. 前置知识 - JavaScript与同步异步定义

`JavaScript`是单线程的。

但是根据[JavaScript-事件队列](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-Promise%26EventLoop%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E9%98%9F%E5%88%97.md)理解，为了效率考虑，在主线程之外有一个额外线程来**挂起那些回调、`promise`和延迟(settimeout)执行。**

## 1.2. 前置知识 - 同步异步定义

[同步异步概念解析](https://juejin.im/entry/58ae4636b123db0052b1caf8)提到。

> 同步：在发出一个同步调用时，在没有得到结果之前，该调用就不返回。
  异步：在发出一个异步调用后，调用者不会立刻得到结果，该调用就返回了。

也就是说：

* 同步会按照代码书写顺序执行
* 异步则不是，**回调函数就是明显的异步函数**.

## 1.3. 什么是异步?

以`JavaScript`举例，第一事件想到**回调函数以及类似的还有`promise`**。

为什么 **回调函数就是异步的？**

因为同步函数如下：

```JavaScript
let n = func()
next()
```

如果执行速度够快，上面两个代码是同步的执行的。也就是**代码之间存在先后顺序。**

存在一种情况，`func`执行很长导致后面执行代码被阻塞而无法执行。就像是以下代码：

```JavaScript
function func () {
  // 运行很久
  return 1
}
let i = func()
console.log(i)
```

> 我没有办法用`setTimeout`来模拟运行很久之后再`return`的行为，因为`setTimeout`在`JavaScript`会挂起在任务队列中(不在主线程中)。

* **i**要很久才会打印出来。
* 假设`func`和`console.log(i)`是同一个逻辑中的函数，那么就没有必要因为`func`来延迟后面的函数(指的是`console.log(i)`之后的函数)。

因此可以使用 **回调函数**来规避：

```JavaScript
func(callback);
console.log('这是之后的代码')
function callback (value) {
  console.log(value)
}
function func (fn) {
  setTimeout(function () {
    fn(2)
  }, 5000)
}
```

> 这里我可以用`setTimeout`来模拟运行很久的状态

可以发现`console.log('这是之后的代码')`先执行，然后才是`console.log(2)`。

### 1.3.1. 什么是回调的异步函数

回调函数和异步的回调函数是两个东西。**任何函数名作为参数传递都可以认为是回调函数。**

```JavaScript
function callback() {
  console.log('callback')
}
function func (fn) {
  console.log('func')
  setTimeout(function () {
    fn()
  }, 0)
}
func(callback)
console.log('另一个函数')
```

输出结果为：

```bash
func
另一个函数
callback
```

关键在于`func`内部的`settimeout`而且还设置为`0`。结合[JS-主线程和函数执行队列]()理解，即`settimeout`会挂载到等待队列中。这就是 **回调函数的异步形式。关键在于这个`settimeout`**而不能简单理解 **函数传参数就是异步。**如下：

```JavaScript
function callback() {
  var now = Date.now()
  while (Date.now() < now + 2000) {}
  console.log('callback')
}
function func (fn) {
  console.log('func')
  // 去掉了settimeout
  fn()
}
func(callback)
console.log('另一个函数')
```

`func(callback)`阻塞了后面代码 **另一个函数**的执行。

```bash
func
// 直到两秒之后
callback
另一个函数
```

**如果转换为回调异步**

```JavaScript
function callback() {
  var now = Date.now()
  while (Date.now() < now + 2000) {}
  console.log('callback')
}
function func (fn) {
  console.log('func')
  setTimeout(function () {
    fn()
  }, 0)
}
func(callback)
console.log('另一个函数')
```

`func(callback)`阻塞了后面代码的执行。

```bash
func
另一个函数
// 直到两秒之后
callback
```

## 1.4. 实现异步

* 回调 - 之前已经说明了。
* 监听(发布订阅) - 我先添加`key=xx event`的回调函数，等到`key=xx event`事件发生之后，**手动触发**这个回调函数。
  * 其中添加`key=xx event`就是订阅的过程。
  * 等到`key=xx event`事件发生之后，**手动**这个回调函数。这个就是发布的过程。
  * 具体可见[自定义的发布订阅](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F-%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6.md)以及[JavaScript设计模式-发布订阅](https://github.com/JiangWeixian/JS-Books/blob/master/JS%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F(Desgin-Patterns)/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F.md)
* `Promise`


## 1.5. 链接

结合[JavaScript-事件队列理解](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-Promise%26EventLoop%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E9%98%9F%E5%88%97.md)

* [阮一峰异步编程](http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html)
* [同步异步概念解析](https://juejin.im/entry/58ae4636b123db0052b1caf8)