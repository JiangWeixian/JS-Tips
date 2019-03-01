# CSS - 移动端像素概念
> `flexible.js`说明版本

<!-- TOC -->

- [CSS - 移动端像素概念](#css---移动端像素概念)
  - [写在前面 - `flexible.js`解决了什么问题](#写在前面---flexiblejs解决了什么问题)
  - [**规则**](#规则)
  - [**CSS像素和设备像素**](#css像素和设备像素)
    - [**那么移动端屏幕适配又是怎么来的？**](#那么移动端屏幕适配又是怎么来的)
  - [**`flexible.js`适配原理**](#flexiblejs适配原理)
    - [**`flexible.js` - Q&A**](#flexiblejs---qa)
    - [**总结**](#总结)
    - [**`flexible.js`问题**](#flexiblejs问题)
  - [**`viewport`适配**](#viewport适配)
    - [**`viewport -`Q&A**](#viewport--qa)
  - [**链接**](#链接)

<!-- /TOC -->

## 写在前面 - `flexible.js`解决了什么问题

> 知其然，并知道所以然的原理

首先`flexible.js`原理就是将写出来的页面当作图片，通过缩放放大的原理进行适配方案。

一般都说`flexible`解决了屏幕适配问题，体现在哪一方面？

例如就响应式来说，如果将元素尺寸 **设置为百分比**。那么写出来的页面遇到不同尺寸的屏幕，**依旧可以实现填充不同尺寸的屏幕。** 这一点和`flexible.js`的作用是一样的，**所以就有了疑问，为什么使用`flexible.js`?**

> 那一定是为了解决百分比之类布局所出现的问题而出现了`flexible.js`。因此我们要知道一些参数设置的百分比是相对于什么？见[CSS-百分比](https://www.w3ctech.com/topic/128)

可以发现，并不是所有元素百分比都是相对于一个固定的属性(例如都是相对于宽度)来说的。有些是相对于宽度，有些是相对于高度。**同时我们要知道高度在页面中是一个变化的数值，并不像在移动端屏幕宽度是固定的！**

**假设我们使用百分比？**

> 以下例子中，最外层元素为了响应式我们使用设置了100%。

(这里假设我们不使用`rem`，而是在样式文件中，直接书写`px`单位)因此可以设想一个场景，如果设计稿(`750px`设计稿)设计的一个元素是`200px*200px`。那么在`iphone7(dpr=2)`上应该显示的是`100px*100px`，**此时我们在样式文件中写上`100px*100px`**。到了其他设备，`pixel`，由于是写死的`px`，此时元素依旧是`100px*100px`。

> (iphone7)100px相对于375px；而(pixel)100px相对于380px。这显然是不合理的，因为元素间距因为屏幕变化而变大了。

此时我们可能会想使用`%`进行适配，假设是`26.7%`。这样在`ip7`上 **宽度** 是`100px`，在`pixle`就会响应的方法。至少设计稿看起来没啥问题了。

**注意：这里我们提到了是宽度是没啥问题了，但是高度呢？** 要知道高度是一个变化的数值，设置百分比也是父类元素的百分比。假设这个父类元素是根节点，且超过了屏幕的宽度，且会在不断变化。那么 **高度百分比就没有办法使用了**

因此我们需要一个固定的单位，无论是根节点`flexible.js rem`还是`viewport vw`。用这个单位就可以设置高度的数值了。也就是 **高度根据宽度来进行设置。**

前者由于`flexible.js`存在，`rem`参照物`root fontsize`会不断变化。而`vw`本身就是不断变化，对于`375px`来说，`1vw=3.75px`；对于`380px`屏幕来说，`1vw=3.8px`。

## **规则**

* **设计稿**以 **设备像素** 为单位进行设计的。
* **样式表文件** 的单位是`CSS-PX`，含义为`window.screen`的结果就是`CSS-PX`能够设置的范围。
* **视口宽度为** 为`docEl.getBoundingClientRect().width`返回的结果
* `devicePixelRatio` 就是[CSS像素和设备像素](#css像素和设备像素)中的`N`
* `px->2rem`的规则是不变的，具体原因见[**`flexible.js` - Q&A2**](#flexiblejs---qa)

**题外话**

> 重点说明一下这个视口宽度

`flexible.js`使用`docEl.getBoundingClientRect().width or window.innerWidth`(并用这段代码得到的结果`/10`设置`fontSize`)

> 关键神奇的是这段代码在`IPHONE6`上是等于`750px`。这和我们所认知的手机屏幕宽度为`375px`是不一样的。而`window.screen=375px`。**这是由于在`flexible.js`设置了`meta-scale=0.5`**

**所以`docEl.getBoundingClientRect().width or window.innerWidth`得到的结果应该是`= window.screen / meta-scale`**

## **CSS像素和设备像素**

只要理解一个概念就可以了，一般来说 **N 个 设备像素 = CSS像素**

![像素概念](https://raw.githubusercontent.com/JiangWeixian/JS-Tips/master/CSS/img/%E5%83%8F%E7%B4%A0%E6%A6%82%E5%BF%B5.png)

只是原本一个`css`等于一个设备像素，现在等于了4个。因此在`.css`文件中所设置的`px`之后，每个设备看起来都是一样的(例如高度)。

### **那么移动端屏幕适配又是怎么来的？**

这和设计师有关，因为对于安卓和ios来说。不可能对于安卓每一个屏幕进行设计，或者ios。只会对ios和安卓的主流设备进行设计。

以苹果举例，可能以`iphone7(N=2)`为基础进行设计。此时2个设备像素等于`1个CSS`像素，**1个设备像素等于`0.5 CSS-PX`。**

**设计稿**以 **设备像素为单位进行设计的。** 因此此时设计的`1px`(**指的是设备像素**)是等于`0.5 CSSPX`(取决于两者的换算关系)。

**如果我们只选择在`IPHONE7`或者类似的属性设配上运行的话？** 在写样式表文件的时候，完全就可以写出`0.5px`(此时是样式表文件，所以单位指的是`CSSPX`)。**但是，设配尺寸那么多...** 不可能全部都是`0.5PX`，为所有设备写不同样式表文件！

所以就有了适配方案出现。可以理解为只要写一个样式表文件，然后自动进行单位转换，变为`yy px`。

**题外话**

**样式表文件** 的单位是`CSS-PX`，含义为`window.screen`得到的数字就是`CSS-PX`能够设置的范围。就像是以上代码在手机上得到`375px`。

## **`flexible.js`适配原理**

> 以下也是设置关键点

> 样式表文件单位就要全部转化为`rem`单位了，转化规则是设计稿单位`/75px=xx rem`。对于所有设备都一样。

**视口宽度 = docEl.getBoundingClientRect().width**

* 获取屏幕`devicePixelRatio`，并设置`meta`标签`scale=1/devicePixelRatio`，代表屏幕缩放比例；设置根节点`font-size`，为视口宽度/10，代表`px->rem`单位如何转换。

    > 就像是假设`750px`设计稿，`iphone6`上(`devicePixelRatio=2; 视口宽度是750px`)。那么`meta-scale：0.5`，根节点`font-size=75px`

    **关键的地方在于：** 设计稿单位是要除以`75px`变为`rem`变换到`CSS`文件上。以下说明不能够体现，在[**`flexible.js` - Q&A2**](#flexiblejs---qa)进行了补充。

* (写在`CSS`文件中的单位都是`CSS-PX`)在`CSS`文件中直接使用`750px`**设计稿**上面的属性(即，设计稿上的`1PX`就是样式表文件的`1PX`)。**此时展示出来的结果是`750px`的效果，根据[那么移动端屏幕适配又是怎么来的-题外话提到的](#那么移动端屏幕适配又是怎么来的)在设备宽度只有`375px`上，样式表数值超过了范围**。由于`scale`缘故，显示结果被缩放了`0.5`。所以可以达到 **实现css像素的0.5px。**

### **`flexible.js` - Q&A**

* **Q&A1 -** 如果没有`meta-scale：0.5`？

    > 以[**`flexible.js`适配原理**](#flexiblejs适配原理)举例情况，**此时展示出来的结果是`750px`的效果，设备宽度只有`375px`肯定显示不了的(毕竟设计稿是`750px`屏幕的)**。在设备像素只有`375px`情况下的话，左右上下一定是会出现滚动条的。

* **Q&A2 -** 其他设备的举例说明&以及`rem`作用？

    > 依旧是`750px`设计稿(相同的设计稿才会有适配情况！)

    **REM作用！**

    `750px`设计稿里面的单位(假设是`750px`)就要换算成`750px/75px = 10rem`；以及重申 **(写在`CSS`文件中的单位都是`CSS-PX`)**。

    **先再一次说明`IPHONE6/7`上的情况：** `750px`设计稿里面的单位(假设是`75px`)就要换算成`750px/75px = 10rem`；

    > 假设`devicePixelRatio=2; 视口宽度是750px(375px/0.5)`(原因见[**规则-题外话**](#规则))。那么`meta-scale: 0.5; font-size: 75px`

    > 当我们打开这个页面的时候，`10rem`根据根节点`font-size：75px`得到了`750px`，此时`meta-scale: 0.5`缩放0.5。**变为375(css-px)，手机正好展示**

    **如果是其他尺寸的手机呢？**

    > 假设`devicePixelRatio=1; 屏幕宽度是380px`。那么`meta-scale: 1; font-size: 38px`(视口就是380/1=380px)

    (`750px`设计稿`750px/75px = 10rem`，`px2rem`的比例是不变的)

    > 在`rem->px`过程中，`10rem*38px = 38px`

### **总结**

综上

1. 是在移动端绘制`750px`的设计稿，根据`/75px`进行`px->rem`的转换`=x`
2. 如果是`devicePixelRatio=2`，就设置`meta scale=0.5`
3. 根节点`font-size`为 **视口宽度/10px**`=y`

显示结果为`x*y*0.5`在`window.screen`范围内就能够准确显示。

### **`flexible.js`问题**

* (这一点问题倒是影响不大)单位问题 - 引起position，size等问题。
* (来自面试我的面试官解答)其实无论是是`flexible.js or viewport`两种适配方案，其实和图片缩放差不多。不同屏幕尺寸就是 **放大还是缩小** 的差别罢了。**但是有的时候，屏幕尺寸变化的时候，如果用`@media`的话，可能更好的选择而不是只有缩小放大两种选择。**

## **`viewport`适配**

> 完整解析见[CSS-viewport适配方案](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/CSS/css-%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%83%8F%E7%B4%A0%E6%A6%82%E5%BF%B5.md)

* [viewport适配方案-可行性](https://www.w3cplus.com/css/vw-for-layout.html) - 需要移动端对于`vw`等单位的支持。

`flexible.js`本来就是根据`viewport`实现的，所以现在换过来，也没有问题。**关键在于我们不需要缩放了`scale`。** 原因在于：

1. 设计稿以`750px`为单位，这里就假设了以viewport等于了`750px=100vw`为设计。当写在css文件中是以`vw`为单位的。当一个设计稿`7.5px(物理像素)=1vw`，对应了`7.5/2(css像素）`。
2. 关键在于如果当了真正的移动端，`viewprot`变为了`375px`，那么`3.75px=1vw`就能够实现适配。就不需要通过`scale`缩放。

    > 同时也由于不再设置`meta-scale < 1`的话，所以`docEl.getBoundingClientRect().width or window.innerWidth`返回的结果也就是正常的`window.screen`

### **`viewport -`Q&A**

* **Q&A1 -** `flexible`为什么没办法自动?

    > 因为rem是写死的。vw是相对变换的数字。

    **所以可以理解为`flexible.js`是手动版本`viewport`适配方案`**

## **链接**

* [各种概念解释](https://github.com/jawil/blog/issues/21)
* [移动布局实践](https://www.cnblogs.com/ssh-007/p/7213792.html?utm_source=itdadao&utm_medium=referral)