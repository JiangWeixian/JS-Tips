# CSS - 移动端像素概念

## CSS像素和设备像素

只要理解一个概念就可以了，一般来说 **N x 设备像素 = CSS像素**

![像素概念]()

只是原本一个`css`等于一个设备像素，现在等于了4个。因此在`.css`文件中所设置的`px`之后，每个设备看起来都是一样的(例如高度)。

### 那么移动端屏幕适配又是怎么来的？

这和设计师有关，因为对于安卓和ios来说。不可能对于安卓每一个屏幕进行设计，或者ios。只会对ios和安卓的主流设备进行设计。

以苹果举例，可能以iphone7为基础进行设置。且设计是以 **设备像素为单位进行设计的。**因此此时设计的1px等于0.5的csspx。(取决于两者的换算关系)。这也是为了充分利用设备的考虑，这么好的屏幕当然要利用起来。

## 适配

### flexible.js原理

1. 以`750px`设计稿为例子。获取屏幕`devicePixelRatio`，并设置`meta`标签`scale=1/devicePixelRatio`。设置根节点`font-size`。

2. **将设计稿单位换算为rem**这样在 屏幕宽度为`375px 设备像素高度/css像素高度=2`情况下。显示的是`750px`设计稿。又由于`scale`设计，显示结果被缩放了。所以可以达到 **为了实现css像素的0.5px，设置了1px-css像素之后可以通过scale=0.5来控制.**

#### 问题

* 单位问题 -引起position，size等问题

### viewport适配

* [viewport适配方案-可行性](https://www.w3cplus.com/css/vw-for-layout.html) - 需要移动端对于`vw`等单位的支持。

`flexible.js`本来就是根据`viewport`实现的，所以现在换过来，也没有问题。**关键在于我们不需要缩放了`scale`。**原因在于：

1. 设计稿以750px为单位，这里就假设了以viewport等于了`750px=100vw`为设计。当写在css文件中是以`vw`为单位的。当一个设计稿`7.5px(物理像素)=1vw`，对应了`7.5/2(css像素）`。
2. 关键在于如果当了真正的移动端，`viewprot`变为了`375px`，那么`3.75px=1vw`就能够实现适配。就不需要通过`scale`缩放。

### Q&A

1. `flexible`为什么没办法自动?

    > 因为rem是写死的。vw是相对变换的数字。

## 链接

* [各种概念解释](https://github.com/jawil/blog/issues/21)
* [移动布局实践](https://www.cnblogs.com/ssh-007/p/7213792.html?utm_source=itdadao&utm_medium=referral)
* [flexible.js问题所在]()