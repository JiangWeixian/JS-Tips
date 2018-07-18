# HTTP状态码

* [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)
* [被墙了看这个](http://www.cnblogs.com/starof/p/5035119.html)

2xx和3xx部分是能用的，其余都有带有一定错误。

大致可以分类：

* 1xx - 信息状态吗，例如请求字段中上传大文件以及升级HTTP协议
* 2xx - 成功
* 3xx - 重定向，其中304代表请求资源未修改，不需要再一次下载；301需要要配合location响应字段使用
* 4xx - 客户端(网络也是)这边发生了错误
* 5xx - 代表服务器那边发生了错误