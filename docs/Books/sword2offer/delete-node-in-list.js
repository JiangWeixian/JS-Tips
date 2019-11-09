/**
 * The Object of  link list node:
 *
 * @attribute {int/string/...} val: the val of node in link list
 * @attribute {object} next: the next node of linklist node
 */
var linkListNode = {
    init: function(x) {
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
 * @func delNode: the O(1) algo, delete the node in linklist
 */
var linkList = {
    length: 0,
    head: null,
    init: function(arr) {
        var node = Object.create(linkListNode)
        node.init(arr[0])
        this.length = arr.length
        this.head = node
        arr.forEach(function(element, index) {
            if (index >= 1) {
                var nextNode = Object.create(linkListNode)
                nextNode.init(element)
                node.next = nextNode
                node = node.next
            }
        }, this);
    },
    get: function (index) {
        var node = this.head
        if (index === 0) {
            return node
        }
        if (index >= this.length) {
            return RangeError
        }
        else {
            for (var i = 1; i < index + 1; i++) {
                node = node.next
            }
            return node
        }
    },
    delNode: function (toDeleteNode) {
        if (toDeleteNode.next !== null) {
            var toDeleteNextNode = toDeleteNode.next
            toDeleteNode.val = toDeleteNextNode.val
            toDeleteNode.next = toDeleteNextNode.next

            delete toDeleteNextNode
        }
        else if (this.head === toDeleteNode) {
            this.head = null
            this.length = 0

            delete toDeleteNode
        }
        else {
            var toDeletePreNode = this.head
            while (toDeletePreNode.next !== toDeleteNode) {
                toDeletePreNode = toDeletePreNode.next
            }
            toDeletePreNode.next = null

            delete toDeleteNode
        }
    },
    show: function() {
        var node = this.head
        while (node !== null) {
            console.log(node.val)
            node = node.next
        }
    } 
}

console.log('delete node mid in linklist')
var arr = [1, 2, 3]
var list1 = Object.create(linkList)
list1.init(arr)
var toDeleteNode = list1.get(1)
list1.delNode(toDeleteNode)
list1.show()

console.log('delete node was head node')
arr = [1]
list1 = Object.create(linkList)
list1.init(arr)
var toDeleteNode = list1.get(0)
list1.delNode(toDeleteNode)
list1.show()

console.log('delete node was bottom node')
arr = [1, 2, 3]
list1 = Object.create(linkList)
list1.init(arr)
var toDeleteNode = list1.get(2)
list1.delNode(toDeleteNode)
list1.show()
