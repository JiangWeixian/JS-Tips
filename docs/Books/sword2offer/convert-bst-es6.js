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
 * @func convert: Conver BST tree in double link list by just change node's link
 *
 * @param {BtreeNode} bstRoot: root node of BST tree
 * @param {BtreeNode} listRoot: root node of double link list
 */
const convert = (bstRoot, listRoot) => {
  if (!bstRoot || !(bstRoot instanceof BtreeNode)) {
    return
  }

  if (bstRoot.left) {
    listRoot = convert(bstRoot.left, listRoot)
  }
  bstRoot.left = listRoot
  try {
    listRoot.right = bstRoot
  } catch (e) {

  }
  listRoot = bstRoot

  if (bstRoot.right) {
    listRoot = convert(bstRoot.right, listRoot)
  }
  return listRoot
}

 /**
  * @func show: show the val of bst tree in level order
  * @param {BtreeNode} root: the root node of bst tree
  */

const show = (root) => {
  let node = root
  if (node) {
    show(node.left)
    console.log(node.val)
    show(node.right)
  }
}

 /**
  * @func show2: show the detail of double link list from right to left
  *
  * @param {BtreeNode} root: the bottom node of double link list
  */
const show2 = (root) => {
  let node = root
  while (node) {
    console.log(node.val)
    node = node.left
  }
}

var bstRoot = new BtreeNode(10)
var bstNode1 = new BtreeNode(6)
var bstNode2 = new BtreeNode(14)
var bstNode3 = new BtreeNode(4)
var bstNode4 = new BtreeNode(8)
var bstNode5 = new BtreeNode(12)
var bstNode6 = new BtreeNode(16)

bstRoot.left = bstNode1
bstRoot.right = bstNode2
bstNode1.left = bstNode3
bstNode1.right = bstNode4
bstNode2.left = bstNode5
bstNode2.right = bstNode6

var listRoot

console.log('Btree detail')
show(bstRoot)
listRoot = convert(bstRoot, listRoot)
console.log('Double link detail')
show2(listRoot)
