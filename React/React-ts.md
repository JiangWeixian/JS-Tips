# React-ts
> 与 typescript 遇上会如何

## 前言

当你安装了`typescript`全局，那么就可以通过`tsc`将`TS`文件转化为`JS`。

## In React Project

**安装**

1. `TS`是以全局包进行安装的`npm install typescript -g`
2. 以及进行类型检查的通过`npm install @types/packagename --save-dev`来下载某些包的类型声明文件（从`ts2.0`开始如此） / 最好下载这个文件

**配置**

1. `tsconfig.json` - `ts`最终都会转化为`js`文件，因此`tsc`会从该文件中读取配置项

    > 关于这个文件，有几个是需要注意的，可以参考[react-starter](https://github.com/Microsoft/TypeScript-React-Starter/blob/master/tsconfig.json)

    * `jsx` - 是为了支持`jsx`格式

2. 路径缩写，例如`@/components`指代`src/components/`避免陷入相对路径的地狱，需要 **进行两步**

    * 如果使用了`webpack`的话，`resolve->alias`配置项
        
        ```JavaScript
        resolve: {
          alidas: {
            '@': path.resolve(xx)
          }
        }
        ```

        在`webpack`打包的时候的路径
    * 对于`vscode`来说，路径提示还需要额外配置，如果你使用`ts`就会读取`tsconfig.json`（否则就是`jsconfig.json`）。**注意baseUrl 以及paths 两个配置项必须共同出现**

        ```json
        "compilerOptions": {
          "sourceMap": true,
          "jsx": "react",
          "baseUrl": ".",
          "paths": {
            "@/*": ["./src/*"],
          }
        },
        ```

