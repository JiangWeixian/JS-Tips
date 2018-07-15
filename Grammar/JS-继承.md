# 继承
> 一切都是Object

<!-- TOC -->

- [继承](#继承)
  - [前置知识 - 一切都是Object](#前置知识---一切都是object)
  - [前置知识 - JS数值类型以及引用类型](#前置知识---js数值类型以及引用类型)
  - [前置知识 - `__proto__ && prototype`](#前置知识---__proto__--prototype)
  - [继承](#继承-1)
    - [ES6-继承](#es6-继承)
  - [实践Tips - 调用父类仔细了解](#实践tips---调用父类仔细了解)
    - [两种方式的区别](#两种方式的区别)

<!-- /TOC -->

## 前置知识 - 一切都是Object

JS中类型有

* `Boolean`
* `Number`
* `undefined`
* `String`
* `Symbol`(ES6)

以及

* `object`

`Array and function`可以归结为`object`

这么多，不可能一切都是`Object`，的确使用`typeof`能够得到以上类型。

而问题就在于，如果我们通过`new`来创建，例如`var a = new Number()`创建，使用`typeof`判断得到并不是`number`而是`object`。

此时`instanceof`就优于`typeof`，因为它不受到影响。

```javascript
b instanceof a
```

**但是目前最常用的还是toString方法，应该来说是魔改过的toString**。和传统的`typeof a`不同，我们使用`Object.prototype.toString.call(a)`，我们可以得到`[object number]`

因此，使用顺序为`Object.prototype.toString.call(a)>instanceof>typeof`，但是如果`new`创建的是自己的实现的类 **第二种方式**是更适合采用的结果。

具体见[typeof&instanceof&prototype相关判断]()

## 前置知识 - JS数值类型以及引用类型

没错JS存在引用类型，除了`Object && Array`之外都是数值类型。

引用类型有什么问题，请看[这篇文章](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%E5%B7%AE%E5%BC%82.md)

## 前置知识 - `__proto__ && prototype`

* `__proto__`总是一层层的向上指，直到尽头，指向`原型.prototype`
* 也就是说如果我让`prototype`的 **存放的东西变化**，就能够实现继承

## 继承

```javascript
function Foo(name) {
	this.name = name;
}

Foo.prototype.myName = function() {
	return this.name;
};

function Bar(name,label) {
	Foo.call( this, name );
	this.label = label;
}
```

1. 因为`new`可以创建指针，所以`Bar.prototype = new Foo()`改变`prototype`这个指向。
2. `Object.create`同样有创建指针的工作。因此可以通过`Bar.prototype=Object.create(Foo.prototype)`

如果对象是以下这种形式的

```javascript
var Foo = {
	init: function(who) {
		this.me = who;
	},
	identify: function() {
		return "I am " + this.me;
	}
};

var Bar = Object.create( Foo );

Bar.speak = function() {
	alert( "Hello, " + this.identify() + "." );
};
```

3. 同样是`Object.create`，通过`var Bar = Object.create( Foo );`

第二点和第三点有什么区别？

* 第一点和第二点都要再通过`new Bar`来创建一个对象，而第三点不用。
* 添加额外的函数`Bar.speak`而前面两个是`Bar.prototype.speak`
* 如果直接打印`Bar`（第二点和第三点），可以发现第三点的`__proto__`更少，指向更清晰。

**注意1：** 上面我们通过了`init`而不是直接再`Foo`上添加`me`属性，原因在于 **直接在添加会让所有下面的继承和实例共享。**通过`init`替代了`constructor`可以在之后构建中将`this`指向`Bar`，具体可以见[JS高级程序设计-继承最佳实践](https://github.com/JiangWeixian/JS-Books/tree/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH4-%E5%8F%98%E9%87%8F%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%86%85%E5%AD%98)

**注意2：** 如果直接使用`Bar.prototype = Foo.prototype`虽然起到了指向作用，但是`Foo.prototype`并不是新创建的，所以指向的是原始的`Foo`。任何一方的改动都会影响到两者。

### ES6-继承

添加了`class`关键字，[MDN教程](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)

如果你会`python`，理解起来没差别。


## 实践Tips - 调用父类仔细了解

`JavaScript`实现类有几种方式。最佳实践见[JS高级程序设计-继承最佳实践](https://github.com/JiangWeixian/JS-Books/tree/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH4-%E5%8F%98%E9%87%8F%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%86%85%E5%AD%98)

**第一种方式**

包括像[stack.js](https://github.com/JiangWeixian/JS-Books/blob/master/JS%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%88/stack.js)方式,在`function`中使用`this`,通过`constructor`来实现方法。

**第二种方式**

就是以上在`prototype`的方式.

**注意`Foo.call(this)`是实现继承的关键。因为要改变`this`指向**

### 两种方式的区别

虽然两个都能够实现类的方式,区别在于:

1. 第一种方式只能够通过`xx.prototype = new YY()` - 因为`this`只有在`new`创建的时候指定。这部分还有可能导致全局变量的污染(当直接使用`YY()`)
2. 而 **第二种方法创建的类都行**

因为第一种方式的限制,因此第一种方式实现的继承

1. 可以重写方法,但是无法调用父类的方法再重写 - **因为YY()上面的方法没有`new`就无法访问**

以上`prototype`分为`function or object`

1. `function`调用父类 - `yy.prototype.somefunc.call(this)`
2. `object`调用父类 - `yy.somefunc.call(this)`

