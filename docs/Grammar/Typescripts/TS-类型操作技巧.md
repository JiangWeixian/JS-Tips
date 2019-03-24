# TS - 类型操作技巧 
> 有点像泛型那章节。但是期望更多的是如何操作`TS`类型**Q&A**

## 如何定义函数类型

`type func = (params: q): Promise<{ data: string[] }>`

## 如何获取interface的键值

```js
interface x {
  value: string
  content: string
}

type keys = keyof x // 此时keys = 'value' | 'content'
```

如果此时`x`并不是一个`inteface`而是一个真正的`js-object`。

```js
const x = {
  value: '1',
  content: '2',
}

type keys = keyof typof x
```

两段代码的作用是一致的。

## 如何使用`in`

指的是如何在类型中使用。

:::warning
注意`in`只能够用于`type`关键字。
:::

## 如何获取列表中单个元素类型

例如定义

```js
inteface data {
  value: 1
}

type datas = data[]
```

当定义了

```js
const func = (arr: datas): {}
```

我们如何获取`datas`中单个元素类型。可以通过`type single = datas[0]`
