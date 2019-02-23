# CSS - 动画
> 实现动画的几种方式：JS版本的我也放在这里的了

<!-- TOC -->

- [CSS - 动画](#css---动画)
  - [动画相关的属性](#动画相关的属性)
  - [timefunction](#timefunction)
  - [transition/transform](#transitiontransform)
  - [animation/keyframs](#animationkeyframs)
  - [requestAnimationFrame](#requestanimationframe)
    - [参考链接](#参考链接)
    - [题外话 - 为什么优于settimeout](#题外话---为什么优于settimeout)

<!-- /TOC -->

## 动画相关的属性

* `transition/transform`
    * `transform`为内置动画名 - 作为`name`
    * `transition` - name/duration/time-func/delay，其中`name`还可以是一些css属性。
    * 特点 - 监听`name`是否变化，变化与否都会触发动画，`backward`是`forward`相反方向。
* `animation/keyframs`
    * 默认情况下，执行一次闪回到最初状态
    * 格式为`name/duration/time-func/delay/iteration-count/animation-direction`
* `requestAnimationFrame()` - 性能优于`settimeout`

## timefunction

> CSS动画属性一部分：限制元素属性如何变化。


内置的属性变化函数比较少。但是`CSS`支持[cubic-bezier()](https://www.w3schools.com/cssref/func_cubic-bezier.asp)作为`time-func`。其实`linear&cubic-bezier`都可以归结为`cubic-bezier`一类。

在[文档-适用animation&transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)中还有`step&frames`两种`time-function`类型。有时间可以深入研究一下。

## transition/transform

> 监听`name`变化，如果变化了就触发动画；**因此能够实现保持的动画，但是没有办法`only css`情况下实现循环的动画。**

**Q&A1 - 重点在于这个name**`/duration/time-func/delay`都很好理解:

* 如果是`css`普通属性，则`transition: width duration time-func delay`。**然后通过其余方式改变`width`**

    > 例如设置`box-transition`为上述，但是在`box.class`(新添加的class)中改变`width`。那么就可以监听到`width`变化，然后触发动画，如果`class`一直保持，那么就会保持动画最终状态。如果`class`中途消失(或者其他方式改变了`width`)，那么动画就会再一次触发。
    
* 如果是`transform`，则`transition: transform duration time-func delay`，代表监听`transform`的变化。

    > 动画触发条件和上面类似，但是`transform: rotate(xx)`之类的。

    > 同时transform可以在元素上单独设置

前两个说明的例子

* 如果是`all`，代表监听所有属性

**Q&A2 - 多个动画**

以`name/duration/time-func/delay`为一组动画，例如`name1 duration time-func delay, name2 duration time-func delay,...`

## animation/keyframs

> 格式为`name/duration/time-func/delay/iteration-count/animation-direction`。和[transition/transform](#transitiontransform)相比多了后面两个属性。

> 之后还有属性为`animation-fill-mode/play-state`。见[阮一峰CSS动画](http://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html)

通过比较[transition/transform](#transitiontransform)和[animation/keyframs](#animationkeyframs)进行说明。先说结论：

* 触发时机 - `animation`动画立刻触发，`transition`动画需要监听属性
* 动画次数 - `transition`只要属性保持不变就不会触发动画，所以默认 **不支持inf动画(除非JS手段改变属性)**；`animation`可以无限执行动画。

**Q&A3 -** `animation`动画特点

和[transition/transform](#transitiontransform)不同，只要元素设置了`animation`就会触动。而不像[transition/transform](#transitiontransform) **监听某种变化之后触发**

**Q&A4 - name** 和`@keyframes`密切相关(注意浏览器的兼容问题)

```JavaScript
@keyframes somename {
    百分比 {}
    另一个百分比 {}
}

// 注意没有冒号以及分号
// 以及是百分比数值，所以必须带上百分号
```

* **百分比意味着在`duration`哪个事件触发**
* `somename`也就是用于设置`animation: name`，写在`name`部分。**只能用于animation但是不能用于transition**
* 在`百分比: {}`中可以设置多个属性(包括`transform`)，不像`transition`只能够监听一个属性

例子见[css-animation.html(ele-animation-normal)](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/HTML/css-animation.html)

**Q&A5 -** `iteration-count/animation-direction`属性特点。

* `iteration-count` - 代表动画执行次数`n|infinite`。而且 **新的一次动画执行都是从头开始** (例如动画执行到末尾阶段，期间依照`time-function`变换参数，从头开始意味着属性闪回到最初阶段，然后再执行动画)
* `animation-direction` - `nomal|alternate`

    > 很明显是动画执行的方向。在`iteration-count`知道，新的动画执行时会闪回到最初阶段。**现在可以控制回退时候的动画执行特性，也就是`alternate`**

    > 可配合上一个`iteration-count`使用。因为无论是动画执行或者回退都是要消耗`iteration-count`执行次数，执行一次减1。**所以如果设置了`alternate`，动画次数却没有大于2，是没有办法执行下去的**。见[css-animation.html(ele-animation-alternate)](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/HTML/css-animation.html)

* `animation-fill-mode`

    > 除了forward其余都不是很重要

    * `none`默认值
    * `backward` **回到动画第一帧情况，一般情况下就是初始状态** 见[css-animation.html(ele-animation-mode--backward)](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/HTML/css-animation.html)
    * `forward`动画执行之后保持。**大概是这个属性最为重要的一个**
    * `both`

## requestAnimationFrame

[MDN-requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

> 实现动画关键在于自身调用自身。

```JavaScript
function animate () {
    // somedom modify
    requestAnimationFrame(aniamte)
}
requestAnimationFrame（animate）
```

**Q&A6 -** 如何取消动画？

和`settimeout`一样，同样有一个`ID`返回，例如`id = requestAnimationFrame(animate)`。可以通过`cancelAnimationFrame(myReq)`来取消动画。

### 参考链接

* [requestAnimationFrame(animate)](https://juejin.im/entry/5ae844ec518825673a205855)

### 题外话 - 为什么优于settimeout

> 我们考虑的是动画性能这部分；(不过想想性能更好是应该的，毕竟是为了动画做的优化函数)

* 可见性优化 - `settimeout`是会加入事件队列，其实是交给`JS`来做，意味着一旦开始无论页面是否可见(打开或者开启其他标签页)，`JavaScript`都会在执行，**`requestAnimationFrame`** 要求只绘制可见性动画。所以神奇的是 **requestAnimationFrame回调函数的dom元素，它是知道哪些是可见的或者是不可见的。**

* 重绘或者重排优化 - **`requestAnimationFrame`回调函数的`dom`元素** 会进行一次性重排重绘。