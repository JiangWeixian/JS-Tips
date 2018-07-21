# JS - 继承关键字
> 就是要知道关键字，虽然有点无聊，但是当别人提到的时候，需要了解

## 优缺点

* [JS-继承最佳实践解析](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E7%BB%A7%E6%89%BF%E4%BB%A5%E5%8F%8A%E7%B1%BB-%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%E8%A7%A3%E6%9E%90.md) / 继承中坑
* [JS-proto&prototype&constructor&new](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-__proto__%26%26prototype%26%26new.md) / object.create发生了什么

## 混合继承/组合继承

> 构造器继承/原型链继承两种方式

```JavaScript
function parent () {
  this.firstname = 'parent'
}
parent.prototype.showname = function () {
  return this.firstname
}

function child () {
  parent.call(this) // construtor继承
  this.lastname = 'child'
}
child.prototype = Object.create(parent.prototype) // 部分原型链继承
child.prototype.say = function () {
  return this.lastname
}
```

* `praent construtor`里面`this`指向明确(变为了`child`)，不会共享
* `parent.prototype`方法共享

## 原型链继承

```JavaScript
function parent () {
  this.firstname = 'parent'
}
parent.prototype.showname = function () {
  return this.firstname
}

function child () {
  this.lastname = 'child'
}
child.prototype = new parent() // 部分原型链继承
child.prototype.say = function () {
  return this.lastname
}
```

* `parent construtor`内部属性被共享了，如果内部有`array`这种引用类型的，就有[缺陷解析proto&prototype&constructor&new](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-__proto__%26%26prototype%26%26new.md)
* `parent prototype`同样也被共享了，这一点和上衣继承方式一致

## 构造器继承

```JavaScript
function parent () {
  this.firstname = 'parent'
  this.showname = function () {
    return this.firstname
  }
}

function child () {
  parent.call(this)
}
```

如果父类方法写在`prototype`内部就没有办法构造器继承。所以全部方法只能够写在`constructor`内部，并通过`call`改变执行。








