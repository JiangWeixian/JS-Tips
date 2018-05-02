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

* 将循环放在了`Promise`内部，且是`promise.all`函数，可以在所有执行完毕之后在传递最终的结果。
* 每次迭代都要使用`cb`回调函数。