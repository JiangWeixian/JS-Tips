# 1. 深度复制
> 要就是无论是浅层次和深层次，得到的复制结果都和原本是两个不同对象

<!-- TOC -->

- [1. 深度复制](#1-深度复制)
  - [1.1. 浅度复制和深度复制含义](#11-浅度复制和深度复制含义)
  - [1.2. 前置知识 - 引用传值的影响！](#12-前置知识---引用传值的影响)
  - [1.3. 实现不互相影响的复制函数 - 浅层](#13-实现不互相影响的复制函数---浅层)
    - [1.3.1. ES6 - 实现方法](#131-es6---实现方法)
  - [1.4. 实现不互相影响的复制函数 - 深层次](#14-实现不互相影响的复制函数---深层次)
    - [1.4.1. ES6](#141-es6)

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

### 1.3.1. ES6 - 实现方法

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

所以我们需要 **深度复制**

## 1.4. 实现不互相影响的复制函数 - 深层次

```JavaScript
var target = { a: 0 , b: { c: 0}};
var copy = function (target) {
  var clone = {}
  for (var key in target) {
    if (typeof target[key] === 'object') {
      clone[key] = copy(target[clone])
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

### 1.4.1. ES6

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