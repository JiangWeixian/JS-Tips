# TS-Enum

## 前言

在`DOC`提到的例子并没有在[lib-enum]()中得到验证。

## 使用

```js
enum Test {
  x,
  y,
}
```

一般来说就是初始化为数字`x = 0, y = 1`，**而且是递增的**。（同样可以进行数字1的初始化）

当然也可以初始化为字符串，这时候就没有 **递增的效果了。**

那么就可以通过`Test.x`进行使用了，但是即使`x`此时是`number`，在使用的使用也必须定义类型了`Test`而不是`number`。

## enum可以得到什么

如果`enum`定义

```js
enum status {
  a = 'a',
  b = 'b',
}
```

那么其实`status`的输出为

```
0: a
1: b
a
b
```

有的时候想要把`enum`变为正式真实`array`。

可以通过`const arr = Object.keys(status).map(e => status[k])`。此时得到`[0, 1, a, b]`。之后可以通过`isString`判断得到我们想要的`key`值。
