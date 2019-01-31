<img src="https://raw.githubusercontent.com/JiangWeixian/JS-Tips/master/img/http.png" height="43px" alt="network"></img>

> 优化都有两面性。例如分开写CSS文件可以优化CSS-DOM构建，但是会增加HTTP请求；同时合在一起写的话，就是刚刚优缺点的调换。**所以注意权衡**。

<!-- TOC -->

- [**内容分类**](#内容分类)
  - [**网络基础**](#网络基础)
  - [**HTTP**](#http)
  - [**网络性能优化**](#网络性能优化)

<!-- /TOC -->

# **内容分类**

## **网络基础**

> 一些和HTTP同等地位的协议解释

> 数据发送到接收，经过怎样的过程

* [网络基础-DNS解析过程](https://github.com/JiangWeixian/JS-Tips/blob/master/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/DNS-%E5%8E%9F%E7%90%86%E8%A7%A3%E6%9E%90.md) / 从`.->com->baidu.com->www.baidu.com`最终获取了`IP`地址
* [网络基础-输入URL到显示全过程](https://github.com/JiangWeixian/JS-Tips/blob/master/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/HTTP-%E8%BE%93%E5%85%A5url%E5%88%B0%E6%98%BE%E7%A4%BA%E9%A1%B5%E9%9D%A2%E4%BB%A5%E5%8F%8A%E8%AF%B7%E6%B1%82%E4%BC%98%E5%8C%96.md) / DNS解析是其中一部分。介绍了`HTML-DOM/CSS-DOM`绘制页面过程
* [网络基础-计算机网络](https://github.com/JiangWeixian/JS-Tips/blob/master/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C.md)
* [DNS-原理]() / 输入链接解析`IP`过程

## **AJAX**
> 异步请求

* [AJAX-前世今生]() / `AJAX`解惑

## **HTTP**

> 前端最为重要的协议；以及基于`HTTP`的魔改应用

* [HTTP-请求头&响应头](https://github.com/JiangWeixian/JS-Tips/blob/master/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/HTTP-request%26response-headers.md) / 要求是背下来

## **网络性能优化**

> 这部分待实践以及完善

* [网络基础-输入URL到显示全过程](https://github.com/JiangWeixian/JS-Tips/blob/master/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/HTTP-%E8%BE%93%E5%85%A5url%E5%88%B0%E6%98%BE%E7%A4%BA%E9%A1%B5%E9%9D%A2%E4%BB%A5%E5%8F%8A%E8%AF%B7%E6%B1%82%E4%BC%98%E5%8C%96.md) / 从网络请求部分优化`CSS/JS`
* [缓存优化]() / 需要前后端配合
