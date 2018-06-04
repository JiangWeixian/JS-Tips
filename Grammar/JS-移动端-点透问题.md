# 移动端点透问题
> touch&click

<!-- TOC -->

- [移动端点透问题](#移动端点透问题)
  - [前置知识 - 移动端事件以及click](#前置知识---移动端事件以及click)
  - [前置知识 - 事件捕获、处理以及冒泡](#前置知识---事件捕获处理以及冒泡)
  - [前置知识 - click延迟300ms由来](#前置知识---click延迟300ms由来)
  - [click与点击穿透](#click与点击穿透)
  - [如何阻止click延迟300ms](#如何阻止click延迟300ms)

<!-- /TOC -->

## 前置知识 - 移动端事件以及click

移动端`touch`事件类型：

* `touchstart` - 接触屏幕就触发
* `touchmove` - 接触到屏幕并移动再触发
* `touchend` - 接触并离开屏幕时候触发
* `touchcancel` - 不常见

其中没有一个是和`click`是对应的，因为`click`的逻辑是鼠标点击抬起。

理论上是`touchstart&touchend`两者事件的组合。两个合起来构成了`click`事件。

## 前置知识 - 事件捕获、处理以及冒泡

dom事件触发的逻辑，事件捕获->处理->冒泡。**即使没有`onclick`事件的绑定(假设)，仍旧有`click`事件被触发，只不过不会被捕获到而已。

其中捕获是从`document`开始往绑定元素传递。传递到**绑定元素child**之后，开始触发上面的事件函数。

且**不会继续往下面传递**。

然后开始冒泡，从**绑定元素child**开始向上传递，触发`parent`元素的一些事件函数。

冒泡带来的影响体现在：

```html
<div class="parent">
  <div class="child"></div
</div>
```

## 前置知识 - click延迟300ms由来

> iOS自带的Safari浏览器会将网页缩放至原始比例。那么这和 300 毫秒延迟有什么联系呢？假定这么一个场景。由于用户可以**进行双击缩放或者双击滚动**的操作，当用户**一次点击屏幕之后**，浏览器**并不能立刻判断用户是确实要打开这个链接，还是想要进行双击操作**。因此Safari 就**等待300毫秒**，以判断用户是否再次点击了屏幕。

[@tsyeyuanfeng-链接](https://www.jianshu.com/p/6e2b68a93c88)

## click与点击穿透

就以上两点难以表明**点击穿透**。在以下这篇[链接](https://www.jianshu.com/p/dc3bceb10dbb)中举出了点击穿透的例子。

```html
<!DOCTYPE html>
<html>
  <head>
    <style type="text/css">
      #level0 {
        /* width: 500px;
        height: 500px; */
        position: relative;
      }

      #level1-0 {
        position: absolute;
        z-index: 1;
        background: red;
        width: 500px;
        height: 500px;
      }

      #level1-1 {
        background: green;
        width: 500px;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <div id="level0">
      <div id="level1-0">
      </div>
      <div id="level1-1">
      </div> 
    </div>
  </body>
  <script type="text/javascript">

    var level10 = document.getElementById("level1-0");
    var level11 = document.getElementById("level1-1");


    level10.addEventListener('touchstart', function(e) {
      level10.style.display = 'none';
    });

    level11.onclick = function() {
      console.log('level11莫名被点击了');
    }

  </script>
</html>
```

**注意level1-0和level1-1**是覆盖关系。那么理论上，`level1-1`上的点击事件并不会被触发。因为被`level1-0`盖住了。

1. 当`level1-0`元素被`touchstart`，触发事件被**移除了**
2. 当手指抬起，触发`click`事件。
3. `level1-0`消失之后，由于`click delay 300ms`的原因。所以`click`事件莫名传递到了`level1-1`那里。

**click事件的传递可以理解为dom事件触发的逻辑，事件捕获->处理->冒泡。**即使没有`onclick`事件的绑定(假设)，仍旧有`click`事件被触发，只不过不会被捕获到而已。

所以当`level1-0`被移除，`click`事件被延迟了`300ms`传递到了`level1-1`上面。`level1-1`的`click`事件莫名触发了。

## 如何阻止click延迟300ms

我们不可能使用`touchstart`代替`click`。

**解决方案**，更多可以参考这篇[博客](https://www.jianshu.com/p/6e2b68a93c88)

* 如果你使用`vue`，`fastclick`以及`vtoch`组件都是比较好解决方案。
* 不使用`vue`。`fastclick`也是解决方案。

可以思考点击被延迟的起因, **因为我们需要双击放大！**

所以只要我们禁用了双击放大行为也是一种解决方案。通过`meta`标签来实现。

```html
<meta name="viewport" content="user-scalable=no">
<meta name="viewport" content="initial-scale=1,maximum-scale=1">
<meta name="viewport" content="width=device-width">
```

从上到小分别是

1. 禁用用户放大缩小行为
2. 视窗比例默认为`1`
3. 视窗宽度是设备宽度

以上情况发生在网站对移动端进行了适配。
