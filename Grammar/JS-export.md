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

```JavaScript
// in module.js
export defalut a
// in another.js
import a from './module'
```

```JavaScript
// in module.js
export default {
  a,
  b
}
// in another.js
import {a, b} from './module'
// or
import * as abc from './module'
abc.a
abc.b
```

## 参考链接

* [1](http://imweb.io/topic/582293894067ce9726778be9)
* [2](https://medium.com/@zachgavin/module-exports-and-loading-es5-to-es6-a33ac592989c)