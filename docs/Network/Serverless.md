---
tag: framework
---
# Serverless - 无服务框架
> （不是没有服务器）只是 **服务** 的颗粒度比 **微服务** 更细小。

[[toc]]

## 特点

1. 函数的 - 每一次请求其实就是调用服务器的一个函数。
2. 实时的 - 只有在调用的时候函数才会执行。其余情况并不会在等待（监听服务），不同于现在的服务存在形式，一旦将服务部署在服务器就会计算得到费用。`serverless`只会在函数执行的时候才会开始计算费用。有点像是前端交互，因为点击按钮才会发生副作用。
3. 独立的
   > 一个 Serverless 应用拥有自己的网关、数据库、接口，你可还以使用自己喜欢的语言（受限于服务提供者）来开发服务。换句话来说，在这种情形下，一个 Serverless 可能是一个完美的微服务实例。 
4. 需要冷启动 - 一个独立的 `service` 从发布到启动是需要时间的，可能是打包时间或者链接依赖服务的时间。
5. 不一定是服务端渲染 - serverless还是api, 这是一份很完整的[教程](https://serverless-stack.com/chapters/load-the-state-from-the-session.html)

**一些例子**

1. `github webhook`非常适合`serverless`方式


## refs

- [serverless.ink](https://serverless.ink/)