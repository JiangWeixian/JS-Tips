# webpack - 项目组织结构
> 项目组织结构，不局限框架，适合`react or vue`
> 如果想看完整版本，直接看引用里面的原文

## 个人理解 - 结论

> 文件夹结构；组件/页面命名；文件夹作用说明；

### 文件夹结构

> 先说结论

* [x] - src
  * [x] - component
    * [x] - UI / 基础`DOM`元素的重新设计`UI`
  * [x] - container
  * [x] - page

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

## 引用

* [如何组织你的项目接口](https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76) / 说的挺在理的