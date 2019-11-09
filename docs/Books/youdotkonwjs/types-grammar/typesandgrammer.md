# 你不知道的Javascript
> 类型与语法(Types & Grammar) 阅读笔记

<!-- TOC -->

- [你不知道的Javascript](#你不知道的javascript)
    - [1. CH1 - 类型](#1-ch1---类型)
    - [2. CH2 - 值](#2-ch2---值)
        - [2.1 Array](#21-array)
            - [2.1.1 str和array](#211-str和array)
        - [2.2 Number](#22-number)
            - [2.2.1 NaN](#221-nan)
            - [2.2.2 void](#222-void)
            - [2.3.2 引用](#232-引用)
    - [3. CH3 - 内置函数](#3-ch3---内置函数)
        - [3.1 DATE&ERROR](#31-dateerror)
        - [3.2 PROTOTYPE初步](#32-prototype初步)
    - [4. CH4 - 类型转换](#4-ch4---类型转换)
        - [4.1 所有东西都是obj的子类](#41-所有东西都是obj的子类)
        - [4.2 真假值](#42-真假值)
        - [4.2.1 隐性转换规则小技巧](#421-隐性转换规则小技巧)
        - [4.3 类型转换小技巧](#43-类型转换小技巧)
    - [5. CH5 语法](#5-ch5-语法)
        - [5.1 表达式返回值](#51-表达式返回值)
        - [5.2 作用域规则](#52-作用域规则)
            - [5.2.1 label](#521-label)
            - [5.2.2 ES6 IN JS LIKE Python](#522-es6-in-js-like-python)
            - [5.2.3 ERRORS](#523-errors)
            - [5.2.4 函数参数](#524-函数参数)
            - [5.2.5 一些不常用到的语句](#525-一些不常用到的语句)
            - [5.2.6 优先级](#526-优先级)
    - [6. 总结](#6-总结)

<!-- /TOC -->

## 1. CH1 - 类型

* 内置的七大类型 
    * `null`
    * `undefined`
    * `boolean`
    * `number`
    * `string`
    * `object`
    * `symbol -- added in ES6!`

`typeof`类型检查(好像还有一个类型检查，优于`typeof`)。对于检查`null`类型的时候，返回的是`object`

* `typeof`返回的是字符串
* 只有赋值了变量才可以检查除类型，不然就是`undefined`；其中还有一点问题就是，如下
  ```Javascript
  b // ReferenceError: b is not defined
  typeof b // undefined 这个和没有赋值了变量的类型是一致的
  ```
  由于这个特性，就是可以用`typeof`来检查一些没有声明的变量，因为如果直接`if(b)`是将会报错的。
* 对于没有声明过的变量，使用`typeof`检查还是返回`undefined`，如下所示：
    ```Javascript
    var a;
    typeof a; // "undefined"
    typeof b; // "undefined"
    ```
    只有的时候在检查`if(b)`可以避免抛出错误。

## 2. CH2 - 值

### 2.1 Array

弱类型的数组，支持字符串的下标，类如,

```Javascript
var a = [ ];

a[0] = 1;
a["foobar"] = 2;

a.length;		// 1
a["foobar"];	// 2
a.foobar;		// 2
```

有几个**注意点：**

* del `array`某个元素，却不会改变`array`长度
* 有些东西有着数组的属性，却并不属于数组，比如说`document.getElementByClass`等返回的数据。必须通过`call`等方法让它具有`array`的方法。类如`Array.prototype.slice.call( arguments )`
* `ES6`有`arrat.from`估计是用来将第二点所提及的**类数组的数据**转换为**数组数据**

#### 2.1.1 str和array

`String`是不允许改变本身数值，而`array`是允许的。因此，如果想要借助`array`的方法来操作了`string`。有两种思路

1. 将`string`转化为`array`，然后操作之后，在变为字符串
2. 另外的就是使用`.call`来让`string`使用`array`的方法

* 有的时候， `str`和`array`十分类似。有着差不多的属性，如果字符串要用到数组的一些方法，需要借助`call`方法。但是是由限制的：
  * 如果`array`的方法是在原数组上修改的，那么使用`.call`就没有办法来操作`string`
  * 相反的，如果是返回一个新的数组，就可以使用`.call`来操作`string`
* 数组有一个`map`方法十分好用，值得注意（遍历数据，并进行相应的操作的）

### 2.2 Number

有些特殊的数值，比如说无穷大或者计算机能显示的最大数值，在`Number`中都有相应的属性。

* >一个“整数”就是没有小数的十进制数字。也就是说，42.0和“整数”42是等价的
* 数值过大使用`a.toExponential()`
* 保留几位小数，使用`a.toFixed( 0 )`
* 指定有效位数，使用`a.toPrecision()`，类如`42.6`表示有效位数是三位
* 要知道，所有语言中数字基本上都是粗略表示，可以用`Number.EPSILON`来判断两个数字是否差值小到可以认为相等。有的时候只能在两个数字差值小于多少就认为是相等的。
* 整数检查`Number.isInteger`

#### 2.2.1 NaN

* 类型：`Number`
* 特性：自身不等于自身，可以用来自己创建`Number.isNaN`函数方法，或者使用`ES6`
* `2 / 'foo'`会出现`NaN`，更多情况有待验证。

#### 2.2.2 void

`void`操作符。这东西不常见。含义类似跳过，如

```Javascript
var a = 42;

console.log( void a, a ); // undefined 42
```

加到任何一个前面都会等于`underfined`

#### 2.3.2 引用

变量作为函数参数输入，有些时候会直接修改原始数值。

在[js-tips](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%E5%B7%AE%E5%BC%82.md)小小区分总结了一下。现在书里面，由进一步定义了。

`number`虽然是作为值，但是`new number`是作为引用的。但是情况还是上面链接的情况，无法修改`number`，原因就是在`Javascript`中有几类数值是不允许被改变的。例如`string number`所以即使是引用，还是要做区分。

* 输入`array`会改变原始数值 - 因为不是基本类型，属于复杂类型。但是仍要有细分(**什么时候是改变，什么时候是替换**)，什么时候变为引用了。
  ```Javascript
  var a = [1,2,3]
  b = a
  //此时在b上面的修改就是会改变a
  //但是！！！如果
  b = [4,5,6] // b 不再引用a，所以此时改变b就不会改变a
  ```
* 输入数字，并不会改变原始数据

## 3. CH3 - 内置函数

* `String()`
* `Number()`
* `Boolean()`
* **`Array()`**
* **`Object()`**
* **`Function()`**
* `RegExp()`
* `Date()`
* `Error()`
* `Symbol()`

和第一章所提及不同的是, 一是多了许多类型. 应该已经不能说是类型, 而是内置**函数**!

* 因为`new String('a')`创建的变量类型不是`string`而是`obj`!
* 然而以上创建的变量(若是a), `a instanceof String`却是`true`
* 以上加粗的三类却不会出现, `new`和普通创建导致类型不同的情况

### 3.1 DATE&ERROR

之所以单独列出, 因为这两个使用次数比较少. 望引起注意.

* `Date.now`获取当前时间

不是`DATE&ERROR`特有的一种方法就是, 另外一种获取变量类型的方法. 就是通过`Object.prototype.call(xxx)`就可以获`xxx`的类型. 不过格式和`typeof`还是有些不一样的.

对于`error`来说, 也可以通过`new Error`创建变量, 也可以用`toString()`方法获取变量内部的一些信息.

所以, `toString`这个函数很强大, 也很好用.

### 3.2 PROTOTYPE初步

最后简单介绍了一下, 原型(prototype).初认认知就是`prototype`就可以认为是**定义在某一类下的属性方法**.

例如, `String.prototype`打印出来的就是字符串的属性方法. 比如`split/link/slice`等. 

## 4. CH4 - 类型转换

类型转换的方法有很多种, 常见或者已知的有:

* `+`
* `toString()`
* 和`toString()`类似的有`json.stringify`. 有一些不同: 
  * 其规则就是调用传入参数的`.toString()`方法、或者是`toJSON`
  * 从有些数值的转换结果上来看
  * `JSON.stringify`还有可选参数, 是的转换结果更可控

### 4.1 所有东西都是obj的子类

这个标题是我加的, 看到这部分内容有感而加!

如果你定义了一个`obj`, 类似`a={}`或者`a=func..`之类. 你就可以**大胆**(这部分是我自己加的), 定义了一个类, 继承于`Object`. 或者可以参考**3. CH3 - 内置函数**: 

> * `String()`
> * `Number()`
> * `Boolean()`
> * **`Array()`**
> * **`Object()`**
> * **`Function()`**
> * `RegExp()`
> * `Date()`
> * `Error()`
> * `Symbol()`

那么类比`python`, 所有的类都有一些内置的方法, 在`python`中, 比如说`__init__`, `__str__`等等.

在`JS`中, 比如`valueOf`, `toString`, 我们可以通过以下方法(其中一种)为它创建: 

```Javascript
var a = {
	valueOf: function(){
		return "42";
	}
};

a.valueOf() //调用 42
```

这样做法使得, 当通过`Number(a)`拷贝`a`的时候, 会输出`42`. 这一点类似, 如果`python`类中定义了`__str__`, 那么`print(xxx)`就会调用新定义的`__str__`方法, 而不是父类. 

正如`python`中，如果你用`print`调用`class`会执行`__str__`，在`JS`中，`valueOf`和`toString`也有在不同情况下的调用(或许类似的还有`toBoolean`方法)。例如：

首先这两个方法都会在类型转换的时候调用的。那么两个有什么异同。除了上面说的第一点之外，还有隐含的规则

* 例如之前总结的，对于`==`可能存在强制的类型转化，而规则普遍就是`obj->str->number`。所以优先级就是`tostring`高于`tonumber`
* 还有`+`，就意味着一个强制类型转换，目的就是转换为`number`。但是仍有限制：
    * `+a`很明确就是把`a`类型转换为`number`
    * `'42' + 0`，如果按照之前的逻辑，应该是`42`。可是答案是`'420'`。难道定义不准确？个人认为`tostring`优先级是高于`tonumber`
    * `true + 1`，结果是`2`。这里就是直接`tonumber`

```Javascript
var a = {
	valueOf: function() { return 42; },
	toString: function() { return 4; }
};

a + "";			// "42"

String( a );	// "4"
```

### 4.2 真假值

意为可以强制装换为`false`还是`true`的一些数值。假值列表有：

* `undefined`
* `null`
* `false`
* `+0`, `-0`, and `NaN`
* `""`

**其余的都是真值，比如"0"就是`true`!再比如`a=[]也是`true`!**

而问题就在于以上假值，或者相反的真值。在遇到`==`进行等号两边的类型转换的时候，结果不要太过分。

* `if ([])` 是`true`
* `false == []`也是`true` - 这个涉及到了类型转换。可以试着把两边的变量都变味`str->int`就知道它们为什么不相等。

### 4.2.1 隐性转换规则小技巧

为了避免上述情况发生，有以下规则。

* 如果比较的两边有`true` 或 `false`，永远不要使用`==`。
* 如果比较的两边有`[]`，`""` 或 `0`，认真考虑，最好不要使用 `==`。

或许能用`===`就不要用`==`!

### 4.3 类型转换小技巧

小技巧（最好不要和`==`等一起使用）：

* `+`会让数值变成字符串，类似`toString()`
* `-`会让字符串变成数值
* `~`让`-1`变成`false`，其余**数字**变成`true`
* `parserInt and parserFloat`，如名字。字符串提取数字小技巧
* `!!xxx`双重否定**任何**`xxx`，比较实用的小技巧
* `==`会进行类型转换，而`===`不会

由于以上可能导致代码混乱，请小心使用。**最好使用已经封装好了的类型转换方法！**

一些黑科技：
* 以往认知中`|| `或者`&&`返回的应该是`true`或者是`false`其中一个。但是，其实`|| `或者`&&`其实是和三元运算符`?`的作用是一样的，例如：

  ```Javascript
  a || b;
  // roughly equivalent to:
  a ? a : b;

  a && b;
  // roughly equivalent to:
  a ? b : a;
  ```

  也是就说`a || b`在验证通过的时候返回的是`a`，反之，返回的是`b`。至少，明确一点就是`|| `或者`&&`返回的不是`boolean`，只有进一步转换才会变成`boolean`。

* `42 == false`或者`42 == true` 返回的结果都是`false`。很神奇吧，因为`true first convert into number 1`, 所以数值1肯定不会相等于数值42(字符串也一样)！
* `42 == [ 42 ]`返回结果是`true`，这和`array`的转换规则有关。
* 任何`>=`，`<=`都是`<`，或者`>`的结果取反

<div style="text-align:center" markdown="1">
     <img style="max-width: 70%" src="./img/equlitys.jpg"/>
     <p><strong>图1、 类型相等情况一览表</strong></p>
</div>


## 5. CH5 语法

### 5.1 表达式返回值

* `var`语句 - 其实`var`是有返回结果的，返回值是`undefined`。这一点在浏览器控制台打入`var a = 42`就可以看到。
* `var b = (a++)`，b还是等于a++之前的数值。除非`(a++, a)`
* `{}`是有返回值的，等于最后一条语句。

### 5.2 作用域规则

`{...}`形成一个作作用域

#### 5.2.1 label

* 在一些代码比如`for or while`等前面加上`xxx: `, 可以在`continue`或者`break`的时候使用。
* 也可以直接在`{...}`前面加上`xxx: `, 可以在`continue`或者`break`的时候使用。

#### 5.2.2 ES6 IN JS LIKE Python

在`python`可以`return a, b`，然后可以通过两个变量获取返回值。在**ES6**中，可以通过：

```JavaScript
function getData() {
	// ..
	return {
		a: 42,
		b: "foo"
	};
}

var { a, b } = getData();
```

做到类似`python`的作用。但是问题在于你**必须**是`{a, b}` 获取返回值，而不能是`{c, d}`。这里可以发现一个特性（也在`vue project`里面使用到了）就是，如果你在函数参数设置了`{a, b, c}`，输入`{a: 'a', b: 'b', c: 'c'}`时获取`a, b, c`里面的数值。

#### 5.2.3 ERRORS

简单的说明了有哪些错误...

#### 5.2.4 函数参数

每个函数都有一个默认的属性`arguments`，代表输入到函数内的数据是什么。但是这个可能已经被废除了，谨慎使用！

#### 5.2.5 一些不常用到的语句

虽然不常用到，但是还是很有用的。比如：

* `try..finally`，`finally`属于无论都会被执行的代码，无论`try`的结果如何。
* `switch`

#### 5.2.6 优先级

`|| &&`如果一起出现，两者存在优先级。而不是传统认识中的从左到右的执行循序。其中`&&`优先级是比`||`高的

## 6. 总结

* JS内置变量的一些特性
  * 特意说明了`array`数值的一些特性，以及一些类数组的数据如何使用`array`的方法(`by .call()`)
* 内置变量和内置函数之间的区别和相同点。以及导致的类型转换（显式/隐式）。
* 类型转换的一些小技巧
* 判断语句，判断符号：
  * `|| &&`特点
  * 真假值
  * 有些变量不适合`==`，最好使用严格模式
  * 大小判断的一些小坑
* `ES6` 返回值如何像`Python`
* `JSON`虽然是`JavaScript`语法的子集，但是从`JSON`语法上来讲，并不是正确的语法。因为`json`的`key`值是带有引号的。而`JavaScript`中`object`中`key`值是不带有引号。
