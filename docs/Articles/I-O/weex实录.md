# Weex
> 一句话介绍Weex：原生版本的Vue，同类比React-native

## 前言 - Weex能干吗？

还是一句话，我们用Vue写前端。然后Weex打包为App（Android，IOS）。类似鼎鼎大名的`cordova`，因为是`vue`作者推荐的`weex`，想来支持比较好。所以学着使用一下。

知乎上看到，阿里开源项目有风险。且行且珍惜。

以及不作死从头开始配置了，安卓新手，不要作死了。和`Google`相关，收录在[I&O]()

## 正文

没有MAC，所以以下都是以`Android`开发为例。Google就是世界主宰！

以及在linux平台下。

### Step 0. 从安装开始

安装`weexpack`和`weex-toolkit`，类别`vue`和`vue-cli`。

```bash
sudo npm install weexpack weex-toolkit
```

完成之后创建我们第一个应用(安卓)

```
weexpack create weex-example // 创建出现的选项类比vue-cli
weexpack platform add andriod
```

### Step 1. 从解决bugs继续

`npm run andriod`，可能出现的**error**

* `$ANDROID_HOME`没有配置
    ```bash
    sudo gedit ~/.bashrc //加上sdk安装路径，如果没有安装过。就去安装一遍andriod studio，然后找到sdk安装路径。这步骤省不掉。
    source ~/.bashrc //修改完成之后使得环境变量生效
    ```
    可通过`echo ANDROID_HOME`查看是否成功
* 没有`license`权限，可能是开发者权限对于Android而言。
    ```bash
    // 找到sdk安装路径
    cd tools/bin
    .sdkmanager --license //一路y
    ```

**最重要的ERROR，你要有一部安卓手机**。

* 可能出现一长串关于`weex error: watch enospc`，[stackoverflow答案](https://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc)。最高票那个答案。

然后`npm run android`。不出意外，手机上出现一个`weex app`。

以上是简单打包。

如何`debug`

## Step 2. 开发

* [文档地址](http://weex.apache.org/cn/references/components/image.html)
* [超级完美的网易严选demo地址](https://github.com/zwwill/yanxuan-weex-demo)

以[tf-mobile-vue]作为实例，将其转移至`weex`。

首先我需要知道这东西怎么调试，看官网的教程直接`npm start`。自动在浏览器窗口打开一个网页，如下：

![npm-start](https://raw.githubusercontent.com/JiangWeixian/articles/master/I%26O/img/weex-preview.png)

**本来想通过npm run dev**，可是不知道为什么无法打开网页。大家可以试一试`npm run dev&npm run server`

此时是`2018-05-17`，浏览器地址栏是以ip地址开头。并不是传统的`localhost+端口号`。这个和我查到的教程和官网都不一样。醉了。

需要解决问题:

* 不再打包发布`material-css`- 正如下面这个小结所说的，由于`weex`基本没有通过标签来进行`css`操作了，只能通过`classname`。因此要么自己写样式，或者使用支持`weex`的[ui框架](https://github.com/alibaba/weex-ui)。而且这个框架的样式既然要通过内联样式写在行内，不太灵活，所以打算不用css框架了。
* 屏幕适配如何解决的，查到的资料是根据屏幕比例换算。也就是说我们不需要进行其他的适配操作了。
* 使用本地图片不如直接使用网络图片
* 使用字体 - google字体通过i标签来替换icon，因为标签失效了。所以google icon也失去作用了。

**以及，非常重要**

大家还是下一个`weex playgroud app`，就是上图蓝色字体点进去。然后扫描二维码。原因在于，即使在浏览器看起来没什么问题。

不过真的是要在手机上的app，还是有很多差异的。

### 样式

* 预处理器好像有点问题，所以最好直接使用css样式，且不是所有的css样式都是支持的。
* 全屏 - `vw %`等单位都不能用，想要一个全屏的box。只能够通过
    ```css
    .fullscreen {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    ```
    来制定视窗宽高。
* Android不支持box-shadow    

### 字体

使用字体 - google字体通过i标签来替换icon，因为标签失效了。所以google icon也失去作用了。可以通过`iconfont`解决方案。

* 首先去iconfont注册账号，选择字体添加购物车。然后讲购物车内部字体添加到项目（指的是在iconfont网站上的项目）
* 在网站后台生成代码，如下图所示**注意我们还是只能够使用text**

![iconfont](https://github.com/JiangWeixian/articles/blob/master/I&O/img/iconfont.png?raw=true)

只有[官方的例子](https://github.com/apache/incubator-weex/blob/master/examples/vue/iconfont.vue)才会成功，其他会在不同平台上导致不同的渲染效果。

### Image

weex不是完全能够使用原生的`html`标签。比如`img`只能够使用`image`。

* 不能够通过`image`来进行css样式，必须指定类。除了这个之外文字是`text`，同样也要使用`class`。

### Native

这是最重要的一点，要是不能使用原生，就没有什么意义了。以下以调用`camera`举例。


对不起，我放弃了。bug太多，文档太少。


