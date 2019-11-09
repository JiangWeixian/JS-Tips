let bubbleSorted = function (arr, callback) {
  if (arr.length === 1 || arr.length === 0) {
    return arr
  }
  for (let sortedI = 0; sortedI < arr.length; sortedI++) {
    for (let unsortedJ = 0; unsortedJ < arr.length - sortedI; unsortedJ++) {
      if (callback(arr[unsortedJ], arr[unsortedJ + 1])) {
        let tmp = arr[unsortedJ]
        arr[unsortedJ] = arr[unsortedJ + 1]
        arr[unsortedJ + 1] = tmp
      }
    }
  }
  return arr
}

let sortedArr = bubbleSorted([11, 23, 9, 13, 45], function (a, b) {
  return a > b
})
console.log(sortedArr)
