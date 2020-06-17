# JavaScript中的同步异步

- [JavaScript中的同步异步](#javascript中的同步异步)
  - [前置知识](#前置知识)
    - [JavaScript与同步异步定义](#javascript与同步异步定义)
    - [同步异步定义](#同步异步定义)
  - [什么书写方式是异步?](#什么书写方式是异步)
    - [回调的异步函数](#回调的异步函数)
  - [实现异步](#实现异步)
  - [链接](#链接)

## 前置知识

### JavaScript与同步异步定义

`JavaScript`是单线程的。

但是根据[JavaScript-事件队列](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS-Promise%26EventLoop%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E9%98%9F%E5%88%97.md)理解，为了效率考虑，在主线程之外有一个额外线程来**挂起那些回调、`promise`和延迟(settimeout)执行。**

### 同步异步定义

[同步异步概念解析](https://juejin.im/entry/58ae4636b123db0052b1caf8)提到。

- 同步：在发出一个同步调用时，在没有得到结果之前，该调用就不返回。  
- 异步：在发出一个异步调用后，调用者不会立刻得到结果，该调用就返回了。

也就是说：

* 同步会按照代码书写顺序执行
* 异步则不是，**回调函数就是明显的异步函数**.

## 什么书写方式是异步?

以`JavaScript`举例，第一事件想到**回调函数以及类似的还有`promise`**。

为什么 **回调函数就是异步的？**

因为同步函数如下：

```JavaScript
let n = func()
next()
```

上面两个代码是同步的。也就是**代码之间存在先后顺序。**

存在一种情况，`delay`执行很长导致后面执行代码被阻塞而无法执行。就像是以下代码：

> **💡 NOTE**  
此处使用`async`模拟一个执行很久的同步函数

```JavaScript
async function delay () {
  // 运行10s
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 10000)
  })
}
let i = await delay()
console.log(i)
```

* **i**要很久才会打印出来。
* 假设`delay`和`console.log(i)`是不同逻辑中的函数，那么就没有必要因为`delay`来延迟后面的函数(指的是`console.log(i)`之后的函数)。

**回调函数**是常见的做法，来规避这个行为。

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

可以发现`console.log('这是之后的代码')`先执行，然后才是`console.log(2)`。

### 回调的异步函数

并不是所有作为参数传递的函数行为表现都是类似`click`的回调函数那样工作，这里的回调应该是异步的回调函数。

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

```
func
另一个函数
callback
```

关键在于`func`内部的`settimeout`而且还设置为`0`。结合[JS-事件队列理解](/docs/Grammar/JS-Promise-EventLoop函数执行队列.md)理解，即`settimeout`会挂载到等待队列中。这就是 **回调函数的异步形式。关键在于这个`settimeout`**而不能简单理解 **函数传参数就是异步。**如下：

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

## 实现异步

* 回调 - 之前已经说明了。
* 监听(发布订阅) - 我先添加`key=xx event`的回调函数，等到`key=xx event`事件发生之后，**手动触发**这个回调函数。
  * 其中添加`key=xx event`就是订阅的过程。
  * 等到`key=xx event`事件发生之后，**手动**这个回调函数。这个就是发布的过程。
  * [JavaScript设计模式-发布订阅](/docs/Books/JSDesgin-Patterns/设计模式/发布订阅模式.md)
* `Promise`


## 链接

结合[JS-事件队列理解](/docs/Grammar/JS-Promise%26EventLoop%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E9%98%9F%E5%88%97.md)

* [阮一峰异步编程](http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html)
* [同步异步概念解析](https://juejin.im/entry/58ae4636b123db0052b1caf8)