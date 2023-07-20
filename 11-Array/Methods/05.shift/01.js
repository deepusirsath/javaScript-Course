//1. shift - it is used to remove  element in the array from the first position

//2. ye remove krne k sath sath us element ko return b krta h

// This method changes the original array and its length.

const a = ["apple", "mango", "banana"];
console.log(a); //["apple", "mango", "banana"]
const b = a.shift();
console.log(a); //["apple", "mango"]--after shift
console.log(b); //apple-reomoved item

//note- push and pop are faster than shift and unshift
