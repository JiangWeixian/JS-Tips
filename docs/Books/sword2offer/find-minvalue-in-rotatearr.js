/**
 * function findMinvalueInRotateArr: find the min value of rotate array \
 * if we have a special array just like that [i, i+1, ..., i+n], the rotation of this array just like that [i+j, ..., i+n, i, ...i+(j-1)] \
 * so use dichotomy to find the min value in this arr
 *
 * @param {array} arr: Increment array
 *
 * @return {int}: the min value of Increment array
 */
function findMinvalueInRotateArr (arr) {
  var arrLength = arr.length
  if (arrLength === 0) {
    return 'Array is empty'
  }
  var indexHead = 0,
    indexBottom = arrLength - 1,
    indexMid = indexHead
  while (arr[indexHead] >= arr[indexBottom]) {
    if (indexBottom - indexHead === 1) {
      indexMid = indexBottom
      break
    } else {
      indexMid = (indexHead + indexBottom) / 2
      if (arr[indexHead] === arr[indexBottom] && arr[indexHead] === arr[indexMid]) {
        return Math.min.apply(null, arr)
      }
      if (arr[indexMid] >= indexHead) {
        indexHead = indexMid
      } else {
        indexBottom = indexMid
      }
    }
  }
  return arr[indexMid]
}

var arr = [4, 5, 1, 2, 3]
var arr2 = [1, 0, 1, 1, 1]
console.log(findMinvalueInRotateArr(arr))
console.log(findMinvalueInRotateArr(arr2))
