# React - project
> react 构建工程需要哪些？

## **前言**

`React`不同于`Vue`封装的那么独立（或许有更好的描述），所以`React`相对灵活，书写的方式很多。

但是`Vue`借鉴了`React`很多地方，反过来`React`很多也可以借鉴`Vue`进行理解。例如，一个`vue`工程对比可以知道

|文件名|作用|In React|
|:---:|:---:|:---:|
|`index.html`|真实的`DOM`文件，需要一个前端框架挂载的根节点(`id` 等于 `app` 的 dom 元素)`#app`|react 和vue 一样|
|`App.vue`|首页页面，包含 **route-viewer** 以及部分写死的`dom`结构 | `react`需要自己组合这两部分(`route-viewer`以及`dom`结构，也就是首页组件) |
|`routes`|在`vue`中是作为路由配置文件的|在`react`中这部分可能就没有那么直接了，不仅仅只是作为配置项目存在|
|`main.js`|入口文件，可以理解为将`App.vue`挂载到`index.html`上，负责渲染|`react`需要在此文件中做到热更新&渲染&传入路由配置项目|

## **`index.js or main.js`**
> 入口文件

1. 如果没有使用`react-router`

`react`挂在的方式就是通过`react-dom`里面的`render`函数。

2. 如果使用了`react-router`

就要将`routes`配置文件传给`app.vue`

## **`App.vue`**
> 对应`route-viewer`以及写死`DOM`的组合

**`route-viewer`**
> 不再是`route-viewer`组件，而只是一句代码了

其实也就是只是一句`this.props.children`的代码

**写死`DOM`**

这部分是和`route-viewer`写在一起了。

由于`route-viewer`也是一个容器，其他页面在使用不同路径的时候被加载进来。那么自然也就可以 **在定义`route-viewer`的时候就写好默认就要展示的`DOM`元素

两者组合构成`app.vue or app.tsx`

### 如果没有`route-viewer`

不在需要`this.props.children`

其他部分要吗是写死了`DOM`，要吗是引入其他组件文件。这一点没有什么问题...

## 热更新

> 在[react-ts]()中知道其实使用了`ts`之后，是不需要`babel`。

但是`react-hot-loader v4`需要`babel`，因此请参考[react-hot-loader-example](https://github.com/gaearon/react-hot-loader/tree/master/examples/typescript)

如果只是含有`JS`的话，也只是一点点小小的差别。

## 开发模式（DEV） VS 生产模式（PROD）

> 两种模式在`webpack`上有什么区别

首先要做到：

1. 压缩`css and js`
2. `css`适配浏览器 - 使用`postcss`

`webpack.mode`配置项目要改为`production`

## **引用**

* [react-热更新指导性配置文章](https://blog.csdn.net/huangpb123/article/details/78556652)
