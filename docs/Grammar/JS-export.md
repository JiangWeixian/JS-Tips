# export
> ES5&ES6 模块导入导出必知必会

## 前言

目前我使用的`node`版本是`v8.10.0`，目前还不支持`export defalut&import`，所以`es5`的模块导出导入才是应该被学会的。

## ES5

```JavaScript
// in module.js
module.exports = a
// in another.js
let a = require('./module')
```

```JavaScript
// in module.js
module.exports = {
  a: a
  b: b
}
// in another.js
let a = require('./module')
a.a
a.b
// or
let a = require('./module').a
```

```JavaScript
// in module.js
module.exports.a = a
module.exports.b = b
// in another.js
let a = require('./module')
a.a
a.b
// or
let a = require('./module').a
let b = require('./module').b
```

## ES6

> 这篇[文章](https://segmentfault.com/a/1190000010426778)可以帮到你

**导出的是`defalut`而不是非`defalut`属性，所以其他访问不到**

**而且可理解为`default`后面跟着是这个模块名字**

```JavaScript
// in module.js
export defalut a
// in another.js
import a from './module'
```

**如果是以下，也不能够带有`default`因为也不是能够作为模块名**

```JavaScript
// in module.js
export {
  a,
  b
}
// in another.js
import {a, b} from './module'
```

**如果想要将`defalut`或者非`defalut`元素共同导出，可以使用`import * as xx from`**

```JavaScript
exprort {a, b}
export defalut abc

import * as m from './module'
```

那么可以使用`m.a or m.b`，如果想要使用`defalut`，那么需要通过`m.default`

## 参考链接

* [1](http://imweb.io/topic/582293894067ce9726778be9)
* [2](https://medium.com/@zachgavin/module-exports-and-loading-es5-to-es6-a33ac592989c)