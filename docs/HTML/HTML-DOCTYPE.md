# DOCTYPE
> <!DOCTYPE>有啥用

- [DOCTYPE](#doctype)
  - [前置知识](#前置知识)
    - [DTD](#dtd)
    - [SGML](#sgml)
  - [DOCTYPE作用](#doctype作用)

## 前置知识

### DTD

[DTD](https://zh.wikipedia.org/zh-hans/%E6%96%87%E6%A1%A3%E7%B1%BB%E5%9E%8B%E5%AE%9A%E4%B9%89)全称是`document type definition`。可以定义`HTML`有那些元素可以用，以及一些元素细节上东西。

### SGML

`XML`是`SGML`子集，`HTML`维基百科上说是`SGML`的应用。

**和DTD之间关系**

由于`DTD`定义`SGML`类型，也就是`SGML`中那些是可用。在**HTML5**之前，`HTML`是和`SGML`有关。所以也就可以通过`DTD`定义`HTML`类型。可以参考这篇[链接](https://stackoverflow.com/questions/21566680/what-is-the-meaning-of-dtd-and-sgml-in-html)

## DOCTYPE作用

定义`HTML`是哪个版本的`HTML`的。

或者说文档类型以及`DTD`。

> **💡 NOTE**  
`<!DOCTYPE HTML>`定义使用`HTML5`。这也是`HTML5`唯一方式。

而其他情况就不再是**HTML5**情况了，利用`DTD`定义`HTML4`或者其他`HTML`版本。
