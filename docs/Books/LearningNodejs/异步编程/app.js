var events = require('events')
var proxy = new events.EventEmitter()
var fs = require('fs')

var status = 'ready'
// 使用发布订阅
var red = function (path, callback) {
  proxy.once('read', callback)
  if (status == 'ready') {
    status = 'pending'
    fs.readFile(path, 'utf8', function (err, res) {
      proxy.emit('read', res)
      console.log(status)
      status = 'ready'
    })
  }
}

// 不使用发布订阅
// var red = function (path, callback) {
//   if (status == 'ready') {
//     status = 'pending'
//     fs.readFile(path, function (err, res) {
//       callback(res)
//       status = 'ready'
//     })
//   }
// }

var callback = function (res) {
  console.log(res)
}

red('./files/1.txt', callback)

red('./files/2.txt', callback)
