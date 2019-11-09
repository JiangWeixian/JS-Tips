# Flexible的一些应用以及思考
> Flexibel适配移动端和PC端

## 前言

什么是移动端适配？

由于移动端屏幕种类繁多，直白的来说，就是有些屏幕较好分别率较高，而另外一些就比较差。这就导致了一个设计稿，在一台手机上是一个效果。而在另外一台手机上就是另外一个效果了。具体来说，一些尺寸可能有变大变小之分。

一篇关于这方面很好的文章是`w3cpluss`利用`flexible.js`来对页面进行适配，[文章地址](https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html)。`flexible`是手淘维护的项目，稳定性值得保证。[`Github`地址](https://github.com/amfe/lib-flexible)。

由于之前没怎么接触过手机端的适配，而本博客在手机端只是利用`@media`来进行不同屏幕尺寸的适配。显然`flexible.js`不是那么简单的。

就我的理解来看，为解决不同屏幕分辨率的问题（对于像素点的处理）。`flexible`利用屏幕尺寸和`dpr`进行判断，并动态调整`html`标签以及`body`标签的`font-size`。

不过项目主页所说，第一版本的方案被放弃了，第二版本的方案正在实现，填坑中。第二版本是以屏幕宽度作为调整原则。作为本博客仍以第一版本的`flexible`作为使用举例。因为我想要的方案是：

* 当我在博客中引入适配方案的时候，PC端和移动端都能够适用。移动端的屏幕宽度是没办法改变，而PC端是可能改变浏览器窗口大小的。就这一点来看，`flexible.js`比较适合我。**或许大家对`flexible.js`第二版本有更好的理解。**


**注意：`flexible.js`无论V1还是V2都是移动端的解决方案。像我这样加到PC端是不太合理的....**

遵循移动端先行的原则，开始正文....

## 正文

`flexible`原理是（以IP6`750px`的设计图举例），将设计图分割10分，每份大小是`75px`。因此将html标签的`font-size`设置为`75px`。这样你在CSS文件中使用的所有`1rem=75px`。**且在所有的样式书写以及布局中，都是以`rem`作为布局单位，而不是`px`。**

但是对于PC端，font-size就变为`54px`。这是由于屏幕尺寸在变。如同`flexible.js`的源码说的那样。

```JavaScript
var width = docEl.getBoundingClientRect().width;
// alert(width)
if (width / dpr > 540) {
    width = 540 * dpr;
}
var rem = width / 10;
docEl.style.fontSize = rem + 'px';
flexible.rem = win.rem = rem;
```

### 如何开始使用`flexible.js`

有两种方式。

* 第一种：`npm install lib-flexible -S`并在`main.js`中引入`import lib-flexible.js`。这样就可以在全局使用`flexible`。

很恶心的地方在于，对于PC端，font-size就变为`54px`，和IP6的font-size就变为`75px`。比例实在有点奇怪。所以我修改了源码，让它在PC端设置为`37.5px`。好处在于，假设我们在`Chrome`下写好了移动端的界面布局，其中一个元素大小为`1rem(=75px)`。然后再写PC端的(变为了`54px`)，这时候你可能觉得要再调整一下（变为`90px=90px/54px=1.66667rem`），所以通过`@media`微调PC端样式。

等等，设想一下，我们拿到了手机端的设计稿。我想设计稿大概不会是以`rem`作为标注单位的，一定是`px`。假设两个元素的间距是`13px/75px=0.17rem`，如果调整为PC端大小为`54px`。应该是多少`rem`来着？

因此，我们得到两点结论：

* 我们不能直接在文件书写`rem`作为单位。我们需要写`px`然后自动转换`rem`的工具。之后会介绍。
* 第二点...最好不要在PC上使用，如果非要使用（就像是我这种做大死的）。我调整PC端时候，`html`标签的字体大小为`37.5px`只是为了换算方便。

```JavaScript
var width = docEl.getBoundingClientRect().width;
// alert(width)
if (width / dpr > 540) {
    width = 540 * dpr;
}
width = width === 540? 750:width
var rem = width / 10;
if (isPc) {
    docEl.style.fontSize = 37.5 + 'px';
    flexible.rem = win.rem = 37.5;
}
else {
    docEl.style.fontSize = rem + 'px';
    flexible.rem = win.rem = rem;
}
```

**注意：isPc是我来判断是否是PC端浏览器的**

* 第二种使用`flexible`的方式，不用`npm`。而是下载源码，然后导入工程目录下的`flexible.js`文件，无论你是`import`还是利用`script`标签。因为如果修改了源码，用`npm`包导入，会不起作用！

### 如果使用px2rem-loader

`px2rem-loader`是自动化工具，你只要在文件上写上`px`。无论是`npm run dev`还是`npm run build`都会将`px`自动变为`rem`。好东西。

* 第一步当然是`npm install px2rem-loader --save-dev`
* 在`build/util.js`文件中，加上
    ```JavaScript
    var px2remLoader = {
      loader: 'px2rem-loader',
      options: {
          remUnit: 75 //这里就代表1rem=75px
      }
  }
  //以及(请注意找到具体位置修改)
  var loaders = [cssLoader, px2remLoader]
    ```

大功告成！

## 结尾

修改源码是一种不太好行为，因此那一步，大家酌情考虑。

不说了，我要改代码去了。我之前写的页面全部都要重写，要重写，写啊....
