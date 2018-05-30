# __proto__ && prototype && new

<!-- TOC -->

- [__proto__ && prototype && new](#__proto__--prototype--new)
  - [前置知识](#前置知识)
  - [__proto__ && prototype 进一步](#__proto__--prototype-进一步)
  - [new 关键字](#new-关键字)
  - [分析为什么能够继承？](#分析为什么能够继承)
  - [链接](#链接)

<!-- /TOC -->

## 前置知识

1. 这三个数值怎么查看？
  1. 通过`new Foo`或者`var a = {}`可直接查看
  2. `function Foo () {}`无法直接查看，但是可以通过`Foo.__proto__`看到

2. `prototype`存在哪里？以上方式创建，`prototype`存在在`construtor`内，而`construtor`存在在`__proto__`内

  > 可总结__proto__包含construtor，construtor包含prototype。而这仅仅是一层次关系，因为prototype可以指向父级。包含父级的__proto__ && construtor

3. 什么是原型？
  * JS中有[几大数据类型](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E7%BB%A7%E6%89%BF.md)，这些就是原型(至于这些数据类型又指向`Object`)就是另外一回事。
  * 原型 = `Number or String etc...`

4. 引用类型。特别涉及到`__proto__ && prototype && construtor`的时候，可以理解为指针。那么其中任意一个赋值都不是简单的赋值，而是指针的传递。

5. `new`关键字会创造原型

## __proto__ && prototype 进一步

* `__proto__ && prototype && construtor`指向问题？
  * `__proto__`默认指向原型(见上一条)，第三第五点。更准确的说是`原型.prototype`
  * `construtor`指向的是谁构造了它。如果直接`function foo () {}`那么`foo construtor`指向就是`object`
  
  > new关键词会创造原型，因此`var newfoo = new foo()`的`construtor`指向了`foo`。因为是`foo`构造了它。

* `prototype`比较常用，**继承基本就是它**。在以上第二点我们知道`prototype`的存在位置。

但是在[JS-继承](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E7%BB%A7%E6%89%BF.md)中明明可以通过`foo.prototype.xx`来操作`prototype`。**所以上诉第二点是在通过`new`关键词创建的实例的情况下**，即如果

```javascript
var newfoo = new foo() // 只能够通过上述第二点查看到prototype

// 但是我们能够通过下述方式操作
foo.prototype.xx = function () {} 
```

来看看下一段代码，仔细研究以下区别！

```javascript
// a constructor function
function Foo(y) {
  // which may create objects
  // by specified pattern: they have after
  // creation own "y" property
  this.y = y;
}
 
// also "Foo.prototype" stores reference
// to the prototype of newly created objects,
// so we may use it to define shared/inherited
// properties or methods, so the same as in
// previous example we have:
 
// inherited property "x"
Foo.prototype.x = 10;
 
// and inherited method "calculate"
Foo.prototype.calculate = function (z) {
  return this.x + this.y + z;
};
 
// now create our "b" and "c"
// objects using "pattern" Foo
var b = new Foo(20);
var c = new Foo(30);
 
// call the inherited method
b.calculate(30); // 60
c.calculate(40); // 80
 
// let's show that we reference
// properties we expect
 
console.log(
 
  b.__proto__ === Foo.prototype, // true
  c.__proto__ === Foo.prototype, // true
 
  // also "Foo.prototype" automatically creates
  // a special property "constructor", which is a
  // reference to the constructor function itself;
  // instances "b" and "c" may found it via
  // delegation and use to check their constructor
 
  b.constructor === Foo, // true
  c.constructor === Foo, // true
  Foo.prototype.constructor === Foo, // true
 
  b.calculate === b.__proto__.calculate, // true
  b.__proto__.calculate === Foo.prototype.calculate // true
 
);
```

上面代码我们得到下图：

![构造函数和原型](https://raw.githubusercontent.com/JiangWeixian/JS-Tips/master/Grammar/img/%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E5%92%8C%E5%AF%B9%E8%B1%A1%E5%85%B3%E7%B3%BB.PNG)

## new 关键字

[new-mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)

new关键字到底做了什么?

> 1.一个继承自 Foo.prototype 的新对象被创建；2. 使用指定的参数调用构造函数 Foo ，并将 this 绑定到新创建的对象。new Foo 等同于 new Foo()，也就是没有指定参数列表，Foo 不带任何参数调用的情况；3. 由构造函数返回的对象就是 new 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。（一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）

更为具体例子可以看[这里](https://juejin.im/post/584e1ac50ce463005c618ca2)，我截了个图关键部分：

![new干了什么](https://raw.githubusercontent.com/JiangWeixian/JS-Tips/master/Grammar/img/newdowhat.PNG)

## 分析为什么能够继承？

在[JS继承]()中，我总结了可以通过以下方式继承！

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

现在我们来分析为什么？

**第一种继承方式**

`Bar.prototype = new Foo()`, `Bar.prototype`在没有经过这操作之前

1. `Bar.__proto__`指向原型，也就是`function`
2. `Bar.prototype`含有`construtor && __proto__`（就像是第二点提到的）现在经过了`Bar.prototype = new Foo()`相当于我们改变了`Bar.prototype`指向(或者说将里面东西全部替换掉了为**新创建的Foo，而不是原始的Foo**)
3. 以上两步骤就是先了继承。可以通过`Bar.prototype.xxx`在继承之后，实现添加新函数
4. 然后我们`var newbar = new Bar()`。
  1. `newbar`是通过`new`创建的，就没有了`prototype`，我们无法直接操作`prototype`
  2. `newbar.__proto__`指向`Bar.prototype`，而`Bar.prototype`已经被我们改掉了。所以可以使用`Foo`的方法。



## 链接

* [外文解析-我觉得写的不错](http://dmitrysoshnikov.com/ecmascript/javascript-the-core/)  