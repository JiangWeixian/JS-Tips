/**
 * function byte_count: 1.0 version, count how many 1 in binary of n(decimal) \
 * if `1001`, output 2
 *
 * @param {int} n: decimal number
 * @return {array}: first number types the nums of 1 in binary numbers, second numbers type the nums of iteration
 */
function byte_count (n) {
  var count = 0,
    flag = 1,
    iter = 0
  while (flag) {
    if (n & flag) {
      count++
    }
    flag = flag << 1
    flag = flag & 0xffffffff
    iter++
  }
  return [count, iter]
}
/**
 * function byte_count2: 2.0 version, less iteration than 1.0 version
 *
 * @param {int} n: decimal number
 * @return {int} count: numbers of 1, numbers of iteration
 */
function byte_count2 (n) {
  var count = 0
  n = n & 0xffffffff
  while (n) {
    count++
    n = (n - 1) & n
  }
  return count
}

/**
 * function check_multiple_of_two: check n%2 equal 0 or not
 *
 * @param {int} n: decimal number
 * @return {boolean}: true for n%2 = 0, otherwise != 0
 */
function check_multiple_of_two (n) {
  var count = 0
  while (n) {
    count++
    n = (n - 1) & n
    if (count > 1) {
      return false
    }
  }
  return true
}

/**
 * function check_byte_different: two decimal number, check nums of different byte \
 * for example, 1010 and 1101 equal 0111, total 3 numbers
 *
 * @param {int} a: decimal number
 * @param {int} b: decimal number
 *
 * @return {int} count: the nums of different digits
 */
function check_byte_different (a, b) {
  var n = a ^ b
  var count = 0
  while (n) {
    count++
    n = (n - 1) & n
  }
  return count
}

console.log(byte_count(9))
console.log(byte_count2(9))
console.log(check_multiple_of_two(8))
console.log(check_byte_different(10, 13))
