# Reflow&Repaint
> 浏览器渲染

## 前置知识 - 浏览器渲染原理

见[Browser-浏览器渲染原理](https://github.com/JiangWeixian/JS-Tips/blob/master/Broswer/Browser-%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86.md)

## 什么是Reflow&Repaint

`Reflow&Repaint`都是浏览器渲染的触发，只是两者的引发的原因和代价不同。

`reflow`的性能代价是要高于`repaint`的，所以在代码编写过程中避免`reflow or repaint`，无法避免的时候，尽量使用`repaint`。

## 引发原因

`reflow`意味着要重新绘制`dom tree`，`repaint`只是屏幕部分改变重画。

所以说`reflow`和`dom tree`有关，任何和引起节点`tree`有关的操作，特别的概念元素`textcontent`也属于`reflow`。因为文本也属于节点的一种。

* `reflow`一般由屏幕中元素尺寸改变导致需要重新布局。可能有引起的原因有(但是原因之间仍有影响因子大小)：
    * 改变窗口大小
    * 改变文字大小
    * 内容的改变，如用户在输入框中敲字
    * 激活伪类，如:hover
    * 脚本操作DOM
    * 计算offsetWidth和offsetHeight
    * 设置style属性
* `repaint` - 屏幕的一部分要重画，比如某个CSS的背景色变了。但是元素的几何尺寸没有变。    

## 指导意见

既然`repaint`好于`reflow`，就应该能够使用`repaint`的时候，就使用`repaint`。因此

* 不要通过父级来改变子元素样式，最好直接改变子元素样式，改变子元素样式尽可能不要影响父元素和兄弟元素的大小和尺寸
* 使用`classname`切换样式而不是直接`style`属性 - 因为`classname`是批量改变，改变次数更少
* 动画层设置`fixed` - 这样就不会影响到其他元素

## 链接

* [1](https://blog.csdn.net/qq_29066959/article/details/50770366)

* [2 - reflow&repaint总结](https://www.cnblogs.com/zhutao/p/6551216.html)

* [3](http://imweb.io/topic/56841c864c44bcc56092e3fa)

* [4](https://www.jianshu.com/p/e305ace24ddf)

* [5](https://www.jianshu.com/p/a32b890c29b1)