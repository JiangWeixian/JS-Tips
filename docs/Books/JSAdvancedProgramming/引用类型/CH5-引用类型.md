# 引用类型
> 介绍类型中基本方法。具体使用就看文档就好了。

<!-- TOC -->

- [引用类型](#引用类型)
  - [有哪些](#有哪些)
  - [Array](#array)
    - [判断Array](#判断array)
  - [Reg](#reg)
    - [String](#string)
  - [全局方法](#全局方法)

<!-- /TOC -->

## 有哪些

都有`toString or toLocaleString`方法。

* Array - 有那些方法要大概知道。
* Date
* RegExp
* String
* Function

## Array

要知道那些是改变原有数组，那些不会，以及遍历数组的方法。

以下会改变原有数组

* reverse
* sort
* push
* splice
* shift
* pop
* unshift

而有一些则有返回值。

其中`toString or toLocaleString`区别在于：

* 一个是对整个对象调用`toString`
* 对里面每个对象来调用`toLocaleString`

### 判断Array

要么是`Object.prototype.toString.call or Array.isArray()`

## Reg

格式为`//(匹配模式g or i or m 写在这里)`

**内置方法**

1. exec - **只能够得到一个结果，无论是否是g模式**，继续执行的话才会返回继续匹配。
2. test - 返回是否匹配的`false or true`

**得到一个结果是什么意思需要理解一下！**

![exec](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH5-%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B/img/exec.png)

整个`//`内的为一个结果，以`matches[0]`查看。

但是结果有 **分组**，**分组顺序以`()`分配，所以就有了`matches[1 or 2]`**

### String

和`reg`相关的方法。通过`string.xx`

* match - 类似`exec`
* search - 返回第一个 **匹配结果**的index
* replace - 第一个为`reg`，想要全部替换，必须为`global`模式

## 全局方法

`encodeURI and decodeURI`以及`encodeURIComponent or decodeURIComponent`

编码解码`url`中特殊字符。类似于将` `替换为`%20`。后者比前者强大，可以编码`url`地址中的`/`。

