# 使用Github托管图片
> 将Github作为博客图床

## 序

试过用阿里云的OSS作为图床。其实并不难，只要注册阿里云，然后开启阿里云OSS服务，然后按照官方教程来就可以了。就算找不到官方教程，里面那些按钮随便点点，也能摸清楚一点门路。

`Github`和阿里云此类相比，最大优势就是免费了。而且只要`Github`不抽风，加载速度还是可以的。

## 正文

博客或网页中一般都含有图片。我们将这些图片随着工程一起上传到`Github`。和工程文件一样，这些图片都是可以在`Github`项目页上找到的。例如该博客图片[存放地址](https://github.com/JiangWeixian/HTMLlearning/tree/master/README)。

以下图为例

![图片查看实例](https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/articles/Github-%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%BB%BA%E7%AB%8B%E8%AF%B4%E6%98%8E/img/build-website-1stpater-homepage.png)

其地址为`https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/articles/Github-%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%BB%BA%E7%AB%8B%E8%AF%B4%E6%98%8E/img/build-website-1stpater-homepage.png`

在[存放地址](https://github.com/JiangWeixian/HTMLlearning/tree/master/README)点击任意图像地址，然后在新标签页中的图片右键新标签页打开。就可以看到类似上图以`raw.githubusercontent.com`为前缀的地址。大胆的引用到网页中吧。

## 后续

至此，简单博客搭建都已经完成。和`HEXO`此类博客框架相比，自己使用`VUE`构建博客，缺点在于：

* 每次更改博客内容，都需要从头开始`build`，然后`push`此类步骤。

但是页面整体风格，完全都在你的掌控之中，也属于乘机学习`VUE`的方式。相信我...你一定会遇到更多的坑。
