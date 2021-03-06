# 你不知道的JavaScript
> scope&closures(作用域和闭包)

- [你不知道的JavaScript](#你不知道的javascript)
	- [1. CH1 - 什么是作用域](#1-ch1---什么是作用域)
		- [1.1 LHS/RHS](#11-lhsrhs)
	- [2. CH2 - Lexical Scope(词法作用域)](#2-ch2---lexical-scope词法作用域)
		- [2.1 查找词法作用域](#21-查找词法作用域)
		- [2.2 欺骗](#22-欺骗)
	- [3. CH3 - 函数作用域和块作用域](#3-ch3---函数作用域和块作用域)
		- [3.1 函数作用域](#31-函数作用域)
			- [3.1.1 函数声明和函数表达式](#311-函数声明和函数表达式)
		- [3.2 块作用域？](#32-块作用域)
			- [3.2.1 ES6 + 块作用域](#321-es6--块作用域)
	- [4. CH4 - 作用域/语法进阶](#4-ch4---作用域语法进阶)
	- [4.1 再一次LHS/RHS](#41-再一次lhsrhs)
	- [5. CH5 - 闭包](#5-ch5---闭包)
		- [5.1 模块](#51-模块)
			- [5.1.1 ES6 + 模块](#511-es6--模块)
		- [5.2 IIFE和闭包](#52-iife和闭包)
		- [5.3 循环+闭包](#53-循环闭包)
	- [6. 附录A](#6-附录a)
	- [7. 附录B](#7-附录b)
	- [8. 附录C](#8-附录c)
	- [9. 总结](#9-总结)


## 1. CH1 - 什么是作用域

指出，`JavaScript`是一种**动态编译语言**。

理解作用域从三个方面：

* 引擎（类似`chrome`）
* 编译器
* 作用域

其实对于一条普通的语句，编译通过作用域"分词"，通过引擎通过作用域复制。

可以发现**作用域**是链接编译器和引擎的枢纽，或者是使得两者工作的重要纽带。

### 1.1 LHS/RHS

`LHS/RHS`的知识有没有用，不太清楚，感觉太理论。以下就简单的记录一下。

查找一个变量进行的是`RHS`操作，赋值操作的是`LHS`。

> `L/R`分别代表的是等式的左边或/右边，但是我认为，查找和赋值的区分更好理解。

**注意：** 函数参数的隐含赋值（LHS）

## 2. CH2 - Lexical Scope(词法作用域)

可以理解为 **词法** + **作用域**。

作用域在之前就已经提到过了，和`{...}`该符号密切相关。

词法就是在 **CH1 - 什么是作用域**提到了的编译第一步，分词。先要知道，一条语句，分多少的词。

### 2.1 查找词法作用域

* 冒泡形式，从下到上不断查找。
* 当第一个变量被找到的时候，就停止查找。
  
一般来说，`JS`中提到的作用域指的是就是词法作用域，作用域语言在书写的时候就确定了。可以在 [这里](https://stackoverflow.com/questions/17279437/lexical-scope-closures-in-javascript) 找到解释。

### 2.2 欺骗

`JavaScript`某些语句可以创建自己的作用域。（不改变上下文的那种，此作用域内部变量都属于新的那种）。

* `eval`和`with`，这两个都不要使用！！！
* `settimeout`之类，也会有这种效果。以前使用过程中也是遇到过了。

## 3. CH3 - 函数作用域和块作用域

### 3.1 函数作用域

函数作用域正如之前了解的那样，高层函数作用域的变量可以被底层的访问到。这就会导致一些问题，所以要注意：

* 有些时候函数嵌套函数，会比把函数暴露出去有用
* 由于函数作用域特性（底层也可以访问），所以要注意不要覆盖。比如高层有变量`i`，底层如果`i=3`会导致覆盖，而`var i = 3`则不会覆盖。

避免这些问题，文中提到的一个解决方案就是**命名空间**，类似`using namespace std;`，这部分只是在《设计模式》书中应该会有提及。

#### 3.1.1 函数声明和函数表达式

```JavaScript
function foo() { // <-- 插入这个

	var a = 3;
	console.log( a ); // 3

} // <-- 和这个

(function foo(){ // <-- 插入这个

	var a = 3;
	console.log( a ); // 3

})(); // <-- 和这个
```

以上两段代码不同点在于，一个是函数声明一个是函数表达式。

* `function`开头的是函数声明，不然就是表达式
* 第二段代码中表达式最后的`()`，让程序立刻执行这个表达式。称之为`IIFE`

 **注意**，IIFE是可以传入参数的。

### 3.2 块作用域？

我的记忆中，`JavaScript`是没有块作用域这个概念的。

一般其余的代码语言都有这个概念，块作用域的概念在于：

```JavaScript
for (var i=0; i<10; i++) {
	console.log( i );
}
```

如果**块作用域**概念成立，那么`i`仅仅属于`for`，外部是无法访问的。可是，`JavaScript`是没有这个概念的，所以这个`i`还是会被外部访问到，也就是说如果，你立马跟着一句`console.log(i)`，那么结果将会是`10`。

所以除了`function`的`{}`，之外所有语句带有`{}`，一句其中声明的变量都属于`function(){}`或者全局。

**注意：**正如**2.2 欺骗**所提到的，有些语句会包裹一个新的作用域。这就有点像**块作用域**。所以特殊情况下，以下会导致块作用域：

* `eval`  - 不要使用
* `with` - 不要使用
* `try catch` - 小心使用，在`catch`内部具有块作用域。

#### 3.2.1 ES6 + 块作用域

其实块作用域还是比较有用的，所以`ES6`还是改进了这不部分。

* `let` - 只要是`let`声明的变量，只能在当前的`{}`内部使用，外部无法访问。
* `const` - 块作用域这一特点还是和`let`类似。自身特点是**常量**。

## 4. CH4 - 作用域/语法进阶

## 4.1 再一次LHS/RHS

**明确一点，声明(LHS)永远在赋值(RHS)之前**。

```JavaScript
a = 2;

var a;

console.log( a );
```

执行的顺序永远是：

* `var a`
* `a = 2`
* `console.log(a)`

这一点即使在函数作用域内部也是可以成立的。

但是对于函数有一个特例：

```JavaScript
foo(); // 不是 ReferenceError， 而是 TypeError!

var foo = function bar() {
	// ...
};
```

以上依然报错。总结来说就是`var foo = function bar()`并不是函数声明而是表达式（因为它不是`function`开头的？），能做的就是先`var foo`。（`foo`是一个函数名）

以及，我们不要重复定义同名函数，特别是在同一个作用域中（当然了一般也没有人这么做）。原因在于：

* `function foo`
* `var foo`

两者具有优先级，前者优先级别高。**虽然在第一条代码情况下，var foo会被忽略。但是如果在之后含有var foo = function(){}(因为var =foo被提前)。仍然会出现错误。**

## 5. CH5 - 闭包

其实**闭包**的概念，之前就已经了解了。**即，底层作用域可以访问高层作用域变量**。不过，这是对闭包比较浅薄的理解。

最直接的理解例子：

```JavaScript
function foo() {
	var a = 2;

	function bar() {
		console.log( a );
	}

	return bar;
}

var baz = foo();

baz(); // 2 -- 哇噢，看到闭包了，伙计。
```

那么例子总结一下，什么叫作闭包。**外部`baz`仍然有`foo`内部的引用，这个概念就是闭包。闭包就是函数能够记住并访问它的词法作用域，即使当这个函数在它的词法作用域之外执行时。**。

以上面的代码为例子，`bar`可以访问`foo`的权利。现在有一个`baz`得到了`bar`这个内部函数。`baz` 还是可以访问到 `foo` 内部数据。

扩展开来，外部`baz`（不仅仅是底层）可以访问到同一级别的`foo`内部的变量。因为`baz`和`foo`都处于同一个作用域内部。**baz可以使用bar，以及bar可以使用foo，这就是原因。**

### 5.1 模块

之前，一直使用的是利用`prototype`给定义函数添加方法属性。然后通过`new`关键字创建模块。

但是这里好像对模块和类做了区分，之前**this&objprotoype**中创建的是类。而不是模块？这一点很难理解。

不过观察其中代码发现，模块的写法有几个特点（区别与类）：

* 和原型链好像没什么关系，没有`new/object.create`之类
* 有返回值（返回的是内部函数，决定哪些可以暴露出来的属性方法），通过执行模块函数。获取模块内部属性参数。

其模块的写法模板为：

```JavaScript
function CoolModule(id) {
	function identify() {
		console.log( id );
	}

	return {
		identify: identify
	};
}

var foo1 = CoolModule( "foo 1" );
var foo2 = CoolModule( "foo 2" );

foo1.identify(); // "foo 1"
foo2.identify(); // "foo 2"
```

甚至有一些模块定义的库，可以了解一下。

#### 5.1.1 ES6 + 模块

增加了`export`关键字，通过`export xx`把一个`xx`作为模块导出。

更多关于`export`的用法，可以查看`ES6`。

### 5.2 IIFE和闭包

以下代码不能理解，但的确发生了。记录一下，以免忘记。

```JavaScript
var gimmeSomething = (function(){
	var nextVal;

	return function(){
		if (nextVal === undefined) {
			nextVal = 1;
		}
		else {
			nextVal = (3 * nextVal) + 6;
		}

		return nextVal;
	};
})();

gimmeSomething();		// 1
gimmeSomething();		// 9
gimmeSomething();		// 33
gimmeSomething();		// 105
```

### 5.3 循环+闭包

超时的回调函数都将在循环的完成之后立即运行，即便回调函数立马执行。可以解释`settimeout`的bugs。

```Javascript
for (var i=1; i<=5; i++) {
	setTimeout( function timer(){
		console.log( i );
	}, i*1000 );
}
```

由于没有块概念，且使用了`var`。因此每次`for`其实只有一个`i`存在于作用域。假设使用了`let`，那么相当于定义了多个作用域，且每个作用域都有一个`i`。

## 6. 附录A

正如[thisandobjprototype](../this&objprototypes/thisandobjprototypes.md)其中**2.1.1 隐式转换**所提到的那样。

`this`的指向在调用时候改变，这有点像动态作用域。

那么按照这样理解，本附录的代码不应该如此输出才对。原因出在哪里？

其实很好理解，因为[thisandobjprototype](../this&objprototypes/thisandobjprototypes.md)明明说的就是`this`，本附录的代码明明就没有`this`，又哪里来的`this`指向改变。

## 7. 附录B

再一次介绍了`let`块作用域，以及用`ES6`之前语法构成块作用域的弥补库.. 

## 8. 附录C

介绍了`ES6`关键符号`=>`，解决的是`this`绑定的问题。

`=>`是将外层作用域的`this`绑定到上面。

## 9. 总结

* 介绍了`JavaScript`编译之类的相关知识（不深）
* 函数作用域和块作用域
* LHS/RHS
* 闭包、模块的写法
    * `ES6`的表现