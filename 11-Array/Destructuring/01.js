//array destructing-
let a = [1, 2];

//normal way
let myvar1 = a[0];
let myvar2 = a[1];
console.log(myvar1);
console.log(myvar2);

//using array destructing

let [myvar3, myvar4, shgjsgdj] = a;

console.log(myvar3);
console.log(myvar4);
console.log(shgjsgdj);

//we can change value
// myvar3 = "deepu";
// console.log(myvar3);

//ex-2
let ab = [1, 2, "deepali", "mohit"];
let [myvar11, myvar22, ...myvar33] = a;
console.log(myvar11);
console.log(myvar22);
console.log(myvar33);
