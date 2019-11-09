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
   * @func reverse: reverse order in linklist
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
  reverse: function () {
    var reversedHead = null,
      currentNode = this.head,
      preNode = null
    while (currentNode !== null) {
      var nextNode = currentNode.next
      if (nextNode === null) {
        reversedHead = currentNode
      }
      currentNode.next = preNode

      preNode = currentNode
      currentNode = nextNode
    }
    this.head = reversedHead
  },
  show: function () {
    var node = this.head
    while (node !== null) {
      console.log(node.val)
      node = node.next
    }
  }
}

var arr = [1, 2, 3, 4, 5]
var list1 = Object.create(linkList)
list1.init(arr)
console.log('Current order:')
list1.show()
list1.reverse()
console.log('Current order:')
list1.show()
