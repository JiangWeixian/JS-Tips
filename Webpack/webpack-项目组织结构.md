# webpack - 项目组织结构
> 项目组织结构，不局限框架，适合`react or vue`
> 如果想看完整版本，直接看引用里面的原文

## 个人理解 - 结论

> 文件夹结构；组件/页面命名；文件夹作用说明；

**Rules（自我设定）**

* 如果一个变量 or 一个文件被引用多次，那么就应该放在公用地方管理

## 文件夹结构

> 先说结论

* [x] - src
  * [x] - component
    * [x] - UI / 基础`DOM`元素的重新设计`UI`
  * [x] - container
  * [x] - page
  * [x] - configs
  * [x] - constants

比较疑惑的是`component`中`UI`文件夹，以及`container & page`文件夹。

* [x] - `component with UI` 

  > 可能疑惑，其实组件和 UI 其实应该是放在一起的。这也是合理，组件本身就体现了`project`部分的`UI`。

  就我的理解，但是这里面的 UI 文件夹指的是`input button etc...`之类的基本文件夹，就像是`ANTD`这个工程一样。可以发现，其实它并没有设计`imageprivewer`这种比较复杂的，含有逻辑性的组件。

  而`component`文件夹除了`UI`部分指的是比较复杂的模块。

  * [x] modules / 可以理解为`UI`部分的组件重新组合形成比较有逻辑的组件。或者是是业务部分。
  * [x] - UI / 基础`DOM`元素的重新设计`UI`

* [x] - page / **'/'路由指向的页面也在这个文件夹内**

  > 注意`page`文件夹的位置，`/`指向的页面是`router-viewer`的意思

  指的是页面，但是并不是在`components`文件夹内（之前我可能会犯这个错误）

* [x] - container

  > 这是我个人理解，或许有出入

  因为独立于`components & pages`，可以理解为页面的布局部分，因为页面含有`header body footer`这些部分组成`page`。

**可以分析文件夹结构之间颗粒话关系`page>container>components.module/ui`**

* ui 部分组成 components.module
* components.module组成container
* container 部分组成 page

## configs and constants

任何一个文件夹（也可以说是组件），都可以有自己的`constants or confis`文件。以及 **根目录也有一个。**

> 此种情况下最好只被自身引用。

如果存在`configs constants`被外部模块使用了，**个人认为还是应该放在根目录的`configs or constants folder`中**

**如何区分`configs or constants`**

很简单：`configs`应该在 **模块初始化的时候** 只被引用一次，`constants`可以被多次。在函数以及模块编写过程中。

### 命名规则

**示例**

> 应该准守的是从`page`开始构建

> UI文件夹是独立于业务的，可以不跟着`page`一起走。但是命名规则是通用的

> 命名规则只关心组件名，而不是文件名，组件名包含的是路径名

**UI**

* Radio
  * Button

那么 Button 导出组件应该是`RadioButton`或者是`Radio.Button`，并不需要命名为`RadioButton`的**文件名**

**Page**

* page
  * User
    * List.tsx / 指向`/user/list`
    * Form.tsx / 指向`/user/form`
  * Root.tsx /  指向`/`

> 当然也可以是文件夹

* page
  * User
    * List
      * List.tsx / 指向`/user/list`，**因为是同名的**
    * Form.tsx / 指向`/user/form`
  * Root.tsx /  指向`/`

至于`list.tsx`内部导出的组件名字应该是`PageUserList`(注意不是`PageUserList`)，并不需要将`List.tsx`命名为`PageUserList`

**container**

* container
  * User
    * Header

> 这部分和`page`页面相关

**components**

> 个人理解这部分应该和页面无关，因为构建的组件可以在多个页面复用

## redux

> 独立在store 文件夹中

* 且含有`common`部分作为公用
* 以路径名作为文件夹名，可以理解为状态的`model name`

### 进一步理解`components & container`

[这篇区分文章获取能够帮助你](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

以上关于`container`其实不太准确

* `container`和`components`区分在于`state`，其实`redux-state`是关键区分点，`this.state`并不是关键区分点。`components`可以维护自己的`state`，但是`container`一般作为数据源。

  **component 不含有`state`是大多数情况，container 大多含有state**

  > 这意味着，`components`在自身不含有`state`情况下，数据源都是有外部`props`传进来。在没有`state`情况下，用`function`构建最好。

  > `redux-state`是最重要的区分点，因为`component`一定不会使用`connect`函数。`container`是作为`components`数据源。

意味着`compoents`不会关心传进来的数据是什么，例如不关心传进来的图片是用户头像还是icon 头像

如果在以上进行区分，那么可能就要进一步变为`container`进行区分。

`components`的 UI 部分是需要关心的，因为当`user icon`都是用同一个组件进行渲染的时候。期望两者有不同的 ui，其实`components`的区分实现方式应该不依赖`user or icon`。意味着不通过传递进来的`user or icon type`进行区分，因为传递其他属性。例如`type: small | middle`这种可以表示`UI`的状态。而不是`user icon`。

终极手段是，如果`type ui`不满足需求，应该通过传递`classname`重写。

### **container with pages**

> 当提到`container`可能会含有`redux`的时候，和`pages`的区分就变得复杂起来

对这个其实不应该有疑惑，因为`pages`指的是一个路由指向所展示的页面。`container`可以是页面中一部分。

> 在公司的项目中只不过把`container`单独作为一个`pages`进行了展示。

那么对于`pages with container`之前关系可以总结为：

1. connect(pages) = containers / 多个 container 的组合，此时`container`数据就有点像是`components`
2. connect(cotanniers)s = pages / 单独的链接`redux and container`然后组合构成`pages`

重点在于需求期望是怎样组合方式

### components

> 更关心 UI 部分

### containers

> 应该有自身的数据行为

例如一个 list，自身含有的行为应该是**对列表的增加删除修改**

// TODO: 如果除了 list 自身的行为之外，含有服务器行为，这两个如何组合或者互相作用是应该好好是思考的


## 引用

* [如何组织你的项目接口](https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76) / 说的挺在理的