/**
 * 提取`str`千字符的数字部分，然后替换`,|.`里面的空格变为普通格式字符串
 * @param {string} str the origin string
 */
let a2b = (str) => {
  let regex = /[\d+,\.]+/g
  let code = /,|\./g
  let sub
  let results = []
  while (sub = regex.exec(str)) {
    results.push(shirnk(sub[0], code))
  }
  return results
}

let shirnk = (str, reg) => {
  return str.replace(reg, '')
}

let money = "我的账户余额：2,235,467.20端对端22,11"
console.log(a2b(money))

/**
 * 将普通格式字符串转换为千字符号分割
 * @param {string} str 只有数字的字符串
 */
let b2aAPI = (str) => {
  let regNum = /^\d+$/
  if (regNum.test(str)) {
    return (+str).toLocaleString('en-US')
  }
  return str
}

/**
 * 重点在于理解regex
 * @param {string} str 只有数字的字符串
 */
let b2a = (str) => {
  let regNum = /^\d+$/
  let regex = /(\d+)(?=((\d{3})+(?!\d)))/g
  if (regNum.test(str)) {
    return str.replace(regex, '$1,')
  }
  return str
}

console.log(b2a(money), b2a('1233'))