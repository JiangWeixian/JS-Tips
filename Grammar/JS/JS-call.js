// 通过call修改作用域
function person (fn) {
  var name = Math.random()
  this.then = function (callback) {
    return new person (function (resovle) {
      var ret = callback()
      resolve(ret)
    })
  }

  this.showname = function () {
    return name
  }

  function resolve(value) {
    if (typeof value == 'object') {
      var then = value.then
      then.call(value.then, resolve)
      return
    }
    console.log(name)
  }

  fn(resolve)
}

var p1 = new person(function (resolve) {resolve()})
var p2 = new person(function (resolve) {resolve()})
console.log('p1', p1.showname())
console.log('p2', p2.showname())
p1.then(function () {
  return new person(function (resolve) {})
})