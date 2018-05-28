# 光标操作
> window.getSelection or document.selection.createRange

## 前言

很早就有的`api`，加了很多新的接口函数。[Can i use](https://caniuse.com/#search=window.getS)覆盖率大约有80%以上。

* `window.getSelection`和`docment.selection.createRange`是因为后者需要兼容`ie`。
* 光标操作还可以通过`new Range`。建议还是通过上面两种方法创建。

`mdn`上的[refences](https://developer.mozilla.org/en-US/docs/Web/API/Selection)

## 代码段

### 将光标移动到最后

```javascript
keepLastIndex (obj) {
    let range
    if (window.getSelection) {
        obj.focus() // 之后focus的对象才有可能有光标
        range = window.getSelection() // 获得光标操作的实例（权限） 
        range.selectAllChildren(obj) //  传递的obj是dom对象，选择dom对象下所有子节点
        range.collapseToEnd() // 将光标移动到最后一个子节点
    } else if (document.selection) {
        // 适配ie浏览器
        range = document.selection.createRange()
        range.moveToElementText(obj) // 等价range.collapseToEnd()
        range.collapse(false) // 将起始光标和结尾光标合并
        range.select()
    }
}
```

* `selectAllChildren` - 我们只能够获取某个节点，无法获取某个节点内部的具体位置