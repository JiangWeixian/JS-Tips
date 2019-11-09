# CH1-Node.js简介

<!-- TOC -->

- [1. CH1-Node.js简介](#1-ch1-nodejs简介)
  - [1.1. 异步](#11-异步)
  - [1.2. 多线程](#12-多线程)

<!-- /TOC -->

## 1.1. 异步

关于[JavaScript同步异步](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%90%8C%E6%AD%A5%E5%BC%82%E6%AD%A5.md)在这里我已经做了解释。同时[JavaScript主线程和事件队列](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-Promise%26EventLoop%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E9%98%9F%E5%88%97.md)解释在这。

```JavaScript
fs.readFile('/path1', function () {
  console.log('path1')
})
fs.readFile('/path2', function () {
  console.log('path2')
})
```

参考[JavaScript同步异步](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%90%8C%E6%AD%A5%E5%BC%82%E6%AD%A5.md)内回调函数实现，这两个函数执行完成时间长度取决于比较长的那个。

## 1.2. 多线程

解决[CH1-单线程计算量大]()的问题。