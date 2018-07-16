# 1. 等待循环执行结束
> 让一个循环队列，下一次开始执行在上一个执行完成之后；

<!-- TOC -->

- [1. 等待循环执行结束](#1-等待循环执行结束)
  - [1.1. iterator - 前置](#11-iterator---前置)
    - [1.1.1. iterator实现方法](#111-iterator实现方法)
  - [1.2. 前置 - Promise定义](#12-前置---promise定义)
  - [1.3. Promise.all实现方法](#13-promiseall实现方法)
  - [1.4. Q&A](#14-qa)
  - [1.5. Promise.resolve - 更为清晰](#15-promiseresolve---更为清晰)

<!-- /TOC -->

## 1.1. iterator - 前置

* [ES6-iterator](http://es6.ruanyifeng.com/#docs/iterator)详细讲解版本。
* [参考代码](https://blog.csdn.net/u010176097/article/details/70267279)

核心点：

* array内置了一个`iterator`迭代器（除了array之外还有很多）
* `iterator`迭代器类似循环，不过不同的是，每次迭代都会返回当前状态。如果循环结束，就会在状态中含有`done`
    * 通过`.next()`方法进行下一次迭代，同时返回当前迭代数值以及状态！
* 可以通过函数包裹`.next()`来进一步操作每次迭代的进一步步骤。

### 1.1.1. iterator实现方法

```Javascript
  function promiseCallBack(arr, data) {
        return new Promise((resolve, reject) => {
          arr = arr.concat(data)
          resolve(arr)
        })
      }
  GetFollowerTweets(uids, promiseFn) {
    let allEvents = [],
      it = uids[Symbol.iterator](),
      self = this

    return x(it.next())

    function x(item) {
      if(item.done) {
        return Promise.resolve(allEvents)
      }
      return self.GetTweets(item.value)
        .then((res) => {
          let tweets = res.data.events
          return promiseFn(allEvents, tweets)
            .then((data) => {
              allEvents = data
            })
            .then(() => {
              return x(it.next())
            })
            .catch(Promise.reject)
        })
    }
  }
```

使用`iterator`，使得在返回`done`之前，都要执行`iterator`下一次循环。

* 每次循环除了调用传递进来的`promiseFn`回调之外
* 在其之后，再执行`iterator`下一次循环 - `x(it.next())`
* 直到`done`，返回最后的结果。
* 因为是递归，所以必须每次都`return x(it.next())`才能够保证数组执行解释之后，可以`return Promise.resolve(allEvents)`

## 1.2. 前置 - Promise定义

`Promise`是一个控制 **异步代码执行顺序的实现方式。**

## 1.3. Promise.all实现方法

```Javascript
if (!Promise.map) {
	Promise.map = function(vals,cb) {
		// 一个等待所有被映射的promise的新promise
		return Promise.all(
			// 注意：普通的数组`map(..)`，
			// 将值的数组变为promise的数组
			vals.map( function(val){
				// 将`val`替换为一个在`val`
				// 异步映射完成后才解析的新promise
				return new Promise( function(resolve){
					cb( val, resolve );
				} );
			} )
		);
	};
  }
```

关键在于：

* 将循环放在了`Promise`内部，且是`promise.all`函数，可以在所有执行完毕之后在传递最终的结果。**结果是其中每个`Promise.resolve`得到结果构成的数组**
* 每次迭代都要使用`cb`回调函数。

## 1.4. Q&A

这里存有疑惑，我会在[Promise-自实现-强烈要求阅读]()解析为什么？

```JavaScript
var promise1 = function (cb) {
  return new Promise( function(resolve){
    cb('1', resolve );
  });
}

function callback (value, resolve) {
  // somecode make value be newvalue
  resolve(value)
}
```

此时不需要在`callback`中`return resovle`。因此`resolve in callback`来自外部`new promise(假设为p-new)`。所以`return new Promise`之后就不需要在其中的`function (resolve, reject)`再一次`return resolve`。**resolve(data)只是为了将数据传递到p-new内部**

阅读这段代码：

```JavaScript
promise1.then(function (data) {
  console.log(data)
  return Promise.resolve(data) // 去掉也可以执行
}).then(function (data) {
  console.log(data)
})
```

* 但是如果是`Promise.resolve`方法，就需要`return Promise.resolve()`。`return Promise.resolve()`就是为了让 **后面的`then`获取到数据**
* 仅仅是`return data`也能够传递数据，让 **后面的`then`获取到数据**

即使没有以上的`return`操作，那么还是可以通过`then`方法将链条执行下去。**这是因为`then`自带返回一个`promise`**。

可以将理解为`Promise.resolve(data)`等价为`return new Promise`并执行了`resolve(data)`。(这个`data`可以是`promise`或者普通数据，这里留个坑，在[Promise-实现-TODO]())

## 1.5. Promise.resolve - 更为清晰

> Q&A中提到的`return Promise.resolve(data) - data is promise` or `return new promise - 包裹一个异步代码`是实现链条执行的关键。

> 因为平时写手动写一个`.then().then()`就属于链条控制

1. **实现一个链条**

```JavaScript
var arr = [3, 1, 2]
let iter = function (arr, callback) {
  let start = Promise.resolve()
  arr.forEach(function (item) {
    start = start.then(function () {
      // 按照前面的理论，如果不需要将数据传递下去，不用return
      console.log(item)
    })
  })
}
```

由于`then`自带`return new promise`所以只要我们同步`start`就可以做到链条执行。

2. 以上仅仅只是建立一个`then`链条，**且没有上一条执行的数据，如果我们需要之前的数据**，有以下两种方式：

**简单的第1种 - return data - 仅仅只是传递数据**

> 这是由于`then`函数内部会吧`return`结果绑定到，`then`返回的`promise`上。

```JavaScript
var arr = [3, 1, 2]
let iter = function (arr, callback) {
  // 设置默认数据
  let start = Promise.resolve(1)
  arr.forEach(function (item) {
    start = start.then(function (data) {
      // 简单return data；callback必然也有个返回值
      // return Promise.resolve(callback(data, item))
      return callback(data, item)
    })
  })
  return start
}
function callbakcsync(data, item) {
  return data + item
}
function callbakcasync(data, item) {
  setTimeout(function () {
    console.log(item)
  }, item * 1000)
}
```

`callback(data, item) or Promise.resolve(callback(data, item))`下面都成立：

* 假设`callback`内部没有异步代码 - 由于同步代码的阻塞性质，还是依照`then`的顺序执行
* 而假设`callback`内部含有异步代码 - 那么并不能保证异步代码依照`then`的顺序执行。**因为要明确一点`promise`可以是异步的也可以是同步的，`resolve`在异步函数中执行，这个`promise`才是异步的。如果不是，就是同步的。** 就像是`callbakcasync`作为回调函数，那么如果依照执行链条，就应该是`3,1,2`。但是`1,2,3`对应定时器`1s 2s 3s`

**第2种 - return Promise.resolve(data) or return new Promise - 异步的执行链条**

> resolve异步执行，就能够控制异步代码执行顺序关键

```JavaScript
var arr = [3, 1, 2]
let iter = function (arr, callback) {
  // 设置默认数据
  let start = Promise.resolve(1)
  arr.forEach(function (item) {
    start = start.then(function (data) {
      // 按照前面的理论，如果不需要将数据传递下去，不用`return Promise.resolve()`
      console.log(data)
      return callback(data, item)
    })
  })
  return start
}

function callback (pre, value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = pre + value
      resolve(result)
    }, value * 1000) 
  })
}
iter(arr, callback)
```

结果是`1 4 5 7`。可以发现即使设置`settimeout`的时间为`3s 1s 2s`还是按照了链条顺序发生了。

这是由于首先`callback`中`resolve`被异步执行了，其次`callback`结果是返回一个`promise`。**所以得到是一个异步`promise`**。首先我们可以确定的是`callback().then(fn)`后面`then`一定是等待前面那个`callback`执行了`resolve`之后才会执行后面`fn`。

`then`函数内部，当回调函数得到一个 **异步`promise`**。`then`内部本身返回的`promise`也是被阻塞了，解析见[Promise-实现-TODO]()。

还有一种情况比较复杂，如下：

```JavaScript
var arr = [3, 1, 2]
let iter = function (arr, callback) {
  // 设置默认数据
  let start = Promise.resolve(1)
  arr.forEach(function (item) {
    start = start.then(function (data) {
      // 按照前面的理论，如果不需要将数据传递下去，不用`return Promise.resolve()`
      console.log(data)
      return Promise.resolve(callback(data, item))
    })
  })
  return start
}

function callback (pre, value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = pre + value
      resolve(result)
    }, value * 1000) 
  })
}
iter(arr, callback)
```

令人疑惑的是`Promise.resolve`得到了一个了异步`promise`。那么`then`函数内部的对于`Promise.resolve`怎么处理？还没仔细研究过[留坑]()
