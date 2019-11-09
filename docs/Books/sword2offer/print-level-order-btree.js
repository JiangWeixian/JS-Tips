/**
 * The Obj of binary tree
 *
 * @attribute {int} val: the value of binary tree node
 * @attribute {object} left: left node
 * @attribute {object} right: right node
 */

var BtreeNode = {
  init: function (val, leftNode, rightNode) {
    this.val = val
    this.left = leftNode
    this.right = rightNode
  }
}

/**
 * @func printLevelOrder: print the binary tree in level order
 *
 * @param {Btree} root: the root node of binary tree
 */
function printLevelOrder (root) {
  var stack = [root],
    currentNum = 1,
    nextNum = 0,
    data = ''
  if (!(Object.getPrototypeOf(root) === BtreeNode) || !root.val) {
    throw ReferenceError('Root must be BtreeNode type, and can not be empty!')
  }
  while (stack.length > 0) {
    var current = stack.shift()
    data += current.val
    currentNum--

    if (current.left) {
      stack.push(current.left)
      nextNum++
    }

    if (current.right) {
      stack.push(current.right)
      nextNum++
    }

    if (currentNum === 0) {
      currentNum = nextNum
      nextNum = 0
      console.log(data)
      data = ''
    }
  }
}

console.log('Build tree a')
var treea = Object.create(BtreeNode)
treea.init(8)
var aNode1 = Object.create(BtreeNode)
aNode1.init(8)
var aNode2 = Object.create(BtreeNode)
aNode2.init(7)
var aNode3 = Object.create(BtreeNode)
aNode3.init(9)
var aNode4 = Object.create(BtreeNode)
aNode4.init(2)
var aNode5 = Object.create(BtreeNode)
aNode5.init(4)
var aNode6 = Object.create(BtreeNode)
aNode6.init(7)
treea.left = aNode1
treea.right = aNode2
aNode1.left = aNode3
aNode1.right = aNode4
aNode4.left = aNode5
aNode4.right = aNode6

printLevelOrder(treea)
