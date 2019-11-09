# Nodejs项目初始化教程
> 搭建nodejs环境，测试纯JS代码

## 有什么？

* eslint-standard
* 能运行`es6`

## Init - 没有Webpack

> 最近的`node(v8)`其实已经可以运行`es6`

* [eslint](https://github.com/standard/eslint-config-standard)

```bash
npm install --save-dev eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

添加文件`.eslintrc`

```js
{
  "extends": "standard"
}
```

**注意：想要自动让eslint检查你的代码。如果不借助webpack是实现不了的。所以我选择好的IDE**

* in `webstorm ide`设置
    在`file->setting>lanuage&frameworks>javascript`选择`ecmascript6`。在下来菜单中`code quality tools>eslint`点击`enable`
* in `vscode ide`设置
    下载`eslint`插件应该就可以了