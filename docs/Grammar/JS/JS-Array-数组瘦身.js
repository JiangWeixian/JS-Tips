/**
 * 判断是否是空字符串
 * @param {string} value 
 * @return {boolean}
 */
const isEmptyStr = (value) => {
  return value === ''
}

/**
 * `[4, ['', [5, '', 6]]] -> [4, [5, 6]]`数组瘦身；原址修改方法。
 * 1. 对于数组元素进行递归瘦身，瘦身之后的元素重新赋值给当前位置index
 * 2. 第1点也就避免了index位置偏移
 * @param {array} arr 
 * @return {array}
 */
const shirk = (arr) => {
  let cnt = 0

  // 记录共有多少要删除的空字符串
  arr.forEach((item, index) => {
    if (isEmptyStr(item)) {
      cnt += 1
    } else if (Array.isArray(item)) {
      let res = shirk(item)
      // 将瘦身好的数组原址上修改
      if (res) {
        arr[index] = res
      }
    }
  })

  // 这部分是为了见所有空字符串排列至数组最后然后删除
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

  // 尾部指针前移，删除尾部元素
  arr.length = arr.length - cnt

  // 处理[[1, 2, 3]]的这种情况
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
