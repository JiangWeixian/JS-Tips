# HTTP - 图片性能优化
> 和HTTP有关，不止是HTTP优化

## 图片下载阶段

1. 如果是`image`标签，处于`domcontentload`和`load`之间，并不会干扰页面渲染出现
2. 如果是来自`css`文件，处于`domcontentload`和`load`之间，并不会干扰页面渲染出现。

以上两点见[Browser-页面渲染原理]()

如果`image`标签`src`是`datauri`（指的是那些 **经过编码** 的图像），就要跟随`html`共同下载，同样如果来自`css`文件的`image`是`datauri`的话，跟随`css`共同下载，延长了两个下载时间，导致渲染变慢。见[HTML-datauri]()

## 性能优化思路

1. 合并HTTP请求
  * 图片和`HTML OR CSS`一起下载 - 将`image-src`变为`datauri`作为`image-src`或者`background-url`。关于这一点的优势和危害见[HTML-datauri]()
  * 雪碧图/精灵图(其实是一个东西) - `CSS`中使用，可能内含有很多图片地址(都是需要使用的)，如果将这些图片地址合并为同一个地址，就可以减少`HTTP`请求。
2. 压缩 - 图片压缩([信源编码](https://zh.wikipedia.org/wiki/%E4%BF%A1%E6%BA%90%E7%BC%96%E7%A0%81%E5%AE%9A%E7%90%86)的知识，所以可以无损或者有损)，使用新的图片格式也是属于压缩一部分

(第三点是响应话的做法，与`HTTP`之类的优化无关)
3. 合理利用 - 指的是移动端适配。差一点的屏幕不需要那么好的分辨率图片。
  * img - `srcsets or sizes`
  * `picture with source` - 比上面那个更好理解

(优化体验的)
4. 懒加载/预加载

**一些比较少见的**

1. 图片地址预解析。
2. 使用`svg`或者字体来替换部分图片
3. `img src`不要设置为空，因为这样会导致额外的http请求(经过某些算法转换为相对路径什么的，这样的做法是标准之一)

## img - srcset&size

> 来自[@张鑫旭](https://www.zhangxinxu.com/wordpress/2014/10/responsive-images-srcset-size-w-descriptor/) / 做做笔记免得忘记了

**`srcset`单独使用时...**

`srcset`以`1x or 2x or 3x`的时候，只根据`deviceradio`选择。

**主要是sizes&srcset组合使用的时候比较令我疑惑...**

`sizes`定义的是`img`这个标签大小，例如文中`(max-width: 360px) 340px, 128px`为屏幕宽度大于`360px`时候，`img`标签宽度为`128px`，小于就为`340px`

(主要是要理解这个`w`)
`srcset`此时无法独立使用，**要结合deviceradio来看**，即当`size`选择之后，`img`标签为`128px`的时候，此时假设`deviceradio=2`。那么就选择`256w`，等于1就是`128w`。

> 若256w就在加载`srcset: a.jpg 256w;`中此时`a.jpg`图片。

## Q&A

* **Q&A1 -** 如果`css`文件含有多个`url`下载，在`domcontentload`和`load`之间是全部下载。**还是用到那些选择器中的`url`才会继续下载？**

在[图片加载测试.html]()中发现，如果没有使用`bg`这个选择器，是不会下载该图片的。

这一点对于[性能优化思路]()性能优化思路第三点也是成立的，并不会下载不满足条件的图片。

## 链接

* [图片性能优化](https://juejin.im/post/59a7725b6fb9a02497170459)
* [例子补充](https://www.jianshu.com/p/55e48032b30e)