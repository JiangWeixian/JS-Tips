# Arrary - 数组去重

## 1. 使用set去重

`set`是不含有重复元素的。

```JavaScript
let data = new Set([1, 2, 3, 4, 4, 5])
let arr = Array.from(data)
```

## 2. 使用`Object.key`去重

**结合键值对`key`不能够重复**

```JavaScript
let table = {}
let uniqueArr = []
let arr = [1, 2, 3, 4, 4, 5]
arr.forEach((item, index) => {
  if (!table[item]) {
    table[item] = true
    uniqueArr.push(item)
  }
})
```

**类似的还可以是每次使用`indexOf`查找**

如果在`uniqueArr`没有找到就加入`uniqueArr`

## 3. 原址去重 - JQ使用的一个小技巧

> 以上都是遵循算法中空间换取时间的思路。或许在面试什么时候会要求你，在原数组上进行去重。

**先看看JQ是如何实现的？**

先对数组排序，得到`sortedArr`。

然后通过`sortedArr[i+1] == sortedArr[i]`来找到重复元素的index.

然后通过`splice`对`sortedArr`从 **后面向前面**删除。

缺点就是没办法保证原来的顺序。

**我们可以稍微改进下，** 由[JS-优先级排序得到的思路]()，将数组分为两个优先级，分别是不删除元素以及删除元素。**即将删除元素排到数组最后面，不删除元素排到数组前面。** 如果实现的直接删除某个元素的话，实现起来非常简单。

```JavaScript
//删除2这个元素
let arr = [1, 2, 2, 3, 0.5]
let removeTarget = function (arr, value) {
  arr.sort((a, b) => {
    if ((a !== value && b !== value) || (a === value && b === value))  {
      return 0
    } else if (a === value && b !== value) {
      return 1
    } else if (a !== value && b === value) {
      return -1
    } 
  })
  let index = arr.indexOf(value)
  arr.length = index
}
removeTarget(arr, 2)
console.log(arr)
```

以上是有目的性的删除某一个元素，如果是多个目的性元素，情况类似。构造一个`obj`并设置删除元素优先级为`1`(比不删除元素优先级要大就行)。这样就可以保证删除元素在数组最后。

**之所以不直接遍历，如果找到目标元素就直接`splice`。是因为如果这么做，每次删除都要前移后面所有的元素一个位置。消耗是比较大的。**

先排序，使用`sort`(内置函数被优化过，所以消耗是`logN`)。所以消耗是少一些的。

**如果是去重，我们不知道由哪些重复的元素**。第一步我们先找到那些重复的元素，然后再进一步操作，注意元素优先级以及记录元素个数。以及在排序过程中，记录元素是否第一次遇到(因为要保留一个重复元素)

1. 构造`obj`记录是否第一次遇到
2. 记录第2次遇到重复元素的元素个数，便于`arr.length = arr.length - totalCnt`进行删除。

```JavaScript
let arr = [1, 2, 2, 3, 3, 0.5]
let shirk = function (arr) {
  // 用于记录是否第一次遇到重复元素
  let obj = {}
  let totalCnt = 0
  arr.forEach((item, index, arr) => {
    if (!obj[item]) {
      obj[item] = true
    } else {
      totalCnt += 1
      // 如果是第2次遇到就在原址上标记为删除
      arr[index] = 'delete'
    }
  })
  
  // 这里的做法和删除元素的一样
  arr.sort((a, b) => {
    if ((a !== 'delete' && b !== 'delete') || (a === 'delete' && b === 'delete'))  {
      return 0
    } else if (a === 'delete' && b !== 'delete') {
      return 1
    } else if (a !== 'delete' && b === 'delete') {
      return -1
    } 
  })

  // 运用数组长度的小技巧
  arr.length = arr.length - totalCnt
}
shirk(arr)
console.log(arr)
```