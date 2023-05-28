// More About Array Iterator Object
// The array iterator object does not store values rather it stores the address of the array used. For example:

let fruits = ["Apple", "Banana", "Grapes"];

// returns values of each index in the fruits array
let iteratorObject = fruits.values();

// accessing the value of index 0 in the array
console.log(iteratorObject.next().value); // Apple

// changing the value of index 1
fruits[1] = "Cherry";

// accessing the value of index 1 in the array
console.log(iteratorObject.next().value); // Cherry

// Output

// Apple
// Cherry
