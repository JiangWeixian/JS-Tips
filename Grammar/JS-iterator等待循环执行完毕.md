# Iterator 等待循环执行结束
> 在Promise&Eventloop中，没办法解决循环完毕之后在进行某些操作

## 正文

* [ES6-iterator](http://es6.ruanyifeng.com/#docs/iterator)详细讲解版本。
* [参考代码](https://blog.csdn.net/u010176097/article/details/70267279)

核心点：

* array内置了一个`iterator`迭代器（除了array之外还有很多）
* `iterator`迭代器类似循环，不过不同的是，每次迭代都会返回当前状态。如果循环结束，就会在状态中含有`done`
    * 通过`.next()`方法进行下一次迭代，同时返回当前迭代数值以及状态！
* 可以通过函数包裹`.next()`来进一步操作每次迭代的进一步步骤。