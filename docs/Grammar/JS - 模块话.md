# 模块
> es5&es6

### es5

还没有`export defalut`之间的故事。

* [reuqire.js](http://www.ruanyifeng.com/blog/2012/11/require_js.html?bsh_bid=230697246)

网页加载`js`文件，一般是写在`body`标签末端。保证渲染完毕之后再加载`js`文件。

另外的有些是写在`header`，可能是为了一些设置。

多个加载`js`文件可能会出现的问题

* script标签过多有时间上的损耗
* js文件之前有依赖关系，因此有加载顺序

### 异步加载问题

这是打包优化的关键。

我们的确将所有文件都打包了，但是并不一定都`require`进来了。

只有当可能我们进行了某些浏览器操作，点击按钮之类的。需要额外的js文件，才会请求，插入到浏览器中。属于浏览器性能的优化。

### require.js

* 如何解决依赖性？

    `require.js`接收两个参数，第一个为模块列表，另外一个是回调函数。

    ```javascript
        require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone){

    　　　　// some code here

    　　});
    ```
    
    异步加载模块列表，顺序就代表了依赖性。
    可以设置`config`指定模块路径。
* 如何定义模块？

    和`es6`不同，`require.js`定义模块必须定义在`define`函数内。

    和`require`函数一样，`define`函数同样也可以加载模块。

* 解决`require.js`的重复加载问题

    没有用过`require.js`，说一下关于`require.js`重复加载问题。

    当a和b都需要c模块，可能会重复引入c模块。
    
    可以选择的做法是，公用模块可以在某个`global`文件中引入。其他文件中，进一步的可以通过`require.js`的`config`排除某些模块的引入。    

### webpack

可以打包js css文件，功能强大。

就理解上来说，比`require.js`难，毕竟功能比较多。所以以后每一个都要强迫自己使用`webpack`。先给出相关连接：

* [webpack配置模块分析](http://taobaofed.org/blog/2016/09/09/webpack-flow/)

webpack分为`dev`模式，和`prodoction`模式。两者又共同部分和不同部分。基本分为几大模块：

* entry - 入口文件，通过解析入口文件一步步递归依赖打包
* output - 输出
* loader - 解析同步使用loader进行转换，比如css预处理器或者es6
* plugins - 应该是打包最终步骤，非`dev`模式配置比较多。

js部分打包

* [js打包参考地址](https://zhuanlan.zhihu.com/p/32093510)
* [commodplugins参数解析](https://segmentfault.com/a/1190000006808865) - 对参数设置有更详细的解析。
* [如果minichunks是inf的话](http://www.voidcn.com/article/p-oznmssmx-boa.html)

打包第三方和自己的js文件。主文件输出一个类如`main.js`或者`app.js`文件。里面可能有自己的代码或者引用第三方代码。

打包第三方（`commonchunkplugins`）要经过三个步骤：

1. 打包所有第三方依赖
2. 分离其中基础或者引用多次的依赖文件

一些细节上参数解惑：

* `minichunks`: 指的的包的引用次数，如果大于`minichunks`就会被打包到一个文件中。`inf`的目的就是为了，打包`webpack`或者`runtime`阶段的代码。
* `chunks`: 如果之前使用`commonchunkplugins`打包了文件，那么这里设置打包好的文件名数组。那么这个`commonchunkplugins`就会从打包好里面文件进一步筛选，筛选出其中公用第三方文件。