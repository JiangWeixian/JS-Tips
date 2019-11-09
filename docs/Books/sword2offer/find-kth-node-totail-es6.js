/**
 * The Object of  link list node:
 *
 * @attribute {int/string/...} val: the val of node in link list
 * @attribute {object} next: the next node of linklist node
 */

class linkListNode {
  constructor (x) {
    this.val = x
    this.next = null
  }
  }

/**
 * The Object of linklist:
 *
 * @attribute {int} length: the length of linklist
 * @attribute {linkListNode} head: the head node of linklist
 *
 * @func init: initialize linklist by array
 * @func get: return (index+1)th node in linklist
 * @func show: show all value in linklist
 * @func findLastKthNode: find the last kth of linklist
 *      @param {int} index: the value of k
 *      @return {object}: the last kth node of linklist
 * @func findLastKthNode: the robust version of @func findLastKthNode
 */
class linkList {
  constructor (arr) {
    let node = new linkListNode(arr[0])
    this.length = arr.length
    this.head = node
    arr.forEach((element, index) => {
      if (index >= 1) {
        let nextNode = new linkListNode(element)
        node.next = nextNode
        node = node.next
      }
    }, this)
  }
  get (index) {
    let node = this.head
    if (index === 0) {
      return node
    }
    if (index >= this.length) {
      return RangeError
    } else {
      for (let i = 1; i < index + 1; i++) {
        node = node.next
      }
      return node
    }
  }
  findLastKthNode (index) {
    let aheadNode = this.head, behindNode = null
    for (let i = 0; i <= index - 1; i++) {
      aheadNode = aheadNode.next
    }
    behindNode = this.head
    while (aheadNode !== null) {
      aheadNode = aheadNode.next
      behindNode = behindNode.next
    }
    return behindNode
  }
  findLastKthNodeRobust (index) {
    if (this.head === null) {
      throw new ReferenceError('LinkList is empty!')
    }
    if (index === 0 || index > this.length) {
      throw new RangeError('Index must bigger than zero, and smaller than the length of linklist!')
    }
    let aheadNode = this.head, behindNode = null
    for (let i = 0; i <= index - 1; i++) {
      aheadNode = aheadNode.next
    }
    behindNode = this.head
    while (aheadNode !== null) {
      aheadNode = aheadNode.next
      behindNode = behindNode.next
    }
    return behindNode
  }
  show () {
    let node = this.head
    while (node !== null) {
      console.log(node.val)
      node = node.next
    }
  }
  }

console.log('Find last Kth Node of LinkList')
var arr = [1, 2, 3, 4, 5]
var list1 = new linkList(arr)
console.log(list1.findLastKthNode(3).val)

console.log('Find last Kth Node of LinkList: Robust version test')
console.log(list1.findLastKthNodeRobust(3).val)
console.log(list1.findLastKthNodeRobust(0))
console.log(list1.findLastKthNodeRobust(7))
