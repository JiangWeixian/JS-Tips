# cygwin&oh-my-zsh
> (cygwin in window)&(oh-my-zsh in linux)

## cygwin

powershell和hyper此类的客户端都不好用。

### install

* [教程](https://www.jianshu.com/p/fac45920628d)

先记录安装，之后用到什么再更新。

### tips

* [让cygwin更好用的配置教程](http://oldratlee.com/post/2012-12-22/stunning-cygwin)

* 打开windows其他盘的文件夹 - `cd /cygdrive/c`打开c盘。
* 不区分大小写的自动补全：
    ```bash
    # in ~/.bashrc
    shopt -s nocaseglob
    # in ~/.inputrc
    set completion-ignore-case on
    ```

### cygwin+oh-my-zsh

在cygwin上面安装oh-my-zsh。

1. 打开cygwin终端，安装`apt-cyg`类似`apt-get`。一条命令`wget -source rawgit.com/transcode-open/apt-cyg/master/apt-cyg`+`install apt-cyg /bin`
2. 安装`oh-my-zsh` - `apt-cyg install zsh curl git`
3. `oh-my-zsh`在windows启动有问题，结合官网教程，在`.bashrc`加上`exec zsh`

插件安装方法和下述类似。

`cygwin`不支持分屏需要结合`tmux`来进行进一步操作。[doc地址](http://louiszhai.github.io/2017/09/30/tmux/#%E6%96%B0%E5%BB%BA%E4%BC%9A%E8%AF%9D)

1. 安装`tmux` - `apt-cyg install tmux`

**怎么分屏还没有搞清楚...**

## oh-my-zsh

`linux`上最好用的终端，从`bash`切换过来的。目前没有遇到冲突问题。

安装之后，不进行任何配置，你也能发现他给你带来的便利。

### install

安装教程见官网，一步步来没有遇到什么问题。

### tips

主要是主题和一些插件的使用安装。

* 主题 - 默认主题提供的信息太少（至少我想要的路径和时间没有）：
    * `ls ~/.oh-my-zsh/themes`查看主题
    * `sudo gedit ~/.zshrc`找到`ZSH_THEME`项，设置为`ys`。对应上一条`ls`结果中的`YS.zh-theme`

**插件**

一旦你安装了`oh-my-zsh`，大约有近百种插件都会被安装下来，可通过`ls ~/.oh-my-zsh/plugins`查看。启用他们的方式为，`sudo gedit ~/.zshrc`，在对应`plugins`条目：

``` bash
plugins = (
    git,// 默认就安装了的
    z,//自带，但需要自己启用的
)
```

`zsh`提供了很多很好用插件，但是作为新手可能不知道怎么安装它。[这篇博客](https://hufangyun.com/2017/zsh-plugin/)列出了几种可能的安装方式，未随着`oh-my-zsh`安装的插件，基本方式也可以得到确认，就是将插件安装到`~/.oh-my-zsh/custom/plugins`中，然后在`~/.zshrc`中以相同的方式启用他们。

推荐几种好用的插件：

1. `z` - 通过`cd`进入的条目都会被保留，例如`docments/web/a`，通过`z a`就有可能直接补充提示`a`文件夹。
2.  `zsh-autosuggestion` - 安装方法，博客里面有。会自动提示命令以及一切能够提示的东西。
3. `incr.sh` - `cd`命令的自动提示，效果见[地址](http://yijiebuyi.com/blog/36955b84c57e338dd8255070b80829bf.html)。[主页地址](http://mimosa-pudica.net/zsh-incremental.html)。最好将`source incr.sh(其路径加入.zshrc)`。不过感觉和上一个插件可能有功能重复，请谨慎使用。
4. `git-open` - 快速打开`git repo`主页


**注意：~/.zshrc中plugin内，每个插件之间并没有用,分割。被小小的坑了一把！**

### 意外好用的命令

* `history` - 查看你终端历史输入
* `ls dirpath` - 查看某路径下所有文件
* `alias` - 查看所有`alias`