# dom操作
> 和dom相关的指令

<!-- TOC -->

- [dom操作](#dom操作)
    - [$el](#el)
    - [$ref](#ref)

<!-- /TOC -->

## $el

`this.$ref`是比较常见的，而`$el`又是什么？

官方文档的解释是，当前组件的根元素。也就是：

```html
<template>
  <div class="root"></div
</template>
```

指的就是`root`这个元素，可以在`mounted`阶段访问到。


## $ref

* `$ref`在`mounted`阶段是访问不到的。

