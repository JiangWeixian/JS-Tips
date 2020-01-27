---
tag1: mock
---

# umi-mock

## good

好用的`api`文档数据生成。

* 可以模拟`api`请求，返回mock数据。
* 同时也可以通过`api`直接生成文档。

## bad

但是无法监听`mock data`的变化重新开启`mock server`。如果无法重新开启就没有办法让接口返回的数据更新。当前的办法是借助`npm-watch`进行监听执行监听任务。

## refs

基于的`npm package`

- [npm-roadhogdocapi](https://www.npmjs.com/package/roadhog-api-doc)
