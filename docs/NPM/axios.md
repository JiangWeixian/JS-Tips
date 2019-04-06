# NPM - axios
> 能做的更多

## 取消请求

[如何取消请求](https://juejin.im/post/5b27682f6fb9a00e733f121e)

用的地方在于，有些`API`会设置`debounce`。这是一种优化避免过多的`api`请求的方法。

`axios`支持在该次请求中将上一次请求取消。也是避免重复请求的一种优化方式。

**至于原理并没有深究它，大致原理为如果`cancel`。那么将上一次作为`cancel-promise reject`**

## 如何不拼接Get请求

如果使用了`axios.get`，很傻的做法是将`params`拼接然后和请求地址拼接。

更好的做法是：

```js
axios.get(`/management/list`, { params: { ...params } })
```

这样就可以避免拼接字符串了。
