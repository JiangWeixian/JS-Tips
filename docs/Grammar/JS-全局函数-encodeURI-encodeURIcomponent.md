# encodeURI()&encodeURIComponent()
> 对应的decode方法就是以上相反，暂且不表

## 异同

**关键字：`encode`, `uri`，`uriComponent`**

* 两个都是编码函数 - 针对都是 **特俗字符**
* `uri` - 指的是非url部分

    > 对于一个url地址，有很多特殊字符，使其构成url地址。**所以对那些对url有帮助的特殊字符不编码。但是对那些对url无意义的特殊字符需要编码**
    
* `uriComponent` - 结合`uri`理解

    > 对所有特殊字符都会编码，无论是否对url有意义与否