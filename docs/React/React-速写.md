# React - 初接触
> 第一次接触时候速写文档

::: warning
没什么价值，可以选择不看
:::

[[toc]]

## **规则**

* 分为浏览器环境下以及本地开发环境

    > 指的是在 **浏览器环境下** 开发，直接写在`.html`

    > 而类似`vue-cli`初始化工程结果则是 **属本地开发环境**

* 关于`jsx`(其实是`JavaScript和html组合`)，其实不难，记住一个规则 - `JavaScript`代码(包括变量以及函数调用一定是在`{}`，如果不是就是`string`类型的)。而`{}`中如果还有函数调用，就是嵌套包裹`{}`

    **JSX特点1**
    
    ```JavaScript
    <Summary title="Peanut Butter and Jelly"
            ingredients={3}
            steps={5} />,
    ```
    而`ingredients={3}`可以理解为设置了`ingredients`为`{}`代码的执行结果。

    最终得到

    ```JavaScript
    //this.props
    {
        ingredients: 3,
        title: "Peanut Butter and Jelly"
        // ...
    }
    ```

    **JSX特点2**
    > {xx}如果xx是函数名的，并不是这个函数执行的结果。类似回调函数。

    **JSX特点3**
    ```JavaScript
    <PeopleList {...this.state}
                {...this.props} />
    // 假设PeopleList是一个函数组件，以上这样的写法是给PeopleList这个函数传递了两个参数
    ```

## React库

> 并不像Vue把所有东西都绑定到Vue

有几个第分支库，需要分开下载

* React - 创建组件(`vdom`)
* ReactDOM - render(`vdom->dom`)
* Proptypes - 居然也是分支
* redux - 这是第三方库，用来控制数据来的
* react-redux - redux分装到react中
* React-router

## 内建函数使用注意点

* 浏览器没办法使用`import export`(至少目前如此)。如果依旧是使用`script`的导入。可以通过`const {xx} = React`。如果`React`上有一个叫`xx`的属性。
* `render`
    * 只能够调用一次，之后调用的会覆盖之前的元素
    * **每次调用相当于刷新，其实在组件状态更新的时候会自动刷新(由于Diff算法，可能只会刷新一部分)**
