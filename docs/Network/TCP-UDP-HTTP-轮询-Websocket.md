# TCP、UDP、HTTP、轮询、Websocket

<!-- TOC -->

- [TCP、UDP、HTTP、轮询、Websocket](#tcpudphttp轮询websocket)
  - [1.1. tcp - 传输控制协议](#11-tcp---传输控制协议)
  - [1.2. udp - 用户数据报协议](#12-udp---用户数据报协议)
    - [1.2.1. 和http的关系 - 超文本控制协议](#121-和http的关系---超文本控制协议)
  - [1.3. http 长连接、短连接、长轮询、短链接](#13-http-长连接短连接长轮询短链接)
    - [1.3.1. 前置知识 - 长连接短连接意义](#131-前置知识---长连接短连接意义)
    - [1.3.2. 轮询、长轮询 - 服务端推送技术](#132-轮询长轮询---服务端推送技术)
  - [1.4. websocket](#14-websocket)
    - [1.4.1. 建立链接](#141-建立链接)
    - [1.4.2. Q&A](#142-qa)
    - [1.4.3. 第三方](#143-第三方)

<!-- /TOC -->

## 1.1. tcp - 传输控制协议

[维基百科定义](https://zh.wikipedia.org/wiki/%E4%BC%A0%E8%BE%93%E6%8E%A7%E5%88%B6%E5%8D%8F%E8%AE%AE)

* 和`udp`同样属于传输层。
* 统一的认知是，`tcp`是比`udp`安全的。

安全的原因：

* 发送数据包含有确认序列，**保证接受时候的数据顺序**。
* 如果没有被确认就会被**重传**
    ![tcp传输数据流程](https://raw.githubusercontent.com/JiangWeixian/JS-Tips/master/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/img/Tcp_transport_example.gif)
* 接收端和发送端都会有一个**校验函数**保证数据准确性
* **建立连接的方式是通过三次握手来建立**

数据定义的不同：

> 数据在TCP层称为Stream，数据分组称为分段（Segment）。作为比较，数据在IP层称为Datagram，数据分组称为分片（Fragment）。 UDP 中分组称为Message。

数据包结构如下：

![tcp数据结构](https://raw.githubusercontent.com/JiangWeixian/JS-Tips/master/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/img/tcpdata.PNG)

由于以上种种限制，使得它不太适用实时的应用场景。所以类如流媒体，和游戏之类并不合适。

## 1.2. udp - 用户数据报协议

不可靠传递

* 缺乏拥塞控制
* 只有校验和

在安全上定义的协议很少。数据包结构如下图：

![udp数据结构](https://raw.githubusercontent.com/JiangWeixian/JS-Tips/master/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/img/udpdata.PNG)

### 1.2.1. 和http的关系 - 超文本控制协议

基于`tcp`。

客户端和服务器通过`tcp`建立连接之后，`http`规定了一种客户端和服务器两者说话的方式。

看请求头和响应头，以及反应的状态码。

## 1.3. http 长连接、短连接、长轮询、短链接

### 1.3.1. 前置知识 - 长连接短连接意义

首先要知道一个事实

> HTTP是应用层，TCP是传输层

所以我们可以得到几个结论：

1. HTTP不一定建立在TCP基础之上，如果有些硬件不支持TCP。任何可靠的传输协议都是可以作为HTTP基础。
2. 长连接短连接时相对于TCP来说的，而HTTP只是数据传输格式应用

长连接和短连接可以做以下区分

* 短连接 - HTTP请求一次就断开额度tcp连接
* 长连接 - HTTP请求多次断开，以为了减少`tcp`建立连接资源的目的而设置。会在 **响应头**里面`connection`加入`keep-alive`的代码。**这个时HTTP1.1就开始默认支持的手段。**

**长连接的意义在于，因为建立连接的实践消耗时远远大于建立连接之后传输数据的实践消耗。** 所以每次HTTP请求一次就断开的方式对现在网页来说时不够的。而在现代网页中如何体现，因为每个服务器都有地址(我指的是是IP地址而不是URL地址)存在，TCP以IP(网络层)地址为基础建立连接。那么 **对于同一个服务器下的HTTP资源请求，HTTP完全可以[复用同一个TCP连接](https://zh.wikipedia.org/wiki/HTTP%E6%8C%81%E4%B9%85%E8%BF%9E%E6%8E%A5)。**

> 题外话。上面TCP报头只有端口号，没有IP地址。对于端口号，HTTP默认是80(或者在HTTP HEADERS中指定)，所以这一点还好；而TCP是在传输层，IP地址是在网络，一个在上一个在下的关系。由[计算机网络基础](https://github.com/JiangWeixian/JS-Tips/blob/master/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C.md)中提到的，OSI模型顺序是从上到小的关系。所以到了TCP一层之后(分装好数据)，IP地址在网络层中指定，和TCP无关。来自[知乎](https://www.zhihu.com/question/54795054)。这部分详情见[输入URL全过程](https://github.com/JiangWeixian/JS-Tips/blob/master/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/HTTP-%E8%BE%93%E5%85%A5url%E5%88%B0%E6%98%BE%E7%A4%BA%E9%A1%B5%E9%9D%A2.md)

那么，TCP是如何做到长连接么？

回到之前TCP建立连接的方式，三次握手建立连接。**如果存在第四次握手就断开连接。** 那么如果客户端不发送第四次请求时不会断开连接的，还存在以下一种问题：

1. 客户端没有要求断开，服务器如何确定客户端还存在，而不是因为 **客户端消失了而断开连接**

所以有一个叫做 [心跳机制](https://blog.csdn.net/pmt123456/article/details/58233999)的东西，服务器会在客户端没有数据传输情况下，发出询问。如果客户端应答了，那么就保持连接，如果没有，就断开。**但是存在极端情况，很长时间内客户端是没有数据传输的。服务器维持一个长连接是消耗资源的。所以在客户端长时间没有断开情况下，服务器会主动断开。**

### 1.3.2. 轮询、长轮询 - 服务端推送技术

就现在来说，轮询其实并不是一种 **直观意义上的长连接的方式。** 而是一种服务器向客户端推送数据的方式，因为在轮询中客户端会一致发送请求。

**轮询**

不刷新页面情况下，实现推送。

> 一般会认为`settimeout`连续调用比`setinterval`调用一次要好

```javascript
function poll() {
    setTimeout(function() {
        $.get("/path/to/server", function(data, status) {
            console.log(data);
            // 发起下一次请求
            poll();
        });
    }, 10000);
}
```

不需要服务器使用额外的代码，**每次都会建立一次`http`连接，开销很大**。可以发现如果服务器不主动的话，连接一致存在。

* 每隔一段时间请求数据，成功之后再一次请求数据

**长轮询**

[长轮询](https://zhuanlan.zhihu.com/p/25690011)

和以上传统方式不同的是，需要服务器配合使用。为了抵消轮询的缺陷，所以应该出现主动停止连接情况，如下：

* 有新数据推送 。当**服务器向浏览器**推送信息后，应该主动结束程序运行从而让连接断开，这样浏览器才能及时收到数据。 
* 没有新数据推送 。应该设定一个最长时限，避免WEB服务器超时（Timeout），若一直没有新信息，**服务器应主动向浏览器** 发送本次轮询无新信息的正常响应，并断开连接，这也被称为“心跳”信息。
* 网络故障或异常 。由于网络故障等因素造成的请求超时或出错也可能导致轮询的意外中断，此时浏览器将收到错误信息。 

以上断开连接情况可以发现，都是服务器主动的。

其实实现方法和传统方法类似：

```javascript
// $.ajax来自JQ
var updater = {
    poll: function () {
        $.ajax({
            url: "/longpolling",
            type: "POST",
            dataType: "text",
            success: updater.onSuccess,
            error: updater.onError
        });
    },
    onSuccess: function (data, dataStatus) {
        try {
            $("p").append(data + "<br>");
        }
        catch (e) {
            // 这里就是服务器要求断开链接的情况
            updater.onError();
            return;
        }
        // 收到回复后再次发出请求
        interval = window.setTimeout(updater.poll, 0);
    },
    onError: function () {
        // 中断链接
        console.log("Poll error;");
    }

};
function transfer() {
    updater.poll();
}

transfer()
```

`interval = window.setTimeout(updater.poll, 0);`这一段和传统方法类似

**传统中成功之后，在定时10秒发送现在，成功之后立马开始一个新的连接**

不过这里不同的在于服务器部分，因为现在新的轮询方式中，上一个连接已经被服务器中断了。在`onError`中终端：

> 成功继续请求，不成功中断链接

## 1.4. websocket

[教程](http://www.ruanyifeng.com/blog/2017/05/websocket.html)

特点：

1. 全双工
2. 单个TCP连接上

从上面教程可以看到，`websocket`是建立在`tcp`协议上，和`http`同级别的协议。

**与HTTP之间共同点**

`websocket`的特点意味着`websocket`大部分类似如同[http建立链接过程]()中一样，

* 数据同样要从应用层封装到`tcp`
* 同样也要建立一个三次握手的`TCP`。

### 1.4.1. 建立链接

`websocket`链接地址通常是`ws://example.com:80/some/path`，和`http`建立链接一致：

1. dns域名解析得到ip地址
2. 得到ip地址之后进行`tcp`连接
3. 建立连接之后发送数据

(以下简单说明)客户端为了建立`websocket`连接，(无论是否以`ws or http`开头)借助`http`向服务器发送请求，请求数据带上`websocket`信息，表示我要建立`websocket`。数据特点为：

1. get请求
2. 带上`upgrade`字段意味着建立`websocket`

详细信息见[websocket请求字段](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001472780997905c8f293615c5a42eab058b6dc29936a5c000)

服务器接受之后发送`101`状态码(表示同意切换连接类型)

这部分符合`http`请求然后响应的特点。**之后就是`websocket`通信过程，并没有建立链接的过程**

### 1.4.2. Q&A

* 首先是通信过程，

    > **在轮询中**，服务器没有主动发送消息的能力，之所以能够通信是因为客户端一致在发送请求(这个行为符合`http`请求然后响应的特点)。**在websocket中** 并不是通过这种方式(向服务器发送数据并不期望有返回结果)，至于如何实时的监听服务端数据，这个问题就和服务器如何监听`http`请求一样，属于比较低层的实现。
    
* [如何保持连接](https://juejin.im/post/5a05d89051882540f36305df)

    > 由于低层还是一个`tcp`链接，在[1.3.1. 前置知识 - 长连接短连接意义]()提到一个心跳机制，这是保持长连接不断开的关键。
    
* 假设`http`不是请求响应的模式，`websocket`做了哪些改进？

    > 数据更为精简。不需要发送那么头部信息。

* 同源策略

    > 和ajax不同，没有同源策略。服务器需要通过服务端的`origin`字段来判断来自哪部分的链接。

### 1.4.3. 第三方

* `socket.io`就是利用`websocket`实现的。 - 建立连接以 **http**开头
    
    > `socket.io`使用过程中，服务器和客户端都需要使用`socket.io`这个库，通过它的方式建立连接。估计这也是它为什么可以使用`http`建立连接。
    
* [nodejs-ws模块教程](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014727922914053479c966220f47da91991fa9c27ac3ea000) / 以`ws`开头 

    > 这里要求服务端使用`ws`模块，客户端只需要支持`websocket`协议的浏览器就可以了。与`ws`开头的地址建立链接。

**比较`ws`模块以及`socket.io`模块**

* `ws`基本只能够实现`onmessage`的事件监听，但是`socket.io`可以实现更多事件，估计内部扩张了发布订阅模式。
* 还有一个`broadcast`功能，这一点涉及`ws`特点，服务器对于不同客户端链接都能够保存一个 **链接id，结合发送链接的userid** 如果将其保存到一个数据结构中的话。就可以实现向数据结构的其他部分发送数据，或者向数据结构中其中一个用户发送数据。