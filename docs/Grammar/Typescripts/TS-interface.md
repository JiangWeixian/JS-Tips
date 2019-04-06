# TS-Interface

## 任意数量的类型

```JavaScript
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
```

> 只要不是`color or width`，那么就可以插入属性，且不需要指定类型

> 如果是索引那么就是`string > number`

## class implements
> 实现类

```JavaScript
interface yy-interface {
  () : boolean // 只是举例说明
}
```

> 这样目的就是以函数作为类的接口

如果是构造器函数那么那么就是`new ()`作为`interface`一项。

```JavaScript
class xx implements yy-interface {
  
}
```

## class extends

`interface`可以通过`extends`继承。

**假设含有定义`class xx`，可以通过**

```JavaScript
interface a extends class {}
```

> 实现接口`a`得到`class xx`内部所有属性
