function Promiseown(executor) {
  var self = this

  self.status = 'pending'
  self.onResolvedCallback = []
  self.onRejectedCallback = []

  function resolve(value) {
    if (value instanceof Promiseown) {
      return value.then(resolve, reject)
    }
    setTimeout(function() { // 异步执行所有的回调函数
      if (self.status === 'pending') {
        self.status = 'resolved'
        self.data = value
        // console.log('in settimeout data', self.data, 'status', self.status, 'callbacks', self.onResolvedCallback.length)
        for (var i = 0; i < self.onResolvedCallback.length; i++) {
          self.onResolvedCallback[i](value)
        }
      }
    })
  }

  function reject(reason) {
    setTimeout(function() { // 异步执行所有的回调函数
      if (self.status === 'pending') {
        self.status = 'rejected'
        self.data = reason
        for (var i = 0; i < self.onRejectedCallback.length; i++) {
          self.onRejectedCallback[i](reason)
        }
      }
    })
  }

  try {
    executor(resolve, reject)
  } catch (reason) {
    reject(reason)
  }
}

Promiseown.prototype.then = function(onResolved, onRejected) {
  var self = this
  var Promiseown2

  // 根据标准，如果then的参数不是function，则我们需要忽略它，此处以如下方式处理
  onResolved = typeof onResolved === 'function' ? onResolved : function(value) {}
  onRejected = typeof onRejected === 'function' ? onRejected : function(reason) {}


  if (self.status === 'resolved') {
    // 如果Promiseown1(此处即为this/self)的状态已经确定并且是resolved，我们调用onResolved
    // 因为考虑到有可能throw，所以我们将其包在try/catch块里
    return Promiseown2 = new Promiseown(function(resolve, reject) {
      try {
        var x = onResolved(self.data)
        if (x instanceof Promiseown) { // 如果onResolved的返回值是一个Promiseown对象，直接取它的结果做为Promiseown2的结果
          
          x.then(resolve, reject)
        }
        // console.log('in x then data:', x.data, 'status:', x.status)
        resolve(x) // 否则，以它的返回值做为Promiseown2的结果
      } catch (e) {
        reject(e) // 如果出错，以捕获到的错误做为Promiseown2的结果
      }
    })
  }

  // 此处与前一个if块的逻辑几乎相同，区别在于所调用的是onRejected函数，就不再做过多解释
  if (self.status === 'rejected') {
    return Promiseown2 = new Promiseown(function(resolve, reject) {
      try {
        var x = onRejected(self.data)
        if (x instanceof Promiseown) {
          x.then(resolve, reject)
        }
      } catch (e) {
        reject(e)
      }
    })
  }

  if (self.status === 'pending') {
  // 如果当前的Promiseown还处于pending状态，我们并不能确定调用onResolved还是onRejected，
  // 只能等到Promiseown的状态确定后，才能确实如何处理。
  // 所以我们需要把我们的**两种情况**的处理逻辑做为callback放入Promiseown1(此处即this/self)的回调数组里
  // 逻辑本身跟第一个if块内的几乎一致，此处不做过多解释
    return Promiseown2 = new Promiseown(function(resolve, reject) {
      self.onResolvedCallback.push(function(value) {
        try {
          var x = onResolved(self.data)
          if (x instanceof Promiseown) {
            console.log('in x then data:', x.data, 'status:', x.status)
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })

      self.onRejectedCallback.push(function(reason) {
        try {
          var x = onRejected(self.data)
          if (x instanceof Promiseown) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}


Promiseown.prototype.catch = function(onRejected) {
  return this.then(null, onRejected)
}

var obj1 = new Promiseown(resolve=>resolve('first'))
  .then(function(value){
    console.log('in own:', value)
    return 'second'
  })
  .then(function(value){
    console.log('in own:', value)
  })

var obj2 = new Promise(resolve=>resolve('first'))
  .then(function(value){
    console.log('in origin:', value)
    return 'second'
  })
  .then(function(value){
    console.log('in origin:', value)
  })  

// var obj3 = new Promiseown(resolve=>resolve('first'))
//   .then(function(value){
//     console.log('in own:', value)
//     return new Promiseown(function (resolve) {
//       resolve(1)
//     })
//   })
//   .then(function(value){
//     console.log('in own:', value)
//   })  