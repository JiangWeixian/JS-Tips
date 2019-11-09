# ReactNative
> 原生应用开发

## 前言

我是先学的`Vue`。`react`并没有学过。

为什么不用`weex`，因为文档太少。`reactnative`文档多，社区比较活跃。

所以这里只会记录，怎么做，并没有为什么。

平台`linux`，`Android`。

## 正文

从安装开始。甩手就是一片[官方文档](https://facebook.github.io/react-native/docs/getting-started.html)。**已经假设已经安装好了Android sdk,如果没有，直接安装android studio。一切解决。**

```bash
react-native init projectname
cd projectname
reactnative run-android
```

* 如果没有`sdk`安装路径，请在`~/bashrc`指定，一般实在`~/Android/Sdk`。这部分文档中有。
* `linux`可以命令行安装`platform-tools`。而`android studio`下载时候会帮你下载好。这两部分可能会冲突，版本号不一致。做法就是把`~/Android/Sdk`某个文件夹下复制到`~/usr/bin`下即可

大致是没有问题了。

### 使用`react-native-camera`

[地址](https://github.com/react-native-community/react-native-camera)，安装方法readme有写。这个步骤是不会出问题。

关键在于`reactnative run-android`，可能会出现的error。

#### Errors

* [gradle版本太低，因为react-native要求高](https://github.com/react-native-community/react-native-camera/issues/1530)

![gradle](https://raw.githubusercontent.com/JiangWeixian/articles/master/%E4%B8%8D%E4%BD%9C%E6%AD%BB%E5%B0%B1%E4%B8%8D%E4%BC%9A%E6%AD%BB/img/nznd03%20-%20grable.png)

* [com.android.support:support-v4 error](https://github.com/react-community/react-native-maps/issues/2158)
    ```bash
    dependencies {
    compile "com.android.support:appcompat-v7:27.1.0" // 后面版本高一点就行
    ```
* [resource没有找到](http://www.cnblogs.com/cute/p/5004839.html) - `app/build.gradle`里面`compileSdkVersion 27 buildToolsVersion "26.1.0"`因为要和电脑上的版本一直。
* [invariant violation element type is invalid](https://github.com/facebook/react-native/issues/16332) - 这是因为`babel`问题，`app.js`需要export defalut `class`。这里要注意：
    ```
    class  BadInstagramCloneApp extends Component 
    //..
    export BadInstagramCloneApp 记得分开写
    ```
* `require txt`等文件，在根目录下追加文件`rn-cli.config.js`
    ```Javascript
    module.exports = {
        getAssetExts() {
            return ['pb', 'txt']//pb txt都是文件后缀名
        }
    }
    ```    