# CSS浮动以及定位
> float&position

<!-- TOC -->

- [1. CSS浮动以及定位](#1-css浮动以及定位)
  - [1.1. 浮动造成的影响](#11-浮动造成的影响)
    - [1.1.1. 同级别元素影响](#111-同级别元素影响)
    - [1.1.2. float规则](#112-float规则)
    - [1.1.3. 清除浮动](#113-清除浮动)
  - [1.2. 定位](#12-定位)
    - [1.2.1. 基本设定](#121-基本设定)
    - [1.2.2. 利用定位设置宽高](#122-利用定位设置宽高)
    - [1.2.3. 计算规则](#123-计算规则)
    - [1.2.4. clip](#124-clip)

<!-- /TOC -->

## 1.1. 浮动造成的影响

### 1.1.1. 同级别元素影响

浮动虽然会脱离文档流，但是还是会对其他元素造成影响。这里讨论是 **其他元素指的是和他同级别的元素，而不是其父类元素。**

* 如果同级别元素是文本节点，如[float.html-test-float--content](https://github.com/JiangWeixian/JS-Books/blob/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E6%B5%AE%E5%8A%A8/float.html)。那么文本就会围绕着`float`元素
* 如果同级别元素是元素节点(且没有设置float)，同级别节点在下就会则会重叠，在上则浮动元素就在同级别界面下方。**会在浮动元素下面，且元素背景在浮动元素下面，但是字体在上面**

### 1.1.2. float规则

一些原则可以在[bfc](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-bfc.md)中得到解释。这里简单总结一部分

1. float元素会和父类边界重叠，至于那一边取决于向哪一边浮动。一般来说元素不会超过父类元素边界，但是如果 **浮动元素过大，或者设置了marigin为负数就会出现超出的情况**，如[float.html--test__ele--bigchild](https://github.com/JiangWeixian/JS-Books/blob/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E6%B5%AE%E5%8A%A8/float.html)所示。

**多个float元素**

2. 都是同一个方向 - [bfc规则](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-bfc.md)，边界相邻的靠在一行，如果一行长度超过了父类设置的宽度，那么就会换行。
3. 不同方向 - 两个不同方向浮动，如果太长那么就会换行
4. 不会超过上面的元素。

### 1.1.3. 清除浮动

我使用得是`clear: both`这个方案，见[clear.html](https://github.com/JiangWeixian/JS-Tips/blob/master/Demos/clearfloat.html)

## 1.2. 定位

### 1.2.1. 基本设定

* static就是默认没有设置`position`得状态。
* `absolute` - 父类中不是`static`得包含块(`relative or fixed or absolute`)，如果没有这些设置就是相对于`html`。
  **以下很重要: (无论有没有设置`relative or fixed or absolute`)**
  * 如果父类元素是块元素，那么`top or left`就是相对于`border`(包含得是`padding + content`)
  * 如果不是，那么就是相对于`content`区域
* `fixed` - 是`absoulte`特别版本，因为父类元素恒定为`viewport`
* `relative` - 很简单就不说了

**格式**

一般只包含`top left`或者`bottom right`，如果出现四个或者 **相对得两个(如`top bottom`)**就要进行特殊处理。见小结 **利用定位设置宽高**。

**单位**

和`marigin`不同，对于`top bottom`百分号数值是相对于高度来说得。

### 1.2.2. 利用定位设置宽高

当如果出现四个或者 **相对得两个(如`top bottom`)**就可以设定元素宽度高度。

**注意1： 是绝对定位的元素！**

**注意2： 必须含有一对或者以上的冲突设定**

不过要分情况：

1. 只设定`top left bottom right`，这个时候`width or height`都失效了，但是 **如果设置了min-width or minheight**，那么`top left bottom right`在设定的阈值以下失效。

    ```css
    .xx {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      right: 10%;
    }
    ```
    那么就可以设定一个宽度为`40%`的元素。
    
2. 在上一点基础上，设置了`padding or margin` - 如果这种情况出现，第一点就要失效。

### 1.2.3. 计算规则

对于 **利用定位设置宽高**内两种情况都有效。在`marigin`中，有一个由子元素宽高要等于包含块元素宽高的规则。对于定位元素，也有类似的规则。

规则为：**left+margin-left+border-left-padding-left+width+padding-right+border-right+margin-right+right=包含块宽度**。垂直方向类似。由于 **设定了marigin or padding**所以，`top left right bottom`设定元素大小的功能消失。

自然，以上规则很容易发生冲突，特别是即由`margin-left`和`margin-right`这种属性对应的属性。以及 **大小相加不等于包含块**，浏览器由解决冲突的方式：

* 如果由auto的话，就重置`auto`令他满足`=包含块宽度`
* 如果没有`auto`，含有`right`元素优先于`left`被重置，`right`属性优先`margin-right`。

**第一条规则优先级别比较高**

文中[Paper-339]()开始举例很多！

* 例子1 - `left+right+width=12`，所以重置`marigin`两边为`6`

    ![margin-atuo](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E6%B5%AE%E5%8A%A8/img/%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E8%AE%A1%E7%AE%97%E8%A7%84%E5%88%99.PNG)

* 优先重置`right`

    ![优先重置right](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E6%B5%AE%E5%8A%A8/img/%E4%BC%98%E5%85%88%E9%87%8D%E7%BD%AEright.PNG)

**甚至可以垂直居中**

* 垂直居中例子

    ![垂直居中例子](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E6%B5%AE%E5%8A%A8/img/%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD.PNG)

### 1.2.4. clip

应用于绝对定位。

`clip: rect(top, right, bottom, left)`解释为：距离`top`画一条线，距离`right`画一条线，以此。四条线构成的矩形区域为裁剪区域。


