# Array - 数据是否初始化小坑
> 记录Array&undefined

<!-- TOC -->

- [Array - 数据是否初始化小坑](#array---数据是否初始化小坑)
  - [Array&undefined - 全记录](#arrayundefined---全记录)
    - [Array&undefined - Q&A](#arrayundefined---qa)

<!-- /TOC -->

## Array&undefined - 全记录

如果尝试以下代码就会发现一个很奇怪的地方

```JavaScript
let res = Array(3).map((item, index) => {
  return index
})
let anres = [undefined, undefined, undefined]
anres.map((item, index) => {
  return index
})
```

而且你会发现：

```JavaScript
typeof res[0] // 结果为undefined
typeof anres[0] // 结果也是undefined
```

如果你再测试以下的代码：

```JavaScript
0 in res // 结果为false
0 in anres // 结果为true
```

**显然这一点才是上面两段代码不同原因**，之所以会是因为这个，这是由于在`map`函数的实现中，会经过`key in array`这一步。只有这一步为`true`才会进行`map`内部的操作。

在[Array&undefined - Q&A1](#arrayundefined---qa)中提到的例子，都会出现上面的情况。

> [StackOverflow的改进方案](https://stackoverflow.com/questions/5501581/javascript-new-arrayn-and-array-prototype-map-weirdness?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)可以通过以下方式解决：

```JavaScript
let res = Array(3).fill(null).map((item, index) => {
  return index
})
```

### Array&undefined - Q&A

1. **Q&A1 -** 为什么会出现`0 in res // false`的情况？

    > 其实这算是规定。**如果没有显示的指定`index`上的数值，就会出现上面的情况。**

    ```JavaScript
    Array(3) // 等价于[,,,]
    [,,,].map((item, index) => {
      return index
    })
    可以发现上面map结果就是空。
    ```

    可能出现`index`位置上数值没有指定情况为：

    ```JavaScript
    // 情况1: Array初始化创建方式
    var ary = Array(3);
    ary[0]=2
    ary.map(function(elem, index) { return index; });
    // 情况2: 直接设定超过原数组长度的，导致中间一部分是未初始化状态
    var ary = [1,2,3]
    ary[10]=2
    ary.map(function(elem, index) { return index; });
    // 情况3: 直接[,,,]
    var ary = [,,,]
    ary.map(function(elem, index) { return index; });
    ```

2. **Q&A2 -** 除了`map`，`Array`其他遍历方式也是如此吗？

    > [Array&undefined - 全记录](#arrayundefined---全记录)所提到的`map`坑对`foreach filter`都是适用(可以说基本上都是吧)，**除非你通过`for (var i = 0....)`这种方式取代原先的遍历方式。**