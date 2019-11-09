/**
 * function printToMaxofNDigits: print n digit number, for example \
 * if n = 3, print `1,2,3..., 999`
 *
 * @param {int} n: the number of digit
 */
const printToMaxofNDigits = (n) => {
  if (n <= 0) {
    return 'N can not be zero'
  }
  let baseStr = '0'.repeat(n)
  let number = Array.from(baseStr)
  while (!increment(number)) {
    var result = formatStr(number.join(''))
    console.log(result)
  }
}

/**
 * function printToMaxofNDigits2: another version of printToMaxofNDigits, the recursive way \
 * ideas are sorting combinations
 *
 * @param {int} n:the number of digit
 */
const printToMaxofNDigits2 = (n) => {
  if (n <= 0) {
    return 'N can not be zero'
  }
  let baseStr = '0'.repeat(n)
  let number = Array.from(baseStr)
  for (let i = 0; i < 10; i++) {
    number[0] = '' + i
    increment_recursive(number, n, 0)
  }
}

/**
 * function increment: use the arr to analog addtion
 *
 * @param {array} arr: just array, the int 998 will be ['9', '9', '8']
 */
const increment = (arr) => {
  let len = arr.length,
    token = 0,
    flagOverflow = false
  for (let i = len - 1; i >= 0; i--) {
    let sum = arr[i] - 0 + token
    if (i === len - 1) {
      sum++
    }
    if (sum >= 10) {
      if (i === 0) {
        flagOverflow = true
      } else {
        sum -= 10
        token = 1
        arr[i] = '' + sum
      }
    } else {
      arr[i] = '' + sum
      break
    }
  }
  return flagOverflow
}

/**
 * function increment_recursive: the recursive way to sorting combinations, and \
 * the result will be looked like addtion
 *
 * @param {array} arr: just array, the int 998 will be ['9', '9', '8']
 * @param {int} length: the number of digits
 * @param {int} index: which index of arr have be seted, defalut start from 0
 */
const increment_recursive = (arr, length, index) => {
  if (index === length - 1) {
    let result = formatStr(arr.join(''))
    console.log(result)
  } else {
    for (let i = 0; i < 10; i++) {
      arr[index + 1] = '' + i
      increment_recursive(arr, length, index + 1)
    }
  }
}

/**
 * function formatStr: format string, 098 will be 98. remove the all zero at head
 *
 * @param {string} str: the source string
 * @return {string}: the format string
 */
const formatStr = (str) => {
  let len = str.length
  let index = 0
  while (str[index] === '0') {
    index++
  }
  let resLen = len - index
  return str.substr(index, resLen)
}

// printToMaxofNDigits(3)
printToMaxofNDigits2(3)
