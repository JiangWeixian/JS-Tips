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
 * function substructInTree: if tree b is a sub structure of tree a
 *
 * @param {BtreeNode} treea
 * @param {BtreeNode} treeb
 * @return result: true for find, false for not find
 */
function substructInTree (treea, treeb) {
  var result = false
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
function compareSubstructure (treea, treeb) {
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

function print_preorder (btree) {
  if (btree) {
    console.log(btree.val)
    print_preorder(btree.left)
    print_preorder(btree.right)
  }
}

console.log('Build tree b')
var treeb = Object.create(BtreeNode)
treeb.init(8)
var bNode1 = Object.create(BtreeNode)
bNode1.init(9)
var bNode2 = Object.create(BtreeNode)
bNode2.init(2)
treeb.left = bNode1
treeb.right = bNode2

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

print_preorder(treea)

console.log(substructInTree(treea, treeb))
