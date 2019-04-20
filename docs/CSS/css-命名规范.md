# CSS - 命名规范
> 需要找到适合自己的

[[toc]]

1. 首先，参考中的命名规范是可以的也是值得借鉴的。

    至少告诉我们通用的`classname`应该命名为什么。

    以及那些`classname`一定是没有含义的。例如`wrap`。`wrap`之后的`classname`才可以被命名为组件名。

2. 和`BEM`是不冲突的，我们需要解决的是如何更好的利用`BEM`。

    关键在于语义化。也就是任何命名是需要有意义的。

    **但是问题就在于！**

    有的时候`classname`是需要复用的。以`stylus`为例子，可以是通过`mixin`或者`extend`两种方式进行复用。前者有点像是在`classname`内部使用函数，后者则是继承某个`classname`。

    往往期望`extend classname`是不具有业务属性的，也就是不会被命名类似为`original_post etc`。而是应该为`table_overhidden`。

    所以可以做一点约束。也就是：

    **如果是需要被复用的，就写作是`mixin`。而任何`classname`都应该是业务的。** 这部分可以结合[stylus-如何继承classname](/CSS/stylus-继承父类className.html)

3. 命名需要短

    但是有的时候很很烦的是。模块化是没有办法绕过去。（意味着我们可能是会有很长的`classname`前缀。）但是这一点也是有必要的。

    > **但是** 更加期望的是在`post.tsx`文件下的组件。其使用的`classname`自动被加上`post`（也就是文件名前缀）。指的是你不需要在`.styl`文件中这样 **手动** 加上前缀命名。同时也不需要`.tsx`文件中使用很长的前缀的`classname`。这一点`umi`做到了。

    或者可以参考[css-modules-add-filename-prefix](https://css-tricks.com/css-modules-part-3-react/)为模块自动加上`.css|.styl`文件名的前缀。

    这样你就可以省去在`.css|.styl`和`.tsx`文件中自己加上前缀的工作了。

## Refs

* [命名规范参考1](https://guide.aotu.io/docs/name/classname.html)
* [命名规范参考2](https://jiandanxinli.github.io/2016-08-11.html)
