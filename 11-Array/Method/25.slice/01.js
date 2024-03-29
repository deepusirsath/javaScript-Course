// The slice() method returns a shallow copy of a portion of an array into a new array object.

// Example

let numbers = [2, 3, 5, 7, 11, 13, 17];

// create another array by slicing numbers from index 3 to 5
let newArray = numbers.slice(3, 6);
console.log(newArray);

// Output: [ 7, 11, 13 ]

// slice() Return Value
// Returns a new array containing the extracted elements.
