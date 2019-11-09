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

module.exports = LinkedList