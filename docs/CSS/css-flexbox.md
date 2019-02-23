# 1. CSS - flexbox
> [阮一峰-flexbox](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

<!-- TOC -->

- [1. CSS - flexbox](#1-css---flexbox)
  - [1.1. 前置知识 - 传统定位方式](#11-前置知识---传统定位方式)
  - [1.2. 前置知识 - flex的默认规则](#12-前置知识---flex的默认规则)
  - [1.3. flex-direction](#13-flex-direction)
  - [1.4. flex-basis&flex-grow与剩余空间](#14-flex-basisflex-grow与剩余空间)
    - [1.4.1. 剩余空间](#141-剩余空间)
    - [1.4.2. Q&A](#142-qa)
    - [1.4.3. 最佳实践](#143-最佳实践)
- [flex 小坑](#flex-小坑)
  - [flex 遇到伪元素](#flex-遇到伪元素)

<!-- /TOC -->

## 1.1. 前置知识 - 传统定位方式

* 非float，position定位方式依照[CSS-水平格式化或者垂直格式化的行为(**注意替换元素和非替换元素的区别**)](https://github.com/JiangWeixian/JS-Books/tree/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E5%9F%BA%E6%9C%AC%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96) - 可以实现比较普通的定位，注意[bfc规则](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-bfc.md)能解释其中一些比较奇异的行为
* 而float or position定位方式依照[CSS-float&position定位](https://github.com/JiangWeixian/JS-Books/tree/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E6%B5%AE%E5%8A%A8)规则，能够解释其中一些默认处理方式。

现在有了`flexbox`的方式，不过这只是简化了我们的布局行为而已。`reflow&repaint`的消耗还是存在的。

接下来首先要知道`flexbox`的一些 **默认规则**。

## 1.2. 前置知识 - flex的默认规则

建议先看[阮一峰-flexbox](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

1. flex默认以水平为主轴
2. flex定位会让其中子元素默认以 **主轴**方式排列。**而且默认在主轴上排列为一字。** 注意这里提到的主轴，是我在实践中很容易忽略的一点
3. flex默认以本身大小展示 - 这种规则在明确设定了`width or height or flex-basis数值`失效。但是注意 **分配剩余空间这个概念**，见下面章节。
4. `justify-content or align-items`分别是主轴和负轴的行为，并不是`row or colum`的行为 - 这一点也很容易忽略。 

接下来介绍其中属性的组合表现，请注意`flex-grow or flex-basis`这两个属性的特别地方。

## 1.3. flex-direction

> 定义 **主轴的方向**

默认以`row`为主轴，如果开启`flex-direction: column`就会变换方向。**规则2：默认在主轴上排列为一字；所以此时元素从上到小排列为一列。**

**Q&A - 1. justify-content or align-items变换**

现在我们主轴变了，**规则4：`justify-content or align-items`分别是主轴和负轴的行为**。

此时`justify-content`定义`column`上的排列格式，`align-items`对应变化。最好结合 **规则2**来理解。

**Q&A - 2. align-content**

> 交叉轴的行为。**问题在于交叉轴如何定义？`flex-direction`默认没有这个行为。**

说实话我也不知道如何开启这个定位方式....

## 1.4. flex-basis&flex-grow与剩余空间

首先是默认行为

* `flex-basis` - 默认为`auto`，就是元素本来大小，如果设置为其他数值，就是大小。在设置了`width or height`之后失效。
* `flex-grow` - (指定如何分配剩余空间，可以先不理解这个概念)默认是0，也就是不分配。

两者往往共同作用。

### 1.4.1. 剩余空间

主要是如何计算，明确`width or height`优先级高于`flex-basis`(**指的是在同一个元素下的**，同时存在于一个元素，后者忽略)。

如果父类元素是100%：

* 如果每个只定义了`width or height` - 100% - 所有元素's width = 剩余空间
* 如果每个只定义了`flex-basis` -  100% - 所有元素's flex-basis = 剩余空间

    > flex-basis不设定，默认是auto。就是[非替换元素](https://github.com/JiangWeixian/JS-Books/tree/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E5%9F%BA%E6%9C%AC%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96)本来大小。

    * 元素`flex-basis: auto` - 如果非替换元素本身就比较大，那么会压榨其他元素空间，除非设置了`width or flex-basis`覆盖默认行为。
    * 元素`flex-basis: auto` - 如果非替换元素本身就没那么大，100% - 元素's flex-basis - 非替换元素大小 = 剩余空间。如[flex.html-非替换元素比较小](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/HTML/flex.html)

第二点情况也适用于`width: auto`

### 1.4.2. Q&A

**Q&A - 3. flex-basis与width or height?**

> `flex-basis`定于元素默认大小，`width or height`定义固定大小！。在 **分配多余空间之前**，项目占据的主轴空间。

* 设置了`flex-basis`不是等效就设定了元素`width or height`，后者优先级比较高。
* 设置了`flex-basis`元素只能够保证(非严格)自身元素在一定范围之内，这个保证在剩余空间不足失效，如[flex.html-flex-basis失效](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/HTML/flex.html)所示。

**Q&A - 4. flex-grow如何分配剩余空间**

> 只有存在剩余空间的时候才会有效；而且注意是剩余空间而不是所有空间。所以可以先根据上面的公式计算父类元素的剩余空间。

这部分可以先参考[阮一峰-flexbox](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)。默认是`0`，其他数值将会分配剩余空间：

* 只有一个元素设置了数值 - 那么自然这个元素拥有所有剩余空间
* 如果都设置了，那么就是按照比例关系分配剩余空间

### 1.4.3. 最佳实践

* 想要布局效果，最好设定`flex-basis`数值(**为了取消默认元素本身大小的展示行为**)。然后通过`flex-grow`来分配剩余空间。特别是设定`flex-basis: 0`。

    > 假设父类100%，三个子元素。两个为flex-basis为200px，其中一个为0。然后设定`flex-basis`为0的`flex-grow`为`1`。布局就相当于100% - 200px * 2 = `flex-grow`为`1`那个元素的大小。如[flex.html-flex-basis-test](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/HTML/flex.html)

# flex 小坑
> 记录使用flexbox遇到的问题

## flex 遇到伪元素

虽然一直能够区分伪类以及伪元素，前者如`:hover`后者如`:before`。

**后者明显的特点就是能够在页面中构建元素。真实存在的一个元素。**

意味着那可能就会影响`flex`布局。

所以需要特别注意。
