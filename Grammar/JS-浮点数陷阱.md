# 浮点数陷阱

## 前置知识 - JS中的数据存储

可以先看看我关于[大整数]()的总结。

## 前置知识 - 什么是浮点数陷阱？

一行代码表示`0.1+0.2===0.3`会是`false`

而`7*0.8`最后结果是`5.6000000000000005`。

上诉两个都是非常让人感到疑惑。

因为不符合认知。

在`MDN`中`Number`有一个函数获得一个数字在存储中的真实表示：

```JavaScript
var numObj = 5.123456;
console.log("numObj.toPrecision()  is " + numObj.toPrecision());  //输出 5.123456
console.log("numObj.toPrecision(5) is " + numObj.toPrecision(5)); //输出 5.1235
console.log("numObj.toPrecision(2) is " + numObj.toPrecision(2)); //输出 5.1
console.log("numObj.toPrecision(1) is " + numObj.toPrecision(1)); //输出 5
```

可以得到一个结论，其实我们看的`7`可能后面带着一串0，只是我们看不见而已。才会出现上面的`bug`

而且。

而JS在计算过程中总是先转换为二进制->在实现二进制相加(或者相乘)->再转换为10进制，**再因为浮点数显示长度限制，只有前多少位的二进制数字才能够被转换为10进制。才有了上面不符合认知的情况**

## 解决 - 如何得到精确的计算结果

有很多解决方案

1. 像python那样使用`numpy`的库
2. 如果仅仅是判断两个数字是否相等，可以通过`Number.EPSILON`属性，判断两个数字如果差值在这个范围内的话，就返回是相等。

但是如果我们真的是想要一个计算结果，相对准确的那种。

可以参考这里的[总结](http://www.css88.com/archives/7340)。大致思路也就是

1. 先变为整数(比如说乘以1000之类)，不要小数再计算
2. 最后才除以1000