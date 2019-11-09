const LinkedList = require('./linkedList')

function HashTable () {
  let items = []
  let Item = function (key, value) {
    this.key = key
    this.value = value
  }
  function hashcode (key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % 37
  }
  this.put = (key, value)=> {
    let pos = hashcode(key)
    if (!items[pos]) {
      items[pos] = new LinkedList()
    }
    items[pos].append(new Item(key, value))
  }
  this.remove = (key)=> {
    let pos = hashcode(key)
    let current = items[pos].getHead()
    while (current) {
      if (current.element.key === key) {
        return items[pos].remove(current.element)
      }
      current = current.next
    }
    return undefined
  }
  this.get = (key)=> {
    let pos = hashcode(key)
    let current = items[pos].getHead()
    while (current) {
      if (current.element.key === key) {
        return current.element.value
      }
      current = current.next
    }
    return undefined
  }
  this.show = ()=> {
    items.forEach((item)=> {
      if (item) {
        item.print()
      }
    })
  }
}

let hashtable = new HashTable()
hashtable.put('eric', 'bigbigbig')
hashtable.put('saber', 'smallsmallsmall')
hashtable.show()
console.log(hashtable.get('eric'))
console.log(hashtable.get('crei'))
console.log('删除eric')
console.log(hashtable.remove('eric'))
console.log('删除之后还剩下')
hashtable.show()
console.log('检测是否还存在')
console.log(hashtable.get('eric'))
console.log('删除不存在的crei')
console.log(hashtable.remove('crei'))