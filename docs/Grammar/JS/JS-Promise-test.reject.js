// 传递错误
Promise.reject(new Error('fail')).then(function() {
  // not called
}, function(error) {
  console.log(error); // Stacktrace
});

// 传递promise

let p = new Promise(function (resolve, reject) {
  reject(1)
})

Promise.reject(p).then(function() {
  // not called
}, function(error) {
  console.log(error); // Stacktrace
});