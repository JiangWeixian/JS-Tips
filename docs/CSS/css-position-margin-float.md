# position && margin && float
> 互相作用情况

<!-- TOC -->

- [position && margin && float](#position--margin--float)
  - [1.1. position && margin](#11-position--margin)
    - [1.1.1. position](#111-position)
  - [1.2. position && float](#12-position--float)
  - [1.3. margin & float](#13-margin--float)

<!-- /TOC -->

## 1.1. position && margin

如果一个元素同时定义了`position`和`margin`在不同`position`情况下会如何计算数值。

```CSS
{
    left: -20px
    margin: 0px 20px
}
```

* `static` - 只跟随`margin`
* `relative` - 距离左边`-20px+20px=0px`
* `absoulte` - 同上
* `fixed` - 同上
* `sticky` - 新增`position`，支持比较少。分滚动以及未滚动，只在滚动时候生效`left`，不生效`margin`等。不滚动`only margin`

### 1.1.1. position

其中如果`position`如果是`absolute`的话。在[CSS-定位和浮动](https://github.com/JiangWeixian/JS-Books/tree/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E6%B5%AE%E5%8A%A8)中提到，如果

```CSS
.abs--pos {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;
}
```

通过设置4个定位来限制元素视图，那么该元素计算规则应该为`left+margin-left+width+margin-right+right`来计算是否等于父类(这里没有考虑`border padding`)

**假设`right: 200px`** 并不会特意去考虑`margin`是相对什么定位。而是通过上诉计算规则来进行设置。例子见[css-position&margin&float.html-限制视图](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/HTML/css-position%26margin%26float.html)

## 1.2. position && float

`float`并不会生效。见[css-position&margin&float.html-测试position&float相互作用](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/HTML/css-position%26margin%26float.html)

## 1.3. margin & float

布局的使用，`margin`会对布局产生影响。