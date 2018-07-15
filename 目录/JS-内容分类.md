# 分类
> 以某一内容分类

[![lovefrontend](https://img.shields.io/badge/LOVE-FRONTEND-red.svg?style=for-the-badge)](https://github.com/JiangWeixian/JS-Tips) [![webtips](https://img.shields.io/badge/TIPS-WEB-blue.svg?style=for-the-badge)](https://github.com/JiangWeixian/JS-Tips) [![mit](https://img.shields.io/badge/LICENSE-MIT-blue.svg?style=for-the-badge)](https://github.com/JiangWeixian/JS-Tips)

<!-- TOC -->

- [分类](#分类)
  - [继承与类](#继承与类)
  - [this](#this)
  - [作用域与闭包](#作用域与闭包)

<!-- /TOC -->

## 继承与类

> constructor私有，prototype共有

* [JS高级程序设计-继承最佳实践](https://github.com/JiangWeixian/JS-Books/tree/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH4-%E5%8F%98%E9%87%8F%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%86%85%E5%AD%98) / 怎样继承方式才是最好的，以及不好的方式有哪些坑
* [JS-proto&prototype&constructor&new](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-__proto__%26%26prototype%26%26new.md) / 这三者有什么关系，在继承和类中起到了上面作用
* [JS-继承几种方式](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E7%BB%A7%E6%89%BF.md) / 简要说明了一下
* [JS-继承最佳实践解析](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E7%BB%A7%E6%89%BF%E4%BB%A5%E5%8F%8A%E7%B1%BB-%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%E8%A7%A3%E6%9E%90.md) / 为什么会出现那些坑

## this

> 箭头函数与父类有关。非箭头函数要记住不同情况；**以及new关键字对`this`的影响**

* [this情况汇总说明](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-this%E6%8C%87%E5%90%91%E6%80%BB%E7%BB%93.md) / 非箭头函数以及箭头函数`this`情况说明
* [call&apply&bind](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-call%26apply%26%E4%B8%8A%E4%B8%8B%E6%96%87%E7%8E%AF%E5%A2%83.md) / 改变this，但是要注意箭头函数的特殊

## 作用域与闭包

> 在没有`let&const`的影响下，其他方式声明的变量函数都是属于当前 **函数作用域的。**；闭包应为获得另一个作用域的引用，而不应该仅仅局限于一种形式。

* [let&const](https://github.com/JiangWeixian/JS-Books/tree/master/ES6%E5%85%A5%E9%97%A8/CH02-let%26const) / 并不是把当前`{}`中所有数据固定到块级作用域中；`let&const`没有声明提前。
* [call&apply&bind](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-call%26apply%26%E4%B8%8A%E4%B8%8B%E6%96%87%E7%8E%AF%E5%A2%83.md) / 内含闭包一定要理解部分