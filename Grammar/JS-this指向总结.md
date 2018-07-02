# this指向总结
> 列罗了目前可知的所有情况

## 声明`function`的所有方式

1. `function`普通声明
  
  ```JavaScript
  function a () {
    console.log(this)
  }
  ```

  `this`为`windows`

2. 函数表达式声明方式

  ```JavaScript
  let a = function () {
    console.log(this)
  }
  ```

  `this`为`windows`

3. 对象内部函数
  
  ```JavaScript
  var obj = {
    a: function () {
      console.log(this)
    }
  }
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
  ```
  
  `this`为`windows`

5. 返回一个内部函数

  ```JavaScript
  function a () {
    return function () {
      console.log(this)
    }
  }
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

6. 回掉函数

  ```JavaScript
  // dom事件回调
  document.body.onclick = function () {
    console.log(this)
  }
  ```
  
  可以参考第五点，这个`this`为`body`

7. 回掉函数

  ```JavaScript
  function a (fn) {
    // fn.call(this)
    fn()
  }
  a(function () {
    console.log(this)
  })
  ```

  `this`为`window`

  但是又特殊情况，因为如果通过`document.addEventListner('click', function () { console.log(this) })`，这个打出的情况的是`body`。

  这是因为可能在函数内部做了`this`重新绑定。就如同上面`fn.call(this)`的处理方式。

## 总结

* 通过`xx.func()` - 这个`this`为`xx`
* 普通情况下一般都是`windows`
* 通过`call`改变指向情况除外
