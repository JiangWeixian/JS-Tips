/**
 * @func verifySquenceOfBST: Verify that the array is a after-order binary output of the binary search tree.
 *
 * @param {Array} arr: the after-order array
 * @return {Boolean} true for arr is a after-order array of BST
 */
function verifySquenceOfBST (arr) {
  if (!isArray(arr) || arr.length <= 0) {
    return
  }

  var length = arr.length,
    root = arr[length - 1]

  for (var i = 0; i < length - 1; i++) {
    if (arr[i] > root) {
      break
    }
  }

  for (var j = i; j < length - 1; j++) {
    if (arr[j] < root) {
      return false
    }
  }

  var left = true,
    right = true

  if (i > 0) {
    left = verifySquenceOfBST(arr.slice(0, i))
  }

  if (i < length - 1) {
    right = verifySquenceOfBST(arr.slice(i, length - 1))
  }

  return left && right
}

function isArray (arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

var arr = [5, 7, 6, 9, 11, 10, 8]
console.log(verifySquenceOfBST(arr))
var arr2 = [7, 4, 6, 5]
console.log(verifySquenceOfBST(arr2))
