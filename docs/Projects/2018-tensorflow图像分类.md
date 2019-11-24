# Tensorflow+Vue

<!-- TOC -->

- [Tensorflow+Vue](#tensorflowvue)
  - [关键技术](#关键技术)
  - [流程](#流程)
  - [调用摄像头](#调用摄像头)
    - [流程](#流程-1)
  - [检测](#检测)
    - [流程](#流程-2)
  - [显示](#显示)
    - [问题所在？](#问题所在)

<!-- /TOC -->

## 关键技术

* tensorflow.js and mobilenet - 都是`NPM`包
* 调用手机`camera`
* [项目地址](https://github.com/JiangWeixian/tf-mobilenet-vue)

## 流程

检测分为三个阶段：获取模型输入、进行检测和输出结果

1. 获取输入 - 通过调用摄像头来获取输入图像
2. 将摄像头得到的一帧图像作为模型输入
3. 将模型的检测结果返回，并输出到屏幕上

## 调用摄像头

[MDN-官方API参考](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia)

* 获取摄像头数目(前置和后置) - `navigator.mediaDevices.enumerateDevices`
* 获取摄像头 - `navigator.getUserMedia`，现在新的`API`是`navigator.mediaDevices.getUserMedia`。可以设置 **视频，音频以及是否前置后置摄像头**

### 流程

1. 初始化摄像头 - 针对不同浏览器统一接口函数
2. 获取摄像头数目
3. 将摄像头数目、音频和视频(是否开启)作为参数传递来开启摄像头

**将视频流显示**

结合`video`标签使用，设置`video.src`为获取得到视频流(MDN做了兼容处理)

**截取其中某一帧**

`SVG`具有画图功能

* `drawImage` - 画图。在这个项目中，直接将`video`标签传递进来
* `toDataURL` - 将`svg`变为`image`的`src`，起到显示作用

## 检测

[tensorflow.js](https://js.tensorflow.org/)

在本例中，直接使用`tensorflow`的转换功能，将网络权重转换为网络模型。

如果想要训练的话，官方给了[mnist例子](https://js.tensorflow.org/tutorials/mnist.html)。大体流程和`python`版本一致：

1. 加载数据(包括输入和输出) - `data`通过`Image`数据并转化为`SVG`作为`image-data`，具体可看[这里](https://github.com/tensorflow/tfjs-examples/blob/master/mnist/data.js)。
2. 构建网络模型
3. 设置误差更新目标函数，以及误差速率等
4. 然后训练

更多例子。

所以想要在更为复杂的数据集上训练并不合适：

1. 如果通过`nodejs`来辅助的话，为什么不使用`python-tensorflow`然后转化为`tensorflow.js`使用
2. 如果可以想要以`mnist`方式训练，数据请求是一个大问题

**这个一定要注意！也要说清楚。**

### 流程

1. 加载网络模型 - 包括加载权重和构建网络
2. 然后将 **调用摄像头**中获得的图像作为输入。获得检测结果，接下来进入显示阶段。

## 显示

了解了`debounce`之后，这部分还有改进部分。目前的方式是：

1. 检测得到结果，设置显示`flag=true`
2. 如果检测到`flag`为`true`。就开始进入显示动画，显示动画持续一段时间，然后消失。

### 问题所在？

关键就在于这个显示。

因为如果连续点击检测按钮的话会有问题。可以参考`debounce`方法改进。
