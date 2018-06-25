# JS - async&await

<!-- TOC -->

- [JS - async&await](#js---asyncawait)
  - [前置知识 - async&await作用](#前置知识---asyncawait作用)
  - [两者格式](#两者格式)
    - [基本格式](#基本格式)
    - [疑惑解答以及高级用法](#疑惑解答以及高级用法)

<!-- /TOC -->

## 前置知识 - async&await作用

类似`promise`，等待一个函数执行完毕。其中`async`会返回一个`promise`对象。可以在`async`函数上使用`then`关键字。

`await`只能出现在`async`函数中。

两者一般成对出现，但是会有额外情况。

## 两者格式

### 基本格式

* `async`

  ```JavaScript
  async function asyncfunc() {
    // 第一种使用情况
    let result = await somefunc()
    return result
    // 第二种情况
    console.log(result)
  }
  ```
  **先不去理会`somefunc`是什么格式。**关键区分有没有`return`的区别。
  
  * **无论有没有`return`都会默认返回一个`promise`对象**，也就是说我们可以使用`asyncfunc().then(...)`这样的格式。
  * 如果有`return`，那么`result`结果就可以传递到`then`

* `await` - 一般来说都是等待一个`async`函数或者`promise`对象。但是同样也可以等待一个**普通函数**。

### 疑惑解答以及高级用法

1. **`await`等待什么？**

  > 如果是不同函数就是函数的`return`结果；如果是`promise`，就是`resovle`结果;如果是`async`就是`return`结果(因为`return`会返回一个`promise.resolve`)

2. 多个`await`如何处理？

  > 后一个等待前一个执行。也就是说，后面那个`func`可以拿到前面`await`结果作为参数。
