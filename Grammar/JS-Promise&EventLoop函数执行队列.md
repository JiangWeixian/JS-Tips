# 1. JS-Promise&EventLoop函数执行队列
> 函数执行队列，会让你豁然开朗的

<!-- TOC -->

- [1. JS-Promise&EventLoop函数执行队列](#1-js-promiseeventloop函数执行队列)
  - [1.1. 前置知识 - 什么是回调，别以为你知道了](#11-前置知识---什么是回调别以为你知道了)
  - [1.2. 正文](#12-正文)
    - [1.2.1. 重要原则](#121-重要原则)
  - [1.3. 启发](#13-启发)

<!-- /TOC -->

## 1.1. 前置知识 - 什么是回调，别以为你知道了

[回调函数是什么](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%90%8C%E6%AD%A5%E5%BC%82%E6%AD%A5.md)

## 1.2. 正文

看以下[博客](https://blog.csdn.net/wky_csdn/article/details/77477146)总结得到的。

`JavaScript`代码执行是单线的，意味着只能执行之后，再来执行另外一段。

但是效率一定是低下的，虽然单线程是必然的操作的。所以`JavaScript`就有了任务队列，挂起那些等待执行的代码，把`CPU`复用起来。目前总结如下:

* 主线程 - 正在执行的代码，优先级别最高的
* 任务队列 - 等待执行的代码队列

那么什么代码是任务队列？

就是那些具有回调函数的代码，例如`settimeout&promise`（可能总结不准确）。

而任务队列又有优先级别，比如`Promise`优先级别是最高的。任务队列细分：

* `task`
* `mircotask` - `Promise`也就是属于这个队列

再来看一段代码，了解一下主线程和任务队列是如何影响的

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

代码执行结果为：

```JavaScript
script start
script end
promise1
promise2
setTimeout
```

可以发现主线程就是两个`console.log`。任务队列有`settimeout`和`promise`。

且在任务队列里面`promise`有比`settimeout`级别高。而[回调函数](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%90%8C%E6%AD%A5%E5%BC%82%E6%AD%A5.md)优先级比`settimeout`高，如下：

```JavaScript
function callback() {
  var now = Date.now()
  while (Date.now() < now + 2000) {}
  console.log('callback')
}
document.onclick = function () {
  console.log('回调')
}
setTimeout(function () {
  console.log('settimeout')
})
callback()
```

如果再`callback()`执行期间，点击页面，会发现**回调出现时间是早于`settimeout`**

如果任务队列内部运行堵塞(其中一个), 并不会等待完成.而是先执行其他的(如果这个其他是他的同级别的话).

```javascript
console.log('script start');

  setTimeout(function() { 
    console.log('setTimeout');
  }, 0);

  Promise.resolve().then(function() {   
    setTimeout(function() { 
      console.log('setTimeout prmise');
  }, 10000);
  })

  Promise.resolve().then(function() {   
    console.log('promise2');
  })
  
console.log('script end');
```

第二个`promise`堵塞了, 所以先执行了后面那个.

### 1.2.1. 重要原则

任务队列内的代码只能够在主线程的代码执行完毕之后执行。这也就是为了`settimout=0`的函数，也是在主线程函数执行完毕之后再执行。

## 1.3. 启发

**重点：**我们不能够使用`Promise`去等待一个循环的执行完毕。

* 更准确的说没办法使用单个`Promise`实现。
* 也没有办法通过`foreach`和每个`promise`组合实现

想要在某个循环执行完毕之后，再来进行一些操作。只能够通过`ES6`给我们的`iterator`方法，或者魔改`Promise.all`方法。详见[等待循环执行完毕](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E7%AD%89%E5%BE%85%E5%BE%AA%E7%8E%AF%E6%89%A7%E8%A1%8C%E5%AE%8C%E6%AF%95.md)

