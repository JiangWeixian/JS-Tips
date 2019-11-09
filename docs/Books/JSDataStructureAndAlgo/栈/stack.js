function Stack () {
  let items = []
  this.push = (value)=> {
    items.push(value)
  }
  this.pop = ()=> {
    return items.pop()
  }
  this.isEmpty = ()=> {
    return items.length === 0
  }
  this.size = ()=> {
    return items.length
  }
  this.clear = ()=> {
    items = []
  }
  this.show = ()=> {
    console.log(items)
  } 
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(5)
stack.show()
stack.pop()
stack.show()
console.log(stack.isEmpty())
console.log(stack.size())
stack.clear()
stack.show()
