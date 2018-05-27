# HTML5&CSS3新特性

### 目前有用到的

#### html部分

* 添加了很多语义化的标签`nav section article`之类的。从结构上来说更加清晰。更像是`markdown`了
* 表单输入`input`标签指定类型
* `div`设定`content`(名字不太记得了)，可以让`div`元素变为富文本框。
* `video&audio`(这居然也是)，`video`还可以设置属性加上进度条之类的。
* `contenteditable` - 可以让所有元素都变为富文本框

#### css部分

* flex布局，grid布局
* 添加了很多选择器

### 没有使用到的或者不太清楚的

#### HTML

相当多，记录几个比较有意思的。

[标签连接](https://segmentfault.com/a/1190000010504564)

* `<progress>`设置进度条
* `<del>`类如`markdown`删除划线，`<ins>`下划线
* `<figure>`图片，配置`<figcaption>`配合使用类如卡片
* `time`显示时间，可以在行内使用`datetime`制定显示格式

*等等*

**行内属性**

```html
<div id="food" data-drink="coffee" data-food="sushi" data-meal="lunch">¥20.12</div>
<!-- 可以通过div.dataset.drink获取数据 -->
```

**表单**

* 设定`autocomplete=on`可以在下一次输入的时候，自动提示上一次输入内容。

**无障碍**

即`aria-*`如此结构的标签。设置以`aria-*`前缀的标签，并不会出现具体的功能，如`aria-multiline=true`并不会让文本框变为多行，而是声明了一种行为，让别人知道这是一个多行的元素，如同这个[链接](https://stackoverflow.com/questions/24865098/aria-multiline-purpose?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)所说。

### css

[参考总结连接](https://segmentfault.com/a/1190000010780991)

链接中有很多已经在用，却不知道是属于`css3`部分的。


