interface A {
  name: string
  x: string
}

interface B {
  age: string
  x: string
}

function getType (): A | B {
  return {
    age: 'age',
    x: 'name'
  }
}


let test = getType()

// test.name is error

console.log((<A>test).name)
