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

* **插入文件** - 将生成的文件(`js or css`)插入到`html`文件中

**容易忽视的能力**

* 支持`ico`文件