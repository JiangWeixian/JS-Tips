# 面向对象
> 主要说明的是object；构造器和原型要区分

<!-- TOC -->

- [面向对象](#面向对象)
  - [定义属性](#定义属性)
  - [理解`实例和prototype` - 很重要](#理解实例和prototype---很重要)
  - [继承的坑](#继承的坑)
    - [最佳实践](#最佳实践)

<!-- /TOC -->

## 定义属性

可以通过`defineProperty or defineProperties`来定义属性，可以实现更为细致化的定义。

包括`get set etc..`

## 理解`实例和prototype` - 很重要

如何继承就不说明，请看[继承方法-总结](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E7%BB%A7%E6%89%BF.md)，这里再说明 **实例和原型的区别！！**

首先我们定义`person`，然后在`person.prototype`上面定义方法，如：

```JavaScript
function person () {}
person.prototype.name = 'nike'
person.protoype.age = 29

var person1 = new Person()
var person2 = new Person()
```

**Q&A**

1. 那么`person1`上面有没有`name`这个属性?

  答案是没有！

  因为在自己上面找不到，它是在`Person`上寻找。

  **但是`person1 or person2`两个互不影响**，可以理解为对原型`prototype`上面的不同引用。所以并不干扰。

  但是如果`person1.name = 'adidas'`那么可以在`person1`上面找到这个`name`属性。因为当我们`person1.name`的时候，先寻找自身，因为已经找到了，所以就不会继续向上面寻找。**只是在自身定义同名属性，并不是覆盖父类**

  * 可以通过`hasOwnProperty`来寻找`name`，**但是只会寻找自身，注意不能查找的是方法。** `Object`上有很多类似的方法，含有`prototype`关键字的一般都会往`Person`上寻找。
  * `in`关键字是会往`Person`上面寻找。
  * `Object.keys()`只会在`person1`上面寻找

2. 为什么`person1`和`person2`互相不影响?

  并不是互相不影响，而是每次都是`person1.name`这样直接覆盖了原有变量，如果`name`是数组，且通过`.name.push`来修改。就会互相影响了！例如：

  ```JavaScript
  function Person () {
    // this.name = [] 写在这里不会发现以下情况，因为new关键字会重新分配this
  }
  Person.prototype.name = []
  Person.prototype.age = 29

  var student1 = new Person()
  var student2 = new Person()
  student1.name.push('anike')
  student2.name.push('bnine')
  ```

  可以发现`student1.name`其实变为了`['anike', 'bnike']`。这是由于`Person.prototype`是被共享的。可以看[__proto__和prototype总结](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-__proto__%26%26prototype%26%26new.md)中的指向图。

  但是如果在`push`之前添加`student1.name = [] and student2.name = []`是不会有问题的。因为这里再自身添加了`name`属性，不会再去`Person.prototype`上寻找这个方法。

  可以参考[stack.js](https://github.com/JiangWeixian/JS-Books/blob/master/JS%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%88/stack.js)中私有属性的写法，**这样属性就不会共享在`prototype`就没有问题！

## 继承的坑
  
同样的问题发生在继承的时候。

```JavaScript
function Person () {
  // this.name = [] 写在这里也一样。
}
Person.prototype.name = []
Person.prototype.age = 29

function student () {}
student.prototype = new Person()

var student1 = new student()
var student2 = new student()
student1.name.push('anike')
student2.name.push('bnine')
```

可以发现`student1.name`其实变为了`['anike', 'bnike']`。这是由于`student.prototype`是被共享的。

这个问题仍旧存在以下问题上：

```JavaScript
var person = {
  name: [],
  say: function () {
    console.log(this.name)
  }
}

// 继承
var Student = Object.create(person)
Student.show = function () {
  console.log('student', this.name)
}

// 类似于创建实例
var s1 = Object.create(Student)
var s2 = Object.create(Student)
s1.name.push('s1')
s2.name.push('s2')
```


**如何修改这个问题？**

1. 借用`call` - 当属性写在`constructor`上面的时候。

  ```JavaScript
  function Person () {
    this.name = []
  }
  // Person.prototype.name = []
  Person.prototype.age = 29

  function student () {
    Person.call(this, arguments)
  }
  student.prototype = new Person()

  var student1 = new student()
  var student2 = new student()
  student1.name.push('anike')
  student2.name.push('bnine')
  ```

  原因在于`new`的时候改变了`constructor`的`this`指向(没有`new`是修改不了，也访问不来，这是`this`的特性)，分别是`student1`和`student2`。但是没有办法处理`Person.prototype.name = []`这样的情况。

  还可以通过`call`这个方法调用父类的方法，见[调用父类方法](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E7%BB%A7%E6%89%BF.md)。

2. 或者直接通过`es6 class`

  ```JavaScript
  class Tree {
    constructor () {
      this.name = 'tree'
      this.child = []
    }
  }

  class Node extends Tree {

  }
  
  var node1 = new Node()
  var node2 = new Node()
  node1.child.push('node1')
  node2.child.push('node2')
  ```

**文中Object.create()在我实践看来并不行。指的是`Person.prototype.name = []`情况下的`push`。**

但是`Object.create`有优势所在，因为`student.prototype = new Person()`继承的时候调用了一次`Person`，初始化`student`的时候又调用了一遍`Person`。如果使用`student.prototype = Object.create(Person.prototype)`

### 最佳实践

1. 如果是`function`(`constructor + prototype`)的方式，那么属性写在`constructor`内部，通过`call`来实现继承。

2. 或者使用`class`

3. 使用以下方式 - 保留`Object.create`优点，并用`init`代替了`constructor`的作用。
  ```JavaScript
  var person = {
    init: function () {
      this.name = []
    }
  }

  // 继承
  var Student = Object.create(person)
  Student.init = function () {
    person.init.call(this)
  }
  
  // 类似于创建实例
  var s1 = Object.create(Student)
  var s2 = Object.create(Student)
  s1.init()
  s2.init()
  s1.name.push('s1')
  s2.name.push('s2')
  ```
  

