# Vue - router初级使用指南
> 配置(做到不看例子)；一些黑科技；一些妙用

## 初级 - 配置

和大多数第三方插件，类如`vuex`一样，如果在`router/index.js`定义我们的路由表的话。

必须经过:

1. `Vue.use(router)`
2. 导入组件`.vue` - 分为一次性导入和动态导入两种格式
3. `export defalut new Router({})`在这里面写入你的路由表。

    ```JavaScript
    // {} 内部为
    {
      routes: [
        {
          path: '',
          name: xx,
          redirect: '',
          component: parent,
          children: [] //这部分是次级path，结构和上面的一致
        }
      ]
    }
    ```

    `children`意味着你可以 **`parent`中再一次** 使用嵌套的`router-view`

## 关于`router-view`

> 完整格式是`<router-view></router-view>`

可以理解为组件，切换到对应`path`加载不同组件。所以`<router-view>`上可以传递`props`或者自定义事件。

这样该父类组件的所有子类组件都接受到了。

```JavaScript
// parent
<div>
  <router-view :somrprops="" @somefunc="" ></router-view>
</div>
```

假设`parent`通过`/parent`加载，内部`router-view`通过`/parent/page1 or page2`加载。这些书写了之后，`someprops and somefunc`在两个组件页面上都能够接收到。

## 通过路由传递数据

这部分研究一下官方文档

## 路由切换

> 监听以及手动切换

* 监听

    ```JavaScript
    'route'(to, from) {}
    ```
* 切换 - `this.$router.push({path: url})` 注意是`router`，以及可以传递更多数据的。