# Patterns - 装饰模式
> 扩展原有方法/劫持原有方法/管道函数 - 这些都可以用到装饰模式

<!-- TOC -->

- [Patterns - 装饰模式](#patterns---装饰模式)
  - [前置知识 - 什么是装饰模式](#前置知识---什么是装饰模式)
  - [劫持一个函数 - 装饰器模式](#劫持一个函数---装饰器模式)
    - [封装为一个函数](#封装为一个函数)
  - [管道函数](#管道函数)
    - [总结](#总结)
  - [原生 - 装饰模式](#原生---装饰模式)

<!-- /TOC -->

## 前置知识 - 什么是装饰模式

`new func`和`old func`。既要运行`new func and old func`。

**同时，如果再有一个`new func`，那么上一次的`new func + old func = old func`**。

所以装饰模式可以总结为：

1. `get the old`
2. `make old and new`
3. `update old = old + new`

以及需要封装成链式操作。便于调用。

## 劫持一个函数 - 装饰器模式

> 这里指的是涉及到了装饰模式概念

当你像劫持一个函数，但是又想保持原有函数的全部方法。可以通过

```JavaScript
var oldonload = windows.onload
windows.onload = function () {
  oldonload()
  fn() // 新添加的
}
```

至于这里为什么会被劫持，见[JS-值类型与引用类型区别]()

### 封装为一个函数

```JavaScript
var onload = function (fn) {
  if (typeof fn !== 'function') {
    return
  } else {
    if (typeof windows.onload !== 'function') {
      // 说明是第一次调用onload
      windows.onload = fn
    } else {
      var oldonload = windows.onload
      windows.onload = function () {
        oldonload()
        fn()
      }
    }
  }
}
```

## 管道函数

> 上一个函数结果作为下一个函数输入。之所以介绍这个，个人认为还是有点联系的。而且便于理解真正的装饰函数。

1. `reduce`版本

    ```JavaScript
    var fns = [fn1, fn2, fn3]
    fns.reduce(function (acc, cur) {
      return cur(acc) // 这样每一次acc都得到了更新
    }, 0) 
    ```

    `acc`需要初始化，这是由于`reduce`特性引起的。不然的话，就是将数组第1个数据作为`acc`。

2. `promise`版本

    ```JavaScript
    var fns = [fn1, fn2, fn3]
    var link = function (arr, init) {
      var results = Promise.resolve(init)
      arr.forEach(function (cur, index) {
        results = results.then(function (data) {
          // data是上一步传递过来的数据
          return Promise.resolve(cur(data))
        })
      })
      // 此时得到的results还是一个promise，所以注意如何使用它
      return results
    }
    ```
    
    `promise`的好处在于可以控制 **异步队列**。让它其由同步代码一样的发生顺序。这部分见[JS-Promise-等待循环结束]()

    但是如果`fns`是一个同步函数数组的话，那么就要特别小心，因为对于`Promise.then`是在微任务中执行的，是落后于主线程。参考[JS-浏览器eventloop]()

3. 自定义版本

    > 关键点两个，如何实现链条以及如何传递上一步数值。实现链条的方式由两种，这里我选择`new`一个新的对象。就像是`Promise`那么做的那样。

    ```JavaScript
    function Link(value) {
      this.value = value
    }
    Link.prototype.map = function (fn) {
      // 执行一次fn，就创建一个link。同时更新新link-value
      // 新link-value会用于自己map，一次下一次fn
      return this.of(fn(this.value))
    }
    Link.prototype.of = function (value) {
      // 就是array.of那样，返回一个新的array。这里是新的link
      return new Link(value)
    }
    ```

    自定义版本中目前可能需要手动创建链条，至于写一个函数如何自动链条，见`promise`版本的。

### 总结

从某种意义上来说，上诉第三种比[原生 - 装饰模式](#原生---装饰模式)更具有普遍性意义。

以及对于 **链式调用** 实现的思路都是一样的：

1. 返回一个实例 - `in map`
2. 为了实现第一步 - 调用`map`
3. 在`map`这个函数中调用传入的函数

## 原生 - 装饰模式

> 借助`function`以及闭包这种形式(每个`function`都是`Function`实例)

按照[总结](#总结)以及[前置知识 - 什么是装饰模式](#前置知识---什么是装饰模式)里面提到的

1. 实现一个`after` - 内部返回一个`function`，这个是`Function`实例
2. 在返回的实例中调用 **传入的函数参数`new func`以及之前的`old func`**
3. 将返回的实例作为`oldfunc`，内部含有`oldfunc + newfunc`

**Q&A1： -**如何调用`oldfunc`?

> 由于写在`Funtion.prototype`，所以`after`返回的`function`是一个包含`return function`的函数。类似上面的`Link`

> 因此我们只要保存上一次的`this`，在`return function`中执行。由于闭包具有缓执行特点，所以只要在闭包外面保存就可以做到了。

```JavaScript
Function.prototype.after = function (fn) {
  var self = this
  return function () {
    var ret = self.apply(this, arguments)
    fn.apply(this, arguments)
    return ret
  }
}
```
