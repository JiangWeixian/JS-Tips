function LinkedList () {
  let head = null
  let length = 0
  function Item (element) {
    this.element = element
    this.next = null
  }
  this.append = (element) => {
    if (head === null) {
      head = new Item(element)
    } else {
      let current = head
      while (current.next !== null) {
        current = current.next
      }
      current.next = new Item(element)
    }
    length += 1
  }
  this.insert = (pos, element)=> {
    if (pos >=0 && pos <= length) {
      let current = head,
      index = 0,
      item = new Item(element)
      if (pos === 0) {
        // insert head
        head = item
        head.next = current
        length += 1
        return true
      }
      while (current && index < pos - 1) {
        current = current.next
        index += 1
      }
      if (index === pos - 1) {
        // insert mid linkedlist & append
        item.next = current.next
        current.next = item
        length += 1
        return true
      }
    }
    return false
  }
  this.removeAt = (pos)=> {
    if (pos >= 0 && pos < length) {
      let current = head,
      index = 0
      if (pos === 0) {
        head = current.next
        length -= 1
        return current.element
      }
      while (current && index < pos - 1) {
        current = current.next
        index += 1
      }
      if (index === pos - 1) {
        let element = current.next.element
        current.next = current.next.next
        length -= 1
        return element
      }
    }
    return false
  }
  this.remove = (element)=> {
    let current = head
    if (head.element === element) {
      head = current.next
      length -= 1
      return element
    }
    while (current.next) {
      if (current.next.element === element) {
        current.next = current.next.next
        length -= 1
        return element
      }
      current = current.next
    }
    return false
  }
  this.indexOf = (element)=> {
    let current = head,
      index = 0
    while (current) {
      if (current.element === element) {
        return index
      }
      current = current.next
      index += 1
    }
    return -1
  }
  this.isEmpty = ()=> {
    return length === 0
  }
  this.size = ()=> {
    return length
  }
  this.getHead = ()=> {
    return head
  }
  this.toString = ()=> {
    let current = head,
      str = ''
    while (current) {
      str += current.element.toString() + '-'
      current = current.next
    }
    return str
  }
  this.print = ()=> {
    let current = head
    while (current) {
      console.log(current)
      current = current.next
    }
  }
}

let linkedList = new LinkedList()
linkedList.append(1)
linkedList.append(0)
linkedList.print()
console.log('在头部插入')
linkedList.insert(0, 'pos=0')
linkedList.print()
console.log('在中间插入')
linkedList.insert(2, 'pos=mid')
linkedList.print()
console.log('在尾部插入')
linkedList.insert(4, 'pos=tail')
linkedList.print()
console.log('超过了链表长度')
linkedList.insert(7, 'pos=tail')
linkedList.print()
console.log('删除头部节点')
linkedList.removeAt(0)
linkedList.print()
console.log('删除中间节点')
linkedList.removeAt(1)
linkedList.print()
console.log('删除尾部节点')
linkedList.removeAt(2)
linkedList.print()
console.log('插入')
linkedList.insert(0, 'pos=0')
linkedList.insert(2, 'pos=mid')
linkedList.insert(4, 'pos=tail')
console.log('toString')
console.log(linkedList.toString())
console.log('删除pos=0')
linkedList.remove('pos=0')
linkedList.print()
console.log('删除pos=mid')
linkedList.remove('pos=mid')
linkedList.print()
console.log('删除pos=tail')
linkedList.remove('pos=tail')
linkedList.print()
console.log('查找元素')
console.log(linkedList.indexOf(0))
console.log(linkedList.indexOf('pos=0'))
