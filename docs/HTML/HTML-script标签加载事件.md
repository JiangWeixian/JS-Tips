# script加载过程

## 使用指南

很多元素都有`onload onerror`事件，不过这些加载函数都是 **回调函数，只会在触发了`load or error`事件的时候才会有效。**

就像是创建的`script`标签，设置了`.src`之后才会触发`onload`事件。

使用方法为`script.onload = function () {}`。

有些浏览器不支持`onload`，但是支持`onreadyStateChange = function () {}`就像是`xhr`一样。具体可看下面链接。

如果使用`onreadyStateChange`那么就会有`state`状态的实时变化。

## 有什么用

有些`.src`是有先后顺序的。比如说我们依赖`jq`实现了一个脚本文件。必须在`jq`加载之后才能运行，此时以上的函数就能够起到作用了。

## 链接

* [script加载事件](http://dafeizizhu.github.io/2013/11/25/onload-vs-onreadystatechange/)