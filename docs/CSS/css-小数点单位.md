# CSS - 小数点
> 如何处理小数点单位；

<!-- TOC -->

- [CSS - 小数点](#css---小数点)
  - [**前者知识 - 小数点处理的两种方式**](#前者知识---小数点处理的两种方式)
  - [**前置知识 - 渲染与占用**](#前置知识---渲染与占用)
  - [PX](#px)
    - [解释`1PX`问题](#解释1px问题)
  - [参考](#参考)

<!-- /TOC -->

## **前者知识 - 小数点处理的两种方式**

> 纠正一个设备像素不能显示一半的错误

**题外话 - 设备像素**

设备像素和CSS像素之间的概念，有的是1个设备像素对应一个1-CSS像素，有的是2个像素对应1-CSS像素。

其实从观感上只是分辨率提高了。原因在于：

> **假设1个CSS像素高度宽度是固定的(因为需要多平台保持一致)**，那么现在可以通过2个设备像素显示或者1个设备像素显示。设备像素的高度在变化。

**回到正题** - 小数点处理方式有两种

1. 小数点四舍五入
2. 对于元素形成的矩形，**外扩** 至最近设备像素。

[参考](https://trac.webkit.org/wiki/LayoutUnit)

## **前置知识 - 渲染与占用**

> 渲染对于元素对于视觉的影响；占用指的是该元素对于布局上的影响；

> 

假设存在`1.52px`元素，那么按照[**小数点处理的两种方式**](#前者知识---小数点处理的两种方式)提到的 **四舍五入进行处理的话。** 那么`1.52px`应该变为`2px`，但是页面种布局还是占用了`1.52px`。

那么对于`0.2px`元素，看的到为`0px`，但是暂用了`0.2px`。**也就是说此时元素是看不到的，但是实实在在的占用了布局，并对其他元素造成了影响**

**对于小于0.5的处理**

例子见[CSS-MINVALUE](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/HTML/css-minvalue.html)可以发现，对于`ele-minst`设置了高度为`0.4px`。其实页面上无法看到这个元素的。

但是我们在后面存在一个`50px*50px`的`ele`元素，通过`ele.getBoundingClientRect()`可以发现在`y`轴上存在`0.4px`。**这一点和对于大于0.5上移动处理方式应该是类似的。**

**对于大于0.5的处理**

> 假设一个1.5px元素

和上面处理类似，我们将看到一个`2px`高度元素。

**关键在于这个页面布局`1.5px`，此时是小于`2px`。** 如果之后还存在其他元素，对于之后元素的影响如何？

显然后面元素会上移，并遮挡上一个元素`0.5px`高度。

> 假设是1.8px，那么就会出现遮挡`0.2px`

## PX

> 先考虑绝对单位的小数点情况

> 解释了1PX问题

这部分参考[**渲染与占用**](#前置知识---渲染与占用)中提到的。

小数点危害还是有的，见[实例分析](https://segmentfault.com/a/1190000012737741)。

### 解释`1PX`问题

同时也可以解释 **1PX问题**。结合[CSS-物理像素和CSS像素概念](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%83%8F%E7%B4%A0%E6%A6%82%E5%BF%B5.md)，设计稿上的`1PX`指的是物理像素点。**所以写在样式表之后会写出`0.5px`**，引发出来的问题为：

> 如果是支持`0.5px`的设备还好。但是如果不支持呢？

就像是上面分析那样，可能变为`1PX(CSS-PX)`，这个就会变为`2个物理像素`。和 **设计稿对比就会发现其实是变高了！这就是所谓的`1PX`问题。** (就像是你直接写在CSS文件里面的`1PX`效果一样)

**我想关键点在于设备对于小数点的处理导致的！**

**如何解决？**

1. `border-image`实现版本

    先要理解[border-image](https://css-tricks.com/almanac/properties/b/border-image/)几个参数含义，这个[地址](https://codepen.io/team/css-tricks/pen/rVdEdp)可以帮助理解。

    **注意第2剪切参数其实是由4个数值组成：分别是top right bottom left。** 如果是缩写表示4个位置都是一个数值。

    具体border.png是什么图片见[链接](https://github.com/AlloyTeam/Mars/blob/master/solutions/border-1px.md)

    ```css
    // 为什么这段代码可以实现模拟物理像素1px，css像素0.5px
    .border-image-1px {
      border-width: 1px 0px;
      -webkit-border-image: url("border.png") 2 0 stretch;
      border-image: url("border.png") 2 0 stretch;
    }
    ```

    根据`border-image top`部分我们获取了`border.png`上部`2px`部分，此时`boder-width`我们定义`1px`。那么对于 **dpr = 2**的设备来说，此时`boder-width`由两个设备像素点组成。将`boder.png`压缩至`1-csspx`显示。由于 **`border.png`上部`2px`部分有`1px`是透明的。那么不透明那部分就被1个物理像素点展示**。

    > 相当于我们绕过了`1 css-px`必须由`2 device-px`显示的限制。原因在于，我们定义`2px border-image`图片为`1 css-px`。而这里的`2px border-image`并 **没有** 在样式表中定义`2px`(也就不是通过`4 device-px`展示)，只是我们口头说明。**由1 css-px or 2 device-px**展示。

    > 推广开来如果`dpr=3`，那么我们就需要`3px`的图片(其中2个px为透明的)，`1px border-width`。

    对于`dpr=1`的设备来说，`1csspx = 1devicepx`也就意味着。我们不需要进行上诉`border-image`适配，直接写`border`样式即可。

    > 因为`2px border-image`压缩为`1 devicepx`显示是做不到的。

* [网上全部解决方案](https://juejin.im/entry/584e427361ff4b006cd22c7c)

## 参考

* [多个小数点元素问题](http://web.jobbole.com/84113/)