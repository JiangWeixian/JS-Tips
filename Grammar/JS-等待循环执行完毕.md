# Iterator 等待循环执行结束
> 在Promise&Eventloop中，没办法解决循环完毕之后在进行某些操作

## 正文

* [ES6-iterator](http://es6.ruanyifeng.com/#docs/iterator)详细讲解版本。
* [参考代码](https://blog.csdn.net/u010176097/article/details/70267279)

核心点：

* array内置了一个`iterator`迭代器（除了array之外还有很多）
* `iterator`迭代器类似循环，不过不同的是，每次迭代都会返回当前状态。如果循环结束，就会在状态中含有`done`
    * 通过`.next()`方法进行下一次迭代，同时返回当前迭代数值以及状态！
* 可以通过函数包裹`.next()`来进一步操作每次迭代的进一步步骤。

### iterator实现方法

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


### Promise.all实现方法

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

这里存有疑惑

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

此时不需要在`callback`中`return resovle`就有使用`then`方法。所以

* `return new Promise`之后就不需要在其中的`function (resolve, reject)`再一次`return resolve`。已经得到一个一级的`promise`链接。

阅读这段代码：

```JavaScript
promise1.then(function (data) {
  console.log(data)
  return Promise.resolve(data) // 去掉也可以执行
}).then(function (data) {
  console.log(data)
})
```

* 但是如果是`Promise.resolve`方法，就需要`return Promise.resolve()`。`return Promise.resolve()`就是为了让 **后面的`then`获取到数据，但是如果我们没有数据需要传递，那么还是可以通过`then`方法将链条执行下去。**

因此我们有了更为清晰的方法

### 更为清晰的方法

```JavaScript
var arr = [3, 1, 2]
let iter = function (arr, callback) {
  let start = Promise.resolve()
  arr.forEach(function (item) {
    start = start.then(function () {
      // 按照前面的理论，如果不需要将数据传递下去，不用`return Promise.resolve()`
      console.log(item)
    })
  })
}
```

**如果我们需要之前的数据**

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
```

我们执行

```JavaScript
iter(arr, function (pre, value) {
  return pre + value
}).then(function (data) {
  console.log(data)
})
```

可以得到`1 4 5 7`

但是我们 **需要考虑如果`callback`是一个执行比较久的函数。** 因为使用`setTimeout`模拟，为了获取`callback`结算结果，我们使用了`return new Promise`的方法。可以发现即使设置`settimeout`的时间为`3s 1s 2s`还是按照了链条顺序发生了。

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
```

```JavaScript
function callback (pre, value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = pre + value
      resolve(result)
    }, value * 1000) 
  })
}
```

* 关键在于`setTimeout`中回调结果被`promise`传递。
* 如果`callback`实际中不是以`settiment`方式实现的执行时间过程。那么就直接可以使用`return Promise.resolve(callback(data, item))`