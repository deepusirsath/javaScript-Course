//The entries() method returns a new Array Iterator object containing key/value pairs for each array index.

// defining an array named alphabets
const alphabets = ["A", "B", "C"];

// array iterator object that contains
// key-value pairs for each index in the array
let iterator = alphabets.entries();

// iterating through key-value pairs in the array
for (let entry of iterator) {
  console.log(entry);
}

// Output:
// [ 0, 'A' ]
// [ 1, 'B' ]
// [ 2, 'C' ]

// entries() Parameters
// The entries() method does not take any parameters.

// entries() Return Value
// Returns a new Array iterator object.

// Note: The entries() method does not change the original array.
