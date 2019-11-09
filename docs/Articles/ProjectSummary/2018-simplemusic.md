# simple-music
> 待写, 大概就是

## 技术

* 骨架屏幕
* better-srcoll&fastclick
* v-touch
* video-js
* img-previewer
* 导航栏
* 什么时候需要子视图组件
* 回到上一步

## 重构

发现几个问题。**主要和性能有关的优化点**

1. `better-scroll`监听`scroll`可能对性能消耗太大了。

2. `fastclick`是否有必要？

3. 查看图片的`img-previewer`应该是全局的。而不是在绑定在每个动态卡片上。

4. 一些按钮点击才会出现组件，应该是懒加载模式的。

5. 以及一些组件写的实在是不合理
    > 比如说按钮组件居然需要字按钮告诉父类是否点击的状态

6. 文件目录结构也很有问题，`pages`居然和`components`混在一起，`container`也和`components`混在一起。

## Processing

* [ ] - 目前在重写一些写的实在是不好的组件

### Button

* [ ] - 减少Button的组件的数量
* [ ] - 重构其回调函数的方式
