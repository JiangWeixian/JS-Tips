function Promiseown(fn) {
  var state = 'pending',
      value = null,
      callbacks = [];

  this.then = function (onFulfilled) {
      return new Promiseown(function (resolve) {
          handle({
              onFulfilled: onFulfilled || null,
              resolve: resolve
          });
      });
  };

  function handle(callback) {
      if (state === 'pending') {
          callbacks.push(callback);
          console.log(state)
          return;
      }
      //如果then中没有传递任何东西
      if(!callback.onFulfilled) {
          callback.resolve(value);
          return;
      }

      var ret = callback.onFulfilled(value);
      // console.log('in handle:', ret)
      callback.resolve(ret);
  }

  
  function resolve(newValue) {
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
          var then = newValue.then;
          if (typeof then === 'function') {
              then.call(newValue, resolve);
              return;
          }
      }
      this.state = state
      state = 'fulfilled';
      value = newValue;
      // console.log('in resolve:', value)
      setTimeout(function () {
          callbacks.forEach(function (callback) {
              handle(callback);
          });
      }, 0);
  }

  fn(resolve);
}

let asyncCall = function (callback) {
  setTimeout(() => {
    callback('asyncCall')
  }, 0);
}


// var obj3 = new Promiseown(resolve=>resolve('first'))
//   .then(function(value){
//     return new Promiseown(function (resolve) {
//       setTimeout(function() {
//         console.log('in obj3:', value)
//         resolve(1)
//       }, 2000)
//     })
//   })
//   .then(function(value){
//     setTimeout(function() {
//       console.log('in obj3:', value)
//     }, 1000)
//   })

// setTimeout(function() {
//     console.log('in obj3:', obj3.state)
//   }, 3000)
  
// var obj3 = new Promiseown(resolve=>resolve('first'))
//   .then(function(value){
//     console.log('in obj3:', value)
//     return 'second'
//   })
//   .then(function(value){
//     console.log('in obj3:', value)
//   }) 
  
// var obj4 = new Promiseown(resolve=>resolve('first'))
//   .then(function(value){
//     return new Promiseown(function (resolve) {
//       asyncCall(resolve)
//     })
//   }).then(function (value) {console.log(value)})

var obj4 = new Promiseown(resolve=>resolve('first'))
  .then(function(value){
    console.log(value)
    return new Promiseown(function (resolve) {
      resolve('how porcessing promise')
    })
  }).then(function (value) {console.log(value)})  

// var obj3 = new Promise(resolve=>resolve('first'))
//   .then(function(value){
//     return new Promise(function (resolve) {
//       setTimeout(function() {
//         console.log('in obj3:', value)
//         resolve(1)
//       }, 1000)
//     })
//   })
//   .then(function(value){
//     setTimeout(function() {
//       console.log('in obj3:', value)
//     }, 2000)
//   })

// setTimeout(function() {
//     console.log('in obj3:')
// }, 3000) 