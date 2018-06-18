# 浏览器内核&渲染引擎&JS引擎
> 做主要区分

## 前置知识 - 浏览器内核分类

* 微软 - `trident`
* 火狐 - `gecko`
* Opera - `presto`(**被废弃**)
* `safari`以及**chrome内核原型** - `webkit`

还有**值得注意**的是`blink`，属于`chrome`开发，目前被`opera`和`chrome`采用。**基于webkit开发。**

## 渲染引擎和JS引擎区分

具体渲染原理可见[Browser-渲染器渲染原理](https://github.com/JiangWeixian/JS-Tips/blob/master/Broswer/Browser-%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86.md)

在之前，浏览器内核包括渲染和JS两个引擎系统。而**现在情况有所不同: **

* 一般来说，浏览器内核指的就是渲染引擎。实现具体解析`DOM CSS`过程
* 而`JS`就是解析`JavaScript`，举例来说就是`Chrome V8`就是有名的`JavaScript引擎`，也就是`nodejs`使用的。

## 链接

[浏览器具体组成可见该文](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)
