# Nodejs - path
> 大部分接口函数都很好理解

## 速写

* 解析路径，获取各部分信息 - `parse`
* 以及分别获取路径中的部分信息的接口函数 - `dirname basename etc`。由于`windows`系统和`linux`系统区别，这里也做了对应适配。请注意
* `windows`系统和`linux`系统的不同，设计了对应的接口，比如`win32 poxix`。以及获取当前运行平台的风格符号。
* 格式化 - 根据当前系统风格格式化
* 判断 - 判断是否是绝对路径，注意不是判断文件信息

**理解，path.relative**

```JavaScript
path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// 返回: '../../impl/bbb'
```
也就是如果假设你在`/data/orandea/test/aaa`，想要访问`/data/orandea/impl/bbb`。那么对应的相对路径是什么。

**理解，path.resolve() path.join**

`path.join`简单拼接字符串，以路径的格式。适配性很高，不用担心。

`path.resolve`是对参数从右边到左边读取的，**目的是为了得到一个绝对路径！**

所以如果从右边到左边已经遇到一个绝对路径的参数，那么就会停止函数并返回结果，不会继续。**就像是下面代码的第2个函数**

而第1个函数，由于`./baz`是相对的，而`/foo/baz`是绝对的(即使前面还有其余参数，也只会解析到这)，所以将 **/foo/baz作为根目录解析`./baz`**。

> 由于是`./`，所以认为`foo/baz`是根目录

> 同时如果第`./baz`是`../`开头的话，认为`/foo`是根目录。返回结果是`/foo/baz`，可以感受一下区别。

第3个函数，由于全部都 **没有以/**开头所以都认为是 **相对路径**。所以只要把当前文件所在作为根目录。例子假设是 `/home/myself/node`

1. 从右边到左边解析，`../`认为 **前一个`static_files/png/`的`static_files`是根目录。** 此时得到`static_files/gif/image.gif`
2. 对于`static_files/gif/image.gif and wwwroot`虽然是相对的，但是没有`.. or .`所以直接拼接。
3. 最后和工作目录拼接，得到`'/home/myself/node/wwwroot/static_files/gif/image.gif'`

```JavaScript
path.resolve('/foo/bar', './baz');
// 返回: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// 返回: '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// 如果当前工作目录为 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
```