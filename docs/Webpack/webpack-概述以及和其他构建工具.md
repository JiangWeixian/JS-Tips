# Webpack概述
> 和glup,grunt之间区别

<!-- TOC -->

- [Webpack概述](#webpack概述)
    - [前置知识](#前置知识)
    - [webpack](#webpack)
    - [Gulp](#gulp)
    - [grunt](#grunt)
    - [NPM](#npm)
    - [如何抉择](#如何抉择)

<!-- /TOC -->

## 前置知识

前端代码运行在浏览器和`node`构建的环境中。在很长一段时间内，我们只能够在浏览器中运行，直到`node`出现。

`nodejs`使得我们可以在非浏览器环境中运行（虽然`nodejs`是依赖chrome构建的）。但是有了`ndoejs`我们就有了很多好用`npm`包来优化前端工作流程。

* [ref-webpack和gulp区别](https://www.cnblogs.com/iovec/p/7921177.html)

## webpack

能干什么在实践中中已经已经发现了，

* `js css`文件都被打包
* 图片或者字体可以在文件中通过模块引入
* 特别适合**SPA**，因为在它眼里一切都是模块。

还有一些自动化的流程就不举例了。由于它可以压缩代码，打包文件，热更新等等。他几乎就是万能的。（建立在它很庞大的基础上）

## Gulp

先看官方上的代码：

```javascript
var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('html', function(){
  return gulp.src('client/templates/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build/html'))
});

gulp.task('css', function(){
  return gulp.src('client/templates/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
});

gulp.task('js', function(){
  return gulp.src('client/javascript/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'))
});

gulp.task('default', [ 'html', 'css', 'js' ]);
```

`gulp`通过构建**不同的任务**，实现同步进行。甚至可以添加`server`任务实现代码热更新。侧重点在于**自动化、压缩、合并、热更新、代码检查之类的**之类的，任何消耗时间的任务。这些`webpack`都能够做到。

可以发现`gulp`和`webpack`相同和不同的地方，

首先是**不同地方**：

* 构建过程 - `gulp`使用的是函数式的方法，而`webpack`使用的配置文件。
* **模块化** - `gulp`并没有在模块化处理方面的优势，我的理解是`gulp`应该没有办法做到在`.vue`处理`js css`文件，在`.js`文件处理`css`代码等功能。也对目前第三方模块化处理方案（比如AMD、CMD等）没有什么很好解决方案。

它能够做的是，在`js`文件中处理`js`代码，在`css`文件中处理`css`代码。

**相同地方**:

* 类似`webpack loaders`可以对`css`预处理，或者对`js`文件进行压缩，页面热更新。

## grunt

这玩意又是啥？[grunt vs gulp](https://www.cnblogs.com/chris-oil/p/5746427.html)

`grunt`应该和`glup`做比较，因为两者出发点一致。其特点在于：

* `grunt`使用的是配置而不是函数形式的方法
* 串行的任务方法，而`gulp`是并行的。两者都可以通过额外的代码实现想要的串行和并行。

## NPM

以上都是要基于`nodejs`实现的代码优化！如果我们什么都不使用，只是使用`npm`来实现一些简单的功能例如预编译，代码压缩等。

可以参考

* [这篇文章](http://ourjs.com/detail/javascript%E6%9E%84%E5%BB%BA-%E7%BC%96%E7%BB%8E-%E7%B3%BB%E7%BB%9F%E5%A4%A7%E6%AF%94%E6%8B%BC-grunt-vs-gulp-vs-npm)
* [或者这一份](https://blog.csdn.net/lihongxun945/article/details/50715865)


## 如何抉择

构建工具那么多，而且`webpack`又那么厉害？是不是就只要`webpack`就可以了？

**答案当然是否！**

因为只要你用过`webpack`就可以发现，它不仅仅打包`js css`。还可以打包图片，字体等。

因此我们可以得到以下结论：

* 如果你构建webapp，需要打包图片文字等很多很多东西。`webpack`绝对适合你！
* 但是你仅仅就只是`js`文件，甚至没有`css`文件。有更好的选择方案，比如说`rollup`（react采用的方案）或者是`gulp`
* 没有图片文字等很多很多东西，`gulp`也非常合适。

除此之外，单页面和多页面之间也有区别（结合以上条件结合使用）：

* 如果是多页面的化，`gulp`可能是首选方案（`vue`无论多少个路由都是单页面应用）