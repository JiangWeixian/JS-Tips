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
 */
class linkList {
  constructor (arr) {
    if (arr.length > 0) {
      let node = new linkListNode(arr[0])
      this.length = arr.length
      this.head = node
      this.current = this.head
      arr.forEach((element, index) => {
        if (index >= 1) {
          let nextNode = new linkListNode(element)
          node.next = nextNode
          node = node.next
        }
      }, this)
      this.current = node
    } else {
      this.length = 0
      this.head = null
      this.current = this.head
    }
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
  append (node) {
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
  }
  show () {
    let node = this.head
    while (node !== null) {
      console.log(node.val)
      node = node.next
    }
  }
}

const mergetSortedList = (nodeA, nodeB) => {
  if (nodeA === null) {
    return nodeB
  }
  if (nodeB == null) {
    return nodeA
  }
  let mergeNode = null
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

console.log('Test Append One')
var arr = [1, 2, 3, 4, 5]
var list1 = new linkList(arr)
var node1 = new linkListNode(6)
list1.append(node1)
list1.show()
console.log('Current Node of linklist')
console.log(list1.current.val)

console.log('Test Append Two')
var list2 = new linkList([])
var node2 = new linkListNode(6)
var node3 = new linkListNode(5)
list2.append(node2)
list2.append(node3)
list2.show()
console.log('Current node value')
console.log(list2.current.val)

console.log('Test Append Two')
var list3 = new linkList([])
var node4 = new linkListNode(6)
var node5 = new linkListNode(5)
node4.next = node5
list3.append(node4)
list3.show()
console.log('Current node value')
console.log(list3.current.val)

console.log('Test Merge')
var arrA = [1, 3, 5]
var arrB = [2, 4, 6]
var listA = new linkList(arrA)
var listB = new linkList(arrB)
var listMerge = new linkList([])
listMerge.append(mergetSortedList(listA.get(0), listB.get(0)))
listMerge.show()
console.log('Current Node val')
console.log(listMerge.current.val)
