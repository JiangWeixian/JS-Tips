# 深度复制
> 要就是无论是浅层次和深层次，得到的复制结果都和原本是两个不同对象

<!-- TOC -->

- [深度复制](#深度复制)
  - [1.1. 浅度复制和深度复制含义](#11-浅度复制和深度复制含义)
  - [1.2. 前置知识 - 引用传值的影响！](#12-前置知识---引用传值的影响)
  - [1.3. 实现不互相影响的复制函数 - 浅层](#13-实现不互相影响的复制函数---浅层)
    - [1.3.1. ES6 - 浅层复制实现方法](#131-es6---浅层复制实现方法)
    - [1.3.2. ES6 - 利用解构析构实现浅层复制](#132-es6---利用解构析构实现浅层复制)
  - [1.4. 实现不互相影响的复制函数 - 深层次自实现](#14-实现不互相影响的复制函数---深层次自实现)
    - [1.4.1. ES6 - 深层次复制实现方法](#141-es6---深层次复制实现方法)

<!-- /TOC -->

## 1.1. 浅度复制和深度复制含义

> 内存

1. 浅度复制 - 可以理解为得到两个对象是 **不独立的**
2. 深度复制 - 可以理解为得到的两个对象是 **独立的**

什么时候独立？什么时候不独立？

> 可以理解为在复制过程中重新分配了内存的话，那么得到的新对象就是独立的。如果应用了同一个内存地址就是不独立的。

JS数据可以分为[值类型]()和[引用类型]()

> 大致可以将`number boolean string`为值类型，以及`object function array`就是引用类型。

```JavaScript
// 在值类型复制过程中，是分配新内存的
var a = 1
var b = a
```

**无论a如何变化，b的数值都是都是1**


```JavaScript
// 在没有特别处理情况下，在引用类型复制过程中，不分配新的内存
var a = [1, 2]
var b = a // 不等价var b = [1,2]
```

**a相应变化会引起b变化**


## 1.2. 前置知识 - 引用传值的影响！

```JavaScript
var target = {}
target.obj = 'a'
var copy = function (target) {
  var clone = target
  return target
}
var clone = copy(target)
clone.obj = 'b'
console.log(clone, target)
```

可以发现，两个`.obj`都变为了`b`

## 1.3. 实现不互相影响的复制函数 - 浅层

```JavaScript
var target = { a: 0 , b: { c: 0}};
var copy = function (target) {
  var clone = {}
  for (var key in target) {
    clone[key] = target[key]
  }
  return clone
}
var clone = copy(target)
clone.a = 'b'
clone.b.c = 1
console.log(clone, target)
```

结果为`{ a: 'b' , b: { c: 1}} { a: 0 , b: { c: 1}}`

**可以发现只有比较浅层的不受到影响！更深的就没有办法了！**

### 1.3.1. ES6 - 浅层复制实现方法

`Object.assign`关键。**实现的是合并，因为第一个是{}所以看起来像是复制**

```JavaScript
var target = { a: 0 , b: { c: 0}};
var clone = Object.assign({}, target)
clone.a = 'b'
clone.b.c = 1
console.log(clone, target)
```

结果为`{ a: 'b' , b: { c: 1}} { a: 0 , b: { c: 1}}`

**可以发现只有比较浅层的不受到影响！更深的就没有办法了！**

### 1.3.2. ES6 - 利用解构析构实现浅层复制

> 大概是我见过最为优雅的了。但是目前浏览器不支持。

[JS-ES6-解构析构使用指南](https://github.com/JiangWeixian/JS-Books/tree/master/ES6%E5%85%A5%E9%97%A8/CH03-%E8%A7%A3%E6%9E%84%E6%9E%90%E6%9E%84)

```JavaScript
let obj = { a: 'b' , b: { c: 1}}
let cloneObj = {...obj}
console.log(obj, cloneObj)
obj.a = 2
obj.b.c = 2
console.log(obj, cloneObj)
```

> **第1次`console.log`的结果居然和第2次一样**，这是极为不合理的情况。只能归结为`console.log`真的不能算是严格意义上的同步函数。

测试页面为[deepcopy.html](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/HTML/deepcopy.html)，可以发现嵌套的`obj.b`改变了。

所以我们需要 **深度复制**

## 1.4. 实现不互相影响的复制函数 - 深层次自实现

```JavaScript
var target = { a: 0 , b: { c: 0}};
var copy = function (target) {
  var clone = {}
  for (var key in target) {
    if (typeof target[key] === 'object') {
      clone[key] = copy(target[key])
    }
  }
  return clone
}
var clone = copy(target)
clone.a = 'b'
clone.b.c = 1
console.log(clone, target)
```

结果为`{ a: 'b' , b: { c: 1}} { a: 0 , b: { c: 0}}`

### 1.4.1. ES6 - 深层次复制实现方法

官网给的[例子](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)我只能说NB.

```JavaScript
var target = { a: 0 , b: { c: 0}};
var clone = JSON.parse(JSON.stringify(target))
clone.a = 'b'
clone.b.c = 1
console.log(clone, target)
```

结果为`{ a: 'b' , b: { c: 1}} { a: 0 , b: { c: 0}}`

除了佩服没有别的了！

