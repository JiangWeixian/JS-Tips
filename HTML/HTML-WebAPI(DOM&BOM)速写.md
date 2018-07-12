# 1. WebAPI - DOM速写
> 来自[@MDN-WEBAPI](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model)。背下来吧，可以的！

<!-- TOC -->

- [1. WebAPI - DOM速写](#1-webapi---dom速写)
  - [1.1. 结构](#11-结构)
  - [1.2. EventTarget](#12-eventtarget)
  - [1.3. Node](#13-node)
  - [1.4. Document&Element](#14-documentelement)
    - [1.4.1. Document](#141-document)
    - [1.4.2. Element](#142-element)
  - [1.5. HTMLElement](#15-htmlelement)
  - [1.6. MathML](#16-mathml)
  - [1.7. 区分](#17-区分)
- [2. WebAPI - Window速写](#2-webapi---window速写)
  - [2.1. NOT location&navigation](#21-not-locationnavigation)
  - [2.2. Location](#22-location)
  - [2.3. navigation](#23-navigation)
  - [2.4. 一些硬件API](#24-一些硬件api)

<!-- /TOC -->

## 1.1. 结构

1. EventTarget
2. (继承自EventTarget)Node - 可以操作Node类型以及Element类型(适用于一些获取文档元素的接口返回数据类型)。
3. (继承自Node)document&Elememt - 只能够是Element类型(同上)(但是由于是继承的关系，所以能够获取Node类型也不奇怪，这个规则主要用于记忆接口函数名，以及 **Node可没有Element接口函数**)
4. (继承自Elememt)HTMLElement

## 1.2. EventTarget

最重要的是`event`部分。`event`比如`mouseevent or keyboardevent`都是一系列事件的指代。就像是keyboard事件可以包括keypress等事件。而在`keyboardevent`事件上面的属性是可以共用到在大类事件上面的属性。

* 捕获冒泡 - 状态以及取消(不同浏览器以及IE)
* 事件发生状态
* 事件发生目标
* 事件类型

## 1.3. Node

> 可以操作Node类型以及Element类型(适用于一些获取文档元素的接口返回数据类型)。例如Node.childNodes以及childElements。但是Element只有children，返回Element类型；像Node.firstChild，Element.lastElementChild之类。

* 属性 - 根/父/子/兄弟，本身的一些属性
* 操作节点 - 子(替换删除插入)/本身
* 比较 - 位置/相等/包含
* 内容 - 非替换元素里面的内容

## 1.4. Document&Element

### 1.4.1. Document

* 结构
* 文档类型 - HTTP部分传输属性
* 可视化
* 扩展部分

### 1.4.2. Element

* 盒子模型 - 本身/位置数值(相对于viewport) - **这里的clinetHeight是内容加上padding**
* 属性 - 标签属性(获取设置判断)/(子/兄)
* 获取节点
* 操作节点/内容 - 子(替换删除插入)/本身
* 滚动 - 数值(Top not x)和方法
* 动画

对Node来说增加了很多内容。

## 1.5. HTMLElement

可以理解为HTML5。一些新属性新方法，但是不止这些。

* HTML5 - 新属性: tab title style 富文本框 拖拽
* 盒子模型 - 本身/位置(相对于父类)**这里的offsetHeight是内容加上padding加上border**

## 1.6. MathML

写数学公式，使用的标签的方式

## 1.7. 区分

* NodeList以及HTMLCollection - 前面是`node list`，后面是`element list`。区别在于后面那个一定是动态，前面不一定。通过属性`.`获得的`node or element list`一定是动态的。

# 2. WebAPI - Window速写
> 第一部分是DOM；第二部分是BOM(可以理解为软件部分)；

## 2.1. NOT location&navigation

除了标题两个元素之外。

* 从看到的浏览器窗口从左向右记忆
* 标签
* 三个按钮 - 最大最小关闭
* 视图部分 - 大小/分辨率/滚动(还可以含有动画的滚动)/fragment
* 存储部分 - 历史记录等
* Base64编码


**注意如何通信部分。**

## 2.2. Location

url地址栏。

* 主要href search hash
* url地址部分能够获得基本都有

## 2.3. navigation

可以理解为软件。

* 浏览器信息 - 请求头里面那部分
* 版本/文件名
* 网络信息
* 浏览器插件

## 2.4. 一些硬件API

* 定位
* 感知器 - 光/方向
* 文件处理
* 推送
