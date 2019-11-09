# Babel初始化教程

## Node - 没有HTML

初衷是我只想使用`JS`文件，没有`HTML`。

因此也就没有使用`Webpack`。

1. 创建`.babelrc`文件
2. `npm install babel-presets-env babel-presets-stage-2 --save-dev`
3. `npm install --save-dev babel-cli`由于没有全局安装，所以没有办法`babel xx.js`进行`es6->es5`转换
4. 打开`package.json`，在`scripts`项目添加

    ```JavaScript
    "scripts:" {
      "babel": "babel src -d lib"
    }
    ```

    含义为将`src`下所有文件转换为`lib(es5)`

    具体文件夹根据具体项目转换。

没有`webpack`你只能手动。目前没找到单文件转换的`npm`命令格式。
