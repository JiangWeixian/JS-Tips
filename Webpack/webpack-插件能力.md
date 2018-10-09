# Webpack - plugins
>热门 & 好用插件指南；[链接-优秀而好用的插件列表(官方版本)](https://webpack.docschina.org/plugins/html-webpack-plugin/)；[example地址链接](https://github.com/JiangWeixian/LearningWebpack/tree/react-simple-TS)

## 前言

当我们打包一个文件生成`js or css`。可能会经历多次打包，不同打包之间最好 **要求生成文件名是不同的。**

所以配置中就会出现`[name].[contenthash].xx`配置项，因为文件名是不变的，而`contenthash`随着不同打包而不同。

## Dev 服务器
> `Dev`阶段服务器，为了得到 Prod 阶段页面表现。性能和`build`版本有所差异，但是可以有 **热更新以及相近的逻辑表现**

配置项可以在[此链接](https://webpack.js.org/configuration/dev-server/#devserver)找到对应

> 以及配置项可以通过`webpack-dev-sever --配置项 xx?`通过命令行启动

**`xx?`** 问号意味着配置项的输入时可选的...

## 生成 HTML 模板

[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#options)

**基本能力**

* 有能力不直接写`html`文件，而通过配置项来生成`html`文件 

**不可忽视能力**
> 一般都是先写`index.html`文件（作为模板），然后通过插件填补`html`文件中的某些内容

* 「任何环境下」**插入文件** - 将生成的文件(`js or css`)插入到`html`文件中
* 「生产环境下」可以压缩代码 - 指的是压缩`html`部分代码

**容易忽视的能力**

* 支持`ico`文件

## 提取 CSS 文件

> MiniCSSExtractPlugin

需要分为`loaders & plugin`两部分，[loaders 部分链接]()。

1. loaders - 为了处理`css`（包括预处理以及后处理），以及生成标签
2. plugin - 为了生成文件

## 压缩 JS

> (in webpack4)webpack.optimize.UglifyJsPlugin()

默认配置应该够用的了。

## 分包

> 分离代码，好处在于工程第三方库一般不更新。独立出来的话，可以避免打包的时候重新生成新文件，文件名没有变的话，线上也就不会重新下载。

个人理解可以分为：

1. 第三方库文件 - vendors
2. 框架可能要提取出来 - (react|vue)Vendor，因为这部分可能还是会升级
3. 公用文件 - `commons`, 被多次`import`的文件
4. 异步文件 - `async`，异步加载的文件

`in webpack4`应该使用

```js
optimization: {
  splitChunks: { }
}
```

而不需要新的插件。

**除了这些已知的`chunks`之外。还有一个`runtimechunk`**，配置与否都不会对线上有什么影响。可以参考[runtimechunks-作用](https://juejin.im/post/5ac9b7165188255cb32e66cc)来理解。

> 为了处理几遍第三方库文件名没有更改，但是还是会重新打包一遍。为了避免这个重复的过程。才有了`runtimechunks`。

**小提升 - 清除`dist`文件夹 - `clean-webpack-plugin`**

每次打包都会在`dist`文件夹中产生新的文件，意味着之前的文件被保留了。

为了在每次打包之前清空一次`dist`文件夹，可以使用这个插件移除文件夹。

**小提升 - 保持`hash` - `HashedModuleIdsPlugin`**

避免第三库不变情况下，打包出来文件的`hash`在变化。

### Webpack 分包解惑

在`webpack`配置文件中可以看到`webpack.output`配置项，其中可以配置`chunkfile`。而以上的`splitchunks`（分包）就是对这部分文件进一步`split`。


## 热更新

配置的时候发现，其实`webpack-dev-server`简单配置之后其实是能够进行 **更改页面之后页面得到更新的（在没有使用其余热更新插件情况下）**

个人理解这应该是页面自动刷新而不是热更新！

更推荐的是通过`webpack-dev-server --hot`开启

## 错误提示

[friendlyerrors](https://github.com/geowarin/friendly-errors-webpack-plugin#readme)

使用方式很简单，如`README`所说。**关键在于取消默认的错误提示，设置`quiet: true`**

同时建议通过命令行开启`--progress`。


