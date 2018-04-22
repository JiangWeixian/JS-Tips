# position和margin

## 正文

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