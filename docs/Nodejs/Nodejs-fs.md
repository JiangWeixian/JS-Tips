# Nodejs - fs
> 入门

## 速写

> 接口函数一般都有对应的异步和同步版本。带有`sync`才是同步的，不带有的一般是异步的。

> 异步在回调函数中获得返回结果。有些接口函数本身就不应该有返回结果的，例如修改一些信息。那么此时异步回调函数是用来干嘛的。**异步的作用是为了防止函数出错了然后导致服务器终端！** 对于本不应该有返回结果的函数来说，异步回调可能只会接受一个`err`，而同步版本的就没有返回值。

* 文件权限检测 - `access and stat`。前者简单检测文件是否存在(可判断读写权限)，后者可以在存在基础上进一步进行复杂操作(例如判断文件还是文件夹)；还有`exitsSync`更为简单的判断文件是否存在，异步版本已经没有了。
* 删除文件/删除文件夹 - `unlink & rm`
* 监听 - 监听文件变化，`watch & watchfile`。前者文件夹下所有，后者文件。**不过后面文件更为稳定一些**
* 带有`stream`的结构函数，虽然没有回调函数，但是可以通过`on`来设置监听函数，所以还是一个异步的接口函数。**读大文件或者频繁的写操作的时候都会创建流**
* 修改文件 - 文件一些基本信息都可以修改，例如文件名，事件，所有者，权限等。

**文件描述符&文件句柄(一个东西)**

> 在`api`函数中指的是`fd`参数。以`f`开头的函数以该参数作为参数，**就我看来好像就`open`函数** 会返回`fd`(异步在回调函数中)