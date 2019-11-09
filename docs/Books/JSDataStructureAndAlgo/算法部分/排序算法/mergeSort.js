let mergeSort = function (arr) {
  if (arr.length === 1){
    return arr
  } 
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  
  return merge(left, right)
}

let merge = function (left, right) {
  let mergeArr = []
  let i = 0
  let j = 0
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mergeArr.push(left[i])
      i = i + 1
    } else {
      mergeArr.push(right[j])
      j = j + 1
    }
  }
  if (i === left.length) {
    mergeArr = mergeArr.concat(right.slice(j))
  }
  if (j === right.length) {
    mergeArr = mergeArr.concat(left.slice(i))
  }
  return mergeArr
}

let sortedArr = mergeSort([11, 23, 9, 13, 45])
console.log(sortedArr)