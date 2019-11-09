# CH3 - 异步IO
> 因为我实在无法里面线程部分，所以写的很简单。以后要是学会了，我会补充的！

## 速写

Node中JavaScript是单线程的，但是IO是多线程的。无论是磁盘或者是网络都是可以并行的。而[JavaScript中同步异步]()可以看这里。至于如何处理多个IO线程就不是我们需要考虑的问题了。

* 异步的优点
* Node中异步IO - [Paper353]()开始
  * 事件循环
  * 观察者
  * 请求对象

## 异步IO

文中举例了回调函数的例子。

从解析来看，回调函数的执行并不是调用者执行的，例如`JavaScript`发起文件读取，同时回调文件独处完毕之后干嘛。执行这个回调是文件状态变化之后触发的。

### 非IO的异步

可以类比`JavaScript`中的`settimeout`。

等价`settimeout=0`的是`process.nextTick or setimmediate`后面两个比`settimeout=0`产生的消耗更小。