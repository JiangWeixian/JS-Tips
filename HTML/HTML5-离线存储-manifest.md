# 离线存储 
> manifest方案

## 前置知识 - 什么是离线存储

目的就是为了达到即使断网也能够打开网站。

从以上描述就可以知道只是适用部分的网站，不适合那些依赖于服务器的。可以适用于本地游戏，或者博客。

除了`manifest`这一个之外，**PWA**是新兴的方案，一种实现离线`webapp`的方案。不局限于前端框架，任何前端框架都可以实现这两种的离线话存储方案。

## 如何使用。

* [使用grunt配置](https://yanhaijing.com/html/2014/12/28/html5-manifest/)
* [另一个教程](https://juejin.im/post/59cdb48b518825788565c5f0)
* [提供了如何更新的方案介绍，以及manifest十分详细介绍](https://www.html5rocks.com/zh/tutorials/appcache/beginner/)

**开启**

通过`<html lang="en" manifest="index.manifest">`开启离线更新

**manifest中文件中列出的就是需要缓存的文件**

```JavaScript
CACHE MANIFEST
# 2010-06-18:v2

# Explicitly cached 'master entries'.
CACHE:
/favicon.ico
index.html
stylesheet.css
images/logo.png
scripts/main.js

# Resources that require the user to be online.
NETWORK:
login.php
/myapi
http://api.twitter.com

# static.html will be served if main.py is inaccessible
# offline.jpg will be served in place of all images in images/large/
# offline.html will be served in place of all other .html files
FALLBACK:
/main.py /static.html
images/large/ images/offline.jpg
*.html /offline.html
```

* `CACHE` - 是缓存文件列表
* `NETWORK` - 白名单服务器，请求的文件不会缓存
*  `FALLBACK` - 资源请求失败的情况，虽然缓存了部分资源，总有些资源是没有缓存的，也没有办法缓存。

**更新**

* 更改`manifest`文件 - 如上面里面的`# 2010-06-18:v2`更改一下字符就可以
* 通过`JS`接口函数 - 如第三个链接里面提到的那样
* 清除浏览器缓存，没有缓存了自然更新




