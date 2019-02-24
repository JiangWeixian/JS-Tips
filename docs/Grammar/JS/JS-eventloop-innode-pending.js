setTimeout(function() { // S1
  console.log('setTimeout1');
}, 1000);

setTimeout(function() { // S2
  console.log('setTimeout2');
}, 0);

Promise.resolve()
.then(function() {
  return new Promise(function (resolve) { // p1-then1
    setTimeout(function () { // t(p1-then1-in)
      console.log('promise1-then1') // p1-then1-in
      resolve()
    },500)
  })
})
.then(function() {
  return new Promise(function (resolve) { // p1-then2
    setTimeout(function () { // t(p1-then2-in)
      console.log('promise1-then2') // p1-then2-in
      resolve()
    },500)
  })
})
.then(function () { // p1-then3
  console.log('promise1-then3')
})

Promise.resolve()
.then(function() { // p2-then
  console.log('promise2-then2')
})