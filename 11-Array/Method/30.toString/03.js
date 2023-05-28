// toString() with Nested Arrays
// When we use the toString() method in a nested array, the array is flattened. For example:

// defining a nested array
let nestedArray = [1, 2, 4, ["Apple", 5]];

// returns string representation of the nested array by flattening the array
let resultingArray = nestedArray.toString();

console.log(resultingArray);

// 1,2,4,Apple,5
