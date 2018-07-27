# JS - 基本类型 valueof&tostring
> 主要用于`==`或者其余类型变换的情况

## 规则

1. `valueof & toString`这些都是可以被重写的。
    * `valueof`其实是往 **Number类型转换**
    * `toString`其实是往 **String类型转换**
2. 比较转换规则见[JS高程-基本类型比较规则设定]()

## 基本类型 - valueof&tostring全记录

数据类型初始化方式见[JS-基本类型-值类型]()，其中提到三种方式分别为：

```JavaScript
var a = 1
var newa = new Number(1) // 此方式和下面方式对于传递数据，涉及到类型转换，至于转换得到什么结果。此时需要联合来看
var numa = Number(1)
```

会进行共同说明！

1. `Boolean` - 

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

    其中`new Boolean(xx)`对于`xx`可能涉及到类型转换。转换规则是[JS-falsy&truthy规则]()。转换得到的结果为 **Boolean(xx根据[JS-falsy&truthy规则]()得到结果)**，所以`a`是个`object`，然后括号内部结果是`true or false`(来自xx根据[JS-falsy&truthy规则]()得到结果)