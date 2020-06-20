# 清除浮动
> float

## 前言

`float`显然是用来布局的，就目前来说，在大环境的发展下。`flex & grid`布局支持的浏览器更多！

写这篇文章的时候**2018-05-29**，在`can i use`上`flex`布局支持情况是优于`grid`布局的。

那么在此之前`float`布局。算是复习一下吧，已经好久没有用到了..

## float&clear

`float`会影响上下文环境，这也是它为什么不受待见的原因。

* 会脱离文档流。
* 也会让父元素失去宽高（如果它没有设置的话）

如果我们必须使用`float`布局，如何减弱的他的影响。那当然是清除`float`，清除指的是清除它带来的影响，而不是真的清除浮动。

1. 设置父类元素`overflow: hidden`
2. (这个是我比较常用的方式)设置父类元素`clear`，即
    ```css
    parent:after {
        content: '';
        clear: both!important;
        display: table;
        height: 0;
        visibility: hidden;
    }
    ```
    其他利用`clear`的我不太推荐，因为会产生空元素。
3. 当然你也可以设置父类元素宽高，来造成没有被浮动影响的假象...

### 和float表现类似的

* display: flex
* `display: inline-block`这个可以实现类似`flaot: left`之类的。不过元素和元素之间的换行符号会引起`bugs`。可以通过设置父类`font-size: 0px`然后分别设置子类元素的字体大小。或者手动取消元素和元素之间的换行符。

## 链接

[清除浮动例子](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/demos/clearfloat.html)