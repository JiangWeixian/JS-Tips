# 1. Prototype - 操作指南
> 由哪些需要注意的细节

<!-- TOC -->

- [1. Prototype - 操作指南](#1-prototype---操作指南)
  - [1.1. 前置知识 - 引用类型和值类型](#11-前置知识---引用类型和值类型)
  - [1.2. 内建函数差异](#12-内建函数差异)
    - [1.2.1. Object.getPrototypeof](#121-objectgetprototypeof)
    - [1.2.2. Object.prototype.isPrototypeOf()](#122-objectprototypeisprototypeof)
    - [1.2.3. Object.setPrototypeOf() && Object.create()](#123-objectsetprototypeof--objectcreate)

<!-- /TOC -->

## 1.1. 前置知识 - 引用类型和值类型

见[JS-引用类型和值类型](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%E5%B7%AE%E5%BC%82.md) - 同时里面提到了手动修改`prototype`的情况。

## 1.2. 内建函数差异

有几个内建API可以操作`prototype`

* Object.getPrototypeof
* Object.setPrototypeOf()
* Object.prototype.isPrototypeOf()
* Object.create()

```JavaScript
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
Bar.prototype = Object.create(Foo.prototype) // or Bar.prototype = new Foo()
Bar.prototype.speak = function () {}
var bar = new Bar()
```

由[JS-proto&prototype&constructor&new](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-__proto__%26%26prototype%26%26new.md)，可以得到`bar`内部结构为：

```JavaScript
name
label
__proto__ // proto1
  // Bar.prototype
  speak
  __proto__ // proto2
    // 来自Foo.prototype
    myName
    constructor
    __proto__
```

### 1.2.1. Object.getPrototypeof

> `Object.getPrototypeof()` - **获取的是最外层的`__proto__`**。并不是获取`prototype`。

我的意思是获取`a.__proto__`而不是`a.prototype`。在[JS-proto&prototype](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-__proto__%26%26prototype%26%26new.md)中我们知道，其实对象不一定就`prototype`属性。

就像是在[1.2. 内建函数差异]()`bar`内部结构中，我们获取的是`proto1`而不是`proto2`。

### 1.2.2. Object.prototype.isPrototypeOf()

> 有点类似`instanceof`。同时注意这是个`prototype`上的方法，意味着它可以被对象继承，通过`xx.isPrototypeOf`使用而不是`Object.`

类似`instanceof`意味着它会 **递归比较！**

* `Bar.prototype.isPrototypeOf(bar) // true`
* `Foo.prototype.isPrototypeOf(bar) // true`

同样也有和`instanceof`一样的问题，如果`Bar.prototype = {}`，[JS-引用类型和值类型](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%E5%B7%AE%E5%BC%82.md)提到的并不会同步修改`proto1`。此时导致`Bar.prototype.isPrototypeOf(bar) // false`

### 1.2.3. Object.setPrototypeOf() && Object.create()

> 语义上都是设置新的原型。

使用上也有差异：

`Object.setPrototypeOf(bar, xx)`会替换`bar`最外层的`__proto__`(也就是`proto1`)为`xx`。

```JavaScript
function c () {}
Object.setPrototypeOf(bar, c.prototype)

// 首先我们要知道c内部结构
__proto__
  constructor
    prototype
prototype
  constructor
  __prototype
```

因此经过了`Object.setPrototypeOf(bar, xx)`操作之后，`bar`结构变为了：

```JavaScript
name
label
__proto__ // proto1
  // 以下来自function c
  prototype
    constructor
    __prototype
```

而对于`Object.create(c.prototype)`。就像是[1.2. 内建函数差异]()使用的那样，我们先知道`Object.create`返回结果：

```JavaScript
__proto__
  // c.prototype
  constructor
  __proto__
```

正如[JS-引用类型和值类型](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%E5%B7%AE%E5%BC%82.md)提到的那样，如果：

```JavaScript
Bar.prototype = Object.create(c.prototype) // 并不会同步修改proto1
```

想要达到`Object.setPrototypeOf(bar, xx)`一样的效果。必须通过`bar.__proto__ = Object.create(c.prototype)`。

