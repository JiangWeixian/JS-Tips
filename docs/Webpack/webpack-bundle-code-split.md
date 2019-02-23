# 打包基础
> bundle or code split

## 作用

**bundle-split**

1. 打包公用的代码 - 将公用的第三方代码移动到独立的文件中
2. 需要时加载需要的代码 - 比如点击某按钮才会出现的效果（例如转化为PDF），而这个按钮并不是频繁点击的。**那么就可以在点击时候再加载转化PDF的代码**

    ```javascript
    a.addEventListener('click', () => {
        import('xx/xx')
    })
    ```

**code-split**
> 是在同一个包内讨论的问题

因为一个包可能是比较大的，比如`lodash`。

如果只是用到其中一个函数`isEmpty`其实就没有必要全部将`lodash`打包进来。

期望的是用到什么打包什么，没有用到的，就不打包。

1. 一般来说写出完整的路径导入一个元素 - 就是`code split`，例如`import xx/xx/xx/isempty`而不是`import isempty from lodash`
2. 或者使用`webpack loader`或者`ts` - 通过`import { isEmpty } from lodash`
