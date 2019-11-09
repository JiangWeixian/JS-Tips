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
 * @func append: append LinkListNode at bottom of linklist
 */
var linkList = {
  length: 0,
  head: null,
  current: null,
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
    this.current = node
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
  append: function (node) {
    if (node === null) {
      throw ReferenceError('Append Node can not be NULL')
    }
    if (this.length > 0) {
      this.current.next = node
      this.current = node
    } else {
      this.head = node
      this.current = node
    }
    if (node.next === null) {
      this.length ++
    } else {
      while (node.next !== null) {
        this.current = this.current.next
        node = node.next
        this.length ++
      }
    }
  },
  show: function () {
    var node = this.head
    while (node !== null) {
      console.log(node.val)
      node = node.next
    }
  }
}

/**
 * @func mergeSortedList: merge two sorted list into one, keep origin style order
 *
 * @param {linkListNode} nodeA: the first node of linklistA
 * @param {linkListNode} nodeB : the first node of linklistB
 */
function mergetSortedList (nodeA, nodeB) {
  if (nodeA === null) {
    return nodeB
  }
  if (nodeB == null) {
    return nodeA
  }
  var mergeNode = null
  if (nodeA.val < nodeB.val) {
    mergeNode = nodeA
    mergeNode.next = mergetSortedList(nodeA.next, nodeB)
  }
  if (nodeA.val > nodeB.val) {
    mergeNode = nodeB
    mergeNode.next = mergetSortedList(nodeA, nodeB.next)
  }
  return mergeNode
}

var arr = [1, 2, 3, 4, 5]
var list1 = Object.create(linkList)
var node = Object.create(linkListNode)
node.init(6)
list1.init(arr)
list1.append(node)
list1.show()
console.log('Current val:')
console.log(list1.current.val)

console.log('Test Append One')
var list2 = Object.create(linkList)
var node1 = Object.create(linkListNode)
node1.init(6)
list2.append(node1)
var node2 = Object.create(linkListNode)
node2.init(5)
list2.append(node2)
console.log('show the value of list2')
list2.show()
console.log('Current val:')
console.log(list2.current.val)

console.log('Test Append Two')
var list3 = Object.create(linkList)
var node3 = Object.create(linkListNode)
node3.init(6)
var node4 = Object.create(linkListNode)
node4.init(5)
node3.next = node4
list3.append(node3)
console.log('show the value of list3')
list3.show()
console.log('Current val:')
console.log(list3.current.val)

console.log('Test merge')
var listMerge = Object.create(linkList)
var listA = Object.create(linkList)
var listB = Object.create(linkList)
var arrA = [1, 3, 5]
var arrB = [2, 4, 6]
listA.init(arrA)
listB.init(arrB)

listMerge.append(mergetSortedList(listA.get(0), listB.get(0)))
listMerge.show()
