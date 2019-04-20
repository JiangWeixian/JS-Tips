# Broswer - error
> 和错误有关。同时也和事件处理有关。
[[toc]]

:::warning
有待补充。
:::

## 浏览器事件

浏览器事件是异步的。首先除了那些比较常见事件之外。

我们要认知到很多东西，浏览器都是通过事件的方式进行处理的。

包括错误。

### 错误事件

例如，当`throw error`。那么浏览器会有`onError`进行监听。

需要通过`window.addEventListener`进行开启监听。

MDN 相关链接如下：

* [unhandledrejection](https://developer.mozilla.org/zh-CN/docs/Web/Events/unhandledrejection)

* [onerror](https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onerror)
