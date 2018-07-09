# Object.create
> 在浅层赋值上和Object.assign一致；浅层就是只能够操作 **第一层属性**

## 结论

这个方法是浅层赋值。

## 先看例子

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

