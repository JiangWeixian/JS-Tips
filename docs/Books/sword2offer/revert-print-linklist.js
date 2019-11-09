/**
 * The Object of  link list node:
 *
 * @attribute {int/string/...} val: the val of node in link list
 * @attribute {object} next: the next node of linklist node
 */

var linklistNode = {
  init: function (x) {
    this.val = x
  },
  link: function (node) {
    this.next = node
  }
}

/**
 * function revertPrintLinklist, console.log the val of node in linklist from bottom to top
 *
 * @param {object} linklist: the link list
 */

function revertPrintLinklist (linklist) {
  if (linklist === undefined || linklist.val === undefined) {
    return 'linklist can not be empty'
  }
  var arr = []
  var head = linklist
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  arr.reverse()
  return arr
}

var node1 = Object.create(linklistNode)
node1.init(1)
var node2 = Object.create(linklistNode)
node2.init(2)
var node3 = Object.create(linklistNode)
node3.init(3)
node1.link(node2)
node2.link(node3)
console.log(node1)
console.log(revertPrintLinklist(node1))
