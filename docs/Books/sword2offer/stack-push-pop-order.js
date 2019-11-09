/**
 * The Object of  Stack:
 *
 * @attribute {int} length: the length of stack vals
 * @attribute {array} stack: the values of this Stack
 * @attribute {int} top: the top values of stack
 */
var Stack = {
  init: function () {
    this.length = 0
    this.stack = []
    this.top = null
  },
  push: function (val) {
    this.stack.push(val)
    this.length ++
    this.top = val
  },
  pop: function () {
    if (!this.empty()) {
      var val = this.stack.pop()
      this.length --
      this.top = this.stack[this.length - 1]
      return val
    } else {
      throw RangeError('Stack Empty')
    }
  },
  empty: function () {
    return !(this.length > 0)
  },
  show: function () {
    return {'value': this.stack, 'top': this.top, 'length': this.length}
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
function isPopOrder (pushOrder, popOrder) {
  var possible = false,
    pushIndex = 0,
    popIndex = 0
  if (isArray(pushOrder) && isArray(popOrder) && pushOrder.length === popOrder.length) {
    var judgeStack = Object.create(Stack)
    judgeStack.init()
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

function isArray (arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

console.log(isPopOrder([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]))
