/**
 * function find: find target in matrix, the matrix has special formattion
 * ... the item in row, from left to right, become bigger
 * ... the item in col, from top to botton, become bigger
 * @param {*} matrix: special formattion
 * @param {*} target : the find target
 */

const find = (matrix, target) => {
  if (matrix === []) {
    return false
  }
  const [row, col] = [matrix.length, matrix[0].length]
  let [i, j] = [0, col - 1]
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

const a = [[1, 2, 4], [5, 6, 8]]
const {i, j} = find(a, 8)

console.log(i, j)
