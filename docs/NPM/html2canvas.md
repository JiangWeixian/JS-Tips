# HTML2CANVAS
> 将页面元素转化为图片

## 探索

可以通过内建相关`API`来进行`DOM`元素到图片转化（用的就是`canvas`相关方法），但是这样坑在哪？

1. 如果有图片需要解决跨域问题
2. 以及好像要通过行内样式来限制大小？（这一点不太清楚）

[ISSUE](https://github.com/JiangWeixian/JS-Tips/issues/3)

## 可靠的轮子

现在可以通过[html2canvas](https://github.com/niklasvh/html2canvas)这个第三方包，完美解决问题。可以在`react&vue`里面通过`ref`来获取`dom`元素。**基本上解决了里面相关所有的坑了，很好用的插件**