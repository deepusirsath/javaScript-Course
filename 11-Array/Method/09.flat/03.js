// Example 3: flat() to Remove Holes in Array

// array with empty slots
let array_with_holes = [1, , 3];

// removes holes in the array
let flattedArray = array_with_holes.flat();

console.log(flattedArray); // [ 1, 3 ]
