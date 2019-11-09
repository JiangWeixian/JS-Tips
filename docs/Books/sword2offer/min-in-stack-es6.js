/**
 * The Object of  Stack:
 *
 * @attribute {int} length: the length of stack vals
 * @attribute {array} stack: the values of this Stack
 * @attribute {int} top: the top values of stack
 */
class Stack {
  constructor () {
    this.length = 0
    this.stack = []
    this.top = null
  }
  push (val) {
    this.stack.push(val)
    this.top = val
    this.length ++
  }
  pop () {
    let val
    if (this.empty()) {
      throw RangeError('Stack empty!')
    } else {
      val = this.stack.pop()
      this.length --
      this.top = this.stack[this.length - 1]
    }
    return val
  }
  empty () {
    return !(this.length > 0)
  }
  detail () {
    return [this.length, this.stack, this.top]
  }
}

class MinStack {
  constructor () {
    this.valStack = new Stack()
    this.minStack = new Stack()
  }
  push (val) {
    this.valStack.push(val)
    if (this.minStack.empty() || this.minStack.top > val) {
      this.minStack.push(val)
    } else {
      this.minStack.push(this.minStack.top)
    }
  }
  pop () {
    let val, minVal
    if (this.empty()) {
      throw RangeError('Stack empty')
    } else {
      val = this.valStack.pop()
      minVal = this.minStack.pop()
    }
    return val, minVal
  }
  empty () {
    return this.valStack.empty()
  }
  detail () {
    return [this.valStack.detail(), this.minStack.detail()]
  }
}

console.log('Test Stack')
let stack1 = new Stack()
stack1.push(1)
stack1.push(2)
console.log(stack1.detail())
stack1.pop()
console.log(stack1.detail())
stack1.pop()
console.log('Test MinStack')
stack2 = new MinStack()
stack2.push(3)
stack2.push(4)
console.log(stack2.detail())
stack2.push(2)
console.log(stack2.detail())
stack2.pop()
console.log(stack2.detail())
