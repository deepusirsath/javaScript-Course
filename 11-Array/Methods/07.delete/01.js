// Array element can be deleted using the javascript delete operator.

const a = [1, 2, 3, 4];
console.log(a); // [1,2,3,4]
const b = delete a[2];
console.log(b) // true
console.log(a); // [ 1, 2, <1 empty item>, 4 ]
