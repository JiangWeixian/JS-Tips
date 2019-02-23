# Nodejs - http
> 深入相对复杂

## 简化版速写

> response和request是一个流

如果简单使用，记住：

1. `response` - 上面有什么的接口属性。

    * 要知道如何发送数据 - `end(包含发送数据部分) write+end pipe`
    
    > 继承来自`stream.writeable`流。所以可以看看这个类的一些属性方法。

2. `request(imcomingmessage)` - 同`response`。

    > 继承`stream.Readable`。所以不止`http-incomingmessage`提到的那些函数。

    > `express`等一些框架通过请求路径是因为`request`内含`url`。可以通过监听`request`事件然后分发不同的地址请求。

    > 至于`url`地址上可能有传递一些数据，则可以通过，`url`模块解析

3. `http` - 假设由此创建的实例(指的是`require('http')`)为`server`
    * `.createServer` - 仅仅一个接口函数(以第1/2点作为回调参数)。除了之外`server`还能够监听其余类似`request connect etc`函数，至于传递什么参数见doc。
