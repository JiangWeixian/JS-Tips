# Github个人博客建立 - 托管代码
>  利用Github建立个人博客；

## 序

本章说明，如何将上一章节中本地打包好的代码文件托管至`Github`。

至于为什么将选择`Github`作为托管网站？

免费啊，大兄弟～

## 技术要求

只需要一个`Github`账号。以及初步使用技巧，如果你是从零开始使用`Github`，请点击[官方文档](https://help.github.com/)学会`Github`使用。没有比它说明的更详细了。

## 正文 - 托管到Github

在本小节之前，请确认已经具有向`Github`提交代码的权限，代码权限查看：

![权限查看](https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/articles/Github-%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%BB%BA%E7%AB%8B%E8%AF%B4%E6%98%8E/img/build-website-2stpater-pushtogithub.png)

如果该项内部没有内容，请再次确认**官方教程**。

初始化工程为`Git`工程。初始化工程方法如下（如果已经进行，请跳过）：

```shell
#在工程根目录下
git init
git remote add <工程地址>
```

对于默认利用`vue-cli`创建的工程而言，`.gitignore`文件默认将`dist`排除在外。找到这个文件，并将这句话删掉。

```shell
git add *
git commit -m "first commit"
git push -u origin master
```

此时刷新页面，就可以看到页面中已经有我们的工程。

![工程设置](https://raw.githubusercontent.com/JiangWeixian/HTMLlearning/master/README/articles/Github-%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E5%BB%BA%E7%AB%8B%E8%AF%B4%E6%98%8E/img/build-website-2stpater-setting.png)

在工程上方，我们可以上图所示，点击`setting`，在**Options**一项中找到**GitHub Pages**。在`source`下拉菜单中选择`master`分支。（重点不在于哪个分支，只要选择有用`dist`文件夹的那个分支，如果没有，下拉菜单是无法选择的）


