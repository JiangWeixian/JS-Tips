# 泛型
> 比想象中重要

[[toc]]

## 前言

* 作用 - **捕捉输入参数的类型**
* 语法 - `<>`

## 使用在普通函数上

```js
function a <T>(arg: T): T {}
```

`<T>`会捕获`arg`的类型，**也就是输入类型和返回类型是一致的！**

* 其实更为灵活的是`T`可以在`arg`属性中`arg: { x: T }`这样的形式
* 以及`<T extends xx>`来限制，**这个时候就会限制`arg`的输入类型，必须有`xx`的类型**

**同时在`<>`中，如果写做`<T, U>`** 那么`U`可以基于`T`进行一些操作。也就是说在`<>`中。前后并没有什么优先级的关系。

## 使用在Promise函数上

可以通过`Prmomise<{ data: T[], ... }>`来决定返回的数据类型。

## 使用在普通变量上

假设
```js
interface A {
  name: string
}

interface B {
  age: number
}

let C: A | B
```

问题在于无论是`C.name or C.age`都会错(类型`A | B`不存在`name or age`)

泛型就会起作用。

`(<A>C).name`就可以让`C`暂时变为`A`类型。这个是灵活的，**因为也可以在这行代码之后变为`B`类型。为了调用其`age`的代码**

:::warning
但是这个和`jsx`语法没办法一起使用。因为`<>`会被解析为`html`语法。
:::

例如，使用以下方法。

```js
function getType (): A | B {
  return {
    age: 'age',
  }
}
const C = getType() as A
```

## 操作interface

```JavaScript
interface x<T> {
  data: T
}
```

## 关键操作符号使用
> keyof

* [如何使用keyof](./TS-keyof.html) - 高级类型
