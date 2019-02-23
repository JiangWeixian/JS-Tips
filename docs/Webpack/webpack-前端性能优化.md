# 前端性能优化
> webpack如何实现这一步


## 优化 - 代码压缩

`webpack`使用过程中，已经知道了它对`js css`文件处理方式，以达到优化的目的：

* 压缩代码，去掉不必要的注释。
* （如果配置了话）可以提取公用模块和自己自己写的代码，分成两个js文件。

我们知道`Webpack`非常适合单页面应用，这是为什么呢？

因为将所有东西打包到同一个`JS`文件中，不需要多次请求资源。一次请求终生受用。

## 优化 - HTTP

仔细看`webpack`打包输出结果（或者是配置文件），可以发现文件名后面都会带一串`hash`值。

* 如果代码没变，`hash`值就不会变。可以加快打包速度，`hash`没变的就不用再一次打包。
* 如果涉及到`http`请求，浏览器会缓存请求资源。如果`hash`值不变，就不会有再一次请求的情况。这个好处就不用我说了。

## 优化 - 异步加载

加载模块需要时间，下载代码需要时间。对于页面应用来说，如果选择在页面开始阶段就把所有需要的模块都导入进来。会拖累页面（应用）的启动速度，再加上下载代码的时间，简直是噩梦。

这个时候就需要异步加载的方式，这和`webpack`的配置无关，和写代码的方式有关。

以`vue+webpack举例`，[参考地址]()

加载组建(`.vue`)到路由的时候，我们往往会这么写:

```javascript
const Radio = (resolve) => {
  import('components/Radio/Radio').then((module) => {
    resolve(module)
  })
}
```

意思就是，当路由跳转到含有`radio`组件的时候，再加载`radio`。

而在具体的页面中加载子组件又该怎么做？关键就是`require`方法。

```javascript
components: {
  'child': function(resolve) {
    require(['./components/child.vue'], resolve);
  }
}
```

当`child`组件出现，以`v-show`或者`v-if`方式，就会通过这样的方式加载进来。

[这篇文章](http://m.php.cn/article/394447.html)提供了详细的方法。
