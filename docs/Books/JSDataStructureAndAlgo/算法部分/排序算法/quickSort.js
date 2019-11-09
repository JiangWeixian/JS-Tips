let quickSort = function (arr, left, right) {
  if (arr.length > 1) {
    let index = splitPart(arr, left, right)
    console.log(index)
    if (left < index - 1) {
      quickSort(arr, left, index - 1)
    }
    if (right > index) {
      quickSort(arr, index, right)
    }
  }
}

let splitPart = function (arr, left, right) {
  let mid = Math.floor((left + right) / 2),
    parivot = arr[mid],
    i = left,
    j = right
    while (i <= j) {
      console.log(i, j)
      while (arr[i] < parivot) {
        i += 1
      }
      while (arr[j] > parivot) {
        j -= 1
      }
      if (i <= j) {
        let tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
        // 理解一下下面两行代码
        //  下面倆个代码补充上面两个while循环工作
        //  因为找到比privot大的元素下标以及，比privot小的元素下标之后。
        // 上面两个循环被停止了，需要重新i++和j--来重新开启上面两个循环
        i += 1
        j -= 1
      }
    }
    return i
}

let arr = [11, 23, 9, 13, 45]
quickSort(arr, 0, arr.length  - 1)
console.log(arr)