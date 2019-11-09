# HTML5 脚本编程
> 新特性新气象

## 跨文本传输 - postMessage

跨文档传输，两个步骤。

1. postMessage
2. 在对应的文档上设置`message`事件监听

分为两种情况：(文中举例了传递`iframe`的方法)

1. 如果向同一个域下面的文档发送，例如`https://www.baidu.com`向`https://www.baidu.com/ss`
2. 不同作用域，

  ```JavaScript
  var popup = window.open('https://www.github.com')
  popup.postMessage("some messgae", "https://www.github.com")
  ```

  具体见[教程](https://www.cnblogs.com/zichi/p/4638096.html)

## Drag

定义了拖拽事件，不需要再用其他方法目的。

还包括`drag`元素接触到另外一个元素的时候发生的事件。

但是有了拖拽事件不代表元素可以拖拽，需要设置`draggable="true"`来让元素可以拖拽。

### 进一步 

`event.dataTransfer`

俩个元素发生交互的的时候传递数据。

`dropEffect etc...`

可以对拖拽元素进行具体操作，包括放置到某个具体位置，打开链接等。

以上一般在两个元素发生交互的时候发生。

## video and audio

介绍了这个。

注意检测不同浏览器支持的编码类型不同。

## history

打开地址会添加浏览记录。

当我们想要不打开页面记录浏览数据。可以通过`history.pushState`等操作。
