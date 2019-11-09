# CH2 - 模块化
> 跳过了C/C++之间关系

## 加载模块

[`ES5`的模块]()加载方式(`require module.exports or exports.xx = yy`)为这是`commonJS`的写法。

### 加载顺序

模块分为：

1. 内建模块
2. 自己写的以文件路径为主 - 2，3两个加载之后会保存到缓存中，二次加载更快
3. 第三方模块

**第三方模块加载寻找**顺序为：先找当前路径的`node_modules`，然后是父类的`node_modules`直到根目录的`node_modules`(虽然一般来说只有根目录有，但是不排除特殊情况)

## 前端模块加载

浏览器不能够使用`require`这一套。

只能够使用[requireJS](http://www.requirejs.cn/docs/jquery.html)或者[Sea.js](https://www.zhangxinxu.com/sp/seajs/docs/zh-cn/module-definition.html)这种标准。

## 发布

简单介绍了一下如何构建、管理、发布模块。向`NPM`。