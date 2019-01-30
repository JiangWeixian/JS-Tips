<img src="https://raw.githubusercontent.com/JiangWeixian/JS-Tips/master/img/css.png" height="43px" alt="css"></img>

<!-- TOC -->

- [**内容分类**](#内容分类)
  - [Tips](#tips)
  - [**移动端**](#移动端)
  - [**`CSS`绘画**](#css绘画)
  - [**选择器**](#选择器)
  - [坑](#坑)
- [**待分类目录**](#待分类目录)

<!-- /TOC -->

# **内容分类**

## Tips

1. 类如`border-image`这个属性，可以进行`source clip width outset repeat`。其中`clip`是可以设置4个属性的`0 0 0 0`，两个属性`3 0`并不意味着`clip=3 width=0`。而是`clip 3 0`。所以类似这种可是设置4个属性的`CSS`属性，只有出现满足4个了才会进行，下一个属性的读取。

## **移动端**

> 主要是屏幕的适配。在[CSS-flexible.js适配方案](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-viewport%E9%80%82%E9%85%8D.md)提到的这两个方案相对于`100%`布局方案解决了什么问题。一定是要知道的。

* [CSS-单位](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-%E5%8D%95%E4%BD%8D.md) / 问题出现在响应式的单位上
* [CSS-flexible.js适配方案](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-viewport%E9%80%82%E9%85%8D.md) / 设备像素以及CSS像素；`flexible.js`方案疑惑点解析；
* [CSS-viewport适配方案](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%83%8F%E7%B4%A0%E6%A6%82%E5%BF%B5.md) / `viewport`适配方案解析

## **`CSS`绘画**

> no js only css如何实现一些绘画功能

* [css-画出多边形](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-%E5%A4%9A%E8%BE%B9%E5%BD%A2.md) / 三角形；

## **选择器**

* [css选择器优先级](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css%E9%80%89%E6%8B%A9%E5%99%A8%E4%BC%98%E5%85%88%E7%BA%A7.md) / 一长串的`CSS`选择器 = `XX`权重；
* [css-伪类和伪元素之间区别](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-%E4%BC%AA%E7%B1%BB%E5%92%8C%E4%BC%AA%E5%85%83%E7%B4%A0%E5%8C%BA%E5%88%AB.md) / 是否创建元素

## 数值计算
> 只要不注意，就掉到坑里面了

* [CSS-单位](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-%E5%8D%95%E4%BD%8D.md) / 坑主要出现在响应式的单位上
* [CSS-小数点单位]()
* [css-盒子模型(box-sizing)](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-boxsizing%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B.md)

## 布局

* [css-清除浮动](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8.md)
* [css-position&margin&float](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-position%26margin%26float.md)

# **待分类目录**

* [记录一次移动端调试奇怪一点](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/%E7%A7%BB%E5%8A%A8%E7%AB%AF.md)
* [各种情况下的div元素居中](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/%E5%90%84%E7%A7%8D%E6%83%85%E5%86%B5%E4%B8%8B%E7%9A%84%E5%85%83%E7%B4%A0%E5%B1%85%E4%B8%AD.md)
* [stylus解惑](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/stylus%E8%A7%A3%E6%83%91.md)
* [css-display](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-display.md)
* [css-link&@import](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-link%26%40import.md)
* [css-BFC](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-bfc.md)