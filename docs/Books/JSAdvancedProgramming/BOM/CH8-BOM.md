# BOM
> 简单介绍

## frameset&frame

这方面实在接触太少，以后等到接触比较多的时候在看。

如果含有多个`frame`，可以通过`windows`来访问不同的`frame`

* top 指向最外围框架
* parent 指向包括当前框架的框架

## 调整window

位置和大小调整好像没成功过。因为可能是被禁用的？

## setimeout&setinterval

用`settimeout`来模拟`setinterval`比较好。

注意`clearout setinterval`，而`settimeout`如果处于释放内存的考虑，没有必要。因为 **在调用结束之后**会自动销毁。

## location

地址栏里面基本都能够获得，甚至有帮你分割好数据的属性。

例如：

* hash
* port

之类

如果修改这些属性的话，会同步修改地址栏，然后定向。

### 打开窗口的方式

* `windows.location.assign('http://www.baidu.com')`
* windows.location = '' or location.href = ''
* windows.open('')

**注意带有`http://`**

## navigator

区分不同浏览器，能够检测插件`.plugins`。

## screen

用处不大

## history

操作浏览器历史记录。

`history.go(str)`会跳转到最近的具有`str`的地址中。