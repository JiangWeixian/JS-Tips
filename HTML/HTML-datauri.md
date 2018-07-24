# 1. HTML - Data URI
> data-uri belong to uri

<!-- TOC -->

- [1. HTML - Data URI](#1-html---data-uri)
  - [1.1. 前置知识 - Data URI格式](#11-前置知识---data-uri格式)
  - [1.2. DataURI - image](#12-datauri---image)
  - [1.3. DataURI - script](#13-datauri---script)
  - [1.4. DataURI - css](#14-datauri---css)
  - [1.5. embed - DataURI](#15-embed---datauri)
  - [1.6. 链接](#16-链接)

<!-- /TOC -->

## 1.1. 前置知识 - Data URI格式

```JavaScript
data:[<mime type>][;charset=<charset>][;<encoding>],<encoded data>

1.  data ：协议名称；

2.  [<mime type>] ：可选项，数据类型（image/png、text/plain等）

3.  [;charset=<charset>] ：可选项，源文本的字符集编码方式

4.  [;<encoding>] ：数据编码方式（默认US-ASCII，BASE64两种）

5.  ,<encoded data> ：编码后的数据
```

例如`data:text/plain;charset=UTF-8;base64,5Lit5paH5a2X56ym`中

* `[<mime type>]` - 对应`text/plain`，一般都有
* `[;charset=<charset>]` - 对应`;charset=UTF-8`，这个可以没有
* `[;<encoding>]` - 对应`;base64`
* `,<encoded data>` - 对应`,5Lit5paH5a2X56ym`

支持类型如下：

![datatype](https://raw.githubusercontent.com/JiangWeixian/JS-Tips/master/HTML/img/datatype.PNG)

任何一段`datauri`数据复制到浏览器地址中，都可以通过浏览器解析。具体解析为什么数据，取决于`mime type`

## 1.2. DataURI - image

这个算是接触比较多而且比较好理解的。在`vue`中，通过插件可以将`image`变为`base64`格式然后作为`src`，或者是`css`文件中的`background: url`。显示结果和传统的没有什么区别。

**优势：** 以打包为目的，将图片变为`WebAPP`一部分。那么下载完`HTML`文件就相当于下载好了`IMAGE`。在[浏览器渲染流程](https://github.com/JiangWeixian/JS-Tips/blob/master/Broswer/Browser-%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86.md)中提到，如果是`css html js`的顺序，执行好`JS`文件，下一步才是`images`等资源下载。因此`datauri image`优势在于减少了`HTTP`请求次数。

**缺陷：** 

浏览器是不会缓存`HTML`的，所以也就不会缓存`datauri image`。

另外也是优势的缺陷，由于`css`中，图片大小限制了`css`下载与解析，在[浏览器渲染流程](https://github.com/JiangWeixian/JS-Tips/blob/master/Broswer/Browser-%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86.md)中提到，网页 **初始**呈现页面与`cssdom and htmldom`两个都有关系，如果这`cssdom`现在太慢，`cssdom and htmldom`出现时间比较慢，那么白屏时间也会比较长。

**写在`image`的`datauri`中随着`html`一起下载(因为此时就是一段字符串)，自然也会相对耗时。增加白屏**(如果`image-src`是传统的路径的话，遵循图片下载发生在`domcontentload`和`load`之间，此时可能或许页面已经出现了)

## 1.3. DataURI - script

> 用于`script-src`，估计其他`datauri`可以用于对应的标签。

具体见[text/plain-datauri实例](https://stackoverflow.com/questions/34845250/loading-script-content-from-data-url) / 很容易引起`xss`攻击

## 1.4. DataURI - css

> 和 [DataURI - script]()一样，适用于`link-href`

## 1.5. embed - DataURI

> 在[text/plain-datauri实例](https://stackoverflow.com/questions/34845250/loading-script-content-from-data-url)提到可以适用`embed`标签。

在[embed.html](https://github.com/JiangWeixian/JS-Tips/blob/master/HTML/HTML/embed.html)测试中发现，可以插入以上任意类型数据。

## 1.6. 链接

> 实例为主

* [url&uri以及基本格式介绍](https://www.jianshu.com/p/ea49397fcd13)
* [image-datauri实例](https://blog.csdn.net/kerwin612/article/details/14445511)
* [text/plain-datauri实例](https://www.coldawn.com/how-to-insert-chinese-encoded-by-base64-data-urls-into-html/)
* [text/plain-datauri实例](https://stackoverflow.com/questions/34845250/loading-script-content-from-data-url)
* [datauri-image的缺点](https://juejin.im/entry/58ca2b9dac502e0058868693)

