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
 * @func findPath: Traversal the tree, print the path if the sum of nodes'val in path eqauls expected sum
 *
 * @param {Btree} root: The root node of a tree or not leaf node of a tree
 * @param {Array} path: Traversal path
 * @param {int} currentSum: The sum of nodes in path
 * @param {int} expectedSum: Target sum
 */

function findPath (root, path, currentSum, expectedSum) {
  if (!root || Object.getPrototypeOf(root) !== BtreeNode) {
    return
  }

  path.push(root.val)
  currentSum += root.val

  var isLeaf = !root.left && !root.right
  if (currentSum === expectedSum && isLeaf) {
    console.log(path)
  }

  if (root.left) {
    findPath(root.left, path, currentSum, expectedSum)
  }
  if (root.right) {
    findPath(root.right, path, currentSum, expectedSum)
  }

  currentSum -= root.val
  path.pop()
}

var path = [],
  expectedSum = 22,
  currentSum = 0

var root = Object.create(BtreeNode)
root.init(10)
var node1 = Object.create(BtreeNode)
node1.init(5)
var node2 = Object.create(BtreeNode)
node2.init(12)
var node3 = Object.create(BtreeNode)
node3.init(4)
var node4 = Object.create(BtreeNode)
node4.init(7)
root.left = node1
root.right = node2
node1.left = node3
node1.right = node4

findPath(root, path, currentSum, expectedSum)
