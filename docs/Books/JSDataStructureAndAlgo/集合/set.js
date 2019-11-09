function Set () {
  let items = {}
  this.add = (value)=> {
    if (!items.hasOwnProperty(value)) {
      items[value] = value
      return true
    }
    return false
  }
  this.remove = (value)=> {
    if (items.hasOwnProperty(value)) {
      delete items[value]
      return value
    }
    return false
  }
  this.has = (value)=> {
    return items.hasOwnProperty(value)
  }
  this.clear = ()=> {
    items = {}
  }
  this.size = ()=> {
    return Object.keys(items).length
  }
  this.values = ()=> {
    return Object.keys(items)
  }
  this.union = (otherSet)=> {
    let unionSet = new Set()
    this.values().forEach((key)=> {
      unionSet.add(key)
    })
    otherSet.values().forEach((value)=> {
      unionSet.add(value)
    })
    return unionSet
  }
  this.intersection = (otherSet)=> {
    let interSet = new Set()
    this.values().forEach((value)=> {
      if (otherSet.has(value)) {
        interSet.add(value)
      }
    })
    return interSet
  }
  this.difference = (otherSet)=> {
    let diffSet = new Set()
    this.values().forEach((value)=> {
      if (!otherSet.has(value)) {
        diffSet.add(value)
      }
    })
    return diffSet
  }
  this.include = (otherSet)=> {
    if (this.size() < otherSet.size()) {
      return false
    } else {
      otherSet.values().forEach((value)=> {
        if (!this.has(value)) {
          return false
        }
      })
    }
    return true
  }
}

let set = new Set()
set.add(1)
set.add('pos=1')
console.log(set.values())
set.add(1)
console.log(set.values())
console.log('删除元素')
set.remove(1)
console.log(set.values())
console.log('测试元素是否存在')
console.log(set.has(1))
console.log(set.has('pos=1'))
console.log('清空')
set.clear()
console.log(set.size())

console.log('union')
set = new Set()
set.add(1)
set.add(2)
set.add(3)
let otherSet = new Set()
otherSet.add(1)
otherSet.add(2)
otherSet.add(3)
otherSet.add(4)
otherSet.add(5)
let unionSet = set.union(otherSet)
console.log(unionSet.values())
console.log('intersection')
let interSet = set.intersection(otherSet)
console.log(interSet.values())
console.log('difference')
let diffSet = set.difference(otherSet)
console.log(diffSet.values())
diffSet = otherSet.difference(set)
console.log(diffSet.values())
set.add(6)
diffSet = set.difference(otherSet)
console.log(diffSet.values())
console.log('是否包含')
set = new Set()
set.add(1)
set.add(2)
set.add(3)
console.log(set.include(otherSet))
console.log(otherSet.include(set))
