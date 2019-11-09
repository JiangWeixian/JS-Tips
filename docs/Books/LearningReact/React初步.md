# 初入React世界

## JSX

只要稍微写过`React`其实也没有看的必要。

## React生命周期
> 名字可能不对，但是希望领会意思

* *带有`mount`关键字的钩子函数都是只会触发一次的钩子函数。
* `willreviceprops` - 接受`props`在`props`更新的时候触发。
    出现的情况在，如果`props`有个默认值，但是会被父类控制传递。

    > 如果`props`用在`render`中，本身`props`更新就会触发`render`这个就没有问题

    > 但是如果`props`本没有直接用在了`render`中，而是用来异步获取后端的数据。而默认设置的`props`可能不对（因为会被更新，我们需要的是更新之后的数据）。所以这个**钩子函数就会被认为是`watch`的函数**

* shouldupdate - 优化的关键，接受`props state`。**因为如果调用了`this.setState`以及接受了`props`，即使`state or props`没有任何变化，还是会导致组件的更新！**
    
    > 如果`return false`的话，组件就不会更新。一般会和现有的`props state`进行比较，作为性能的优化点

    > 同时也可以作为`watch`实现部分，因为会接受新的`nextProps`。可以实现不更新组件，而进行异步的数据操作。


* willupdate
* didupdate
  
  > 这两个目前看起来没有什么特别的地方

## ReactDOM

1. 常见的是`render`函数

2. 以及可以通过传递组件名然后找到组件名在真实页面中的`DOM`元素。

### Refs

`React`比`Vue`设计合理的地方，可以异步的获取组件真实的`DOM`元素。

## 通过组件包裹的方式组合组件

> 个人认为比较好的方式，就是这种类似原生的方式。

**但是之前一直对如何嵌套的组合组件的方式是不太清楚的，如下**

```JavaScript
<Tabs
  classPrefix={'tabs'}
  defaultActiveIndex={0}
  className="tabs-bar"
  children={[
    <TabPane key={0} tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>,
    <TabPane key={1} tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>,
    <TabPane key={2} tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>,
  ]} >
</Tabs> 
```

1. `tabs`嵌套这`tabpane`.

2. `tabpane`内还可以嵌套其他内容，**关键在于对于`tabpane`也是先类似的方式。**
