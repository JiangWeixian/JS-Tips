# 可维护代码

* 注释 - 函数注释，复杂算法注释，hack注释
* 变量名和函数名要直观，需要知道在干嘛
* 变量类型透明 - 因为`JavaScript`变量可以是任何类型，可以最好在初始化的时候指定类型，并且在运行过程中不要改变设置的变量类型。
* 使用`createDocumentFragment`来优化批量的`dom`操作，或者使用`innerHTML`
* 避免大量使用`document.getxx`来查找`dom`，可以保存`doc=document`
