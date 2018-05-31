# 改变上下文
> call&apply&上下文环境

## 什么是上下文环境

我总结了[youdontkonwjs-相关部分](https://github.com/JiangWeixian/JS-Books/blob/master/youdotkonwjs/scope%26closures/scopeandclosures.md), 第三章之后都可以看.

* 有一句话一定要记住，`this`指向在运行的时候指定
*  `IIFE`这个一定要了解, 因为创建了闭包!!

```JavaScript
(function () {
   // some code 
})()
```

在此内部的代码并不会污染外部作用域.

* 闭包一定要理解

最直接的理解例子：

```JavaScript
function foo() {
	var a = 2;

	function bar() {
		console.log( a );
	}

	return bar;
}

var baz = foo();

baz(); // 2 -- 哇噢，看到闭包了，伙计。
```

那么例子总结一下，什么叫作闭包。**外部`baz`仍然有`foo`内部的引用，这个概念就是闭包。**。扩展开来，外部`baz`（不仅仅是底层）可以访问到同一级别的`foo`内部的变量。因为`baz`和`foo`都处于同一个作用域内部。**baz可以使用bar，以及bar可以使用foo，这就是原因。**


## call&apply&bind

这三个函数都能够改变上下文环境.

先区别这三个函数:

* `call` - 多个参数，第一个是对象，指定上下文环境，之后是一串的参数列表

* `apply` - 两个参数，第一个和`call`一样，之后数参数**数组**

* `call&apply`除了第一个之外后面参数都是备选的

**来看看调用`call`的例子**, `call&apply`一般是下面例子的格式：

```javascript
Object.prototype.toString.call(a)
```

此时`a`就是上下文环境, 如何在`toString`内部含有`this.xx`的调用, 这个`this`就是指向得`a`. 

如果要给`call`传递额外的参数就是`Objection.prototype.toString.call(a, param1, param2)`.


**来看看调用`apply`**的例子:

```javascript
// arr = [12,3,4],通过这个函数找出最小数字
Math.min.apply(null, arr)
```

* 可以发现上下文环境为`null`, 说明`min`函数内部不存在`this`调用
* 和`call`不同, 传递的是参数的数组

**这里可以发现一个疑问?** `Object`是有`prototype`的, 而`Math`却没有. 因为`Math`不能够通过`new`创建一个对象. 因此没有`prototype`

### bind

这个单独领出来, 的确用的比较少. 具体可看[这篇博客](http://web.jobbole.com/83642/)

* ｀bind｀只有一个参数代表上下文环境

不过**注意：**　`bind`会返回一个函数，你需要再一次调用它，而`call&apply`则是立刻调用．