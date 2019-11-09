# 函数表达式
> 如何写函数我就跳过了

<!-- TOC -->

- [函数表达式](#函数表达式)
  - [函数名](#函数名)
  - [关于`this`指向](#关于this指向)

<!-- /TOC -->

## 函数名

有两种方式是实现函数：

```JavaScript
let clone = function () {
  console.log('clone')
}

function clone () {
  console.log('clone')
}
```

如果我们,

```JavaScript
let clone = function () {
  console.log('clone')
}
let cloneclone = clone
clone = null
cloneclone() // 仍旧可以执行
```

但是如果

```JavaScript
function clone () {
  console.log('clone')
}
let cloneclone = clone
clone = null
cloneclone() 
```

**不能执行!可以理解为`fucntion clone`此时的`clone`为指针。**

## 关于`this`指向

```JavaScript
var myobj = {
  name: 'myobj',
  getmyname: function () {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
myobj.getmyname()()
```

说明后面`return function`的`this`为`windows`，而`myobj.getmyname()`的`this`为`myobj`

**特别注意**

`(myobj.getmyname = myobj.getmyname)()`是没有办法办法维持`myobj's this`。

情况和`var newobj = myobj.getmyname`是一样的。

**说明了复制语句在`function`上是没有办法维持的`this`的**