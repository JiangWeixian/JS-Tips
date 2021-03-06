# HTTP - 输入地址到显示页面

- [HTTP - 输入地址到显示页面](#http---输入地址到显示页面)
  - [概述](#概述)
    - [数据结构](#数据结构)
  - [参考链接](#参考链接)


## 概述

当我们请求地址，获得了`html`中 **标签**包括`dom&link`，`link`中`css`文件并没有下载，而 **`dom`元素已经跟随`.html`文件下载回来了。** 等待样式文件下载完毕参与构建。

页面加载是否快速，涉及到以下几个方面。这篇文章总结的也只是 **第五点-CSS&HTML&JS对页面渲染的影响！** 以上从上到下也就是输入`url`到页面出现所发生的一切。

1. `DNS` 查询 - 查询`www.baidu.com`对应的`ip`地址。因为路由器需要知道向那个ip地址发送。
2. `TCP` 连接 - 只有 `tcp` 建立了链接才能够建立 `http`
3. `HTTP` 请求即响应
4. 服务器响应 - 对于响应结果进一步处理方式有，保存`cookie`以及缓存资源。如果资源已经缓存了(且没有过期)，那么就本地读取。
5. 客户端渲染

### 数据结构

得到`IP`之后，就是数据发送的过程。那么`HTTP`数据封装到`TCP`数据中，`TCP`数据分装到IP数据中。如下图：

![数据封装概述](/docs/Network/img/%E8%BE%93%E5%85%A5URL%E5%85%A8%E8%BF%87%E7%A8%8B.png)

**全部具体过程见参考链接！**

## 参考链接

* [HTTP-OSI建立链接全过程](https://juejin.im/entry/58ce00c5ac502e00589b4bde)
* [HTTP-建立链接过程更为详细](https://juejin.im/post/5872309261ff4b005c4580d4)