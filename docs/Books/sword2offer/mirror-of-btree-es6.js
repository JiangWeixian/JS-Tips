/**
 * The Obj of binary tree
 *
 * @attribute {int} val: the value of binary tree node
 * @attribute {object} left: left node
 * @attribute {object} right: right node
 */
class BtreeNode {
  constructor (x, leftNode, rightNode) {
    this.val = x
    this.left = leftNode
    this.right = rightNode
  }
  }

/**
 * @func mirrorOfBtree: change left/right node of btree
 *
 * @param {Btree} root: the root node of btree
 */
const mirrorOfBtree = (root) => {
  if (root === undefined || root.left === undefined && root.right === undefined) {
    return
  }

  let temp = root.left
  root.left = root.right
  root.right = temp

  if (root.left) {
    mirrorOfBtree(root.left)
  }
  if (root.right) {
    mirrorOfBtree(root.right)
  }
}

/**
 * @func printLevelOrder: print the binary tree in level order
 *
 * @param {Btree} root: the root node of binary tree
 * @param {int} deepth : the level of binary tree
 */
const printLevelOrder = (root, deepth) => {
  let stack = [root],
    currentNum = 1,
    nextNum = 0,
    spaceNum = 4,
    data = ' '.repeat(deepth * spaceNum)
  while (stack) {
    let current = stack.shift()
    data += ' '.repeat(spaceNum) + current.val
    currentNum--

    if (current.left) {
      stack.push(current.left)
      nextNum++
    } else {
      var emptyNode = new BtreeNode('*')
      stack.push(emptyNode)
      nextNum++
    }

    if (current.right) {
      stack.push(current.right)
      nextNum++
    } else {
      var emptyNode = new BtreeNode('*')
      stack.push(emptyNode)
      nextNum++
    }

    if (currentNum === 0) {
      currentNum = nextNum
      nextNum = 0
      console.log(data)
      deepth--
      data = ' '.repeat(deepth * spaceNum)
    }

    if (!deepth) {
      break
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

printLevelOrder(treea, 4)
mirrorOfBtree(treea)
printLevelOrder(treea, 4)
