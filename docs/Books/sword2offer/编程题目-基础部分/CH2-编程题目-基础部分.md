# CH2 - 编程基础

<!-- TOC -->

- [CH2 - 编程基础](#ch2---编程基础)
  - [基础](#基础)
    - [~~赋值运算符~~](#赋值运算符)
    - [实现Singleton模式](#实现singleton模式)
    - [二维数组查找 / 以下几个题目和数据结构有关](#二维数组查找--以下几个题目和数据结构有关)
    - [替换字符串空格](#替换字符串空格)
    - [从尾开始输出链表](#从尾开始输出链表)
    - [两个堆栈实现队列](#两个堆栈实现队列)
    - [旋转数组最小数字 / 以下为算法和数据结构](#旋转数组最小数字--以下为算法和数据结构)
    - [台阶策略](#台阶策略)
    - [统计2进制中1出现次数](#统计2进制中1出现次数)

<!-- /TOC -->

## 基础

### ~~赋值运算符~~

`JavaScript`和`Python`并不能做到。

### 实现Singleton模式

**Python**

天生单例模式，只要把模块写在文件中。然后通过`import`导入就可以了。

**JavaScript**

关键点，具体分析可见[JavaScript设计模式-单例模式](https://github.com/JiangWeixian/JS-Books/blob/master/JS%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F(Desgin-Patterns)/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.md)：

1. 注意职责单一，逻辑模块和创建单例模块应该分开。
2. 闭包`return function`是实现的关键

实现：

* [ES5-createSingleton.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES5/createSingleton.js)
* [ES6-createSingleton.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES6/createSingleton.js)

### 二维数组查找 / 以下几个题目和数据结构有关

关键在于这个二维数组特殊，里面的数据是已经排序好了的。

![题目描述](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/img/%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84%E6%9F%A5%E6%89%BE.png)

类似**二分搜索的快速算法很合适**缩小访范围的思路，具体可见

* [分析](https://github.com/JiangWeixian/JS-Books/blob/master/JS%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E7%AE%97%E6%B3%95%E9%83%A8%E5%88%86/%E6%90%9C%E7%B4%A2%E7%AE%97%E6%B3%95/%E6%90%9C%E7%B4%A2%E7%AE%97%E6%B3%95.md) 
* [实现](https://github.com/JiangWeixian/JS-Books/blob/master/JS%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E7%AE%97%E6%B3%95%E9%83%A8%E5%88%86/%E6%90%9C%E7%B4%A2%E7%AE%97%E6%B3%95/quickFind.js)

但是并不直接能够使用。由于数据格式问题，但是这种算法的关键在于，**大或者小的方向只有一个**：

* 只能够保证一个矩形数组中，右下角元素比较大，左上角的元素比较小
* **并不能够通过中数值确定范围**，因为对于一个中间数字来说，比它小的**有可能在它的左边，也有可能在它的上面，但是最重要的是，在它右上角的数字也可能比它小，因为不同行无法比较**

，需要找到一个能够替代**中值作用的数字**，可以发现，数组右上角的数字：

1. 比它小的只能是左边，比他大只能是下面
2. 且每次缩小范围，构成一个新的数组，只会选择右上角的数字。**第一个条件永远成立**

**Python**

* [python-searchmatrix](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/Python/searchMatrix.py)

**JavaScript**

* [ES5-searchmatrix.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES5/searchMatrix.js)
* [ES6-searchmatrix.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES6/searchMatrix.js)

### 替换字符串空格

书中所使用的方法无论从哪个角度来说，都不是很适用`JavaScript or python`。

本身的方法就是`O(n)`复杂度的算法。

**python**

* [Python-repalceSpace.py](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/Python/replaceSpace.py)

**JavaScript**

* [ES5-repalceSpace.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES5/repalceSpace.js)
* [ES6-repalceSpace.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES6/repalceSpace.js)

### 从尾开始输出链表

[链表](https://github.com/JiangWeixian/JS-Books/blob/master/JS%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E9%93%BE%E8%A1%A8/%E9%93%BE%E8%A1%A8.md)是含有头指针的。

如果想要从尾部开始输入，一个直观的想法是，保存所有数据，然后利用[堆栈](https://github.com/JiangWeixian/JS-Books/blob/master/JS%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%88/stack.md)的特性**FILO**来达到目的。

不过还有一个比较特别的思路是：

既然想要最后一个先输出，那么递归的思想是先处理**最后一个元素或者最小单元**就能够达到目的。

**Python**

* [Python-linkedListT2B.py](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/Python/searchMatrix.py)

**JavaScript**

* [ES5-linkedListT2B.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES5/linkedListT2B.js)
* [ES6-linkedListT2B.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES6/linkedListT2B.js)

### 两个堆栈实现队列

通过两个堆栈实现队列。

[堆栈](https://github.com/JiangWeixian/JS-Books/blob/master/JS%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%88/stack.md)和[队列](https://github.com/JiangWeixian/JS-Books/blob/master/JS%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E9%98%9F%E5%88%97/queue.md)关键在于数据出入循序不同。

而在`Python`和`JavaScript`中数组本身就可以既可以是堆栈或者队列。而这个题目目的就在于**限制默认数组行为，使得它只能够通过堆栈的行为操作数据，例如`push and pop`**，然后在此基础上实现**队列**

关键点：

1. 构造堆栈
2. 一个堆栈控制入，另外一个堆栈控制出

**Python**

* [Python-combileStacks2Queue.py](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/Python/combineStacks2Queue.py)

**JavaScript**

* [ES5-combileStacks2Queue.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES5/combineStacks2Queue.js)
* [ES6-combileStacks2Queue.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES6/combineStacks2Queue.js)

### 旋转数组最小数字 / 以下为算法和数据结构

和搜索有关算法见[地址](https://github.com/JiangWeixian/JS-Books/blob/master/JS%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E7%AE%97%E6%B3%95%E9%83%A8%E5%88%86/%E6%90%9C%E7%B4%A2%E7%AE%97%E6%B3%95/quickFind.js)

题目解析详细为：

![旋转数组](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/img/ciclearr.png)

关键在于要明白旋转数组的特性：

1. 前后是两个递增子序列
2. **最小数字在两个子序列边界**

**两种思路**

1. 找到第一个下降的数字就是最小数字，这样的复杂度是`O(n)`
2. 通过二分法(在数组中不存在相等数字的时候适用)，复杂度是`O(logn) or O(n)`。因为需要额外处理全是相等数字的情况

**Python**

* [Python-quickFindInCircle.py](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/Python/quickFindInCircle.py)

**Javascript**

* [ES5-quickFindInCircle.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES5/quickFindInCircleArr.js)
* [ES6-quickFindInCircle.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES6/quickFindInCircleArr.js)

### 台阶策略

一个要跳上`n`个台阶，可以跳`1 or 2`。用算法求解一共可以跳多少种可能。

这典型的动态规划问题：

1. 先找到`n = 1 or 2`这些低台阶数目的各种可能，假设分别是`f(1) or f(2)`
2. 那么`n=3`的可能台阶数目就是`1 + f(2)`加上`2 + f(1)`(就这个题目而言)
3. 依次类推

优化算法可以使用`cached`。就是利用`cached`保存`n = 1 or 2...n-1`的计算结果。

然后等到下次需要`n=k`的时候，直接利用`cached`中已经计算得到的结果。

即使使用这种方式(如果我算法没有错误的话)，如果台阶数目过多，还是没有办法，还是溢出了。

**Python**

* [Python-jumpSteps.py](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/Python/jumpSteps.py)

**JavaScript**

* [ES5-jumpSteps.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES5/jumpSteps.js)
* [ES6-jumpSteps.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES6/jumpSteps.js)

### 统计2进制中1出现次数

书中使用的是位运算的方法，当然不仅仅只有这一种方法。

需要知道位运算的几种情况，如下

![位运算](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/img/%E4%BD%8D%E8%BF%90%E7%AE%97.png)

不同语言基本类似。

但是我并没有用它的方式...

**Python**

[不同进制之间如何转换](https://blog.csdn.net/SeeTheWorld518/article/details/47752925)。

* [Python-countOneInBinary.py](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/Python/countOneInBinary.py)

**JavaScript**

[不同进制之间转换](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E8%BF%9B%E5%88%B6%E8%BD%AC%E6%8D%A2.md)

* [ES5-countOneInBinary.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES5/countOneInBinary.js)
* [ES6-countOneInBinary.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES6/countOneInBinary.js)