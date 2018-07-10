# Reg - 匹配规则

## 模式

* i - 忽略大小写模式
* g - 全局，string.replace中用到的比较多。如果开启了`g`模式，正则表达式内`()`分组操作就会失效，指的是没有办法操作分组。
* m - 多行模式
* y - 粘性模式，这个比较难以理解

   > 如果开启这个模式！第二次执行结果在上一次基础上。例如`var regex = /(\w+):(\/{2,3})(\w+\.\w+\.\w+)/`匹配`var url = "http://xxx.domain.com"`。此时没有开启`y`，那么都是`regex.match(url)`第一次，以及再一次`regex.match(url)`中`match[1]`都是没有变得。但是开启了`y`之后，`match[1]`在不断变化，分别为第一次匹配结果以及第二次


## 结果解释

* `var regex = /(\w+):(\/{2,3})(\w+\.\w+\.\w+)/` **整个表达式是一个匹配规则**
* `var match = regex.match(url)` - match可能为`0~xx`，即`match[0],match[1]...`

也就是说`regex.match(url)`我们想要的是对应`regex`规则的字符串。也就是`match[0]`，其中`value`为`http://xxx.domain.com`，因为这个`url`是符合`regex`规则的。

**而后面的match[1]...** 和`regex`密切相关，上图中一共三个分组，所以`match[1-3]`对应三个分组结果。