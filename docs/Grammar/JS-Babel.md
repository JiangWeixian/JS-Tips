# JS - Babel
> 先不讲配置

<!-- TOC -->

- [JS - Babel](#js---babel)
  - [**Babel转译 - 部分插件作用**](#babel转译---部分插件作用)
  - [**`.babelrc`配置项说明**](#babelrc配置项说明)
  - [引用](#引用)

<!-- /TOC -->

## **Babel转译 - 部分插件作用**

> 一般插件写在`.babelrc`文件中；这里说明得也是`.babelrc`一些配置项。

通常来说网上能查到的作用就是`ES6->ES5`的语法转译。也就是类似`let const`这些语法会被转译为`es5`支持的`var`。

那么如果`Array.prototype.includes`写在了页面中，那么会发生语法的转移吗？**为什么会有这个疑问是因为调用`includes`方法`es5`是支持的，只不过是因为`es5`没有这个方法而已。**

**按需加载**

其实没有办法很确定的给出答案。但看了[你真的会使用babel](https://github.com/sunyongjian/blog/issues/30)中关于`babel-runtime`这个插件的解析之后，会发现：

> 如果不使用这个插件，那么`babel`只进行了语法的转译，但是不包括`promise set map && prototype functions && class statcic functions(Array.from)`之类的方法。**因为这些方法调用语法，在`ES5`也是支持的，也就没有必要转译。**

而`babel-runtime`(一般通过`babel-plugin-transform-runtime`配合使用)得功能就是支持以上这些方法得转译。**可以理解为`polyfill`**。

**限制**

> 虽然`babel-runtime`插件能够做到按需的能力，但是就如同[官网](https://babeljs.io/docs/en/babel-plugin-transform-runtime)说的

其实它并没有

## **`.babelrc`配置项说明**

* `targets.browers` - 指定转移后支持多少浏览器，语法是参考[browerlist](https://github.com/browserslist/browserslist)

## 引用

* [babel-配置说明](https://juejin.im/post/5a79adeef265da4e93116430)
* [babel-polyfill vs babel-runtime](https://juejin.im/post/5a96859a6fb9a063523e2591)