//Example 3: Using next() Method in Array Iterator Object

// defining an array
const symbols = ["#", "$", "*"];

// Array iterator object that holds key/value pairs
let iterator = symbols.entries();

// using built-in next() method in Array iterator object
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

// [ 0, '#' ]
// [ 1, '$' ]
// [ 2, '*' ]
