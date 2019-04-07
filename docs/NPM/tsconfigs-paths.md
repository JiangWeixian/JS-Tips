# tsconfig-paths
> 目的是为了解决`module alias`。**但是如何解决编译为`JS`之后的`module resolution`问题呢？**

`ts`可以通过`tsconfig.json(baseUrl with paths)`来解决`alias`的问题。

**在不适用`babel webpacl`**工具情况下，一个使用了 **alias** 的`.ts files`。通过`tsc -p tsconfig.json`可以将`.ts`编译为`.js` files。

**但是没有办法替换掉在代码中使用的`alias`**。

因此可以借助[tsconfig-paths]()这个NPM包来进行处理。

假设`ts`文件为`a.ts`，得到`a.js`（`a.ts`使用了`alias`）。因此直接执行`node a.js`是会无法解析的。

可以使用[tsconfig-paths]()提供的工具进行处理。

**缺点**

只解决了`node`执行的问题，但是没有解决第三方npm包执行一个含有`alias`的`js`的文件，应该如何处理。
