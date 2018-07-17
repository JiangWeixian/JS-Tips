/**
 * 升序意为着元素数值从小到大，旋转意味着数组前面一段被拼接到数组最后
 * @param {Array} arr 经过N>=1旋转的升序数组（如果没有经过旋转这个是找不到最小值的）
 */
var findMin = function (arr) {
  if (!Array.isArray(arr) || arr.length === 0 || arr.length === 1) {
    return;
  }
  let start = 0,
    end = arr.length - 1
  while (start < end) {
    let mid = Math.floor((start + end) / 2),
      midValue = arr[mid]
    if (midValue >= arr[start]) {
      start = mid + 1
    }
    if (midValue < arr[end]) {
      end = mid
    }
    if (end - start === 1) {
      return Math.min(arr[start], arr[end])
    }
  }
  return arr[start]
}

// 原数组为[4, 6, 8, 10, 13, 16, 21, 55]
var arr = [10, 13, 16, 21, 55, 4, 6, 8]
console.log(findMin(arr))
arr = [21, 55, 4, 6, 8, 10, 13, 16]
console.log(findMin(arr))
arr = [6, 8, 10, 13, 16, 21, 55, 4]
console.log(findMin(arr))