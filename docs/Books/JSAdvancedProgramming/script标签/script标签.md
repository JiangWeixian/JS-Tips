# SCRIPT
> script标签；注意defer和async

## 解释了`script`标签上的属性

`script`标签和`css`一样的会阻塞`html`解析。（如果写在头部，会下载`script and css`然后再去解析`dom`）。因此和书写位置有关。

* `defer or async` - [异步](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%90%8C%E6%AD%A5%E5%BC%82%E6%AD%A5.md)下载(这里异步说的是不会阻塞`html`解析)。两个还有小区别
  * `defer` - 解析`html`的时候，一起下载，同时`html`解析完毕之后，执行`js`
  * `async` - 解析`html`的时候，一起下载，下载完毕只有，执行`js`
* src - 这个就没有不要写了

其他属性用到都不大。

### tips

* 如果`script`带有`src`指向外部`js`脚本，且在`<script></script>`之间含有代码。**只会执行下载的`js`脚本。**
* `script`标签具有 **跨域属性**可以指向不同服务上面的文件。

## 文档类型

见[<!doctype html> 解释](https://github.com/JiangWeixian/JS-Tips/blob/master/HTML/HTML-DOCTYPE.md)

## noscript标签

**注意里面并不是包含js代码**，设计初衷是为了，当`JavaScript`不被支持的时候，显示`<noscript>`标签内容。**可以理解为一个dom标签，如<p></p>**

```html
<noscript>
  <p>说明</p>
</noscript>
```