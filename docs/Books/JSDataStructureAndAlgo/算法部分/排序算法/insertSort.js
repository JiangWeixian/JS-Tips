let insertSort = function (arr, callback) {
  if (arr.length === 1 || arr.length === 0) {
    return arr
  }
  for (let sortedI = 1; sortedI < arr.length; sortedI++) {
    let unSortedJ = sortedI - 1,
      tmp = arr[sortedI]
    while (unSortedJ >= 0 && callback(arr[unSortedJ], tmp)) {
      arr[unSortedJ + 1] = arr[unSortedJ]
      unSortedJ = unSortedJ - 1
      arr[unSortedJ + 1] = tmp
    }
  }
  return arr
}

let sortedArr = insertSort([11, 23, 9, 13, 45], function (a, b) {
  return b > a
})
console.log(sortedArr)
