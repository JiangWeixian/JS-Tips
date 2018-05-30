# 继承
> 一切都是Object

## 前置知识 - 一切都是Object

JS中类型有

* `Boolean`
* `Number`
* `null`
* `undefined`
* `String`
* `Array`
* `Symbol`

以及

* `object`

这么多，不可能一切都是`Object`，的确使用`typeof`能够得到以上类型。

而问题就在于，如果我们通过`new`来创建，例如`var a = new Number()`创建，使用`typeof`判断得到并不是`number`而是`object`。

此时`instanceof`就优于`typeof`，因为它不受到影响。类似的还有`isPrototype`方法，都可以判断类型。

```javascript
b.instanceof(a)
b.isPrototype(a)
```

**但是目前最常用的还是toString方法，应该来说是魔改过的toString**。和传统的`typeof a`不同，我们使用`Object.prototype.toString.call(a)`，我们可以得到`[object number]`

因此，使用顺序为`Object.prototype.toString.call(a)>instanceof=isPrototype>typeof`

## 前置知识 - JS数值类型以及引用类型

没错JS存在引用类型，除了`Object && Array`之外都是数值类型。

引用类型有什么问题，请看[这篇文章]()

## 前置知识 - `__proto__ && prototype`

* 所有通过`new`关键(调用了内置`construtor`函数)字创建的才会看到`__proto__`和`prototype`
* `prototye`是指针

我总结了[`youdontkonwjs`相关部分](https://github.com/JiangWeixian/JS-Books/blob/master/youdotkonwjs/this%26objprototypes/thisandobjprototypes.md)

* `__proto__`总是一层层的向上指，直到尽头
* 也就是说如果我让`prototype`这个指针指向父类就可以实现继承！

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
2. `Object.create`同样有创建指针的工作。因此可以通过`Bar.prototype=Foo.prototype`
3. 同样是`Object.create`，通过`var Bar = Object.create( Foo );`

第二点和第三点有什么区别？

* 第一点和第二点都要再通过`new Bar`来创建一个对象，而第三点不用。
* 添加额外的函数`Bar.speak`而前面两个是`Bar.prototype.speak`
* 如果直接打印`Bar`（第二点和第三点），可以发现第三点的`__proto__`更少，指向更清晰。

### ES6-继承

添加了`class`关键字，[MDN教程](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)

如果你会`python`，理解起来没差别。