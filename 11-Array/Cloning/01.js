//how to clone an array - means array ki hubhu copy create krna

//1- method-- but this is not right way
let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a); //  [1, 2, 3]
console.log(b); //  [1, 2, 3]
console.log(a === b); // false
a.push(4);
console.log(a); //  [1, 2, 3,4]
console.log(b); //  [1, 2, 3]

//method-2
let c = a.slice(0);
console.log(c); //[1, 2, 3,4]

//method-3
let d = [].concat(a);
console.log(d); //[1, 2, 3,4]
