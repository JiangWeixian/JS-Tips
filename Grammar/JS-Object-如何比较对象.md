# JS - 如何比较对象
> 前置知识

## 前置知识 - 为啥有这章节

**其实JavaScript对象是不等于对象的。**

也就是说:

```JavaScript
// 对象不等于对象
{} == {} // false
new Numebr(1) == new Number(1) // false
```

其实也好理解，因为毕竟`new`关键字在类实现中使用。用来创建对象，如果`new`创建的两个实例是相等的。那也就没有比较的 **类这个概念的必要**了。

**所以基本上通过`new`实例化的对象都是不相等的** (自己总结的，如果错误就修改)

* `{}`应该也是实例化`Object`实例化一种，所以不相等
* `function`是`Function`实例化的一种，所以不相等

**一定要和对象复制以及自己和自己的比较区分开来**

对象的复制(但是深度复制是不同的，以下是浅度复制的情况)：

```JavaScript
var a = {}
var b = a
a == b // true
```

自己和自己比较，这一点在(发布订阅模式中)函数作为参数传递进来的时候有体现。有的时候需要删除一个监听函数。

**因此我们可以得到一个结论：**

对象的比较其实在比较内存。而不是比较真正的所含的数据。

## 比较对象

> 有两个比较标准。一个是比较是不是sameobj，也就是是不是同一块内存地址的不同引用(由复制等操作引用出来的)；还有一种是equalobj，也就是比较内部value是不是相等的。**这也是本文需要处理的问题。**

1. 一种思路是递归比较
2. 另一种是转换为字符串比较。`obj.toSting() or JSON.stringify(obj)`。前者由[valueof&tostring()]()汇总可以得到，其实是 **任何对象`toString`得到的结果都是`[object Object]`**。所以我们这里应该是使用`JSON.stringify(obj)`

    ```JavaScript
    var a = {name: 1}
    var b = {name: 2}
    JSON.stringify(a) == JSON.stringify(b) // true
    ```

