# CSS和文档

## link标签属性

* rel - relationship，可以设置为`stylesheet`或者`alrternate stylesheet`。后者含义为可选样式表，也就是用于可以通过浏览器控制，但是 **我没有找到chrome找到这个控制按钮。**[这里有一个例子](https://css-tricks.com/examples/AlternateStyleSheets/)
* media - 控制样式表是表现在哪个媒体设备上
* title - 设置title会让样式表变为当前设备的首要选择。可以给`print handphone`等设置同一个`title`将他们编组。**编组之后，`alrternate stylesheet`选择也是一组一组的切换**

## @import

`@import url()`

有兼容性问题，可以在`.css`或者`style`样式表中使用。