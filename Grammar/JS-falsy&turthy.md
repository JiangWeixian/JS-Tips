# JS-falsy&turthy
> falsy&turthy 感觉就是JS里面大坑。是自己总结，不过也在chrome.console后台里面测试过了。

## 正文

在JavaScript中`falsy`的明确列表如下：

* "" （空字符串）
* 0, -0, NaN （非法的number）
* null, undefined
* false

`falsy`含义就是转换为`boolean`的时候就会转换为`false`。所以

综合来说就是，如果我们使用`Boolean([])`或者`if([])`那么表达式要根据 **`falsy`列表**来。**所以涉及到`falsy`就不要往复杂的转换规则想(什么调用`valueof or toString`之类的)**

而`==`涉及到复杂的转换规则，`===`要求两边的数据类型一致，也就是不涉及转换。