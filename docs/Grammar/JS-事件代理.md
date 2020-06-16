# 事件代理
> 注意区分IE浏览器

- [事件代理](#事件代理)
  - [前置知识 - 名词解释](#前置知识---名词解释)
  - [前置知识：事件捕获和冒泡](#前置知识事件捕获和冒泡)
  - [1.3. 添加事件监听 - 解释捕获和冒泡](#13-添加事件监听---解释捕获和冒泡)
    - [1.3.1. 总结](#131-总结)
  - [1.4. 事件代理 || 事件委托](#14-事件代理--事件委托)
  - [1.5. Q&A](#15-qa)
    - [1.5.1. IE - 没事别理它](#151-ie---没事别理它)

## 前置知识 - 名词解释

* 事件捕获和冒泡 - 代表两个事件发生阶段，见下面[事件捕获和冒泡]()
* 事件监听 - 见[添加事件]()
* 事件代理和事件委托 - 两个就是同一个东西，见[事件代理or事件委托]()

## 前置知识：事件捕获和冒泡

[参考链接](http://blog.xieliqun.com/2016/08/12/event-delegate/)

1. 在MDN中规定通过`addEventListener`添加的事件是默认冒泡的。
2. 捕获冒泡简单区分 - 代表 **元素A** 添加的监听函数应该在那个阶段发生(**针对click并不是以元素A为目标的时候才有这么一说**)，见下面小结解析。
	* 捕获阶段，从上到下，达到点击目标节点过程
	* 冒泡阶段，就是从目标事件节点开始向上触发
	* 监听函数的捕获和触发性质，就代表了哪个阶段发生

## 1.3. 添加事件监听 - 解释捕获和冒泡

> 注意上面提到的捕获冒泡阶段，以及元素的捕获性质事件以及冒泡事件

`W3C`规范的方式[@MDN-addEventListener](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)是：

```javascript
element.addEventLister(event, function, useCapture)
```

前两个参数很好理解:

* event - `click`
* function - 传递默认参数`window.event`，如果想要传递其他参数，可以参考[demos-drag](https://github.com/JiangWeixian/JS-Tips/blob/master/docs/Demos/content.md)
* useCapture - `true`代表的捕获，`false`代表冒泡

除了这三个之前还可以设置其他泪如 **once=事件只发生一次就移除的属性**。见[@MDN-addEventListener](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

**事件发生的三个阶段**

当你通过添加事件监听函数如：

```JavaScript
document.body.addEventListener('click', function (e) {
    alert('cancel')
})
```

可以通过`e.eventPhase`来查看当前`click`达到了那个阶段。就像是下图说明的那样。分别是`click`这个 **动作**到达目标之前的 捕获阶段、发生阶段以及到达之后开始冒泡阶段。

![eventflow](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)

**第1阶段 - 捕获含义：**

以[例子-capture.html-测试捕获]()说明。

如果在`p1`添加了事件监听函数，此时如果我们点击了`p1`。**结合提到的`click`动作的三个阶段。**

1. 因为这个`click`动作在达到 **目标`p1`**(因为我们点击的是这个)**元素之前**，`p1`之前的会经历`click`这个动作 **eventphase=1**的捕获阶段。
2. (如果在 **`p1`节点之前有`body`的事件监听函数**，并设置了`true`代表的捕获)**那么代表`body`的事件监听会在`click`eventphase=1阶段发生**，`click`在到达目标元素之前可能会经过这个元素，那么这个 **非点击目标元素就会被触发`click`事件**

因此我们可以得到一个结论，对于一个事件(假设是`click`)应该剥离出三个概念，分别是：

1. `click`这个动作
2. 元素的`click`监听事件
3. `click`达到目标元素的三个阶段

**第2阶段 - 发生含义：**

**click**达到了目标`p1`之后，由于`p1`就是我们点击的目标，**无所谓其`useCapture`是`true or false`都会发生**

**第3阶段 - 冒泡含义：**

由于事件默认有冒泡行为。所以达到了目标`p1`之后，事件都会触发冒泡行为(除非你手动阻止了它)

结合第1阶段例子，如果我们设置`body-useCapture=false`意味着它是`click`这个动作在达到目标之后，然后开始冒泡，冒泡阶段(eventphase=2阶段)遇到了`body`那么`body`上面的事件就会触发。

以[例子-capture.html-测试冒泡]()说明。

**题外话**

以[例子-capture.html-中途中断冒泡]()

既然事件有默认的冒泡行为，那么设置场景，到达目标`p1`之后，事件开始冒泡，可达到`body`元素。如果在冒泡阶段，`p1 and body`之间还有元素可以在冒泡阶段触发本身的监听函数。

**那么是否可以在`div1`阶段阻止，而不是在目标的`p1`元素阻止?**

答案是可以的。在例子中，可以看到`body`监听事件本应该在冒泡阶段发生，现在被禁止了。

### 1.3.1. 总结

如果`click`(以点击行为为例子)不是以A元素为目标。

一个捕获事件(添加在B元素上`capture=true`的监听事件)，会在`click`(以点击行为为例子)达到A元素之前发生(如果B元素处于点击达到A元素的路径上的话)

一个冒泡事件(添加在B元素上`capture=false`的监听事件)，会在`click`(以点击行为为例子)达到A元素之后，开始冒泡。(如果B元素处于冒泡路径上的话)

## 1.4. 事件代理 || 事件委托

> 说的是同一件事情；算是一种添加事件监听函数的技巧。

如果需要给100个元素添加监听函数，添加100监听事件的消耗是巨大的。

所以可以选择在父类添加监听函数。

1. 当我们点击目标元素(100个其中一个)，本身没有监听函数触发，但是 **冒泡是默认行为**。会将行为冒泡到父类元素
2. 父类元素设置监听函数在 **冒泡阶段触发**

普及一个event的知识点，除了event查看事件发生阶段之外。**还可以通过event.target(IE是srcElement)来查看期望事件的目标** 在上面这个例子中就是100个元素中的其中一个。

同时可以通过`event.currentTarget`来查看当前监听函数绑定的目标。

**如果点击目标上有监听函数的话，这两个数值是一样。显然上面的情况不是**

见[JS-proxy.html]()

## 1.5. Q&A

**Q&A - 与xx.onclick方式相比的优势：**

这里特别说明的是`addEventListener || attachEvent`的方式。而不是经常使用的`onclick`此类写事件的方式。

前者`addEventListener || attachEvent`是事件监听的方法，优势在于：

* 可以在同一个元素上绑定多个`click`（以`click`举例），而`onclick`方法只会让后者覆盖前者
* 有解除事件代理的函数，提高网页性能。`removeEventLister || dispatchEvent`

**Q&A - 捕获和冒泡可以同时存在吗**

由以上例子可以看到，其实对于同一个事件监听函数来说的话。是没有办法同是存在的。

**但是由于addEventlistener可以在同一个元素添加多个监听事件**，所以可以通过这种方式使得一个元素的监听事件可以在捕获冒泡两个阶段触发。

见[例子-capture.html-测试捕获冒泡]()说明。

### 1.5.1. IE - 没事别理它

而`IE`这个特别的小伙就是要和别人不一样

* event - 必须加上`on`变为`onclick`
* 以及使用的是`attachEvent`

**注意**，回调函数最好加上名字`function name() {}`不然是不太好`remove || dispatch`

