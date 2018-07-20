# JS - 变量提升
> 变量提升

## 前置知识 - undefined&null&referenceerror

* `null` - 空对象(看起来像是被声明)，但是不应该有数值
* `undefined` - 对象被声明，应该有一个数值，但是内部没有数值

在`JavaScript`都可以对变量设置上面两个。但是设置了`null`之后，`gc`机制就会回收它释放空间。一般我们声明变量`var a`，则`a`就是一个`undefined`，可能不会被回收。

* `referenceerror` - 没有声明过程

## var - 变量提升

> 一个`undefined`的变量被提升

```JavaScript
console.log(x)
var x = 1
```

由于 **var 变量提升的机制**，上面代码不会出现`referenceerror`。

而是等价于:

```JavaScript
var x // 由前置知识可得此时等于undefined
console.log(x)
x = 1
```

### function

同样的情况也出现在`function`表达式中：

```JavaScript
console.log(x)
var x = function (value) {
  return value + 1
}
```

而是等价于:

```JavaScript
var x // 由前置知识可得此时等于undefined
console.log(x)
x = function (value) {
  return value + 1
}
```

**可以预见的是`x-function`是无法使用，因为里面是`undefined`**

**特殊情况 - 如果我们不使用函数表达式来声明函数**

```JavaScript
console.log(x(1))
function x (value) {
  return value + 1
}
```

此时`x`是可以使用的，不同于函数表达式。

## let - 不存在变量提升

```JavaScript
console.log(x)
let x = 1
```

会出现`referceerror`意味着变量没有声明。