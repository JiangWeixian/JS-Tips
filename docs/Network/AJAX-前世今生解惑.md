# AJAX - 如何预防CSRF
> 前世今生解惑

<!-- TOC -->

- [AJAX - 如何预防CSRF](#ajax---如何预防csrf)
  - [AJAX名词解释](#ajax名词解释)
    - [AJAX部分属性](#ajax部分属性)
  - [AJAX封装](#ajax封装)
  - [AJAX预防CSRFG](#ajax预防csrfg)
  - [AJAX资源回收](#ajax资源回收)
  - [Ftech](#ftech)

<!-- /TOC -->

## AJAX名词解释

AJAX = **A**synchronous**Ja**vascript+**X**ML

关键词解析：**异步的、和JavaScript相关、XML**

前两个很好理解，因为`AJAX`使用场景就是改变页面的部分数据。

最后一个和它创建对象有关，我们是通过一个`new XMLHttpRequest()`对象（IE浏览器可能有新的名字）来创建一个对象，我们可以叫他`AJAX`。

所以`AJAX`是多种技术融合，通过`XMLHttpRequest`请求数据，通过`js and html css`来改变页面。

`XMLHttpRequest`是核心，就像是下面这样：

```html
<script>
function loadXMLDoc()
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","/try/ajax/ajax_info.txt",true);
	xmlhttp.send();
}
</script>
```

可以理解为一个可以发送`http`请求(就像是浏览器输入url地址那样)的API接口。

### AJAX部分属性

具体可以参考`W3CSHCOOL-XMLHttpRequest`。

* `readyState`不等于`status`，后者是[`HTTP`状态码](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/HTTP-%E7%8A%B6%E6%80%81%E7%A0%81.md)。前者只有4个状态，`=4`的时候代表成功。
	* `0` - 创建`xhr`对象
	* `1` - open
	* `2` - send
	* `3` - 部分数据
	* `4` - 全部数据
* `responseText`获取响应结果
* 流程基本为：
    1. 创建对象
    2. `open`打开地址对象 - 需要两个参数分别是方式和地址
			  * 可以[设置requestheader](https://segmentfault.com/a/1190000004322487)
		3. `send`发送请求
    4. 在得到响应之后`state`改变触发`onreadystatechange`，然后在函数内部判断是否成功。
* 可以在`send`中传递发送给后台的数据。

更多设置见[参考链接](https://segmentfault.com/a/1190000004322487) / 包括告诉服务器接受数据类型等。

## AJAX封装

市面上有很多`AJAX`库，包括`JQuery.ajax`以及`vue`里面用到的`axios`。

本质上来说都是对`XMLHttpRequest`深层次的封装。可以让我们不考虑浏览器的环境，专注于真实的请求。

两者的区别在于：

* `JQuery.ajax`成功失败都是回调函数，写在参数里面
* `axios` 则是`ES6`的写法。使用`Promise`

如何单纯只是想要`ajax`显然`axios`更适合，体积更小。

**注意，axios默认不带有cookie的**

## AJAX预防CSRFG

* `axios`号称是预防`csrf`的。

衍生开来，`AJAX`如何预防。在`aixos`可以设置一个参数`xsrfCookieName: 'XSRF-TOKEN'`来防止`CSRF`。

**为什么？**

这就要涉及到[`CSRF`攻击特点](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/xss%2Bcsrf.md)，就像是`JWT`可以防止`CSRF`一样。因为这种自发的（需要额外代码操作而不是浏览器的自发行为），给`cookie`上或者在向服务器发送的请求上加上额外的验证。都能够防止`CSRF`。

## AJAX资源回收

如果不再需要`ajax`发送数据了。请将`xhr`对象为空，就像是[jquery-ajax](https://blog.csdn.net/sdfujichao/article/details/52119165)那样。

## Ftech

[@update 2018-05-29]()

新时代新特性。

替换`XMLHttpRequest`的存在，不过暂时先不要用使用这个东西，不太稳定。