# this - 规则

1. 要区分箭头函数以及非箭头函数。箭头函数`this`声明创建的时候指定，而非箭头函数则会因为运行上下文改变。
  * 关于箭头函数`this`声明创建的时候指定见 **3.1 箭头函数总结**
  * 关于运行上下文，可见 **2.2 非箭头函数总结**
2. 声明创建指的是 - 父类被执行的时候，创建了内部箭头函数，箭头函数就要指向父类。

# 2. 非箭头函数 - this指向总结
> 列罗了目前可知的所有情况

<!-- TOC -->

- [this - 规则](#this---规则)
- [2. 非箭头函数 - this指向总结](#2-非箭头函数---this指向总结)
  - [2.1. 声明`function`的所有方式](#21-声明function的所有方式)
  - [2.2. new - this重新指向](#22-new---this重新指向)
  - [2.3. 总结](#23-总结)
- [3. 箭头函数 - this情况总结](#3-箭头函数---this情况总结)
  - [3.1. 先说结论](#31-先说结论)
  - [3.2. 箭头函数声明方式 - this举例](#32-箭头函数声明方式---this举例)
  - [3.3. new - 与箭头函数](#33-new---与箭头函数)

<!-- /TOC -->

## 2.1. 声明`function`的所有方式

1. `function`普通声明
  
  ```JavaScript
  function a () {
    console.log(this)
  }

  a()
  ```

  `this`为`windows`

2. 函数表达式声明方式

  ```JavaScript
  let a = function () {
    console.log(this)
  }

  a()
  ```

  `this`为`windows`

3. 对象内部函数
  
  ```JavaScript
  var obj = {
    a: function () {
      console.log(this)
    }
  }
  obj.a()
  ```

  `this`为`obj`

4. 对象内部私有函数

  ```JavaScript
  var obj = {
    a: function () {
      function b () {
        console.log(this)
      }
      b()
    }
  }
  obj.a() // 这里的b就是总结中说的普通方式

  function f () {
    function b () {
      console.log(this)
    }
    b()
  }
  f()
  ```
  
  `this`为`windows`

5. 返回一个内部函数

  ```JavaScript
  function a () {
    return function () {
      console.log(this)
    }
  }
  var b = a()
  b()
  ```

  `this`为`windows`

6. 返回一个内部函数给对象

  ```JavaScript
  var obj = {}
  function a () {
    return function () {
      console.log(this)
    }
  }
  obj.a = a()
  ```

  `this`为`obj`

7. 回调函数

  ```JavaScript
  // dom事件回调
  document.body.onclick = function () {
    console.log(this)
  }
  ```
  
  可以参考第五点，这个`this`为`body`

8. 回调函数 - 普通函数名传递

  ```JavaScript
  function a (fn) {
    fn()
  }
  a(function () {
    console.log(this)
  })

  var obj = {
    a: function (fn) {
      fn()
    },
    b: function () {
      this.a(function () {console.log(this)})
    },
    c: function () {
      console.log(this)
    }
  }
  obj.a(obj.c)
  ```

  `this`为`window`，两种i情况都是

9.  但是又特殊情况，因为如果通过`document.addEventListner('click', function () { console.log(this) })`，这个打出的情况的是`body`。

  ```JavaScript
  var obj = {
    a: function () {
      function b () {
        console.log(this)
      }
      b.call(this)
    }
  }
  obj.a()
  ```

  对于`document`来说，这是因为可能在函数内部做了`this`重新绑定，变为了`obj`。就如同上面`fn.call(this)`的处理方式。

## 2.2. new - this重新指向

> new关键字会重新定向this

1. `function`普通声明
  
  ```JavaScript
  function a () {
    console.log(this)
  }

  var newa = new a()
  ```

  `this`为`a`

4. **而对于第四点来说**，对象内部私有函数仍旧是一个普通函数(**非构造函数**)

  ```JavaScript
  function f () {
    function b () {
      console.log(this)
    }
    b()
  }
  var newf = new f()
  ```

  `this`为`window`

## 2.3. 总结

* 通过`xx.func()` - 这个`this`为`xx` - 分别是第3、6、7点
* 普通情况下一般都是`windows` 

  ```JavaScript
  function f () {
    console.log()
  }
  ```
  如果`f`的`this`就应该属于`windows`

  **所以这里的普通情况指的是函数不是contstructor**
  
* 通过`call`改变指向情况除外

# 3. 箭头函数 - this情况总结
> 箭头函数没有this，这也是它 **不能够作为构造函数的原因**

## 3.1. 先说结论

`=>`没有`this`，**且`this`指向箭头函数创建时候的`this`**。箭头函数申明的函数`this`指向的是父类。为什么要说明是父类，因为如果箭头函数在一个对象内部，只有 **在父类运行的时候，内部的箭头函数才会创建所以才会有这么一说。**

额外情况在于，箭头函数不需要 **父类运行情况下就创建了，此时一般指的是`windows`。在函数是函数表达式形式的时候要特别注意。**

那么就对父类情况分类：

* 父类如果不是箭头函数构建的，`this`指向规则可以根据 **第一章节总结**。也可以记忆为 **箭头函数`this`为父类执行时候`this`指向那里。**
* 父类也是箭头函数，那么`this`就要冒泡直到找到一个不是箭头函数构建的函数

特别注意 **第2**

## 3.2. 箭头函数声明方式 - this举例

以下`this`为`windows`的情况，会因为箭头函数所在父类改变，**因为父类是windows，所以箭头函数也是`windows`**。在第4点得到体现。

1. `function`普通声明
  
  ```JavaScript
  var a = () => {
    console.log(this)
  }

  a()
  ```

  `this`为`windows`

3. 对象内部函数 - **这个可能比较难以理解，** 因为`a`是箭头函数，所以要找到父类`obj`，其`this`属于`window`(这个不要觉得疑惑，如果`function f () {console.log(this)}`)的`this`指向的都是属于`windows`，那么`obj`属于`windows`就没有什么奇怪的。
  
  ```JavaScript
  var obj = {
    a: () => {
      console.log(this)
    }
  }
  obj.a()
  ```

  **`this`为`windows`**

4. 对象内部私有函数 - 分类父类是箭头函数或者不是箭头函数

  父类不是箭头函数：

  ```JavaScript
  var obj = {
    a: function () {
      var b = () => {
        console.log(this)
      }
      b()
    }
  }
  obj.a() // 这里的b就是总结中说的普通方式
  ```

  `this`为`obj`，因为`b`的父类是`a`函数，`a`函数属于`obj`

  ```JavaScript

  function f () {
    var b = () => {
      console.log(this)
    }
    b()
  }
  f()
  ```
  
  `this`为`windows`。上诉已经解释过了。

  父类是箭头函数：

  ```JavaScript
  var obj = {
    a: () => {
      var b = () => {
        console.log(this)
      }
      b()
    }
  }
  obj.a() // 这里的b就是总结中说的普通方式
  ```

  `this`为`windows`，因为`b`的父类是`a`函数，`a` **又是箭头函数**，所以找到了`obj`，此时`obj`属于`windows`


5. 返回一个内部函数

  ```JavaScript
  function a () {
    return () => {
      console.log(this)
    }
  }
  var b = a()
  b()
  ```

  `this`为`windows`

6. 返回一个内部函数给对象

  ```JavaScript
  var obj = {}
  function a () {
    return () => {
      console.log(this)
    }
  }
  obj.a = a()
  obj.a()
  ```

  `this`为`windows`(结合第5点一起来看)。**这一点和章节一非常不同。** 因为对于内部匿名函数，在 **a**声明时候创建内部箭头函数，**a** 的`this`属于`windows`，所以箭头函数也是。

7. 回调函数

  ```JavaScript
  // dom事件回调
  document.body.onclick = () => {
    console.log(this)
  }

  var obj = {}
  obj.a = () => {
    console.log(this)
  }
  ```
  
  可以参考第五点，这个`this`为`windows`，这一点也和第一章节不同。

8. 回调函数 - 普通函数名传递

  ```JavaScript
  function a (fn) {
    fn()
  }
  a(() => {
    console.log(this)
  })

  var obj = {
    a: function (fn) {
      fn()
    },
    b: function () {
      this.a(()=> {console.log(this)})
    }
  }
  obj.b()
  ```

  前一个`this`为`window`，后一个为`obj`。因为箭头函数所在环境改变的了。**这一点也和章节一不同的**

9.  但是又特殊情况，因为如果通过`document.addEventListner('click', () => { console.log(this) })`，这个打出的情况的是`windows`(这一点也和章节一不同)。原因见[this-apply&call&bind]()

## 3.3. new - 与箭头函数

> 箭头函数不能够作为构造函数。

虽然如此，但是我们可以通过`new`父类然后实现`this`。

```JavaScript
var f = function () {
  var b = () => {
    console.log(this)
  }
  b() 
}

f()
var newf = new f()
```

分别是`windows`以及`f`