/**
 * The Object of  link list node:
 *
 * @attribute {int/string/...} val: the val of node in link list
 * @attribute {object} next: the next node of linklist node
 */

class linklistNode {
  constructor (x) {
    this.val = x
  }
  link (node) {
    this.next = node
  }
}

/**
 * function revertPrintLinklist, console.log the val of node in linklist from bottom to top
 *
 * @param {object} linklist: the link list
 */

const revertPrintLinklist = (linklist) => {
  if (linklist === undefined || linklist.val === undefined) {
    return 'linklist can not be empty'
  }
  let arr = []
  let head = linklist
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  arr.reverse()
  return arr
}

let node1 = new linklistNode(1)
let node2 = new linklistNode(2)
let node3 = new linklistNode(3)

node1.next = node2
node2.next = node3
console.log(revertPrintLinklist(node1))
