# JS-值类型和引用类型差异
> 改变

<!-- TOC -->

- [JS-值类型和引用类型差异](#js-值类型和引用类型差异)
  - [值类型](#值类型)
  - [引用类型 - 规则](#引用类型---规则)
    - [引用类型与内存](#引用类型与内存)
  - [函数参数 - 例子说明](#函数参数---例子说明)
  - [Prototype - 例子说明](#prototype---例子说明)

<!-- /TOC -->

## 值类型

见[JS-基本类型-值类型](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B-%E5%80%BC%E7%B1%BB%E5%9E%8B.md)

## 引用类型 - 规则

**简单说明**

修改往往是一种复制操作，我们只需要考虑什么时候会改变 **被赋值的对象即可。**

类似`obj.a = xxx`，`obj`中`a`对象会被修改。

但是如果我们`var singlea = obj.a; obj.a = xx`。没有疑惑的是，`obj.a`被修改了，**singlea对象内部数据保留了`obj.a`没有修改之前的状态。** 

同时如果我们`var singlea = obj.a; obj.a.b = xx`。此时会同步修改`singlea and obj.a`(在`obj.a`是一个对象`{} or array or function`情况下)

所以我们可以得到结论：

1. `obj.a = xxx`只会修改父级中`a`对象的状态。而`var singlea = obj.a`中`singlea`并不是`a`对象的父类。
2. 对于上面第2点也可以很好解释，因为`obj.a.b = xx`修改`b`的时候，`obj.a and singlea`都是`b`的父类。

### 引用类型与内存

对于申明一个引用类型，同样也有[JS-基本类型-值类型](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B-%E5%80%BC%E7%B1%BB%E5%9E%8B.md)那三种数据类型申明方式。

同样和值类型一样，以上三种方式也是分配了新的内存。**特别注意的是以下这种的变量创建方式**

```JavaScript
// 在没有特别处理情况下，在引用类型复制过程中，不分配新的内存
var a = [1, 2]
var b = a // 不等价var b = [1,2]
```

## 函数参数 - 例子说明

* [博客地址](https://www.cnblogs.com/ljuyi/p/6100071.html)

JS类型`Number`, `Boolean`,`undefined`,`Object`,`String`(**未加入ES6的Symbol**)。其中`Object`, `Array`, `Function`(后面两个是根据第一个构建)为复杂类型，剩余的就是基本类型。

这两个的区别（并不是唯一）在于作为参数传递时候的不同。

```JavaScript
var a = {n:3}
(function(a){
  console.log(a)
  a.n=2
  var a = {n:1}
  console.log(a)
})(a)
console.log(a)
```

运行结果为：

```JavaScript
{n: 3}
{n: 1}
{n: 2}
```

```JavaScript
var a = 3
(function(a){
  console.log(a)
  a=2
  var a = 1
  console.log(a)
})(a)
console.log(a)
```

运行结果为：

```JavaScript
3
1
3
```

可以发现第一段代码修改了`a`，而第二段代码没有。那么在相同修改方式下，为什么有这样的方式。

这是由于，第一段代码中a是`{n:3}`类型为`object`，属于复杂类型。而第二段代码是基本类型。导致了作为参数传递的时候，`object`此类是作为引用类型，指向了内存同一部分地址。而第二段则是值传递，并没有这个闲置。

## Prototype - 例子说明

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

由[JS-proto&prototype&constructor&new](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS-__proto__%26%26prototype%26%26new.md)，可以得到`bar`内部结构为：

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

毫无疑问 **prototype是一个类似`{}`的对象** 的数据结构。

1. 假设修改`Bar.prototype.xx or Foo.prototype.yy`，对于`xx`来说，`Bar.prototype and proto1`都是`xx`的父类，**所以修改`Bar.prototype.xx`会同步修改`proto1`**；对于`yy`来说，`Foo.prototype and proto2`都是`yy`的父类，**会同步修改`proto2`**

2. 但是如果我们`Bar.prototype = {} or Foo.prototype = {}`修改的是其父类对象`Bar or Foo`，**显然不会同步到`proto1 or proto2`**。

**虽然以上两点Bar.prototype or Foo.prototype都被修改了。但是还是有区别。**
