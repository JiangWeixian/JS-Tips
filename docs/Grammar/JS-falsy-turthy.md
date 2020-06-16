# JS-falsy&turthy
> falsy&turthy(真值假值)。在判断表达式转化为`boolean`格式有用。

在JavaScript中`falsy`的明确列表如下：

* `""`(空字符串)
* `0, -0, NaN`(非法的number)
* `null` `undefined`
* `false`

`falsy`含义就是转换为`boolean`的时候就会转换为`false`。所以

综合来说就是，如果我们使用`Boolean([])`或者`if([])`那么表达式要根据 **`falsy`列表**来进行`boolean`的转换。**此时不会涉及到复杂的转换规则想(什么调用`valueof or toString`之类的)**

- 而`==`涉及到复杂的转换规则
- `===`要求两边的数据类型一致，也就是不涉及转换。