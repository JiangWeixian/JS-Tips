# 1. 深度复制
> 要就是无论是浅层次和深层次，得到的复制结果都和原本是两个不同对象

<!-- TOC -->

- [1. 深度复制](#1-深度复制)
  - [1.1. 前置知识 - 引用传值的影响！](#11-前置知识---引用传值的影响)
  - [1.2. 实现不互相影响的复制函数 - 浅层](#12-实现不互相影响的复制函数---浅层)
    - [1.2.1. ES6 - 实现方法](#121-es6---实现方法)
  - [1.3. 实现不互相影响的复制函数 - 深层次](#13-实现不互相影响的复制函数---深层次)
    - [1.3.1. ES6](#131-es6)

<!-- /TOC -->

## 1.1. 前置知识 - 引用传值的影响！

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

## 1.2. 实现不互相影响的复制函数 - 浅层

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

### 1.2.1. ES6 - 实现方法

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

## 1.3. 实现不互相影响的复制函数 - 深层次

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

### 1.3.1. ES6

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