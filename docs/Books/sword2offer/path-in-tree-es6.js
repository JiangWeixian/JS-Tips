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
 * @func findPath: Traversal the tree, print the path if the sum of nodes'val in path eqauls expected sum
 *
 * @param {Btree} root: The root node of a tree or not leaf node of a tree
 * @param {Array} path: Traversal path
 * @param {int} currentSum: The sum of nodes in path
 * @param {int} expectedSum: Target sum
 */

const findPath = (root, path, currentSum, expectedSum) => {
  if (!root || !(root instanceof BtreeNode)) {
    return
  }

  path.push(root.val)
  currentSum += root.val

  let isLeaf = !root.left && !root.right
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

var root = new BtreeNode(10),
  node1 = new BtreeNode(5),
  node2 = new BtreeNode(12),
  node3 = new BtreeNode(4),
  node4 = new BtreeNode(7)

root.left = node1
root.right = node2
node1.left = node3
node1.right = node4

findPath(root, path, currentSum, expectedSum)
