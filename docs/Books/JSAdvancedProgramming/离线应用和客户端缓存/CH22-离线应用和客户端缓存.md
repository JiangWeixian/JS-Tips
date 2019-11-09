# 离线应用和客户端缓存

<!-- TOC -->

- [离线应用和客户端缓存](#离线应用和客户端缓存)
  - [离线状态](#离线状态)
  - [应用缓存](#应用缓存)
  - [数据存储](#数据存储)
    - [cookie&session&localStorage&sessionStorage](#cookiesessionlocalstoragesessionstorage)
    - [indexDB](#indexdb)

<!-- /TOC -->

## 离线状态

`navigator.online`检测是否在线。

## 应用缓存

[xx.manifest]()

通过修改`manifest`或者通过`api`来实现更新。

* 修改`manifest`触发`updateready`事件，然后手动调用代码`applicationCache.swapCache()`更新
* 可人工干预使用`applicationCache.update()`跳过检查过程更新

## 数据存储

### cookie&session&localStorage&sessionStorage

四种方式初步解析见[地址]()

**这里再详细说明以下cookie使用规则！**`cookie`并不是一个很直观的使用方式，很不人性。`cookie`的格式如下：

```JavaScript
name=value;expires=expiration_time;path=domain_path;domain=domain_name;secure
```

键值之间使用`=`，不同数据之间使用`;`

* cookie的名字通过`name=value`指定，**其中`name`部分可以叫不同的名字，`value`部分可以很长，用来存储数据。**后面的字段是默认提供的，**除了name是必须之外，后面字段都是可选的**
  * `expires`是到期时间
  * `path=domain_path;domain=domain_name` - **用来区分不同的`coookie`**
  * `secure`是安全认证，以怎样的方式发送cookie

**保存、修改、删除的方式：**

在使用的时候，你需要以上面的格式 **拼接字符串**。`name or value`都是要结果`url`编码(就是编码`url`的那个函数)。最后数据变为下面的`xxx`

```JavaScript
document.cookie=xxx
document.cookie=xxx
document.cookie=xxx
```

由于`cookie`通过`path=domain_path;domain=domain_name`区分`cookie`，那么就可以得到结论：

1. 如果修改 **同一个**`cookie` - `path=domain_path;domain=domain_name`字段相同，其他字段不同
2. 如果删除 - 就是设置`expires`
3. 如果设置新的`cookie` - `path=domain_path;domain=domain_name`不同就行

**获取的方式**

首先要知道 **浏览器是如何保存`cookie`**，其实不同的`cookie`是全部拼接为字符串了。至少如果你通过`document.cookie`来获取`cookie`的时候，返回的结果是这样的。

浏览器会匹配`path=domain_path;domain=domain_name`地址如`www.baidu.com/xxx`来自动发送`cookie`。

**如果我们想要获取不同`cookie`**

也就是通过`name`来查找`cookie`，例如`book=xxx`和`job=yyy`就是通过查找`book or job`。然后来找到对应`value`。

### indexDB

一种永久离线存储方案，**更大量的存储**。

可以从浏览器控制台`console`后台看到一个`indexDB`数据库。可以理解为建立在 **浏览器的数据库。**比前面几种数据存储方式，可以实现更为复杂的数据存储。

我没见到过实际提到的 **使用实例。**

文中给出了如何操作的教程。


