# Webpack - plugins
>热门 & 好用插件指南；[链接-优秀而好用的插件列表(官方版本)](https://webpack.docschina.org/plugins/html-webpack-plugin/)

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

## 压缩 JS

> (in webpack4)webpack.optimize.UglifyJsPlugin()

默认配置应该够用的了。

## 热更新

配置的时候发现，其实`webpack-dev-server`简单配置之后其实是能够进行 **更改页面之后页面得到更新的（在没有使用其余热更新插件情况下）**

个人理解这应该是页面自动刷新而不是热更新！

更推荐的是通过`webpack-dev-server --hot`开启

## 错误提示

[friendlyerrors](https://github.com/geowarin/friendly-errors-webpack-plugin#readme)

使用方式很简单，如`README`所说。**关键在于取消默认的错误提示，设置`quiet: true`**

同时建议通过命令行开启`--progress`。


