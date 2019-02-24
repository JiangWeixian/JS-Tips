# 多边形
> 使用css画出不规则多边形

<!-- TOC -->

- [多边形](#多边形)
  - [三角形](#三角形)
  - [梯形](#梯形)
  - [线条](#线条)

<!-- /TOC -->

## 三角形

* **关键在于`border`以及`width&height`**
* 通过`border`来控制三角形形状
* 三角形`width&height`是设置为**0**

例如想要设置**底边在下的三角形**

```css
#demo {
    width: 0;
    height: 0;
    /* 三角形底边为20px */
    border-width: 20px; 
    border-style: solid;
    /* 除了底边之外其余设置为透明 */
    border-color: transparent transparent red transparent;
}
```

[链接](https://www.zhangxinxu.com/wordpress/2010/05/css-border%E4%B8%89%E8%A7%92%E3%80%81%E5%9C%86%E8%A7%92%E5%9B%BE%E5%BD%A2%E7%94%9F%E6%88%90%E6%8A%80%E6%9C%AF%E7%AE%80%E4%BB%8B/)

## 梯形

在**三角形基础上实现**

三角形的宽是0，而梯形只要视情况设置**元素宽即可**

## 线条

因为移动端`1px`的线条是有问题的，所以可以通过`height=1px`来模拟。