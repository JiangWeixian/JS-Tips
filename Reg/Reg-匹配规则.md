# Reg - 匹配规则

## 模式

* i - 忽略大小写模式
* g - 全局，string.replace中用到的比较多。**是否多次匹配`regex`整个表达式结果**
* m - 多行模式
* y - 粘性模式，这个比较难以理解

   > 如果开启这个模式！第二次执行结果在上一次基础上。例如`var regex = /(\w+):(\/{2,3})(\w+\.\w+\.\w+)/`匹配`var url = "http://xxx.domain.com"`。此时没有开启`y`，那么都是`regex.match(url)`第一次，以及再一次`regex.match(url)`中`match[1]`都是没有变得。但是开启了`y`之后，`match[1]`在不断变化，分别为第一次匹配结果以及第二次


## 结果解释

* `var regex = /(\w+):(\/{2,3})(\w+\.\w+\.\w+)/` **整个表达式是一个匹配规则**
* `var match = regex.match(url)` - match可能为`0~xx`，即`match[0],match[1]...`

也就是说`regex.match(url)`我们想要的是对应`regex`规则的字符串。也就是`match[0]`，其中`value`为`http://xxx.domain.com`，因为这个`url`是符合`regex`规则的。

**而后面的match[1]...** 和`regex`密切相关，上图中一共三个分组，所以`match[1-3]`对应三个分组结果。

## 容易忽略的Points

* `[0-9]`等价`\d`，虽然是一句废话。但是有一个隐含的意思就是`[0-9]`**匹配是单个数字，并不是一组数字。**。所以想要匹配一组数字必须`[0-9]+ or \d+`

## 简单应用

* [reg-parseint.js](https://github.com/JiangWeixian/JS-Tips/blob/master/Reg/JS/reg-parseInt.js) - 实现仅仅实现字符串类型数字到10进制数字转换