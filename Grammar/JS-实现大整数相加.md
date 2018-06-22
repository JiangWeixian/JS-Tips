# JS - 大整数相加
> 将代码复制到浏览器`console`运行是最快的速度

## 前置知识

JS中数据以**8字节存储**，1个字节代表8bit。也就是一共64个0。字节、bits之间关系可以看[这里](https://blog.csdn.net/cx_wzp/article/details/8104224)。也就是说JS中最大数应该只能是`2^63-1`。**但其实不是**，正如同[这篇文章](https://segmentfault.com/a/1190000002608050)所说的，JS对`double`浮点数的处理有所不同，我能够用到只有`53`。所以应该是`2^53-1`。可以再浏览器`console`通过`Number.MAX_SAFE_INTEGER`查看。

实现大整数相加有两种方法，讲其转换为二进制进行操作是比较优雅的。另一种折中的方法是，先将大数据转化为字符串数组，同时变成相同的长度（也就是再数组某些位置需要补零）。然后对应位置相加**注意超过10就要进一位的问题**

再JS中进行BITS操作并不常见，但是的确提供这样的结果，[MDN上关于位操作符的定义](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise_operators)

## 上代码！

* `~`操作符是按位非，[解析在这](https://segmentfault.com/a/1190000003731938)
* `~data = -(data+1)`
    * 得到的结果都要变为整数。向下取整`5.9 -> 5`
    * 如果`data`并不是整数之类的，就要进行类型转化使其能够相加，一般是`toSting()`。就像是`undefined+1`，对于`~undefined`转换步骤为`undefined->toString()=NaN->NaN+1=NaN`。**但是在这明显不成立！**，因为记住这是位运算，所以`+1`是bits操作，`undefined`的操作应该是`Boolean(undefined)=0`
* `~~data` 可以先进行一次`~`然后在进行一次`~`    

```js
function sumStrings(a,b){
    var res='', c=0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || c){
        c += ~~a.pop() + ~~b.pop();
        res = c % 10 + res;
        c = c>9;
    }
    return res.replace(/^0+/,'');
}
```

* 输入`a or b`都是字符串
* `~~`在其中的主要目的就是取整（这是`~`很重要的一个功能）
* 如果`a b`长度不一怎么办，那么`pop`就会弹出`undefined`，得到`~~undefineds`结果应该是`0`
* 只有对`c`取余数并判断是否进一位

