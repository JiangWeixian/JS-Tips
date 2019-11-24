---
tag: cookcode
---
# React 如何判断子组件

有的时候我们需要让一个组件只接受某些固定的子组件的。

```ts
import { Component } from 'somepath'

export const isChildComponets = (children?: React.ReactNode) => {
  return React.Children.toArray(children).some(child => {
    if (React.isValidElement(child)) {
      // tslint:disable-next-line: no-any
      return child.type === Component
    }
    return false
  })
}
```

1. toArray - 无论是子组件还是子组件数组都变为数据，做数据拍平
2. 直接判断`child`的类型是否是`Component`。如果`Component`外再包裹一层，自然不行。

