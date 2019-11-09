# 列表和生成内容
> 列表是li&生成内容是伪类元素以及 **计数器**

## li

* 可以主动设置`list-style-type`，以图片为`list-style`注意图片大小没有办法控制。

## 生成内容

### 伪类元素

指的是`before or after`

* 块元素生成元素可是 **块或者行内**
* 但是行内元素只能够生成 **行内**

**伪类元素`content`内容**

![content](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E5%86%85%E5%AE%B9/img/%E7%94%9F%E6%88%90%E5%86%85%E5%AE%B9.PNG)

注意可以设置普通`string`之外。其他可选值得注意：

* uri - `content: url()`，如果浏览器不支持就会忽略
* attr - 会获取生成它的元素的属性，比如`content: attr(href)`
* quotes - 这个感觉用处不大
* 计数器 - 很神奇的属性

### 伪类元素 - content计数器

**可以和list-style**结合使用

[Paper-403]()开始。`counter-reset or counter-increment or counter`三个属性。

前两个数声明(在第一次声明的时候)计数器(计数器的名字随意指定)，最后一个使用计数器。具体例子如下：

![counter](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E5%88%97%E8%A1%A8%E5%92%8C%E7%94%9F%E6%88%90%E5%86%85%E5%AE%B9/img/%E8%AE%A1%E6%95%B0%E5%99%A8.PNG)

* `conuter`接受两个参数，第一个为声明的计数器。后面参数可以不写，如果不写就从1开始计数。**可以传递list-style**然后根据`list-style`开始计数。

* `counter-reset` - 表示当前计数器在该元素中不使用(或者为空)

* `counter-increment` - 一般旨在元素递增该计数器