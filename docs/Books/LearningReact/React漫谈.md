# 漫谈React
> 与CSS结合的最佳实践；性能优化

[[toc]]

## 前言

知识点很多。

## Event System

1. React中事件不能等价与原生事件系统

  > 只是重写了其中部分，缺失的那部分只能够通过原生的方法添加

  > 而且只有冒泡模式，没有捕获方式

2. 阻止事件冒泡

  > 如果是原生和`React`混用的情况，如果**阻止了React事件冒泡不能够阻止原生事件冒泡。但是如果阻止了原生的，就一定会阻止`React`的**

## 几个概念

什么时候受控模式？什么时候非受控模式？

> 无论是原生组件还是还是非原生组件。组件的数据是通过`state or props`进行控制的。而非受控的模式是通过**原生`DOM`的方式进行控制的**


## With CSS-Modules

具体见[CSS-modules](https://github.com/JiangWeixian/JS-Tips/blob/master/React/React-CSSModules.md)这部分的总结

## Commuication

父子通信是比较明白的。兄弟之间通信也能够实现。只要数据在父级处理然后分发就可以了。

**但是如何实现层级比较深的组件通信：不是父子，也不是兄弟**

文中推荐了`events`通过`pub/sub`的方式。需要`events`这个`npm`包。**并不十分推荐`context`这个属性。**

## HOC

> HOC的作用需要好好研究一下

有几个比较明显的作用

1. 作为数据源（或者是作为代理层：指的是不直接让外部访问被包裹的组件）

  > 如果只是这种目的，可以不需要HOC。有点大材小用了。

2. 控制被包裹组件渲染，通过新的组件进行包裹，新的组件有新的`state`。因此被包裹组件的渲染是由父类进行控制的

2. 反向继承 - **个人认为HOC最为重要的特点了！**

  ```JavaScript
  const MyContainer = (WrappedComponent) =>  
    class extends WrappedComponent {
      render() {
        return super.render()
      }
    }
  ```

  可以看到被返回的组件是继承的是`wrappedcomponent`。意味着再内部我们可以通过`wrappedComponent.state or .props`来访问到一些数据，从而对`wrappedcomponents`进行控制。


## Optimize React

> 优化React。其中有些实现可能不需要通过插件的方式了，集成为了现有的API。

* [ ] - 如何利用`immer`对`props`进行修改需要好好思考。

要记住一个原则就是：

> JS中对象是引用类型的。对对象中数据的修改会反应到原始数据上。

优化的方案有：

1. 不要执行多次修改`state`，而是将其中的数据拿出来，然后修改完毕之后一次性的更新。**这是由于每次修改`state`都会触发`render`**

  **为了避免修改对象数据而导致父类数据被修改。** 那么自然也会想到将原始数据深度拷贝一份，这样修改之后再再一次更新回去便可以了。但是这回导致一个问题：

  * 深度拷贝或者浅度拷贝都是性能是有消耗的，而且比较大
  * **即使我们不考虑拷贝的问题**，因为现在可以通过`...`进行操作。从某种意义上来说可以解决大部分的问题了。
    
    > 但是可能会导致的问题是，会复制全部的内容。**可能我们期望的场景是：** 只修改被修改的内容，不被修改的内容则保留。同时如果被修改的内容和之前的内容是一致的，则不需要进行复制。直接返回原先的对象就可以了。

  这可能就需要引入第三方库进行操作了，调研下来**immer.js**这个库是比较好的。

  **一个建议，最好再项目一开始就定下来进行使用！**

2. 使用对象变量，如果我们给对象设置`props`为`<div style={ { width: 'xpx' } }></div>`，那么每次`render`之后`style`得到对象都应该是新创建的。性能消耗是比较大的。

  > 我们能进行的优化是，将{ width: 'xpx' }这部分数据保存为到一个变量里面。

3. `shouldcomponentupdate` - 要学会使用这个钩子还是。

    ```JavaScript
    import React from 'react';
    import {is} from 'immutable';

    class BaseComponent extends React.Component {
      constructor(props, context, updater) {
        super(props, context, updater);
      }

      shouldComponentUpdate(nextProps, nextState) {
        const thisProps = this.props || {};
        const thisState = this.state || {};
        nextState = nextState || {};
        nextProps = nextProps || {};

        if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
          Object.keys(thisState).length !== Object.keys(nextState).length) {
            return true;
        }

        for (const key in nextProps) {
          if (!is(thisProps[key], nextProps[key])) {
            return true;
          }
        }

        for (const key in nextState) {
          if (!is(thisState[key], nextState[key])) {
            return true;
          }
        }
        return false;
      }
    }

    export default BaseComponent
    ```

    一个小技巧是，如果你是用了`immer`，你可以再新建组件的时候通过`class newcomponent extends BaseComponent`直接继承一个优化之后的组建。

    > `immer`如何使用还是要进一步研究的。只是留坑简单说明。

4. 设置组件`key`

5. 不要移动跨层级移动节点，如果需要这么做，宁愿创建两个阶段，设置隐藏和删除。因为对于`react`来说跨层级的移动是比较消耗性能的。
