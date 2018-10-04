# React - project
> react 构建工程需要哪些？

## **前言**

`React`不同于`Vue`封装的那么独立（或许有更好的描述），所以`React`相对灵活，书写的方式很多。

但是`Vue`借鉴了`React`很多地方，反过来`React`很多也可以借鉴`Vue`进行理解。例如，一个`vue`工程对比可以知道

|文件名|作用|In React|
|:---:|:---:|:---:|
|`index.html`|真实的`DOM`文件，需要一个前端框架挂载的根节点(`id` 等于 `app` 的 dom 元素)`#app`|react 和vue 一样|
|`App.vue`|首页页面，包含 **router-view** ||
|`main.js`|入口文件，可以理解为将`App.vue`挂载到`index.html`上，负责渲染|`react`需要在此文件中做到热更新&渲染&传入路由配置项目|

## **`index.js or main.js`**
> 入口文件



## **引用**

* [react-热更新指导性配置文章](https://blog.csdn.net/huangpb123/article/details/78556652)
