# JS - Promise理解
> 源代码实现一遍你就能明白发生了什么

<!-- TOC -->

- [JS - Promise理解](#js---promise理解)
  - [**前置知识 - Promise内置函数说明**](#前置知识---promise内置函数说明)
    - [**Q&A - Promise内置函数说明**](#qa---promise内置函数说明)
  - [前置知识 - Promise解决了什么问题](#前置知识---promise解决了什么问题)
  - [Promise keypoints](#promise-keypoints)

<!-- /TOC -->

## **前置知识 - Promise内置函数说明**

写在`Promise`对象上面的有`all race resolve reject`，写在`Promise.prototype`上的方法有`then catch finally`。**写在对象上面的方法，意为这如果一个变量是`new promise`的话，是没有办法调用`all race resolve reject`**

1. 对于`then`默认返回一个`new Promise`，传递参数格式如下：

    ```JavaScript
    p.then(function(value) {
      // then-resolve
    }, function(reason) {
      // then-reject
    });
    ```

    第一个函数处理`resolve(data)`，第二个函数处理`reject(reason)`传递的结果。

    至于如何将数据传递下去，见[JS-Promise-等待循环执行完毕]()

2. 对于`catch`(传递`function (reject-reason) {}`，相当于一个处理错误的函数)默认返回一个`new Promise`。**所以即使是`catch`之后还是可以通过`then`调用。**，同时在[@JS-Promise-test-catch.js]()测试发现，`catch`之后的`then`调用的是`then-resolve`而不是`then-reject`
3. `all race`传递`Promise array`，返回一个`new promise`
4. `resolve reject`传递的数据或者`Promise`，返回一个`new promise`。**但是`resolve`跳转到`then-resolve`执行，而`reject`跳转到`then-reject`或者是`catch`执行**(这里指的`then-resolve or then-reject`是下一个`then`)

    > 也就是说上一个`then`错误会被下一个`then-reject`捕获[@JS-Promise-test-rejectcatch(不会被catch).js]()。那么如果下一个`then`没有`then-reject`方法，会被`catch`捕获[@JS-Promise-test-rejectcatch(no-then-reject被catch).js]()。如果既没有`then-reject`或者是`catch`的话，见[@JS-Promise-test-rejectcatch(no-then-reject-nocatch).js]()，这个`promise`就被中断了。

    > (`Promise.reject`如何处理`Promise`)见[@JS-Promise-test-reject(如何处理传递的Promise)).js]()

5. `finally`无论如何，在`Promise`链条中都会执行。返回一个`new promise`

**以上很多时候都提到了返回一个`new promise`，此时意味着在这些方法之后无法使用`all race resolve reject`**

### **Q&A - Promise内置函数说明**

1. **Q&A1 -**`Promise`如何处理错误？如何中断一个`Promise`?

    **关于中断`Promise`**

    > 在[#前置知识---promise内置函数说明](#前置知识---promise内置函数说明)第4点提到了如果一个错误没有`then-reject or catch`。那么就会被中断。

    > 所有`then`都不设置`then-reject`。那么出现的错误都会在`catch`执行，如果`catch`是`Promise`链条最后一个，那么就会实现中断。

    **中断`Promise`结合处理错误**

    > (方案1)then中调用的可能是异步函数，**如果异步函数出错了，可以选择在`then`中设置处理错误函数** 此时由于出错了，并没有继续`resolve`。这样`Promise`也就断了。关于Promise是不是异步函数，见[#前置知识---promise解决了什么问题](#前置知识---promise解决了什么问题)

    > (方案2)错误都在`catch`处理

    这两个方案都有适用场景(方案2可能是我比较喜欢的 **中止方案选择，但是处理错误还是就近处理，并把错误传递给`catch`以便中断**)


## 前置知识 - Promise解决了什么问题

首先要知道[JS-同步异步概念]()，同步很好理解。代码执行顺序和书写顺序有关。

而异步，就像是在[Nodejs异步编程]()里面提到的，我们没有办法控制两个异步函数的执行完成顺序。

```JavaScript
fs.readFile(path1, function (err) {
  console.log(err)
})

fs.readFile(path2, function (err) {
  console.log(err)
})
```

就像是`path1`和`path2`就没有办法保证那个先读取完毕。

**或许有的时候你不需要两个函数那个先执行完成？**

但是`path1`读取结果在之后有用到，那么就必须要控制两个顺序。那么 **写成非异步函数不可以吗？** 首先异步函数不会[阻塞代码]()，这是它的优势，**如果全部改为同步，那么代码运行就非常的缓慢，效率十分的低下。**

所以非常有必要控制 **多个异步函数的执行顺序。**

同时也可以明白一个道理，**Promise并不是明确来说的异步函数，其实它应该只能够算是异步函数的控制队列。**

## Promise keypoints

