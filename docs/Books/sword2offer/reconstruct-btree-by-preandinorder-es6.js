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
 * function reconstructBtree, recontruct binary by btree's preorder and inorder
 *
 * @param {array} preorderTree: binary tree's preorder
 * @param {array} inorderTree: binary tree's inorder
 */

const reconstructBtree = (preorderTree, inorderTree) => {
  if (preorderTree === [] && inorderTree === []) {
    return null
  }
  let nodeVal = preorderTree[0]
  let nodeIndex = inorderTree.indexOf(nodeVal)
  if (nodeIndex < 0) {
    return null
  }
  let leftNode = reconstructBtree(preorderTree.slice(1, nodeIndex + 1), inorderTree.slice(0, nodeIndex))
  let rightNode = reconstructBtree(preorderTree.slice(nodeIndex + 1, preorderTree.length), inorderTree.slice(nodeIndex + 1, inorderTree.length))
  let node = new BtreeNode(nodeVal, leftNode, rightNode)
  return node
}

/**
 * function print_preorder: console.log the val of binary tree in preorder
 * @param {object} btree: binary tree
 */

const print_preorder = (btree) => {
  if (btree) {
    console.log(btree.val)
    print_preorder(btree.left)
    print_preorder(btree.right)
  }
}

var preorderTree = [1, 2, 4, 7, 3, 5, 6, 8]
var inorderTree = [4, 7, 2, 1, 5, 3, 8, 6]
btree = reconstructBtree(preorderTree, inorderTree)
print_preorder(btree)
