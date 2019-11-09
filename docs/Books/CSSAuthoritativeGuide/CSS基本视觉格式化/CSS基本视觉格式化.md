# 基本视觉格式化
> 行内非替换元素总是要特别一点

<!-- TOC -->

- [基本视觉格式化](#基本视觉格式化)
  - [前置知识 - 对于CSS而言的元素分类](#前置知识---对于css而言的元素分类)
  - [水平格式化 - auto导致宽度变化](#水平格式化---auto导致宽度变化)
  - [高度格式化](#高度格式化)
    - [垂直方向外边距合并](#垂直方向外边距合并)
    - [line-height补充](#line-height补充)
  - [inline-block](#inline-block)
    - [img - 特别的inline元素](#img---特别的inline元素)
    - [inlineblock - margin](#inlineblock---margin)

<!-- /TOC -->

## 前置知识 - 对于CSS而言的元素分类

* 块元素
* 行内元素 - 无法设置`width height`，但是可以有` margin padding border`
* 替换元素 - 替换元素指的是是否包括内容，例如`<p></p>`和`<p>xx</p>`就是替换元素和非替换元素
* 非替换元素 - 元素含有内容

可以组合为替换块元素，或者非替换块元素

## 水平格式化 - auto导致宽度变化

**注意1: 指的是非替换块元素：替换元素无法设置`auto`，行内无法设置`width`**

**注意2: 原则总是让总的计算实际占用宽度等于父类**

说明`auto`以及`margin`为负值的时候的情况。

当父类宽度是`400px`。

子元素设置`width: auto`以及`margin-left: -40`(`right`也是一样的计算方法)

width = 400 - 0(margin-right) - (-40)(margin-left)

**替换元素**

* auto这个属性无效 - 有条件，因为`p`标签之类都含有文本内容，不含文本形成的 **替换元素**情况比较少，如果不含有文本，设置`auto`，宽度为`0`。但是有些元素就是在元素开始和元素结束之间不含有文本，例如`img`。此时的`auto`设置的结果等于本身宽度，例如 **图片本身的宽高**。

例子见[replace.html-test-replace](https://github.com/JiangWeixian/JS-Books/blob/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E5%9F%BA%E6%9C%AC%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96/replace.html)

## 高度格式化

`line-height`也是归为到高度一部分。

### 垂直方向外边距合并

* 两个正数
* 一个正数另外一个负数 - 正的减去负的绝对值

### line-height补充

设置`line-height`只对非替换元素有效(指的是会影响到布局)。替换元素的设置了`line-height`，也通过`chrome`调试工具看到`line-height`数值，却不会对布局有影响。

**line-height与vertical-align**

这部分具体分析见[CSS文本属性-line-height&vertical-align部分](https://github.com/JiangWeixian/JS-Books/tree/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7)

**Q&A**

1. 以下会影响到line-height或者布局吗？

    > 内边距、外边距和边框不会影响到line-heigh。也就说如果对于`inline`**非替换**元素，外边距和边框都 **不会影响布局**。对于`inline`**替换**元素或者`inline-block(无论是替换还是非替换)`元素，设置这些属性 **会影响到布局。**。可以查看[replace-test-expandlh](https://github.com/JiangWeixian/JS-Books/blob/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E5%9F%BA%E6%9C%AC%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96/replace.html)

2. 如果设置了`height`，`line-height`如果比`height`大会影响到布局吗？
 
    > 答案是会的！见[replace-lineheigh-lh](https://github.com/JiangWeixian/JS-Books/blob/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E5%9F%BA%E6%9C%AC%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96/replace.html)


## inline-block

### img - 特别的inline元素

其实是`inline`元素，但是表现却是`inline-block特性`，可以理解为`inline-block`。

### inlineblock - margin

inline元素的margin是不可以设置，如果设置了是相对于 **当前行baseline，也就是当前行内容区域底线。**