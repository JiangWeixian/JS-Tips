# JS-浏览器-Promise&EventLoop函数执行队列
> `EventLoop`实现有所不同，本文先讨论浏览器版本的。

- [JS-浏览器-Promise&EventLoop函数执行队列](#js-浏览器-promiseeventloop函数执行队列)
  - [前置知识](#前置知识)
    - [规则设定](#规则设定)
    - [什么是回调](#什么是回调)
    - [任务队列分类](#任务队列分类)
  - [优先级分析](#优先级分析)
    - [证明规则2/3](#证明规则23)
    - [证明规则1](#证明规则1)
  - [理论分析](#理论分析)
    - [复杂的简单例子](#复杂的简单例子)
  - [延迟不为0](#延迟不为0)
  - [纯粹的Promise](#纯粹的promise)
    - [Promise含有阻塞的例子](#promise含有阻塞的例子)
    - [超级复杂的例子](#超级复杂的例子)
  - [链接](#链接)

## 前置知识

### 规则设定

1. 任务队列内的代码只能够在**主线程的代码执行完毕之后执行**。
   * 即使是`settimout=0`的函数，也是在主线程函数执行完毕之后再执行。
   * `DOM`触发事件即使触发了也要等到主线程执行完毕之后，才能执行
2. 对于`Main>A.tasks>B.tasks`有优先级。意味着前一个优先级任务队列如果不执行完毕，是不会接着执行后一个任务队列。可查看[任务队列分类](#任务队列分类)。
3. 新建一个`Promise`
   - 比如`new Promise()`中的代码其实是主线程代码！
   - 而后面的`then`才是任务队列的代码。至于为什么？
4. 先添加第一层任务加入任务队列，然后当某个具体任务执行的时候，再加入其中创建的任务队列。
    * 例如 **复杂的简单例子**中先加入`S1 S2`。在`S1`执行的时候才会加入里面任务，而`S2`里面的任务只有在`S2`执行的时候才会加入
    * 加入意为注册，注册时间就是 **其父类开始运行的时间**。
    
      如`p-then`内部含有`timeout`，可以保证`p-then`(注册时间是(0,0))。但是`p-then`执行在主线程之后，假设主线程执行了1s。`p-then`内部`timeout`注册时间就是从`1s`开始.见[JS-eventloop-innode-promisedelay]() - `p-then`内部`timeout`就是(1s, 0.5s)

### 什么是回调

[回调函数是什么](/docs/Grammar/JS-%E5%90%8C%E6%AD%A5%E5%BC%82%E6%AD%A5.md)

由规则可可知道，回调函数可以包裹在`settimout=0`的函数，也是在主线程函数执行完毕之后再执行。

### 任务队列分类

看以下[博客](https://blog.csdn.net/wky_csdn/article/details/77477146)总结得到的。

`JavaScript`代码执行是单线的，意味着只能执行之后，再来执行另外一段。

但是效率一定是低下的，虽然单线程是必然的操作的。所以`JavaScript`就有了任务队列，挂起那些等待执行的代码，把`CPU`复用起来。目前总结如下:

* 主线程 - 正在执行的代码，优先级别最高的
* 任务队列 - 等待执行的代码队列

那么什么代码是任务队列？

就是那些具有回调函数的代码，例如`settimeout & promise & dom-event`（可能总结不准确）。任务队列细分，有优先级别(比如`Promise`优先级别比`settimeout`优先级高的)：

* `marcotask`(为了后面行文方面我这里 设定为 **B-tasks**) - `setTimeout, setInterval, setImmediate, I/O, rendering`转换为中文，就是定时器几类，网络(因为属于IO)，DOM交互
* `mircotask`(设定为 **A-tasks**) - `Promise`也就是属于这个队列，

结合主线程，现在JavaScript有了三种执行顺序，分别为：

1. Main
2. A.tasks
3. B.tasks

## 优先级分析

### 证明规则2/3 

> `settimeout` & `promise` & `dom-event`优先级

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

```
script start
script end
promise1
promise2
setTimeout
```

可以发现主线程就是两个`console.log`。所以输出

```
script start
script end
```

任务队列有`settimeout`和`promise`(且由规则可得，没有`new promise`操作。所以`then`后面的才是任务队列)。

且在任务队列里面`promise`有比`settimeout`级别高。

```
script start
script end
promise1
promise2
setTimeout
```

### 证明规则1

> 同样也证明了规则2

而[回调函数](/docs/Grammar/JS-%E5%90%8C%E6%AD%A5%E5%BC%82%E6%AD%A5.md)优先级比`settimeout`高(感觉应该是触发便插入到`B.tasks`之前)如下：

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

如果再`callback()`执行期间，点击页面，会发现 **回调出现时间是早于`settimeout`**。会发生 **10s之后 callback->promise->回调*5->settimeout**。

## 理论分析

> 进入`Main`线程才是执行，进入任何一个队列都是等待执行

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

*来自[@你的肖同学](https://www.jianshu.com/p/b221e6e36dcb)*

由 [任务队列分类](#任务队列分类)解释，此时页面中有三个队列：

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

### 复杂的简单例子

> 分析多个`timeout`，但是因为前后两个timeout以及内部并没有设置时间间隔。例子算简单。

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

    ```
    1. Main = []
    2. A.tasks = []
    3. B.tasks = [S1, S2]
    ```

2. Step2 - 执行`S1`，执行其中三个主线程(**原因见上一节**)，并将`S1P.then`加入`A.tasks`，将`S11`加入`B.tasks`

    ```
    1. Main = [
      timeout1,
      timeout1_promise,
      <--Next Loop-->
      ]
    2. A.tasks = [S1P.then]
    3. B.tasks = [S2,S11]
    ```    
3. Step3 - 发现`A.tasks`中含有任务，所以执行`S1P.then`

    ```
    1. Main = [
      timeout1,
      timeout1_promise,
      <--Next Loop-->,
      timeout1_then,
      ]
    2. A.tasks = []
    3. B.tasks = [S2,S11]
    ``` 

4. Step4 - 发现`B.tasks`中含有任务`S2,S11`在任务队列中先后关系，所以先执行`S2`。其中情况和`S1`这里加速进行说明。执行完成`S2P.then`之后，将`S21`加入`B.tasks`。

    ```
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

    ```
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
6. Step6 - 执行`S21`和上一个一致。   
 
    ```
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

## 延迟不为0

以上举例都不含都假设`settimout=0`的时候情况，如果现在`settimout=delay`时间不等于0。会发生什么？可以预见由于之前延迟时间都是一致的`0`。在`B.tasks`中运行任务都是以队列的先后顺序运行。现在有了延迟，而且是延迟中的嵌套。

> **💡 NOTE**  
进入main才是执行，进入其他任务队列都是注册；主线程执行不影响统一[阶段异步任务]()注册。

增加规则：**对于不同延迟时间的事件，以注册时间和延迟时间之和作为排序条件**。

以[JS-eventloop-innode-simple-delay1.js](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS/JS-eventloop-innode-simple-delay1.js)为例。设定 **(x, y)** 就是 **在x时候注册，然后预计y秒后发生。**

```JavaScript
function sleep(time) {
  let startTime = new Date();
  while (new Date() - startTime < time) {}
  console.log('<--Next Loop-->');
}

setTimeout(() => { //S1
  console.log('timeout1');
  setTimeout(() => { //S11
      console.log('timeout3');
      sleep(1000);
  });
  new Promise((resolve) => { // S1P
      console.log('timeout1_promise');
      resolve();
  }).then(() => { // S1P.then
      console.log('timeout1_then');
  });
  sleep(1000);
});
   
setTimeout(() => { //S2
  console.log('timeout2');
  setTimeout(() => { //S21
      console.log('timeout4');
      sleep(1000);
  });
  new Promise((resolve) => { //S2P
      console.log('timeout2_promise');
      resolve();
  }).then(() => { //S2P.then
      console.log('timeout2_then');
  });
  sleep(1000);
}, 500);
```

1. Step1

    ```
    1. Main = []
    2. A.tasks = []
    3. B.tasks = [(0s, 0s)S1, (0s, 0.5s)S2]
    ```

2. Step2 - 执行`S1`，执行其中三个主线程(**原因见上一节**)，并将`S1P.then`加入`A.tasks`，将`S11`加入`B.tasks`。

    ```
    1. Main = [
      timeout1,
      timeout1_promise,
      <--Next Loop-->
      ]
    2. A.tasks = [S1P.then]
    3. B.tasks = [(0s, 0.5s)S2, (0s, 0s)S11]
    ```    
3. Step3 - 发现`A.tasks`中含有任务，所以执行`S1P.then`。

    ```
    1. Main = [
      timeout1,
      timeout1_promise,
      <--Next Loop-->,
      timeout1_then,
      ]
    2. A.tasks = []
    3. B.tasks = [(0s, 0.5s)S2, (0s, 0s)S11]
    ``` 

4. Step4 - 发现`B.tasks`中 **根据排序规则** 先执行`S11`。**此时要特别注意：** 因为执行完成S11之后，S1的`cb`全部完成，耗时`1s`。而结合`(0s, 0.5s)S2`来看，**由于注册时间早就早就开始，所以在S1运行的时候，S2延迟已经开始计算。其实已经超过了`S2`理应运行的时间**。所以要特别注意 **S2内部任务函数的注册时间**。执行的时候主线程代码没有什么问题以及`p2-then`，注册`S21`(是从1s开始注册，而不是`0.5s`)

    ```
    1. Main = [
        timeout1,
        timeout1_promise,
        <--Next Loop-->,
        timeout1_then,
        timeout3,
        <--Next Loop-->,
        timeout2,
        timeout2_promise,
        <--Next Loop-->,
        timeout2_then,
      ]
    2. A.tasks = []
    3. B.tasks = [(1s, 0s)S21]
    ``` 
5. Step5 - 并开始执行`S21`。

    ```
    1. Main = [
      timeout1,
      timeout1_promise,
      <--Next Loop-->,
      timeout1_then,
      timeout3,
      <--Next Loop-->,
      timeout1,
      timeout2_promise,
      <--Next Loop-->,
      timeout2_then,
      timeout4,
      <--Next Loop-->
      ]
    ``` 

    **让S2先执行，依照上面STEP2-`S11`加入`500ms or 大于500ms`延迟的**

4. Step4 - `B.tasks-S2`，执行的时候主线程代码没有什么问题以及`p2-then`，注册`S21`,**无论如何S1中主线程的代码都是执行了，所以开始从1s开始注册**。

    ```
    1. Main = [
      timeout1,
      timeout1_promise,
      <--Next Loop-->,
      timeout1_then,
      timeout2,
      timeout2_promise,
      <--Next Loop-->
      ]
    2. A.tasks = []
    3. B.tasks = [(0s, 0.5s)S11, (1s, 0s)S21]
    ```
5. Step5 - `S21 and S11`。两个`S21(1+0)`以及`S11(0+0.5)`。后者小于前者，所以后者先运行。

    ```
    1. Main = [
      timeout1,
      timeout1_promise,
      <--Next Loop-->,
      timeout1_then,
      timeout2,
      timeout2_promise,
      <--Next Loop-->
      timeout3,
      <--Next Loop-->
      ]
    2. A.tasks = []
    3. B.tasks = [(1s, 0s)S21]
    ``` 

    **那么如果我们设置`S11`加入大于(不等于)`1s`延迟的。可以预见`S21`是优先于`S11`**。见[JS-eventloop-simple-delay3.js](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS/JS-eventloop-innode-simple-delay3.js)

> **💡 NOTE**  
为了验证 **增加规则的正确性！** 可以在Step3进行以下操作 [JS-eventloop-innode-simple-delay2.js](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS/JS-eventloop-innode-simple-delay2.js) 给`S1`也加入了`500ms`延迟，那么`(0s, 0s)S11`就变为`(0.5s, 0s)S11`，则优先执行`S2`然后才是`S11`(因为来到队列的先后顺序不同)  
同样如果给`S11`加入`500ms or 大于500ms`延迟的话，那么`(0s, 0s)S11`就变为`(0s, 0.5s)S11`。还是先执行`S2`

## 纯粹的Promise

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

2. Step2 - 执行`p1-then1`先是执行内部函数，然后创建包裹在`timeout`内部的`p1-then-in`，记为`t(p1-then-in)`

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
    3. B.tasks = [t(p1-then-in)]
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

### Promise含有阻塞的例子

> 上面任务都是同一个时间。并没有延迟，如果在异步任务有延迟。**延迟知识代表加入队列的时间不同**。所有含有阻塞的例子都会有 **体现第五点规则**

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

1. Step1 - 先执行主线程。并加入`P1.then, P2.then`

    ```JavaScript
    1. Main = [
      script start,
      script end,
      ]
    2. A.tasks = [P1.then, P2.then]
    3. B.tasks = [S2, (0, 1)S1]
    ```

2. Step2 - `P1.then`执行，发现内部是一个`timeout`。按照这个理论`P1S`应该加入队列，但是 **delay=1000**。于是准备`1S`后加入。

    ```JavaScript
    1. Main = [
      script start,
      script end,
      promise1,
      ]
    2. A.tasks = [P2.then]
    3. B.tasks = [S2, (0, 1)S1, (0, 1)P1S]
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
    3. B.tasks = [(0, 1)S1, (0, 1)P1S]
    ```

    ```
4. Step4 - 然后是`(0, 1)S1, (0, 1)P1S`。

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
    3. B.tasks = [(0,0.5)P1S, (0,1)S1]
    ```
    
    因此可以预见两个发生顺序，自然：
    
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
### 超级复杂的例子

> 按照上一节步骤，也一定可以分析出来。理解阻塞的`Promise`执行之后才会加入后面的包裹在`settimeout`的`promise`。和不阻塞是不一样的。

> 因此此种情况后一个then注册时间是在前一个then执行完成之后。

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
    },400)
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

```
// Step1
1. Main = [
  ]
2. A.tasks = [p1-then1, p2-then]
3. B.tasks = [(0,1)S1, S2]

// Step2 - t(p1-then1-in)
1. Main = [
  ]
2. A.tasks = [p2-then]
3. B.tasks = [(0,1)S1, S2, (0, 0.5)t(p1-then1-in)]

// Step3 - p2-then
1. Main = [
    promise2-then2,
  ]
2. A.tasks = []
3. B.tasks = [(0,1)S1, S2, (0, 0.5)t(p1-then1-in)]

// Step4 - S2
1. Main = [
    promise2-then2,
    setTimeout2,
  ]
2. A.tasks = []
3. B.tasks = [(0,1)S1, (0, 0.5)t(p1-then1-in)]

// Step5 - 排序之后先是p1-then1-in
1. Main = [
    promise2-then2,
    setTimeout2,
  ]
2. A.tasks = [p1-then1-in]
3. B.tasks = [(0,1)S1]

// Step6 - p1-then1-in创建t(p1-then2)，延迟为0是promise默认行为
1. Main = [
    promise2-then2,
    setTimeout2,
    promise1-then1，
  ]
2. A.tasks = []
3. B.tasks = [(0,1)S1, (0.5, 0)t(p1-then2)]

// Step7 - t(p1-then2)立刻执行，加入t(p1-then2-in)
1. Main = [
    promise2-then2,
    setTimeout2,
    promise1-then1,
  ]
2. A.tasks = []
3. B.tasks = [(0,1)S1, (0.5,0.5)t(p1-then2-in)]

// Step8 - S1
1. Main = [
    promise2-then2,
    setTimeout2,
    promise1-then1,
    setTimeout1
  ]
2. A.tasks = []
3. B.tasks = [(0.5,0.5)t(p1-then2-in)]

// Step9 - t(p1-then2-in)，加入t(p1-then3)
1. Main = [
    promise2-then2,
    setTimeout2,
    promise1-then1,
    setTimeout1,
    promise1-then2,
  ]
2. A.tasks = []
3. B.tasks = [(1s,0)t(p1-then3)]

// Step10 - t(p1-then3)，最后执行p1-then3
1. Main = [
    promise2-then2,
    setTimeout2,
    promise1-then1,
    setTimeout1,
    promise1-then2,
    promise1-then3
  ]
2. A.tasks = []
3. B.tasks = []
```

**可以试着修改`t(p1-then2-in)`为延迟200ms执行，会发现其是先于S1执行的**

## 链接

* [恍然大雾的一篇文章](https://mp.weixin.qq.com/s/1iHmsIjh2mLqaOUvkR2RZA?)
* [提到了任务注册时间和预计消耗时间](http://www.alloyteam.com/2015/10/turning-to-javascript-series-from-settimeout-said-the-event-loop-model/#prettyPhoto)
