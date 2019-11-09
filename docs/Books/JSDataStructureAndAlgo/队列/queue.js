function Queue () {
  let items = []
  this.enqueue = (value)=> {
    items.push(value)
  }
  this.dequeue = ()=> {
    return items.shift()
  }
  this.front = ()=> {
    return items[0]
  }
  this.isEmpty = ()=> {
    return this.size() === 0
  }
  this.size = ()=> {
    return items.length
  }
}

let queue = new Queue()
queue.enqueue(1)
console.log(queue.isEmpty())
console.log(queue.dequeue())
console.log(queue.size())
console.log(queue.dequeue())
console.log(queue.size())