* 浏览器要支持`babel`转译，需要`browser.js`那个版本，以及`script`设置`text/babel`。以及不能够是`src`。因为这样`browser.js`无法读取到然后实现转译。
* `flux` - 三部分分别是`actions, dispatcher, store`。**可以理解为带有发布定订阅的全局状态机**
    > `dispatcher`连接`actions`与`store`；`actions`类似`this.setState`作用，改变全局`state`的具体函数；`store`包含全局`state`，以及一个发布订阅模块；运行过程类似于`actions->dispatcher->store->chagestate, emit(触发事件)`。同时`store.on监听事件`然后再回调函数中进行操作。

    > 与`react`联系，`actions`需要作为`componets`函数进行调用

    > `dispatcher`需要分别为传递给`actions&store`；传递给`actions`是为了能够通过`dispatcher`来触发`store`；传递给`store`是为了能够获得`actions`之后的数值。

    具体可见[阮一峰-react&flux.js](http://www.ruanyifeng.com/blog/2016/01/flux.html)

    关于发布订阅这部分或许是通过`EventEmiter`基础这个函数实现的。
* `redux`

    > `createStore`组合`state`，第二个参数是默认state

    > 分支state是函数，函数名是`state-key`，第一个参数是`state-value`；第二个函数就是`store.dispatch(xx)`传递就来你的`actions`。**要注意state分支函数必须每次返回完整的state结果**

    **如何再React组件中使用？** 关键函数分别是`getChildContext&subscribe&forceUpdate`
    
    * getChildContext - 是为了让改组件所有的组件都默认传递一个`store`。如果不这么做的话，那么可能需要手动传递`store`
    * subscribe - 类似`watch`监听`state`变化
    * forceUpdate - 更新组件以及所有子组件，**因为之前组件自动更新来自`state&props`的自动变化**

    见[color-organizer-context](https://github.com/MoonHighway/learning-react/tree/master/chapter-09/color-organizer-context)
    
* `react-redux`，使用方法见[阮一峰react-redux](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html) - `redux in react`。

    * `ui`组件没有`state`属性，由外部传递。控制`state`函数也是由外部传递。也就是`ui`组件内部完全没有`this.setState`操作？这一切都是通过`connect`函数实现(需要结合下面一点使用)，connect函数第1个参数传递`state`

    * 根元素需要`provider`包裹，传递`store`

* `redux-router` - 多个路由写在一起并不是要一起出现，而是根据`path`选择性出现，通过`component`控制。**这部分就是类似`vue-router`** (同样也有`redirect`等)

    > 如果provider包裹了`router`那么`connect`会接受`state, match`作为参数。`match`为当前路由被激活时候的路径

    > `component`也可以接受函数，只要函数内返回组件就行。函数接受`match`以及`location`作为参数。

    > 类似`VUE`，同样也有`link`以及函数动态路由跳转。

    路由嵌套的情况还需要进一步研究。见[react-router](http://www.ruanyifeng.com/blog/2016/05/react_router.html)主要是疑惑父类路由如何保持嵌套路由的视图情况？或许一个路由一个视图是比较好的选择？或者这篇[博客](https://blog.csdn.net/hsany330/article/details/78114805)可以帮到你

    以下是另一种路由配置方案。

    ```JavaScript
    const routes = {
    path: '/',
    component: App,
    indexRoute: { component: Dashboard },
    childRoutes: [
        { path: 'about', component: About },
        {
        path: 'inbox',
        component: Inbox,
        childRoutes: [{
            path: 'messages/:id',
            onEnter: ({ params }, replace) => replace(`/messages/${params.id}`)
        }]
        },
        {
        component: Inbox,
        childRoutes: [{
            path: 'messages/:id', component: Message
        }]
        }
    ]
    }

    render(<Router routes={routes} />, document.body)
    ```

    > 如果不使用react-redux。应该由`location`传递给默认的组件`props`
    
* `class-type`的组件和`funciton-type`组件，其中`function-type`其实是`class-type`的render函数。`render`函数可以重复调用，但是`constructor in class`只能够调用一次(就是组件创建的时候)

## **浏览器环境&内建函数简单介绍**

> 浏览器开发环境下，指的是通过`script`标签导入`react`

1. `React.createElement` - 非创建`dom`或者模块。为创建`vdom`的函数。

    > 由于传递一个标签，组件其实在构造一个非原生`HTML`结构标签。无论是传递原生标签名，还是组件标签名。函数结果都是vdom。**同理接受的子组件数组也可以是来自原生or非原生**

    > 函数第二个参数是目标是第一个参数，可在第一个参数可以获取到第二个参数。而且如果第1个参数是原生标签，那么第2个参数必须是 **可以在原生参数上设置的属性，例如`classname`之类的**

    > createElement第一个参数应该是类名或者函数，createElement会隐含的调用它。如果是函数的话(**我发现vdom不仅仅局限于`createElement`。`jsx`格式也可以，就像是在js文件中写html结构**)。如果是类的话，类中一定是包含一个`render`接口函数。

2. `ReactDOMFactories` - 用来创建原生，类比`createElement`。除了没有第一参数外，见[01-factories.html](https://github.com/MoonHighway/learning-react/blob/master/chapter-04/05-factories/01-factories.html)。返回的也是`vdom`

3. **而创建组件是`class`的形式(继承子react.component)或者包裹JSX的函数** (可以作为`createElement`第一个参数，说明原生标签也是类似的实现)。

    > 创建的组件除了传递给`createElement`。也可以像正常标签(函数名或者类就是标签名)一样使用。(使用方式jsx)。就像是[DOM-rendering-moods.js](https://github.com/MoonHighway/learning-react/blob/master/chapter-04/04-dom-rendering-moods/DOM-rendering-moods.js)那样。

    > 组件是 **vdom，可以像标签一样使用**。

    > (不通过`createElement`传递参数)直接用标签方式使用`vdom`。然后通过泪如标签设置参数一样使用。如[01-incorrect-props-no-error.html](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/01-property-validation-and-default-props/01-incorrect-props-no-error.html)。**传递过来的参数在`this.props`**；如果是函数包括`JSX`创建的组件，传递的参数就是函数默认参数。可以看[08-stateless-default-prop](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/02-refs/08-stateless-default-prop.html)和[09-stateless-default-arg](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/02-refs/09-stateless-default-arg.html)

    > class-render返回一个vdom，vdom可能接受一些数据动态创建。因此该组件和`vue`一样也是响应式的，**因此这里定义了一个state**。不过如果传递的`props`改变，应该也是动态变化。区别可能是，子组件应该没有办法改变`props`。**可选的方案是将props某个数据传递给state**

4. `propTypes(in class)` - 定义传递过来数据的属性，用到了`class-static`方法。也就是只能够通过`类.xx`来进行访问。传递给组件数据依旧在`props`。只不过现在可以通过`prooTypes`过滤。类似的还有`defaultprops`

    > 由于function也可以实现类，所以`static`方法也可以通过这个方法使用。但是发现如果是function实现的组件，闯入的参数并不是在`this.props`而是通过传入参数获取。见[10-stateless-default-props.html](https://github.com/MoonHighway/learning-react/blob/master/chapter-06/01-property-validation-and-default-props/10-stateless-default-props.html)

    > 传入的参数可以自定义验证规则

    > 如果`class`含有`construtor`的话，那么`props`就是`construtor`的参数。

    > props有一个内置的属性位children

5. `setState` - 一个参数是之前state，后一个传入需要改变的数据


2. `ReactDOM.render` - 将`dom`结构绘制(为 **`vdom->dom`的函数**)到给定的元素中。如[05-elements.html](https://github.com/MoonHighway/learning-react/blob/master/chapter-04/02-react-elements/05-elements.html)

## **本地环境下**

> 借助Nodejs+Webpack开发。本来通过`script`标签导入的文件，现在通过`npm+import`导入。`JS`部分和浏览器没什么区别。**不过从之前单个文件构建组件+绘制dom，现在要分开构建组件。就像是`vue`一样。**

