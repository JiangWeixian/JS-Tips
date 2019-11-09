/**
 * function powerWithUnsignedNum: a implement of $a^{b}$
 *
 * @param {int} base: the value of a
 * @param {int} exponent: the value of b
 *
 * @return {number}: the result of  $a^{b}$
 */
const powerWithUnsignedNum = (base, exponent) => {
  if (exponent === 0) {
    return 1
  }
  if (exponent === 1) {
    return base
  }
  if (exponent < 0) {
    exponent = Math.abs(exponent)
    let result = powerWithUnsignedNum(base, exponent >> 1)
    result *= result
    if (exponent & 0x1) {
      result *= base
    }
    return 1.0 / result
  } else {
    let result = powerWithUnsignedNum(base, exponent >> 1)
    result *= result
    if (exponent & 0x1) {
      result *= base
    }
    return result
  }
}

console.log(powerWithUnsignedNum(2, 2))
console.log(powerWithUnsignedNum(2, -2))
