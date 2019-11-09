/**
 * 如果真要和`python`，做类比的话。比较类似修饰器的写法。
 * 关键在于singleton初始化一次之后，之后用的都是同一个（内部变量不变）
 */
// init singleton as a module in ES6
const singleton = (() => {
  let instance
  const createinstance = () => {
    var object = new Object('i am instance')
    return object
  }
  const getinstance = () => {
    if (!instance) {
      instance = createinstance()
    }
    return instance
  }
    // the key code of initing singleton as a module
  return {
    getinstance
  }
})()

const singleA = singleton.getinstance()
const singleB = singleton.getinstance()

if (singleA === singleB) {
  console.log('singleA totally equal singleB')
}
