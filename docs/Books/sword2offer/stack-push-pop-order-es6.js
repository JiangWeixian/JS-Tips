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

/**
 * function isPopOrder: Judge popOrder is possible or not for a stack
 *
 * @param {array} pushOrder: a push order for a stack
 * @param {array} popOrder: a pop order for a stack
 *
 * @return {bool}: true for possible, false for inpossible
 */
const isPopOrder = (pushOrder, popOrder) => {
  let possible = false,
    pushIndex = 0,
    popIndex = 0
  if (Array.isArray(pushOrder) && Array.isArray(popOrder) && pushOrder.length === popOrder.length) {
    let judgeStack = new Stack()
    while (popIndex < popOrder.length) {
      while (judgeStack.empty() || judgeStack.top !== popOrder[popIndex]) {
        if (pushIndex >= pushOrder.length) {
          break
        }
        judgeStack.push(pushOrder[pushIndex])
        pushIndex++
      }
      if (judgeStack.top !== popOrder[popIndex]) {
        break
      }
      judgeStack.pop()
      popIndex++
    }
    if (judgeStack.empty()) {
      possible = true
    }
  }
  return possible
}

console.log(isPopOrder([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]))
