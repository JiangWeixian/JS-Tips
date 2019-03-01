# JS - 二分查找
> [算法指北](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Config/%E7%AE%97%E6%B3%95-%E6%80%9D%E8%B7%AF%E6%8C%87%E5%8D%97.md) - 有事没事两个指针；数组按照大小排序过的

## 非递归版本

1. 头尾两个指针
2. 如果`target`小于中间值，那么就在数组前部分查找
3. 如果`target`大于中间值，那么就在数组后部分查找
4. 如果没找到，就重复第一步直到找到或者 **头指针到尾指针后面**

[JS-Array-二分查找.js](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS/JS-Array-%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.js)

## 递归版本思路

> 递归版本和非递归版本思路一致

等价于求解`f(n)`函数目标，分解可能为：

* `f(0, n/2)`函数目标
* `f(n/2, n)`函数目标

```JavaScript
f(n) = 
{
  f(0, n/2) // 进入该步骤条件
  f(n/2, n) // 进入该步骤条件
}
```

对于`f(0, n/2) or f(n/2, n)`重复上诉步骤步骤，这是递归的过程。

[JS-Array-二分查找.js](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Grammar/JS/JS-Array-%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.js)