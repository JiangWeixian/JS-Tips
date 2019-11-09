# 你不知道的Javascript 
> 走进Js - 阅读笔记

<!-- TOC -->

- [你不知道的Javascript](#你不知道的javascript)
    - [1. CH1](#1-ch1)
        - [1.1 总结](#11-总结)
    - [2. CH2](#2-ch2)
        - [2.1 typeof以及obj](#21-typeof以及obj)
        - [2.2 类型转换](#22-类型转换)
        - [2.3 作用域初步](#23-作用域初步)
        - [2.4 函数](#24-函数)
            - [2.4.1 严格模式/立刻执行某函数](#241-严格模式立刻执行某函数)
            - [2.4.2 闭包初步](#242-闭包初步)
    - [3. 总结](#3-总结)

<!-- /TOC -->

## 1. CH1

* 浏览器/console更多用法  
    介绍了控制台的[用法](http://blog.teamtreehouse.com/mastering-developer-tools-console)，不仅仅只有`console.log`
* 类似c语言中的强制类型转换
    ```javascript
    var a = "42";
    var b = Number( a ); // 还有String以及Boolean

    console.log( a );	// "42"
    console.log( b );	// 42
    ```
* 声明常量在`ES6`中，用`const`代替`var`

### 1.1 总结

大部分已知，唯一值得注意的是，**执行代码最快的方法是就是将代码放到浏览器控制台中执行！**

## 2. CH2

### 2.1 typeof以及obj
`Javascript`的内置类型（必须要知道）:

* `string`
* `number`
* `boolean`
* `null and undefined`
* `object`
* `symbol`

**注意：**  其中`object`应该比较通用，几乎所有东西都是`obj`，包括什么`arr`，字典，`func`之类的。

* 通过`typeof判断类型`
* `NaN`是唯一一个自身不等于自身的变量

### 2.2 类型转换

在JavaScript中`falsy`的明确列表如下：

* "" （空字符串）
* 0, -0, NaN （非法的number）
* null, undefined
* false

`falsy`含义就是转换为`boolean`的时候就会转换为`false`。所以

* 显式类型 - CH1有类型转换的例子。
* 隐式类型 - 一些比较符号会将两个**类型不同**变量进行类型转换，`obj->str->int`
* `===` - 是强制禁止转换的比较的。

综合来说就是，如果我们使用`Boolean([])`或者`if([])`那么表达式要根据`falsy`列表来。另外的如果使用`==`，那么就要根据第二条隐式转换公式。举例来说就是：

```Javascript
true == [] // []->""->0, false

true == [1] // [1]->"1"->1, true->1。所以true

true == [1,2] // [1,2]->"1,2"->NaN。所以false

```

但是如果不使用`==`判断的话，情况就会出现另外的变化。

### 2.3 作用域初步

* 函数作用域 - 外层无法访问内部，内部可以访问比它高级的作用域。
    ```javascript
    function foo() {
	var a = 1;

	function bar() {
		var b = 2;

		function baz() {
			var c = 3;

			console.log( a, b, c );	// 1 2 3
		}

		baz();
		console.log( a, b );		// 1 2
	}

	bar();
	console.log( a );				// 1
   }
    ```

    foo无法访问b，baz却可以访问c

* 在`ES6`之前，类似`if`语句的作用域若是嵌套在`foo`中，则`foo`还是可以访问到。  
   若以`let`代替`var`，就可以令某一变量专门属于if，而`foo`无法访问。

* 不使用`var`声明的变量，自动全局。

### 2.4 函数

函数获取输入到自身的参数的方法是，`arguments[index]`。`ES6`支持设置函数默认参数。

#### 2.4.1 严格模式/立刻执行某函数

* `use strict`可以写在函数内部，使得该函数标准为严格模式！
* 立刻执行某函数 - 
    ```javascript
    var a = 42;

    (function IIFE(){
        var a = 10;
        console.log( a );	// 10
    })();

    console.log( a );		// 42
    ```
   中间那样的写法立刻执行，`IIFE()`，而且在其中可以声明和外部一样的变量。而不会改变外部变量的数字。

#### 2.4.2 闭包初步

闭包简单来说类似在**2.3**中，`baz()`可以访问`foo()`的数据。闭包使用例子，就是将某函数创建成一个模块。

`this`相关介绍: 

* `a.call(b)`可以将a绑定到b上。
* 全局的`this`，有的时候是`windows`。

## 3. 总结

* 谷歌浏览器`console`高级用法。
* 简单介绍了一下闭包，低级作用域访问高级作用域
* 立即执行某个函数
* 严格模式全局模式/函数模式，只是区别在写的位置