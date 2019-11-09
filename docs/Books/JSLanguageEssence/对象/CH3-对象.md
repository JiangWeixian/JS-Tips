# CH3 - 对象
> 依旧是prototype部分需要特别注意

## prototype方法

更详细见-[JS高级技巧-CH6继承]()

再巩固几点：

* `hasOwnProperty`只会检查自己的，而不会检查`prototype`上
* `for in`会检查自己和原型
* `delete xx.name`删除属性，只会删除自己的，而不会删除`prototype`上。
* `window.onload = function`里面执行的函数创建的变量 **不会覆盖到全局**