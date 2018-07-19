# 1. JS-浏览器-Promise&EventLoop函数执行队列
> `EventLoop`实现有所不同，本文先讨论浏览器版本的。

<!-- TOC -->

- [1. JS-浏览器-Promise&EventLoop函数执行队列](#1-js-浏览器-promiseeventloop函数执行队列)
  - [1.1. 前置知识 - 规则设定](#11-前置知识---规则设定)
  - [1.2. 前置知识 - 什么是回调，别以为你知道了](#12-前置知识---什么是回调别以为你知道了)
  - [1.3. 前置知识 - 任务队列分类](#13-前置知识---任务队列分类)
  - [1.4. 简单例子](#14-简单例子)
    - [1.4.1. 加入DOM事件](#141-加入dom事件)
  - [1.5. 理论分析](#15-理论分析)
    - [1.5.1. 复杂的简单例子](#151-复杂的简单例子)
    - [1.5.2. 含有阻塞的例子](#152-含有阻塞的例子)
  - [1.6. 纯粹的Promise](#16-纯粹的promise)
    - [1.6.1. 超级复杂的例子](#161-超级复杂的例子)
  - [1.7. 链接](#17-链接)

<!-- /TOC -->

## 1.1. 前置知识 - 规则设定

1. **任务队列内的代码只能够在主线程的代码执行完毕之后执行**。
  * 即使是`settimout=0`的函数，也是在主线程函数执行完毕之后再执行。
  * DOM触发事件即使触发了也要等到主线程事件执行完毕之后，才能执行
2. 对于`Main>A.tasks>B.tasks`有优先级。意味着前一个优先级任务队列如果不执行完毕，是不会接着执行后一个任务队列。
3. (**很重要**)新建一个`Promise`，比如`new Promise()`其实是主线程代码！而后面的`then`才是任务队列的代码。至于为什么？可以看[(TODO)JS-Promise自实现]()。
4. 先第一层任务加入任务队列，然后当某个具体任务执行的时候，在加入其中创建的任务队列。
  * 例如 **复杂的简单例子**中先加入`S1 S2`。在`S1`执行的时候才会加入里面任务
  * 而`S2`里面的任务只有在`S2`执行的时候才会加入

## 1.2. 前置知识 - 什么是回调，别以为你知道了

[回调函数是什么](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%90%8C%E6%AD%A5%E5%BC%82%E6%AD%A5.md)

由规则可可知道，回调函数可以包裹在`settimout=0`的函数，也是在主线程函数执行完毕之后再执行。

## 1.3. 前置知识 - 任务队列分类

看以下[博客](https://blog.csdn.net/wky_csdn/article/details/77477146)总结得到的。

`JavaScript`代码执行是单线的，意味着只能执行之后，再来执行另外一段。

但是效率一定是低下的，虽然单线程是必然的操作的。所以`JavaScript`就有了任务队列，挂起那些等待执行的代码，把`CPU`复用起来。目前总结如下:

* 主线程 - 正在执行的代码，优先级别最高的
* 任务队列 - 等待执行的代码队列

那么什么代码是任务队列？

就是那些具有回调函数的代码，例如`settimeout&promise&dom事件监听函数`（可能总结不准确）。任务队列细分，有优先级别(比如`Promise`优先级别比`settimeout`优先级高的)：

* `marcotask`(为了后面行文方面我这里 设定为 **B-tasks**) - `setTimeout, setInterval, setImmediate, I/O, rendering`转换为中文，就是定时器几类，网络(因为属于IO)，DOM交互
* `mircotask`(设定为 **A-tasks**) - `Promise`也就是属于这个队列，

结合主线程，现在JavaScript有了三种执行顺序，分别为：

1. Main
2. A.tasks
3. B.tasks

## 1.4. 简单例子

> 再来看一段代码，了解一下主线程和任务队列是如何影响的

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

可以发现主线程就是两个`console.log`。所以输出

```JavaScript
script start
script end
```

任务队列有`settimeout`和`promise`(且由规则可得，没有`new promise`操作。所以`then`后面的才是任务队列)。

且在任务队列里面`promise`有比`settimeout`级别高。

```JavaScript
script start
script end
promise1
promise2
setTimeout
```

### 1.4.1. 加入DOM事件

而[回调函数](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%90%8C%E6%AD%A5%E5%BC%82%E6%AD%A5.md)优先级比`settimeout`高(感觉应该是触发便插入到`B.tasks`之前)如下：

```JavaScript
function callback() {
  var now = Date.now()
  while (Date.now() < now + 2000) {}
  console.log('callback')
}
document.onclick = function () {
  console.log('回调')
}
Promise.resolve()
.then(function() {   
  console.log('promise1');
})
setTimeout(function () {
  console.log('settimeout')
})
callback()
```

如果再`callback()`执行期间，点击页面，会发现 **回调出现时间是早于`settimeout`**。会发生 **10s之后 callback->promise->回调*5->settimeout**

## 1.5. 理论分析

> 进入`Main`才是执行，进入任何一个队列都是等待执行

以[恍然大雾的一篇文章](https://mp.weixin.qq.com/s/1iHmsIjh2mLqaOUvkR2RZA?)理论解析下面代码(如果觉得我解释不够明白，看这个)

```JavaScript
// 主线程的等待1s执行函数
function sleep(time) {
    let startTime = new Date();
    while (new Date() - startTime < time) {}
    console.log('<--Next Loop-->');
}

console.log('script start')
setTimeout(() => { // 此为S1
    console.log('timeout1');
    setTimeout(() => { // 此为S12
        console.log('timeout3');
        sleep(1000);
    });
    new Promise((resolve) => { // 此为S1P
        console.log('timeout1_promise');
        resolve();
    }).then(() => {
        console.log('timeout1_then');
    });
    sleep(1000);
});
console.log('script end')
```


来自[@你的肖同学](https://www.jianshu.com/p/b221e6e36dcb)

由 [1.3. 前置知识 - 任务队列分类]()解释，此时页面中有三个队列：

1. Main = []
2. A.tasks = []
3. B.tasks = []

(**Main中就是`console`输出结果**)代码从上到下，遇到两个`console.log`是主线程的所以：

1. Main = [`script start`, `script end`]
2. A.tasks = []
3. B.tasks = []

继续往下遇到`timeout`，将其`S1`加入`B.tasks`(因为是`marcotask`)。

1. Main = [`script start`, `script end`]
2. A.tasks = []
3. B.tasks = [`S1`]

后面没有其余代码了，所以执行`S1`(从`B.tasks`取出来)。`S1`中可以看到有三个主线程的任务，`console.log('timeout1');`和`new Promise`(这是规则)以及`sleep(1000);`。依照书写顺序，

1. Main = [`script start`, `script end`, `timeout1`, `timeout1_promise`, `<--Next Loop-->`]
2. A.tasks = []
3. B.tasks = []

现在有剩余`S12 and S1P(then部分)`。由于任务队列不同，分加入`B and A`

1. Main = [`script start`, `script end`, `timeout1`, `timeout1_promise`, `<--Next Loop-->`]
2. A.tasks = [`S1P.then`]
3. B.tasks = [`S11`]

由于`A.tasks`优先级高于`B.tasks`。所以先执行`S1P.then`然后`S11`

1. Main = [`script start`, `script end`, `timeout1`, `timeout1_promise`, `<--Next Loop-->`,`timeout1_then`, `timeout3`, `<--Next Loop-->`来自其中的`sleep(1000)`]
2. A.tasks = []
3. B.tasks = []

是不是觉得还神气的...

### 1.5.1. 复杂的简单例子

> 因为前后两个timeout以及内部并没有设置时间间隔。

```JavaScript
function sleep(time) {
    let startTime = new Date();
    while (new Date() - startTime < time) {}
    console.log('<--Next Loop-->');
}

setTimeout(() => { // S1
    console.log('timeout1');
    setTimeout(() => { // S11
        console.log('timeout3');
        sleep(1000);
    });
    new Promise((resolve) => { //S1P
        console.log('timeout1_promise');
        resolve();
    }).then(() => {
        console.log('timeout1_then');
    });
    sleep(1000);
});
     
setTimeout(() => { // S2
    console.log('timeout2');
    setTimeout(() => {
        console.log('timeout4');
        sleep(1000);
    });
    new Promise((resolve) => { //S2P
        console.log('timeout2_promise');
        resolve();
    }).then(() => {
        console.log('timeout2_then');
    });
    sleep(1000);
});
```

直接解释发生顺序：

1. Step1

    ```JavaScript
    1. Main = []
    2. A.tasks = []
    3. B.tasks = [S1, S2]
    ```

2. Step2 - 执行`S1`，执行其中三个主线程(**原因见上一节**)，并将`S1P.then`加入`A.tasks`，将`S11`加入`B.tasks`

    ```JavaScript
    1. Main = [
      timeout1,
      timeout1_promise,
      <--Next Loop-->
      ]
    2. A.tasks = [S1P.then]
    3. B.tasks = [S2,S11]
    ```    
3. Step3 - 发现`A.tasks`中含有任务，所以执行`S1P.then`

    ```JavaScript
    1. Main = [
      timeout1,
      timeout1_promise,
      <--Next Loop-->,
      timeout1_then,
      ]
    2. A.tasks = []
    3. B.tasks = [S2,S11]
    ``` 

4. Step5 - 发现`B.tasks`中含有任务`S2,S11`在任务队列中先后关系，所以先执行`S2`。其中情况和`S1`这里加速进行说明。执行完成`S2P`之后，将`S21`加入`B.tasks`。

    ```JavaScript
    1. Main = [
      timeout1,
      timeout1_promise,
      <--Next Loop-->,
      timeout1_then,
      timeout2,
      timeout2_promise,
      <--Next Loop-->,
      timeout2_then,
      ]
    2. A.tasks = []
    3. B.tasks = [S11,S21]
    ``` 
5. Step5 - 并开始执行`S11`。

    ```JavaScript
    1. Main = [
      timeout1,
      timeout1_promise,
      <--Next Loop-->,
      timeout1_then,
      timeout2,
      timeout2_promise,
      <--Next Loop-->,
      timeout2_then,
      timeout3,
      <--Next Loop-->,
      ]
    2. A.tasks = []
    3. B.tasks = [S21]
    ```   
5. Step5 - 执行`S21`和上一个一致。   
 
    ```JavaScript
    1. Main = [
      timeout1,
      timeout1_promise,
      <--Next Loop-->,
      timeout1_then,
      timeout2,
      timeout2_promise,
      <--Next Loop-->,
      timeout2_then,
      timeout3,
      <--Next Loop-->,
      timeout4,
      <--Next Loop-->
      ]
    ```   

### 1.5.2. 含有阻塞的例子

> 上面任务都是同一个时间。并没有延迟，如果在异步任务有延迟。**延迟知识代表加入队列的时间不同**

下面是一个简单例子：

```javascript
console.log('script start');

setTimeout(function() { // S1
  console.log('setTimeout1');
}, 1000);

setTimeout(function() { // S2
  console.log('setTimeout2');
}, 0);

Promise.resolve().then(function() { // P1
  console.log('promise1');
  setTimeout(function() { 
    console.log('setTimeout prmise1'); // P1S
  }, 1000);
})

Promise.resolve().then(function() { // P2
  console.log('promise2');
})
  
console.log('script end');
```

1. Step1 - 先执行主线程。并加入`P1.then, P2.then`。遇到`S1 S2`，其中`S1`是`1S`后加入，于是加入`S2`

    ```JavaScript
    1. Main = [
      script start,
      script end,
      ]
    2. A.tasks = [P1.then, P2.then]
    3. B.tasks = [S2, (...1S)加入S1]
    ```

2. Step2 - `P1.then`执行，发现内部是一个`timeout`。按照这个理论`P1S`应该加入队列，但是 **delay=1000**。于是准备`1S`后加入。

    ```JavaScript
    1. Main = [
      script start,
      script end,
      promise1,
      ]
    2. A.tasks = [P2.then]
    3. B.tasks = [(...1S)加入S1, S2, (...1S与上一个S1起始点一致)加入P1S]
    ```
3. Step3 - `P2.then`执行，然后是`S2`。

    ```JavaScript
    1. Main = [
      script start,
      script end,
      promise1,
      promise2,
      setTimeout2,
      ]
    2. A.tasks = []
    3. B.tasks = [(...1S)加入S1, (...1S与上一个起始点一致)加入P1S]
    ```

    ```
4. Step4 - `P2.then`执行，然后是`(...1S)加入S1, (...1S与上一个起始点一致)加入P1S`。

    ```JavaScript
    1. Main = [
      script start,
      script end,
      promise1,
      promise2,
      setTimeout2,
      setTimeout1，
      setTimeout prmise1
      ]
    2. A.tasks = []
    3. B.tasks = []


也是因为`P1.then`加入的是`A`而`S1`加入的是`B`,才会导致B队列中，相等时间下`P1S`要落后`S1`

**进一步，假设P1改为500**，不影响`P2then`回到第3步骤：

3. Step3 - `P2.then`执行，然后是`S2`。

    ```JavaScript
    1. Main = [
      script start,
      script end,
      promise1,
      promise2,
      setTimeout2,
      ]
    2. A.tasks = []
    3. B.tasks = [(...1S)加入S1, (...0.5s与上一个起始点一致)加入P1S]
    ```
    因此当过了0.5s之后，`B.tasks`变为了`[P1S, (...0.5s)S1]`，自然：
    ```JavaScript
    1. Main = [
      script start,
      script end,
      promise1,
      promise2,
      setTimeout2,
      etTimeout prmise1,
      setTimeout1
      ]
    2. A.tasks = []
    3. B.tasks = []
    ```

## 1.6. 纯粹的Promise

> 上面是各种情况混合，先来简单的介绍一下只有Promise

```JavaScript
Promise.resolve()
.then(function() {
  console.log(1)
})
.then(function () {
  console.log(2)
})
```

`A`队列为`[p1-then1, p1-then2]`

很显然，分别是`1 2`。如果复杂一些：

```JavaScript
Promise.resolve()
.then(function() {
  return new Promise(function (resolve) { // p1-then1
    setTimeout(function () { // t(p1-then-in)
      console.log('promise1-then1') // p1-then-in
      resolve()
    },0)
  })
})
.then(function () { // p1-then2
  console.log('promise1-then2')
})

Promise.resolve()
.then(function() { // p2-then
  console.log('promise2-then2')
})
```

答案是`promise2-then2 promise1-then1 promise-then2`。这一段代码和上一个不同的是`p1-then`内部返回的`promise's resolve`被异步执行。这就导致了后面的`then`被阻塞(表现上和同步代码一直)

在[JS-promise-自实现(TODO)]()可以知道：

1. then - 返回一个`promise`不是上面写在函数内部的(p1-then1-in)，而是定义默认就返回的
2. 后面的`then`属于前面`then`返回的`promise`，也就是`p2-then2`其实是属于`p1-then1`自己定义默认返回的。

如果`p1-then1`中`resolve`被异步了，那么就会导致后面 **p1-then2**被包裹在一个`settimeout`中(这是`promise`的默认行为)，而且在`p1-then1-in`执行之后才会被创建。不同于前一段代码中，在写出这样的链条之后，`A`队列就已经执行了。

理论分析是：

1. Step1 - 由上面理论，先是外侧`then - p1-then1 p2-then`

    ```JavaScript
    1. Main = [
      ]
    2. A.tasks = [p1-then1, p2-then]
    3. B.tasks = []
    ```

2. Step2 - 执行`p1-then1`先是执行内部函数，然后创建包裹在`timeout`内部的`p1-then2`，记为`t(p1-then2)`

    ```JavaScript
    1. Main = [
      ]
    2. A.tasks = [p2-then]
    3. B.tasks = [t(p1-then-in)]
    ```
    
3. Step3 - 执行`p2-then`
    ```JavaScript
    1. Main = [
        promise2-then2
      ]
    2. A.tasks = []
    3. B.tasks = [t(p1-then-in), t(p1-then2)]
    ```
    
4. Step4 - 执行`B-task`执行`t(p1-then-in)`创建`t(p1-then2)`
    ```JavaScript
    1. Main = [
        promise2-then2,
        promise1-then1
      ]
    2. A.tasks = []
    3. B.tasks = [t(p1-then2)]
    ```

最后一步不写了。
    
### 1.6.1. 超级复杂的例子

> 按照上一节步骤，也一定可以分析出来。理解阻塞的`Promise`执行之后才会加入后面的包裹在`settimeout`的`promise`。和不阻塞是不一样的。

```JavaScript
setTimeout(function() { // S1
  console.log('setTimeout1');
}, 1000);

setTimeout(function() { // S2
  console.log('setTimeout2');
}, 0);

Promise.resolve()
.then(function() {
  return new Promise(function (resolve) { // p1-then1
    setTimeout(function () { // t(p1-then1-in)
      console.log('promise1-then1') // p1-then1-in
      resolve()
    },500)
  })
})
.then(function() {
  return new Promise(function (resolve) { // p1-then2
    setTimeout(function () { // t(p1-then2-in)
      console.log('promise1-then2') // p1-then2-in
      resolve()
    },500)
  })
})
.then(function () { // p1-then3
  console.log('promise1-then3')
})

Promise.resolve()
.then(function() { // p2-then
  console.log('promise2-then2')
})
```

试着解析：

```JavaScript
// Step1
1. Main = [
  ]
2. A.tasks = [p1-then1, p2-then]
3. B.tasks = [(1s加入)S1, S2]

// Step2 - t(p1-then1-in)
1. Main = [
  ]
2. A.tasks = [p2-then]
3. B.tasks = [(1s加入)S1, S2, (0.5s后加入p1-then1-in)t(p1-then1-in)]

// Step3 - p2-then
1. Main = [
    promise2-then2,
  ]
2. A.tasks = []
3. B.tasks = [(1s加入)S1, S2, (0.5s后加入p1-then1-in)t(p1-then1-in)]

// Step4 - S2
1. Main = [
    promise2-then2,
    setTimeout2,
  ]
2. A.tasks = []
3. B.tasks = [(1s加入)S1, (0.5s后加入p1-then1-in)t(p1-then1-in)]

// Step5 - 过了0.5S之后，加入p1-then1-in
1. Main = [
    promise2-then2,
    setTimeout2,
  ]
2. A.tasks = [p1-then1-in]
3. B.tasks = [(0.5s加入)S1]

// Step6 - 过了0.5S之后，p1-then1-in立刻执行
1. Main = [
    promise2-then2,
    setTimeout2,
    promise1-then1，
  ]
2. A.tasks = []
3. B.tasks = [(0.5s加入)S1, t(p1-then2)]

// Step7 - t(p1-then2)立刻执行，加入t(p1-then2-in)
1. Main = [
    promise2-then2,
    setTimeout2,
    promise1-then1,
  ]
2. A.tasks = []
3. B.tasks = [(0.5s加入)S1, (0.5s后加入p1-then1-in)t(p1-then2-in)]

// Step8 - 经过0.5s之后S1执行(因为队列优先级高于t(p1-then2-in))
1. Main = [
    promise2-then2,
    setTimeout2,
    promise1-then1,
    setTimeout1
  ]
2. A.tasks = []
3. B.tasks = [t(p1-then2-in)]

// Step9 - t(p1-then2-in)，加入t(p1-then3)
1. Main = [
    promise2-then2,
    setTimeout2,
    promise1-then1,
    setTimeout1,
    promise1-then2,
  ]
2. A.tasks = []
3. B.tasks = [t(p1-then3)]

// Step10 - t(p1-then3)
1. Main = [
    promise2-then2,
    setTimeout2,
    promise1-then1,
    setTimeout1,
    promise1-then2,
    promise1-then3
  ]
2. A.tasks = []
3. B.tasks = [t(p1-then3)]
```

## 1.7. 链接

* [恍然大雾的一篇文章](https://mp.weixin.qq.com/s/1iHmsIjh2mLqaOUvkR2RZA?)

