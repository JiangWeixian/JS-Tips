# 严格模式
> 'use strict'

## 严格模式简介

使用`"use strict`开启严格调用模式。

可以写在`.js`文件开头的位置，也可写在函数内部开头的位置。

### 目的

* 减少不合理
* 减少会引发问题的函数，或者使用方式
* **以下一版本的代码铺垫** - 有些严格模式下禁止的代码使用方式，在下一版本也是被禁止的。

### 哪些是禁止的

1. 严格模式下，`delete`被禁止使用 - **delete**运算符后跟随非法标识符(即delete 不存在的标识符)，会抛出语法错误； 非严格模式下，会静默失败并返回false
2. 严格模式函数，同名禁止使用(针对同一个作用域) - 对象直接量中定义**同名属性**会抛出语法错误； 非严格模式不会报错
3. 严格模式不允许八进制整数直接量（如：023）
4. 严格模式中，arguments对象是传入函数内实参列表的**静态副本**(意味着修改一个不会修改另一个)；非严格模式下，arguments对象里的元素和对应的实参是指向同一个值的引用

    ```JavaScript
    function f(a) {
      a = 2
      return [a, arguments]
    }
    // f(1) 结果是[2, 2]
    function f(a) {
      "use strict"
      a = 2
      return [a, arugments]
    }
    // f(1) 结果是[2, 1]
    ```
    
5. 严格模式中，关键字限制 -  eval和arguments当做关键字，它们不能被赋值和用作变量声明(也就是不能够使用`let eval`)
6. 严格模式，`aruments.callee`被禁止 - 会限制对调用栈的检测能力，访问arguments.callee.caller会抛出异常
7. 严格模式，变量必须先声明，直接给变量赋值，不会隐式创建全局变量(也就是不能够使用`v=1`而是`var v = 1`)。不能用with。
8. 严格模式中`call apply`传入`null undefined`保持原样不被转换为window


## 链接

[阮一峰解析 - 介绍了严格模式下哪一些是被禁止的行为](http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html)