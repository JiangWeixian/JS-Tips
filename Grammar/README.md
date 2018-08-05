<a href="https://github.com/JiangWeixian/JS-Tips/tree/master/Grammar#%E5%85%A8%E9%83%A8%E7%9B%AE%E5%BD%95"><img src="https://raw.githubusercontent.com/JiangWeixian/JS-Tips/master/img/javascript.png" height="44px" alt="js"></img></a>

<!-- TOC -->

- [**文章内容分类**](#文章内容分类)
  - [**继承与类**](#继承与类)
  - [**this**](#this)
  - [**作用域与闭包**](#作用域与闭包)
  - [**事件循环**](#事件循环)
  - [**性能与安全**](#性能与安全)
  - [**优雅的操作DOM**](#优雅的操作dom)
  - [**大数据**](#大数据)
  - [**简单算法部分**](#简单算法部分)
  - [**比较操作**](#比较操作)
  - [**基础坑**](#基础坑)
  - [**ES.next**](#esnext)
- [**待分类目录**](#待分类目录)

<!-- /TOC -->

# **文章内容分类**

## **继承与类**

> constructor私有，prototype共有

> new会让this变得不同

* [JS-操作对象proto](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-proto%E6%93%8D%E4%BD%9C%E6%8C%87%E5%8D%97.md)
* [JS-proto&prototype&constructor&new](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-__proto__%26%26prototype%26%26new.md) / 这三者有什么关系，在继承和类中起到了上面作用
* [JS高级程序设计-继承最佳实践](https://github.com/JiangWeixian/JS-Books/tree/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH4-%E5%8F%98%E9%87%8F%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%86%85%E5%AD%98) / 怎样继承方式才是最好的，以及不好的方式有哪些坑
* [JS-继承几种方式](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E7%BB%A7%E6%89%BF.md) / 简要说明了一下
* [JS-继承最佳实践解析](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E7%BB%A7%E6%89%BF%E4%BB%A5%E5%8F%8A%E7%B1%BB-%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%E8%A7%A3%E6%9E%90.md) / 为什么会出现那些坑
* [JS-ES6-class使用指南](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E7%BB%A7%E6%89%BF%E4%B8%8E%E7%B1%BB-classes6.md) / 拥抱未来的类与继承实现方式
* [JS-继承-继承概念关键字解释](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E7%BB%A7%E6%89%BF-%E5%85%B3%E9%94%AE%E5%AD%97%E8%A7%A3%E6%9E%90.md) / 几种继承分类，名词解释
* [JS-父类控制子类](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E7%B1%BB%E5%BA%94%E7%94%A8-%E7%88%B6%E7%B1%BB%E6%8E%A7%E5%88%B6%E5%AD%90%E7%B1%BB.md) / `new`如何操作`this`

## **this**

> 箭头函数与父类有关。非箭头函数要记住不同情况；**以及new关键字对`this`的影响**

* [JS-this情况汇总说明](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-this%E6%8C%87%E5%90%91%E6%80%BB%E7%BB%93.md) / 非箭头函数以及箭头函数`this`情况说明
* [call&apply&bind](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-call%26apply%26%E4%B8%8A%E4%B8%8B%E6%96%87%E7%8E%AF%E5%A2%83.md) / 改变this，但是要注意箭头函数的特殊
* [JS-父类控制子类](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E7%B1%BB%E5%BA%94%E7%94%A8-%E7%88%B6%E7%B1%BB%E6%8E%A7%E5%88%B6%E5%AD%90%E7%B1%BB.md) / `new`如何操作`this`。算是关于这方面的一个应用。

## **作用域与闭包**

> 在没有`let&const`的影响下，其他方式声明的变量函数都是属于当前 **函数作用域的。**；闭包应为获得另一个作用域的引用，而不应该仅仅局限于一种形式。

* [JS-变量提升](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87.md)
* [JS块级作用域](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F.md) / 特别是在`if(){}`声明函数
* [JS-let&const](https://github.com/JiangWeixian/JS-Books/tree/master/ES6%E5%85%A5%E9%97%A8/CH02-let%26const) / 并不是把当前`{}`中所有数据固定到块级作用域中；`let&const`没有声明提前。
* [JS-call&apply&bind](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-call%26apply%26%E4%B8%8A%E4%B8%8B%E6%96%87%E7%8E%AF%E5%A2%83.md) / 内含闭包一定要理解部分
* [JS-闭包与柯里化](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E9%97%AD%E5%8C%85-%E6%9F%AF%E9%87%8C%E5%8C%96.md) / 闭包的使用场景

## **事件循环**

> 浏览器端和Nodejs都有规则，浏览器端的规则更为清晰

* [JS-同步异步](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%90%8C%E6%AD%A5%E5%BC%82%E6%AD%A5.md) / 同步异步代码，下面提到循环基本解释的都是异步代码
* [JS-浏览器-事件循环](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-Promise%26EventLoop%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E9%98%9F%E5%88%97.md) / 解释了不同级别代码的执行顺序
* [JS-Nodejs-事件循环](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-Node%E7%9A%84Eventloop.md)

## **性能与安全**

> 内存与性能，避免空白

* [JS-基础类型-值类型](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B-%E5%80%BC%E7%B1%BB%E5%9E%8B.md) 
* [JS-基本类型和引用类型差异](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B-%E5%80%BC%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%E5%B7%AE%E5%BC%82.md) / 基本类型(简单提到了内存关系)，引用类型赋值不分配内存，值类型需要分配新的内存
* [JS-内存以及垃圾回收](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%86%85%E5%AD%98%E6%9C%BA%E5%88%B6%E5%92%8C%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.md) / 简单解释
* [JS-内存泄漏]()

## **优雅的操作DOM**

> 处理事件；操作DOM

* [JS-(事件捕获与冒泡)代理&委托](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E4%BA%8B%E4%BB%B6%E4%BB%A3%E7%90%86.md) / 解释了事件捕获与冒泡的不同，代理是较好的事件处理方式


## **大数据**

> JS处理数据要避免踩坑。字符串是大数据比较好的处理方式。

* [JS-浮点数陷阱](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E6%B5%AE%E7%82%B9%E6%95%B0%E9%99%B7%E9%98%B1.md) / 举例浮点相加时候的问题，以及应该如何解决
* [JS-大数据相加](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%AE%9E%E7%8E%B0%E5%A4%A7%E6%95%B4%E6%95%B0%E7%9B%B8%E5%8A%A0.md) / 如何处理超过安全数的数据
* [JS-Number-maxvalue&maxsafevalue&etc](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-Number-maxvalue%E7%9B%B8%E5%85%B3.md) / 解释JS如何存储数据，由`Number.MAX_VALUE`等入手

## **简单算法部分**

更多算法题目见[algo](https://github.com/JiangWeixian/Algo)

## **比较操作**

> 在JS进行比较可是一个大学问

* [JS-基本类型-valueof&tostring](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B-valueof%26toString.md) / 所有数据比较的时候逃不过`valueof&tostring`操作。所以你需要了解他
* [JS-Object-对象比较](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-Object-%E5%A6%82%E4%BD%95%E6%AF%94%E8%BE%83%E5%AF%B9%E8%B1%A1.md) / 对象是类，比较的是内存地址。进行了`sameobj or equalobj`的区分
* [JS-falsy&truthy]() / `if() Boolean()`等遵循的转换规则

## **基础坑**

* [JS-基础类型-值类型](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B-%E5%80%BC%E7%B1%BB%E5%9E%8B.md) 
* [JS-基本类型和引用类型差异](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B-%E5%80%BC%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%E5%B7%AE%E5%BC%82.md)
* [JS-Array-小坑](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-Array-%E5%B0%8F%E5%9D%91.md) / `index`未初始化
* [JS-Switch-小坑](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-switch.md) / `===`比较
* [JS-Date-小坑](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-Date-%E5%9D%91%E6%B1%87%E6%80%BB.md) / 初始化
* [JS-String-小坑](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-string-%E5%9D%91%E6%80%BB%E7%BB%93.md) / 正则
* [JS-Object-小坑](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%87%A0%E7%A7%8D%E8%8E%B7%E5%8F%96%E5%B1%9E%E6%80%A7%E6%96%B9%E6%B3%95.md) / 获取属性注意枚举自身父类等区别

## **ES.next**

> 关于`ES6`你一定需要掌握的

* [JS-解构析构](https://github.com/JiangWeixian/JS-Books/tree/master/ES6%E5%85%A5%E9%97%A8/CH03-%E8%A7%A3%E6%9E%84%E6%9E%90%E6%9E%84) / 与函数一起使用，优势明显
* [JS-ES6-class使用指南](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E7%BB%A7%E6%89%BF%E4%B8%8E%E7%B1%BB-classes6.md) / 拥抱未来的类与继承实现方式

**[🔝回到顶部](#以文章内容分类)**

# **待分类目录**

> 推荐一个学习[JS-编程挑战的好网站-codewars](https://www.codewars.com)

> 发现如果直接MDN看API例子你会学到很多

* [JS交集并集](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS%E4%BA%A4%E9%9B%86%E5%B9%B6%E9%9B%86%E7%AD%89.md)
* [JS-等待循环执行完毕](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E7%AD%89%E5%BE%85%E5%BE%AA%E7%8E%AF%E6%89%A7%E8%A1%8C%E5%AE%8C%E6%AF%95.md)
* [JS-模块话](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS%20-%20%E6%A8%A1%E5%9D%97%E8%AF%9D.md)
* [JS-光标操作range](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%85%89%E6%A0%87%E6%93%8D%E4%BD%9Crange.md)
* [JS-Array-随机排序](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-Array-%E9%9A%8F%E6%9C%BA%E6%8E%92%E5%BA%8F.md)
* [JS-export](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-export.md) / ES5&ES6模块导入导出
* [JS-严格模式初探](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F.md)
* [JS-进制转换](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E8%BF%9B%E5%88%B6%E8%BD%AC%E6%8D%A2.md)
* [JS-async&await](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-async%26await.md)
* [JS-debounce(防抖)&throttle(节流)](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-debounce%26throttle.md)
* [JS-Array数组去重](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-Array-%E5%8E%BB%E9%87%8D%E5%A4%8D.md)
* [JS-深度复制和浅度复制](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%AE%9E%E7%8E%B0%E6%B7%B1%E5%BA%A6%E5%A4%8D%E5%88%B6.md)
* [JS-Object.create浅复制并于assign对比](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E6%B5%85%E5%B1%82%E8%B5%8B%E5%80%BC%E4%B9%8BObject.create.md)
* [JS-Array-优先级排序](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-Array-%E4%BC%98%E5%85%88%E7%BA%A7%E6%8E%92%E5%BA%8F.md)
* [JS-Array-旋转升序数组最小值](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS/JS-Array-%E6%89%BE%E5%88%B0%E6%9C%80%E5%B0%8F.js)
* [JS-变量提升](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87.md)
* [JS-Array-二分查找](https://github.com/JiangWeixian/JS-Tips/blob/master/Grammar/JS-Array-%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.md)

**[🔝回到顶部](#全部目录)**



