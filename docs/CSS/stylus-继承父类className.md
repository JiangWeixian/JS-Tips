# stylus - 继承父类className

起因为当定义一个模块`admin`。

```js
<div className='admin'>
  <p className='admin_content'></p>
</div>
```

使用`bem`的命名规则，`admin_content`代表的是它的子类元素。

那么在`.styl`文件中书写一定是

```css
.admin

.admin_content
```

（但是如果能偷懒最好就偷懒，绝不多写一行代码）是否有办法可以让我们省略`admin`的书写，从另外一种意义上来说，就是子类自动继承父类的名字。**我们只需要拼接字符串，添加状态，添加子类得到最终的子类`classname`**

`stylus`中`&`代表的就是父类的名字。

```css
.admin
  &:hover
```

这种写法中`&`代表的就是父类`classname`。

更为灵活的是：

```css
.admin
  &_content
```

此时会被编译为

```css
.admin

.admin_content
```

**重要的是编译出来的两个`classname`并没有嵌套的关系，而是同级别，加了`prefix`而已。**
