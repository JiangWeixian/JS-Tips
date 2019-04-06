# Redux最佳实践 - reselect
> 目前来说`rematch`是`redux`中体验做的不错的。`reselect`是`rematch`其中作为类似`vuex-getter`的存在。

因为`redux`本身并没有集成`reselect(getter)`的作用。

而`reselect`原理也就是通过缓存实现。比较`params`有没有变化，缓存上次计算结果等。避免重复的计算。
