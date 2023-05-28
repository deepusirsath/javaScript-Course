// The keys() method returns a new Array Iterator object that contains the keys for each element in the array.

// Example

let alphabets = ["A", "B", "C"];

// returns an Array Iterator object that contains the keys
let iterator = alphabets.keys();

// looping through the Iterator object
for (let key of iterator) {
  console.log(key);
}

// Output:
// 0
// 1
// 2
