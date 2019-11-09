/**
 * The Obj of binary tree
 *
 * @attribute {int} val: the value of binary tree node
 * @attribute {object} left: left node
 * @attribute {object} right: right node
 */

class BtreeNode {
  constructor (val, leftNode, rightNode) {
    this.val = val
    this.leftNode = leftNode
    this.rightNode = rightNode
  }
}

/**
 * @func printLevelOrder: print the binary tree in level order
 *
 * @param {Btree} root: the root node of binary tree
 */
const printLevelOrder = (root) => {
  let stack = [root],
    currentNum = 1,
    nextNum = 0,
    data = ''
  if (!(root instanceof BtreeNode) || !root.val) {
    throw ReferenceError('Root must be BtreeNode type, and can not be empty!')
  }
  while (stack.length > 0) {
    let current = stack.shift()
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
var treea = new BtreeNode(8),
  aNode1 = new BtreeNode(8),
  aNode2 = new BtreeNode(7),
  aNode3 = new BtreeNode(9),
  aNode4 = new BtreeNode(2),
  aNode5 = new BtreeNode(4),
  aNode6 = new BtreeNode(7)
treea.left = aNode1
treea.right = aNode2
aNode1.left = aNode3
aNode1.right = aNode4
aNode4.left = aNode5
aNode4.right = aNode6

printLevelOrder(treea)
