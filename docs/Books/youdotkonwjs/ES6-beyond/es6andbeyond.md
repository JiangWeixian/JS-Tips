# 你不知道的JavaScript
> ES6

<!-- TOC -->

- [你不知道的JavaScript](#你不知道的javascript)
    - [1. CH1 - ES6](#1-ch1---es6)
    - [2. CH2 - 语法](#2-ch2---语法)
        - [2.1 ES6不同](#21-es6不同)
    - [3. CH3 - 组织](#3-ch3---组织)
    - [4. CH4 - Promise](#4-ch4---promise)
    - [5. CH5 - Collections](#5-ch5---collections)
    - [6. CH6 - New API](#6-ch6---new-api)
    - [7. CH7 - 元编程](#7-ch7---元编程)
    - [8. CH8 - 未来](#8-ch8---未来)

<!-- /TOC -->

## 1. CH1 - ES6 

在`vue`中用的比较多，的确比较好用一些。

希望在`sword2offer`尽量使用`ES6`.

## 2. CH2 - 语法

对于语法的学习：[ECMAScript6](http://es6.ruanyifeng.com/)，这个网站更好一些。

### 2.1 ES6不同

* 出现了块作用域，在块作用域声明的变量。在外部使用，会报错。
    * `ES6`块作用域的方式是`{...}`
    * 之前比较常用的做法是`IIFE`，就像是在`sword2offer/singleton.js`里面那样。
* 支持函数默认参数设置
* 支持像`python`那样返回多个变量，就是`vue projects`中`import { xx, xx, xx} from yyy`
    * 还支持函数参数
* 箭头函数

本章中其他的，还是比较少用到的。

## 3. CH3 - 组织

* 介绍了生成器和迭代器。如何在`ES6`标准下自定义生成器和迭代器。
* 以前是通过`IIFE`模式构造模块，现在可以试一试`export`关键字，不知道在同一文件里面是否可以使用（`export`之后直接使用`export`出来的模块）。
* 有`export`就有`import`，`import`有些语法上的陷阱。值得注意。

## 4. CH4 - Promise

* 如何构造并使用`Promise`
    * `Promise`的`then`其实是含有`thenable`属性，也就是说，我们可以通过定义具有该属性。使得某对象具有`then`方法。
* 生成器和`Promise`，这也是在之前章节就有提到过的。

## 5. CH5 - Collections

集合，含义大概为数据结构，内建的数据结构。

* 类型化数组 - 可缓存区域有关
* 字典 - 
    * 之前有提到`{...}`键值必须是字符串
    * 现在提供了`Map`构造字典
* `sets` - 功能类似`python sets`，里面数据内容唯一，不应该有第二个相同的。

## 6. CH6 - New API

为`ES6`增加的新的`API`。包括：

* `Array`
* `Object`
* `Math`
* `Number`
* `String`

## 7. CH7 - 元编程

太高深。

## 8. CH8 - 未来

介绍可能尚在研发阶段的接口。