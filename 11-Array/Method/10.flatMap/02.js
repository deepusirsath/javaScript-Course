// Using flatMap() Method

// defining an array
let numbers = [1, 2, 3, 4, 5];

// each element of the array is incremented by 1
// and later the array is flattened
let resultingArray = numbers.flatMap((element) => element + 1);

console.log(resultingArray);

//[ 2, 3, 4, 5, 6 ]
