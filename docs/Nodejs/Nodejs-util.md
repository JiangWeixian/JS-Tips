# Nodejs - util
> 工具集

## 速写

有两个我比较在意

1. `callbackify` - 将一个`promise`风格函数转换为回调异步的函数

    ```JavaScript
    const util = require('util');

    async function fn() {
      return 'hello world';
    }
    const callbackFunction = util.callbackify(fn);

    callbackFunction((err, ret) => {
      if (err) throw err;
      console.log(ret);
    });
    ```

    而且还可以接受一个回调函数。

2. `promisify` - 将回调异步函数转换为`promise`风格

    ```JavaScript
    const util = require('util');
    const fs = require('fs');

    const stat = util.promisify(fs.stat);
    stat('.').then((stats) => {
      // Do something with `stats`
    }).catch((error) => {
      // Handle the error.
    });
    ```

    可以发现两者区别。不同都是在异步和异步函数之间变化，异步风格变了而已。