# cookie、session、localstorage、token、sessionstorage
> 使用说明

<!-- TOC -->

- [cookie、session、localstorage、token、sessionstorage](#cookiesessionlocalstoragetokensessionstorage)
  - [总览](#总览)
    - [cookie](#cookie)
      - [TIPS - 如何设置cookie](#tips---如何设置cookie)
      - [TIPS - 设置多个Cookie](#tips---设置多个cookie)
    - [sessionstorage](#sessionstorage)
    - [localstorage](#localstorage)
    - [session](#session)
    - [token](#token)
  - [Q&A](#qa)

<!-- /TOC -->

## 总览

* cookie - 存在浏览器
* session - 存在服务器
* localstorage - 本地
* sessionstorage - 本地
* token - 浏览器

打开浏览器开发者工具，`resource`部分就可以看到部分。

### cookie

一般保存的网站用户信息，一般不会存储过于私密的信息。

特点：

* 如果设置了`cookie`会**自动加入到`request`中**。浏览器会自动查找存储`cookie`的文件夹。如果有就会加入到`request`。
    > 非`ajax`请求都会这么加
* 可以设置时间期限
    * 如果设置了`cookie`却没有设置时间期限。关闭浏览器就没有了
    * 如果设置了时间，下次打开还有
* 基本上是以`name=username;password=password...`等等拼接为一个字符串。也是通过`;`来分割数据。
* 目前基本都是用来存数据了
    > 但在 localStorage 出现之前，cookie被滥用当做了存储工具。什么数据都放在cookie中，即使这些数据只在页面中使用而不需要随请求传送到服务端。当然cookie标准还是做了一些限制的：每个域名下的cookie 的大小最大为4KB，每个域名下的cookie数量最多为20个（但很多浏览器厂商在具体实现时支持大于20个）。
  也就是可以通过自己设置字符串格式

但是`cookie`其实是自带一些默认字段的，就如同该[链接](https://segmentfault.com/a/1190000004556040)说明的情况，有一些特殊的含义。例如

* `httponly` - 无法通过`js`获取，就能够避免`xss`攻击

#### TIPS - 如何设置cookie

第一次请求是没有`cookie`，只有第二次访问的时候才会有。

**服务器的`response`的含有`set-cookie`字段**。代表了服务器可以让客户端设置多少个`cookie`。

设置一个`cookie`的方法为`document.cookie=....`。多个就是：

```javascript
document.cookie=....
document.cookie=....
document.cookie=....
```

没错就是多写几次。为什么能够如此做。

#### TIPS - 设置多个Cookie

就要考虑到之前浏览器如何查找该网页的`cookie`。通过浏览器的`domian&path`来寻找。

**也就是说，如果一个cookie内domain和path字段不一致，就会认为是新的`cookie`**。那么我们就能够得到新的结论：

* 修改`cookie` - 就是在保证`domain`和`path`一致的情况下，将`cookie`设置。
* 删除`cookie` - 设置过期时间为过去的一个时间点就可以了。

### sessionstorage

操作函数`localstorage`和`sessionstorage`两者类似，且都是**本地化**的存储手段。

不过不同的是**`sessionstorage`并不是永久的存储方案**。

**sessionstorage有限期：**

* 关闭页面或者关闭浏览器都会清空
* 刷新页面或者恢复页面都会保持(来自[MDN解析](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)) - 刷新页面和**恢复关闭页面**的情况，至少在`firefox`以及`chrome`是这样的。
* 只会存在于一个标签页内
    * 不同浏览器，同一个网址不会使用同一个`sessionstorage`
    * 同一个浏览器下也是相同的情况
* 如果想要在不同页面之间共享`sessionstorage`，可以看[这篇文章](http://blog.kazaff.me/2016/09/09/%E8%AF%91-%E5%9C%A8%E5%A4%9A%E4%B8%AA%E6%A0%87%E7%AD%BE%E9%A1%B5%E4%B9%8B%E9%97%B4%E5%85%B1%E4%BA%ABsessionStorage/)利用了`localstorage`实现共享。


### localstorage

就数据存储方面来说，和`cookie`差不多。

但是很重要的一点就是，并不会自动发送到`服务器`，且存储内容更多。

和`cookie`的原则一致不要保存私密的代码。

### session

和`cookie`最大的不同就是`session`是保存在服务器的。浏览器能保存就只有`session id`这个选项。服务器通过`session id`来确定连接。

我们不关心服务器通过这个`session id`找到了什么数据。

而关系我们如何保存和发送这个`session id`。有以下方式：

* `session`关键在于`session id`。跟着`cookie`一起发送。
* 如果禁用了`cookie`
    * 可以加在`url`后面
    * 当发生请求时候，跟着数据一起发送    

当页面关闭之后，`seesion`会清空，再一次发送请求会再**向服务器请求`session id`。**

### token

[token主页](https://jwt.io/)

`token`算是一个新东西。有用过一次，有以下几个特点：

* `token`是服务器发送的，一般来说都是编码过的，且解码编码的工作都是服务器完成的
* `token`并不保存在服务器，而是客户端
* 和`cookie`和`session`一样，第一次不发送。在第一次成功登陆之后，`token`被服务器发送客户端。第二次请求就会带上这个`token`。

`token`的作用是用来验证身份。其结构为,可参考[地址](https://blog.csdn.net/dounine/article/details/78704668)或者[token主页](https://jwt.io/)：

* header
* payload
* signature

`token`的好处，可以避免`csrf`攻击。需要加入到请求头特殊的部分，如此`Authorization: Bearer <token>`

## Q&A

* 为什么会有`cookie`和`session`共同存在：
    > 首先session需要cookie发送信息（可能）；session是会话，是一种状态的维持。没办法通过客户端来cookie决定用户是否登陆，而是由服务器决定（因为通过登陆请求一定是经过了服务器），所以验证sessoin id来判断是否让客户端直接登陆;

* `token`的好处，为什么可以避免`csrf`攻击，就如同[这篇文章](https://www.jianshu.com/p/c33f5777c2eb)所说的：
    > 首先我们要知道客户端和服务器交互有两种方式，一种是自己主动发送数据，另一种就是被动的发送数据,另一种就是浏览器主动行为，比如自动发送cookie。这就会导致csrf攻击。token是存在客户端，且不主动发送的话，是不会主动的。1. 如果保存在locastorage内，就可以避免csrf，毕竟csrf并不会注入js代码。只是黑客的隐含请求。
* `token`能够避免xss吗？
    > 不能，因为这并不是它的功能要求之一！而且xss和前端代码很有关系（是否过滤了一些可执行代码），和用户行为由很大关系。这个token无法避免。
* 什么时候发送`session id`?
    > 第一次请求的时候`cookie`并不会有`session`，而是在服务器返回的字段中设置了`seession id`。这样浏览器就会在下一次`cookie`发送的时候自带上。