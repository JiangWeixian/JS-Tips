/**
 * @attribute {int} val: the value of binary tree node
 * @attribute {object} next: next node
 * @attribute {object} slide: slide node, link to any node in list
 */

var ListNode = {
  init: function (val, nextNode, slideNode) {
    this.val = val
    this.next = nextNode
    this.slide = slideNode
  }
}

/**
 * @func cloneNodes: clones list from a->b->c into a->a'->b->b'->c->c', and the N' meas the clone
 *                                          of origin node.
 * @param {ListNode} root: the root node of a list
 */
function cloneNodes (root) {
  if (!root || Object.getPrototypeOf(root) !== ListNode) {
    return
  }
  var node = root
  while (node) {
    var cloneNode = Object.create(ListNode)
    cloneNode.init()
    cloneNode.val = node.val
    cloneNode.next = node.next
    cloneNode.slide = null
    node.next = cloneNode
    node = cloneNode.next
  }
}

/**
 * @func connectSlideNodes: connect N' slide node just like N node format
 * @param {ListNode} root: the root node of a list
 */
function connectSlideNodes (root) {
  if (!root || Object.getPrototypeOf(root) !== ListNode) {
    return
  }
  var node = root
  while (node) {
    var cloneNode = node.next
    if (node.slide) {
      cloneNode.slide = node.slide.next
    }
    node = cloneNode.next
  }
}

/**
 * @func reconnectNodes: connect all N nodes, and connect all N' nodes. The all N' nodes is a clone version of N nodes
 * @param {ListNode} root
 */
function reconnectNodes (root) {
  if (!root || Object.getPrototypeOf(root) !== ListNode) {
    return
  }
  var node = root
  var cloneHead = root.next
  var cloneNode = cloneHead
  node = cloneNode.next

  while (node) {
    cloneNode.next = node.next
    cloneNode = cloneNode.next
    node.next = cloneNode.next
    node = node.next
  }
  return cloneHead
}

/**
 * @func show: show the detail of a list
 * @param {ListNode} root: the root node of a list
 */
function show (root) {
  if (!root || Object.getPrototypeOf(root) !== ListNode) {
    return
  }
  var node = root
  while (node) {
    var detail = 'Node val: ' + node.val
    if (node.slide) {
      detail += ' ;Node slide val: ' + node.slide.val
    }
    console.log(detail)
    node = node.next
  }
}

var root = Object.create(ListNode)
root.init(1)
var node1 = Object.create(ListNode)
node1.init(2)
var node2 = Object.create(ListNode)
node2.init(3)
root.next = node1
node1.next = node2
root.slide = node2

cloneNodes(root)
connectSlideNodes(root)
var cloneRoot = reconnectNodes(root)
show(cloneRoot)
