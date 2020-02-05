# countdown
> 也就是倒计时

`date`的变化并不会出发事件。所以它也就没有办法通过`addeventlistener`实现`pubsub`的方法。所以想要实现一个倒计时其实是一件比较蛋疼的事情。因为大多数时候我们都是通过`setinterval`来实现每秒去更新一下时间等。就像是这篇[文章](https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/)写的。