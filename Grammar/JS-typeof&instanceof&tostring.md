# typeof & instanceof & tostring

## typeof

JS中类型有

* `Boolean`
* `Number`
* `undefined`
* `String`
* `Symbol`(ES6)

以及

* `object`

`Array Map Set`可以归结为`object`，`typeof`还会得到`function`

这么多，不可能一切都是`Object`，的确使用`typeof`能够得到以上类型。

**题外话**

`Array Map Set`创建数据方式有所不同。

```JavaScript
var a = []
var b = new Map()
var c = new Set()
```

### 问题所在

而问题就在于，如果我们通过`new`来创建，例如`var a = new Number()`创建，使用`typeof`判断得到并不是`number`而是`object`。

## tostring

为了解决这个问题，可以通过`Object.prototype.toString(xx)`传递进来，这样无论怎样的数据都是不同的。

## instanceof

> MDN所得是若b instanceof a，比较的是`a.prototye`是否在`b`原型链上。

以上两种都很完美，但是如果我们是 **自建类。** 以上两个应该没有办法满足需求。

```javascript
function Foo () {}
Foo.prototype.name = function () {}
var foo = new Foo()
foo instanceof Foo
```

根据[JS-proto&prototype&constructor]()理解。此时foo结构为：

```JavaScript
some data // 来自Foo内部
__proto__
  // 来自Foo.prototype
  name
  constructor
  __proto__
```

可以解释结果为`true`

但是如果我们设置`Foo.prototype = {}`。(由于这是复制操作，所以不会修改`foo` **来自Foo.prototype**那部分方法。但是如果`Foo.prototype.ou = function() {}`那么会修改`foo` **来自Foo.prototype**那部分方法，就是后者会让`__proto__`多了一个`name`方法。可根据[JS-值类型和引用类型]())

此时前者做法`foo instanceof Foo // false`。后者做法`foo instanceof Foo // true`。**后者让我很疑惑，不太理解到底是根据什么比较的？**

### 总结

**但是目前最常用的还是toString方法，应该来说是魔改过的toString**。和传统的`typeof a`不同，我们使用`Object.prototype.toString.call(a)`，我们可以得到`[object number]`

因此，使用顺序为`Object.prototype.toString.call(a)>instanceof>typeof`，但是如果`new`创建的是自己的实现的类 **第二种方式**是更适合采用的结果。
