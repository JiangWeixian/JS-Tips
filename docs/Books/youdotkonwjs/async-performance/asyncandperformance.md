# 你不知道的JS
> asyncandperformance

<!-- TOC -->

- [你不知道的JS](#你不知道的js)
    - [1. CH1 - ASYNC(异步)](#1-ch1---async异步)
        - [1.1 控制台](#11-控制台)
        - [1.2 Event Loop(事件轮询)](#12-event-loop事件轮询)
    - [2. CH2 - CallBack(回调)](#2-ch2---callback回调)
        - [2.1 解决方案](#21-解决方案)
    - [3. CH3 - Promise](#3-ch3---promise)
        - [3.1 Promise解释](#31-promise解释)
            - [3.1.1 创建Promise](#311-创建promise)
        - [3.2 Promise Tips](#32-promise-tips)
        - [3.3 Promise warns](#33-promise-warns)
    - [4. CH4 - 生成器/迭代器](#4-ch4---生成器迭代器)
        - [4.1 初步使用生成器](#41-初步使用生成器)
            - [4.1.1 SomeTips](#411-sometips)
            - [4.1.2 Mutil yeild](#412-mutil-yeild)
            - [4.1.3 异步](#413-异步)
            - [4.1.4 生成器+Promise](#414-生成器promise)
            - [4.1.5 生成器委托](#415-生成器委托)
        - [4.2 迭代器（iterator）](#42-迭代器iterator)
            - [4.2.1 生成器+迭代器](#421-生成器迭代器)
    - [6. CH6 - 程序性能](#6-ch6---程序性能)
        - [6.1 基础分析](#61-基础分析)
            - [6.2 一些忠告](#62-一些忠告)

<!-- /TOC -->

## 1. CH1 - ASYNC(异步)

写`JavaScript`代码的时候会发现，其实有些代码是同步执行的。说法其实不太准确，因为这个`event loop`有关。先简单说明：

* 首先，`JS`代码执行顺序是和书写顺序无关的。
* 每一段执行的代码都会放到`event loop`里面，而书写顺序就可能代表了`loop`队列内顺序，这就是为什么看起来就是和书写顺序有关。**这里暂时先讨论主线程内的代码**

### 1.1 控制台

还有一个问题是需要了解的是`console`其实并不是`JavaScript`官方内容，所以不同浏览器可能有不同标准。文中推荐使用**断点调试**。

除了这个之外，`console.log`其实算是异步系统。个人认为算是级别最高的异步系统。

### 1.2 Event Loop(事件轮询) 

和代码书写顺序什么关系？

首先代码书写顺序把事件压到了`event loop`中，如果在`event loop`中存在a事情没有干完。那么就会被挂起，执行下一件b事件。等待下一次轮询。

因此这就有点像是竞争关系，在主线程的两段代码同时运行。并不会等待其中一个完成然后再去完成下一次，这就是为什么看起来像是同时运行的代码。

## 2. CH2 - CallBack(回调)

1. 介绍了回调函数原理（看不太懂..）
2. 回调函数的问题所在：
    * 一但回调变多，简直就是地狱
    * 回调函数要是第三方的，就会变得很麻烦。非常的掣肘。除非回调函数中有设置错误情况的处理，不然正确或者错误都交给一段代码，是非常不合理的。

其中还举例，可以帮助第一章理解问题：

```JavaScript
doA( function(){
	doB();

	doC( function(){
		doD();
	} )

	doE();
} );

doF();
```

执行循序为：

* doA()
* doF()
* doB()
* doC()
* doE()
* doD()

### 2.1 解决方案

`ES6`的`Promise`

* 解决第三方信任问题 - 自我设定了`fail`和`success`该怎么办。而不是让所有问题都在同一个回掉中处理。
* 以及更加简介，不容易后多个回调导致**代码不易阅读**

## 3. CH3 - Promise

`Promise`是比回调函数更好用的设置。`Promise`的起因就是JavaScript并不能保证代码一条条的被执行，有的时候是同步执行。

博主[解释地址](https://wohugb.gitbooks.io/ecmascript-6/content/docs/promise.html)

### 3.1 Promise解释

大致的使用就是：

```JavaScript
P
.then(
    function () {},
    function () {}
)
```
成功时候调用一个，不成功的时候调用一个。

具体使用还是看具体代码吧。书中讲的例子太抽象。

例子为：

```JavaScript
var getJSON = function(url) {
  var promise = new Promise(function(resolve, reject){
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.status === 200) { 
              resolve(this.response); 
          } else { 
              reject(new Error(this.statusText)); 
          }
    };
  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});
```

#### 3.1.1 创建Promise

* 通过`new Promise`可以创建
* `var a = Promise.resolve(参数)`

### 3.2 Promise Tips

* `Promise.all` - 传递的不仅仅只是`promise`的函数
* 链式使用`Promise`，方法就是`function`中返回一个`new Promise`或者`return Promise.solve`，然后就可以在外部`.then`链式调用了。**通过new promise方法继续一个promise，resolve不传递参数也是可以使用的**
* 还有其他方法，例如`.then/.resolve/.reject/.finaly/.race`
  * `finaly`类似`try catch`无论如何都会被调用。但是同样也可以在其后使用`then`
  * `race`只要有其中一个完成了就接下去传递
* 还有一个`.async`值得看一看

### 3.3 Promise warns

* `Promise`会吞掉所有的`error`，也就是说如果在`resolve`状态发生的`error`是不会被`reject`捕获的。
  * 如果在`Promise`外面加上`try catch`是否可以捕获异常。应该是不可以的，因为一个是同步一个是异步。除非在`Promise`下使用。
* `Promise`只能够被单次解析，一个`Promise`只能够被调用一次。除非创建函数`a`，函数作用就是在被调用的时候返回一个新的`promise`  
* 目前还没有`map`方法 - 只能够自己实现
  ```Javascript
  if (!Promise.map) {
	Promise.map = function(vals,cb) {
		// 一个等待所有被映射的promise的新promise
		return Promise.all(
			// 注意：普通的数组`map(..)`，
			// 将值的数组变为promise的数组
			vals.map( function(val){
				// 将`val`替换为一个在`val`
				// 异步映射完成后才解析的新promise
				return new Promise( function(resolve){
					cb( val, resolve );
				} );
			} )
		);
	};
  }
  ```
  这里有一个很关键的一点就是`cb`，这个决定了这是一个异步的方法。能够实现**在迭代完成之前**每次迭代都调用，类似`gernerator`。
  能解决**使用一个循环，每次循环进行一些操作(可能是promise)。在循环结束之后把值传递下去。**
* `Promise`没办法被外部打断

## 4. CH4 - 生成器/迭代器

生成器是`generator`，迭代器是`iterator`。

什么是生成器，对比`python`。简单来说，还有`yield`和`next`的是生成器。

说实话，这一章内容实在太难了。所以且看看，用到的时候，再说。所以，多试试`yield`？

### 4.1 初步使用生成器

定义迭代器函数方法为：

```JavaScript
var x = 1;

function *foo() {
	x++;
	yield; // 暂停！
	console.log( "x:", x );
}

function bar() {
	x++;
}
```

其中`yield`相当于一个断点。

#### 4.1.1 SomeTips

* 运行生成器函数通过`var it = foo()`，`foo.next()`。执行`yield`之前代码，再一次`.next`执行后面的代码。
    * 可以接受参数**但是仅仅局限在第二个next之后，第一个不需要输入参数。**总结来说，就是一次`next`执行一次`yeild`的代码。
* 生成器返回类型特别，是`object`。**含有一个value以及状态**。而不是按照函数中返回数据。
* 迭代通信 - 非常棒的功能，前一次迭代和后一次迭代通信。通信含义是获取`next`输入的参数，中间的链接是通过`yeild`和`return`。
    * 我们每次`next()`都会有一个返回状态，这个状态是谁给的？答案是`yeild`和`return`。进行一次`next`之后都会得到`yeild`返回的东西。
    * 而最后一次`next`后面是不存在`yeild`。那么其状态就是通过`return`返回。
    * 而在`next(a)`中传递的`a`参数会被插入到`yield`中。相当于`yield`变为了一个插槽。
    * 假设没有`return`，那么我们可能只能通过传递上一次得到的结果。作为这一次迭代器的输入，才能达到通信的目的了。
* 迭代器并不是只有`next`一个关键函数，还有`throw`抛出异常的函数。
* 如果记得没错，迭代器和生成器都有一个状态**表明是否`next`运行到最后。**具体查看文档。

#### 4.1.2 Mutil yeild

指的是一个迭代器函数内部具有多个`yeild`。

#### 4.1.3 异步

以前，使用`nodejs`写微信公众号后台时候。记得用到了`yield foo()`此类类似的代码。相当于执行到第一个`yield`，并获取返回数值。

异步，也就是利用`yield`此种具有中断性质的实现的。

#### 4.1.4 生成器+Promise

文中认为这是最棒的东西。

要`yield`和`return`共同使用，关键在意`yeild Promise`。

#### 4.1.5 生成器委托

看不懂

### 4.2 迭代器（iterator）

迭代器更加复杂，相较于生成器。感觉是进阶版本，普通的`yeild`和`next`的特征无法判断是否是迭代器。

那么如何判断一个变量是否是迭代器（因为迭代器有自身的函数属性，可以调用），迭代器的特征是`Symbol.iterator`。可见它是属于`symbol`的。一般也会在变量的`__proto__`中。

#### 4.2.1 生成器+迭代器

如果我们自定义迭代器，往往代码结果比较复杂。

我们可以使用`yeild`来简单利用生成器的只是，构造我们的迭代器。代码如下：

```JavaScript
function *something() {
	var nextVal;

	while (true) {
		if (nextVal === undefined) {
			nextVal = 1;
		}
		else {
			nextVal = (3 * nextVal) + 6;
		}

		yield nextVal;
	}
}
```

如果让上述函数使用迭代器的特有函数，文中举例如下：

```JavaScript
for (var v of something()) {
	console.log( v );

	// 不要让循环永无休止！
	if (v > 500) {
		break;
	}
}
// 1 9 33 105 321 969
```

* 由于函数内部有`while(true)`，所以外部需要加一个终止条件。也可以使用`try...finally`在函数内部加上终止条件。
* 和`iteration`不同的地方在于，生成器必须是有`xx()`的执行过程。

## 6. CH6 - 程序性能

### 6.1 基础分析

一般我们都会想知道一个程序运行时间。直观的想法是：

* `var start  = (new Date()).getTime()`
* `var end = (new Date()).getTime()`

然后两者一减，得到我们最终想要运行时间。

**但这个并不严谨，因为可能中间发生一些意外导致时间不准确。**

文中提到了几个测试工具：

* `benchmark.js`进行代码的性能测试。
* `jsPerf.com`效果更好

#### 6.2 一些忠告

不要纠结一些细小的差别，比如`--n`或者`n--`对性能的影响。性能好坏很大成都上取决于引擎如何解释这一段代码。而且不同浏览器代码还不一样。