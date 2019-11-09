# chrome浏览器移动端调试
> 土豪版本

## 前言

作为前端开发者，移动端调试少不了。

`google`是个良心企业，调试工具非常好用。无奈，大家都懂得。在看这一片之前，**要确保能够科学上网**。

教程在`liunx`平台实现。

## 正文

浏览器除了`F12`进入调试界面。点击移动调试按钮选择移动设备之外，如下图：

![移动调试界面](https://raw.githubusercontent.com/JiangWeixian/articles/master/I%26O/img/%E7%A7%BB%E5%8A%A8%E8%B0%83%E8%AF%95F12.png)

这个能够满足大部分要求。不过和真机还是有区别的，因此我们需要进入真实调试界面。也就是一部手机！

没有看错，我们的确需要一部手机（还有数据线）。

### Step 1. adb devices

此外我们还需要Android工具`adb`，在`linux`平台安装也就一条命令的事情。（具体不太记得了，大家百度一下吧...）

连接上手机，手机端开启`USB调试`。在控制台输入：

```bash
adb devices

# 如果出现没有权限，输入
adb kill-server
sudo adb start-server

# 出现一下就是成功了
List of devices attached 
HT69K0207609	device
```

我基本上每次连手机，都要这么来一遍。

**不靠谱的来了，我电脑是安装了andriod studio。如果大家还是出错了，就下一遍andriod studio(没有科学上网玩不了这个)**

### Step 2. chrome

以上工作已经完成了大半。其次还需要在手机上安装`chrome`浏览器。

浏览器地址输入：`chrome://inspect/#devices`如下图所示：

![chrome-inspect](https://raw.githubusercontent.com/JiangWeixian/articles/master/I%26O/img/chrome-inspect.png)

* 我是在webstorm上写的代码，所以端口基本就是8080。所以在portforwad那一栏，写上

![portforward](https://raw.githubusercontent.com/JiangWeixian/articles/master/I%26O/img/portforwd.png)

然后下面输入栏目写下地址，如果是开发页面就是`localhost:8080`

**要使用这个功能，第一次的时候需要下载一些东西。如果运气好，不翻墙也可以。翻墙了也要一点时间，希望大家能够等待。**