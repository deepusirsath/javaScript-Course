//primitive vs non primitive

let a = 12;
let b = a;
console.log(a); //12
console.log(b); //12
a++;
console.log(a); //13
console.log(b); //12

const c = [1, 2, 3];
const d = c;
console.log(c); //[1, 2, 3]
console.log(d); //[1, 2, 3]
c.push(4);
console.log(c); //[1, 2, 3,4]
console.log(d); //[1, 2, 3,4]
