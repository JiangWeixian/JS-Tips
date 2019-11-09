/**
 * Note:
 * - string object can not be changed by s[1] = 't', just like python
 * - string.prototype.replace maybe support by some browsers, please be carefully, and if the first param \
 *  not a regexp in function replace, only the first match string will be replaced
 * - string.prototype.split, if s.split(''), the string will be a array one letter by one letter. So this will be used in v3
 * - if arr.length = 12, we set arr[arr.length] = '...' . throw no errors. So this will also be used in v3
 */

/**
 * function replaceStrSpace(v1/v2/v3), replace target in s by result
 * v1: use split
 * v2: use replace
 * v3: use the way in sword2offer, a polyfill of replaceall
 *
 * @param {string} s: only support `var s = '...'`, the origin string
 * @param {string} target: only support `var target = '...'`, the target str will be replaced
 * @param {string} result: only support `var result = '...'`, the target will be result
 * @return {string}: the string after replace
 */
const replaceStrSpaceV1 = (s, target, result) => {
  if (typeof s !== 'string' || typeof target !== 'string' || typeof result !== 'string') {
    return false
  }
  const StrArray = s.split(target)
  return StrArray.join(result)
}

const replaceStrSpaceV2 = (s, target, result) => {
  if (typeof s !== 'string' || typeof target !== 'string' || typeof result !== 'string') {
    return false
  }
  const reg = new RegExp(target, 'g')
  const newStr = s.replace(reg, result)
  return newStr
}

const replaceStrSpaceV3 = (s, target, result) => {
  if (typeof s !== 'string' || typeof target !== 'string' || typeof result !== 'string') {
    return false
  }
  const StrArray = s.split('')
  let strLength = StrArray.length
  const targetCountLength = s.split(target).length - 1
  const targetLength = target.length,
    resultLength = result.length
  let finalStrLength = strLength + targetCountLength * (resultLength - targetLength)
  strLength -= 1
  finalStrLength -= 1
  while (strLength > -1 && finalStrLength > strLength - 1) {
    if (StrArray[strLength] == target) {
      for (let i = 0; i < resultLength; i++) {
        StrArray[finalStrLength] = result[i]
        finalStrLength -= 1
      }
    } else {
      StrArray[finalStrLength] = StrArray[strLength]
      finalStrLength -= 1
    }
    strLength -= 1
  }
  return StrArray.join('')
}

var s = new String('super')
var s1 = 'super'
var a = new Array(20)
var replacestr = 'We are happy'
var replacestrArr = replacestr.split('')
console.log(replacestrArr[2] == ' ')
console.log(replaceStrSpaceV1(replacestr, ' ', '%20'))
console.log(replaceStrSpaceV2(replacestr, ' ', '%20'))
console.log(replaceStrSpaceV3(replacestr, ' ', '%20'))
console.log(a)
console.log(s[1])
console.log(String.prototype.isPrototypeOf(s))
console.log(s1 instanceof String)
console.log(typeof s1 === 'string')
