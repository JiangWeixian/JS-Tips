# Network

<img src="https://img.shields.io/badge/goodbye-network-FF7139?logo=Mozilla Firefox&style=for-the-badge" />

> 优化都有两面性。例如分开写CSS文件可以优化CSS-DOM构建，但是会增加HTTP请求；同时合在一起写的话，就是刚刚优缺点的调换。**所以注意权衡**。

- [Network](#network)
- [**内容分类**](#%e5%86%85%e5%ae%b9%e5%88%86%e7%b1%bb)
  - [**网络基础**](#%e7%bd%91%e7%bb%9c%e5%9f%ba%e7%a1%80)
  - [**安全策略**](#%e5%ae%89%e5%85%a8%e7%ad%96%e7%95%a5)
  - [**AJAX**](#ajax)
  - [**HTTP&HTTPS**](#httphttps)
  - [**网络性能优化**](#%e7%bd%91%e7%bb%9c%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96)

# **内容分类**

## **网络基础**

> 一些和HTTP同等地位的协议解释

> 数据发送到接收，经过怎样的过程

* [网络基础-DNS解析过程](/Network/DNS-原理解析.md) / 从`.->com->baidu.com->www.baidu.com`最终获取了`IP`地址
* [网络基础-输入URL到显示全过程](/Network/HTTP-输入url到显示页面以及请求优化.md) / DNS解析是其中一部分。介绍了`HTML-DOM/CSS-DOM`绘制页面过程
* [网络基础-计算机网络](/Network/计算机网络.md)
* [TCP-三次握手缺陷](/Network/TCP-三次握手缺陷.md)

## **安全策略**

**同源策略**

* [跨域-代理跨域原理](/) / 跨域只发生在浏览器和服务器之间
* [跨域-CORS/JSOP](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/%E8%B7%A8%E5%9F%9F%E5%A4%84%E7%90%86.md) / 跨域处理的两种方式

**攻击防范**

* [XSS+CSRF](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/xss%2Bcsrf.md)

## **AJAX**
> 异步请求

* [AJAX-前世今生](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/AJAX-%E5%89%8D%E4%B8%96%E4%BB%8A%E7%94%9F%E8%A7%A3%E6%83%91.md) / `AJAX`解惑

## **HTTP&HTTPS**

> 前端最为重要的协议；以及基于`HTTP`的魔改应用

* [HTTP-请求头&响应头](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/HTTP-request%26response-headers.md) / 要求是背下来
* [HTTP-2.0](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/HTTP-2.0.md)
* [HTTPS-解惑](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/HTTPS-%E8%A7%A3%E9%87%8A.md)

## **网络性能优化**

> 这部分待实践以及完善

* [HTTP-输入URL到显示全过程](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/HTTP-%E8%BE%93%E5%85%A5url%E5%88%B0%E6%98%BE%E7%A4%BA%E9%A1%B5%E9%9D%A2%E4%BB%A5%E5%8F%8A%E8%AF%B7%E6%B1%82%E4%BC%98%E5%8C%96.md) / 从网络请求部分优化`CSS/JS`
* [缓存优化](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/HTTP-%E7%BC%93%E5%AD%98%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.md) / 需要前后端配合
* [HTTP-图片性能优化](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/HTTP-%E5%9B%BE%E7%89%87%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.md) / 容易遗忘的一点：图片路径最好不要为空
