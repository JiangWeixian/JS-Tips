# DOM事件
> 对ie总是要区别对待，默认讨论的是非IE

<!-- TOC -->

- [DOM事件](#dom事件)
  - [事件流](#事件流)
    - [`this`指向](#this指向)
    - [不同的事件](#不同的事件)
  - [事件对象](#事件对象)
    - [什么是默认事件](#什么是默认事件)
      - [取消冒泡和阻止默认事件](#取消冒泡和阻止默认事件)
      - [手动触发事件](#手动触发事件)
  - [事件类型](#事件类型)
    - [HTML5](#html5)
    - [性能](#性能)
  - [模拟事件](#模拟事件)

<!-- /TOC -->

## 事件流

**DOM2**

这里说的事件流是`DOM2`级事件流，事件触发顺序为 **捕获->触发->冒泡**。

具体实现可见[DOM事件定义]()

**DOM0**

就是通过`onclick`来实现的。

前者优势比较大，因为可以删除(和性能有关)，还可以在同一个事件上面绑定函数。

而后者只能实现一个。

如果在`document`绑定了`addEvent..`以及`onclick`，同时文档按钮`addEvent`

如果点击按钮，虽然也是点击在`document`上，但是`button`才是target。所以`document`的`dom2`是捕获阶段触发，`button`是触发阶段触发。

`document.onclick`是冒泡阶段。

**说明onclick**默认是冒泡的。

### `this`指向

在`ie`和它浏览器上，`this`指向不同

```JavaScript
// ie attachEvent
document.addEventLinster('click', function () {
  console.log(this)
})
// 非ie上是document
// ie上是windows
```

### 不同的事件

不同`event`可能具有不同属性，处理表现结果不一样之外。

在是否支持冒泡，是否支持捕获上有所不同。

## 事件对象

指的是`function (event) {}`中的`event`。而 **非IE浏览器的**`event`一般有以下属性：

![event属性](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH13-DOM%E4%BA%8B%E4%BB%B6/img/%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7.PNG)

所以可以通过判断`event`属性来判断事件是否支持冒泡。

* current or target - 区别在于，你可能点击的是`btn`。那么`target`就是`btn`，但是在传递到`btn`之前，可能被其他元素捕获了。那么此时就有`currenttarget`属性
* 通过查看`eventPhase`可以查看元素在哪个阶段触发了事件

而`IE`上的事件属性为:

![ie-event属性](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH13-DOM%E4%BA%8B%E4%BB%B6/img/ie%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7.PNG)

**QA**

1. 有的时候可以看见`ev = event || window.event(传递过来的)`

这是为了适配`ie`浏览器，因为`ie`事件是在`window`上的。

### 什么是默认事件

比如点击链接会跳转，在有表单`submit`的时候`enter`按键会触发提交，等等。这些都是默认事件。

可以通过绑定事件的时候 **阻止默认行为**。

#### 取消冒泡和阻止默认事件

* 在ie上可以通过`window.event.cancelBubble = true`阻止冒泡，`window.event.returnValue = false`
* 而非ie就是`stop..`和`pre..`

#### 手动触发事件

## 事件类型

这里详细说明了不同类型事件以及特性，比如`click mouse etc..`，判断事件是否支持可以通过以下方式：

![判断事件是否支持](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH13-DOM%E4%BA%8B%E4%BB%B6/img/%E5%88%A4%E6%96%AD%E4%BA%8B%E4%BB%B6%E6%98%AF%E5%90%A6%E6%94%AF%E6%8C%81.PNG)

这里判读是否支持`focus`事件，类似还有`mouse`等。

* UI事件 - 比如说`load resize scroll select etc`
  * load - 在页面一切都完毕之后加载，比如说`js css`等。还有一个`DOMContentLoaded`事件在页面`DOM`解析之后加载
  * unload - 离开页面的时候触发，一般用来清除内存
  * srcoll - 绑定在`windows`，但是是通过`document.documentElement.scrollTop || document.body.scrollTop`来监听这一变化的
* click - 其中`.screenX`和`clientX`区别在于一个是屏幕的，一个是浏览器的。
* 键盘事件 - 通过`keycode`来判断按下了哪个按钮
* 变化事件 - 可以监听dom变化


**键盘上有alt shift等比较特殊的按键**，如果我们想要实现组合，比如说`alt+右键`。在`mouse`事件中可以通过`event.altKey`来同时监听`alt`而不需要额外绑定键盘事件。

### HTML5

* contextmeun - 菜单通过右键触发，默认都是有的。我们可以阻止这个默认事件，然后自己定义个菜单显示。
* haschange - 监听`url`变化
* 以及一些 **移动设备**的事件，例如设备加速度计，和各种方向。
  * 还有一些触摸事件
  * 一些手势事件 - 也就是多个手指的触发的事件

### 性能

当我们删除节点的时候，没有删除节点上的事件，就有可能引起内存问题。

所以及时移除节点事件，`remove`或者`.onclick = null`

## 模拟事件

和发布订阅类似思想，我们可能想要自定义一个事件，可能和`dom`无关，需要自己手动触发的。

而这里提到的模拟事件，指的是 **自定义DOM事件，也就是原生支持的事件。**比如说自定义`click`事件。

这样的自定义方式对我们的意义不大，因为个人理解是针对浏览器厂商的。