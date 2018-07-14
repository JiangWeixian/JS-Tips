# 1. 改变上下文
> call&apply&上下文环境

<!-- TOC -->

- [1. 改变上下文](#1-改变上下文)
  - [1.1. 什么是上下文环境](#11-什么是上下文环境)
    - [1.1.1. 闭包一定要理解](#111-闭包一定要理解)
  - [1.2. call&apply&bind](#12-callapplybind)
    - [1.2.1. bind](#121-bind)

<!-- /TOC -->

## 1.1. 什么是上下文环境

我总结了[youdontkonwjs-相关部分](https://github.com/JiangWeixian/JS-Books/blob/master/youdotkonwjs/scope%26closures/scopeandclosures.md), 第三章之后都可以看.

* 有一句话一定要记住，`this`指向在运行的时候指定
*  `IIFE`这个一定要了解, 因为创建了闭包!!

	```JavaScript
	(function () {
	// some code 
	})()
	```

	在此内部的代码并不会污染外部作用域。执行上下文和闭包并不会冲突

如何准确的判断上下文环境，就像是下面的 **第二段函数**(闭包一定要理解那里)
* 但是如果我们定义了一个对象

	```js
	var a = {
		name: 'a',
		greeting: function () {
			console.log(this.name)
		}
	}
	a.greeting()
	```
	那么问题来了`this.name`会打印出来`a`吗？一定是会的。

**所以可以总结一些原则：**

* `xx.func()`其中`func`中`this`指向就一定是`xx`。
* 如果没有，就要看它在那个函数里面运行。就像是下面那个函数`a()()`是在`windows`环境下运行的
	```javascript
	function a () {
		this.name = 1
		function greeting() {
			console.log(this.name)
		}
		greeting()
		return function () {
			console.log(this)
		}
	}
	```

	1. a() - `greeting`输出`1`
	2. a()() - 输出的`windows`

**特别的例子**是`document.get.onclick = function () { console.log(this) }`这里的`this`是`windows`。为什么？和上面的例子不一样啊。可以看到上面这个代码是链式的操作。所以可以模拟一下，如下：

	```JavaScript
	var a = {
		name: 'a',
		greeting: function () {
			return this
		},
		onclick: function () {
			console.log(this)
		}
	}
	a.greeting().onclick()
	```
	可以发现这里的`this`是`a`这个对象。所以链式操作需要注意一下它的实现方式。

在[JS-this指向总结]()总结了多种可能。

### 1.1.1. 闭包一定要理解

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

那么例子总结一下，什么叫作闭包。**外部`baz`仍然有`foo`内部的引用，这个概念就是闭包。**。扩展开来，外部`baz`（不仅仅是底层）可以访问到同一级别的`foo`内部的变量。因为`baz`和`foo`都处于同一个作用域内部。**baz可以使用bar，以及bar可以使用foo，这就是原因。**

结合[JS-柯里化和反柯里化](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E9%97%AD%E5%8C%85-%E6%9F%AF%E9%87%8C%E5%8C%96.md)理解。还有一点闭包不仅仅局限于上面这种形式，抽象来看，可总结为外部拿到了另一个函数的作用域引用。

> 在`JavaScript(ES5)`中只有函数作用域。所以就变成了上面的形式。

**那么任何这种拿到另一函数作用域应用的行为都可以叫做是闭包！**

[@JS-call.js](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS/JS-call.js)
```JavaScript
function student () {
  var name = Math.random()

  this.showname = function () {
    return name
  }

  this.then = function (callback) {
    callback()
  }

  this.resolve = function (value) {
    console.log(name)
  }
}

var s1 = new student()
var s2 = new student()
debugger
console.log('s1', s1.showname())
console.log('s2', s2.showname())
s1.then(s2.resolve)
// 结果
s1 0.23533474821832367
s2 0.5535273424905633
0.5535273424905633
```

可以发现，对于`s1.then`来说，`callback`拿到了`s2.resolve`的 **作用域引用。** 导致`callback`执行的时候`console.log(name)`寻找的是`s2`内部变量`name`**而不是s1内部的变量**。

进一步！

[@JS-call.js](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS/JS-call.js)
```JavaScript
function chair () {

  var name = Math.random()

  this.showname = function () {
    return name
  }

  this.then = function (callback) {
    callback(name)
  }

  this.resolve = function (value) {
    name = value
  }
}

var s1 = new chair()
var s2 = new chair()
console.log('s1', s1.showname())
console.log('s2', s2.showname())
s1.then(s2.resolve)
console.log('s2', s2.showname())
// 结果
s1 0.05018156202692281
s2 0.8776007730365305
s2 0.05018156202692281
```

很神奇的是，`s2`内部数据被`s1`改变了。研究一下到底发生了什么？

1. `s1.then callback`通过(callback是参数)得到了`s2`内部引用，访问到了`s2`内部数据
2. `in s1.then`传递了`s1`内部数据`name`。通过`name=value`的方式改变了`s2`内部数据

发现即使是没有`this`绑定，还是通过作用域的方式改变内部数据。

## 1.2. call&apply&bind

这三个函数都能够改变上下文环境.

先区别这三个函数:

* `call` - 多个参数，第一个是对象，指定上下文环境，之后是一串的参数列表

* `apply` - 两个参数，第一个和`call`一样，之后数参数**数组**

* `call&apply`除了第一个之外后面参数都是备选的

**来看看调用`call`的例子**,`call&apply`一般是下面例子的格式：

```javascript
Object.prototype.toString.call(a)
```

此时`a`就是上下文环境, 如何在`toString`内部含有`this.xx`的调用, 这个`this`就是指向得`a`. 

如果要给`call`传递额外的参数就是`Objection.prototype.toString.call(a, param1, param2)`.


**来看看调用`apply`** 的例子:

```javascript
// arr = [12,3,4],通过这个函数找出最小数字
Math.min.apply(null, arr)
```

* 可以发现上下文环境为`null`, 说明`min`函数内部不存在`this`调用
* 和`call`不同, 传递的是参数的数组

**这里可以发现一个疑问?** `Object`是有`prototype`的, 而`Math`却没有. 因为`Math`不能够通过`new`创建一个对象. 因此没有`prototype`

### 1.2.1. bind

这个单独领出来, 的确用的比较少. 具体可看[这篇博客](http://web.jobbole.com/83642/)

* `bind`只有一个参数代表上下文环境

不过**注意：**　`bind`会返回一个函数，你需要再一次调用它，而`call&apply`则是立刻调用．



