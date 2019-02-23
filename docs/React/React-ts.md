# React-ts
> 与 typescript 遇上会如何

<!-- TOC -->

- [React-ts](#react-ts)
  - [**前言**](#前言)
  - [**TS in React Project**](#ts-in-react-project)
  - [**Babel**](#babel)
  - [引用](#引用)

<!-- /TOC -->

## **前言**

当你安装了`typescript`全局，那么就可以通过`tsc`将`TS`文件转化为`JS`。

## **TS in React Project**

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
3. 关于**编译**，有一个配置项为`lib`
    > 问题就出在`lib`，如果同时使用了`babel`想要使用`es6`语法&`api`。**就必须使用`lib: ['dom', 'es6']`**，不然就没有办法使用？

    个人理解`lib`作用就是编译`ts`时候支持的语法。

4. 在`webpack`以及`tsconfig.json`中添加了`sourcemap`[链接](https://juejin.im/post/58293502a0bb9f005767ba2f)

        
## **Babel**
> 添加`babel`支持

参考了[ts-loader-example](https://github.com/TypeStrong/ts-loader/blob/master/examples/react-babel-allowjs/.babelrc)进行配置。

但是在之前写过一篇文章指出`babel`分为语法以及`API`的转义，而以上只是进行了语法的转义。

**但是关键在于在[TS in React Project](#ts-in-react-project)提到了`lib`**，就会有一个疑问？

> 既然可以通过`tsconfig.json`让`ts`支持`es6 or es7`。那么还有必要`babel`吗

> 而且发现，**不添加`tsconfig.json`中`lib`，只是`.babelrc`**。是没有办法识别`ts`中新的`es6`语法

**关于`babel-loader and ts-loader`理解**

1. 因此`ts-loader`根据`tsconfig.json`理解`ts or tsx`文件
2. `babel-loader`应该是支持的`js`文件，在[ts-loader-example](https://github.com/TypeStrong/ts-loader/tree/master/examples/react-babel-allowjs)可以看到，在需要支持`js`的时候才会加入`babel`

**可以得到结论：**

1. 如果是纯`ts`工程，不需要`babel`
2. 如果含有`js`，那么可能需要`babel` - 既然选择了`ts`，尽量也不要使用`js`
3. 如果第三方库文件含有`js`文件 - **待验证**

## 引用

* [babel-in-react](https://juejin.im/post/5a79adeef265da4e93116430)
* [官方`tsconfig.json`参考链接](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
* [`tsconfig.json`配置项中文说明](https://github.com/hstarorg/HstarDoc/blob/master/%E5%89%8D%E7%AB%AF%E7%9B%B8%E5%85%B3/TypeScript%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6tsconfig%E7%AE%80%E6%9E%90.md)
* [react-热更新指导性配置文章](https://blog.csdn.net/huangpb123/article/details/78556652)