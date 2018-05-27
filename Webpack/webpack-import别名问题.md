# import别名问题
> 使用更短路径导入文件

## 如题何意？

当我们想要在`.vue`文件或者某个`.js`文件中导入模块或者`css`样式文件的时候。

如果那个文件在同一个路径下，`import './xx'`路径很短，也很好些。

但如果想要导入的文件和正在编辑的文件，**隔了N多文件夹**，就会出现`import ../../../xxx`这种路径地狱。

使用什么办法可以解决问题？

## 使用别名

类似`linux`的`alias`配置别名，可以制定`alias 1 = cd ..`。

同样在`vue`工程中也可以这么配置，如果你是通过`vue-cli`建立的工程，就会在`webpack`的配置文件中找到这么一段（如果不是通过`vue-cli`也同理）(在`module.export`内)

```javascript
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'base': resolve('src/components/base'),
      'api': resolve('src/api')
    }
}
```

* `extensions` - 是为了当`import xx.js`省略后面的文件名后缀。
* `alias` - 就是为了给路径设置别名。这里的`resolve`函数为

    ```javascript
    function resolve (dir) {
        return path.join(__dirname, '..', dir)
    }
    ```

一般我们会在`main.js`见到`import '@/components/xx'`见到。

**注意：** 这是`main.js`文件中的用法，如果是`.vue`文件，就又有不同的地方。我们无法通过`import 'assest/css/xx'`来导入样式文件或者任意的图片。

原因在于`import`会将后面的视为模块，而无论在`template`导入图片，或者`style`引入`css`。都不会将后面的路径视为模块。

只有在路径前面加上`~`前缀，才会将路径设置为模块。如`import '~assets/css/xx'` 。**一切OK**