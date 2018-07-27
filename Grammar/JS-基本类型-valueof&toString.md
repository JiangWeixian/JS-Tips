# JS - 基本类型 valueof&tostring
> 主要用于`==`或者其余类型变换的情况

## 规则

1. `valueof & toString`这些都是可以被重写的。
    * `valueof`其实是往 **Number类型转换**
    * `toString`其实是往 **String类型转换**
2. 比较转换规则见[JS高程-基本类型比较规则设定](https://github.com/JiangWeixian/JS-Books/tree/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH3-%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5)

## 基本类型 - valueof&tostring全记录

数据类型初始化方式见[JS-基本类型-值类型](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B-%E5%80%BC%E7%B1%BB%E5%9E%8B.md)，其中提到三种方式分别为：

```JavaScript
var a = 1
var newa = new Number(1) // 此方式和下面方式对于传递数据，涉及到类型转换，至于转换得到什么结果。此时需要联合来看
var numa = Number(1)
```

会进行共同说明！以下先讨论 **值类型**

* `Boolean`(举例说明) - 

    **字面类型**

    ```JavaScript
    // false同样
    var a = true
    a.valueOf() // 结果true
    a.toString() // 结果"true"
    ```

    **new关键字**

    ```JavaScript
    var a = new Boolean(xx)
    // valueOf() or toString()结果要根据由下面规则转换得到
    a.valueOf() // 结果true
    a.toString() // 结果"true"
    ```

    其中`new Boolean(xx)`对于`xx`可能涉及到类型转换。转换规则是[JS-falsy&truthy规则](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-falsy%26turthy.md)。转换得到的结果为 **Boolean(xx根据[JS-falsy&truthy规则](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-falsy%26turthy.md)得到结果)**，所以`a`是个`object`，然后括号内部结果是`true or false`(来自xx根据[JS-falsy&truthy规则](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-falsy%26turthy.md)得到结果)

    **数据类型**

    ```JavaScript
    var a = Boolean(xx)
    // valueOf() or toString()结果要根据由下面规则转换得到
    a.valueOf() // 结果true
    a.toString() // 结果"true"
    ```

    和上面`new`不同点在于，`a`不再是一个`object`，其为根据[JS-falsy&truthy规则](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-falsy%26turthy.md)得到结果。因此`new Boolean(xx) = new Boolean(Boolean(xx))`

这里可以小小总结下：

* 因为`new some(xx) or some(xx)`如果`xx`数据类型不等于`some`。那么就要转换，`some = Boolean`就是 **falsy&truthy规则**。
* 经过了`var a = new some(xx) or var a = some(xx)`之后，`a.valueOf()`就是`xx`经过`xx->some`转化规则之后的数值，假设是`yy`。`a.toString()`就是再`yy`外面加上引号即`"yy"`。**至于xx->some转换规则是什么？**

    > 由于对于引用类型来说，通过`new some(xx) or some(xx)`其实是创建对象，而不是类型转换。**这里的`some`指的是`number or string`**

    > (number)xx->xx.valueof(): 如果得到`object or NaN`。则xx->xx.toString()，得到的结果，如果可以转换为数字就是数字，如果不能够转换为数字就是`NaN`。这里其实也好理解，因为`boolean or string -> number`转换结果都是可以知道的，**对于引用类型，Object or Array无论通过哪种方式(new or 字面量类型)创建都是得到`object`。那么就和其字面类型声明就没有区别，此时见[引用类型转换规则]()**。因此这部分可以直接跳到引用类型部分。

    > (string)xx->xx.toString()

**引用类型**

1. `Array` - 

    **字面量类型**

    ```JavaScript
    var a = [1,2]
    a.valueOf() // 结果为[1,2]
    a.toString() // 结果为"1,2"
    ```

    如果是以上情况回到值类型中，很明显`"1,2"->number`结果为`NaN`

    **new**

    ```JavaScript
    var a = new Array(7, 7) // 注意传入不同参数数目是不同的具体见MDN
    a.valueOf() // 结果为[7,7]
    a.toString() // 结果为"7,7" 基本也就是内部数据内容,拼接了。
    ```

    在[JS-Array坑](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-Array-%E5%B0%8F%E5%9D%91.md)中提到如果`array index`上的数据是未申明的状态。那么`toString`的到结果是`,,`。这和`index`上申明一个`undefined`结果是不一样的。

    `Array(3)`声明的结果也是一样的。

2. `{}`

    **字面量类型**

    ```JavaScript
    var a = {index: 1, name: {index: 2}}
    a.valueOf() // 结果为{index: 1, name: {index: 2}}
    a.toString() // 结果为"[object Object]"
    ```

    **注意可以通过`new object or object`创建`array`。此种情况下，就要根据`Array`的规则来了。**

3. `function`

    **字面量类型**

    ```JavaScript
    var a = function () {console.log(1)}
    a.valueOf() // 结果为ƒ () {console.log(1)}
    a.toString() // 结果为"function () {console.log(1)}"
    ```

    至于`function`通过`new`创建也是可以做到的(而且能够运行)，至于如何创建，见MDN。

**题外话**

由于`new`关键字的特点，对于`var a = new Boolean(xx)`之后对于`a`如果涉及到[JS-falsy&truthy规则](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-falsy%26turthy.md)。结果都是`true`。