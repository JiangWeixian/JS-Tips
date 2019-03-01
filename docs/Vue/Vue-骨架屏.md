# 骨架屏
> skeleton

## 为什么要有骨架屏？

对于这个问题，涉及到SSR和CSR，请看[这篇文章](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Vue/Vue-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93SSR%26%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%B8%B2%E6%9F%93CSR.md)就知道为什么我们需要骨架屏。

## 骨架屏实现

试试看[这文章教程](https://xiaoiver.github.io/coding/2017/07/30/%E4%B8%BAvue%E9%A1%B9%E7%9B%AE%E6%B7%BB%E5%8A%A0%E9%AA%A8%E6%9E%B6%E5%B1%8F.html)

如果按照这篇教程来的话，我是没有成功的...不过可以仔细研究它的思路，如何不用插件基础上实现，首先分析他的思路：

1. 项目主页组件是一套，`skeleton`有事另外一套。两者对应，也就是如果在实际项目中有`page`，那么对应的在`skeleton`中就有`skeleton-page`。
2. 什么时候加载`skelton`？在上面文章的有一个[vue-cli-skeleton-demo](https://github.com/xiaoiver/multi-skeleton-demo)。查看文章中在[vue-cli-skeleton-demo](https://github.com/xiaoiver/multi-skeleton-demo)的对应文件，我们可以发现，当我们进入`page`，同样也就相当于进入了`skeleton-page`。因为两者配置了相同的路由。
3. 什么时候由`skeleton`过渡到`page`。直观的感觉就是，当数据加载完毕之后由`skeleton`到`page`。就我的阅读理解来看，两者过渡并没有涉及，路由过渡！所以应该就是`v-if`这种关系。

分析之后，如何改进我们的项目！？很简单...我的思路是給页面子组件设置过渡组件（当然也可以直接給页面，主要看你项目页面结构。对我来说，前一种方式比较适合我）

1. 假设我有`tweets-card`组件，同时准备一个`loading-tweets-card`组件（我是准备了两个`.vue`文件）
2. 当我进入`page`，在`created`阶段获取数据，这时候处于`loading`状态，显示`loading-tweets-card`，等到数据加载完毕，取消`loading`状态。

    ```HTML
    <tweets-card v-if="!isLoading"></tweets-card>
    <loding-tweets-card v-if="!isLoading"></loading-tweets-card>
    ```

    `isLoading`这个数值在数据获取成功后改变。这样我们就可以控制骨架到真实页面之间转换。

至于更多的玩法，比如加上`transition`效果，一定难不倒你！
