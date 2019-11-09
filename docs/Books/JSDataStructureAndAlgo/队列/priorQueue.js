function PriorQueue () {
  let items = []
  function Item (value, prior) {
    this.prior = prior
    this.value = value
  }
  this.enqueue = (value, prior)=> {
    let item = new Item(value, prior)
    for (let i = this.size() - 1; i >=0; i--) {
      if (items[i].prior <= prior) {
        items.splice(i + 1, 0, item)
        return
      }
    }
    items.splice(this.size() - 1, 0, item)
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
  this.show = ()=> {
    items.forEach((item, index) => {
      console.log(item)
    })
  }
}

let queue = new PriorQueue()
queue.enqueue(1, 0)
queue.enqueue(1, 2)
queue.enqueue(2, 1)
queue.show()
console.log('front', queue.front())
console.log('isEmpty', queue.isEmpty())
console.log('dequeue', queue.dequeue())
console.log('size', queue.size())
console.log('dequeue', queue.dequeue())
console.log('size', queue.size())