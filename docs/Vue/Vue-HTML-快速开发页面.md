# Vue - 快速开发页面思考
> 如何接着插件快速开发页面；应当替换`JQ`的地位。

## 新建一个项目

> 现在开始使用`vue-cli`,因为可以支持`ts`

1. **首先安装`vue-cli`** - `npm install -g @vue/cli`
2. `vue create <project-name>`

**如果想要使用`vue-cli2`来选择不同的`project-name`**，需要安装额外插件，参考[vue-cli2使用接口](https://cli.vuejs.org/zh/guide/creating-a-project.html#%E4%BD%BF%E7%94%A8%E5%9B%BE%E5%BD%A2%E5%8C%96%E7%95%8C%E9%9D%A2)


## 好用插件

**非移动端和移动端通用**

* `vue-router` - 主要是有页面切换特效，对于一些场景来说还是很合适的
* `awsome-vue-swiper` - 轮播器
* `lazyload`