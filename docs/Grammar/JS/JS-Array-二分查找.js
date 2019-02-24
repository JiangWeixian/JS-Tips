let noCurfind = (arr, target) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return -1
  }
  let start = 0,
    end = arr.length - 1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2),
      midValue = arr[mid]
    if (midValue < target) {
      start = mid + 1
    } else if (midValue > target) {
      end = mid
    } else {
      return 1
    }
    if (start === end) {
      return arr[start] === target? 1:-1
    }
  }
  return -1
}

console.log(noCurfind([1, 3, 4, 7, 9, 11], 1))
console.log(noCurfind([1, 3, 4, 7, 9, 11], 2))
console.log(noCurfind([1, 3, 4, 7, 9, 11], 3))
console.log(noCurfind([1, 3, 4, 7, 9, 11], 11))

let curFind = (arr, target) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return -1
  }
  let start = 0,
    end = arr.length - 1
  let mid = Math.floor((start + end) / 2),
    midValue = arr[mid]
  if (start === end) {
    return arr[start] === target? 1:-1
  }
  if (midValue < target) {
    return curFind(arr.slice(mid + 1, end), target)
  } else if (midValue > target) {
    return curFind(arr.slice(start, mid), target)
  } else {
    return 1
  }
}

console.log(curFind([1, 3, 4, 7, 9, 11], 1))
console.log(curFind([1, 3, 4, 7, 9, 11], 2))
console.log(noCurfind([1, 3, 4, 7, 9, 11], 3))
console.log(noCurfind([1, 3, 4, 7, 9, 11], 11))