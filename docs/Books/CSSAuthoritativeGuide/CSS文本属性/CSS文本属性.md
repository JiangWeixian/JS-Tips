# 文本属性

<!-- TOC -->

- [文本属性](#文本属性)
  - [前置知识 - 字体行](#前置知识---字体行)
  - [text-indent - 缩进](#text-indent---缩进)
  - [line-height](#line-height)
  - [vertical-align](#vertical-align)
  - [处理空白符](#处理空白符)
  - [比较少用到的，但是很有用](#比较少用到的但是很有用)

<!-- /TOC -->

## 前置知识 - 字体行

首先要记住下面这张图，理解其他文本属性很重要

![line-height](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/img/lineheight.PNG)

## text-indent - 缩进

**注意：**

1. 块元素属性，不是行内元素
2. 百分比单位一般是根据父元素的

## line-height

* 百分比(或者缩放因子)是相对于字体大小而言
* 字体上下的空白是可以被计算出来的，是`(lh - font-size)/2`

以上 **行框图**提到了内容区域，和行框区域。

内容区域就是和盒子模型内容区域没什么区别，就是`content`所在区域，如果就只有一行的话，内容区域高度就是字体高度。可以得到结论: 

具体可见[replace.html-text-isexpand](https://github.com/JiangWeixian/JS-Books/blob/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E5%9F%BA%E6%9C%AC%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96/replace.html)。

* **line-height**并不会改变内容区域高度，如果给一个元素画上`border`是在内容区域上绘画，而不是 **行框区域**。也就是说，如果字体高度和`line-height`不一致的时候：
  1. 如果是`line-height`小于`font-size`，也就是行框会在内容区域下面
* 但是会影响占用大小，(在 **没有设置父类高度**情况下)会撑开父类高度。

## vertical-align

**只能够是行内元素**，所有属性如下图所示：

![verticalalign](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/img/verticalalign.PNG)

对齐是向 **它本身的行框对齐它所在行(包裹它的)**的行框、内容框、或者内容基线而言的。所以当`line-height`小于`font-size`的时候，一切都变得很微妙(因为行框下移了)。

* baseline - 是对于行基线而言
* bottom - 是针对行行框( **注意不是内容区域**)下边界而言
* textbotton - 正对行内容区域下边界
* 具体数值
  * 如果是百分比 - 相对于lineheight得到数值
  * 数值 - 在当前位置上上移动或者下移动，正的为上移，负的为下移

## 处理空白符

字体和字体之间本来就有的空白不算，这里的处理指的是原本只有一个空格，现在却有两个。如下图所示：

![处理空白和黄行](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/img/whitespace.PNG)


## 比较少用到的，但是很有用

* word-space and letter-space - 字体间距和字母间距
* text-transform - 字体变换
* text-decoration - 像划线之类的装饰
* direction - 文本方向