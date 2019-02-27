# WebAPI - 语法部分速写
> 如何记忆

<!-- TOC -->

- [WebAPI - 语法部分速写](#webapi---语法部分速写)
  - [1.1. 数据类型](#11-数据类型)
    - [1.1.1. array - (typef array > object)](#111-array---typef-array--object)
    - [1.1.2. string - (typef string > string)](#112-string---typef-string--string)
    - [1.1.3. boolean](#113-boolean)
    - [1.1.4. number](#114-number)
    - [1.1.5. Map/Set](#115-mapset)
  - [1.2. Object](#12-object)
  - [1.3. Reg](#13-reg)
  - [1.4. Error](#14-error)
  - [1.5. Math](#15-math)
  - [1.6. Date](#16-date)
  - [1.7. 数据](#17-数据)
  - [function](#function)
    - [全局函数](#全局函数)
    - [Promise](#promise)
    - [Generator](#generator)

<!-- /TOC -->

## 1.1. 数据类型

* `undefined`
* `object` - array, map, set
* `string`
* `boolean`
* `number`
* `Symbol` - ES6

创建类型的时候谨慎使用`new`

### 1.1.1. array - (typef array > object)

* 减少数据会返回减少的那部分数据
* 增加数据会返回修改之后的数组长度
* 需要指定下标范围一般符合`[ )`原则
* 要知道那些是会修改数据

从以下几个方面记忆

* 遍历方法 - 其中那些会返回数组(reduce比较容易忘记)
* 增加数据/删除数据
* 不会修改原始数据 - 查找reverse and sort
* 类型转换 - 其他数据到array，以及array到其他类型的数据

### 1.1.2. string - (typef string > string)

* string是不允许修改原始数据的
* 数组中不修改数据的操作可以`.prototype.xx.call`重新作用到新对象上(或者string直接就有对应同名的方法)

从以下几个方面记忆

* 查找 - 判断/查找index/查找str
* 修改数据(一定是返回了一个新的数据)  - 替换/补充/重复
* 删除空格
* 类型转换 - unicode编码，变为数组

### 1.1.3. boolean

`Boolean(true) !== new Boolean(true)`

### 1.1.4. number

* 上限下限 - 这部分可以查看[JS-大数]()
* 取得某位数的数据
* 判断 - isNaN isSafe.. isInf...
* 提取数字

### 1.1.5. Map/Set

下标以及`[]`方法都是没有办法获取到里面的数据

**Map**

* 判断
* 获取 - 键/值。注意获取得到是带有`iterator`。
* 设置/获取 - 只能够通过set/get
* 删除 - 删除某个元素(通过接口而不是关键字))或者清空
* 遍历 - for of

**Set**

没有`get`获取里面的数据。

* 添加 - 只能够末尾添加
* 删除 - 删除某个元素或者清空
* 判断
* 获取 - 数值，注意获取得到是带有`iterator`。
* 遍历 - for of

**带有Weak前缀的就是表示里面数据就只能是对象数据，与不带有Weak相比少了遍历的API**

## 1.2. Object

* 获取属性 - 键/值/键值对
  * 区分自身属性/获取以Symbol作为属性名的属性/父类属性/
* 获取/设置原型链
* 判断 - 判断原型链/判断自身属性/判断父类属性
  * 判断原型链`.prototype.isPrototypeOf(xx)` - xx输入的实例，或者`xx.prototype`
  * 判断是否被封装，是否可扩展
* 复制 - [区分create assign]()
* 定义属性 - 定义方法就是将方法定义为`value`
* 遍历
* seal frozen封装方法 - 前置可修改属性，其他和后者相同，啥都不能动

## 1.3. Reg

见[Reg]()

## 1.4. Error

* 创建错误的时候可以指定错误发生位置以及错误代码的行数

## 1.5. Math

* 三角函数
* 对数/指数/求根
* 内置数据 - PI/E

`logab = logb/loga`

## 1.6. Date

1. 含有`Date`关键字的方法一般指的是月中的天，想要星期中的天是`Day`
2. utc关键字指的是世界时间
3. 以`Date`可以区分 **年月日**和 **时分秒**，一帮都有针对这两个段的接口函数

## 1.7. 数据

1. 使用ArrayBuffer创建Buffer
2. 使用Dateview链接Buffer，设置其中数据类型，并修改其中数据
3. 修改之后使用`Int16Array`此类型数据结构来创建一个数组，注意数据类型要对应

## function

> 并不是说完全由Object的全部方法，只有以下几个

* 属性 - name/length(指定参数个数)/arguments
* 方法 - call/apply/bind/
* toString

### 全局函数

[encodeURI...](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%85%A8%E5%B1%80%E5%87%BD%E6%95%B0-encodeURI%26encodeURIcomponent.md)

### Promise

* all or race - 接受一个promise对象构成的数组。其中all会将所有promise.resovle的返回结构构造一个数组
* catch
* finally

### Generator

1. 有x个`yeild`就会有x+1个`next()`执行。
2. for of可以取代手动执行`next()`的方式

返回的结构是`{value: xx, done: true or false}`

链接

* [Generator](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator)
* [注意阮一峰举例的传递参数例子](http://es6.ruanyifeng.com/) - 传递的传递给next的参数会替换上一次yeild的结构
