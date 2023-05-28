// The reduce() method executes a reducer function on each element of the array and returns a single output value.

// Example

const message = ["JavaScript ", "is ", "fun."];

// function to join each string elements
function joinStrings(accumulator, currentValue) {
  return accumulator + currentValue;
}

// reduce join each element of the string
let joinedString = message.reduce(joinStrings);
console.log(joinedString);

// Output: JavaScript is fun.

// Notes:

// reduce() executes the given function for each value from left to right.
// reduce() does not change the original array.
// It is almost always safer to provide initialValue.
