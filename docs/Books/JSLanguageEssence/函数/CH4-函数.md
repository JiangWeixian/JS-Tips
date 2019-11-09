# CH4 - 函数

## 模块化

一个小技巧，`IIFE`可以构造模块。

但是

```JavaScript
function func (function () {
  return function () {
    
  }
}())
```

**注意后面的回调函数后面的括号小尾巴。**

## 柯里化

在[JS-柯里化](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E9%97%AD%E5%8C%85-%E6%9F%AF%E9%87%8C%E5%8C%96.md)中简单说明了`curry`形式。

其中提到`curry`就是`return function`。不太准确。以下才是比较高级的用法。

![柯里化](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/JS%E8%AF%AD%E8%A8%80%E7%B2%BE%E7%B2%B9/CH4-%E5%87%BD%E6%95%B0/img/curry.PNG)

## 记忆

构建一个记忆缓存并不是很难，我们可以给每一个需要缓存的函数手动构造缓存模块。

**但是难得是构造通用得缓存模块：(说实话文中得例子有点觉得太高级了)**

![记忆函数](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/JS%E8%AF%AD%E8%A8%80%E7%B2%BE%E7%B2%B9/CH4-%E5%87%BD%E6%95%B0/img/%E8%AE%B0%E5%BF%86%E5%87%BD%E6%95%B0.PNG)

