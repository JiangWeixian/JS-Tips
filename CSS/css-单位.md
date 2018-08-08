# CSS - 单位
> 介绍一些单位特点；以及其中一些坑，坑也主要出现在那些响应式的元素上。

## **百分比 - `%`**

> 主要是相对于什么

* `margin, padding, left, right, text-indent, width, max-width, min-width` - 相对于父类元素宽度。一些水平线上的属性百分比的确和宽度绑定。
  * **特别是`margin padding`，无论是`left right or top bottom`** 都是相对于父类元素宽度。
* `top, bottom, height, max-height, min-height` - `height`百分比相对于父类元素高度问题不大
  * **特别是`top bottom`** 百分比是相对于父类元素高度，**这一点是和`margin padding`是不同的。**

**一些比较少见的**

* `line-height` - 百分比相对于`字体大小 font-size`
* `vertical-align` - 百分比是相对于`行高 line-height`

### **百分比引发的思考**

**响应式布局**

元素单位是百分比的话，可以进行响应式布局的设计。

例如 **宽度** 跟着浏览器宽度变化(这里特意提到宽度是因为，高度本身在浏览器中是一个变化的数值，内容多了，高度自然也就变多了)

**百分比无法做到什么？**

在[CSS-flexible.js移动端适配]()中提到，如果想要设置一个`w = h`的元素是没有办法做到的。因为父类元素高度变化，子类元素的百分比高度一样也在变化。**可以通过`rem`进行实现。**

## `rem`

> 加上`meta-scale`共同使用是实现`flexible`布局关键

相对于根节点`html-fontsize`设置的。假设`html-fontsize = 75px`，那么任意位置元素设置的`10rem = 75px`。

## `em`

> 不同于`rem`根据`html-fontsize`，此单位是根据父类元素`font-size`。

**有几个小坑**

> 假设父类元素是`parent`，子类元素是`child`

1. 那么子类元素在自身`font-size`使用`yy em`，其会乘以`xx px = yy em * parent-fontsize`
2. 如果子类元素在自身非`font-size`上使用`yy em`，其会乘以`xx px = yy em * child-fontsize`
    > 如果`child-fontsize`是`em`单位，其实没关系，因为`child-fontsize`可以 **根据第1条规则** 进而转换为`px`。

## 参考链接

* [参考链接](https://www.w3ctech.com/topic/128)