// The reduceRight() method reduces the array to a single value by executing a callback function on two values of the array (from right to left).

// Example

let numbers = [1, 2, 3, 4];

// function that adds last two values of the numbers array
function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

// returns a single value after reducing the numbers array
let sum = numbers.reduceRight(sum_reducer);

console.log(sum);

// Output: 10

// Notes:

// reduceRight() executes the given function for each value from right to left.

// reduceRight() does not change the original array.

// It is almost always safer to provide initialValue.
