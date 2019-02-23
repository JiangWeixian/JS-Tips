# postcss
> 插件作用速写

[post-loader](https://github.com/postcss/postcss-loader)会告诉你怎么使用这些插件

* postcss-import - 导入在`node_modules`的css文件
* postcss-url - 作用和`url-loader`类似，不过这个是在`css`文件中使用
* postcss-aspect-ratio-mini - 设置元素纵横比
* postcss-write-svg - 直接在`css`文件中定义`svg`
* postcss-cssnext - 使用未来的css
* postcss-px-to-viewport - px到vw单位之间转换
* postcss-viewport-units - 给css添加content，修复vw的bugs
* cssnano - 压缩代码的，不过在dev阶段好像不需要。所以通过`--save`安装

**For REACT**

* postcss-js - 内联样式体验`postcss`，可能会有作用

以上一些打包的时候需要用到，使用`--save`，**主要看官方方法带有`--save-dev`？如果不带有，就是`--save`**

## 引用

* [此postcss配置文章是值得参考的](https://github.com/ecmadao/Coding-Guide/blob/master/Notes/CSS/PostCSS%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8C%97.md)
* [在vue-vw 方案中也有提及](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)