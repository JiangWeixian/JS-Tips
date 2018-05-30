# AJAX - 如何预防CSRF
> 前世今生解惑

## AJAX名词解释

AJAX = **A**synchronous**Ja**vascript+**X**ML

关键词解析：**异步的、和JavaScript相关、XML**

前两个很好理解，因为`AJAX`使用场景就是改变页面的部分数据。

最后一个和它创建对象有关，我们是通过一个`new XMLHttpRequest()`对象（IE浏览器可能有新的名字）来创建一个对象，我们可以叫他`AJAX`。

就像是下面这样：

```JavaScript
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

### AJAX部分属性

具体可以参考`W3CSHCOOL-XMLHttpRequest`。

* `readyState`不等于`status`，后者是[`HTTP`状态码]()。前者只有4个状态，`=4`的时候代表成功。
* `responseText`获取响应结果
* 流程基本为：
    1. 创建对象
    2. `open`打开地址对象，`send`发送请求
    3. 在得到响应之后`state`改变触发`onreadystatechange`，然后在函数内部判断是否成功。

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

这就要涉及到[`CSRF`攻击特点]()，就像是`JWT`可以防止`CSRF`一样。因为这种自发的（需要额外代码操作而不是浏览器的自发行为），给`cookie`上或者在向服务器发送的请求上加上额外的验证。都能够防止`CSRF`。