# 光标操作
> window.getSelection or document.selection.createRange

## 前言

很早就有的`api`，加了很多新的接口函数。[Can i use](https://caniuse.com/#search=window.getS)覆盖率大约有80%以上。

* `window.getSelection`和`docment.selection.createRange`是因为后者需要兼容`ie`。
* 光标操作还可以通过`new Range`。建议还是通过上面两种方法创建。

`mdn`上的[refences](https://developer.mozilla.org/en-US/docs/Web/API/Selection)

