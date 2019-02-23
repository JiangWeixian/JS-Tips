# debounce和throttle
> 防抖和节流

## 前置知识 - 两个概念解析

有些操作可能被频繁触发，**并发的操作可能处理不了**。所以有了`debounce and throttle`两种处理方式。

1. 一种通过只让最后一个操作有效
2. 另一个让操作延迟触发，上一个操作只在 **开始操作的xx时间后进行，而且在等待过程中的再次添加的新操作是不允许触发的。**

两个都用到了 **闭包的知识(含有`return function`)**

## debounce

防止抖动函数，**只让最后一个操作生效，且延迟触发**。关键点:

1. 设置`timeout`，既是为了保证只有一个操作，且延迟触发

```JavaScript
function debounce (fn) {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = null
    timer = setTimeout(function () {
      fn()
    }, 1000)
  }
}
```

可以设想一下频繁触发的时候，`timer`是会被清理掉，即使存在。然后再设置`timer`，**只有不再触发**的时候才会实现。

**限制**

只有一个操作能够被实现。

## throttle

这个灵活就更高一些。关键在于 **阈值**

```JavaScript
function throttle () {
  let lastTime = Date.now()
  let delay = 1000
  let timer = null
  return function (fn) {
    let currentTime = Date.now()
    if (timer) {
      return
    } else {
      if (currentTime - lasTime > delay) {
        clearTimout(timer)
        timer = null
        timer = setTimeout(function () {
          lastTime = currentTime
          fn()
        }, 1000)
      }
    }
  }
}
```

之所以说灵活度比较高，是因为上面代码以`currentTime - lasTime > delay`作为阈值。

但是可以修改阈值来实现不同操作，例如：

1. 操作满五次实现进行一次总的操作
2. 结合`requestAnimate`(不知道是不是叫这个名字了) - 自带一个`settimeout`


