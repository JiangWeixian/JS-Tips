enum TestNumber {
  x,
  y,
  z,
}

const NumX = TestNumber.x
console.log(NumX)

// Below is not number enum
enum TestStr {
  square,
  circle,
}

interface shape {
  kind: TestStr.square
}

const s: shape = {
  kind: TestStr.square
}

console.log(s)

// Below is str enum
enum TestStrMember {
  tri = 'tri',
  line = 'line',
}

interface shapeMember {
  kind: TestStrMember.line,
}

const sm: shapeMember = {
  kind: TestStrMember.line
}

console.log(sm)
