/**
 * 仅仅实现字符串类型数字到10进制数字转换
 * @param {*} str 字符串类型数字
 * @param {*} padix 将字符串类型数字视为padix进制
 */
// 如果是含有字母(可能是16进制以上)，需要修改regex，以及使用charCodeAt()
let parseint = (str, padix) => {
  if (typeof str !== 'string') {
    return
  }
  let regex = /(\d+)\.?/g
  let sub
  let result = 0
  let flag = !!padix
  let toNum = (str) => {
    // 将字符串转换为数字
    let strArr = str.split('')
    let len = strArr.length
    let result = 0
    strArr.forEach((element, index) => {
      result += +element * Math.pow(10, len - index - 1)
    });
    return result
  }
  let toTen = (num, padix) => {
    // 进行进制转换
    let numArr = []
    while (Math.floor(num / padix) !== 0) {
      numArr.push(num % 10)
      num = Math.floor(num / padix)
    }
    // 保证(num / padix = 0的那次可以进行转换
    numArr.push(num % 10)
    numArr.reverse()
    return numArr.reduce((acc, ele, index) => {
      return acc + ele * Math.pow(padix, numArr.length - index - 1)
    }, 0)
  }
  if (sub = regex.exec(str)) {
    sub = sub[1]
    result = toNum(sub)
    if (flag) {
      result = toTen(result, padix)
    }
  } else {
    return null
  }
  return result
}

console.log(typeof parseint('3.14') === 'number' && parseint('3.14'))
console.log(typeof parseint('3.14ss') === 'number' && parseint('3.14'))
console.log(typeof parseint('3.14.1') === 'number' && parseint('3.14'))
console.log(typeof parseint('3ss') === 'number' && parseint('3.14'))
console.log(typeof parseint('ss') === 'number' && parseint('3.14'))
console.log(typeof parseint('3') === 'number' && parseint('3.14'))
console.log(typeof parseint('10', 10) === 'number' && parseint('10', 10) === parseInt('10', 10) && parseint('10', 10))
console.log(typeof parseint('16', 16) === 'number' && parseint('16', 16) === parseInt('16', 16) && parseint('16', 16))