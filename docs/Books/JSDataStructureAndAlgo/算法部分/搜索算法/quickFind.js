let quickFind = function (arr, target) {
  if (arr.length === 0) {
    return false
  }
  if (arr.length === 1) {
    return arr[1] === target
  } else {
    let start = 0,
      end = arr.length - 1
    while (start <= end) {
      let mid = Math.floor((start + end) / 2)
      let midValue = arr[mid]
      console.log(start, mid, end)
      if (midValue < target) {
        start = mid + 1
      } else if (midValue > target) {
        end = mid - 1
      } else {
        return true
      }
    }
  }
}

let arr = Array(8).fill(0).map((item, index) => { return index })
console.log(quickFind(arr, 2))
