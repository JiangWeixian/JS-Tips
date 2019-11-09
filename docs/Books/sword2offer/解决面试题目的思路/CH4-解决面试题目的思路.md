# CH4- 解决面试题的思路

<!-- TOC -->

- [CH4- 解决面试题的思路](#ch4--解决面试题的思路)
  - [解决思路](#解决思路)
    - [二叉树镜像](#二叉树镜像)
    - [顺时针打印矩阵 / 画图具象问题](#顺时针打印矩阵--画图具象问题)
    - [得到堆栈min元素 / 举例具象问题](#得到堆栈min元素--举例具象问题)
    - [堆栈的压入和弹出序列](#堆栈的压入和弹出序列)
    - [从上往下从左往右边打印二叉树](#从上往下从左往右边打印二叉树)
    - [二叉搜索树的后续遍历](#二叉搜索树的后续遍历)
    - [二叉树中和为某数值的路径](#二叉树中和为某数值的路径)
    - [复杂链表赋值 / 分解让问题简单化](#复杂链表赋值--分解让问题简单化)

<!-- /TOC -->

## 解决思路

* 画图简化问题

此章节大量用到树结构，对于树，`JavaScript`中试着使用`class`关键字创建。对于私有方法和私有属性，并没有像`function`那么好用。

### 二叉树镜像

大致意思如图。

![树的镜像](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/sword2offer/CH4-%E8%A7%A3%E5%86%B3%E9%9D%A2%E8%AF%95%E9%A2%98%E7%9B%AE%E7%9A%84%E6%80%9D%E8%B7%AF/img/%E6%A0%91%E7%9A%84%E9%95%9C%E5%83%8F.png)

同样这也是比较适合递归的方法：

1. 左右子树都需要递归，因此我们能够得到左右子树的**根节点下的左右节点**。
2. 只要交换这两个节点
3. 同时递归中返回**根节点**

**Python**

* [Python-mirrorTree.py](https://github.com/JiangWeixian/Algo/tree/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/Python)

**JavaScript**

* [ES5-mirrorTree.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/ES5/mirrorTree.js)
* [ES6-mirrorTree.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/ES6/mirrorTree.js)

### 顺时针打印矩阵 / 画图具象问题

需要考虑如果矩阵不规则不是正方形,情况比较复杂.将问题分解为两个步骤.

1. 分解矩形 - 当打印完成一圈之后,进行内圈的打印
2. 打印 - **针对打印一圈的情况,需要正方方向一行,上下方向一列.**

**Python**

函数也可以作为参数传递.

* [Python-matrixInCircle.py](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/Python/matrixInCircle.py)

**JavaScript**

* [ES5-matrixInCircle.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/ES5/matrixInCicle.js)
* [ES6-matrixInCircle.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/ES6/matrixInCicle.js)

### 得到堆栈min元素 / 举例具象问题

关键在于得到`min`的元素复杂度是`O(1)`. 很明显需要在每次`push or pop`的时候更新`min`.

甚至可以创建`min`元素的堆栈. 在每次`push or pop`的时候同步更新`min`. 典型的**空间换时间.**

**Python**

* [Python-minStack.py](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/Python/minStack.py)

**JavaScript**

* [ES5-minStack.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/ES6/minStack.js)
* [ES6-minStack.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/ES6/minStack.js)

### 堆栈的压入和弹出序列

根据两个序列, 分别为弹出和压入. 检测是不是其中压入和弹出是否一一对应.

**为什么会有这样的检测?**

因为堆栈来说, 我们压入`[1, 2, 3, 4]`然后弹出`4`,**然后再压入`[5]`**,然后弹出`[1, 2, 3]`

可以得到弹出序列为`[4, 5, 3, 2, 1]`但是没有就弹出得到压入的情况. 因为有可能直接压入`[1, 2, 3, 4, 5]`**对应多种弹出情况**

就是这种一对多的关系,才使得我们需要检测.

**思路**

1. 首先压入顺序是明确的, 因为一对多关系中,**一是压入关系,而多是弹出关系**

因此我们首先建立**辅助堆栈**

1. 所以我们通过压入的顺序来压入元素到**辅助堆栈**, 然后**如果压入之后,辅助堆栈的栈顶元素正好是弹出顺序中第一个,那么我们就弹出**
2. 当辅助堆栈为空的时候,其实就是**满足了对应关系**

**Python**

* [Python-checkStack.py](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/Python/checkStack.py)

**JavaScript**

注意`shift`修改了数组元素, 因此需要重新创建.

* [ES5-checkStack.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/ES5/checkStack.js)
* [ES6-checkStack.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/ES6/checkStack.js)

### 从上往下从左往右边打印二叉树

典型的就是`BFS`

**Python**

* [Python-bfs.py](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/Python/bfs.py)

**JavaScript**

* [ES5-bfs.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/ES5/bfs.js)
* [ES6-bfs.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/ES6/bfs.js)

### 二叉搜索树的后续遍历

[二叉搜索树维基百科定义](https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%85%83%E6%90%9C%E5%B0%8B%E6%A8%B9) - 关键在于左边节点比中间节点大，右边节点比中间节点小。可以观察发现，左边树的所有数值都是比根节点小的。这对于所有树子结构都是成立的。

[后续遍历](https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%8F%89%E6%A0%91#%E5%89%8D(%E5%85%88)%E5%BA%8F%E3%80%81%E4%B8%AD%E5%BA%8F%E3%80%81%E5%BE%8C%E5%BA%8F%E9%81%8D%E6%AD%B7)的特点为：**根节点在三个节点中最后被访问**

所以我们可以得到结论：

1. 在整个遍历序列中，最最后一个为树根节点
2. 通过根节点划分左右子树
3. 对于两个划分子树，前面两点同样成立。同时判别是否 **二叉搜索树** 可以通过不断划分序列，找到 **最小树结构** 不断判断这些树结构来判断是否是二叉搜索树。

**Python**

* [Python-checkBST.py](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/Python/checkBST.py)

**JavaScript**

* [ES5-checkBST.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/ES5/checkBST.js)
* [ES6-checkBST.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/ES6/checkBST.js)

### 二叉树中和为某数值的路径

其实这里应该设了个陷阱，将[**图**](https://github.com/JiangWeixian/JS-Books/blob/master/JS%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E5%9B%BE/%E5%9B%BE.md)中问题带到了树结构中。

类似图的深度遍历，想要求解这个问题，我们需要解决：

1. 在递归中传递上一步路径，以及上一步累加和
2. 同时采用的遍历方式应该是深度遍历
3. 如果数值和达到了目标，那么就保存，**甚至可以直接停止？在树中数值为正的情况下..**

**注意不要以传统的树深度遍历方式求解。因为我们需要对于`left and right`输入的`lastPath`是同样的。**

**Python**

* [Python-findPath.py](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/Python/findPath.py)

**JavaScript**

* [ES5-findPath.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/ES5/findPath.js)
* [ES6-findPath.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/ES6/findPath.js)

### 复杂链表赋值 / 分解让问题简单化

这部分以及下面几个问题说是体现了分治的思想，就这道题来说，并没有看出来。

复杂链表如下：

![什么是复杂链表](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/sword2offer/CH4-%E8%A7%A3%E5%86%B3%E9%9D%A2%E8%AF%95%E9%A2%98%E7%9B%AE%E7%9A%84%E6%80%9D%E8%B7%AF/img/%E5%A4%8D%E6%9D%82%E9%93%BE%E8%A1%A8.PNG)

1. **直观的** - 在不增加空间基础上，想要以更快的速度的复制，第一遍复制普通连接部分。第二遍复制跳跃连接部分，同时想要找到跳跃连接目标。就必须遍历整个链表
2. **增加数据空间** - 在第一遍遍历的时候，就将跳跃连接部分以 **键值对形式保存起来**

**文中方法**

很巧妙，也没有额外空间

1. 在每个节点后面增加克隆节点，相当于将克隆节点插入链表，克隆节点就在原始节点下一个。
2. 然后跳跃连接克隆节点(**如果有跳跃连接的话**)，可以根据 **克隆节点就在原始节点下一个，且跳跃连接的克隆节点也在跳跃连接的原始节点后面** 原则找到。
3. 然后断开原始节点和克隆节点就行。

好处在于第一步和第二步都是`O(n)`复杂度的算法。

![文中方法](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/sword2offer/CH4-%E8%A7%A3%E5%86%B3%E9%9D%A2%E8%AF%95%E9%A2%98%E7%9B%AE%E7%9A%84%E6%80%9D%E8%B7%AF/img/%E5%A4%8D%E6%9D%82%E9%93%BE%E8%A1%A8%E5%A4%8D%E5%88%B6.PNG)

**Python**

* [Python-copyComplexLinkedList.py](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/Python/cloneComplexLinkedList.py)

**JavaScript**

当你直接传递`head`进去的时候，设置`listB = xx`并不能改变`listB`。因为这属于覆盖，并不能改变引用。

* [ES5-copyComplexLinkedList.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/ES5/copyComplexLinkedList.js)
* [ES6-copyComplexLinkedList.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/ES6/copyComplexLinkedList.js)
