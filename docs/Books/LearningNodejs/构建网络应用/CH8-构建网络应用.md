# 构建Web应用
> Web需要的基本知识

<!-- TOC -->

- [1. 构建Web应用](#1-构建web应用)
  - [1.1. 原生基本知识](#11-原生基本知识)
  - [1.2. cookie](#12-cookie)
    - [1.2.1. 性能](#121-性能)
  - [1.3. session](#13-session)
    - [1.3.1. 字符串查询](#131-字符串查询)
    - [1.3.2. 缓存问题](#132-缓存问题)
  - [1.4. 安全](#14-安全)
    - [1.4.1. XSS](#141-xss)
    - [1.4.2. csrf](#142-csrf)
  - [1.5. 数据上传](#15-数据上传)
  - [1.6. 性能](#16-性能)
    - [1.6.1. 对于数据上传](#161-对于数据上传)
  - [1.7. 路由和中间件](#17-路由和中间件)
  - [1.8. 页面渲染 - 个人觉得很重要](#18-页面渲染---个人觉得很重要)
    - [1.8.1. 下载](#181-下载)
  - [1.9. SSR](#19-ssr)

<!-- /TOC -->

## 1.1. 原生基本知识

原生Nodejs就带有很多解析字符串之类的方法和函数。

## 1.2. cookie

关于[cookie](https://github.com/JiangWeixian/JS-Books/tree/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH22-%E7%A6%BB%E7%BA%BF%E5%BA%94%E7%94%A8%E5%92%8C%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%BC%93%E5%AD%98)介绍，在JS高级程序设计已经解释过了。

* 服务器通过`set-cookie`来设置客户端`cookie`。但是 **客户端可以供过`document.cookie`来设置，最好通过设置`httponly`来限制`document.cookie`无法使用**。客户端是通过`secure`的`cookie`字段。

### 1.2.1. 性能

* cookie不要太大
* httponly
* 不同域名设置不同`cookie`，类似只设置了`baidu.com`下面的`cookie`那么所有`baidu.com`下面的`path`都会发送。

## 1.3. session

cookie和session成对出现。

文中一般设置在`req.session`设置或者修改，借助`req`全局性，然后通过获取`req.session`(已经重新设置或修改过了)然后设置到`res.cookie`中。

设置方法如下：

![sessionincookie](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E5%AD%A6%E4%B9%A0Nodejs/CH8-%E6%9E%84%E5%BB%BA%E7%BD%91%E7%BB%9C%E5%BA%94%E7%94%A8/img/%E8%AE%BE%E7%BD%AEcookie%E4%B8%8A%E7%9A%84sessionid.PNG)

### 1.3.1. 字符串查询

就是url地址上查询方式。**将sessionid放到地址上。**

文中提到一个重定向方法，就是如果url上没有sessionid，那么就设置重定向，关键在于`res`中`location`的值，以及302状态码字。服务器会重定向到`location`上面。

### 1.3.2. 缓存问题

session一般存储在`redis`上面，一般和`session`的存储服务保持很长的连接。减少网络消耗。因为网络消耗的事件是大于硬盘的。

## 1.4. 安全

具体可见[xss-csrf](https://github.com/JiangWeixian/JS-Tips/blob/master/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/xss%2Bcsrf.md)分析。

### 1.4.1. XSS

脚本攻击，前端解析字符串之后，直接`innerHTML=一些数据`。如果这些数据带有`script`脚本，就会被解惑`cookie`

### 1.4.2. csrf

**不和xss攻击一起考虑**

向同一个域名发送数据会发送`cookie`。复制一份表单到新的页面，表单上的`path`就是目标地址，然后发送数据时候会发送`cookie`。导致了`csrf`

为了预防，**加上随机token**，在以下情况下，页面时候服务端返回的，所以`.html`文件是由模板生成，可以带有服务端随机的生成的随机码。**复制一份表单到新的页面并不能够获取到这个随机码，因为每次发送请求都会改变**

同时网上说的`jwt`可以预防，我存有疑惑，因为`jwt`一般放在`localstorage`，所以在不考虑`xss`情况下。这个是可以预防的。

**和xss攻击一起考虑**

所以我们不能使用`localstorage`中的`jwt`，但是可以考虑使用`sessionstorage`里面的数据。

## 1.5. 数据上传

不同数据上传需要设置不同的`content-type`。然后在服务进行对应解析。在`on data`事件中暂存到buffer，然后进一步处理buffer

* 表单 - 一般就是`name=xx&job=yyy`格式
  * 前端 - application/x-www-form-urlencoded
  * 服务器 - queryString
* json&xml
  * 前端 - 为application/json
  * 后台 - JSON解析，xml需要转换为json
* 文件
  * 前端 -  multipart/form-data
  * 后台- 通过 formidable 

## 1.6. 性能

关于这部分，我之前总结过[一篇文章](https://github.com/JiangWeixian/JS-Tips/blob/master/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/HTTP-%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.md) - 前三个客户端/服务器都能够设置，后面两个服务器设置，然后客户端再下一次请求的时候发送。

文中提到的最佳实践和总结的一样，设置一个永远不会到期的时间，然后通过服务器控制 **文件名**来实现客户端更新。

### 1.6.1. 对于数据上传

* 限制数据大小
* 通过`stream`形式(就是先将数据读取到磁盘中然后处理数据，直接解析数据是在内存中)解析，就像是读取文件那样。

## 1.7. 路由和中间件

解析的是`express`框架中，`use`使用路由，和中间件的解析。

中间件是匹配所有路由的方法，用来处理数据。

看完只有一个感觉，你还是使用路由吧。

## 1.8. 页面渲染 - 个人觉得很重要

这里指的是将服务器发送的数据直接渲染到浏览器。也就是`SSR`

因为通过设置`res.writeHead`可以控制浏览器如何处理`SSR`。

文中提到了`mime`判断文件类型(可以写到head那种)

### 1.8.1. 下载

`Content-Disposition: attachment; filename="filename.ext" `浏览器弹出窗口下载。

## 1.9. SSR

通过`res.end()`发送页面数据。让浏览器渲染。

