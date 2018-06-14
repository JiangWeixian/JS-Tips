# Array-小坑
> 记录一次Array map很奇怪的点

如果尝试以下代码就会发现一个很奇怪的地方

```JavaScript
let res = Array(3).map((item, index) => {
  return index
})
let anres = [undefined, undefined, undefined]
anres.map((item, index) => {
  return index
})
```

就会发现前面一个完全是`[undefined, undefined, undefined]`，而且这样的数组是**没有办法遍历的。**

[StackOverflow的解释](https://stackoverflow.com/questions/5501581/javascript-new-arrayn-and-array-prototype-map-weirdness?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)是前一个创建的是**3个undefined指针，而后面的是3个undefined object**

可以通过以下方式解决：

```JavaScript
let res = Array(3).fill(null).map((item, index) => {
  return index
})
```