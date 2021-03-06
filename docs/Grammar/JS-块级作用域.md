# JS块级作用域

JS是没有块级作用域这一说的。在`ES6`中引入了`let const`才有了块级作用域这一说。

例如

```JavaScript
{
  let a
}
```

这样花括号和`let`组合才有了块级作用域。

那么在`ES5`中如何模拟实现了。大家比较熟悉的是`IIFE`形式，如下

```JavaScript
(function(){
  //代码
})
```

用函数作用域模拟了块作用域。

而另外一种特别写法

```JavaScript
if (x) {
  var a = function() {}
}
```

利用了`JS`语法特别，声明前提。也就是说`var a`会提到`if`语句之前。而函数却在`if`中定义，所以也只会运行到这一段代码时候生效。

**实用性质不大，但是可以了解一下。**