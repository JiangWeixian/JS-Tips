# 类 - 父类控制子类
> 如何通过父类来控制子类

## 前置知识 - 类与类原型

最好先理解[JS-proto&prototype&constructor]()内部所有知识。

```JavaScript
function f () {}
f.prototype.say = function () {}
var newf = new f()
```

* `f`是类
* `f.prototype`是类的原型
* `newf`是该类的实例

三者区别见[JS-继承与类-类和类原型]()

在[JS-proto&prototype&constructor]()中我提到了：

* 定义私有方法(不会被实例以及子类访问到)，可以通过`f.xx`
* 而定义在`prototype`上的，可以被实例或者子类访问到
* `new f`的时候，`f`作为`construtor`。如果内部如果含有`this`操作，则可以被实例访问到，如果想要被子类访问到，就应该通过在子类`constructor`中使用`parent.call(this)`。这个特性和`construtor`无关，只是因为内部含有`this`。(可能说的不太清楚，见[JS-proto&prototype&constructor]()总结部分)

##