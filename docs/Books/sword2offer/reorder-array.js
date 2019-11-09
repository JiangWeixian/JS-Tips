/**
 * function reorderArrBase: version 1.0 reorder array, make the odd number all in front of even number
 *
 * @param {array} arr: source array
 */
function reorderArrBase (arr) {
  var index_head = 0,
    index_bottom = arr.length - 1
  while (index_bottom > index_head) {
    while (index_bottom > index_head && arr[index_head] % 2 === 1) {
      index_head++
    }
    while (index_bottom > index_head && arr[index_bottom] % 2 === 0) {
      index_bottom--
    }
    if (index_bottom > index_head) {
      var tmp = arr[index_bottom]
      arr[index_bottom] = arr[index_head]
      arr[index_head] = tmp
    }
  }
  return arr
}

/**
 * version 2.0 reorder array, use params-func to judge the element in arr
 * 1. reach an odd number in front of even number
 * 2. reach negative number in front of positive number
 *
 * @param {array} arr: source array
 * @param {function} func: judge function
 */
function reorderArrBetter (arr, func) {
  var index_head = 0,
    index_bottom = arr.length - 1
  while (index_bottom > index_head) {
    while (index_bottom > index_head && !func(arr[index_head])) {
      index_head++
    }
    while (index_bottom > index_head && func(arr[index_bottom])) {
      index_bottom--
    }
    if (index_bottom > index_head) {
      var tmp = arr[index_bottom]
      arr[index_bottom] = arr[index_head]
      arr[index_head] = tmp
    }
  }
  return arr
}

function isEven (element) {
  return element % 2 === 0
}

function isPositive (element) {
  return element > 0
}
var arr = [2, 4, 1, 8, 10, 13]
var arr1 = [-1, -2, 3, -4, 5]
console.log(reorderArrBase(arr))
arr = [2, 4, 1, 8, 10, 13]
console.log(reorderArrBetter(arr, isEven))
console.log(reorderArrBetter(arr1, isPositive))
