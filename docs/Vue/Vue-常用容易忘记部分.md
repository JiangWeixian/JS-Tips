# Vue - 常用容易忘记部分
> 从零开始；写给记性不好的自己；大部分可能只会给出如何使用！

<!-- TOC -->

- [Vue - 常用容易忘记部分](#vue---常用容易忘记部分)
  - [注意部分](#注意部分)
    - [工程版本或者`HTML`版本](#工程版本或者html版本)
  - [规则 - 定义使用](#规则---定义使用)
    - [**`[] {} {{}}`** 区别与变量联系](#---区别与变量联系)
    - [**变量** - 来自`data computed props`](#变量---来自data-computed-props)
    - [**属性** - 自定义组件(属性与组件`prop`有关)或者`HTML`自有标签](#属性---自定义组件属性与组件prop有关或者html自有标签)
  - [规则 - 事件](#规则---事件)
    - [父类向子类传递事件](#父类向子类传递事件)
    - [兄弟组件之间通信](#兄弟组件之间通信)
    - [自身使用事件](#自身使用事件)
  - [规则 - 样式](#规则---样式)
  - [`vue-cli`构建工程](#vue-cli构建工程)
  - [`HTML`文件模式](#html文件模式)

<!-- /TOC -->

## 注意部分

> 要非常注意`dev or build`两个模式的区别；白屏如何修改使得有画面

> 学会使用`Vue`在单个`HTML`文件中的使用：创建工程指的是文件模式&`HTML`指的是单个`HTML`文件

> 暂时不加入`vue-router&vuex`的使用部分

* 使用其他组件
* 给组件传递数据 - 变量或者字符串
* 简单组件之间通信 - 父类子类，兄弟之间
* (单文件相对简单，主要指的是`HTML`中)创建组件
* 监听数组/响应式数据
* `JS`控制组件`Class or Style`

**如果你想要将其作为JQ的替代？那么基于`Vue`一些插件在文件模式和`HTML`模式下都要学会使用**

### 工程版本或者`HTML`版本

> 两者异同

首先我们知道构建一个`vue`工程的话，组件使用`vue`文件。`vue`由三部分构成，分别是`html css js`。并没有严格规定三部分书写顺序，不同书写顺序也没有优先级关系。

**对比`HTML`文件，** 可以发现`HTML`文件也是由这三部分组成。

**所以可以大胆使用**，在`HTML`文件中也是相同的使用规则。区别的只是如何挂载`vue`。此处见[Vue-example-select2](https://github.com/vuejs/vue/blob/dev/examples/grid/index.html)就可以明白。关键在于：

1. 将组件写在了`script`标签内部
2. 并通过`Vue.component`组件注册到`Vue`

## 规则 - 定义使用

> 规则就是在工程模式下或者`HTML`模式下都成立的

### **`[] {} {{}}`** 区别与变量联系

> 分为标签行内以及`script`标签内使用的区别

> `{{}}`只是在作为标签`textcontent`才有被使用到

**`script`** 中

这部分完全可以就是`JavaScript`语法知识。

* `[]`内部数据要带有引号，不带有的是变量(指的必须通过`let`等声明过的)
* `{}`就是一个对象，所以`key`属性可以不带有引号

**`[] {}`与`props`**

* `[]` 中即使使用`'xx'`引号，例如`['xx']`，依旧可以在标签中使用`xx`属性。

* `{}`的话，以`JavaScript`语法就是

    ```JavaScript
    props: {
      xx: {
        
      }
    }
    ```

    当然`JavaScript`规则也可以让`xx`带有`''`，语法上也是成立的。

**标签行内**

> 一帮作为classname，或者三元选择符号进行动态

> 一定是和`v-bind:xx or :xx`一起使用，因此需要结合[**变量** - 来自`data computed props`](#变量---来自data-computed-props)共同理解。**xx一定是变量**

* `[xx, yy]` - `xx and yy`都是变量，来自`data computed props`声明结果
* `{}`其实是三元表达式的写法 - `{str: xx}`其中`xx`才是变量，变量生效的时候返回`str`(并不是变量，而是将`str`视为字符串)

**三元表达式**

* `[]` - `[boolean? xx:yy]`注意所有部分都是变量
* `{}` - 见上诉

### **变量** - 来自`data computed props`

* `:xx = "" and v-bind:xx = "" and {{ }}`

    > `textcontent`的变量是写在{{ }}

    > `: and v-bind:` 在`""`中使用的都是变量，来自`data computed props`

    如果不想使用变量，那么就使用`xx = ""`

### **属性** - 自定义组件(属性与组件`prop`有关)或者`HTML`自有标签

`div`标签使用`class=字符串`，`:class`就是`=变量`

```JavaScript
<div class="someclass"></div>
```

字符串和变量两种赋值方式情况也适用于自定义组件。不同是 **自定义组件** 属性是通过自己的`props`定义的。

## 规则 - 事件

> 不要使用`=>`定义`function`，因为会丢失`this`

> 父类向子类传递事件

> 以及自身使用事件

### 父类向子类传递事件

> 涉及到子类自定义事件

> 可以实现子类与父类通信

父类向子类传递事件，子类的自定义事件并不是通过`props`定义，使得 **父类可以传递事件**，如：

```html
// 父类
<div>
  <child @show="func"></child>
</div>
```

子类，工程模式的话就是定义在template中。如果是`html`模式，见[Vue-example-select2](https://github.com/vuejs/vue/blob/dev/examples/grid/index.html)

```html
// child组件
<template>
  <div @click="xxx"></div>
</template>
```

而在`xxx`函数内部，进行：

```JavaScript
xxx () {
  this.$emit('show','the msg')
}
```

那么就会触发父类`show`，并将`the msg`作为参数传递给`show`

可以发现绑定事件的方式是和原生`dom`事件是一样的`@`。

### 兄弟组件之间通信

可以参考[兄弟组件通信](https://www.cnblogs.com/sichaoyun/p/6690322.html)。**说明Vue自带发布订阅就像是`Nodejs`一样**

除此之外还有一种思路是，父类向子类通过`props`传递数据。

子类通过[父类向子类传递事件](#父类向子类传递事件)提到的方式通信，改变`data`数据，`data`数据被改变部分又通过`props`传递给子类的兄弟节点。相应的也就实现了兄弟节点之间通信。

### 自身使用事件

> 格式为`@event="xx"`

其中`event`就是原生的`dom`事件，然后写上`xx`就是写在`methods`的`function`

## 规则 - 样式

控制样式通过`class or style`。

* `class`通过`classname`的方式需要参考[**`[] {} {{}}`** 区别与变量联系](#---区别与变量联系)
* `style`最好不要使用字符串，而是通过`{}`(`key`是`css`属性名，`value`是`css`属性值)。`vue`会自动拼接。

## `vue-cli`构建工程

> [vue-cli](https://github.com/vuejs/vue-cli/tree/v2)创建工程

```bash
// myproject 是可以更换的工程名字
vue init webpack myproject
```

最常用的是`webpack`的`offcial template`。更多模板见链接。

## `HTML`文件模式

**组件**

```JavaScript
Vue.component('demo-grid', {
  template: '#grid-template',
  replace: true,
  props: {
    data: Array,
    columns: Array,
    filterKey: String
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  }
}
```

* `demo-grid`是组件名
* `template`就是组件结构，**就是工程模式中，写在`template`组件内`html`结构**。这里传递了一个`html id`，意味着在`html`文档中有一个`id = grid-template`的`html`结构。

除此之外其实其他部分没有什么差异。**甚至你可以直接使用`<demo-grid></demo-grid>`在`html`文档中。**

**挂载**

> `vue`需要有一个根节点挂载`vue`结构

```JavaScript
var demo = new Vue({
  el: '#demo',
  data: {
    searchQuery: '',
    gridColumns: ['name', 'power'],
    gridData: [
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 }
    ]
  }
})
```

* `el`意味着挂载到`id = demo`的`html dom`结构上。而在`dom`结构中可以直接书写组件结构。