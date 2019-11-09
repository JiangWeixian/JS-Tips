# DOM扩展
> 在CH10之后添加的方法; 

## 添加扩展方法

* querySelectAll之类的 - 和documenet.getxxx区别在于这个只是 **快照**。只有在再次调用的时候才会更新`nodelist`
* 和前一点类似，具有关系的节点如`lastChild`接口属性也有对应的 **快照属性节点**。

## HTML5

* getElementByClassName
* classlist
  * remove
  * add
  * toggle
  * contains
* 任何元素的`focus`方法
* document.readyState
* 自定义属性 - data-xx，通过`element.dataset.xx`获得
* innerHTML or outerHTML - 替换某节点父类节点下面的所有节点
* innerText or outerText - 某些表现上和上面一点很像，但是这个会编码，也就是不会插入节点。
* contains - 判断节点是否包含关系，还有`compareDocumentPosition`来判断，具体看书。

**下面这个可能要特别注意**

* `scrollToView` - 节点方法。让某个节点滚动到视图出现的位置。
* scrollByPages
* scrollByLines

第一个方法最常用
