# JS基本类型和引用类型差异

## 正文

* [博客地址](https://www.cnblogs.com/ljuyi/p/6100071.html)

JS类型`Number`, `Boolean`,`undefined`,`Object`,`String`(**未加入ES6**)。其中`Object`, `Array`, `Function`(后面两个是根据第一个构建)为复杂类型，剩余的就是基本类型。

这两个的区别（并不是唯一）在于作为参数传递时候的不同。

```JavaScript
var a = {n:3}
(function(a){
  console.log(a)
  a.n=2
  var a = {n:1}
  console.log(a)
})(a)
console.log(a)
```

运行结果为：

```JavaScript
{n: 3}
{n: 1}
{n: 2}
```

```JavaScript
var a = 3
(function(a){
  console.log(a)
  a=2
  var a = 1
  console.log(a)
})(a)
console.log(a)
```

运行结果为：

```JavaScript
3
1
3
```

可以发现第一段代码修改了`a`，而第二段代码没有。那么在相同修改方式下，为什么有这样的方式。

这是由于，第一段代码中a是`{n:3}`类型为`object`，属于复杂类型。而第二段代码是基本类型。导致了作为参数传递的时候，`object`此类是作为引用类型，指向了内存同一部分地址。而第二段则是值传递，并没有这个闲置。
