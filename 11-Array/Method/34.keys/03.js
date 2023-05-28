// Using key() Method in Array with Holes
// The iterator object doesn't skip holes in the array. It also holds the key for empty slots in the array. For example:

let vehicle = ["car", "bus", , "van", "truck"];

// returns an Array Iterator Object that contains keys
let iterator = vehicle.keys();

// looping through the iterator object
for (let key of iterator) {
  console.log(key);
}

// 0
// 1
// 2
// 3
// 4
