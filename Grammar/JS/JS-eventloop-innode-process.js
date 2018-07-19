setTimeout(() => {
  console.log('timeout1')
  process.nextTick(function () {
    console.log('nexttick1')
  })
});

console.log('main1')

function say () {
  console.log('say')
  process.nextTick(function () {
    console.log('nexttick2')
  })
}

new Promise(function (resovle) {
  process.nextTick(function () {
    console.log('nexttick3')
  })
  console.log('promise1')
  resovle()
}).then(function () {
  console.log('promise1-then')
})

console.log('main2')

process.nextTick(function () {
  console.log('nexttick4')
})

say()