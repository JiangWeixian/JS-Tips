# 队列 - Queue
> FIFO

## Queue

### 前置知识 - JavaScript和Stack

首先要知道`Queue`基本特点：

1. FIFO - 先进先出
2. 数据和数据之间没有关联 - 所以每个数据并不会嵌套另外一个数据
3. 由于**第2点**所以可以使用`JavaScript`数组实现
4. **注意数据的存储是私有的，即外部并不能访问**

以上几点和[Stack](https://github.com/JiangWeixian/JS-Books/blob/master/JS%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%88/stack.md)很像。

### 前置知识 - 内置函数

* `enqueue`
* `dequeue`
* `front` - 需要返回最上端的一个元素
* `isEmpty`
* `size`

基本框架和[Stack](https://github.com/JiangWeixian/JS-Books/blob/master/JS%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%88/stack.md)类似。


## Queue应用 - 优先队列

* 不是严格意义上FIFO - 如果后面来的优先级别较高，就先插到前面。
* 优先级需要自己定义，因此插入的元素也是自己定义。包含`value&prior`，如：
    ```JavaScript
    function item = ()=> {
      value
      prior
    }
    ```
  这里定义`prior`比较小的优先级比较高。

而相关内置函数和`Queue`一样。不过由于`prior`存在，`dequeue`会和传统的不一样。

## Queue应用 - 循环队列

`Queue`并没有元素之间联系，不像[链表]()每个元素都有指向下一个元素的指针。

所以循环队列的实现需要通过特别的技巧，比如说：**dequeue同时enqueue元素就可以了。**如`queue.enqueue(queue.dequeue())`。不过个人觉得是有使用限制的。

## 实现它

1. [queue.js](https://github.com/JiangWeixian/JS-Books/blob/master/JS%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E9%98%9F%E5%88%97/queue.js)

2. [priorqueue.js](https://github.com/JiangWeixian/JS-Books/blob/master/JS%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E9%98%9F%E5%88%97/priorQueue.js)