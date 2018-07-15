# 1. 继承与类 - 最佳实践解析
> 知道所以然

<!-- TOC -->

- [1. 继承与类 - 最佳实践解析](#1-继承与类---最佳实践解析)
  - [1.1. 规则](#11-规则)
  - [1.2. 前置](#12-前置)
  - [1.3. 类 - 各种情况说明](#13-类---各种情况说明)
    - [1.3.1. 数据共享 - data in prototype](#131-数据共享---data-in-prototype)
    - [1.3.2. 数据共享 - data in prototype - 总结](#132-数据共享---data-in-prototype---总结)
    - [1.3.3. 题外话](#133-题外话)
  - [1.4. 继承](#14-继承)
    - [1.4.1. 数据共享 - data in prototype](#141-数据共享---data-in-prototype)
    - [1.4.2. 总结](#142-总结)

<!-- /TOC -->

## 1.1. 规则

* 构造函数私有是因为`new`关键字`this`重新定向
* `prototype`共有是JavaScript的特性

## 1.2. 前置

> constructor私有的，prototype是公有的。私有意味着不会被任何一个实例共享，不会共享意味着，其中一个实例修改了，另一个实例不会对应修改；公有意味着任何一个实例共享数据，共享指的是内存，所以要区分引用类型和值类型。

先给出[JS高级程序设计-继承最佳实践](https://github.com/JiangWeixian/JS-Books/tree/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH4-%E5%8F%98%E9%87%8F%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%86%85%E5%AD%98)中实现类和继承的例子：

```JavaScript
function parent () {
  if (!(this instanceof parent)) {
    return new parent()
  }
  this.name = 'parent'
  this.data = []
}
parent.prototype.add = function () {
  this.data.push(1)
}
parent.prototype.changename = function () {
  this.name = 'child' + Math.random()
}
```

* `if`判断是为了避免全局污染，链接中有说明。
* 也就是数据放在`construtor`，而方法放在`prototype`上面共享。

## 1.3. 类 - 各种情况说明

### 1.3.1. 数据共享 - data in prototype

> prototype上面所有数据都会被共享。**但是共享的是内存。**

```JavaScript
function parent () {
}
parent.prototype.add = function () {
  this.data.push(1)
}
parent.prototype.changename = function () {
  this.name = 'child' + Math.random()
}
// 将数据移动至prototype
parent.prototype.name = 'parent'
parent.prototype.data = []

// 问题来了
var p1 = new parent()
var p2 = new parent()
```

1. 情况1

    ```JavaScript
    p1.add()
    p2.add()
    ```

    可以发现`data = [1, 1]`。这是因为`p1 and p2`在`parent`内存上找到的`data`。如果:

    ```JavaScript
    p1.data = []
    p2.data = []
    p1.add()
    p2.add()
    ```

    发现`data = [1, 1]`。可以理解为`p1.data`在自己实例上创建了`data`，不会再继续往`prototype`上冒泡寻找了。

2. 情况2
    ```JavaScript
    p1.changename()
    p2.changename()
    ```
    `p1.name`以及`p2.name`都是不同的，互相不影响。这是因为[值类型和引用类型的不同](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%E5%B7%AE%E5%BC%82.md)，所以`p1.name and p2.name`指向的是不同的内存的地址，所以修改不影响。而`data`由于是引用类型，所以内存地址是一个，修改其中数据(因为不会重新分配数组内存)会同步修改所有引用这内存地址的对象，**而赋值会重新分配。**


### 1.3.2. 数据共享 - data in prototype - 总结

**所以我们可以得到结论，数据应该是放在函数内部，而不是`construtor`里面**

```JavaScript
function parent () {
  this.name = 'parent'
  this.data = []
}
parent.prototype.add = function () {
  this.data.push(1)
}
parent.prototype.changename = function () {
  this.name = 'child' + Math.random()
}
```

* **Q&A1.** 那么为什么不会共享？

> 首先要区分，构造函数`new parent`以及`parent`两个区别。

* 通过`new`关键字是将`parent`当作了构造函数。所以`this`被重新指定，也就是`p1 p2`是两个不同的`this`。**所以是私有的。**
* 而`parent()`这一点就要特别注意了，因为此时`this`是`windows`。

    ```JavaScript
    var p1 = parent()
    var p2 = parent()
    ```

    由于`this=window`是全局的。**所以是公有的，而且还造成了全局污染。**

    为了解决全局污染的问题，进行了

    ```JavaScript
    if (!(this instanceof parent)) {
      return new parent()
    }
    ```

所以关于 **类这部分**，最佳实践为：

```JavaScript
function parent () {
  if (!(this instanceof parent)) {
    return new parent()
  }
  this.name = 'parent'
  this.data = []
}
parent.prototype.add = function () {
  this.data.push(1)
}
parent.prototype.changename = function () {
  this.name = 'child' + Math.random()
}
```

### 1.3.3. 题外话

首先我们要要了解`new`关键字做了什么。

![new干了什么](https://raw.githubusercontent.com/JiangWeixian/JS-Tips/master/Grammar/img/newdowhat.PNG)

可以理解为用一个临时对象继承了`parent`，并返回。

1. 所有`parent.prototype`数据被共享了。
2. 而且 **临时对象指向的是父类的prototype**，所以`p1.hasOwnProperty('data') // false`，而`parent.hasOwnProperty('data') // true`。因为这个方法只会查找自己的原型，而不是父类的。

## 1.4. 继承

再实现类最佳实践基础上：

```JavaScript
function child () {}
child.prototype = Object.create(parent.prototype)
child.prototype.show = function () {
  console.log(this.name, this.data)
}
var c1 = new child()
```

首先我们要知道`Object.create()`做了什么：

```JavaScript
function create (obj) {
  var F = function () {}
  F.prototype = obj
  return new F()
}
```

作用和`new`关键字差不多，依旧还是共享了原型上面的方法(或者属性)，**因为c1.hasOwnProperty('data')依旧是false**。`Object.create()`一般用来复制原型方法，见[object.ceate浅度复制实践](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E6%B5%85%E5%B1%82%E8%B5%8B%E5%80%BC%E4%B9%8BObject.create.md)。

### 1.4.1. 数据共享 - data in prototype

如果数据写在父类`prototype`依旧会发生，因为`Object.create()`使得原型上的属性被浅度复制到了`child.prototype`，那么`child.xx = yy`不会影响父类，但是`child.xx.zz = yy`会影响父类。

1. 情况1 - `child.prototype = new parent()`

    这种情况下，即使数据写在`construtor`内部也是无效的。

    ```JavaScript
    function parent () {
      if (!(this instanceof parent)) {
        return new parent()
      }
      this.name = 'parent'
      this.data = []
    }
    parent.prototype.add = function () {
      this.data.push(1)
    }
    parent.prototype.changename = function () {
      this.name = 'child' + Math.random()
    }
    
    function child () {}
    child.prototype = new parent()
    child.prototype.show = function () {
      console.log(this.name, this.data)
    }

    var c1 = new child()
    var c2 = new child()
    ```

    在`c1.add()`情况下，`c1 or c2`的`data`数据都被改变了。

    这是因为`new parent()`使得原本在`constructor`上面的数据被共享到了`child.prototype`上。和 **类 - 数据共享 - data in prototype**情况一致。所以没有办法隐藏了。

    所以我们采用`Object.create()`
  
2. 情况2 - 这样`parent`在`construtor`上面的数据没办法获取，因为`Object.create(parent.prototype)`既没有`new parent`也没有`parent()`。既然没有办法执行，就没有进行 **执行上下文的`this`规则。** 自然就没有数据。所以：

    ```JavaScript
    function parent () {
      if (!(this instanceof parent)) {
        return new parent()
      }
      this.name = 'parent'
      this.data = []
    }
    parent.prototype.add = function () {
      this.data.push(1)
    }
    parent.prototype.changename = function () {
      this.name = 'child' + Math.random()
    }
    
    function child () {
      // 新添加的
      parent.call(this)
    }
    child.prototype = Object.create(parent.prototype)
    child.prototype.show = function () {
      console.log(this.name, this.data)
    }

    var c1 = new child()
    var c2 = new child()
    ```

    这样即使`c1`继承了数据，且不会影响了！

### 1.4.2. 总结

有了最佳实践：

1. 方法在`prototype`，数据在`construtor` - 且注意数据不要污染
2. 继承使用`Object.create(parent.prototype)`以及`parent.call(this)` - 继承父类方法以及属性

然而这一点可能会因为`class`关键字而没有意义。因为修正以上基于原型的错误。