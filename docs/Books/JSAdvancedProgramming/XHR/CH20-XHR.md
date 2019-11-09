# xhr
> ajax

<!-- TOC -->

- [xhr](#xhr)
  - [前置 - 如何使用](#前置---如何使用)
  - [POST - 发送数据](#post---发送数据)
    - [特别的数据](#特别的数据)
    - [更多细节](#更多细节)
  - [跨域处理](#跨域处理)
    - [CORS](#cors)
    - [带有凭证的发送请求 - 可能有安全问题](#带有凭证的发送请求---可能有安全问题)
    - [其他跨域技术](#其他跨域技术)
  - [comet](#comet)

<!-- /TOC -->

## 前置 - 如何使用

简单说明见[ajax-前世今生](https://github.com/JiangWeixian/JS-Tips/blob/master/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/AJAX-%E5%89%8D%E4%B8%96%E4%BB%8A%E7%94%9F%E8%A7%A3%E6%83%91.md)

如果是`post`最后要有`send`发送数据，如果是`get`那么就不需要`send`

## POST - 发送数据

**不同的数据nodejs设置不同的中间件。**

post比较复制一些，因为发生数据的不同。常规的分为：

1. 序列化之后的字符串 - `'name=cmd&cmd=1'`
2. JSON.stringify(obj)
3. 其他类型

关键在于设置`content-type`，见[参考-很重要](http://www.jiekouw.com/archives/161)。

设置`content-type`就是为了告诉后台这是怎样的数据格式。就像是 **第一种数据，要设置`application/x-www-form-urlencoded`**。

### 特别的数据

1. formData - 格式如下：

  ```JavaScript
  var formData = new FormData();

  // loop through all the selected files and add them to the formData object
  for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // add the files to formData object for the data payload
    // upload single file
    // formData.append('uploads[]', file, file.name, file.webkitRelativePath);
    // upload directionary
    formData.append('uploads[]', file, file.webkitRelativePath);

  }

  $.ajax({
    url: '/upload',
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    success: function(data){
        console.log('upload successful!\n' + data);
    }
  )
  ```

  而且`formData`类型有很多，因为form控件很多，可以发送文件之类比较复杂的数据。同样后台处理方式也是中间件。

### 更多细节

1. 有自带的超时设定，注意ie兼容性
2. 有进度条事件，可以反应数据返回情况；
3. 还有load事件，不同于`onreadyStateChange`。这个反应的是`status`变化。

## 跨域处理

### CORS

原理在于浏览器后`origin`，以及服务器`access-control-allow-origin`要配对。

**而浏览器有没有发送`origin`就代表着浏览器是否支持跨域处理。**

可通过`xhr.open('get', url, true)`最后一个参数来打开一个跨域请求。

### 带有凭证的发送请求 - 可能有安全问题

**不是jwt**

如果是相同作用域，浏览器自动发送`cookie`(或者其他方式)。

但是如果是不同域的话，就不会自动发送。那么 **服务端就没有办法验证**，所以这也是跨域不成功的原因。

一个思路就是如果跨域的是时候加上就好了。

文中认为可以通过`xhr.wihCreaentials=true`让发送请求带上`cookie`，这样浏览器就能够验证了。

**另一方面，这个可能会安全问题。**

因为如果全局设置了个参数，那么很容易导致`cookie`被截获。

所以最好加上`token`认证。

### 其他跨域技术

* 图像`ping` - 这个是由于图像请求可以设置`onload`事件，局限比较小。统计图像记载次数。
* 以及`jsonp`

## comet

[轮询，长轮询技术](https://github.com/JiangWeixian/JS-Tips/blob/master/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/TCP%2BUDP%2BHTTP%2B%E8%BD%AE%E8%AF%A2%2BWebsocket.md)。

以及在以上两个基础上实现`sse`技术。

同时还有新的`websocket`技术。

后面一般`new`一个对应的对象(就像是`xhr`对象那样)，然后`onmessage`来监听数据的传递。

