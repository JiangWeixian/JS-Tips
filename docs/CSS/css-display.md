# Display
> 非常短，记录关于Display一些细节

## 常用数值

能够知道的`Display`的数值，也经常用的：

* block、inline-block、inline、none
* inherit - 继承父级
* flex - flexbox布局

不太经常用的

* table相关，包括里面的行列，单个单元格
* list-item，像`li`一样表现样式。

## Display:none & visiblity: hidden

> 区别和共同

**共同点**

* 如果一个元素设置两个属性任何一个：页面上都会看不见

**不同点**

* `display:none`意味着元素从页面中不见，不占有空间。`visiblity: hidden`从页面不见，但是还是占有空间
* 对于设置了`display:none`的父类元素，子类是无论怎么设置都会出现的(即使是`float or absoulte`)。而`visiblity: hidden`的父类元素，子类可以通过`visiblity: visiable`出现。

见[css-displaynone-test.html](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/CSS/HTML/css-displaynone-test.html)