"use strict";
function getType() {
    return {
        age: 'age',
        x: 'name'
    };
}
var test = getType();
// test.name is error
console.log(test.name);
