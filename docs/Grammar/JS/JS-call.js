// 通过call修改作用域
var precount = 0
var aftercount = 0
function person (fn) {
  var name = Math.random()
  this.then = function (callback) {
    var pthen = new person (function (resolve) {
      var ret = callback(name)
      resolve(ret)
    })
    console.log('pthen', pthen.showname())
    return pthen
  }

  this.showname = function () {
    return name
  }

  function resolve(value) {
    if (typeof value == 'object') {
      var then = value.then
      console.log('pin-call-before', value.showname())
      then.call(value, resolve) // 这里的resolve来自pthen
      console.log('pin-call-after', value.showname())
      return
    }
    name = value
  }

  fn(resolve)
}

// var p1 = new person(function (resolve) {resolve('p1-name')})
// var p2 = new person(function (resolve) {resolve('p2-name')})
// console.log('p1', p1.showname())
// console.log('p2', p2.showname())
// var p3 = p1.then(function (name) {
//   console.log('comefromp1', name)
//   let pin = new person(function (resolve) {resolve(1)})
//   console.log('pin', pin.showname())
//   return pin
// })
// console.log('p3', p3.showname())

// function student () {

//   var name = Math.random()

//   this.showname = function () {
//     return name
//   }

//   this.then = function (callback) {
//     callback()
//   }

//   this.resolve = function (value) {
//     console.log(name)
//   }
// }

// var s1 = new student()
// var s2 = new student()
// debugger
// console.log('s1', s1.showname())
// console.log('s2', s2.showname())
// s1.then(s2.resolve)

function chair () {

  var name = Math.random()

  this.showname = function () {
    return name
  }

  this.then = function (callback) {
    callback(name)
  }

  this.resolve = function (value) {
    name = value
  }
}

var s1 = new chair()
var s2 = new chair()
console.log('s1', s1.showname())
console.log('s2', s2.showname())
s1.then(s2.resolve)
console.log('s2', s2.showname())