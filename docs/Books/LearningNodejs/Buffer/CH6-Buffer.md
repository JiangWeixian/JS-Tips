# 理解Buffer

## Buffer

* 打印出来的是16进制的两位数，代表`0~255`
* 每一位代表一个字节，分配数据也是通过字节数分配

### Buffer2String

* toString() - 需要指定编码格式，并不是所有编码格式都是可以的。`buffer`的相加隐含了`toString`操作。
* 对于中文文件章中文读取，设置`stream`编码格式可以避免乱码。**乱码原因在于读取stream-buffer使用了+，来进行字符串拼接。**然而每个中文字节数和英文不同，每次都出来的`buffer`不能够形成全部的中文字符串。文中使用`iconv`进行`buffer`的转移。


### String2Buffer

new Buffer(str)

## Buffer性能

**网络传输**

网络传输的是`buffer`，事先转换为`buffer`可以提高性能。

**文件读取**

可以设置每次读取的`buffer`长度，越长读取越快。