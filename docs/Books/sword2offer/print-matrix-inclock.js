/**
 * @func printMatrixInClock: Print the value of matrix in clock order
 *
 * @param {array} arr: source array
 */
function printMatrixInClock (arr) {
  if (isArray(arr)) {
    var rows = arr.length
    var cols = arr[0].length
  }
  if (!isArray(arr) || !rows || !cols) {
    return
  }
  var start = 0
  while (rows > start * 2 && cols > start * 2) {
    printMatrixInCircle(arr, rows, cols, start)
    start++
  }
}

/**
 * @func printMatrixInCircle: Print matrix in circle order
 *
 * @param {array} arr: source array
 * @param {int} rows: the max rows of arr
 * @param {int} cols: the max cols of arr
 * @param {int} start: print matrix from start flag
 */
function printMatrixInCircle (arr, rows, cols, start) {
  var endX = cols - 1 - start,
    endY = rows - 1 - start

    // print l2r
  for (var i = 0; i <= endX; i++) {
    console.log(arr[start][i])
  }

    // print t2b
  if (start < endY) {
    for (var i = start + 1; i <= endY; i++) {
      console.log(arr[i][endX])
    }
  }

    // print r2l
  if (start < endX && start < endY) {
    for (var i = endX - 1; i >= start; i--) {
      console.log(arr[endY][i])
    }
  }

    // print b2t
  if (start < endX && start < endY - 1) {
    for (var i = endY - 1; i >= start + 1; i--) {
      console.log(arr[i][start])
    }
  }
}

function isArray (arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

var arr = [[1, 2, 3], [1, 2, 3]]
printMatrixInClock(arr)
