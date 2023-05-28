// Using flat() and map() Instead of flatMap()

// defining an array
let numbers = [1, 2, 3, 4, 5];

// incrementing each element of array using map()
let afterMapping = numbers.map((element) => element + 2);

// flattening the array using flat()
let afterFlattening = afterMapping.flat();

console.log(afterFlattening); // [ 3, 4, 5, 6, 7 ]

// using flatMap() instead of flat() and map()
let after_flatMap = numbers.flatMap((element) => element + 2);

console.log(after_flatMap); // [ 3, 4, 5, 6, 7 ]
