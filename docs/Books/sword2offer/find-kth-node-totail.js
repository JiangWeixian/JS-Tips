/**
 * The Object of  link list node:
 *
 * @attribute {int/string/...} val: the val of node in link list
 * @attribute {object} next: the next node of linklist node
 */
var linkListNode = {
  init: function (x) {
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
 * @func findLastKthNodeRobust: the robust version of @func findLastKthNode
 */
var linkList = {
  length: 0,
  head: null,
  init: function (arr) {
    var node = Object.create(linkListNode)
    node.init(arr[0])
    this.length = arr.length
    this.head = node
    arr.forEach(function (element, index) {
      if (index >= 1) {
        var nextNode = Object.create(linkListNode)
        nextNode.init(element)
        node.next = nextNode
        node = node.next
      }
    }, this)
  },
  get: function (index) {
    var node = this.head
    if (index === 0) {
      return node
    }
    if (index >= this.length) {
      return RangeError
    } else {
      for (var i = 1; i < index + 1; i++) {
        node = node.next
      }
      return node
    }
  },
  findLastKthNode: function (index) {
    var aheadNode = this.head
    var behindNode = null
    for (var i = 0; i <= index - 1; i++) {
      aheadNode = aheadNode.next
    }
    behindNode = this.head
    while (aheadNode !== null) {
      aheadNode = aheadNode.next
      behindNode = behindNode.next
    }
    return behindNode
  },
  findLastKthNodeRobust: function (index) {
    if (this.head === null) {
      throw new ReferenceError('LinkList is empty!')
    }
    if (index === 0 || index > this.length) {
      throw new RangeError('Index must bigger than zero, and smaller than the length of linklist!')
    }
    var aheadNode = this.head
    var behindNode = null
    for (var i = 0; i <= index - 1; i++) {
      aheadNode = aheadNode.next
    }
    behindNode = this.head
    while (aheadNode !== null) {
      aheadNode = aheadNode.next
      behindNode = behindNode.next
    }
    return behindNode
  },
  show: function () {
    var node = this.head
    while (node !== null) {
      console.log(node.val)
      node = node.next
    }
  }
}

console.log('Find last Kth Node of LinkList')
var arr = [1, 2, 3, 4, 5]
var list1 = Object.create(linkList)
list1.init(arr)
console.log(list1.findLastKthNode(3))

console.log('Find last Kth Node of LinkList: Robust version test')
console.log(list1.findLastKthNodeRobust(3).val)
console.log(list1.findLastKthNodeRobust(0))
console.log(list1.findLastKthNodeRobust(7))
