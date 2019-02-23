# xss+osrf+csrf
> 黑客攻击

<!-- TOC -->

- [xss+osrf+csrf](#xssosrfcsrf)
    - [xss](#xss)
      - [如何防范xss](#如何防范xss)
    - [osrf](#osrf)
    - [csrf](#csrf)
      - [如何防范csrf](#如何防范csrf)
    - [防范TIPS](#防范tips)

<!-- /TOC -->

### xss

XSS 漏洞有多种形式，分为三类，反射型、保存型和基于 `DOM`的`XSS`攻击

**反射性**

如果服务器返回的信息，如果是错误。

直接反馈到页面上，如果这个服务器发送了一段代码。就有可能运行这段代码，然后访问一些不应该访问的地址，这些地址就会是黑客地址。

访问地址发送`cookie`导致`cookie`被截获。**因为cookie前端可以操作。**

**保存型**

经过两个步骤。

1. 先将恶意代码注入数据库
2. 等待有人访问之后就会有可能运行这段代码，然后截获信息

并不需要修改受害者数据，而是修改自己的。等着别人访问就可以了。

**基于DOM的XSS攻击**

这个是由前端导致的，如果访问了一个错误的地址。

对于返回的错误信息，使用以下代码进行解析。有可能是无意的，解析出了可执行代码。

```javascript
<script>
  // www.xxx.com/error.php?message=sorry,an error occurred
  var url = document.location;
  var message = /message=(.+)$/.exec(url)[1];
  document.wirte(message);
  //或者
  document.getElementById("show").innerHTML = message;
</script>
```

就会遭到攻击。

**更为具体的情况举例**

1. 例如行内的代码
2. 以及莫名的添加`script src`

#### 如何防范xss

* 如果cookie被截获，cookie就应该保证不放入重要信息。必要时还要对`ip`和`cookie`进行绑定，一旦检测异常，立马让用户重新登录；
* 过滤含有`html`便签或者`script`的数据
* `innerHTML`不会过滤字符串(也就是说会通过字符串创建`script`标签)，`innerText`会过滤标签。
* 使用[csp](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) - 可以设置meta标签或者通过请求头发送数据，来保证数据链接来源可靠性[针对莫名的添加`src`]()

以下来自链接

* 过滤所有行内代码
* 监听src添加事件，如果发生了添加异常src就报警

**参考链接-比较有指导意义：**

* [过滤内行代码](http://fex.baidu.com/blog/2014/06/xss-frontend-firewall-1/)
* [监听src](http://fex.baidu.com/blog/2014/06/xss-frontend-firewall-3/)

### osrf

[osrf攻击举例](http://www.91ri.org/6049.html)

当过滤了`xss`攻击之后，有可能出现的攻击方式。即使你过滤了xss攻击方式，也有可能出现。

由于过滤了`xss`攻击，直观上应该和`xss`攻击无关，但是却的确利用了`xss`攻击。利用的是**存储性的xss**攻击。

当我们使用**如何防范xss**里面的方法防范攻击的时候，**保存型xss攻击方式失效**，的确我们不会再运行代码了。

但是我们却可以保存其他东西（向服务器）。

在以上链接中。

例如，有段`url`向服务器发送了数据并保存（非代码，没有危害的数据），如果普通用户行为，这个行为没有什么危害（因为既不是xss攻击，只是增加了数据而已）。

但是如果点击这段链接的是管理人员，那么就有可能创建一个管理员账户，导致服务器被劫持。

不过，这一点出现的可能性太小了。

### csrf

[攻击实例解析](https://segmentfault.com/a/1190000007932293)

三个网站`bank、hacker、user`

1. user登陆了`bank`，页面含有`hacker`的链接，`user`不小心点击了`hancker`。
2. `hacker`向`bank`发起访问，由于之前已经登陆了`bank`。所以也会发送 **数据**让`hacker`验证通过
3. 验证通过之后，`bank`通过`hacker`的额外数据进行进一步操作。

为什么会发生这种情况？假设以上请求在表单发生，表单可以有 **默认发送地址**(可以在forms中指定)`submit`时候发送的是数据(且此时会拼接表单字段)。

再者由于`cookie`是否发送根据发送地址来判断。而不是来源地址。

所以完全可以将次表单复制到新页面。然后发送数据(被伪造的数据)。实现 **csrf**。

#### 如何防范csrf

* 服务器通过请求头的`referer`来判断请求来源
* 表单中加入了一个随机的`token`来验证。`token`随着其他请求数据一起被提交到服务器，服务器通过验证`token`的值来判断`post`请求是否合法。由于攻击者没有办法获取到页面信息,所以它没有办法知道`token`的值.那么伪造的表单中就没有该`token`值。服务器就可以判断出这个请求是伪造的。**在Http请求头中含有这个x-csrf-token的字段或者authr...(具体名字不记得))。** 同时，这里说的`token`可以是服务器生成的，或者是jwt。

  > 服务器生成，jwt，先不深究两个技术上的差异。服务器生成前端如何获取：这是由于页面来自SSR，所以页面中可以带有token。`jwt`的话如果是事先获取并保存到客户端，在 **无论考不考虑xss攻击，都不要保存到localstorage。一个可行建议是保存到seesionstorage**


### 防范TIPS

* [避免使用document.write](http://www.cnblogs.com/ziyunfei/p/5881426.html)，因为这么做是会加载`script`标签。
* 自发的向请求头加入`token`或者任何可以二次验证的数据都可以防止`csrf`攻击。