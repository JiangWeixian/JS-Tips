# 几种查看属性的方法
> hasOwnProperty&in&Objet.keys()

* `Objet.keys()/values/enties` - 自身所有可以枚举的属性，在`__proto__`之外的，不再`__proto__`之内。返回一个`array`。同样也不会检查`prototype`中方法。
* `hasOwnProperty` - 和上一个差不多，不过检测的是单个，并返回真假
* `in` - 会检查`__proto__`内，且会一直往上检查。

见[JS-proto&prototype&constructor]()