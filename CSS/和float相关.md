# float

### float本身

本身一定是会脱离文档流的。重点在于如何清除前后元素的样式。

```css
.clearfix:after,
.clearfix:before{
    content: "";
    display: table;
}
.clearfix:after{
    clear: both!important;
}
```

如果没有记错的话，就是对`float`元素设置`clearfix`就可以了。

### 和float表现类似的

* display: flex
* `display: inline-block`这个可以实现类似`flaot: left`之类的。不过元素和元素之间的换行符号会引起`bugs`。可以通过设置父类`font-size: 0px`然后分别设置子类元素的字体大小。或者手动取消元素和元素之间的换行符。