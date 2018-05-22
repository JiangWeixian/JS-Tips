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
* 