---
tag1: setInterval
tag2: cron
---

# node-cron
> cron就是此类定时任务的统称

突然对`todo`这类应用的定时任务如何执行有了一点疑惑。如果从前端的思维出发，第一时间想到的就是`setInterval`这种方法。

但是对于网页来说，关闭网页就以为着任务的结束。必然是需要额外的数据存储或者是`server`支持。暂且撇开这个不讨论。

`cron task`有没有什么好的办法执行的？[node-cron](https://github.com/kelektiv/node-cron) 这个库解决了大部分问题。那么基于这个库看看能不能解决我的疑惑？（在额外的数据存储或者是`server`支持下，参考现在`todo app`实现。在`kill app`仍旧是可以进行`push`的）

- Q1 - 如何解决定点执行的任务。（大多数`app`主题功能）
- A1 - 这个好解决。因为即使服务器挂了。下一次时间到来的时候。仍旧是可以进行触发提醒的。
- Q2 - 周期提醒的任务，比如说是重复的（每天。每周）
- A2 - 在服务器不挂的情况下，自然正确执行。因为重复任务一定和某个具体时间点挂钩，那么及时`cron job server failed`。那么重启之后依旧可以在某个时间点正确的重复执行。
