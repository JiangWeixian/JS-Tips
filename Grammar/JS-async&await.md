# JS - async&await

<!-- TOC -->

- [JS - async&await](#js---asyncawait)
  - [前置知识 - async&await作用](#前置知识---asyncawait作用)
  - [**`async what`**](#async-what)
  - [**`await what`**](#await-what)
    - [**处理`reject`**，](#处理reject)
    - [**`await what` -** Q&A](#await-what---qa)
  - [**Q&A简单汇总**](#qa简单汇总)

<!-- /TOC -->

## 前置知识 - async&await作用

类似`promise`，等待一个函数执行完毕。其中`async`会返回一个`promise`对象。可以在`async`函数上使用`then`关键字。

`await`只能出现在`async`函数中。两者一般成对出现，但是会有额外情况。

这两个出现主要是为了解决`Promise.then`太长的问题。

## **`async what`**

> `async`使用结果

* `async`

  ```JavaScript
  async function asyncfunc() {
    // 第一种使用情况
    let result = await somefunc()
    return result
    // 第二种情况
    console.log(result)
  }
  ```
  **先不去理会`somefunc`是什么格式。** 关键区分有没有`return`的区别。
  
  * **无论有没有`return`都会默认返回一个`promise`对象**，也就是说我们可以使用`asyncfunc().then(...)`这样的格式。
  * 如果有`return`，那么`result`结果就可以传递到`then`。**仅仅局限于`await`等待的函数是`resolve`状态。** 见[**`await what`**](#await-what)`resolve`状态举例。

## **`await what`**

> `await`在等待什么

> `await`只能够写在`async`函数中

有三种情况，分别是普通代码、`Promise`代码以及`async`。不过我们先考虑`await`返回什么结果：

```JavaScript
async function f () {
  let res = await 123
  console.log(res)
}
f()
// 输出123
```

因此`await`得到结果是紧跟着`await`后面那段代码的返回结果。但是由[**`async what`**](#async-what)得到结论，**只有`return`才能够将`await`得到结果在后面的数据传递下去。就像是下面那样**

**如果是resolve状态。意味着`await`(一行上紧跟着)的代码正确返回了结果**

* `await 123`

    ```JavaScript
    async function f () {
      return await 123
    }
    f().then(function (data) { console.log(data) })
    ```

    可以看到`123`通过`return`传递到`Promise.then()`。**在只有单个`await`语句情况下**，此时有没有`await`问题都不是很大，、。

* `await normal function` - 如果是等待一个不是非异步函数。**显然这个函数内部需要一个返回值让`await`获取。**

    ```JavaScript
    function normalfunc () {
      return 123
    }
    async function f () {
      return await normalfunc()
    }
    f().then(function (data) { console.log(data) })
    ```

    结果和第一个例子一样。

* `await promise function` - 如果是`promise`对象呢。

    > 重申一遍：`Promise`是一个对象而不是一个函数。

    ```JavaScript
    function promisefunc () {
      return new Promise(function (resolve) {
        resolve(123)
      })
    }
    async function f () {
      return await promisefunc()
    }
    f().then(function (data) { console.log(data) })
    ```

    可以得到`await`是等待`promise.resolve`的结果。

* `await async function`

    > (resolve状态)就是获取`return`结果，(reject状态)就是`await`结果。

    ```JavaScript
    async function asyncfunc () {
      let res1 = await 123
      let res2 = await 111
      return res1 + 1
    }
    async function f () {
      return await asyncfunc()
    }
    f().then(function (data) { console.log(data) })
    //输出124
    ```
    
    输出并不是`111`，所以`await`等待`async`中`return`结果。

### **处理`reject`**，

> 也就是如果`res`是函数抛出的错误怎么办？

```JavaScript
function sleep (ms, err) {
  return new Promise(function (resolve, reject) {
    if (err) {
      reject('error') 
    } else {
      resolve('sleep done')
    }
  })
}

async function f () {
  let res = await sleep(1000, true)
  console.log(res)
  res = await sleep(1000)
  console.log(res)
  return 'done'
}
f()
```

在[JS-Promise理解](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-promise-%E7%90%86%E8%A7%A3.md)中知道，如果错误没有被`catch or then()中第2个函数捕获`那么其实`Promise.then`链条就会中断。

* **就像是上面第2条`await`并不会执行。**，导致中断。
* 同时第1个`res`并没有得到结果，也就是说 **`await`并没有返回结果，或者说抛出了`error`却并没有人处理**。

**也就意味着以下代码可以得到解释**

```JavaScript
function sleep (ms, err) {
  return new Promise(function (resolve, reject) {
    if (err) {
      reject('error') 
    } else {
      resolve('sleep done')
    }
  })
}

async function f () {
  await sleep(1000, true)
}
f().catch((e) => { console.log(e) })
```

如果`await`等到的是一个`reject`。那么不需要`return`就会被外部`catch`捕获，处理错误结束之后将`Promise`状态改为`resolved`。

**避免中断**

```JavaScript
function sleep (ms, err) {
  return new Promise(function (resolve, reject) {
    if (err) {
      reject('error') 
    } else {
      resolve('sleep done')
    }
  })
}

async function f () {
  let res1 = await sleep(1000, true).catch((e) => { console.log(e) })
  console.log(res1)
  res = await sleep(1000)
  console.log(res)
  return 'done'
}
f()
// res1是没有结果的，这是由于catch并没有给res1赋值
```

由于错误被捕获处理了，所以程序继续执行了。

### **`await what` -** Q&A
    
> 前一个`await`阻塞后面的代码

* **Q&A1 -** 多个`await`会出现什么情况？


  ```JavaScript
  function sleep (ms) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(`sleep${ms}`)
      }, ms)
    })
  }

  async function f () {
    let res = await sleep(1000)
    console.log(res)
    res = await sleep(150)
    console.log(res)
    res = await sleep(2000)
    console.log(res)
    return 'done'
  }
  f().then(function (data) { console.log(data) })
  // sleep1000
  // sleep150
  // sleep2000
  ```

  可以发现前一个`await`阻塞了后面的代码无论是后面是同步的代码还是异步的。因此可以理解多个`await`为：

  ```JavaScript
  Promise.resolve()
         .then(function () {
           return sleep(1000)
         })
         .then(function () {
           return sleep(150)
         })
  ```

  这段代码执行解析见[JS-Promise&EventLoop](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-Promise%26EventLoop%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E9%98%9F%E5%88%97.md)。既然是这样，其实`res`其实是可以在`then`(指的是这一段代码的`then`)中进行传递的的。
    

## **Q&A简单汇总**

1. **`await`等待什么？**

    > 如果是不同函数就是函数的`return`结果；如果是`promise`，就是`resovle`结果;如果是`async`就是`return`结果(因为`return`会返回一个`promise.resolve`)

2. 多个`await`如何处理？

    > 后一个等待前一个执行。也就是说，后面那个`func`可以拿到前面`await`结果作为参数。

3. 与主线程关系

    > 在[JS-浏览器Eventloop](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-Promise%26EventLoop%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E9%98%9F%E5%88%97.md)我们知道，`Promise.then`其实是出于微任务队列中。也就说会先执行主线程代码然后才是`Promise.then`。而`async`不同的是，对于多个`await`它会阻塞后面的主线程代码。
