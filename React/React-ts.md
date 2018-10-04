# React-ts
> 与 typescript 遇上会如何

## 前言

当你安装了`typescript`全局，那么就可以通过`tsc`将`TS`文件转化为`JS`。

## In React Project

**安装**

1. `TS`是以全局包进行安装的`npm install typescript -g`
2. 以及进行类型检查的通过`npm install @types/packagename --save-dev`来下载某些包的类型声明文件（从`ts2.0`开始如此）

**配置**

1. `tsconfig.json` - `ts`最终都会转化为`js`文件，因此`tsc`会从该文件中读取配置项
