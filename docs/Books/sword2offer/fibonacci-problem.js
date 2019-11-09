/**
 * function fibonacciRecurive: the recuive way to solve fibonacci problem \
 * f(0) = 0, f(1) = 1, f(n) = f(n-1) + f(n-2)
 *
 * @param {int} n: f(n)
 */
function fibonacciRecurive (n) {
  if (n <= 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  return fibonacciRecurive(n - 1) + fibonacciRecurive(n - 2)
}

/**
 * function fibonacciJumpStep: The first possibility of frog jumping is same as rect problem, both use this def \
 * frog can jump one steps or two steps, if the steps is 3, the possibility is [[1, 2], [1, 1, 1], [2, 1]] \
 * f(0) = 1, f(1) = 2; and f(n) = f(n - 1), the fibonacci problem
 *
 * @param {int} n: the nums of steps
 * @return {int}: the nums of possility of frog jumps
 */
function fibonacciJumpStep (n) {
  var jumpsSteps = [1, 2]
  if (n <= 0) {
    return 0
  }
  if (n === 1 || n === 2) {
    return jumpsSteps[n - 1]
  } else {
    for (var i = 3; i < n + 1; i++) {
      jumpsSteps[(i + 1) % 2] = jumpsSteps[0] + jumpsSteps[1]
    }
    return jumpsSteps[(n + 1) % 2]
  }
}

/**
 * function fibonacciJumpStep2: The first possibility of frog jumping: if we have n steps, frog can jump [1, 2, 3,..., n] \
 * so the nums of possility of jumps is 2^(n-1)
 *
 * @param {int} n: the nums of steps
 * @return {int}: the nums of possility of frog jumps
 */
function fibonacciJumpStep2 (n) {
  var jumpsSteps = 1
  if (n >= 2) {
    for (var i = 1; i < n; i++) {
      jumpsSteps *= 2
    }
  }
  return jumpsSteps
}

var n = 4
console.log(fibonacciRecurive(n))
console.log(fibonacciJumpStep(n))
console.log(fibonacciJumpStep2(n))
