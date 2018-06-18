# TCP、UDP、HTTP、轮询、Websocket

### tcp - 传输控制协议

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

### udp - 用户数据报协议

不可靠传递

* 缺乏拥塞控制
* 只有校验和

在安全上定义的协议很少。数据包结构如下图：

![udp数据结构](https://raw.githubusercontent.com/JiangWeixian/JS-Tips/master/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/img/udpdata.PNG)

### 和http的关系 - 超文本控制协议

基于`tcp`。

客户端和服务器通过`tcp`建立连接之后，`http`规定了一种客户端和服务器两者说话的方式。

看请求头和响应头，以及反应的状态码。

### http 长连接、短连接、长轮询

针对http而言。

* 短连接 - 请求一次就断开额度tcp连接
* 长连接 - 请求多次断开，以为了减少`tcp`建立连接资源的目的而设置。会在**响应头**里面加入`keep-alive`的代码。


**轮询**

不刷新页面情况下，实现推送。

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

不需要服务器使用额外的代码，每次都会建立一次`http`连接，开销很大。可以发现如果服务器不主动的话，连接一致存在。

* 每隔一段时间请求数据，成功之后再一次请求数据

**长轮询**

[长轮询](https://zhuanlan.zhihu.com/p/25690011)

和以上传统方式不同的是，需要服务器配合使用。为了抵消轮询的缺陷，所以应该出现主动停止连接情况，如下：

* 有新数据推送 。当**服务器向浏览器**推送信息后，应该主动结束程序运行从而让连接断开，这样浏览器才能及时收到数据。 
* 没有新数据推送 。应该设定一个最长时限，避免WEB服务器超时（Timeout），若一直没有新信息，**服务器应主动向浏览器**发送本次轮询无新信息的正常响应，并断开连接，这也被称为“心跳”信息。
* 网络故障或异常 。由于网络故障等因素造成的请求超时或出错也可能导致轮询的意外中断，此时浏览器将收到错误信息。 

以上断开连接情况可以发现，都是服务器主动的。

其实实现方法和传统方法类似：

```javascript
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
//                收到回复后再次发出请求
        interval = window.setTimeout(updater.poll, 0);
    },
    onError: function () {
        console.log("Poll error;");
    }

};
function transfer() {
    updater.poll();

}

transfer()
```

`interval = window.setTimeout(updater.poll, 0);`这一段和传统方法类似

* 传统中成功之后，在定时10秒发送
* 现在，成功之后立马开始一个新的连接

不过这里不同的在于服务器部分，因为现在新的轮询方式中，上一个连接已经被服务器中断了。

### websocket

[教程](http://www.ruanyifeng.com/blog/2017/05/websocket.html)

实现websocket对浏览器推送消息，地址通常问`ws://example.com:80/some/path`或者是以`wss`开头。

`socket.io`就是利用`websocket`实现的。