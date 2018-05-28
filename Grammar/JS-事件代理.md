# 事件代理
> 注意区分IE浏览器上面特别点

### 前置知识：事件捕获和冒泡

[参考](http://blog.xieliqun.com/2016/08/12/event-delegate/)

捕获从上到下，冒泡则是从下到上。

规定是先捕获在冒泡

* 捕获，从上到下，直到设置了事件元素节点

这里特别说明的是`addEventListener || attachEvent`的方式。而不是经常使用的`onclick`此类写事件的方式。

前者是事件监听的方法，优势在于：

* 可以在同一个元素上绑定多个`click`（以`click`举例），而`onclick`方法只会让后者覆盖前者
* 有解除事件代理的函数，提高网页性能。`removeEventLister || detachEvent`

### 特别的小伙：IE

`W3C`规范的方式是：

```javascript
element.addEventLister(event, function, useCapture)
```

前两个参数很好理解:

* event - `click`
* function - 传递默认参数`window.event`，如果想要传递其他参数，可以参考[demos-drag](https://github.com/JiangWeixian/JS-Tips/blob/master/Demos/content.md)
* useCapture - `true`代表的捕获，`false`代表冒泡

而`IE`这个特别的小伙就是要和别人不一样

* event - 必须加上`on`变为`onclick`

**注意**，回调函数最好加上名字`function name() {}`不然是不太好`remove || detach`

### 简单实例

* 实现页面加载时候调用函数：
    ```javascript
    // 重点就是windoow.onload函数
    
    readyEvent : function(fn) {
 			if (fn==null) {
 				fn=document;
 			}
 			var oldonload = window.onload;
 			if (typeof window.onload != 'function') {
 				window.onload = fn;
 			} else {
 				window.onload = function() {
 					oldonload();
 					fn();
 				};
 			}
 	},
    ```

    关键就是判断`window.onload`是否已经绑定了事件，如果没有就用`fn`替换。如果已经绑定了，就是执行之前的`onload`函数并执行`fn`
