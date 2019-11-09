# JS - 基本概念
> 介绍基础语法知识（这部分我会快速略过）

这部分更推荐[youdontkonwjs]()

<!-- TOC -->

- [JS - 基本概念](#js---基本概念)
  - [规则](#规则)
  - [typeof](#typeof)
  - [类型](#类型)
    - [Boolean(**)需要注意的](#boolean需要注意的)
    - [Number(**)需要注意的](#number需要注意的)
      - [NaN - 属于Number](#nan---属于number)
    - [parseInt & toString](#parseint--tostring)
    - [String](#string)
    - [Object](#object)
  - [操作符](#操作符)
    - [++a和a++ - 多么痛的领悟](#a和a---多么痛的领悟)
    - [+a和a + b](#a和a--b)
    - [!](#)
    - [&& or ||](#-or-)
    - [关系运算符 - > or >=](#关系运算符----or-)
      - [== - 需要转换为数值类型比较](#---需要转换为数值类型比较)
      - [对象 == 对象](#对象--对象)
  - [关于`undefined and null`](#关于undefined-and-null)

<!-- /TOC -->

## 规则

以下每个分支都是规则。说几个没有提及的：

1. `==`中的类型转换，存在`boolean->number or string->number`。但是不存在`some->boolean->number`，只有`some->string->number`。**转换为number，对象类型必须经过`string`步骤。**

## typeof

`typeof`能够返回的数据类型。

* undefined - `null == undefined`为`true`
* number
* string
* **function**
* object
* boolean

`ES6`新增加了`symbol`；`array or set`的`typeof`返回类型为`object`。

并不意味着上面就是`JavaScript`的数据类型。一般来说我们认为`JavaScript`数据类型为：

* undefined
* number
* string
* object
* boolean

甚至细分除了`object`之外是 [**值类型数据**](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%E5%B7%AE%E5%BC%82.md)。

## 类型

**如果**涉及到类型转换关系，一般有三种：

0. `falsy or truty`
1. `valueof`
2. `toString->valueof`
3. `toString`

**注意boolean的valueof都是转化为0 or 1的结果。**

不太好总结，只能记忆什么时候应用什么规则。

### Boolean(**)需要注意的

如果通过`Boolean(**)`来得到`true or false`，那么就要涉及到[falsy or truthy](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-falsy%26turthy.md)的列表数值。

### Number(**)需要注意的

**Number转换规则很重要**

1. 如果是`boolean`就是`0 or 1`简单转换关系。

2. 如果转换的对象是`string`，有些可以是数字，而另外一些是`NaN`

**如果转换的对象是对象**

1. 优先调用`valueof`，如果数值是`NaN`。那么再调用`toString->valueof`。

2. 调用了`valueof`如果得到对象，那么再调用`toString->valueof`。

情况在于如果第2步和第3步`valueof`结果为`string`，那么就根据`string`和`number`之间得转换规则来。`string`能转换为数字就为数字，不能得就变为`NaN`

#### NaN - 属于Number

一个自身不等于自身的数值。

### parseInt & toString

`parseInt`可以实现 **多进制到十进制转换**。

`toString`实现 **十进制到多进制转换**。

含有参数可指定转换关系。

### String

不可改变。

所以想要通过`.prototype.xx.call`方法来对`string`实现调用在其他类型上面的函数，如果`xx`会改变自身，就无法实现调用。

**特别注意**

`string`上调用`+`，是使用`toString`进行类型转换

### Object

所有`object`都有`constructor`

## 操作符

### ++a和a++ - 多么痛的领悟

关键在于你需要怎么解释他。

++a作用在语句表达是之前，后面作用在语句表达式之后。

语句表达式含义为 **一行代码**: `++a`在 **一行代码**执行之前生效，另一个在 **执行之后**

**注意**

`++`或者其他设计类型转换的 **操作符号**，优先调用`valueof`；如果不存在`valueof`或者`valueof`的返回数值是`NaN`的话，那么就先调用`toString`，然后调用`valueOf`

### +a和a + b

如果出现`var num = +a`仅仅只有这样，遵循`Number`转换规则

**a + b**

情况特别复杂。首先我们要知道`+`支持得是`string`相加。

1. 优先对两个进行`valueof`，如果得到结果是字符串或者数字，就停止
2. 如果有一个为`obj(array之类的)`或者`NaN`，那么就对其进行`toString->valueof`

但是问题会出现在`[]+{} and {}+[]`上面。

第一个结果为`[object object]`，第二个为0。再[youdontkonwjs有解释](https://github.com/getify/You-Dont-Know-JS/blob/1ed-zh-CN/types%20%26%20grammar/ch5.md)

从左到右边解析，第一个就是总结转换规则。

但是第二个，由于遇到了`{}`(**关键在于它是空得，且直接写出**)，所以 **它是解析为代码段，类似于function那里的{}**。所以第二个就变为了`+[]`。所以就是`+`得转换规则。

如果想要避免这个情况，可以设置一个`num={}`，然后在进行`num+[]`，这样结果就不是`0`

### !

`if (xx) or if (!xx)`都是 **Boolean(xx)**所提到的转换规则。

### && or ||

注意这两个返回结果并不是`false or true`。而是类似三元运算符的操作。

### 关系运算符 - > or >=

> 如果经过了一次转换之后，还是不同的类型。就要继续实践转换规则。

这个操作符的返回结果是`true or false`。

**对于Boolean**，转换规则和`Number`中提到的一致

**对于string**则保留

**对于对象**，两种结合的转换规则，`valueof`的返回数值是`NaN`的话，那么就先调用`toString`，然后调用`valueOf`。如果`valueof`得到结果是`string`类型，则保留。

经过以上转换，可能两边的对象数据格式还是不同的。那么就进一步就要进行`string->number`的转换，转换规则和`Number`类似。

#### == - 需要转换为数值类型比较

> 这个转换规则也有点不同，**前提是设计到了转换。** 如果经过了一次转换之后，还是不同的类型。就要继续实践转换规则。

**对于字符串和Boolean**，转换规则和`Number`中提到的一致

**对于对象**，只调用`valueof`。因为如果返回的是`NaN`,就进行`NaN`的相等比较。

* 只有一个`NaN`,判断是否等于`NaN`
* 两个`NaN`，永远是`false`

#### 对象 == 对象

> 同样也适用于对象 === 对象

只要两边是对象，无论类型是否相等还是不相等，那么`== or ===`结果就是`false`

1. 比如`[1] == [1]`结果就是`false`，就连`Object.is(x, y)`的比较方法也救不了。
2. 而且我们知道`typeof new Number(1)`得到的是`object`。所以，就会出现下面的情况：

    ```JavaScript
    // 值类型
    var a = new Number(1)
    var b = new Number(2)
    a == b // false
    ```

## 关于`undefined and null`

1. 转换为`boolean`为`0`
2. 转换为`string`分别为`'undefined' and 'null'`
3. 转换为`number`，由第2点可以得到，两个都是`NaN`
