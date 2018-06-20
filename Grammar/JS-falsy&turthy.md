# JS-falsy&turthy
> falsy&turthy 感觉就是JS里面大坑。是自己总结，不过也在chrome.console后台里面测试过了。

## 正文

在JavaScript中`falsy`的明确列表如下：

* "" （空字符串）
* 0, -0, NaN （非法的number）
* null, undefined
* false

`falsy`含义就是转换为`boolean`的时候就会转换为`false`。所以

* 显式类型 - CH1有类型转换的例子。
* 隐式类型 - 一些比较符号会将两个**类型不同**变量进行类型转换，`obj->str->int`
* `===` - 是强制禁止转换的比较的。

综合来说就是，如果我们使用`Boolean([])`或者`if([])`那么表达式要根据 **`falsy`列表**来。

另外的如果使用`==`，那么就要根据第二条**隐式转换公式**。举例来说就是：

```Javascript

true == [] // []->""->0, false

true == [1] // [1]->"1"->1, true->1。所以true

true == [1,2] // [1,2]->"1,2"->NaN。所以false

```