// Using values() in Arrays with Holes
// The values() method does not ignore holes in the array. It returns undefined for empty slots in the array.

let arrayWithHole = ["A", "B", , "C"];

// returns 'undefined' as a value for empty slot
let iteratorObject = arrayWithHole.values();

// looping through iterator
for (let value of iteratorObject) {
  console.log(value);
}

// A
// B
// undefined
// C
