# 新的API

<!-- TOC -->

- [新的API](#新的api)
  - [优化动画](#优化动画)
  - [Page visibility api](#page-visibility-api)
  - [定位API](#定位api)
  - [文件API](#文件api)
  - [对象API](#对象api)
  - [拖拽](#拖拽)
  - [Web worker](#web-worker)

<!-- /TOC -->

## 优化动画

使用`requestAnimationFrame`来进行动画。因为`setTimeout`以及之类的精度不一致，**精度指的是时间间隔精度不一致**

## Page visibility api

页面是否可见，离开当前页面浏览其他页面的时候，可通过这个`api`查看，**并且离开或者进入的时候会触发一个事件**

帮助就是，利用这个`api`在离开页面的时候做一些事情。

## 定位API

经纬度。

## 文件API

使用之前请好好看书中是怎么用的。

之前是通过`input type=file`来控制文件上传。**在这个基础上，添加了了一些接口函数实现更为细致化的控制**

`files api`读取文件信息(不仅仅是文件名)

* 加载文件之后，作为标签`src`地址
* 上传功能，和`input type=files`类似使用`new Formdata`结合`ajax`上传文件。
* 还可以截取文件部分读取

## 对象API

指的是`window.URL`或者是`window.URL.createObjectURL`

目的是文件`API`读取文件需要将文件内容读取到缓存，然后使用。如果使用这个功能的话，可以直接加载到浏览器，`api`返回的是一块内存地址。

## 拖拽

进一步，不只是拖拽浏览器元素。

而是将系统文件拖拽到浏览器上，还是使用的是`drag`那些事件来监听拖拽的情况。

因为拖拽可以获取文件信息，类似使用`new Formdata`结合`ajax`上传文件。

## Web worker

PWA的核心功能。

* 通过`new Worker(XX.js)` - 会下载`xx.js`这个文件，这只是比较简单的做法。
* 可以理解为简化版本的浏览器，和当前页面不共享作用域。
