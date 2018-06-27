# Arrar- 数组去重

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

## 3. JQ使用的一个小技巧

先对数组排序，得到`sortedArr`。

然后通过`sortedArr[i+1] == sortedArr[i]`来找到重复元素的index.

然后通过`splice`对`sortedArr`从 **后面向前面**删除。

缺点就是没办法保证原来的顺序。
