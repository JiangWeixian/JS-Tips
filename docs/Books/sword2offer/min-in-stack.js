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
 * The Object of  MinStack:
 *
 * @attribute {Stack} val_stack: the val stack
 * @attribute {Stack} min_stack: the min val in stack
 */
var MinStack = {
  init: function () {
    this.val_stack = Object.create(Stack)
    this.min_stack = Object.create(Stack)
    this.val_stack.init()
    this.min_stack.init()
  },
  push: function (val) {
    this.val_stack.push(val)
    if (this.min_stack.empty || this.min_stack.top > val) {
      this.min_stack.push(val)
    } else {
      this.min_stack.push(this.min_stack.top)
    }
  },
  pop: function () {
    if (this.empty()) {
      throw RangeError('Stack empty')
    } else {
      var val = this.val_stack.pop()
      this.min_stack.pop()
      return val
    }
  },
  empty: function () {
    return this.val_stack.empty()
  }
}
var stackOne = Object.create(Stack)
stackOne.init()
stackOne.push(1)
stackOne.push(2)
console.log(stackOne.show())
stackOne.pop()
console.log(stackOne.show())
