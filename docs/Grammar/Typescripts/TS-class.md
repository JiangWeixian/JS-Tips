# TS - 类

## 前言

好像有些`ES6`没有的特性。**可以理解为`ES6`的扩展，所以`ES6`的部分属性也是存在且适用的。**

* private & public & protected
* abstract

重点部分介绍区别`es6`的部分。

## Public

这部分这是默认值。可以理解为`ES6-no-TS`部分。

## Protected and Private

很多地方类似。

假设存在

```js
class a {
  private name
}

class b extends a {}
```

**private不是static**

`private`意味着`name`只能够在`a`里面访问，不能够在`b`里面访问。

**假设name为protected**

那么`name`可以在`b`内部访问，但是不能够在`a or b`外部访问。

## abstract

可以理解为基类。

定义类的结构，其余类都是继承这个类的结构。然后实现相应功能。
