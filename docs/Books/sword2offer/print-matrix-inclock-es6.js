/**
 * @func printMatrixInClock: Print the value of matrix in clock order
 *
 * @param {array} arr: source array
 */
const printMatrixInClock = (arr) => {
  let rows, cols
  if (Array.isArray(arr)) {
    rows = arr.length
    cols = arr[0].length
  }
  if (!Array.isArray(arr) || !rows || !cols) {
    return
  }
  let start = 0
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
const printMatrixInCircle = (arr, rows, cols, start) => {
  let endX = cols - 1 - start,
    endY = rows - 1 - start

    // print l2r
  for (let i = 0; i <= endX; i++) {
    console.log(arr[start][i])
  }

    // print t2b
  if (start < endY) {
    for (let i = start + 1; i <= endY; i++) {
      console.log(arr[i][endX])
    }
  }

    // print r2l
  if (start < endX && start < endY) {
    for (let i = endX - 1; i >= start; i--) {
      console.log(arr[endY][i])
    }
  }

    // print b2t
  if (start < endX && start < endY - 1) {
    for (let i = endY - 1; i >= start + 1; i--) {
      console.log(arr[i][start])
    }
  }
}

const arr = [[1, 2, 3], [1, 2, 3]]
printMatrixInClock(arr)
