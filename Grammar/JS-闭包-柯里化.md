# 柯里化&反柯里化
> JS - 闭包；柯里化反柯里化区别在于，前者就是参数先传(`return function`仍旧可以使用前传的参数)，后者参数后传递。

<!-- TOC -->

- [柯里化&反柯里化](#柯里化反柯里化)
  - [柯里化](#柯里化)
  - [我的理解](#我的理解)
    - [提前返回](#提前返回)
    - [参数复用](#参数复用)
  - [反柯里化](#反柯里化)
  - [链接](#链接)

<!-- /TOC -->

## 柯里化

[这篇文章](http://www.zhangxinxu.com/wordpress/2013/02/js-currying/)讲的比我更好.

柯里话是闭包的概念拓展。老技术却又一些比较棒的点。

形式一定是调用一个函数内部返回的一个函数。

```javascript
function callback() {
  return function () {
    
  }
}
```

通过`callback()()`的方式调用。

如果使用`var anyname = callback()`这样重命名里面的返回函数之后，就可以通过`anyname()`来使用。

## 我的理解

柯里化的优点，算是上一篇链接中文章的再解释。

1. 提前返回
2. 参数复用

### 提前返回

```JavaScript
var addEvent = function(el, type, fn, capture) {
  if (window.addEventListener) {
    el.addEventListener(type, function(e) {
        fn.call(el, e);
    }, capture);
  } else if (window.attachEvent) {
    el.attachEvent("on" + type, function(e) {
        fn.call(el, e);
    });
  } 
};
```
在适配`addEventListener`我们往往会这么做。但是柯里化的化就会以如下的方式：

```JavaScript
var addEvent = (function(){
  if (window.addEventListener) {
    return function(el, sType, fn, capture) {
        el.addEventListener(sType, function(e) {
            fn.call(el, e);
        }, (capture));
    };
  } else if (window.attachEvent) {
    return function(el, sType, fn, capture) {
        el.attachEvent("on" + sType, function(e) {
            fn.call(el, e);
        });
    };
  }
})();
```

上一篇链接中会提到这样可以体现提前返回，也就是再下一次使用`addEvent`的时候，就不用经过`if else if`的判断。为什么？

**重点**

我们可以分析上面两个函数特点，第一个`addEvent`是一个函数，包含了全部的`if else if`的一个函数。因此在下一次使用的时候仍旧会结果`if else if`的判断。

但是下一个`addEvent`的话，经过第一次执行之后，**尤其是它还是IIFE**的形式，`addEvent`并没有包含了全部的`if else if`而是其中一个函数，例如`if`内部的函数，或者`else`内部的函数。

### 参数复用

我觉得这是闭包的体现。

因为如果第一个函数`outter`内部返回了另外的函数`inner`，那么这个`inner`是能够得到`outter`里面定义的变量。

就是 **模块或者类**一样(在多次执行情况下，仍旧可以访问到内部变量。而且是同一个)，例如：

```JavaScript
function f () {
  var c = 0
  function inner () {
    console.log(c++)
  }
  return inner
}
var outter = f()
outter()
outter()
outter()
0
1
2
```

## 反柯里化

讲一个函数构造为适应任何情况。就像是`Array`相关函数只能够作用在数组上，却不能作用在类数组上。

如何改造`Array`相关函数适应所有情况。

```javascript
Function.prototype.uncurrying = function(){
  var self = this;
  return function(){
    return Function.prototype.call.apply(self, arguments);
  }
}
var push = Array.prototype.push.uncurrying();
```

或许下面这个更好理解：

```JavaScript
Function.prototype.unCurrying = function () {
    var f = this;
    return function () {
        var a = arguments;
        return f.apply(a[0], [].slice.call(a, 1));
    };
};
```

* 执行`var push = Array.prototype.push.uncurrying();`的时候，`self=Array.prototype.push`。也就是`push`这个函数。(self or f)
* 然后push就是一个`uncurring`返回的函数
* `push()`再执行之后，传入参数改变`Array.prototype.push`指向。

可以通过`push(obj , '1', '2')`其中`obj`就是一个类`Array`数组。

## 链接

* [JS-apply&call&bind-结合理解]()