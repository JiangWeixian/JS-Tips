function curMap (n, m) {
  if (n === 1 && m === 1) {
      return ['az', 'za']
  }
  var left = []
  var right = []
  if (n > 1) {
      left = curMap(n - 1, m)
      var first = left.map(function (item, index) {
          return 'a' + item
      })
      var second = left.map(function (item, index) {
        return item + 'a'
      })
      left = first.concat(second)
  }
  if (m > 1) {
      right = curMap(n, m - 1)
      var first = right.map(function (item, index) {
        return 'z' + item
      })
      var second = right.map(function (item, index) {
        return item + 'z'
      })
      right = first.concat(second)
  }
  return left.concat(right)
}

console.log(new Set(curMap(2, 2)))