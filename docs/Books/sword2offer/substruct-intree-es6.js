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
 * function substructInTree: if tree b is a sub structure of tree a
 *
 * @param {BtreeNode} treea
 * @param {BtreeNode} treeb
 * @return result: true for find, false for not find
 */
const substructInTree = (treea, treeb) => {
  let result = false
  if (treea && treeb) {
    if (treea.val === treeb.val) {
      result = compareSubstructure(treea, treeb)
    }
    if (!result) {
      result = substructInTree(treea.left, treeb)
    }
    if (!result) {
      result = substructInTree(treea.right, treeb)
    }
  }
  return result
}

/**
 * function compareSubstructure: compare treea and treeb's structure
 *
 * @param {BtreeNode} treea
 * @param {BtreeNode} treeb
 * @return: true for same, false for different.
 */
const compareSubstructure = (treea, treeb) => {
  if (treeb) {
    return true
  }
  if (treea) {
    return false
  }
  if (treea.val !== treeb.val) {
    return false
  }
  return compareSubstructure(treea.left, treeb.left) && compareSubstructure(treeb.right, treeb.right)
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

console.log('Build tree b')
var treeb = new BtreeNode(8)
var bNode1 = new BtreeNode(9)
var bNode2 = new BtreeNode(2)
treeb.left = bNode1
treeb.right = bNode2

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

print_preorder(treea)
console.log(substructInTree(treea, treeb))
