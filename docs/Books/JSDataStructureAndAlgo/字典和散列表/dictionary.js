function Dictionary () {
  let items = {}
  this.set = (key, value)=> {
    items[key] = value
  }
  this.get = (key)=> {
    return items[key]
  }
  this.has = (key)=> {
    return items.hasOwnProperty(key)
  }
  this.delete = (key)=> {
    delete items[key]
  }
  this.clear = ()=> {
    items = {}
  }
  this.size = ()=> {
    return Object.keys(items).length
  }
  this.keys = ()=> {
    return Object.keys(items)
  }
  this.values = ()=> {
    Object.keys(items).map((key)=> {
      return items[key]
    })
  }
}

