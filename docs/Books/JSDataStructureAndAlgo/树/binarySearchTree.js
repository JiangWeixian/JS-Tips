function BinarySearchTree () {
  let root = null
  let Node = function (value) {
    this.value = value
    this.left = null
    this.rigth = null
  }
  let insertNode = function(node, value) {
    if (!node) {
      return new Node(value)
    } else {
      if (node.value > value) {
        node.left = insertNode(node.left, value)
        return node
      } else if (node.value < value) {
        node.right = insertNode(node.right, value)
        return node
      }
    }
  }
  let inOrder = function(node, callback) {
    if (node.left) {
      inOrder(node.left, callback)
    }
    callback(node.value)
    if (node.right) {
      inOrder(node.right, callback)
    }
  }
  let preOrder = function(node, callback) {
    callback(node.value)
    if (node.left) {
      preOrder(node.left, callback)
    }
    if (node.right) {
      preOrder(node.right, callback)
    }
  }
  let postOrder = function(node, callback) {
    if (node.left) {
      postOrder(node.left, callback)
    }
    if (node.right) {
      postOrder(node.right, callback)
    }
    callback(node.value)
  }
  let findMinValue = function(node) {
    if (!node) {
      return null
    } else {
      let current = node
      while (current && current.left) {
        current = current.left
      }
      return current.value
    }
  }
  let findMaxValue = function(node) {
    if (!node) {
      return null
    } else {
      let current = node
      while (current && current.right) {
        current = current.right
      }
      return current.value
    }

  }
  let find = function(node, value) {
    if (node.value > value) {
      if (node.left) {
        return find(node.left, value)
      }
    } else if (node.value < value) {
      if (node.right) {
        return find(node.right, value)
      }
    } else {
      return true
    }
    return false
  }
  let findMinNode = function(node) {
    if (!node) {
      return null
    } else {
      let current = node
      while (current && current.left) {
        current = current.left
      }
      return current
    }
  }
  let removeNode = function(node, value) {
    if (!node) {
      return null
    }
    if (node.value > value) {
      node.left = removeNode(node.left, value)
      return node
    } else if (node.value < value) {
      node.right = removeNode(node.right, value)
      return node
    } else {
      if (!node.left && !node.right) {
        node = null
        return node
      }
      if (!node.left) {
        node = node.right
        return node
      } else if (!node.right) {
        node = node.left
        return node
      }
      let minNode = findMinNode(node.right)
      node.value = minNode.value
      node.right = removeNode(node.right, minNode.value)
      return node
    }
  }
  this.insert = (value)=> {
    if (!root) {
      root = new Node(value)
    } else {
      insertNode(root, value)
    }
  }
  this.search= (value)=> {
    return find(root, value)
  }
  this.inOrderTraverse = (callback)=> {
    inOrder(root, callback)
  }
  this.preOrderTraverse = (callback)=> {
    preOrder(root, callback)
  }
  this.postOrderTraverse = (callback)=> {
    postOrder(root, callback)
  }
  this.deepOrderTraverse = (callback)=> {
    preOrder(root, callback)
  }
  this.breadOrderTraverse = (callback)=> {
    let queue = [root]
    while (queue.length) {
      let current = queue.shift()
      callback(current.value)
      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }
    }
  }
  this.min = ()=> {
    return findMinValue(root)
  }
  this.max = ()=> {
    return findMaxValue(root)
  }
  this.remove = (value)=> {
    return removeNode(root, value)
  }
}

let bst = new BinarySearchTree()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)
console.log('中序列遍历')
bst.inOrderTraverse(function (value) {
  console.log(value)
})
console.log('前序列遍历')
let arr = []
bst.preOrderTraverse(function (value) {
  arr.push(value)
})
console.log(arr)
console.log('后序列遍历')
bst.postOrderTraverse(function (value) {
  console.log(value)
})
console.log('广度优先遍历')
bst.breadOrderTraverse(function (value) {
  console.log(value)
})
console.log('最小值')
console.log(bst.min())
console.log('最大值')
console.log(bst.max())
console.log('查找15')
console.log(bst.search(15))
console.log('查找30')
console.log(bst.search(30))
// console.log('删除25')
// console.log(bst.remove(25))
// console.log('前序列遍历')
// bst.inOrderTraverse(function (value) {
//   console.log(value)
// })
console.log('删除15')
console.log(bst.remove(15))
console.log('前序列遍历')
bst.inOrderTraverse(function (value) {
  console.log(value)
})