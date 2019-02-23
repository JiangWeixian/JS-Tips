# 类 - 父类控制子类
> 如何通过父类来控制子类

## 前置 - 来源

1. 条件一：定义属性方法`say` ，实现`animalA.say !== animalB.say`及 `animalA.__proto__.say === animalB.__proto__.say`
2. 条件二：实现` Animal.die(animal) `，标记该实例为死亡。
3. 条件三：实现` Animal.all() `，返回所有创建但是未标记为死亡的`animal`实例。

见[JS-proto&prototype&constructor](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-__proto__%26%26prototype%26%26new.md)
* 条件1 - 指的是`constructor`和`prototype`区别。
* 条件2 - 下面分析

## 前置知识 - 类与类原型

最好先理解[JS-proto&prototype&constructor](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-__proto__%26%26prototype%26%26new.md)内部所有知识。

```JavaScript
function f () {}
f.prototype.say = function () {}
var newf = new f()
```

* `f`是类
* `f.prototype`是类的原型
* `newf`是该类的实例

三者区别见[JS-继承与类-类和类原型]()

在[JS-proto&prototype&constructor](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-__proto__%26%26prototype%26%26new.md)中我提到了：

* 定义私有方法(不会被实例以及子类访问到)，可以通过`f.xx`
* 而定义在`prototype`上的，可以被实例或者子类访问到
* `new f`的时候，`f`作为`construtor`。如果内部如果含有`this`操作，则可以被实例访问到。如果想要被子类访问到，就应该通过在子类`constructor`中使用`f.call(this)`。这个特性和`construtor`无关，只是因为内部含有`this`。(可能说的不太清楚，见[JS-proto&prototype&constructor](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-__proto__%26%26prototype%26%26new.md))

由于`ES6-class`多了`static`方法，以上会体现的特别明显。

## new - constructor

```JavaScript
function Animal(props) {
  this.name = props.name  ;
  this.say = function () {
    return this.name
  }
}
var animalA = new Animal({ name: '小白鼠A' });
var animalB = new Animal({ name: '小白鼠B' });
```

由于`new`会对`this`重新定向。**这也是两个`animal`都是不同的`this`的原因**。

## 实例 - 共同部分

虽然`this`在变化，但是我们可以总结的是：

1. 都是使用`Animal`这个类
2. `Animal`作为`constructor`执行了两次

那么定义

```JavaScript
function Animal(props) {
  this.name = props.name  ;
  this.say = function () {
    return this.name
  }
  Animal.lives.push(this)
}
Animal.lives = []
var animalA = new Animal({ name: '小白鼠A' });
var animalB = new Animal({ name: '小白鼠B' });
```

可以预见的是`Animal.lives.push(this)`执行了两次，并添加了不同的`this(animalA&animalB)`；由于`Animal.lives`不含有`this`(并不是绑定在`this`上)，先后都是操作同一个数据。

所以最后`Animal.lives.length = 2`

**那么我们就可以使用这个特性，来进行`Animal`对`animalA&animalB`进行操作。**

见[JS-class-标记死亡](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS/JS-class-%E6%A0%87%E8%AE%B0%E6%AD%BB%E4%BA%A1.js)

