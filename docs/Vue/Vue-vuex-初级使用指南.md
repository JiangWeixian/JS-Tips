# Vuex - 如何使用
> 希望能够做到记忆深刻，而不是看例子；也有很多版本，也做一个汇总

<!-- TOC -->

- [Vuex - 如何使用](#vuex---如何使用)
- [**单`Store`状态 - 分开文件书写**](#单store状态---分开文件书写)
  - [**单`Store` - 初始化格式规则**](#单store---初始化格式规则)
  - [**单`Store` - 各部分书写规则**](#单store---各部分书写规则)
  - [**单`Store` - 如何触发**](#单store---如何触发)

<!-- /TOC -->

# **单`Store`状态 - 分开文件书写**

> 指的是只有一组`store`状态需要维护，并将`action mutation etc`分开文件进行维护。

## **单`Store` - 初始化格式规则**

> 初始化

**含有四个部分**

> 构建一个`store`，并不是需要全部以下四个部分。缺少一个一部分也是可以的，类如缺少`actions`部分，那么就没有办法通过`dispatch`触发`action`。

* `mutations`
* `action`
* `getters`
* `state`

这四个部分你可以分别写在我四个文件中，或者写在同一个文件中。**这里说明的是四个文件时候的情况，** 可参考[各部分书写规则](#单store---各部分书写规则)部分。

**导出`vuex`使用**

> 模块导入导出也逃不过`es6`规则

> 文件夹中`index.js`将会作为模块导出根文件；如果`store/index.js`，那么`import store from './store'`将会使用`index.js`导出的内容

```JavaScript
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
```

**题外话 -** 这样的导出为什么可以通过`this.$store.dispatch`触发对应的的`api`?

> 这是因为`es6`新特性。因为`{}`明显是一个对象，应该是有`key`值。但是这样直接写的方式，是 **同步创建同名的`actions or getters`**。因此可以知道传递是`getters`还是`actions`。

**将`store`加入`vue`**

1. 在`store/index.js`文件中，先将`vuex`加入`vue`，通过`Vue.use(Vuex)`；并定义和导出`store`，通过`export default new Vuex.store({})`
2. 在将`store`导入`vue` 

    ```JavaScript
    import store from './store'
    
    new Vue({
      el: '#app',
      store
    })
    ```

## **单`Store` - 各部分书写规则**

> 在多`store`维护部分也是成立的

> 由于是多文件，所以每部分都要`export defalut`，例如`export defalut state`。然后合并为一个`store`。

* `mutations` - 函数对象

    > 写在`mutations`对象中函数第1个默认接受`state`，后面参数才是传递给对应`mutaions`函数的参数。

    ```JavaScript
    const mutations = {
      func (state, arg) {}
    }
    ```
    
* `action` - 函数对象

    > 写在`actions`对象函数第1个函数默认是`context`对象，为`{commit, state}`组合构成的对象

    ```JavaScript
    const actions = {
      func ({commit, state}, arg) {}
    }
    ```
    
* `getters` - 函数对象

    > 写在`getters`对象中，函数第1个参数是`state`。官方链接有个[动态getters](https://vuex.vuejs.org/guide/getters.html)实现方式。

    ```JavaScript
    const getters = {
      func (state) {} 
    }
    ```
    一般会有`value`返回
    
* `state` - 数据对象

## **单`Store` - 如何触发**

> 分为`map...`以及`this.$store`两种触发方式

> 至于`actions or mutations`函数要在哪里触发并没有严格的规定

`map`方式对四个模块都是成立的，例如`mapMutations`，以`mapGetters`举例(不过有些是写在`vue computed`中，而有一些是写在`vue methods`其中)：

```JavaScript
// computed中
...mapGetters(['xx', 'yy'])
```

**注意传递`[]`还是`{}`两个的区别**

* 对于`[]` - `xx or yy`需要带有引号，`xx yy`就是`getters`中定义的函数对象
* 对于`{}` - 可以将`xx or yy`赋值給一个新的`key`，就像是

    ```JavaScript
    ...mapGetters({
      add: 'xx'
    })
    ```

    这样就有了新的名字，特殊需求(避免冲突，个人喜好)

**`this.$store`方式触发**

> `state getters`本质属于一种类型，数据类型；`mutations actions`属于另外一种类型，因为是函数。

> 所有都应该通过`this.$store`找到或者触发

* `state` - `this.$store.state`
* `getters` - `this.$store.getters`
* `actions` - `this.$store.dispatch('xx', args)`分别是函数名以及传递给函数的参数
* `mutations` - `this.$store.commit('xx', args)`参数和上面一致。
  * 同样也可以在`actions`函数中触发，通过`commit('xx', args)`