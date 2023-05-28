// The flatMap() method first maps each element of an array using a mapping function, then flattens it into a new array.

// Example

// defining an array
let numbers = [1, 2, 3, 4, 5];

// each element of the array is squared and later flattened
const resultingArray = numbers.flatMap((x) => [x ** 2]);

console.log(resultingArray);

// Output:
// [ 1, 4, 9, 16, 25 ]
