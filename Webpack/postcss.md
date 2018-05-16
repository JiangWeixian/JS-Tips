# postcss
> 插件作用速写

* postcss-import - 导入在`node_modules`的css文件
* postcss-url - 作用和`url-loader`类似，不过这个是在`css`文件中使用
* postcss-aspect-ratio-mini - 设置元素纵横比
* postcss-write-svg - 直接在`css`文件中定义`svg`
* postcss-cssnext - 使用未来的css
* postcss-px-to-viewport - px到vw单位之间转换
* postcss-viewport-units - 给css添加content，修复vw的bugs
* cssnano - 压缩代码的，不过在dev阶段好像不需要。所以通过`--save`安装

以上一些打包的时候需要用到，使用`--save`