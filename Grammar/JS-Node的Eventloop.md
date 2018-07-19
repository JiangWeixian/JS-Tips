# 1. Eventloop
> in Nodejs

<!-- TOC -->

- [1. Eventloop](#1-eventloop)
  - [1.1. 前置知识 - 通用规则](#11-前置知识---通用规则)
  - [1.2. 前置知识 - 新增任务队列](#12-前置知识---新增任务队列)
  - [1.3. 前置知识 - 什么是阶段任务](#13-前置知识---什么是阶段任务)
  - [1.4. 简单例子](#14-简单例子)
    - [加入Process.nextTick](#加入processnexttick)

<!-- /TOC -->

## 1.1. 前置知识 - 通用规则

[JS-浏览器端eventloop]()中总结的部分规则同样适用于`NODE`：

1. **任务队列内的代码只能够在主线程的代码执行完毕之后执行**。即使是`settimout=0`的函数，也是在主线程函数执行完毕之后再执行。
2. 对于`Main>A.tasks>B.tasks`有优先级。
3. (**很重要**)新建一个`Promise`，比如`new Promise()`其实是主线程代码！而后面的`then`才是任务队列的代码。至于为什么？可以看[(TODO)JS-Promise自实现]()。

由 **前置知识 - 新增任务队列** 补充之后我们可以得到完整规则如下(以后可能还会补充)：

1. 对于`Main>PN.tasks>A.tasks>B.tasks`有优先级。
2. **任务队列内的代码只能够在主线程的代码执行完毕之后执行**。即使是`settimout=0`的函数，也是在主线程函数执行完毕之后再执行。
3. (**很重要**)新建一个`Promise`，比如`new Promise()`其实是主线程代码！而后面的`then`才是任务队列的代码。至于为什么？可以看[(TODO)JS-Promise自实现]()。
4. (这一点和浏览器不同)对第二点规则补充，优先级不同任务队列之间。不再 **严格遵循必须全部完成一个然后才是下一个。而是以先执行外层形成的阶段任务，然后才是阶段任务内部任务。**。阶段任务见[前置知识-什么是阶段任务]()。**包裹再异步函数中异步函数才是第2阶段函数**

## 1.2. 前置知识 - 新增任务队列

* `Nodejs`端多了一个`setImmediate`，语义上是等价于`settimout=0`。但是由于无法做到严格意义上的`0ms`。所以`settimout=0`多少会有些延迟，所以会优先使用`setImmediate`
* `process.nextTick()`语义上等价`settimout=0 or setImmediate`但是优先级比这两个都要高。

严格来说`settimout=0 or setImmediate`会加入`B.tasks`。而`process.nextTick()`则形成新的队列，设为`PN.tasks`。因此全部队列为：

1. Main
2. PN.tasks
3. A.tasks
4. B.tasks

## 1.3. 前置知识 - 什么是阶段任务

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

**在浏览器S1 S2会添加到B.tasks，在S1执行过程中将`S1P.then`以及`S11`加入不同的队列。且`S1P.then`所在任务队列高于`S2`所在队列。如果`S1P.then`不执行完成，`S2`是不可能先于执行的**。

但是，在`Nodejs`端情况有所不同。现在有了一个比较高的优先级，就是 **阶段任务**。

其中`S1 S2`为第一阶段任务，`S1 S2`中执行创建的任务为第二阶段任务。也就是我们先执行第一阶段`S1 S2`。即使在`S1`执行过程中添加了优先级比`S2`高的`S1P.then`。但是 **S1P.then属于第二阶段，所以会加入到队列中等待。等到第一阶段全部执行完毕之后再执行。**

## 1.4. 简单例子

> **前置知识 - 什么是阶段任务**中代码为例子。由于没有`process.next..`所以这里就先使用三个队列(一定要在NODE端测试结果)

```JavaScript
// 第1阶段 - 执行
// Step1 - 第1阶段S1 S2
1. Main = []
2. A.tasks = []
3. B.tasks = [S1, S2]

// Step2 - 执行第1阶段S1，规则不变还是先主线程。期间遇到了几个任务，添加到第2阶段
1. Main = [timeout1, timeout1_promise, <--Next Loop-->]
2. A.tasks = []
3. B.tasks = [S2]

// 第2阶段 - 添加
1. Main = []
2. A.tasks = [S1P.then]
3. B.tasks = [S11]

// Step3 - 执行第1阶段S2，规则不变还是先主线程。期间遇到了几个任务，添加到第2阶段。此时第1阶段执行完毕
1. Main = [
  timeout1, 
  timeout1_promise, 
  <--Next Loop-->, 
  timeout2, 
  timeout2_promise, 
  <--Next Loop-->]
2. A.tasks = []
3. B.tasks = []

// 第2阶段 - 添加
1. Main = []
2. A.tasks = [S1P.then, S2P.then]
3. B.tasks = [S11, S21]

// 第2阶段 - 执行
// Step1 - 先执行S1P.then，然后是S2P.then
1. Main = [
  timeout1_then,
  timeout2_then, ]
2. A.tasks = []
3. B.tasks = [S11, S21]

// Step2 - 先执行S11，然后是S21
1. Main = [
  timeout1_then,
  timeout2_then, 
  timeout3,
  <--Next Loop-->
  timeout4,
  <--Next Loop-->]
2. A.tasks = []
3. B.tasks = []
```

见[JS-Eventloop-innode-simple.js]()

### 加入Process.nextTick

```JavaScript
setTimeout(() => { // S1
  console.log('timeout1')
  process.nextTick(function () { // S1.PN
    console.log('nexttick1')
  })
});

console.log('main1')

function say () {
  console.log('say')
  process.nextTick(function () { // SAY.PN
    console.log('nexttick2')
  })
}

new Promise(function (resovle) { // P1
  process.nextTick(function () { // P1.PN
    console.log('nexttick3')
  })
  console.log('promise1')
  resovle()
}).then(function () {
  console.log('promise1-then')
})

console.log('main2')

process.nextTick(function () { // MAIN.PN
  console.log('nexttick4')
})

say()
```

依照我们的规则总结信息分析

```JavaScript
// 第1阶段 - 执行
// Step1 - 第1阶段，先执行主线程。并加入第1阶段任务
1. Main = [
  main1,
  promise1,
  main2,
  say]
2. PN.tasks = [P1.PN, MAIN.PN, SAY.PN]
3. A.tasks = [P1.then]
4. B.tasks = [S1]

// Step2 - 第1阶段，执行第1阶段任务.由于PN.tasks有优先级别最高。所以先PN.tasks
1. Main = [
  main1,
  promise1,
  main2,
  say,
  nexttick3,
  nexttick4,
  nexttick2,
  ]
2. PN.tasks = []
3. A.tasks = [P1.then]
4. B.tasks = [S1]

// Step3 - 第1阶段，PN.tasks完成。接着是A.tasks
1. Main = [
  main1,
  promise1,
  main2,
  say,
  nexttick3,
  nexttick4,
  nexttick2,
  promise1-then,
  ]
2. PN.tasks = []
3. A.tasks = []
4. B.tasks = [S1]

// Step4 - 第1阶段最后执行S1，并加入第2阶段任务
1. Main = [
  main1,
  promise1,
  main2,
  say,
  nexttick3,
  nexttick4,
  nexttick2,
  promise1-then,
  timeout1,
  ]
2. PN.tasks = []
3. A.tasks = []
4. B.tasks = []

// 第2阶段
1. Main = [
  ]
2. PN.tasks = [S1.PN]
3. A.tasks = []
4. B.tasks = []

// 第2阶段 - 执行
// Step1 - S1.PN
1. Main = [nexttick1]
2. PN.tasks = []
3. A.tasks = []
4. B.tasks = []
```

见[JS-eventloop-innode-process.js]()