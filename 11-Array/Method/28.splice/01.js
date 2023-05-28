//the splice() method returns an array by changing (adding/removing) its elements in place.

Example;
let prime_numbers = [2, 3, 5, 7, 9, 11];

// replace 1 element from index 4 by 13
let removedElement = prime_numbers.splice(4, 1, 13);
console.log(removedElement);
console.log(prime_numbers);

// Output: [ 9 ]
//         [ 2, 3, 5, 7, 13, 11 ]

// splice() Return Value

// Returns an array containing the deleted elements.
// Note: The splice() method changes the original array.
