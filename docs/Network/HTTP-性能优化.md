# HTTP - 性能优化
> 如何从网络层面优化一个网站

- [HTTP - 性能优化](#http---性能优化)
  - [HTML优化](#html优化)
  - [DNS优化](#dns优化)
  - [CSS优化](#css优化)
    - [加载优化](#加载优化)
    - [构建优化](#构建优化)
  - [JS优化](#js优化)
  - [参考链接](#参考链接)

> **⚠️ WARNING**  
性能优化和工程化其实算是双生面。在某种程度上，过度追求性能优化会损害工程性（即不利于优化）。这一点可以从《代码大全》可以得到解答。所以并不需要过度追求性能优化，而应该将工程，可维护性作为第一的要求。然后才是性能优化。

## HTML优化

这点网络层面优化手段不多，从`HTML`的标签(指的是`div p etc...`)我们无法优化，**当然如果能够使用最少元素构建是最好的，避免较多的标签嵌套**。能够想到相关的应该就是`CDN`方面的。

我们只能够从`DNS&CSS&JS`角度触发。

## DNS优化

见[文章1](http://bubkoo.com/2015/11/19/prefetching-preloading-prebrowsing/)or[文章2](https://github.com/GeoffZhu/geoffzhu.github.io/issues/2) - 里面对图片等资源的预加载。

## CSS优化

页面中的`CSS`从开始到渲染涉及到三个过程：

1. 加载
2. 构建`CSS-DOM-TREE`
3. 渲染

其中前两个是可以优化的。

### 加载优化

合并`CSS`文件可以减少`HTTP`请求，可以优化。**但是假设我们有两个个样式文件，其中一个全局(无论什么条件下都会起作用)，其余一个是`media query`作用在屏幕尺寸改变的时候**

明显后面那个是不需要再页面加载的时候就加载进来的。可以比第一个稍微延迟一点。因此我们可以通过

```HTML
<link href="index.css" rel="stylesheet">
<link href="print.css" rel="stylesheet" media="print">
<link href="other.css" rel="stylesheet" media="(min-width: 30em) and (orientation: landscape)">
```

后面两个添加了`meida`，所以会延迟加载，也就是当加载好`index.css`之后，就会开始进行`HTML-DOM-TREE`构建。而后面两个会同步加载，但是不会影响`CSS-DOM-TREE&HTML-DOM-TREE`构建。至少再页面开始的时候是这样的。

另外，学会合并`CSS`文件

- 按作用页面分类合并`CSS`文件
- 独立第三方的`CSS`框架的文件
  
> **💡 NOTE**  
在现代工程中。分割第三方`CSS`框架是可控的，就像是导入`tailwindcss`的主要文件。但是倒入项目组件的样式文件，基本上都是由`webpack`构建工具控制的。

### 构建优化
> 这一点和`HTTP`无关

1. 给需要标签添加`class`是优化重要步骤 - 此时要涉及到`CSS-DOM-TREE`的构建规则，如果看过`JQ`实现其选择器的源码的话，就会发现它 **并不是从左到右边的选择**，即当`.class a`，并不是找到`.class`元素，然后再再其中找到`a`元素。

    而是遵循从右到左原则，先找到`a`元素然后再由上找到`.class`元素。浏览器也是这样的规则。

    所以页面众多`a`标签，却只有`.class`元素。先是找到`a`标签，由于`a`标签过多，这一步很影响，所以给需要的`a`标签添加`class`是优化重要步骤。
    
    这部分的[参考链接](https://zhuanlan.zhihu.com/p/29418126)

2. `CSS-DOM-TREE`树结构优化 - 首先这是个书结构，所以层级不要太深，树结构不要太复杂能够优化解析。
    * 选择器不要太多，比如说从`html`标签开始选择一个`a`标签
    * 不要使用比较短的`class-name`

[参考-编写高效的CSS](https://www.oschina.net/translate/writing-efficient-css-selectors) - 不过也要从适合自己角度触发。

## JS优化

一般来说JS在下载和运行过程中都会干扰到HTML解析。所以一般会放在最后。

![script干扰](/docs/Network/img/script.png)

和`CSS`一样，页面中的`JS`从开始到渲染涉及到三个过程：

1. 加载
2. 运行
3. 渲染
   
对于加载部分性能优化，完整部分见[Browser-浏览器渲染过程](/docs/Broswer/Browser-%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86.md)

对于现代浏览器来说

- `defer async`应该放在页面头部

## 参考链接

* [HTTP-OSI建立链接全过程](https://juejin.im/entry/58ce00c5ac502e00589b4bde)
* [HTTP-建立链接过程更为详细](https://juejin.im/post/5872309261ff4b005c4580d4)