# cross-env
> 跨平台设置`node_env`

## 作用

如果是基于`node.js`情况，在`js`代码中进行设置。就没有跨平台的问题，但是如果是命令行进行设置的话。那么在不同平台上都是不一样的。

因此`npm install cross-env`就非常必要了。

**注意**

首先要明确`cross-env NODE_ENV=dev`这样的写法是没错的。

假设存在以下文件：

```js
// test.js
console.log(process.env.NODE_ENV)
```

必须是通过`cross-env NODE_ENV=dev node test.js`进行书写。**而不能通过`cross-env NODE_ENV=dev && node test.js`**。（原因我也暂时不知道）

再者，

:::warning
如果出现`node_env`不成功的情况。有可能是之后`test.js`或者其他相关库文件中。把这个参数又设置了回来，所以出现不成功的情况。
:::
