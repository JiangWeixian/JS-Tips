let callback = function (a, b) {
  return b - a
}

let priority = {
  '7': 3,
  '5': 2,
  '3': -1
}

let prioritySort = (arr, priority, fn) => {
  return arr.sort(function (a, b) {
    let pa = priority[a] || 1,
      pb = priority[b] || 1
    if (pb !== pa) {
      return fn(pa, pb)
    } else {
      return fn(a, b)
    }
  })
}

let arr = [6,5,4,3,2,1,7,8,3,5,4,6,8,2,12,545,745,323,7]
console.log(prioritySort(arr, priority, callback))