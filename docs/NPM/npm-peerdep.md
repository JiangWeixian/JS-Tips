# NPM - dependences
> devDependencies & dependencies & peerDependencies 之前区别作用

[[toc]]

## 在未发布为独立的NPM包前

在没有作为独立的 NPM 包发布的的时候。`devDependencies & dependencies`是比较弱约束的作用的。

因为前者是否会被打包进来？（**主要是由打包工具决定的！**）

比较清晰的认识是：

1. 前者是不会被打包进来的
2. 后者则是会被在生产环境中使用的

此时`perrDependencies`是基本是没有什么作用的。

## 在独立NPM包中

在`npm install xxx`的时候，`xxx`的`package.json`同时也会被下载。

此时`devDependencies & dependencies`就会发生作用。

此时前者不会被下载，而后者则会被下载（因为它被认为一个 npm 包正常运行的依赖。）

`peerDependencies`主要解决是一种嵌套的的包关系。

因为如果`packagea`作为`packageb`的`dependencies`。当我们下载`packageb`的时候，会发生：

1. `packagea`会被一同下载
2. **但是`packagea`只能够被`packageb`使用，** 也就是说我们无法直接在项目中使用`packagea`

我们能够做的是将`packagea`列为`packageb`的`peerDependencies`。**那么`packagea`不仅能被`packageb`使用也能够被项目使用**

* [参考](https://www.cnblogs.com/wonyun/p/9692476.html)
