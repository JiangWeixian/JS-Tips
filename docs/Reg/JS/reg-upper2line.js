let origin = 'abcDefGhi'
function upper2Line (str) {
  let regex = /([A-Z])/g
  return str.replace(regex, function (match, p1) {
    return '_' + p1.toLowerCase()
  })
}
console.log(upper2Line(origin))