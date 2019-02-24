// ES5
function Animal(props) {
  this.name = props.name;
  this.say = function () {
    return this.name
  }
  Animal.lives.push(this)
}
Animal.prototype.say = function () {
  return this.name
}
Animal.lives = []
Animal.die = function (animal) {
  if (Animal.lives.length === 0) {
    return false
  }
  for (var i = 0; i < Animal.lives.length; i++) {
    if (Animal.lives[i] === animal) {
      Animal.lives.splice(i, 1)
      return true
    }
  }
  return false
}
Animal.all = function () {
  return Animal.lives
}

var animalA = new Animal({ name: '小白鼠A' });
var animalB = new Animal({ name: '小白鼠B' });
console.log('简单测试：')
console.log('animalA.say !== animalB.say', animalA.say !== animalB.say)
console.log('animalA.__proto__.say === animalB.__proto__.say', animalA.__proto__.say === animalB.__proto__.say)
console.log('存活的小白鼠数量:', Animal.lives.length)
console.log('标记小白鼠A死亡', animalA.say())
Animal.die(animalA)
console.log('存活的小白鼠数量:', Animal.lives.length)
console.log('存活的小白鼠:', Animal.all()[0].say())

// ES6
class ES6Animal {
  constructor (props) {
    this.name = props.name;
    this.say = function () {
      return this.name
    }
    ES6Animal.lives.push(this)
  }
  say () {
    return this.name
  }
}
ES6Animal.lives = []
ES6Animal.die = function (animal) {
  if (ES6Animal.lives.length === 0) {
    return false
  }
  for (var i = 0; i < ES6Animal.lives.length; i++) {
    if (ES6Animal.lives[i] === animal) {
      ES6Animal.lives.splice(i, 1)
      return true
    }
  }
  return false
}
ES6Animal.all = function () {
  return ES6Animal.lives
}

var ES6AnimalA = new ES6Animal({ name: '小白鼠A' });
var ES6AnimalB = new ES6Animal({ name: '小白鼠B' });
console.log('ES6')
console.log('简单测试：')
console.log('ES6AnimalA.say !== ES6AnimalB.say', ES6AnimalA.say !== ES6AnimalB.say)
console.log('animalA.__proto__.say === ES6AnimalB.__proto__.say', ES6AnimalA.__proto__.say === ES6AnimalB.__proto__.say)
console.log('存活的小白鼠数量:', ES6Animal.lives.length)
console.log('标记小白鼠A死亡', ES6AnimalA.say())
ES6Animal.die(ES6AnimalA)
console.log('存活的小白鼠数量:', ES6Animal.lives.length)
console.log('存活的小白鼠:', ES6Animal.all()[0].say())