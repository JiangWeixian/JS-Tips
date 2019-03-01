# JS - ES6 Class
> Class是未来

<!-- TOC -->

- [JS - ES6 Class](#js---es6-class)
  - [前置知识 - Class语法糖](#前置知识---class语法糖)
  - [类 - 规则](#类---规则)
  - [继承 - 规则](#继承---规则)
    - [`super`](#super)
  - [题外话](#题外话)

<!-- /TOC -->

## 前置知识 - Class语法糖

> 为了说明，我把链接中已经提到的，重新说了一遍。

`Class`只是关键字，相比较与之前使用`function`来进行类与继承，体积更小。

不过继承方式还是脱离不了`JavaScript`语法特性，例如使用`prototype&__proto__`，所以[JS-prototype&proto&new](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS-__proto__%26%26prototype%26%26new.md)这个还是需要明白。所以之后我进行对比说明。

`Class`实现继承的关键在于本身就是一个声明`prototype`，这恰好是实现继承关键字。类如下面的代码

```JavaScript
class Point {
  
}
```

相当于

```JavaScript
const Point.prototype =  {
  
}
```

由[JS-prototype&proto&new](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS-__proto__%26%26prototype%26%26new.md)我们知道如果我们定义`function Point`，`Point`的确有一个`prototype`属性，可以知道`class`关键字的确把这个`prototype`抽离出来了。

**Q&A1 - 为什么能够实现类？**

**我们知道`prototype`是包含`construtor`的**。使用`class`创建的类，是通过`new xx`来使用。因此既然`function`能够通过`new`实现类，那么`class`依旧可以。

## 类 - 规则

> `class`实现类与继承所有关键字，并与`function`方案对比。

> 在浏览器端是可以使用的。支持率百分之80左右，可以一试。大不了ES6转译。

* `class` = 声明一个`prototype`

    ```JavaScript
    class Point {
      
    }
    ```

    相当于

    ```JavaScript
    function Point () {}
    Point.prototype.xx = somevalue // 如果class定义了方法的话
    ```
* `constructor` - `new`关键字会调用它创建`this`。就像在`function f`实现类的方案中那样调用的是`f`。

    ```JavaScript
    class Point {
      constructor (x) {
        this.x = x
      }
    }
    // 等价于
    function Point (x) {
      this.x
    }
    Point.prototype.xx = somevalue // 如果class定义了方法的话
    ```

* 在class上定义方法注意，直接写方法即可，而且方法和方法之间 **没有逗号**。

    ```JavaScript
    class Point {
      constructor (x) {
        this.x = x
      }

      // 没有逗号
      print () {
        console.log(this.x)
      }
    }
    // 等价于
    function Point (x) {
      this.x
    }
    Point.prototype.print = function () { console.log(this.x) }
    ```

* `static` - 静态方法。不是写在原型上的方法，在`function`类版本中也有实现，可能比较少见。

    ```JavaScript
    class Point {
      constructor (x) {
        this.x = x
      }

      // 没有逗号
      print () {
        console.log(this.x)
      }
      static say () {
        console.log('hello')
      }
    }
    
    // 等价于
    function Point (x) {
      this.x
    }
    Point.prototype.print = function () { console.log(this.x) }
    Point.say = function () { console.log('hello') }
    ```

    可以发现`static`只能够通过`类.say`方式调用。

    而且和`function`版本不同的是，此类方法是 **可以继承的。**

## 继承 - 规则

> 写在`constructor`的属性，以及静态方法和普通方法都是可以继承的。

* `extends` - 继承关键字

    ```JavaScript
    class Line extends Point {
      constructor () {
        
      }

      distance () {
        return this.x
      }
    }
    ```
    此时你必须在`Line-constructor`内部调用`super`，不然会报错。

### `super` 

> 这是一个相对复杂的关键字(不同格式不同函数内有不同含义)。不过总的来说是一个调用父类的方法。

> `constructor`归类为普通方法

> 子类普通方法只能够调用父类普通方法，子类静态方法只能够调用父类静态方法。

> (假设父类是Point，子类是Line)在普通方法中`super`为`Point.prototype`，在静态方法中是`Point`

* `extends`补充，实现继承完整版本 - `super`在`construtor`内部，相对复杂。**要分调用以及赋值两种情况**

    * `super()`等价于`Point.call(this, x)`
    * `super`调用父类方法，由以上(指向`Point.prototype`)
    * `super.n`进行赋值的时候，指向的是`this`(就是子类自己)

    ```JavaScript
    class Line extends Point {
      constructor (x) {
        super(x)
        this.y = y
      }

      distance () {
        return this.x
      }
    }

    // 等价于
    function Line (x,y) {
      Point.call(this,x)
      this.y = y
    }
    Line.prototype = Object.create(Point.prototype)
    Line.prototype.distance = function () {
      return this.x
    }
    ```

    结合`extends`关键字，作用是`Object.create(Point.prototype)`。

    **题外话**

    结合[JS-prototype&proto&new](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS-__proto__%26%26prototype%26%26new.md)可以得到`Line.prototype.__proto__ = Point.prototype`
    
* `super`在子类普通方法中使用 - 此时`super`指的是`parent.prototype`

    ```JavaScript
    class Line extends Point {
      constructor (x) {
        super(x)
        this.y = y
      }

      distance () {
        return this.x
      }
      
      say () {
        console.log('i am line')
        super.print()
      }
    }
    ```
  
* `super`在子类静态方法中调用 - 此时指向的是`parent`

    ```JavaScript
    class Line extends Point {
      constructor (x) {
        super(x)
        this.y = y
      }

      distance () {
        return this.x
      }
      
      static say () {
        console.log('i am line')
        super.say()
      }
    }
    ```
    
**Q&A2 - `super`关键字解决了什么问题？**

在`function`实现方案中，如果想要调用父类方法，必须知道父类的名字。现在被缩写为了关键字`super`。**而且还可以继承`static method`，方法各有优劣，因为有的时候想要实现私有方法**

## 题外话

* `Line.__proto__ == point`
