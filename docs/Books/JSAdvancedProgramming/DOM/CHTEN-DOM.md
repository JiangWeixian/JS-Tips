# DOM
> 

## DOM层次

![dom层次](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH10-DOM/img/%E8%8A%82%E7%82%B9%E5%B1%82%E6%AC%A1.png)

上图可以看到很多`html`节点类型。

* element - 可以是`div or p`
* comment - 是文档注释，是html的注释，不是`js or css`
* attr也是节点的一种
* documentFragment - 创建文档片段，然后在文档片段中添加代码。然后见文档片段添加至`html`，在批量操作`dom`节点时候会用到。

以上通过`document.xx`来获取，结构函数可能不一样

获取之后可以通过：

1. nodeType
2. nodevalue
3. nodename
4. parentNode

来进行操作。

而节点之间的关系还可以有

![节点之间关系](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH10-DOM/img/%E8%8A%82%E7%82%B9%E4%B9%8B%E9%97%B4%E5%85%B3%E7%B3%BB.png)

以上可以通过节点属性来获取具有以上关系的节点。

## DOM操作

创建删除添加节点等。

可以创建`script`标签实现请求是比较特别的方法，同样适用`css`。

不过`css`在`head`，而`script`在`body`是通用的认知。

甚至可以通过`document.createTextNode`来添加代码。

## NodeList

nodelist理解。

通过document.getElementByTagName('p')返回的是`nodelist`。而且 **这是动态的**，文档变化同时也会跟着变化。