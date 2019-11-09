/**
 * function find: find target in matrix, the matrix has special formattion
 * ... the item in row, from left to right, become bigger
 * ... the item in col, from top to botton, become bigger
 *
 * @param {*} matrix: special formattion
 * @param {*} target : the find target
 */

function find (matrix, target) {
  if (matrix === []) {
    return false
  }
  var row = matrix.length,
    col = matrix[0].length
  var i = 0,
    j = col - 1
  while (i < row && j > -1) {
    if (matrix[i][j] > target) {
      j -= 1
    } else if (matrix[i][j] < target) {
      i += 1
    } else if (matrix[i][j] === target) {
      return {i: i, j: j}
    }
  }
  return false
}

a = [[1, 2, 3], [5, 6, 7]]
b = []
console.log(find(a, 2))
