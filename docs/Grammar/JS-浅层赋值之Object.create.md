# 1. Object.create
> 并不完全是 **浅层复制**。

<!-- TOC -->

- [1. Object.create](#1-objectcreate)
  - [1.1. 结论](#11-结论)
  - [1.2. 先看例子](#12-先看例子)
  - [1.3. 和Object.assign](#13-和objectassign)

<!-- /TOC -->

## 1.1. 结论

这个方法是浅层赋值。

## 1.2. 先看例子

```JavaScript
var target = { a: 0 , b: { c: 1}}
var clone = Object.create(target)
```

很特别的一点在于，其实Object.create赋值的不是属性，**prototype级别操作。**看里面的源码就明白了：

```JavaScript
if (typeof Object.create !== "function") {
    Object.create = function (proto) {
        function F() {}
        F.prototype = proto;
        
        return new F();
    };
}
```

也就是说赋值过来的方法是在`clone`的`__proto__`上。**这是和`assign`不同的一点。**，而且其实`clone`是空的，赋值结果都在`__proto__`，这也是为什么这个方法一般用在继承上。

```JavaScript
// clone
__proto__: 
a: 1
b: {c: 1}
```

但是我们知道的是一个对象查询属性如果在本身上找不到，就会去`__proto__`上查找。就是`clone.a`是能够获取的数值的原因。

而且你对比[继承]()，还可以发现如果在子类上`child.prototype.name=xx`，如果`parent.prototype.name`存在，那么`child.prototype.name`并不是是覆盖操作，而是在自己上面 **添加了一个name**属性。那么对`clone`来说，`clone.a=2`就会变成：

```JavaScript
// clone
a: 2
__proto__: 
a: 1
b: {c: 1}
```

**这就是为什么看起来这是浅层赋值**

但是如果`clone.b.d=2`，结果就又会不同：

```JavaScript
// clone
a: 2
__proto__: 
a: 1
b: {c: 1, d: 2}
```

而且修改了target，**这就是为什么不是深层次。**

(以下是我自己理解的)

我们只能够得到`getter setter`JavaScript处理不同，`get`要找父级，`set`只在自己属性。

但是`clone.b.d=2`原因是声明，分为`clone.b`以及`.d`，**前者是`get`，后者才是`set`**。所以才会修改`target`。

但是如果你先`clone.b = {}`，然后再`clone.b.d=2`情况就又不同了。此时分为`clone.b`以及`.d`。**clone.b**已经在本省属性上找到了。

## 1.3. 和Object.assign

对比利用`Object.assign`实现[深度复制]()简要的实现。

可以发现`create`将数据复制到`__proto__`，而`assign`将数据复制到`__proto__`之外。

而复制到`__proto__`上意味着如果修改`target`，那么`clone`就会同步修改(因为`target`作为它的父类)。如果修改`clone`(依照上诉的方法)，则不一定完全同步改变`target`。

**结论就是：**

* `create`复制`prototype`上面的方法
* `assign`复制一般属性

**如果想要一起复制，在[ES6-对象扩展中有一个方法]()**

```JavaScript
Object.assign(
    Object.create(Object.getPrototypeOf(obj))， // 复制了prototype部分，但是除了这个之外没有其他
    obj // 复制一般属性
)
```
