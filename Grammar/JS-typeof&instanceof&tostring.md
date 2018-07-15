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

> 根据的是constructor

以上两种都很完美，但是如果我们是 **自建类。** 以上两个应该没有办法满足需求。

```javascript
function Foo () {}
var foo = new Foo()
foo instanceof Foo
```

结果为`true`

**但是继承情况由意外**

```javascript
function Foo () {}
function Bar () {}
Bar.prototype = Object.create(Foo.prototype)
var bar = new Bar()
bar instanceof Foo
bar instanceof Bar
```

因为此时`Bar.prototype.construtor`通过`Bar.prototype = Object.create(Foo.prototype)`操作之后，变为了`Foo.prototype.construtor`。所以都是`true`


如果。

```JavaScript
function Foo () {}
function Bar () {}
Bar.prototype = Object.create(Foo.prototype)
Bar.prototype.construtor = Bar
var bar = new Bar()
bar instanceof Foo
bar instanceof Bar
```

**但是目前最常用的还是toString方法，应该来说是魔改过的toString**。和传统的`typeof a`不同，我们使用`Object.prototype.toString.call(a)`，我们可以得到`[object number]`

因此，使用顺序为`Object.prototype.toString.call(a)>instanceof>typeof`，但是如果`new`创建的是自己的实现的类 **第二种方式**是更适合采用的结果。
