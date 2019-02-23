# link&@import
> 加载方式

## 前置知识 - 两者作用

两个都是加载`css`样式表的。

## 区别

1. `link`定义的标签，没有兼容性问题。而`@import`是`css`内部实现的，有兼容性问题。
2. 加载延迟问题(**具体可见链接中测试**)，`@import`加载是延迟的
  * 如果写在某个`css`文件内部，会等待文件下载完毕，再去加载`import`
  * 总结来说就是等待`link`加载完毕之后。
> 差别4：使用dom控制样式时的差别。当使用javascript控制dom去改变样式的时候，只能使用link标签，因为@import不是dom可以控制的。

最后一点不是很理解，难道是`JavaScript`添加`link`标签这种改变`dom`元素的方式吗？


## 链接

* [测试加载顺序](https://github.com/SamHwang1990/blog/issues/9)
* [分析不同点](http://www.daqianduan.com/2417.html)
* [@import的几种方式]()