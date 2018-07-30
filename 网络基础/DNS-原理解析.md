# DNS - 原理解析
> 不只是(IP, hostname)键值对那么简单

<!-- TOC -->

- [DNS - 原理解析](#dns---原理解析)
  - [域名存储的几种方式](#域名存储的几种方式)
    - [参考](#参考)
  - [域名解析 - 一步步来](#域名解析---一步步来)
    - [参考](#参考-1)

<!-- /TOC -->

## 域名存储的几种方式

> A;CNAME etc

* A记录 - 域名和ip地址对，就像是[域名解析 - 一步步来](#域名解析---一步步来) **Step1~3那样**
* `CNAME`记录 - 域名的别名，可以多个。就像是`a`拥有别名`b c`。那么访问`b c`就其实都是得到`a`的`ip`地址。
* `MX` - 用于邮件(因为查找`@xx.com`和[域名解析 - 一步步来](#域名解析---一步步来) **Step1~3**某些部分重合)

(应该是前三个比较重要一些，后面都是设置以及查询信息追踪记录)

* `NS`记录 - 在[域名解析 - 一步步来](#域名解析---一步步来)，例如得到`baidu.com ip`地址是通过`com.`中哪一个服务器解析的。
* `TXT` - 好像和`ip`地址无关。保存的是联系人信息。

* TTL - 缓存存在时间。缓存久一点可以加快速度。

### 参考

* [来源](http://coolnull.com/53.html)
* [比上面那个更为详细一些](https://blog.csdn.net/silentpebble/article/details/44196083)

## 域名解析 - 一步步来

> 并不是直接输入www.baidu.com直接得到了ip地址

> 通过输入`dig +trace www.baidu.com`得到完整的解析结果

`www.baidu.com`完整路径其实为`www.baidu.com.`后面有一个点。**要从右边向左边发起我们查询**

由于我们每一步都得到了`ip`地址所以可以向下一步发生请求。**当然如果本地有缓存`ip`的话，可以直接请求访问了**

1. `.` - 向`.`发起`www.baidu.com` **得到`com.`的`ip`地址**
2. `com.` - 向`com.`发起`www.baidu.com` **得到`baidu.com`的`ip`地址**
3. `baidu.com.` - 向`baidu.com.`发起`www.baidu.com` 不过在链接中，`www.baidu.com`有一个`cname`别名`www.a.shifen.com.`，而`www.a.shifen.com.`就存在于`baidu.com.`上，所以同步的向`www.a.shifen.com.`发送了请求，**得到对应的`ip`地址。**

(如果`www.a.shifen.com.`不在`baidu.com.`上)

那么可能对于`www.a.shifen.com.`回到步骤一重新来一遍了。

> 以上发起请求是向`ip`地址发起，类如`. com. baidu.com.`只是名字。这样方式依旧是`(ip, hostname)`的键值对方式。

### 参考

* [域名解析完整过程来源](https://www.cnblogs.com/YDDMAX/p/5598196.html)
