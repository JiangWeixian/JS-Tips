(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{277:function(t,e,v){"use strict";v.r(e);var _=v(0),o=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"webpack-项目组织结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webpack-项目组织结构"}},[t._v("#")]),t._v(" webpack - 项目组织结构")]),t._v(" "),v("blockquote",[v("p",[t._v("项目组织结构，不局限框架，适合"),v("code",[t._v("react or vue")]),t._v("\n如果想看完整版本，直接看引用里面的原文")])]),t._v(" "),v("h2",{attrs:{id:"个人理解-结论"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#个人理解-结论"}},[t._v("#")]),t._v(" 个人理解 - 结论")]),t._v(" "),v("blockquote",[v("p",[t._v("文件夹结构；组件/页面命名；文件夹作用说明；")])]),t._v(" "),v("h3",{attrs:{id:"文件夹结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文件夹结构"}},[t._v("#")]),t._v(" 文件夹结构")]),t._v(" "),v("blockquote",[v("p",[t._v("先说结论")])]),t._v(" "),v("ul",{staticClass:"contains-task-list"},[v("li",{staticClass:"task-list-item"},[v("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" - src\n"),v("ul",{staticClass:"contains-task-list"},[v("li",{staticClass:"task-list-item"},[v("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" - component\n"),v("ul",{staticClass:"contains-task-list"},[v("li",{staticClass:"task-list-item"},[v("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" - UI / 基础"),v("code",[t._v("DOM")]),t._v("元素的重新设计"),v("code",[t._v("UI")])])])]),t._v(" "),v("li",{staticClass:"task-list-item"},[v("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" - container")]),t._v(" "),v("li",{staticClass:"task-list-item"},[v("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" - page")])])])]),t._v(" "),v("p",[t._v("比较疑惑的是"),v("code",[t._v("component")]),t._v("中"),v("code",[t._v("UI")]),t._v("文件夹，以及"),v("code",[t._v("container & page")]),t._v("文件夹。")]),t._v(" "),v("ul",{staticClass:"contains-task-list"},[v("li",{staticClass:"task-list-item"},[v("p",[v("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" - "),v("code",[t._v("component with UI")])]),t._v(" "),v("blockquote",[v("p",[t._v("可能疑惑，其实组件和 UI 其实应该是放在一起的。这也是合理，组件本身就体现了"),v("code",[t._v("project")]),t._v("部分的"),v("code",[t._v("UI")]),t._v("。")])]),t._v(" "),v("p",[t._v("就我的理解，但是这里面的 UI 文件夹指的是"),v("code",[t._v("input button etc...")]),t._v("之类的基本文件夹，就像是"),v("code",[t._v("ANTD")]),t._v("这个工程一样。可以发现，其实它并没有设计"),v("code",[t._v("imageprivewer")]),t._v("这种比较复杂的，含有逻辑性的组件。")]),t._v(" "),v("p",[t._v("而"),v("code",[t._v("component")]),t._v("文件夹除了"),v("code",[t._v("UI")]),t._v("部分指的是比较复杂的模块。")]),t._v(" "),v("ul",{staticClass:"contains-task-list"},[v("li",{staticClass:"task-list-item"},[v("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" modules / 可以理解为"),v("code",[t._v("UI")]),t._v("部分的组件重新组合形成比较有逻辑的组件。或者是是业务部分。")]),t._v(" "),v("li",{staticClass:"task-list-item"},[v("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" - UI / 基础"),v("code",[t._v("DOM")]),t._v("元素的重新设计"),v("code",[t._v("UI")])])])]),t._v(" "),v("li",{staticClass:"task-list-item"},[v("p",[v("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" - page / "),v("strong",[t._v("'/'路由指向的页面也在这个文件夹内")])]),t._v(" "),v("blockquote",[v("p",[t._v("注意"),v("code",[t._v("page")]),t._v("文件夹的位置，"),v("code",[t._v("/")]),t._v("指向的页面是"),v("code",[t._v("router-viewer")]),t._v("的意思")])]),t._v(" "),v("p",[t._v("指的是页面，但是并不是在"),v("code",[t._v("components")]),t._v("文件夹内（之前我可能会犯这个错误）")])]),t._v(" "),v("li",{staticClass:"task-list-item"},[v("p",[v("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" - container")]),t._v(" "),v("blockquote",[v("p",[t._v("这是我个人理解，或许有出入")])]),t._v(" "),v("p",[t._v("因为独立于"),v("code",[t._v("components & pages")]),t._v("，可以理解为页面的布局部分，因为页面含有"),v("code",[t._v("header body footer")]),t._v("这些部分组成"),v("code",[t._v("page")]),t._v("。")])])]),t._v(" "),v("p",[v("strong",[t._v("可以分析文件夹结构之间颗粒话关系"),v("code",[t._v("page>container>components.module/ui")])])]),t._v(" "),v("ul",[v("li",[t._v("ui 部分组成 components.module")]),t._v(" "),v("li",[t._v("components.module组成container")]),t._v(" "),v("li",[t._v("container 部分组成 page")])]),t._v(" "),v("h3",{attrs:{id:"命名规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#命名规则"}},[t._v("#")]),t._v(" 命名规则")]),t._v(" "),v("p",[v("strong",[t._v("示例")])]),t._v(" "),v("blockquote",[v("p",[t._v("应该准守的是从"),v("code",[t._v("page")]),t._v("开始构建")])]),t._v(" "),v("blockquote",[v("p",[t._v("UI文件夹是独立于业务的，可以不跟着"),v("code",[t._v("page")]),t._v("一起走。但是命名规则是通用的")])]),t._v(" "),v("blockquote",[v("p",[t._v("命名规则只关心组件名，而不是文件名，组件名包含的是路径名")])]),t._v(" "),v("p",[v("strong",[t._v("UI")])]),t._v(" "),v("ul",[v("li",[t._v("Radio\n"),v("ul",[v("li",[t._v("Button")])])])]),t._v(" "),v("p",[t._v("那么 Button 导出组件应该是"),v("code",[t._v("RadioButton")]),t._v("或者是"),v("code",[t._v("Radio.Button")]),t._v("，并不需要命名为"),v("code",[t._v("RadioButton")]),t._v("的"),v("strong",[t._v("文件名")])]),t._v(" "),v("p",[v("strong",[t._v("Page")])]),t._v(" "),v("ul",[v("li",[t._v("page\n"),v("ul",[v("li",[t._v("User\n"),v("ul",[v("li",[t._v("List.tsx / 指向"),v("code",[t._v("/user/list")])]),t._v(" "),v("li",[t._v("Form.tsx / 指向"),v("code",[t._v("/user/form")])])])]),t._v(" "),v("li",[t._v("Root.tsx /  指向"),v("code",[t._v("/")])])])])]),t._v(" "),v("blockquote",[v("p",[t._v("当然也可以是文件夹")])]),t._v(" "),v("ul",[v("li",[t._v("page\n"),v("ul",[v("li",[t._v("User\n"),v("ul",[v("li",[t._v("List\n"),v("ul",[v("li",[t._v("List.tsx / 指向"),v("code",[t._v("/user/list")]),t._v("，"),v("strong",[t._v("因为是同名的")])])])]),t._v(" "),v("li",[t._v("Form.tsx / 指向"),v("code",[t._v("/user/form")])])])]),t._v(" "),v("li",[t._v("Root.tsx /  指向"),v("code",[t._v("/")])])])])]),t._v(" "),v("p",[t._v("至于"),v("code",[t._v("list.tsx")]),t._v("内部导出的组件名字应该是"),v("code",[t._v("PageUserList")]),t._v("(注意不是"),v("code",[t._v("PageUserList")]),t._v(")，并不需要将"),v("code",[t._v("List.tsx")]),t._v("命名为"),v("code",[t._v("PageUserList")])]),t._v(" "),v("p",[v("strong",[t._v("container")])]),t._v(" "),v("ul",[v("li",[t._v("container\n"),v("ul",[v("li",[t._v("User\n"),v("ul",[v("li",[t._v("Header")])])])])])]),t._v(" "),v("blockquote",[v("p",[t._v("这部分和"),v("code",[t._v("page")]),t._v("页面相关")])]),t._v(" "),v("p",[v("strong",[t._v("components")])]),t._v(" "),v("blockquote",[v("p",[t._v("个人理解这部分应该和页面无关，因为构建的组件可以在多个页面复用")])]),t._v(" "),v("h2",{attrs:{id:"redux"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redux"}},[t._v("#")]),t._v(" redux")]),t._v(" "),v("blockquote",[v("p",[t._v("独立在store 文件夹中")])]),t._v(" "),v("ul",[v("li",[t._v("且含有"),v("code",[t._v("common")]),t._v("部分作为公用")]),t._v(" "),v("li",[t._v("以路径名作为文件夹名，可以理解为状态的"),v("code",[t._v("model name")])])]),t._v(" "),v("h3",{attrs:{id:"进一步理解components-container"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进一步理解components-container"}},[t._v("#")]),t._v(" 进一步理解"),v("code",[t._v("components & container")])]),t._v(" "),v("p",[v("a",{attrs:{href:"https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇区分文章获取能够帮助你"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("以上关于"),v("code",[t._v("container")]),t._v("其实不太准确")]),t._v(" "),v("ul",[v("li",[v("p",[v("code",[t._v("container")]),t._v("和"),v("code",[t._v("components")]),t._v("区分在于"),v("code",[t._v("state")]),t._v("，其实"),v("code",[t._v("redux-state")]),t._v("是关键区分点，"),v("code",[t._v("this.state")]),t._v("并不是关键区分点。"),v("code",[t._v("components")]),t._v("可以维护自己的"),v("code",[t._v("state")]),t._v("，但是"),v("code",[t._v("container")]),t._v("一般作为数据源。")]),t._v(" "),v("p",[v("strong",[t._v("component 不含有"),v("code",[t._v("state")]),t._v("是大多数情况，container 大多含有state")])]),t._v(" "),v("blockquote",[v("p",[t._v("这意味着，"),v("code",[t._v("components")]),t._v("在自身不含有"),v("code",[t._v("state")]),t._v("情况下，数据源都是有外部"),v("code",[t._v("props")]),t._v("传进来。在没有"),v("code",[t._v("state")]),t._v("情况下，用"),v("code",[t._v("function")]),t._v("构建最好。")])]),t._v(" "),v("blockquote",[v("p",[v("code",[t._v("redux-state")]),t._v("是最重要的区分点，因为"),v("code",[t._v("component")]),t._v("一定不会使用"),v("code",[t._v("connect")]),t._v("函数。"),v("code",[t._v("container")]),t._v("是作为"),v("code",[t._v("components")]),t._v("数据源。")])])])]),t._v(" "),v("p",[t._v("意味着"),v("code",[t._v("compoents")]),t._v("不会关心传进来的数据是什么，例如不关心传进来的图片是用户头像还是icon 头像")]),t._v(" "),v("p",[t._v("如果在以上进行区分，那么可能就要进一步变为"),v("code",[t._v("container")]),t._v("进行区分。")]),t._v(" "),v("p",[v("code",[t._v("components")]),t._v("的 UI 部分是需要关心的，因为当"),v("code",[t._v("user icon")]),t._v("都是用同一个组件进行渲染的时候。期望两者有不同的 ui，其实"),v("code",[t._v("components")]),t._v("的区分实现方式应该不依赖"),v("code",[t._v("user or icon")]),t._v("。意味着不通过传递进来的"),v("code",[t._v("user or icon type")]),t._v("进行区分，因为传递其他属性。例如"),v("code",[t._v("type: small | middle")]),t._v("这种可以表示"),v("code",[t._v("UI")]),t._v("的状态。而不是"),v("code",[t._v("user icon")]),t._v("。")]),t._v(" "),v("p",[t._v("终极手段是，如果"),v("code",[t._v("type ui")]),t._v("不满足需求，应该通过传递"),v("code",[t._v("classname")]),t._v("重写。")]),t._v(" "),v("h3",{attrs:{id:"container-with-pages"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#container-with-pages"}},[t._v("#")]),t._v(" "),v("strong",[t._v("container with pages")])]),t._v(" "),v("blockquote",[v("p",[t._v("当提到"),v("code",[t._v("container")]),t._v("可能会含有"),v("code",[t._v("redux")]),t._v("的时候，和"),v("code",[t._v("pages")]),t._v("的区分就变得复杂起来")])]),t._v(" "),v("p",[t._v("对这个其实不应该有疑惑，因为"),v("code",[t._v("pages")]),t._v("指的是一个路由指向所展示的页面。"),v("code",[t._v("container")]),t._v("可以是页面中一部分。")]),t._v(" "),v("blockquote",[v("p",[t._v("在公司的项目中只不过把"),v("code",[t._v("container")]),t._v("单独作为一个"),v("code",[t._v("pages")]),t._v("进行了展示。")])]),t._v(" "),v("p",[t._v("那么对于"),v("code",[t._v("pages with container")]),t._v("之前关系可以总结为：")]),t._v(" "),v("ol",[v("li",[t._v("connect(pages) = containers / 多个 container 的组合，此时"),v("code",[t._v("container")]),t._v("数据就有点像是"),v("code",[t._v("components")])]),t._v(" "),v("li",[t._v("connect(cotanniers)s = pages / 单独的链接"),v("code",[t._v("redux and container")]),t._v("然后组合构成"),v("code",[t._v("pages")])])]),t._v(" "),v("p",[t._v("重点在于需求期望是怎样组合方式")]),t._v(" "),v("h3",{attrs:{id:"components"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[t._v("#")]),t._v(" components")]),t._v(" "),v("blockquote",[v("p",[t._v("更关心 UI 部分")])]),t._v(" "),v("h3",{attrs:{id:"containers"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#containers"}},[t._v("#")]),t._v(" containers")]),t._v(" "),v("blockquote",[v("p",[t._v("应该有自身的数据行为")])]),t._v(" "),v("p",[t._v("例如一个 list，自身含有的行为应该是"),v("strong",[t._v("对列表的增加删除修改")])]),t._v(" "),v("p",[t._v("// TODO: 如果除了 list 自身的行为之外，含有服务器行为，这两个如何组合或者互相作用是应该好好是思考的")]),t._v(" "),v("h2",{attrs:{id:"引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[t._v("#")]),t._v(" 引用")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何组织你的项目接口"),v("OutboundLink")],1),t._v(" / 说的挺在理的")])])])}),[],!1,null,null,null);e.default=o.exports}}]);