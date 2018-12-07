# React-CSSModules
> 如何模块化管理CSS-Modules。

> 好处是可以实现类如`react`管理组件的继承方式。

[CSS-Moules](https://raw.githubusercontent.com/css-modules/logos/master/css-modules-logo.png)

## 为什么我们要使用？

组件已经是模块化管理了，**理论上CSS也应该是模块化的。这一点在`Vue`里面可能会特别明显。**

因为`Vue css`是写在特殊的`CSS style`里面的。样式和组件是绑定的。

从某种意义上，样式是组件化的。

**但是样式能够像组件那样导出导入吗？**

> 或许如果将样式文件写成单独的文件能够实现让别的文件也能再次导入这些文件。

**如果提高要求，想要文件其中的一个`class`样式？**

> 以上的方面是做不到的。所以就有了css-modules


## CSS-Modules

**能够做到：**

* 复用类名 - 可以从某个样式文件中导出具体的类名

**规则**

> 命名上可以和BEM一致。

> 只会转义类名（在类后面加上`hash`值），不会转义其他的样式选择器。**只会转移`styles.classnmame`使用的样式**

1. 不要有嵌套的类的写法（只能说尽量不要用）
2. 不要使用其他的样式选择器。至少在构建某一个具体的组件样式的时候不要这么做。

    > 其他的样式选择器是在复用或者覆盖样式的使用的。

4. 复用样式

  * 导出具体样式

  ```CSS
    .className {
    color: green;
    background: red;
  }

  .otherClassName {
    composes: className;
    color: yellow;
  }
  ```

  或者你可以`composes: className from './xxx.css`. **这或许不推荐使用嵌套CSS的原因。**

  以上代码意味着构建的`otherclassname`先是继承了`classname`的样式，并重写了其中部分。

5. 覆盖样式 - 有两种方式

  * 通过`:global`的方式覆盖具体样式 - 这里面有个问题如果使用`global`的话，必须结合选择器才能够重写样式。但是`css-modules`会给`classname`加上hash数值。所以我们没有办法获取`hash`之后的样式。**除非你给组件加上一个不通过`styles.classname`的类名，例如`className={ classnames(styles.xx, 'yy') }`其中`yy`就不会被加上`hash`**

  * 利用`css-modules`只会转义类选择器特点。可以给某个组件加上`data-role=xxx`这样就可以在样式选择器通过`[data-role=xxx]`来进行选择了。

**:global**可以理解为将这部分样式导出为了一个单独的文件。

### Q&A

1. 和`BEM`规则冲突吗？

> 不冲突，或许在命名规则上有些妥协。

2. **解决了什么问题？**

> 能够导入其中一些具体的类而不是文件。
