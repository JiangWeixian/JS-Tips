# Array-随机排序
> shuffle

[JS-Array随机排序](https://blog.oldj.net/2017/01/23/shuffle-an-array-in-javascript/)

```JavaScript
function shuffle(arr) {
  var i = arr.length, t, j;
  while (i) {
    j = Math.floor(Math.random() * i--);
    t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
}
```