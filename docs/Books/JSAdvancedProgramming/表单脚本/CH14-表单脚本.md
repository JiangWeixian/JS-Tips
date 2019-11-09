# 表单脚本
> 和表单有关的操作

<!-- TOC -->

- [表单脚本](#表单脚本)
  - [前言](#前言)
  - [表单](#表单)
    - [表单属性](#表单属性)
    - [事件](#事件)
    - [表单序列化](#表单序列化)
  - [控件的共享字段](#控件的共享字段)
    - [HTML5](#html5)
  - [文本框](#文本框)
    - [富文本](#富文本)
  - [选择框](#选择框)

<!-- /TOC -->

## 前言

表单的涉及量很多，之所以在这里单独列出一章，可以类比`canvas`。

在表单之上实现独立的接口，就像是如果我们使用了`form input`，可以通过获取`form`其中一个属性来获取`input`，而不需要单独的通过`document.getElementxx`来获取其中的表单元素。

## 表单

### 表单属性

![表单属性](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH14-%E8%A1%A8%E5%8D%95%E8%84%9A%E6%9C%AC/img/%E8%A1%A8%E5%8D%95%E5%B1%9E%E6%80%A7.PNG)

* 其中控件指的就是`input`此类元素

### 事件

如果`form`中有`submit button`即使没有自定义在上面绑定事件。点击或者`enter`都会向浏览器发送数据，数据拼接的是控件`value`数据。

因此我们可以通过自定义`submit`事件，注意这个`submit`是绑定在`form`上面的，通过`submit button`触发而已。**当我们通过CH12说明的阻止方式来阻止默认行为的时候，以便实现前端的验证。**，然后通过`form.submit()`来自动触发。

类似的事件很多都可以通过这样的方式手动触发，比如`click() select()`，区别在于有些手动触发的还是会 **触发绑定的事件，而有一些不会。**就像是`submit`

1. 我们通过`addEvent..`来绑定事件，又阻止了默认行为
2. 然后`form.submit()`来手动提交
3. 要是第二点还是会触发第一点的话，那么`form.submit()`也会被阻止掉，所以`submit()`不会触发第一点的事件绑定

### 表单序列化

也就是前端预处理提交字段，进行`url`编码(不是只针对`url`)。

## 控件的共享字段

每个控件都会有的属性。

![共享字段](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH14-%E8%A1%A8%E5%8D%95%E8%84%9A%E6%9C%AC/img/%E5%85%B1%E4%BA%AB%E5%AD%97%E6%AE%B5.PNG)

意味着 **可以**在`html`阶段指定。

### HTML5

在表单上添加了很多字段API.

* required
* type = url or eamil
* pattern - 输入验证的正则表达式，当有这个`pattern`的时候，可以通过`checkValdity()`来验证某个控件是否有效。
* novalidate - 禁用验证

## 文本框

分为`input`和`textarea`两种模式。

可以选择`focus -> range`来选择文本字段，更多操作看书。

### 富文本

交互文本框。

无论是`iframe.designMode`还是`html5 contenteditable`方法，都是富文本。

默认自定义了一些方法，操作富文本。例如`document.execCommand()`来执行一些命令。(可能`document`**可能可以**变为某个富文本的元素，因为文中操作iframe的例子是`iframe.docuemnt.execCommad`)

## 选择框

指的是:

```html
<select>
  <option value="">name</option>
</select>
```

* 和表单一样，有默认属性，以及自定义方法，在某些操作上可以不使用`document dom`方法。
* 对于单选来说，设置`selected`为`true`会取消其他的选择