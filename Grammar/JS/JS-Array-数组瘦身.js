/**
 * `[4, ['', [5, '', 6]]] -> [4, [5, 6]]`
 * @param {array} arr 
 */

const isEmptyStr = (value) => {
  return value === ''
}
const shirk = (arr) => {
  let cnt = 0
  arr.forEach((item, index) => {
    if (isEmptyStr(item)) {
      cnt += 1
    } else if (Array.isArray(item)) {
      let res = shirk(item)
      if (res) {
        arr[index] = res
      }
    }
  })

  if (cnt > 0) {
    arr.sort((a, b) => {
      if (isEmptyStr(a) && isEmptyStr(b) || !isEmptyStr(a) && !isEmptyStr(b)) {
        return 0
      }
      if (isEmptyStr(a) && !isEmptyStr(b)) {
        return 1
      }
      if (!isEmptyStr(a) && isEmptyStr(b)) {
        return -1
      }
    })
  }

  arr.length = arr.length - cnt
  if (arr.length === 1 && Array.isArray(arr[0])) {
    return arr[0]
  }
  return arr
}

let arr = [4, ['', [5, '', 6]]]
arr = shirk(arr)
console.log(arr)
arr = [[[1, 2, 3]]]
arr = shirk(arr)
console.log(arr)
