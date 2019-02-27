# 移动端适配 - viewport原理
> 原理介绍

<!-- TOC -->

- [移动端适配 - viewport原理](#移动端适配---viewport原理)
  - [1.1. 前置知识 - 像素概念&flexible.js](#11-前置知识---像素概念flexiblejs)
  - [1.2. 前置知识 - 单位`vw/vh`](#12-前置知识---单位vwvh)
  - [1.3. 移动端适配](#13-移动端适配)
    - [1.3.1. Bugs](#131-bugs)
  - [1.4. Q&A](#14-qa)
  - [1.5. 链接](#15-链接)

<!-- /TOC -->

## 1.1. 前置知识 - 像素概念&flexible.js

这部分概念见[CSS-像素概念](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%83%8F%E7%B4%A0%E6%A6%82%E5%BF%B5.md)

可以简单理解为`flexible.js`自动化版本。

## 1.2. 前置知识 - 单位`vw/vh`

`vw/vh`分别指的是`window.innerwidth/window.innerheight`(不包括滚动条)

和这两个属性相关的还有`screen.width/screen.height`。**区别在于`window.innerwidth/window.innerheight`其实是响应的，如果窗口大小变化其数值是会改变，而`screen.width/screen.height`并不会因为窗口大小而改变**

这也就是，叫`vw/vh`是视口的尺寸的由来(窗口大小变化，可视化区域大小自然会变化)

**注意：**

> 如果按住`ctrl`以及滚轮的缩小页面的话。也会更改`window.innerwidth/window.innerheight`，一般缩小放大`vw`，放大页面缩小`vw`(测试页面发现如果页面放大过大，可能会导致出现PC页面出现移动端画面，如果网站做了对应方案的话)。与之相关见[Q&A2]()

> 注意缩放还可能是由于`meta-scale`设置小于的1的时候引起的。

## 1.3. 移动端适配

> 里面哪些postcss插件作用，一些是为了快速开发，另外一些是为解决bugs

**快速开发部分**

* `px2vw`
* `postcss-import` - 导入`css`
* `postcss-url` - css文件内导入图片问题
* `autoprefixer` - 和考虑适配的浏览器范围有关，添加浏览器前缀

### 1.3.1. Bugs

1. `postcss-write-svg`解决移动端`1px`问题。

通过添加`boder-image`进行处理

2. `postcss-viewport-units`和`viewport-units-buggyfill`进行兼容性处理。因为有些浏览器不支持`viewport`单位。

`postcss-viewport-units`用于插入`css content`(这一点没啥问题，用于快速开发的)。`viewport-units-buggyfill`用于生成`content`，内容就是样式文件。如下：

```css
.my-viewport-units-using-thingie { 
  width: 50vmin; 
  height: 50vmax; 
  top: calc(50vh - 100px); 
  left: calc(50vw - 100px); /* hack to engage viewport-units-buggyfill */ content: 'viewport-units-buggyfill; width: 50vmin; height: 50vmax; top: calc(50vh - 100px); left: calc(50vw - 100px);'; 
}
```

`content`内容可以实现对哪些不支持`vw`的浏览器适配？**不支持意为着`vw`单位是无效的。当我们通过`px2vw`进行单位转换之后，`vw`单位无效。**

原因在于，在导入`viewport-units-buggyfill js`文件的时候，会获取设配像素比例以及宽高。

(由于`style`节点也是可以创建的，内部内容为`textContent`。因此，个人认为)

它会获取生成的`CSS`文件，然后通过事先的获取的设备信息，然后替换`vw->px`。

## 1.4. Q&A

1. **Q&A1 -** 超出100`vw`解释

> 在[viewport方案介绍](https://www.w3cplus.com/css/vw-for-layout.html)介绍提到，比如当容器使用`vw`单位，`margin`采用`px`单位时，很容易造成整体宽度超过`100vw`(导致超出页面)。**原因在于`vw`是会随着页面大小变化，但是`px`不会。** 在一个比较小(宽度)的页面中，导致`px->vw`单位转换得到一个比较大的数值，加上原来的`vw`大小，就可能超出`100vw`


2. **Q&A2 -** 放大缩小页面(指的是用`ctrl+滚轮`)，对布局影响。

> (在某些情况下成立，不一定有影响，来自[viewport介绍](https://www.w3cplus.com/css/viewports.html))，首先 **缩小放大对`px`定义元素不影响，测试发现这些元素设置了多少`px`就是多少`px`。** 其次，**影响的是那些响应化的单位，例如`% vw`** 

例如设置父类是`100vw`，内部子元素是`500px`。那么放大大一定程度，导致父类`100vw`小于了
`500px`(原因见[前置知识 - 单位`vw/vh`]())。那么就会出现子类超过父类。

## 1.5. 链接

* [viewport方案介绍](https://www.w3cplus.com/css/vw-for-layout.html)
* [vue with viewport](https://www.w3cplus.com/mobile/vw-layout-in-vue.html) / 主要是用到了`postcss`插件，和`vue`关系不大。在任何地方都适用。