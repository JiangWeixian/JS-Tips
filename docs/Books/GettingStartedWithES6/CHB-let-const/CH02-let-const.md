# let&const
> 不要停留在表面

- [let&const](#letconst)
  - [1.1. 前置知识 - 作用域](#11-前置知识---作用域)
  - [1.2. 前置 - 闭包与作用域](#12-前置---闭包与作用域)
  - [1.3. const](#13-const)
  - [1.4. 块级作用域与function](#14-块级作用域与function)


## 1.1. 前置知识 - 作用域

* 全局
* 函数作用域

其实`JavaScript`一致是通过`{}`这个符号来声明作用域，就像是`function`申明函数作用域。

但是`ES6`中，`const & let`带来了块作用域，所以现在`let&cosnt`让`{}`不仅仅局限于上面两个作用域。变成了 **块级作用域**。使得块级作用域内数据在离开之后失效。

**理解{}是作用域这一点特别重要！**

## 1.2. 前置 - 闭包与作用域

可见[youdontkonwjs-闭包与作用域](/docs/Books/youdotkonwjs/scope-closures/scopeandclosures.md)作为补充。

现在有了现在闭包不仅仅局限在了上面`return function`。

```JavaScript
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
```

```JavaScript
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```

现在以闭包概念来理解为了有不同体现。[youdontkonwjs-闭包与作用域](/docs/Books/youdotkonwjs/scope-closures/scopeandclosures.md)中提到`return function`让外部的变量 **拥有引用另外一个作用域的权力**。(这里的作用域指的是函数作用域和块作用域)

解释之前，再次重申(第一段代码)：

* `for(){}`由于`let`的作用，变成块作用域
* `a[i]`是全局变量，现在有了`for(){}`内部`function`，`function`内部为函数作用域，**内部的 `i`来自另外一个块作用域**，于是`a[]`对`for`内部有了引用的权力 - **所以闭包了，兄弟**
* (很重要的一点)可以发现函数内部变量在这个函数没有执行之前是不会声明内存的

现在我们执行`a[i]()`其中某一个函数，(闭包)函数执行开始查找变量`i`。`for(){}`也是其查找的作用域之一。所以可以打印`0~9`。**显然i绑定到了10个循环的每一次{}中**

那么第二个代码段呢？

* `for(){}`不是作用域
* `var i and a`都是全局变量，`function`内部的 `i`并不是来自块作用域 - 这不是闭包，**i不会绑定到了10个循环的每一次{}中**

执行`a[i]()`其中某一个函数时候，显然是在全局查找，此时为`10`。

## 1.3. const

const作用就是字面意思，但是它到底让什么东西不改变？

文中给出的答案是内存地址，声明赋值的时候给定地址。无论是常量还是对象。

**但是改变对象其中某一个数值会报错吗？**

不会！因为这样并没有改变对象地址。只会在重新赋值的时候才会报错。

## 1.4. 块级作用域与function

一般情况下，`function`只会在全局或者函数作用域中申明。以下这种情况怎么理解：

```JavaScript
if (true) {
  f()
  function f () {console.log(1)}
  let f1 = function () {console.log(2)}
}
f()

// 输出 1 1

if (true) {
  f1()
  function f () {console.log(1)}
  let f1 = function () {console.log(2)}
}
f1()
// 错误
```


以前可能会报错。现在不会了。重温以下youdontkonwjs里面提到的：

* js存在申明提前情况，即使`f()`在`function f () {console.log(1)}`前

**但是仅限于`var`!** 所以我们可以得到结论：

1. `function f`等价于`var f = function`
2. 含有`let`的`{}`并不是内部所有数据都会被限定为块，这个块只是相等于`let`而言的。
3. `let or const`并没有声明前置的情况
