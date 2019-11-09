# 单位
> 还是只会记录不知道的

## Web安全颜色

安全指的是避免抖动。

* 如果是`RBG` - 那么就是`RGB(20%,..)`百分比数值是`20%`的倍数，或者是非百分比`51`的倍数。
* 如果是16进制 - 就应该是`00 33 66 99 CC FF`的组合

## URL

原文如下：

![css-url](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E5%8D%95%E4%BD%8D/img/cssurl.PNG)

指的是`@import url(..)`其中`..`使用相对路径的情况下：

* 假设`@import url(xx/yy.css)`在`basic.css`文件中，而`basic.css`文件在`styles`文件夹中，那么`..`就应该在`styles/xx/yy.css`