# 深入浅出学习Node.js
> 可能不太会关系其深入的原理部分

## Tips

* 回调函数第一个一般是err
* nodejs自带继承工具
* 自带发布订阅模块，以及事件监听模块
* 大文件，无论是网络来的还是本地的，最好使用流方法处理(先保存磁盘在处理的方式)
* 如果出现乱码，一般是都是字节数目不对，或者编码格式不对

## 目录

* [CH1-Node简介](https://github.com/JiangWeixian/JS-Books/tree/master/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E5%AD%A6%E4%B9%A0Nodejs/CH1-Node%E7%AE%80%E4%BB%8B) / 异步那部分再一次深入解释
* [CH2-模块](https://github.com/JiangWeixian/JS-Books/tree/master/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E5%AD%A6%E4%B9%A0Nodejs/CH2-%E6%A8%A1%E5%9D%97) / 前端后端模块，后端模块加载优先级
* [CH3-异步IO](https://github.com/JiangWeixian/JS-Books/tree/master/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E5%AD%A6%E4%B9%A0Nodejs/CH3-%E5%BC%82%E6%AD%A5IO) / 前端是没有IO
* [CH4-异步编程](https://github.com/JiangWeixian/JS-Books/tree/master/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E5%AD%A6%E4%B9%A0Nodejs/CH4-%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B) / 如何使用异步IO，Nodejs自带发布订阅模块值得注意
* [CH5-内存](https://github.com/JiangWeixian/JS-Books/tree/master/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E5%AD%A6%E4%B9%A0Nodejs/CH5-%E5%86%85%E5%AD%98%E9%83%A8%E5%88%86)
* [CH6-Buffer](https://github.com/JiangWeixian/JS-Books/tree/master/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E5%AD%A6%E4%B9%A0Nodejs/CH6-Buffer) / 如何处理Buffer，网络数据一般通过 **原生Buffer拼接，而不是+**
* [CH7-网络编程](https://github.com/JiangWeixian/JS-Books/tree/master/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E5%AD%A6%E4%B9%A0Nodejs/CH7-%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B) / 简单介绍HTTP UDP以及认证加密
* [CH8-构建网络应用](https://github.com/JiangWeixian/JS-Books/tree/master/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E5%AD%A6%E4%B9%A0Nodejs/CH8-%E6%9E%84%E5%BB%BA%E7%BD%91%E7%BB%9C%E5%BA%94%E7%94%A8) / 介绍了网络所需要的一切
* [CH9-进程]() / 跳过了..以后补充
* [剩余部分]() / 快速掠过了