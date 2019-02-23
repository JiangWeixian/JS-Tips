# HTML - canvas
> canvas 跳坑

## **clearreact**
> 清空画布

在同一`canvas`进行重新绘制之后，需要进行`clearreact`操作，不然之前绘制的东西是会保留的。

问题在于如果绘制的时候如果进行了坐标系的旋转或者偏移等操作，目的是为了进行正确的绘制。而这样就会导致`clearreact`失效，导致无法清空。

**因此如果进行了坐标系操作，在下一次`clearreact`之前，需要进行一次逆操作将坐标系还原。**

## `canvas`污染
> 由跨域引起的

原因将[MDN-Canvas污染问题](https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_enabled_image)，至于为啥可以通过设置`cross-origin`进行规避。可以参考[解释](https://www.zhangxinxu.com/wordpress/2018/02/crossorigin-canvas-getimagedata-cors/)

> 主要是告诉浏览器除了图片数据，不要发送其他私密数据。这样一来，数据的请求就是安全的。
