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
 * @func mirrorOfBtree: change left/right node of btree
 *
 * @param {Btree} root: the root node of btree
 */
function mirrorOfBtree (root) {
  if (root === undefined || root.left === undefined && root.right === undefined) {
    return
  }

  var temp = root.left
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
function printLevelOrder (root, deepth) {
  var stack = [root],
    currentNum = 1,
    nextNum = 0,
    spaceNum = 4,
    data = ' '.repeat(deepth * spaceNum)
  while (stack.length > 0) {
    var current = stack.shift()
    data += ' '.repeat(spaceNum) + current.val
    currentNum--

    if (current.left) {
      stack.push(current.left)
      nextNum++
    } else {
      var emptyNode = Object.create(BtreeNode)
      emptyNode.init('*')
      stack.push(emptyNode)
      nextNum++
    }

    if (current.right) {
      stack.push(current.right)
      nextNum++
    } else {
      var emptyNode = Object.create(BtreeNode)
      emptyNode.init('*')
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

    if (deepth <= 0) {
      break
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

printLevelOrder(treea, 4)
mirrorOfBtree(treea)
printLevelOrder(treea, 4)
