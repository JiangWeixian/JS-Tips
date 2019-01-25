class a {
  name: string
  constructor (name: string) {
    this.name = name
  }
}

class b {
  name: string
  constructor (name: string) {
    this.name = name
  }
}

let A: a = a
let B: b = b

A = B

class c {
  private name: string = 'a'
  constructor (name?: string) {
  }
}

class d extends c {}

let C: c = new c()

A = C

let D: d = new d()

C = D

