# 设计模式实践
> 一些开发建议，没想好题目

## 劫持一个函数 - 装饰器模式

当你像劫持一个函数，但是又想保持原有函数的全部方法。

可以通过

```JavaScript
var oldonload = windows.onload
windows.onload = function () {
  oldonload()
  fn() // 新添加的
}
```

## 浏览器原生 - 发布订阅模式

